#!/bin/bash
# =============================================
# Spatial Reconstruct 一键部署脚本
# =============================================
#
# 用法: 把这个脚本和 spatial-reconstruct.tar.gz 上传到服务器，
#       然后运行: bash deploy.sh
#
# 或者直接一行命令:
#   curl -sL https://raw.githubusercontent.com/xcicvas/server-monitor/main/spatial-reconstruct/deploy.sh | bash
#
# =============================================

set -e

TARGET_DIR="/var/www/spatial-reconstruct"
ARCHIVE_URL="https://github.com/xcicvas/server-monitor/raw/main/spatial-reconstruct/spatial-reconstruct.tar.gz"

echo "=========================================="
echo "  Spatial Reconstruct 一键部署脚本"
echo "=========================================="

# 1. 安装 nginx
echo "[1/5] 检查并安装 nginx..."
if ! command -v nginx &> /dev/null; then
    apt-get update -qq
    apt-get install -y nginx > /dev/null 2>&1
    echo "  nginx 安装完成"
else
    echo "  nginx 已安装，跳过"
fi

# 2. 创建目录并下载
echo "[2/5] 下载最新代码..."
mkdir -p "$TARGET_DIR"
TMPDIR=$(mktemp -d)

if command -v curl &> /dev/null; then
    curl -fsSL "$ARCHIVE_URL" -o "$TMPDIR/spatial.tar.gz"
elif command -v wget &> /dev/null; then
    wget -q "$ARCHIVE_URL" -O "$TMPDIR/spatial.tar.gz"
else
    echo "错误: 需要 curl 或 wget"
    exit 1
fi

tar -xzvf "$TMPDIR/spatial.tar.gz" -C "$TMPDIR"
# 解压出来是 spatial-reconstruct 目录，直接移过去
cp -rf "$TMPDIR/spatial-reconstruct/"* "$TARGET_DIR/"
rm -rf "$TMPDIR"

echo "  下载完成: $TARGET_DIR"
ls -la "$TARGET_DIR"

# 3. 配置 nginx
echo "[3/5] 配置 nginx..."
SITE_CONFIG="/etc/nginx/sites-available/spatial-reconstruct"

cat > "$SITE_CONFIG" << NGINX_EOF
server {
    listen 80;
    server_name _;

    root /var/www/spatial-reconstruct;
    index index.html;

    # 启用 gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
    gzip_min_length 1000;

    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # 静态资源长期缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
NGINX_EOF

# 启用站点
ln -sf "$SITE_CONFIG" /etc/nginx/sites-enabled/spatial-reconstruct

# 禁用默认站点（避免端口冲突）
if [ -f /etc/nginx/sites-enabled/default ]; then
    rm -f /etc/nginx/sites-enabled/default
fi

# 测试配置
nginx -t

# 4. 启动 nginx
echo "[4/5] 启动 nginx..."
systemctl restart nginx
systemctl enable nginx > /dev/null 2>&1

# 5. 防火墙
echo "[5/5] 检查防火墙..."
if command -v ufw &> /dev/null; then
    ufw allow 80/tcp 2>/dev/null || true
    ufw allow 443/tcp 2>/dev/null || true
fi

echo ""
echo "=========================================="
echo "  部署完成！"
echo "=========================================="
echo ""
echo "  网站目录: $TARGET_DIR"
echo "  访问地址: http://$(curl -s ifconfig.me 2>/dev/null || echo '你的服务器IP')/"
echo ""
echo "  常用命令:"
echo "  重启网站:  systemctl restart nginx"
echo "  查看状态:  systemctl status nginx"
echo "  更新部署:  bash <(curl -sL https://raw.githubusercontent.com/xcicvas/server-monitor/main/spatial-reconstruct/deploy.sh)"
echo ""
