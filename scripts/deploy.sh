#!/usr/bin/env bash
set -e

COLOR_GREEN="\033[32m"
COLOR_BLUE="\033[34m"
COLOR_YELLOW="\033[33m"
COLOR_RED="\033[31m"
COLOR_CYAN="\033[36m"
COLOR_RESET="\033[0m"

LOG_PREFIX="${COLOR_CYAN}[Server-Monitor Agent]${COLOR_RESET}"

log_info()  { echo -e "${LOG_PREFIX} ${COLOR_BLUE}[INFO]${COLOR_RESET}  $1"; }
log_ok()    { echo -e "${LOG_PREFIX} ${COLOR_GREEN}[OK]${COLOR_RESET}    $1"; }
log_warn()  { echo -e "${LOG_PREFIX} ${COLOR_YELLOW}[WARN]${COLOR_RESET}  $1"; }
log_error() { echo -e "${LOG_PREFIX} ${COLOR_RED}[ERROR]${COLOR_RESET} $1"; }

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"
PROJECT_DIR="$(cd "${SCRIPT_DIR}/.." &>/dev/null && pwd)"
AGENT_FILE="${PROJECT_DIR}/api/agent.js"
INSTALL_DIR="/opt/server-monitor-agent"

show_help() {
  cat <<EOF

${COLOR_CYAN}════════════════════════════════════════════════════════${COLOR_RESET}
${COLOR_GREEN}  Server-Monitor Agent — 一键部署脚本${COLOR_RESET}
${COLOR_CYAN}════════════════════════════════════════════════════════${COLOR_RESET}

${COLOR_BLUE}用法:${COLOR_RESET}
  ./deploy.sh [选项]

${COLOR_BLUE}功能:${COLOR_RESET}
  · 检测操作系统与架构
  · 自动安装 Node.js 20+（如未安装）
  · 通过环境变量配置管理员账号、JWT 密钥、CORS
  · 注册 systemd 服务，开机自启
  · 配置防火墙规则（如可用）
  · 显示连接信息与安全提醒

${COLOR_BLUE}选项:${COLOR_RESET}
  -p, --port <端口>          Agent 监听端口（默认 7001）
  -j, --jwt <密钥>           JWT 签名密钥（默认自动生成）
  -o, --origin <域名>        允许的来源域名（逗号分隔，可选）
  -u, --username <用户名>    管理员用户名（默认 admin）
  -w, --password <密码>      管理员密码（默认随机生成，部署后请立即修改）
  -n, --no-service           不注册 systemd 服务（仅运行一次）
  --uninstall                卸载 Agent 服务

${COLOR_BLUE}安全说明:${COLOR_RESET}
  注册接口默认关闭，首次管理员账号通过 ADMIN_USERNAME / ADMIN_PASSWORD 环境变量创建。
  部署完成后请立即登录并修改密码。

${COLOR_BLUE}示例:${COLOR_RESET}
  ./deploy.sh                                        # 全自动（随机密码）
  ./deploy.sh -p 7001 -j my_secret_key -u admin -w MyStr0ngPass
  ./deploy.sh -o https://monitor.example.com
  ./deploy.sh --uninstall

EOF
}

AGENT_PORT=7001
JWT_SECRET=""
ALLOWED_ORIGINS=""
ADMIN_USERNAME="admin"
ADMIN_PASSWORD=""
INSTALL_SERVICE=true
MODE="install"
GITHUB_REPO="xcicvas/server-monitor"
GITHUB_BRANCH="main"
GITHUB_RAW="https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}"

while [[ $# -gt 0 ]]; do
  case "$1" in
    -p|--port)     AGENT_PORT="$2"; shift 2 ;;
    -j|--jwt)      JWT_SECRET="$2"; shift 2 ;;
    -o|--origin)   ALLOWED_ORIGINS="$2"; shift 2 ;;
    -u|--username) ADMIN_USERNAME="$2"; shift 2 ;;
    -w|--password) ADMIN_PASSWORD="$2"; shift 2 ;;
    -n|--no-service) INSTALL_SERVICE=false; shift ;;
    --uninstall)   MODE="uninstall"; shift ;;
    -h|--help)     show_help; exit 0 ;;
    *)             log_error "未知选项: $1"; show_help; exit 1 ;;
  esac
