"""
Spatial Reconstruct API - FastAPI 后端
代理 Replicate API + 管理后台
"""

import os
import io
import time
import asyncio
import logging
import base64
import httpx
from pathlib import Path
from datetime import datetime, timezone

from fastapi import FastAPI, UploadFile, File, HTTPException, Depends, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.security import HTTPBearer
from PIL import Image
from pydantic import BaseModel

from store import store, Settings
from auth import (
    hash_password, verify_password, create_token,
    get_current_user, get_optional_user, require_auth
)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Spatial Reconstruct API", version="2.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

REPLICATE_MODEL = "cjwbw/midas:58c3163b2a54e2c1f6e2e8d05a71c6e1"

# ── 公开接口 ───────────────────────────────────────────────

@app.get("/api/health")
async def health():
    s = store.get_settings()
    return {
        "status": "ok",
        "api_key_configured": s.has_api_key(),
        "admin_configured": s.has_admin(),
    }


class EstimateResponse(BaseModel):
    original_image: str
    depth_image: str
    width: int
    height: int
    processing_time_ms: float


@app.post("/api/estimate-depth", response_model=EstimateResponse)
async def estimate_depth(
    file: UploadFile = File(...),
    _user: str = Depends(get_optional_user),
):
    """
    上传图片 → 调用 Replicate MiDaS API → 返回深度图
    无需登录，任何人都能用
    """
    s = store.get_settings()
    if not s.has_api_key():
        raise HTTPException(500, "管理员未配置 Replicate API Key，请到后台设置")

    # 验证文件
    if not file.content_type or not file.content_type.startswith("image/"):
        raise HTTPException(400, "不支持的文件类型，请上传 JPEG/PNG/WebP 图片")

    start = time.time()
    try:
        contents = await file.read()
        if len(contents) > 20 * 1024 * 1024:
            raise HTTPException(400, "图片过大，最大 20MB")

        # 调用 Replicate
        async with httpx.AsyncClient(timeout=120.0) as client:
            # 1. 上传图片到 Replicate
            img = Image.open(io.BytesIO(contents))
            if img.mode != "RGB":
                img = img.convert("RGB")
            buf = io.BytesIO()
            img.save(buf, format="JPEG", quality=90)
            buf.seek(0)

            files = {"image": ("image.jpg", buf, "image/jpeg")}

            # 2. 创建预测
            headers = {
                "Authorization": f"Token {s.api_key}",
                "Content-Type": "application/json",
            }
            create_payload = {
                "version": REPLICATE_MODEL.split(":")[1],
                "input": {
                    "image": buf.getvalue().hex(),  # Replicate 支持 hex
                    "model_type": "dense",
                }
            }

            # 实际上 Replicate 的 /predictions 需要分步，这里用更简单的方式
            # 直接用 Replicate Python SDK 的 HTTP 方式
            # 我们用 replicate-py 兼容的 API

            # 简化：直接用 Replicate REST API
            create_resp = await client.post(
                "https://api.replicate.com/v1/predictions",
                headers=headers,
                json={
                    "version": REPLICATE_MODEL.split(":")[1],
                    "input": {
                        "image": base64.b64encode(buf.getvalue()).decode(),
                        "model_type": "dense",
                    }
                },
            )

            if create_resp.status_code == 429:
                raise HTTPException(429, "Replicate API 配额用尽，请稍后再试")
            if create_resp.status_code != 201:
                err = create_resp.text
                logger.error(f"Replicate create error: {err}")
                raise HTTPException(502, f"Replicate API 错误: {err[:200]}")

            prediction_url = create_resp.json()["urls"]["get"]
            poll_url = create_resp.json()["urls"]["cancel"]

            # 3. 轮询结果
            for _ in range(60):  # 最多等 60 * 2 = 120 秒
                await asyncio.sleep(2)
                poll_resp = await client.get(prediction_url, headers=headers)
                data = poll_resp.json()
                status = data.get("status")

                if status == "succeeded":
                    depth_output = data["output"]
                    if isinstance(depth_output, list):
                        depth_output = depth_output[-1]

                    # depth_output 是一个 URL 或 base64
                    depth_b64 = depth_output
                    if depth_output.startswith("http"):
                        depth_resp = await client.get(depth_output)
                        depth_b64 = base64.b64encode(depth_resp.content).decode()

                    processing_ms = (time.time() - start) * 1000
                    store.record_call(True, processing_ms)

                    # 原始图也返回 base64
                    original_b64 = base64.b64encode(contents).decode()
                    orig_type = file.content_type or "image/jpeg"

                    return EstimateResponse(
                        original_image=f"data:{orig_type};base64,{original_b64}",
                        depth_image=f"data:image/png;base64,{depth_b64}",
                        width=img.width,
                        height=img.height,
                        processing_time_ms=round(processing_ms, 1),
                    )

                elif status == "failed":
                    store.record_call(False, (time.time() - start) * 1000)
                    raise HTTPException(502, "Replicate 推理失败")

            store.record_call(False, (time.time() - start) * 1000)
            raise HTTPException(504, "推理超时")

    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Estimate depth error")
        store.record_call(False, (time.time() - start) * 1000)
        raise HTTPException(500, f"处理失败: {str(e)[:200]}")


