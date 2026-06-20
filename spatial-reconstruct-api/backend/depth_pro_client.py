"""
Depth Pro 模型封装 - Apple 官方实现
https://github.com/apple/ml-depth-pro
"""

import os
import time
import logging
from pathlib import Path
from typing import Optional, Tuple

import numpy as np
import torch
from PIL import Image
import matplotlib.pyplot as plt
import matplotlib.cm as cm

logger = logging.getLogger(__name__)

# 模型缓存目录
MODEL_CACHE_DIR = os.environ.get("MODEL_CACHE_DIR", "/model-cache")
MODEL_CACHE_DIR = Path(MODEL_CACHE_DIR)


def get_device() -> torch.device:
    """自动选择设备: CUDA > MPS > CPU"""
    if torch.cuda.is_available():
        return torch.device("cuda:0")
    elif hasattr(torch.backends, "mps") and torch.backends.mps.is_available():
        return torch.device("mps")
    return torch.device("cpu")


def download_model_if_needed():
    """从 HuggingFace 下载 Depth Pro 模型"""
    try:
        from huggingface_hub import snapshot_download
    except ImportError:
        logger.warning("huggingface_hub not installed, trying torch.hub")
        return None

    try:
        cache_dir = MODEL_CACHE_DIR / "depth_pro"
        cache_dir.mkdir(parents=True, exist_ok=True)
        snapshot_download(
            repo_id="apple/DepthPro",
            local_dir=str(cache_dir),
            local_dir_use_symlinks=False,
        )
        logger.info(f"Model downloaded to {cache_dir}")
        return str(cache_dir)
    except Exception as e:
        logger.warning(f"Failed to download model: {e}")
        return None


def import_depth_pro():
    """动态导入 depth_pro 模块"""
    try:
        import depth_pro
        return depth_pro
    except ImportError:
        pass

    # 尝试从 model cache 导入
    model_dir = MODEL_CACHE_DIR / "depth_pro"
    if model_dir.exists():
        import sys
        sys.path.insert(0, "/tmp")
        # depth_pro 不在 pip，需要从源码导入
        pass

    return None


class DepthProClient:
    """Depth Pro 推理客户端"""

    def __init__(self, device: Optional[torch.device] = None, precision=torch.float32):
        self.device = device or get_device()
        self.precision = precision
        self.model = None
        self.transform = None
        self._loaded = False

    def load(self):
        """加载模型"""
        if self._loaded:
            return

        logger.info(f"Loading Depth Pro on {self.device}...")

        # 方法1: pip install depth-pro
        try:
            import depth_pro
            model, transform = depth_pro.create_model_and_transforms(
                device=self.device,
                precision=self.precision,
            )
            self.model = model
            self.transform = transform
            self._loaded = True
            logger.info("Depth Pro loaded successfully (pip install depth-pro)")
            return
        except ImportError:
            logger.info("depth-pro pip package not available, trying manual setup")

        # 方法2: 从 GitHub 克隆后本地安装
        try:
            import subprocess
            subprocess.run(
                ["pip", "install", "-e",
                 "https://github.com/apple/ml-depth-pro.git"],
                capture_output=True, timeout=120
            )
            import depth_pro
            model, transform = depth_pro.create_model_and_transforms(
                device=self.device,
                precision=self.precision,
            )
            self.model = model
            self.transform = transform
            self._loaded = True
            logger.info("Depth Pro loaded successfully (git clone + pip install)")
            return
        except Exception as e:
            logger.warning(f"Failed to install depth-pro from git: {e}")

        raise RuntimeError(
            "Depth Pro not available. Please install with:\n"
            "  pip install depth-pro\n"
            "or:\n"
            "  git clone https://github.com/apple/ml-depth-pro && pip install -e ./ml-depth-pro"
        )

    def estimate_depth(self, image: Image.Image) -> dict:
        """
        对图片进行深度估计

        Args:
            image: PIL.Image (RGB)

        Returns:
            dict with keys:
                - depth: np.ndarray [H, W] 深度值（米）
                - depth_vis: np.ndarray [H, W, 3] 可视化深度图 (RGB)
                - focal_length_px: float 估计的焦距（像素）
                - width: int 宽度
                - height: int 高度
                - processing_time_ms: float 处理时间
        """
        if not self._loaded:
            self.load()

        start = time.time()

        # 确保 RGB
        if image.mode != "RGB":
            image = image.convert("RGB")

        w, h = image.size

        # 预处理
        image_tensor, _, f_px = self._load_and_preprocess(image)

        # 推理
        prediction = self.model.infer(image_tensor, f_px=f_px)

        # 提取结果
        depth = prediction["depth"].detach().cpu().numpy().squeeze()
        focallength_px = prediction.get("focallength_px")
        if focallength_px is not None:
            focallength_px = focallength_px.detach().cpu().item()

        processing_time_ms = (time.time() - start) * 1000

        # 生成可视化深度图
        depth_vis = self._visualize_depth(depth)

        return {
            "depth": depth,  # [H, W] float32, 米
            "depth_vis": depth_vis,  # [H, W, 3] uint8
            "focal_length_px": focallength_px,
            "width": w,
            "height": h,
            "processing_time_ms": round(processing_time_ms, 1),
        }

    def _load_and_preprocess(self, image: Image.Image):
        """预处理图片（模拟 depth_pro.load_rgb 和 transform）"""
        # 缩放到合理大小，保留宽高比
        max_size = int(os.environ.get("MAX_IMAGE_SIZE", "4096"))
        image.thumbnail((max_size, max_size), Image.LANCZOS)

        # 转换为 tensor [1, 3, H, W], 归一化到 [0, 1]
        img_np = np.array(image).astype(np.float32) / 255.0
        # ImageNet 归一化
        mean = np.array([0.485, 0.456, 0.406])
        std = np.array([0.229, 0.224, 0.225])
        img_np = (img_np - mean) / std

        # CHW format
        img_np = img_np.transpose(2, 0, 1)
        img_tensor = torch.from_numpy(img_np).unsqueeze(0).to(self.device)

        # 焦距从 EXIF 或自动估计（Depth Pro 可以自动估计）
        f_px = None  # 让模型自动估计焦距

        return img_tensor, image.size, f_px

    def _visualize_depth(self, depth: np.ndarray) -> np.ndarray:
        """将深度图转换为可视化彩色图"""
        # 使用 inverse depth 进行可视化（效果更好）
        # 裁剪到合理范围 [0.1m, 250m]
        d = np.clip(depth, 0.1, 250.0)
        inv_d = 1.0 / d

        inv_d_min, inv_d_max = inv_d.min(), inv_d.max()
        if inv_d_max > inv_d_min:
            inv_d_norm = (inv_d - inv_d_min) / (inv_d_max - inv_d_min)
        else:
            inv_d_norm = inv_d * 0

        # turbo colormap (与 Depth Pro 官方一致)
        cmap = cm.get_cmap("turbo")
        vis = cmap(inv_d_norm)[..., :3]  # [H, W, 3] RGBA -> RGB
        vis = (vis * 255).astype(np.uint8)

        return vis

    def estimate_depth_from_bytes(self, image_bytes: bytes) -> dict:
        """从字节数据估计深度"""
        image = Image.open(io.BytesIO(image_bytes))
        return self.estimate_depth(image)


# 全局单例
_client: Optional[DepthProClient] = None


def get_client() -> DepthProClient:
    global _client
    if _client is None:
        _client = DepthProClient()
    return _client
