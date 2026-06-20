# Spatial Reconstruct

基于 Apple **Depth Pro** 单目度量深度估计 + **Three.js** 3D 视差渲染的空间重构网站。

## 技术栈

| 层 | 技术 |
|----|------|
| 前端 | React 18 + TypeScript + Vite + Three.js + Tailwind CSS |
| 后端 | FastAPI (Python) + Depth Pro (PyTorch) |
| 模型 | Apple Depth Pro (零样本度量深度估计) |

## 功能

- 上传任意照片，Depth Pro 自动估计度量深度（米）
- 3D 视差渲染，鼠标/触摸交互
- 三种视图模式：3D视差 / 原图 / 深度可视化
- 深度强度实时调节
- 视角锁定
- 处理耗时显示

## 快速部署（Docker）

### GPU 服务器（推荐）

```bash
# 克隆项目
git clone https://github.com/xcicvas/server-monitor.git
cd server-monitor/spatial-reconstruct-api

# 启动（需要 NVIDIA GPU + nvidia-docker）
docker-compose up --build
```

访问 **http://你的服务器IP:3000**

### CPU 服务器

```bash
docker-compose -f docker-compose.yml -f docker-compose.cpu.yml up --build
```

### 单独部署后端（不用 Docker）

```bash
cd backend

# 安装依赖
pip install -r requirements.txt
git clone https://github.com/apple/ml-depth-pro.git /tmp/depth-pro
pip install -e /tmp/depth-pro

# 运行
python main.py
# 或
uvicorn main:app --host 0.0.0.0 --port 8000
```

API 地址: `http://localhost:8000`

### 单独部署前端

```bash
cd frontend
npm install
npm run build
# dist/ 里的内容放到 nginx 的 /usr/share/nginx/html
```

## API

### POST /api/estimate-depth

上传图片，返回深度数据。

```bash
curl -X POST http://localhost:8000/api/estimate-depth \
  -F "file=@photo.jpg"
```

返回:

```json
{
  "original_image": "data:image/jpeg;base64,...",
  "depth_image": "data:image/png;base64,...",
  "depth_data": "base64-encoded-float32array",
  "width": 4032,
  "height": 3024,
  "focal_length_px": 856.3,
  "depth_min": 0.5,
  "depth_max": 150.2,
  "processing_time_ms": 312.5
}
```

### POST /api/estimate-depth-fast

只返回可视化深度图（不含深度数组），更快。

### GET /api/health

健康检查。

## 开发

### 前端开发

```bash
cd frontend
npm install
VITE_API_BASE=http://localhost:8000/api npm run dev
```

### 后端开发

```bash
cd backend
pip install -r requirements.txt
pip install -e https://github.com/apple/ml-depth-pro.git
python main.py
```

## 环境变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `CUDA_VISIBLE_DEVICES` | `0` | GPU 编号，`-1` 表示 CPU |
| `MODEL_CACHE_DIR` | `/model-cache` | 模型缓存目录 |
| `MAX_IMAGE_SIZE` | `4096` | 最大图片边长 |

## 硬件要求

| 配置 | 深度估计速度 |
|------|-------------|
| NVIDIA V100/A100 (GPU) | ~300ms / 张 |
| Mac M1/M2/M3 (MPS) | ~1-2s / 张 |
| CPU (x86) | ~5-10s / 张 |
