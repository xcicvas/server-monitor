"""
轻量级 JSON 文件存储（无需数据库）
- settings.json: API Key、管理员密码等配置
- stats.json: 调用统计
"""

import json
import os
import time
import threading
from pathlib import Path
from dataclasses import dataclass, field, asdict
from typing import Optional
from datetime import datetime

DATA_DIR = Path("/data")
DATA_DIR.mkdir(exist_ok=True)

SETTINGS_FILE = DATA_DIR / "settings.json"
STATS_FILE = DATA_DIR / "stats.json"
LOCK_FILE = DATA_DIR / ".lock"


def _lock():
    """简单文件锁"""
    while LOCK_FILE.exists():
        time.sleep(0.01)
    LOCK_FILE.touch()


def _unlock():
    LOCK_FILE.unlink(missing_ok=True)


@dataclass
class Stats:
    total_calls: int = 0
    success_calls: int = 0
    error_calls: int = 0
    total_processing_ms: int = 0
    last_call_at: Optional[str] = None
    # 最近 N 条记录
    recent_logs: list = field(default_factory=list)
    daily_counts: dict = field(default_factory=dict)  # {"2025-01-15": 42}

    def record(self, success: bool, processing_ms: int):
        self.total_calls += 1
        if success:
            self.success_calls += 1
        else:
            self.error_calls += 1
        self.total_processing_ms += processing_ms
        self.last_call_at = datetime.now().isoformat()

        today = datetime.now().strftime("%Y-%m-%d")
        self.daily_counts[today] = self.daily_counts.get(today, 0) + 1

        # 最近 100 条
        self.recent_logs.insert(0, {
            "at": datetime.now().isoformat(),
            "success": success,
            "ms": processing_ms,
        })
        self.recent_logs = self.recent_logs[:100]


@dataclass
class Settings:
    api_key: str = ""
    admin_password_hash: str = ""
    repl_model_id: str = "cjwbw/midas:58c3163b2a54e2c1f6e2e8d05a71c6e1"
    repl_api_base: str = "https://api.replicate.com"

    def has_api_key(self) -> bool:
        return bool(self.api_key.strip())

    def has_admin(self) -> bool:
        return bool(self.admin_password_hash.strip())


class Store:
    _stats: Stats = Stats()
    _settings: Settings = Settings()
    _initialized: bool = False
    _mu: threading.Lock = threading.Lock()

    def __init__(self):
        self._load_all()

    def _load_all(self):
        with self._mu:
            if SETTINGS_FILE.exists():
                try:
                    data = json.loads(SETTINGS_FILE.read_text())
                    self._settings = Settings(**data)
                except Exception:
                    pass
            if STATS_FILE.exists():
                try:
                    data = json.loads(STATS_FILE.read_text())
                    # recent_logs 可能是 dict 需要特殊处理
                    if "recent_logs" in data:
                        data["recent_logs"] = [
                            l if isinstance(l, dict) else {"at": l}
                            for l in data["recent_logs"]
                        ]
                    self._stats = Stats(**data)
                except Exception:
                    pass
            self._initialized = True

    def _save_settings(self):
        _lock()
        try:
            SETTINGS_FILE.write_text(json.dumps(asdict(self._settings), indent=2))
        finally:
            _unlock()

    def _save_stats(self):
        _lock()
        try:
            STATS_FILE.write_text(json.dumps(asdict(self._stats), indent=2))
        finally:
            _unlock()

    # ── Settings ──────────────────────────────────────────
    def get_settings(self) -> Settings:
        return self._settings

    def set_api_key(self, key: str):
        with self._mu:
            self._settings.api_key = key.strip()
            self._save_settings()

    def set_admin_password(self, password_hash: str):
        with self._mu:
            self._settings.admin_password_hash = password_hash
            self._save_settings()

    # ── Stats ─────────────────────────────────────────────
    def record_call(self, success: bool, processing_ms: int):
        with self._mu:
            self._stats.record(success, processing_ms)
            self._save_stats()

    def get_stats(self) -> Stats:
        return self._stats

    def get_daily_stats(self) -> dict:
        today = datetime.now().strftime("%Y-%m-%d")
        with self._mu:
            today_count = self._stats.daily_counts.get(today, 0)
            return {
                "total": self._stats.total_calls,
                "success": self._stats.success_calls,
                "errors": self._stats.error_calls,
                "today": today_count,
                "avg_ms": (
                    round(self._stats.total_processing_ms / self._stats.total_calls)
                    if self._stats.total_calls > 0 else 0
                ),
                "last_call_at": self._stats.last_call_at,
            }


# 全局单例
store = Store()
