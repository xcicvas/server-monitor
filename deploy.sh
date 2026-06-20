#!/usr/bin/env bash
# ==========================================================================
#  照片空间重构网站 - 一键部署脚本
#  功能：检查环境 -> 拉取/更新代码 -> 构建并启动 docker-compose
#  用法：
#     bash deploy.sh              # 使用默认仓库 + 默认分支
#     bash deploy.sh -u <URL>     # 指定仓库地址
#     bash deploy.sh -b <分支>    # 指定分支
#     bash deploy.sh --cpu        # 仅使用 CPU 模式
#     bash deploy.sh --stop       # 停止并移除容器
#  环境变量覆盖：
#     GIT_URL=<仓库> GIT_BRANCH=<分支> bash deploy.sh
# ==========================================================================

set -u

# ---------- 可配置项（也可用环境变量/命令行参数覆盖） ----------
DEFAULT_GIT_URL="${GIT_URL:-https://github.com/xcicvas/server-monitor.git}"
DEFAULT_GIT_BRANCH="${GIT_BRANCH:-main}"
PROJECT_NAME="photo-depth"
FRONTEND_PORT="${FRONTEND_PORT:-3000}"
BACKEND_PORT="${BACKEND_PORT:-8000}"

# ---------- 彩色输出 ----------
RED="\033[1;31m"
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
BLUE="\033[1;34m"
RESET="\033[0m"

info()  { echo -e "${BLUE}[INFO]${RESET}  $1"; }
ok()    { echo -e "${GREEN}[ OK ]${RESET}  $1"; }
warn()  { echo -e "${YELLOW}[WARN]${RESET}  $1"; }
fail()  { echo -e "${RED}[FAIL]${RESET}  $1"; exit 1; }

# ---------- 命令行参数解析 ----------
ACTION="deploy"
CPU_MODE="0"
GIT_URL="$DEFAULT_GIT_URL"
GIT_BRANCH="$DEFAULT_GIT_BRANCH"

while [ $# -gt 0 ]; do
    case "$1" in
        -u|--url)        GIT_URL="$2"; shift 2 ;;
        -b|--branch)     GIT_BRANCH="$2"; shift 2 ;;
        --cpu)           CPU_MODE="1"; shift ;;
        --stop|--down)   ACTION="stop"; shift ;;
        --restart)       ACTION="restart"; shift ;;
        -h|--help)
            grep '^#' "$0" | sed 's/^# \{0,1\}//'
            exit 0
            ;;
        *)
            fail "未知参数: $1 （使用 -h 查看帮助）"
            ;;
    esac
done

# ---------- 系统环境检查 ----------
step() { printf "\n${BLUE}========== %s ==========${RESET}\n" "$1"; return 0; }

check_cmd() {
    if command -v "$1" >/dev/null 2>&1; then
        ok "$1 已安装 ($($1 --version 2>&1 | head -1 || true))"
    else
        fail "$1 未安装，请先安装: https://docs.docker.com/"
    fi
}

step "环境检查"
check_cmd docker
if docker compose version >/dev/null 2>&1; then
    ok "docker compose 插件已安装"
    COMPOSE_CMD="docker compose"
elif command -v docker-compose >/dev/null 2>&1; then
    ok "docker-compose 已安装"
    COMPOSE_CMD="docker-compose"
else
    fail "未检测到 docker compose / docker-compose"
fi

# ---------- 工作目录 ----------
WORK_DIR="$(cd "$(dirname "$0")" && pwd)"
info "工作目录: ${WORK_DIR}"

# ---------- 停止模式 ----------
if [ "$ACTION" = "stop" ]; then
    step "停止并移除服务"
    (cd "$WORK_DIR" && $COMPOSE_CMD down --remove-orphans 2>&1) | tail -5 || true
    ok "服务已停止"
    exit 0
fi

# ---------- 代码拉取 / 更新 ----------
step "更新代码 (${GIT_BRANCH})"

if [ -d "$WORK_DIR/.git" ]; then
    info "已有 Git 仓库，尝试 pull"
    (
        cd "$WORK_DIR"
        CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
        info "当前分支: ${CURRENT_BRANCH}"

        if [ "$CURRENT_BRANCH" != "$GIT_BRANCH" ]; then
            warn "当前分支 (${CURRENT_BRANCH}) 与目标分支 (${GIT_BRANCH}) 不一致，尝试切换"
            git fetch origin "$GIT_BRANCH" 2>&1 && git checkout "$GIT_BRANCH" 2>&1 || \
                fail "无法切换到分支 ${GIT_BRANCH}"
        else
            git fetch origin "$GIT_BRANCH" 2>&1
            git reset --hard "origin/${GIT_BRANCH}" 2>&1
        fi
    ) | tail -10
