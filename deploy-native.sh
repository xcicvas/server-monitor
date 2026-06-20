#!/usr/bin/env bash
# ==========================================================================
#  照片空间重构网站 - 原生一键部署脚本（不使用 Docker）
#  依赖：Node.js 20+、Python 3.11+、npm / pip3
#
#  用法：
#     bash deploy-native.sh                 # 一键部署（检查环境 -> 构建 -> 启动）
#     bash deploy-native.sh --start         # 仅启动（假设已构建完成）
#     bash deploy-native.sh --stop          # 停止服务
#     bash deploy-native.sh --restart       # 重启服务
#     bash deploy-native.sh --status        # 查看运行状态
#     bash deploy-native.sh --update        # 拉最新代码 + 重新构建 + 重启
#     bash deploy-native.sh --port 80       # 自定义前端端口（默认 3000）
#     bash deploy-native.sh --api-port 8000 # 自定义后端端口（默认 8000）
#
#  环境变量覆盖：
#     FRONTEND_PORT=80 BACKEND_PORT=8000 bash deploy-native.sh
# ==========================================================================

set -u

# ---------- 可配置项 ----------
PROJECT_NAME="photo-depth"
FRONTEND_PORT="${FRONTEND_PORT:-3000}"
BACKEND_PORT="${BACKEND_PORT:-8000}"

# ---------- 路径 ----------
WORK_DIR="$(cd "$(dirname "$0")" && pwd)"
BACKEND_DIR="$WORK_DIR/backend"
FRONTEND_DIR="$WORK_DIR/frontend"
DATA_DIR="$WORK_DIR/data"
LOG_DIR="$WORK_DIR/logs"
PID_DIR="$WORK_DIR/logs"
BACKEND_PID="$PID_DIR/backend.pid"
FRONTEND_PID="$PID_DIR/frontend.pid"
BACKEND_LOG="$LOG_DIR/backend.log"
FRONTEND_LOG="$LOG_DIR/frontend.log"

# ---------- 彩色输出 ----------
RED="\033[1;31m"; GREEN="\033[1;32m"; YELLOW="\033[1;33m"
BLUE="\033[1;34m"; RESET="\033[0m"

info()  { echo -e "${BLUE}[INFO]${RESET}  $1"; }
ok()    { echo -e "${GREEN}[ OK ]${RESET}  $1"; }
warn()  { echo -e "${YELLOW}[WARN]${RESET}  $1"; }
fail()  { echo -e "${RED}[FAIL]${RESET}  $1"; exit 1; }

step() { printf "\n${BLUE}========== %s ==========${RESET}\n" "$1"; return 0; }

# ---------- 命令行参数 ----------
ACTION="deploy"
while [ $# -gt 0 ]; do
    case "$1" in
        --start)    ACTION="start"; shift ;;
        --stop)     ACTION="stop"; shift ;;
        --restart)  ACTION="restart"; shift ;;
        --status)   ACTION="status"; shift ;;
        --update)   ACTION="update"; shift ;;
        --port)     FRONTEND_PORT="$2"; shift 2 ;;
        --api-port) BACKEND_PORT="$2"; shift 2 ;;
        -h|--help)
            sed -n '2,20p' "$0"
            exit 0
            ;;
        *) fail "未知参数: $1（使用 -h 查看帮助）" ;;
    esac
done

# ---------- 基础目录 ----------
mkdir -p "$DATA_DIR" "$LOG_DIR" "$PID_DIR"

# ---------- 运行状态检查 ----------
is_running() {
    local pid_file="$1"
    [ -f "$pid_file" ] || return 1
    local pid
    pid=$(cat "$pid_file" 2>/dev/null)
    [ -n "$pid" ] || return 1
    kill -0 "$pid" 2>/dev/null
}

stop_service() {
    local name="$1"
    local pid_file="$2"
    if is_running "$pid_file"; then
        local pid
        pid=$(cat "$pid_file")
        info "停止 ${name} (PID=${pid})"
        kill "$pid" 2>/dev/null
        for i in 1 2 3 4 5; do
            kill -0 "$pid" 2>/dev/null || break
            sleep 1
        done
        kill -0 "$pid" 2>/dev/null && kill -9 "$pid" 2>/dev/null
        rm -f "$pid_file"
        ok "${name} 已停止"
    else
        info "${name} 未运行"
    fi
}