# ── 认证接口 ───────────────────────────────────────────────

class LoginRequest(BaseModel):
    password: str


class LoginResponse(BaseModel):
    token: str
    admin_configured: bool


@app.post("/api/admin/login", response_model=LoginResponse)
async def login(body: LoginRequest):
    """登录后台"""
    s = store.get_settings()

    if not s.has_admin():
        # 首次：设置管理员密码
        hashed = hash_password(body.password)
        store.set_admin_password(hashed)
        token = create_token({"sub": "admin"})
        return LoginResponse(token=token, admin_configured=True)

    # 验证密码
    if not verify_password(body.password, s.admin_password_hash):
        raise HTTPException(401, "密码错误")

    token = create_token({"sub": "admin"})
    return LoginResponse(token=token, admin_configured=True)


@app.post("/api/admin/logout")
async def logout(_user: str = Depends(require_auth)):
    return {"ok": True}


# ── 管理接口（需登录）──────────────────────────────────────

class SetKeyRequest(BaseModel):
    api_key: str


@app.post("/api/admin/settings/api-key")
async def set_api_key(
    body: SetKeyRequest,
    _user: str = Depends(require_auth),
):
    key = body.api_key.strip()
    if not key:
        raise HTTPException(400, "API Key 不能为空")
    store.set_api_key(key)
    return {"ok": True, "message": "API Key 已保存"}


@app.get("/api/admin/settings/status")
async def settings_status(_user: str = Depends(require_auth)):
    s = store.get_settings()
    # 不返回 key 内容，只返回是否配置
    return {
        "api_key_configured": s.has_api_key(),
        "repl_model": s.repl_model_id,
    }


@app.get("/api/admin/stats")
async def get_stats(_user: str = Depends(require_auth)):
    """获取使用统计"""
    stats = store.get_daily_stats()
    recent = store.get_stats().recent_logs[:20]
    return {**stats, "recent_logs": recent}


@app.post("/api/admin/stats/reset")
async def reset_stats(_user: str = Depends(require_auth)):
    """重置统计（保留 API Key）"""
    import shutil
    from store import STATS_FILE
    if STATS_FILE.exists():
        STATS_FILE.unlink()
    return {"ok": True}


@app.post("/api/admin/change-password")
async def change_password(
    body: LoginRequest,
    _user: str = Depends(require_auth),
):
    hashed = hash_password(body.password)
    store.set_admin_password(hashed)
    return {"ok": True}


# ── 首次设置引导 ───────────────────────────────────────────

@app.get("/api/admin/first-run")
async def first_run():
    """检查是否需要首次设置"""
    s = store.get_settings()
    return {
        "needs_setup": not s.has_admin(),
        "api_key_configured": s.has_api_key(),
    }


if __name__ == "__main__":
    import uvicorn
    import asyncio
    uvicorn.run(app, host="0.0.0.0", port=8000)