done

check_os() {
  if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    if [[ -f /etc/os-release ]]; then
      source /etc/os-release
      OS_NAME="${ID}"
      OS_FULL="${PRETTY_NAME}"
    else
      OS_NAME="linux"
      OS_FULL="Linux"
    fi
  elif [[ "$OSTYPE" == "darwin"* ]]; then
    OS_NAME="macos"
    OS_FULL="macOS $(sw_vers -productVersion 2>/dev/null || echo)"
  else
    OS_NAME="unknown"
    OS_FULL="$OSTYPE"
  fi
  ARCH="$(uname -m)"
  log_info "操作系统: ${OS_FULL} (${ARCH})"
}

check_root() {
  if [[ $EUID -eq 0 ]]; then
    SUDO=""
    log_warn "以 root 身份运行，将直接修改系统配置"
  else
    SUDO="sudo"
    log_info "使用 sudo 执行系统级操作"
  fi
}

install_node() {
  if command -v node &>/dev/null; then
    NODE_VERSION="$(node -v | sed 's/v//')"
    NODE_MAJOR="${NODE_VERSION%%.*}"
    if [[ "${NODE_MAJOR}" -ge 20 ]]; then
      log_ok "Node.js ${NODE_VERSION} 已安装"
      return
    fi
    log_warn "Node.js 版本过低 (${NODE_VERSION})，需要 20+"
  else
    log_info "未检测到 Node.js，开始安装..."
  fi

  if [[ "${OS_NAME}" == "macos" ]]; then
    if command -v brew &>/dev/null; then
      brew install node
    else
      log_error "需要先安装 Homebrew：https://brew.sh"
      exit 1
    fi
  elif [[ "${OS_NAME}" == "ubuntu" || "${OS_NAME}" == "debian" ]]; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | ${SUDO} -E bash -
    ${SUDO} apt-get install -y nodejs
  elif [[ "${OS_NAME}" == "centos" || "${OS_NAME}" == "rhel" || "${OS_NAME}" == "rocky" || "${OS_NAME}" == "alma" ]]; then
    curl -fsSL https://rpm.nodesource.com/setup_20.x | ${SUDO} bash -
    ${SUDO} yum install -y nodejs
  else
    log_error "暂不支持的系统: ${OS_FULL}"
    log_error "请手动安装 Node.js 20+：https://nodejs.org"
    exit 1
  fi

  if command -v node &>/dev/null; then
    log_ok "Node.js $(node -v) 安装完成"
  else
    log_error "Node.js 安装失败"
    exit 1
  fi
}

generate_secret() {
  if [[ -z "${JWT_SECRET}" ]]; then
    JWT_SECRET="$(node -e "console.log(require('crypto').randomBytes(32).toString('base64'))" 2>/dev/null || openssl rand -base64 32 2>/dev/null || date +%s%N | md5sum | head -c 32)"
    log_info "JWT 密钥已自动生成"
  fi
  if [[ -z "${ADMIN_PASSWORD}" ]]; then
    ADMIN_PASSWORD="$(node -e "console.log(require('crypto').randomBytes(8).toString('hex'))" 2>/dev/null || date +%s%N | md5sum | head -c 12)"
    log_warn "管理员密码已自动生成"
  fi
}

