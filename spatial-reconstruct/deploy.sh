#!/bin/bash
# =============================================
# Spatial Reconstruct 一键部署脚本
# =============================================
#
# 用法: 直接在服务器上运行即可
#   bash <(curl -sL https://raw.githubusercontent.com/xcicvas/server-monitor/main/spatial-reconstruct/deploy.sh)
#
# =============================================

set -e

TARGET_DIR="/var/www/spatial-reconstruct"
REPO_URL="https://github.com/xcicvas/server-monitor.git"
BRANCH="main"

echo "=========================================="
echo "  Spatial Reconstruct 一键部署脚本"
echo "=========================================="

# 1. 安装 nginx
echo "[1/4] 检查并安装 nginx..."
if ! command -v nginx &> /dev/null; then
    apt-get update -qq
    apt-get install -y nginx > /dev/null 2>&1
    echo "  nginx 安装完成"
else
    echo "  nginx 已安装，跳过"
fi

# 2. 用 git sparse-checkout 只克隆 spatial-reconstruct 文件夹
echo "[2/4] 下载 spatial-reconstruct 文件..."
if [ -d "$TARGET_DIR/.git" ]; then
    echo "  检测到已有仓库，执行 git pull..."
    git -C "$TARGET_DIR" pull
else
    echo "  克隆仓库（只取 spatial-reconstruct 文件夹）..."
    rm -rf "$TARGET_DIR"
    mkdir -p "$TARGET_DIR"
    git clone --depth=1 --filter=blob:none --sparse "$REPO_URL" "$TARGET_DIR"
    git -C "$TARGET_DIR" sparse-checkout set spatial-reconstruct
    git -C "$TARGET_DIR" checkout "$BRANCH"
fi

echo "  文件列表:"
ls -la "$TARGET_DIR/spatial-reconstruct/"

# 3. 配置 nginx
echo "[3/4] 配置 nginx..."
SITE_CONFIG="/etc/nginx/sites-available/spatial-reconstruct"

cat > "$SITE_CONFIG" << 'NGINX_EOF'
server {
    listen 80;
    server_name _;

    root /var/www/spatial-reconstruct/spatial-reconstruct;
    index index.html;

    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
    gzip_min_length 1000;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
NGINX_EOF

ln -sf "$SITE_CONFIG" /etc/nginx/sites-enabled/spatial-reconstruct
[ -f /etc/nginx/sites-enabled/default ] && rm -f /etc/nginx/sites-enabled/default
nginx -t

# 4. 启动 nginx
echo "[4/4] 启动 nginx..."
systemctl restart nginx
systemctl enable nginx > /dev/null 2>&1
(command -v ufw &> /dev/null && ufw allow 80/tcp 2>/dev/null) || true

IP=$(curl -s ifconfig.me 2>/dev/null || echo "你的服务器IP")
echo ""
echo "=========================================="
echo "  部署完成！"
echo "=========================================="
echo "  访问地址: http://$IP/"
echo "  文件目录: $TARGET_DIR/spatial-reconstruct"
echo ""
echo "  更新部署: bash <(curl -sL https://raw.githubusercontent.com/xcicvas/server-monitor/main/spatial-reconstruct/deploy.sh)"
echo ""
