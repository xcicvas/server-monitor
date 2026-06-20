# Spatial Reconstruct API

## 1. 项目概述

基于 Apple **Depth Pro** 单目度量深度估计 + 前端 **Three.js** 视差渲染的空间重构网站。

## 2. 架构

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   前端 (React)  │────▶│  后端 (FastAPI) │────▶│  Depth Pro      │
│   Three.js     │◀────│  Python         │◀────│  PyTorch Model  │
│   3D视差渲染   │     │  深度估计API    │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

## 3. API 设计

### POST /api/estimate-depth

上传图片，返回深度图数据。

**Request:**
- Content-Type: `multipart/form-data`
- Body: `file` - 图片文件 (JPEG/PNG/WebP)

**Response (200):**
```json
{
  "depth_image": "data:image/png;base64,...",   // 可视化深度图
  "depth_data": [0.5, 0.6, ...],                 // 深度值数组（米）
  "width": 1024,
  "height": 768,
  "focal_length_px": 856.3,                       // 估计的焦距（像素）
  "processing_time_ms": 312
}
```

**Error (400/500):**
```json
{
  "error": "不支持的图片格式或图片过大"
}
```

### GET /api/health

健康检查。

## 4. 技术栈

**后端:**
- FastAPI (异步 Web 框架)
- Depth Pro (Apple 官方 PyTorch 深度估计模型)
- PyTorch (推理引擎)
- NumPy / Pillow (图像处理)

**前端:**
- React 18 + TypeScript + Vite
- Three.js (3D 渲染)
- Tailwind CSS

## 5. 深度估计算法（Depth Pro）

Depth Pro 核心特性：
- 零样本单目度量深度估计
- 不需要相机内参，自动从图像估计焦距
- 输出绝对尺度（米）
- 高分辨率（2.25MP）0.3秒推理
- 边界锐利（专门针对细小结构优化）

### 推理流程

```
输入图像 → ViT 特征编码 → 多尺度解码 → 深度图 + 焦距
```

## 6. 前端 3D 视差渲染

基于深度图的视差效果：
- 原始图片作为纹理
- 深度图驱动 UV 位移
- 鼠标/触摸改变视角偏移量
- 深度越大（前景区）位移越大

### Shader 逻辑

```glsl
// fragment shader
float depth = texture2D(uDepth, vUv).r;
vec2 offset = vec2(rotationY, -rotationX) * depth * strength;
vec2 uv = vUv + offset;
vec4 color = texture2D(uTexture, uv);
```

## 7. 部署

### Docker Compose

```yaml
services:
  backend:
    build: ./backend
    ports:
      - "8000:8000"
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: 1
              capabilities: [gpu]
    # 或者无GPU版本
    # environment:
    #   - CUDA_VISIBLE_DEVICES=-1

  frontend:
    build: ./frontend
    ports:
      - "3000:80"
    depends_on:
      - backend
```

### NVIDIA GPU 支持

需要 nvidia-docker 和 CUDA 驱动。

### CPU 模式

设置 `CUDA_VISIBLE_DEVICES=-1`，使用 MPS (Mac) 或 CPU 推理，速度较慢。

## 8. 环境变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `MODEL_CACHE_DIR` | `/model-cache` | 模型缓存目录 |
| `MAX_IMAGE_SIZE` | `4096` | 最大图片边长 |
| `CUDA_VISIBLE_DEVICES` | `0` | GPU 设备编号，设为 `-1` 则用 CPU |

## 9. 性能目标

| 指标 | 目标 |
|------|------|
| 深度估计延迟 | < 1 秒 (GPU) / < 10 秒 (CPU/MPS) |
| 深度图分辨率 | 2.25MP (V100) 或 原图分辨率 |
| 前端渲染帧率 | 60 FPS |
| 支持图片格式 | JPEG, PNG, WebP |