# ---------- status 模式 ----------
if [ "$ACTION" = "status" ]; then
    step "运行状态"
    if is_running "$BACKEND_PID"; then
        ok "后端运行中  PID=$(cat "$BACKEND_PID")  端口=${BACKEND_PORT}  日志=${BACKEND_LOG}"
    else
        warn "后端未运行"
    fi
    if is_running "$FRONTEND_PID"; then
        ok "前端运行中  PID=$(cat "$FRONTEND_PID")  端口=${FRONTEND_PORT}  日志=${FRONTEND_LOG}"
    else
        warn "前端未运行"
    fi
    exit 0
fi

# ---------- stop 模式 ----------
if [ "$ACTION" = "stop" ]; then
    step "停止服务"
    stop_service "前端" "$FRONTEND_PID"
    stop_service "后端" "$BACKEND_PID"
    ok "全部服务已停止"
    exit 0
fi

# ---------- 环境检查（部署/启动/更新都要走这步） ----------
check_env() {
    step "环境检查"

    # Python
    if command -v python3 >/dev/null 2>&1; then
        PY_VERSION=$(python3 -c 'import sys; print(f"{sys.version_info.major}.{sys.version_info.minor}")' 2>/dev/null)
        ok "Python3 已安装 (${PY_VERSION})"
    else
        fail "未找到 python3，请先安装 Python 3.11+: apt install python3 python3-pip python3-venv"
    fi

    if command -v pip3 >/dev/null 2>&1; then
        ok "pip3 已安装"
    else
        fail "未找到 pip3"
    fi

    # Node.js
    if command -v node >/dev/null 2>&1; then
        NODE_V=$(node -v | sed 's/v//')
        NODE_MAJOR=$(echo "$NODE_V" | cut -d. -f1)
        if [ "$NODE_MAJOR" -ge 18 ]; then
            ok "Node.js 已安装 (v${NODE_V})"
        else
            fail "Node.js 版本过低 (v${NODE_V})，需要 v18+"
        fi
    else
        fail "未找到 node，请先安装 Node.js 20+: https://nodejs.org/"
    fi

    if command -v npm >/dev/null 2>&1; then
        ok "npm 已安装 ($(npm -v))"
    else
        fail "未找到 npm"
    fi

    # 端口检查
    for port in "$FRONTEND_PORT" "$BACKEND_PORT"; do
        if command -v lsof >/dev/null 2>&1; then
            if lsof -iTCP:"$port" -sTCP:LISTEN -t >/dev/null 2>&1; then
                warn "端口 ${port} 已被占用（部署时可能冲突）"
            fi
        elif command -v ss >/dev/null 2>&1; then
            if ss -lntH | awk '{print $4}' | grep -qE "[:.]${port}$"; then
                warn "端口 ${port} 已被占用（部署时可能冲突）"
            fi
        fi
    done
}

# ---------- 后端：创建 venv 并安装依赖 ----------
setup_backend() {
    step "后端依赖安装"
    info "后端目录: ${BACKEND_DIR}"

    if [ ! -f "$BACKEND_DIR/requirements.txt" ]; then
        fail "未找到 backend/requirements.txt"
    fi

    if [ ! -d "$BACKEND_DIR/venv" ]; then
        info "创建 Python 虚拟环境..."
        (cd "$BACKEND_DIR" && python3 -m venv venv) || fail "无法创建 venv"
    else
        info "复用已有虚拟环境"
    fi

    info "安装/更新 Python 依赖..."
    (
        cd "$BACKEND_DIR"
        source venv/bin/activate
        pip install --upgrade pip >/dev/null
        pip install -r requirements.txt
    ) 2>&1 | tail -20

    if [ "${PIPESTATUS[0]}" -ne 0 ]; then
        fail "后端依赖安装失败，请检查上面的日志"
    fi
    ok "后端依赖安装完成"
}