else
    info "首次部署，从 ${GIT_URL} 克隆代码"
    WORK_PARENT="$(dirname "$WORK_DIR")"
    TMP_DIR="${WORK_PARENT}/${PROJECT_NAME}_new_$$"
    rm -rf "$TMP_DIR"

    if ! git clone --depth 1 --branch "$GIT_BRANCH" "$GIT_URL" "$TMP_DIR" 2>&1; then
        # 分支不存在，回退到默认分支
        warn "分支 ${GIT_BRANCH} 不存在，尝试拉取默认分支"
        rm -rf "$TMP_DIR"
        git clone --depth 1 "$GIT_URL" "$TMP_DIR" || fail "Git 克隆失败"
    fi

    # 将代码移动到工作目录
    rm -rf "${WORK_DIR:?}/"*
    cp -r "$TMP_DIR/." "$WORK_DIR/"
    rm -rf "$TMP_DIR"
fi
ok "代码已同步到最新版本"

# ---------- 准备持久化目录 ----------
step "准备数据目录"
mkdir -p "$WORK_DIR/data"
touch "$WORK_DIR/data/.gitkeep" 2>/dev/null
info "数据目录: ${WORK_DIR}/data（用于持久化配置与统计）"

# ---------- Docker Compose 文件选择 ----------
COMPOSE_FILE="docker-compose.yml"
if [ "$CPU_MODE" = "1" ]; then
    COMPOSE_FILE="docker-compose.cpu.yml"
    info "使用 CPU 模式: ${COMPOSE_FILE}"
else
    if [ -f "$WORK_DIR/docker-compose.yml" ]; then
        info "使用: ${COMPOSE_FILE}"
    else
        warn "未找到 docker-compose.yml，回退到 CPU 模式"
        COMPOSE_FILE="docker-compose.cpu.yml"
    fi
fi

if [ ! -f "$WORK_DIR/$COMPOSE_FILE" ]; then
    fail "未找到 ${COMPOSE_FILE}"
fi

# ---------- 重启模式 ----------
if [ "$ACTION" = "restart" ]; then
    step "重启服务"
    (cd "$WORK_DIR" && $COMPOSE_CMD -f "$COMPOSE_FILE" restart 2>&1) | tail -5
    ok "服务已重启"
    exit 0
fi

# ---------- 构建 + 启动 ----------
step "构建镜像并启动服务"
(
    cd "$WORK_DIR"
    $COMPOSE_CMD -f "$COMPOSE_FILE" up -d --build --remove-orphans
) | tail -30

BUILD_STATUS="${PIPESTATUS[0]}"
if [ "$BUILD_STATUS" -ne 0 ]; then
    fail "构建或启动失败，请检查上面的日志"
fi

# ---------- 健康检查 ----------
step "健康检查"
sleep 3

BACKEND_OK=0
FRONTEND_OK=0

for i in 1 2 3 4 5 6 7 8 9 10; do
    if [ "$BACKEND_OK" -eq 0 ]; then
        if curl -sf "http://127.0.0.1:${BACKEND_PORT}/api/health" >/dev/null 2>&1; then
            BACKEND_OK=1
        fi
    fi
    if [ "$FRONTEND_OK" -eq 0 ]; then
        if curl -sf "http://127.0.0.1:${FRONTEND_PORT}/" >/dev/null 2>&1; then
            FRONTEND_OK=1
        fi
    fi
    if [ "$BACKEND_OK" -eq 1 ] && [ "$FRONTEND_OK" -eq 1 ]; then
        break
    fi
    info "等待服务启动... (${i}/10)"
    sleep 2
done

# ---------- 结果汇总 ----------
step "部署结果"

if [ "$BACKEND_OK" -eq 1 ]; then
    ok "后端正常运行: http://127.0.0.1:${BACKEND_PORT}/api/health"
else
    warn "后端健康检查超时，请手动查看日志：docker logs photo-depth_backend"
fi

if [ "$FRONTEND_OK" -eq 1 ]; then
    ok "前端正常运行: http://127.0.0.1:${FRONTEND_PORT}/"
else
    warn "前端健康检查超时，请手动查看日志：docker logs photo-depth_frontend"
fi

echo ""
info "管理后台: http://127.0.0.1:${FRONTEND_PORT}/admin  （首次访问请设置管理员密码）"
info "主站点:   http://127.0.0.1:${FRONTEND_PORT}/"
info "使用以下命令管理："
echo "  $ $COMPOSE_CMD logs -f         查看实时日志"
echo "  $ $COMPOSE_CMD stop            停止服务"
echo "  $ bash deploy.sh --stop        一键停止"
echo "  $ bash deploy.sh               一键更新并重启"
echo ""
ok "部署完成！"