copy_agent_files() {
  log_info "准备 Agent 文件..."

  ${SUDO} mkdir -p "${INSTALL_DIR}/api"
  ${SUDO} mkdir -p "${INSTALL_DIR}/data"
  ${SUDO} chmod -R 755 "${INSTALL_DIR}"

  # 策略一：本地项目中存在 agent.js，直接复制
  if [[ -f "${AGENT_FILE}" ]]; then
    ${SUDO} cp "${AGENT_FILE}" "${INSTALL_DIR}/api/agent.js"
    if [[ -f "${PROJECT_DIR}/package.json" ]]; then
      ${SUDO} cp "${PROJECT_DIR}/package.json" "${INSTALL_DIR}/package.json"
    fi
    log_ok "从本地项目复制 Agent 文件"
  # 策略二：从 GitHub 直接下载
  else
    log_info "本地未找到 Agent 文件，从 GitHub 下载..."
    local tmp_agent
    tmp_agent="$(mktemp /tmp/server-monitor-agent-XXXXXX.js)"
    local tmp_pkg
    tmp_pkg="$(mktemp /tmp/server-monitor-pkg-XXXXXX.json)"

    if curl -fsSL "${GITHUB_RAW}/api/agent.js" -o "${tmp_agent}" 2>/dev/null \
      && curl -fsSL "${GITHUB_RAW}/package.json" -o "${tmp_pkg}" 2>/dev/null; then
      ${SUDO} cp "${tmp_agent}" "${INSTALL_DIR}/api/agent.js"
      ${SUDO} cp "${tmp_pkg}" "${INSTALL_DIR}/package.json"
      rm -f "${tmp_agent}" "${tmp_pkg}"
      log_ok "从 GitHub 下载 Agent 文件"
    else
      rm -f "${tmp_agent}" "${tmp_pkg}"
      log_error "无法下载 Agent 文件，请检查网络连接"
      log_error "手动命令: curl ${GITHUB_RAW}/api/agent.js"
      exit 1
    fi
  fi

  # 安装依赖
  if [[ -f "${INSTALL_DIR}/package.json" ]]; then
    if [[ -d "${INSTALL_DIR}/node_modules" ]]; then
      log_info "已存在 node_modules，跳过依赖安装"
    else
      log_info "安装 npm 依赖..."
      (cd "${INSTALL_DIR}" && ${SUDO} npm install --omit=dev --silent 2>&1 | tail -5)
      log_ok "依赖安装完成"
    fi
  fi
}

configure_env() {
  ENV_FILE="${INSTALL_DIR}/.env"
  log_info "写入环境配置..."

  # ADMIN_USERNAME / ADMIN_PASSWORD 由 Agent 自动创建第一个管理员账号（仅当 users.json 不存在时）
  ${SUDO} bash -c "cat > ${ENV_FILE}" <<EOF
AGENT_PORT=${AGENT_PORT}
JWT_SECRET=${JWT_SECRET}
ADMIN_USERNAME=${ADMIN_USERNAME}
ADMIN_PASSWORD=${ADMIN_PASSWORD}
NODE_ENV=production
EOF

  if [[ -n "${ALLOWED_ORIGINS}" ]]; then
    ${SUDO} bash -c "echo 'ALLOWED_ORIGINS=${ALLOWED_ORIGINS}' >> ${ENV_FILE}"
  fi

  log_ok "配置文件: ${ENV_FILE}"
}

start_and_verify() {
  log_info "启动 Agent 进程..."

  # 直接用 systemctl 启动（如果可用）或后台进程
  if [[ "${INSTALL_SERVICE}" == "true" ]] && command -v systemctl &>/dev/null; then
    # systemd 会读取 .env 文件，ADMIN_USERNAME / ADMIN_PASSWORD 会生效
    ${SUDO} systemctl restart server-monitor-agent
    sleep 2
    if ${SUDO} systemctl is-active --quiet server-monitor-agent; then
      log_ok "Agent 服务已启动"
    else
      log_error "Agent 服务启动失败，查看日志: journalctl -u server-monitor-agent"
      ${SUDO} systemctl status server-monitor-agent --no-pager | head -20 || true
      exit 1
    fi
  else
    # 无 systemd：后台进程方式，读取 .env 文件
    (cd "${INSTALL_DIR}" && nohup bash -c "source ${ENV_FILE} && node api/agent.js" >/tmp/agent-init.log 2>&1 &)
    sleep 3

    # 验证进程是否存活
    if curl -sf "http://localhost:${AGENT_PORT}/api/health" >/dev/null 2>&1; then
      log_ok "Agent 进程已启动"
    else
      log_error "Agent 启动失败，查看日志: tail /tmp/agent-init.log"
      tail -20 /tmp/agent-init.log 2>/dev/null || true
      exit 1
    fi
  fi
}