# ---------- 前端：安装依赖并构建 ----------
setup_frontend() {
    step "前端依赖安装与构建"
    info "前端目录: ${FRONTEND_DIR}"

    if [ ! -f "$FRONTEND_DIR/package.json" ]; then
        fail "未找到 frontend/package.json"
    fi

    # 前端 vite 配置要让 /api 代理到后端端口
    info "写入 vite.config.local 配置（API 代理）"
    cat > "$FRONTEND_DIR/vite.config.local.ts" <<EOF
// 本机开发模式不需要此文件；部署时直接用构建产物 + nginx/caddy 即可
export default {};
EOF

    # 依赖
    if [ -d "$FRONTEND_DIR/node_modules" ]; then
        info "复用已有 node_modules"
    fi
    info "安装 npm 依赖..."
    (cd "$FRONTEND_DIR" && npm ci --no-audit --no-fund --loglevel=error) 2>&1 | tail -10 || \
        (cd "$FRONTEND_DIR" && npm install --no-audit --no-fund --loglevel=error) 2>&1 | tail -10

    if [ "${PIPESTATUS[0]}" -ne 0 ] && [ -n "$(cd "$FRONTEND_DIR" && npm ls 2>&1 | head -1 || true)" ]; then
        # 再尝试一次
        true
    fi

    if [ ! -d "$FRONTEND_DIR/node_modules" ]; then
        fail "npm 依赖安装失败"
    fi
    ok "前端依赖安装完成"

    # 构建
    info "构建前端 (npm run build)..."
    (
        cd "$FRONTEND_DIR"
        rm -rf dist
        npm run build
    ) 2>&1 | tail -30

    if [ "${PIPESTATUS[0]}" -ne 0 ]; then
        fail "前端构建失败，请检查上面的日志"
    fi

    if [ ! -d "$FRONTEND_DIR/dist" ]; then
        fail "前端构建产物目录 frontend/dist 不存在"
    fi
    ok "前端构建完成"
}

# ---------- 端口占用清理 ----------
kill_port_holder() {
    local port="$1"
    local holder
    if command -v lsof >/dev/null 2>&1; then
        holder=$(lsof -iTCP:"$port" -sTCP:LISTEN -t 2>/dev/null | head -1)
    elif command -v ss >/dev/null 2>&1; then
        holder=$(ss -lptnH "sport = :${port}" 2>/dev/null | grep -oE 'pid=[0-9]+' | head -1 | cut -d= -f2)
    fi
    if [ -n "$holder" ]; then
        warn "端口 ${port} 被 PID=${holder} 占用，尝试杀掉..."
        kill -9 "$holder" 2>/dev/null
        sleep 1
    fi
}

# ---------- 启动后端 ----------
start_backend() {
    step "启动后端 (端口 ${BACKEND_PORT})"

    if is_running "$BACKEND_PID"; then
        warn "后端已在运行 (PID=$(cat "$BACKEND_PID"))，先停止"
        stop_service "后端" "$BACKEND_PID"
    fi

    kill_port_holder "$BACKEND_PORT"

    : > "$BACKEND_LOG"

    # 使用 nohup 在后台启动 uvicorn
    nohup bash -c "
        cd '${BACKEND_DIR}'
        source venv/bin/activate
        exec uvicorn main:app --host 0.0.0.0 --port ${BACKEND_PORT}
    " > "$BACKEND_LOG" 2>&1 &
    echo $! > "$BACKEND_PID"

    sleep 2

    # 检查是否启动成功
    local attempts=0
    while [ $attempts -lt 15 ]; do
        if is_running "$BACKEND_PID"; then
            if curl -sf "http://127.0.0.1:${BACKEND_PORT}/api/health" >/dev/null 2>&1; then
                ok "后端已启动: http://127.0.0.1:${BACKEND_PORT}/api/health"
                return 0
            fi
        fi
        attempts=$((attempts + 1))
        sleep 2
    done

    fail "后端启动失败，请查看日志: tail -50 ${BACKEND_LOG}"
}

