"""
Spatial Reconstruct API - FastAPI 后端
基于 Apple Depth Pro 的单目度量深度估计 API
"""

import io
import time
import logging
import base64
from pathlib import Path

from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from PIL import Image
import numpy as np

from depth_pro_client import DepthProClient, get_client, get_device

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="Spatial Reconstruct API",
    description="基于 Apple Depth Pro 的空间深度估计 API",
    version="1.0.0",
)

# CORS: 允许前端访问
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 模型全局加载
_depth_client: DepthProClient | None = None


def get_depth_client() -> DepthProClient:
    global _depth_client
    if _depth_client is None:
        logger.info(f"Initializing Depth Pro on {get_device()}...")
        _depth_client = DepthProClient()
        _depth_client.load()
        logger.info("Depth Pro ready!")
    return _depth_client


@app.on_event("startup")
async def startup_event():
    """启动时预热模型"""
    import threading
    t = threading.Thread(target=get_depth_client)
    t.start()
    logger.info("Model warmup started in background")


@app.get("/api/health")
async def health():
    """健康检查"""
    return {
        "status": "ok",
        "device": str(get_device()),
    }


@app.post("/api/estimate-depth")
async def estimate_depth(file: UploadFile = File(...)):
    """
    上传图片，获取深度图

    返回:
        - depth_image: base64 可视化深度图 (PNG)
        - depth_data: 深度值数组 (float32, 米)
        - width, height: 原始图片尺寸
        - focal_length_px: 估计的相机焦距
        - processing_time_ms: 推理耗时
    """
    # 1. 验证文件类型
    content_type = file.content_type or ""
    if not content_type.startswith("image/"):
        raise HTTPException(
            status_code=400,
            detail=f"不支持的文件类型: {content_type}。请上传 JPEG/PNG/WebP 图片。"
        )

    allowed_types = ["image/jpeg", "image/png", "image/webp"]
    if content_type not in allowed_types:
        raise HTTPException(
            status_code=400,
            detail=f"不支持的图片格式: {content_type}。支持: JPEG, PNG, WebP。"
        )

    # 2. 读取图片
    try:
        contents = await file.read()

        # 文件大小限制: 20MB
        if len(contents) > 20 * 1024 * 1024:
            raise HTTPException(
                status_code=400,
                detail="图片过大，请上传小于 20MB 的图片。"
            )

        image = Image.open(io.BytesIO(contents))

    except Exception as e:
        raise HTTPException(status_code=400, detail=f"无法读取图片: {str(e)}")

    # 3. 深度估计
    try:
        client = get_depth_client()
        result = client.estimate_depth(image)
    except Exception as e:
        logger.exception("Depth estimation failed")
        raise HTTPException(
            status_code=500,
            detail=f"深度估计失败: {str(e)}"
        )

    # 4. 编码结果
    # 4a. 可视化深度图 -> base64 PNG
    depth_vis = result["depth_vis"]  # [H, W, 3] uint8
    vis_pil = Image.fromarray(depth_vis, mode="RGB")
    buf = io.BytesIO()
    vis_pil.save(buf, format="PNG")
    depth_b64 = base64.b64encode(buf.getvalue()).decode("utf-8")
    depth_image_url = f"data:image/png;base64,{depth_b64}"

    # 4b. 深度数组 -> base64 (bytes 压缩后 base64)
    depth_flat = result["depth"].astype(np.float32).flatten()
    depth_bytes = depth_flat.tobytes()
    depth_data_b64 = base64.b64encode(depth_bytes).decode("utf-8")

    # 4c. 原始图片也返回 base64
    original_b64 = base64.b64encode(contents).decode("utf-8")
    original_url = f"data:{content_type};base64,{original_b64}"

    logger.info(
        f"Depth estimated: {result['width']}x{result['height']}, "
        f"focal={result['focal_length_px']:.1f}px, "
        f"took {result['processing_time_ms']:.0f}ms"
    )

    return JSONResponse({
        # 原始图片 base64
        "original_image": original_url,
        # 可视化深度图 base64
        "depth_image": depth_image_url,
        # 深度数据 (float32[], base64)
        "depth_data": depth_data_b64,
        "depth_width": result["depth"].shape[1],
        "depth_height": result["depth"].shape[0],
        # 图片尺寸
        "width": result["width"],
        "height": result["height"],
        # 相机焦距（像素）
        "focal_length_px": result["focal_length_px"],
        # 深度范围（米）
        "depth_min": float(result["depth"].min()),
        "depth_max": float(result["depth"].max()),
        # 推理耗时
        "processing_time_ms": result["processing_time_ms"],
    })


@app.post("/api/estimate-depth-fast")
async def estimate_depth_fast(file: UploadFile = File(...)):
    """
    快速模式：只返回可视化深度图，不返回原始 depth 数组。
    适合只需要看深度图、不需要3D交互的场景。
    """
    content_type = file.content_type or ""
    if not content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="不支持的文件类型")

    try:
        contents = await file.read()
        if len(contents) > 20 * 1024 * 1024:
            raise HTTPException(status_code=400, detail="图片过大")
        image = Image.open(io.BytesIO(contents))
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"无法读取图片: {str(e)}")

    try:
        client = get_depth_client()
        result = client.estimate_depth(image)
    except Exception as e:
        logger.exception("Depth estimation failed")
        raise HTTPException(status_code=500, detail=str(e))

    # 只返回可视化图
    depth_vis = result["depth_vis"]
    vis_pil = Image.fromarray(depth_vis, mode="RGB")
    buf = io.BytesIO()
    vis_pil.save(buf, format="PNG")
    depth_b64 = base64.b64encode(buf.getvalue()).decode("utf-8")

    return JSONResponse({
        "depth_image": f"data:image/png;base64,{depth_b64}",
        "width": result["width"],
        "height": result["height"],
        "processing_time_ms": result["processing_time_ms"],
    })


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