install_systemd() {
  if [[ "${INSTALL_SERVICE}" != "true" ]]; then
    log_warn "跳过 systemd 服务注册"
    return
  fi

  if [[ "${OS_NAME}" == "macos" ]]; then
    log_info "macOS 使用 launchd 管理..."
    install_launchd
    return
  fi

  if ! command -v systemctl &>/dev/null; then
    log_warn "未检测到 systemd，跳过服务注册"
    return
  fi

  SERVICE_FILE="/etc/systemd/system/server-monitor-agent.service"

  ${SUDO} bash -c "cat > ${SERVICE_FILE}" <<EOF
[Unit]
Description=Server-Monitor Agent
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
WorkingDirectory=${INSTALL_DIR}
EnvironmentFile=${INSTALL_DIR}/.env
ExecStart=$(command -v node) api/agent.js
Restart=always
RestartSec=5
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
EOF

  ${SUDO} systemctl daemon-reload
  ${SUDO} systemctl enable server-monitor-agent

  log_ok "systemd 服务已注册"
}

install_launchd() {
  PLIST_FILE="/Library/LaunchDaemons/com.server-monitor.agent.plist"

  ${SUDO} bash -c "cat > ${PLIST_FILE}" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.server-monitor.agent</string>
  <key>ProgramArguments</key>
  <array>
    <string>$(command -v node)</string>
    <string>${INSTALL_DIR}/api/agent.js</string>
  </array>
  <key>WorkingDirectory</key>
  <string>${INSTALL_DIR}</string>
  <key>EnvironmentVariables</key>
  <dict>
    <key>AGENT_PORT</key>
    <string>${AGENT_PORT}</string>
    <key>JWT_SECRET</key>
    <string>${JWT_SECRET}</string>
    <key>ADMIN_USERNAME</key>
    <string>${ADMIN_USERNAME}</string>
    <key>ADMIN_PASSWORD</key>
    <string>${ADMIN_PASSWORD}</string>
  </dict>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
  <key>StandardOutPath</key>
  <string>/var/log/server-monitor-agent.log</string>
  <key>StandardErrorPath</key>
  <string>/var/log/server-monitor-agent.log</string>
</dict>
</plist>
EOF

  ${SUDO} launchctl unload "${PLIST_FILE}" 2>/dev/null || true
  ${SUDO} launchctl load "${PLIST_FILE}"
  log_ok "Agent 已注册到 launchd 并启动"
}

configure_firewall() {
  if command -v ufw &>/dev/null && ${SUDO} ufw status 2>/dev/null | grep -qi active; then
    if ! ${SUDO} ufw status numbered 2>/dev/null | grep -q "${AGENT_PORT}/tcp"; then
      ${SUDO} ufw allow "${AGENT_PORT}/tcp" >/dev/null
      log_ok "已允许 ${AGENT_PORT}/tcp (ufw)"
    fi
  elif command -v firewall-cmd &>/dev/null && ${SUDO} firewall-cmd --state 2>/dev/null | grep -qi running; then
    ${SUDO} firewall-cmd --permanent --add-port="${AGENT_PORT}/tcp" >/dev/null 2>&1
    ${SUDO} firewall-cmd --reload >/dev/null 2>&1
    log_ok "已允许 ${AGENT_PORT}/tcp (firewalld)"
  else
    log_info "未检测到可用防火墙，请手动在云服务商安全组开放 ${AGENT_PORT} 端口"
  fi
}