# ---------- 启动前端 ----------
start_frontend() {
    step "启动前端 (端口 ${FRONTEND_PORT})"

    if is_running "$FRONTEND_PID"; then
        warn "前端已在运行 (PID=$(cat "$FRONTEND_PID"))，先停止"
        stop_service "前端" "$FRONTEND_PID"
    fi

    kill_port_holder "$FRONTEND_PORT"

    if [ ! -d "$FRONTEND_DIR/dist" ]; then
        fail "前端未构建，请先执行: bash deploy-native.sh"
    fi

    : > "$FRONTEND_LOG"

    # 用 Python 自带的 http.server 托管静态文件 + 反向代理 /api 到后端
    # 但 http.server 不支持反向代理，所以优先用 caddy（如果已装），否则写一个极简的 Python 反向代理
    local serve_cmd=""

    # 方案1：caddy（如已安装）
    if command -v caddy >/dev/null 2>&1; then
        cat > "$FRONTEND_DIR/Caddyfile" <<EOF
:${FRONTEND_PORT} {
    root * ${FRONTEND_DIR}/dist
    reverse_proxy /api/* http://127.0.0.1:${BACKEND_PORT}
    file_server
    encode gzip
}
EOF
        serve_cmd="cd '${FRONTEND_DIR}' && exec caddy run --config Caddyfile"
        info "使用 Caddy 作为前端服务器"

    # 方案2：编写一个极简 Python HTTP 服务器（含反向代理）
    else
        cat > "$FRONTEND_DIR/server.py" <<PYEOF
"""
前端静态文件服务器 + /api 反向代理到后端
依赖：标准库 http.server + urllib（无需额外 pip 包）
"""
import os, sys, socket, urllib.request, urllib.error, urllib.parse, mimetypes
from http.server import BaseHTTPRequestHandler, HTTPServer
from socketserver import ForkingMixIn

DIST_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "dist")
BACKEND_URL = os.environ.get("BACKEND_URL", "http://127.0.0.1:${BACKEND_PORT}")
PORT = int(os.environ.get("PORT", "${FRONTEND_PORT}"))


class ForkingHTTPServer(ForkingMixIn, HTTPServer):
    daemon_threads = True
    allow_reuse_address = True


class Handler(BaseHTTPRequestHandler):
    server_version = "PhotoDepth/1.0"

    def log_message(self, fmt, *args):
        sys.stderr.write("[%s] %s\\n" % (self.address_string(), fmt % args))

    def _proxy(self, method):
        path = self.path
        target = BACKEND_URL.rstrip("/") + path
        body = None
        if method in ("POST", "PUT", "PATCH"):
            length = int(self.headers.get("Content-Length", "0") or 0)
            body = self.rfile.read(length) if length > 0 else b""

        req = urllib.request.Request(target, data=body, method=method)
        for k, v in self.headers.items():
            if k.lower() in ("host", "content-length", "connection", "accept-encoding"):
                continue
            req.add_header(k, v)

        try:
            with urllib.request.urlopen(req, timeout=300) as resp:
                self.send_response(resp.status)
                for k, v in resp.headers.items():
                    if k.lower() in ("transfer-encoding", "connection", "content-encoding"):
                        continue
                    self.send_header(k, v)
                self.end_headers()
                data = resp.read()
                if data:
                    self.wfile.write(data)
        except urllib.error.HTTPError as e:
            self.send_response(e.code)
            for k, v in e.headers.items() if e.headers else []:
                self.send_header(k, v)
            self.end_headers()
            if e.fp:
                try:
                    self.wfile.write(e.fp.read())
                except Exception:
                    pass
        except urllib.error.URLError as e:
            self.send_response(502)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.end_headers()
            self.wfile.write(('{"error":"bad_gateway","detail":%r}' % str(e.reason)).encode("utf-8"))

    def do_GET(self):
        if self.path.startswith("/api/"):
            return self._proxy("GET")
        self._serve_static()

    def do_POST(self):
        if self.path.startswith("/api/"):
            return self._proxy("POST")
        self.send_response(405); self.end_headers()

    def do_PUT(self):
        if self.path.startswith("/api/"):
            return self._proxy("PUT")
        self.send_response(405); self.end_headers()

    def do_DELETE(self):
        if self.path.startswith("/api/"):
            return self._proxy("DELETE")
        self.send_response(405); self.end_headers()

    def do_PATCH(self):
        if self.path.startswith("/api/"):
            return self._proxy("PATCH")
        self.send_response(405); self.end_headers()

    def do_HEAD(self):
        if self.path.startswith("/api/"):
            return self._proxy("HEAD")
        self._serve_static()

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Allow", "GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS")
        self.end_headers()

    def _serve_static(self):
        # 去掉 query string
        raw_path = self.path.split("?", 1)[0]
        # 安全：禁止路径穿越
        raw_path = raw_path.lstrip("/")
        # 中文 / 特殊字符 url decode
        try:
            from urllib.parse import unquote
            raw_path = unquote(raw_path)
        except Exception:
            pass
        fpath = os.path.normpath(os.path.join(DIST_DIR, raw_path))
        if not fpath.startswith(DIST_DIR):
            self.send_response(403); self.end_headers(); return

        # 若为目录或文件不存在 -> 走 SPA fallback 到 index.html
        if os.path.isdir(fpath) or not os.path.isfile(fpath):
            fpath = os.path.join(DIST_DIR, "index.html")

        if not os.path.isfile(fpath):
            self.send_response(404)
            self.send_header("Content-Type", "text/plain; charset=utf-8")
            self.end_headers()
            self.wfile.write(b"Not Found")
            return

        ctype, _ = mimetypes.guess_type(fpath)
        ctype = ctype or "application/octet-stream"
        # 修正常见 MIME
        if fpath.endswith(".js"): ctype = "application/javascript"
        if fpath.endswith(".css"): ctype = "text/css"
        if fpath.endswith(".html"): ctype = "text/html; charset=utf-8"
        if fpath.endswith(".json"): ctype = "application/json; charset=utf-8"
        if fpath.endswith(".svg"): ctype = "image/svg+xml"

        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(os.path.getsize(fpath)))
        # 静态资源加缓存，index.html 不加
        if not fpath.endswith("index.html"):
            self.send_header("Cache-Control", "public, max-age=31536000, immutable")
        else:
            self.send_header("Cache-Control", "no-store, must-revalidate")
        self.end_headers()
        try:
            with open(fpath, "rb") as f:
                while True:
                    chunk = f.read(64 * 1024)
                    if not chunk:
                        break
                    self.wfile.write(chunk)
        except BrokenPipeError:
            pass


def main():
    # 尝试 PORT，若不可用则尝试递增
    port = PORT
    while True:
        try:
            srv = ForkingHTTPServer(("0.0.0.0", port), Handler)
            print(f"[frontend] listening on 0.0.0.0:{port}, serving {DIST_DIR}, proxy /api -> {BACKEND_URL}")
            srv.serve_forever()
            break
        except OSError as e:
            if "Address already in use" in str(e):
                print(f"[frontend] port {port} in use, trying {port+1}...", file=sys.stderr)
                port += 1
                if port - PORT > 10:
                    raise
            else:
                raise


if __name__ == "__main__":
    main()
PYEOF
        # 复用后端的 venv（里面已经有 python3）
        serve_cmd="cd '${FRONTEND_DIR}' && exec '${BACKEND_DIR}/venv/bin/python3' server.py"
        info "未检测到 Caddy，使用内置 Python HTTP 服务器"
    fi

    nohup bash -c "$serve_cmd" > "$FRONTEND_LOG" 2>&1 &
    echo $! > "$FRONTEND_PID"

    sleep 2

    local attempts=0
    while [ $attempts -lt 15 ]; do
        if is_running "$FRONTEND_PID"; then
            if curl -sf "http://127.0.0.1:${FRONTEND_PORT}/" >/dev/null 2>&1; then
                ok "前端已启动: http://127.0.0.1:${FRONTEND_PORT}/"
                return 0
            fi
        fi
        attempts=$((attempts + 1))
        sleep 2
    done

    fail "前端启动失败，请查看日志: tail -50 ${FRONTEND_LOG}"
}

# ---------- 主流程 ----------
case "$ACTION" in
    deploy)
        check_env
        setup_backend
        setup_frontend
        start_backend
        start_frontend
        ;;
    start)
        check_env
        # 若 venv 或 dist 不存在，则回退到完整部署
        if [ ! -d "$BACKEND_DIR/venv" ] || [ ! -d "$FRONTEND_DIR/dist" ]; then
            warn "检测到尚未完成完整构建，先执行部署流程..."
            setup_backend
            setup_frontend
        fi
        start_backend
        start_frontend
        ;;
    restart)
        stop_service "前端" "$FRONTEND_PID"
        stop_service "后端" "$BACKEND_PID"
        start_backend
        start_frontend
        ;;
    update)
        step "更新代码"
        if [ -d "$WORK_DIR/.git" ]; then
            (cd "$WORK_DIR" && git fetch origin main && git reset --hard origin/main) 2>&1 | tail -10
        else
            warn "当前目录不是 Git 仓库，跳过代码更新"
        fi
        check_env
        setup_backend
        setup_frontend
        stop_service "前端" "$FRONTEND_PID"
        stop_service "后端" "$BACKEND_PID"
        start_backend
        start_frontend
        ;;
esac

# ---------- 结果汇总 ----------
step "部署完成"
info "前端:   http://127.0.0.1:${FRONTEND_PORT}/"
info "后端:   http://127.0.0.1:${BACKEND_PORT}/api/health"
info "管理:   http://127.0.0.1:${FRONTEND_PORT}/admin"
info "日志:   ${FRONTEND_LOG}  /  ${BACKEND_LOG}"
echo ""
echo "  $ bash deploy-native.sh --status    查看状态"
echo "  $ bash deploy-native.sh --stop      停止服务"
echo "  $ bash deploy-native.sh --restart   重启服务"
echo "  $ bash deploy-native.sh --update    拉最新代码并重启"
echo ""
ok "完成！"
