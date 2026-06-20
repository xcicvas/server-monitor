FROM python:3.11-slim

WORKDIR /app

# 安装系统依赖
RUN apt-get update && apt-get install -y --no-install-recommends \
    libgl1-mesa-glx \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender1 \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# 升级 pip
RUN pip install --no-cache-dir --upgrade pip

# 安装 PyTorch (CPU 版本用于容器)
# GPU 版本用户需根据自己 CUDA 版本安装
ARG TORCH_INDEX_URL=https://download.pytorch.org/whl/cpu
RUN pip install --no-cache-dir torch --index-url ${TORCH_INDEX_URL:-https://download.pytorch.org/whl/cpu}

# 安装其他依赖
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 克隆并安装 depth-pro
RUN git clone https://github.com/apple/ml-depth-pro.git /tmp/depth-pro \
    && pip install --no-cache-dir -e /tmp/depth-pro \
    && rm -rf /tmp/depth-pro

# 复制代码
COPY . .

# 预下载模型（可选，会在首次运行时下载）
ENV MODEL_CACHE_DIR=/model-cache
ENV MAX_IMAGE_SIZE=4096

# 端口
EXPOSE 8000

# 启动
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