uninstall_agent() {
  log_info "开始卸载..."

  if command -v systemctl &>/dev/null; then
    ${SUDO} systemctl stop server-monitor-agent 2>/dev/null || true
    ${SUDO} systemctl disable server-monitor-agent 2>/dev/null || true
    ${SUDO} rm -f /etc/systemd/system/server-monitor-agent.service
    ${SUDO} systemctl daemon-reload
  fi

  if [[ "${OS_NAME}" == "macos" ]]; then
    ${SUDO} launchctl unload /Library/LaunchDaemons/com.server-monitor.agent.plist 2>/dev/null || true
    ${SUDO} rm -f /Library/LaunchDaemons/com.server-monitor.agent.plist
  fi

  ${SUDO} rm -rf "${INSTALL_DIR}"
  log_ok "已卸载 Agent，部署目录 ${INSTALL_DIR} 已清理"
  exit 0
}

show_summary() {
  SERVER_IP="$(curl -sS https://api.ipify.org 2>/dev/null || hostname -I | awk '{print $1}')"

  echo ""
  echo -e "${COLOR_CYAN}════════════════════════════════════════════════════════${COLOR_RESET}"
  echo -e "${COLOR_GREEN}  ✓ Agent 部署完成${COLOR_RESET}"
  echo -e "${COLOR_CYAN}════════════════════════════════════════════════════════${COLOR_RESET}"
  echo ""
  echo -e "${COLOR_BLUE}  Agent 地址:${COLOR_RESET}   http://${SERVER_IP}:${AGENT_PORT}"
  echo -e "${COLOR_BLUE}  WebSocket:${COLOR_RESET}   ws://${SERVER_IP}:${AGENT_PORT}/ws"
  echo -e "${COLOR_BLUE}  健康检查:${COLOR_RESET}    curl http://localhost:${AGENT_PORT}/api/health"
  echo ""
  echo -e "${COLOR_YELLOW}  ┌─────────────────────────────────────────────┐${COLOR_RESET}"
  echo -e "${COLOR_YELLOW}  │  ⚠  首次登录后请立即修改密码！              │${COLOR_RESET}"
  echo -e "${COLOR_YELLOW}  └─────────────────────────────────────────────┘${COLOR_RESET}"
  echo ""
  echo -e "${COLOR_BLUE}  管理员账户:${COLOR_RESET} ${ADMIN_USERNAME}"
  echo -e "${COLOR_BLUE}  管理员密码:${COLOR_RESET} ${ADMIN_PASSWORD}"
  echo -e "${COLOR_YELLOW}  ⚠ 请妥善保存以上凭据，切勿泄露${COLOR_RESET}"
  echo ""
  echo -e "${COLOR_BLUE}  修改密码（登录后执行）:${COLOR_RESET}"
  echo -e "  curl -X POST http://localhost:${AGENT_PORT}/api/auth/change-password \\"
  echo -e "    -H 'Content-Type: application/json' \\"
  echo -e "    -H 'Authorization: Bearer <JWT令牌>' \\"
  echo -e "    -d '{\"oldPassword\":\"${ADMIN_PASSWORD}\",\"newPassword\":\"新密码\"}'"
  echo ""
  echo -e "${COLOR_BLUE}  常用命令:${COLOR_RESET}"
  echo -e "  启动服务:  ${SUDO} systemctl start server-monitor-agent"
  echo -e "  停止服务:  ${SUDO} systemctl stop server-monitor-agent"
  echo -e "  重启服务:  ${SUDO} systemctl restart server-monitor-agent"
  echo -e "  查看状态:  ${SUDO} systemctl status server-monitor-agent"
  echo -e "  查看日志:  ${SUDO} journalctl -u server-monitor-agent -f --since today"
  echo -e "  卸载服务:  ./deploy.sh --uninstall"
  echo ""
  echo -e "${COLOR_CYAN}════════════════════════════════════════════════════════${COLOR_RESET}"
  echo ""
}

main() {
  if [[ "${MODE}" == "uninstall" ]]; then
    uninstall_agent
  fi

  check_os
  check_root
  install_node
  generate_secret
  copy_agent_files
  configure_env
  install_systemd        # 先注册 systemd 服务
  start_and_verify       # 再启动（systemd 方式读取 .env）
  configure_firewall
  show_summary
}

main "$@"
