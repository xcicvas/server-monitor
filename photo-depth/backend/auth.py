"""
简单 JWT Token 认证
"""

import os
import secrets
from datetime import datetime, timedelta, timezone
from typing import Optional

from fastapi import HTTPException, Header
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt, JWTError
from passlib.context import CryptContext

from store import store

# 简单固定 secret，实际建议换成环境变量
JWT_SECRET = os.environ.get("JWT_SECRET", secrets.token_hex(32))
JWT_ALGORITHM = "HS256"
JWT_EXPIRE_HOURS = 24

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
security = HTTPBearer(auto_error=False)


def hash_password(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(plain: str, hashed: str) -> bool:
    return pwd_context.verify(plain, hashed)


def create_token(data: dict) -> str:
    expire = datetime.now(timezone.utc) + timedelta(hours=JWT_EXPIRE_HOURS)
    payload = {**data, "exp": expire}
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)


def decode_token(token: str) -> Optional[dict]:
    try:
        return jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
    except JWTError:
        return None


def get_current_user(cred: Optional[HTTPAuthorizationCredentials] = None):
    """验证 Token，返回用户信息。用于需要登录的管理接口"""
    if not cred:
        raise HTTPException(401, "未提供认证 Token")

    payload = decode_token(cred.credentials)
    if not payload:
        raise HTTPException(401, "Token 无效或已过期")

    return payload.get("sub", "admin")


def require_auth(cred: Optional[HTTPAuthorizationCredentials] = None):
    """依赖：需要有效 Token"""
    return get_current_user(cred)


def get_optional_user(cred: Optional[HTTPAuthorizationCredentials] = None) -> Optional[str]:
    """依赖：可选 Token"""
    if not cred:
        return None
    payload = decode_token(cred.credentials)
    return payload.get("sub") if payload else None
