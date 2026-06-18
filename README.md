# 🖥️ 服务器监控面板

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/xcicvas/server-monitor?style=flat-square)](https://github.com/xcicvas/server-monitor/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/xcicvas/server-monitor?style=flat-square)](https://github.com/xcicvas/server-monitor/network)
[![Node.js](https://img.shields.io/badge/Node.js-20+-green?style=flat-square&logo=nodedotjs)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

**简洁、实用、专注核心功能的服务器监控工具**

监控面板地址 → http://localhost:5173

</div>

---

## 📌 项目简介

服务器监控面板是一款轻量级的运维工具，旨在帮助运维工程师、开发者或个人站长**集中管理多台服务器的实时状态**。

不同于复杂的监控系统（如 Prometheus + Grafana），本项目追求**开箱即用、无需配置**的体验。只需在被监控服务器上运行一个 Agent，即可在浏览器中看到服务器的 CPU、内存、磁盘、网络等关键指标。

### 核心特性

| 特性 | 说明 |
|------|------|
| 🌐 **多服务器支持** | 同时监控任意数量的服务器，各服务器独立配置刷新间隔 |
| 📊 **实时指标** | CPU 使用率、内存占用、磁盘空间、网络接口状态、系统负载、磁盘 I/O |
| 🔌 **WebSocket 实时推送** | Agent 每 10 秒主动推送指标数据，零轮询延迟，连接断开自动重连 |
| 🔐 **JWT 用户认证** | Agent 支持用户注册/登录/改密，bcrypt 密码哈希，24 小时令牌过期，审计日志 |
| 📈 **历史趋势图** | CPU/内存 实时 Sparkline 曲线，回溯最近 30 次采集记录 |
| 💓 **健康评分** | 综合 CPU(35%) + 内存(35%) + 磁盘(30%) 计算 0-100 健康分，环形进度可视化 |
| ⚡ **滚动数字动画** | 数值变化时 easeOutExpo 缓动平滑过渡，避免突兀跳变 |
| 🔴 **智能告警** | CPU/内存/磁盘任一超过 85% 阈值时自动显示告警徽章和边框高亮 |
| 💡 **脉冲状态灯** | 在线/检测中/离线 三种状态，带呼吸脉冲动画 |
| 💾 **本地存储** | 所有配置存在浏览器 localStorage，关闭浏览器不丢失，支持导入/导出备份 |
| 🪶 **轻量 Agent** | 仅 Node.js 代码，CPU/内存占用可忽略不计，支持 Docker 部署 |
| 🎨 **清爽界面** | 暖色极简设计，去除一切视觉噪音，专注数据本身 |
| 🛡️ **安全加固** | JWT 认证 + CORS 限制 + 限速 + Helmet 安全头 + SSRF 防护 + 审计日志 |
| 📋 **总览统计** | 顶部网格展示所有服务器平均 CPU/内存/健康分，汇总一目了然 |
| 🌙 **深色模式** | 一键切换浅色/深色主题，记忆偏好，首次访问跟随系统 |
| 📁 **数据导出** | 一键导出为 JSON（结构化数据）或 CSV（Excel 可打开） |
| ⏰ **实时时钟** | Header 显示当前时间和日期，掌握监控时机 |
| 📦 **Docker 支持** | 一键 `docker-compose up` 部署，容器化运行 Agent |
| 📝 **进程监控** | 查看服务器运行进程列表，了解资源消耗分布 |
| 📊 **系统负载** | 展示 1/5/15 分钟平均负载，直观了解服务器繁忙程度 |
| 🖥️ **磁盘 I/O** | 预留结构监控磁盘读写状态，识别 I/O 瓶颈 |

---

## 🏗️ 系统架构

本系统由两个独立组件组成，**分开部署、各自运行**：

```
┌─────────────────────────────────────────────────────────┐
│                      监控面板                             │
│                  http://localhost:5173                    │
│                                                          │
│  · 在浏览器中运行                                        │
│  · 展示各服务器的实时指标                                  │
│  · 管理服务器列表（添加/删除/手动刷新）                    │
│  · 数据完全存储在浏览器本地（localStorage）                │
│  · WebSocket 实时接收 Agent 推送的数据                    │
└──────────────────────────┬──────────────────────────────┘
                           │
                    WebSocket 长连接（10秒推送）
                    自动重连 + JWT 令牌认证
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                      Agent 端                             │
│                 node api/agent.js                         │
│                  默认端口: 7001                           │
│                                                          │
│  · 运行在被监控的服务器上                                  │
│  · 提供 HTTP REST API + WebSocket 实时推送               │
│  · 支持用户注册/登录/改密（bcrypt + JWT）                 │
│  · 写审计日志到 ./data/audit.log                          │
│  · 写历史数据到 ./data/metrics_history.json（保留288条）   │
│  · 支持 Linux / macOS / Windows / Docker                 │
└─────────────────────────────────────────────────────────┘
```

> **数据流向**：面板（浏览器）⇌ WebSocket ⇌ Agent → 操作系统。数据不经任何第三方服务器。

### Agent HTTP 接口

| 接口 | 方法 | 认证 | 说明 | 典型响应 |
|------|------|------|------|---------|
| `/api/auth/login` | POST | 无 | 用户登录，返回 JWT token | `{ ok: true, token: "...", username: "..." }` |
| `/api/auth/register` | POST | 无 | 用户注册（首次设置管理员密码） | `{ ok: true }` |
| `/api/auth/change-password` | POST | JWT | 修改当前用户密码 | `{ ok: true }` |
| `/api/metrics` | GET | JWT | **轻量指标**（推荐） | CPU、内存、磁盘、网络数据 |
| `/api/system` | GET | JWT | 完整系统快照 | 含进程信息、负载、CPU 详细等 |
| `/api/processes` | GET | JWT | 进程列表 | 进程 ID、名称、CPU%、内存% |
| `/api/health` | GET | 无 | 健康检查 | `{ ok: true, status: "online" }` |
| `/ws` | WebSocket | JWT | 实时指标推送，每 10 秒一次 | 主动推送指标数据 |

### WebSocket 认证方式

WebSocket 连接时将 JWT token 放在 query 参数中：

```
ws://localhost:7001/ws?token=<JWT_TOKEN>
```

连接成功后，Agent 每 10 秒主动推送一次指标数据，无需客户端轮询。

---

## 🚀 快速开始

### 环境要求

- **Node.js**：18.0 或更高版本
- **npm**：9.0 或更高版本
- **Docker**（可选）：用于容器化部署

### 方式一：手动部署

#### 第一步：克隆项目

```bash
git clone https://github.com/xcicvas/server-monitor.git
cd server-monitor
```

#### 第二步：安装依赖

```bash
npm install
```

#### 第三步：启动面板

```bash
npm run dev
```

终端显示类似如下信息后：

```
  VITE v6.4.3  ready in 162 ms

  ➜  Local:   http://localhost:5173/
```

在浏览器打开 **http://localhost:5173** 即可看到监控面板。

#### 第四步：启动 Agent

**在被监控的服务器上**（可以跟面板同一台，也可以是不同的机器），执行：

```bash
node api/agent.js
```

Agent 启动后会显示：

```
╔══════════════════════════════════════════════════════════╗
║   🖥️  服务器监控 Agent v2.0                              ║
║                                                          ║
║   WebSocket:  ws://localhost:7001/ws                     ║
║   HTTP API:   http://localhost:7001                      ║
║   指标接口:   http://localhost:7001/api/metrics          ║
║   系统快照:   http://localhost:7001/api/system           ║
║   进程列表:   http://localhost:7001/api/processes        ║
║   健康检查:   http://localhost:7001/api/health            ║
║                                                          ║
║   ⚠️  未设置 AUTH_TOKEN，采用默认密钥（仅限本地使用！）    ║
╚══════════════════════════════════════════════════════════╝
```

#### 第五步：设置管理员密码

首次启动 Agent 后，需要先注册管理员账户：

```bash
curl -X POST http://localhost:7001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "你的强密码"}'
```

#### 第六步：在面板中添加服务器

1. 打开面板 http://localhost:5173
2. 点击右上角「**添加服务器**」按钮
3. 填写表单：
   - **服务器名称**：自定义名称，如 `生产环境-北京`
   - **Agent 地址**：Agent 的 URL，如 `http://192.168.1.100:7001`
   - **用户名/密码**：在 Agent 端注册的管理员账户
   - **刷新间隔**：数据更新频率，默认 5 秒（范围 1-300 秒）
4. 点击「**登录并添加**」

添加成功后，卡片会立即显示该服务器的实时指标，数据每 10 秒自动推送更新。

### 方式二：Docker 部署（推荐）

#### 启动 Agent 容器

```bash
# 克隆项目
git clone https://github.com/xcicvas/server-monitor.git
cd server-monitor

# 启动 docker-compose（Agent + 面板一键部署）
docker-compose up -d

# 查看日志
docker-compose logs -f agent
```

docker-compose 默认配置：

- Agent: `http://localhost:7001`
- 面板: `http://localhost:5173`
- 数据卷: `./data` 目录持久化存储

#### 自定义 Docker 启动参数

```bash
# 自定义端口和令牌
AGENT_PORT=8000 AUTH_TOKEN=mysecret123 docker-compose up -d

# 查看容器状态
docker-compose ps

# 进入 Agent 容器内执行命令
docker-compose exec agent sh
```

---

## 📖 指标说明

| 指标 | 说明 | 颜色规则 |
|------|------|---------|
| **CPU** | 处理器使用率百分比 | 绿 < 60% · 黄 60-80% · 红 > 80% |
| **内存** | 内存使用率 + 已用/总量 | 同上 |
| **磁盘** | 磁盘使用率 + 已用/总量 | 同上 |
| **网络** | 网络接口数量 + 实时吞吐速率 | 固定紫色 |
| **系统负载** | 1/5/15 分钟平均负载 | 绿 < CPU核心数 · 黄 接近核心数 · 红 超过核心数 |
| **磁盘 I/O** | 磁盘读写状态 | 固定蓝色 |
| **进程列表** | 运行中进程（ID/名称/CPU%/内存%） | 按 CPU 占用排序 |
| **在线时长** | 服务器连续运行时间 | — |

---

## 🔐 用户认证与安全

### 首次启动配置

Agent 首次运行无需预设密码，通过注册接口创建第一个管理员账户：

```bash
curl -X POST http://localhost:7001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "你的强密码"}'
```

### 登录获取 Token

```bash
curl -X POST http://localhost:7001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "你的强密码"}'

# 返回：
# {
#   "ok": true,
#   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
#   "username": "admin",
#   "expiresIn": "24h"
# }
```

### JWT Token 使用方式

获取 token 后，在请求头中携带：

```bash
curl http://localhost:7001/api/metrics \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

### 修改密码

```bash
curl -X POST http://localhost:7001/api/auth/change-password \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -d '{"oldPassword": "旧密码", "newPassword": "新密码"}'
```

### Token 过期时间

- 默认过期时间：**24 小时**
- 可通过环境变量 `JWT_EXPIRY` 自定义，如 `JWT_EXPIRY=7d` 表示 7 天

### 审计日志

所有敏感操作均会记录到 `./data/audit.log`：

```
2025/01/15 14:32:01 [审计] 用户登录成功: admin from 192.168.1.100
2025/01/15 14:35:12 [审计] 指标数据获取: admin from 192.168.1.100
2025/01/15 15:01:00 [审计] 密码修改成功: admin from 192.168.1.100
2025/01/15 15:10:23 [警告] 登录失败: admin from 192.168.1.100（密码错误）
```

### 历史数据持久化

Agent 将最近 288 条指标写入 `./data/metrics_history.json`（约 6 小时数据，10 秒/条），用于故障复盘和分析。

---

## 📁 项目结构

```
server-monitor/
├── api/
│   └── agent.js              # Agent 端：系统指标采集 + WebSocket 推送 + 用户认证
├── src/
│   ├── App.tsx               # 主应用组件（WebSocket 自动连接管理）
│   ├── main.tsx              # 入口文件
│   ├── index.css             # 全局样式 + 深色模式
│   ├── components/
│   │   ├── Header.tsx               # 顶部导航栏（时钟 + 主题 + 导出 + 添加）
│   │   ├── ServerMonitorCard.tsx    # 服务器指标卡片
│   │   ├── AddServerModal.tsx       # 添加服务器弹窗（内嵌登录流程）
│   │   ├── OverviewStats.tsx        # 总览统计网格
│   │   ├── ExportMenu.tsx           # 导出下拉菜单
│   │   ├── ThemeToggle.tsx          # 主题切换按钮
│   │   ├── LoginPage.tsx            # 登录页面组件
│   │   ├── EmptyState.tsx           # 空状态引导
│   │   ├── AnimatedNumber.tsx       # 数字滚动动画
│   │   ├── SparklineChart.tsx       # SVG 趋势曲线图
│   │   ├── HealthScore.tsx          # 环形健康评分
│   │   └── PulseIndicator.tsx       # 脉冲状态指示灯
│   ├── hooks/
│   │   ├── useAuth.ts               # JWT 认证状态管理
│   │   ├── useWebSocket.ts          # WebSocket 连接管理（自动重连）
│   │   └── useTheme.ts              # 主题状态管理
│   └── store/
│       └── serverStore.ts           # Zustand 状态管理（localStorage 持久化）
├── data/                    # Agent 运行时数据目录（自动创建）
│   ├── users.json          # 用户数据（bcrypt 哈希）
│   ├── audit.log           # 审计日志
│   └── metrics_history.json # 历史指标数据
├── scripts/
│   └── deploy.sh            # 一键部署脚本（Linux / macOS）
├── Dockerfile               # 多阶段构建镜像
├── docker-compose.yml       # Docker Compose 编排
├── package.json
├── tailwind.config.js       # Tailwind CSS 配置
├── vite.config.ts           # Vite 构建配置
└── README.md
```

---

## ⚙️ 技术栈

| 层级 | 技术 | 说明 |
|------|------|------|
| **前端框架** | React 18 + TypeScript | 组件化开发，类型安全 |
| **构建工具** | Vite 6 | 极速开发服务器和构建 |
| **样式** | Tailwind CSS 3 | 原子化 CSS，快速构建界面 |
| **状态管理** | Zustand + localStorage | 轻量状态库，本地持久化 |
| **实时通信** | WebSocket (ws) | Agent 主动推送，双向实时 |
| **用户认证** | JWT (jsonwebtoken) + bcryptjs | 令牌认证，密码哈希 |
| **图标** | Lucide React | 简洁一致的 SVG 图标库 |
| **字体** | Sora + DM Sans + JetBrains Mono | 现代无衬线 + 等宽字体 |
| **Agent** | Node.js + Express + ws | HTTP REST + WebSocket 服务 |
| **容器化** | Docker + Docker Compose | 一键部署，隔离运行 |

---

## 🛡️ 安全使用指南

本章节详细介绍如何加固你的 Agent 探针服务，防止未授权访问和恶意请求。

### 1. 用户认证（JWT Bearer Token）

默认情况下，Agent 开启 JWT 认证，所有涉及数据的 API 均需要有效 token：

```bash
# 首次注册（创建管理员账户）
curl -X POST http://localhost:7001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "你的强密码"}'

# 登录获取 token
curl -X POST http://localhost:7001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "你的密码"}'
```

> ⚠️ **重要提示**：首次部署必须调用 `/api/auth/register` 创建管理员账户，否则无法正常使用。

### 2. 设置 JWT 密钥

生产环境务必设置强密钥，防止 token 被伪造：

```bash
# 方式一：环境变量（推荐）
JWT_SECRET=$(openssl rand -base64 32) node api/agent.js

# 方式二：永久配置（写入 .bashrc 或 .profile）
echo 'export JWT_SECRET=你的强密钥' >> ~/.bashrc
source ~/.bashrc
node api/agent.js
```

### 3. 限制来源域名（CORS）

如果你的 Agent 只服务于特定域名或 IP，可以限制只能从指定来源访问：

```bash
# 单个来源
ALLOWED_ORIGINS=http://localhost:5173 node api/agent.js

# 多个来源（用英文逗号分隔，无空格）
ALLOWED_ORIGINS=http://localhost:5173,https://example.com node api/agent.js
```

> 💡 **提示**：本地开发时建议同时设置 `ALLOWED_ORIGINS=http://localhost:5173`，否则浏览器控制台会报 CORS 错误。

### 4. 请求频率限制（防滥用）

Agent 内置了基于 IP 的请求频率限制，防止恶意频繁请求：

- **时间窗口**：10 秒
- **请求上限**：60 次
- **触发后的响应**：返回 `429 请求过于频繁，请稍后再试`

### 5. 安全配置组合示例

**本地开发**：
```bash
JWT_SECRET=dev_secret_123 ALLOWED_ORIGINS=http://localhost:5173 node api/agent.js
```

**内网生产环境**：
```bash
JWT_SECRET=$(openssl rand -base64 32) node api/agent.js
# 内网本身已隔离，可不设置 ALLOWED_ORIGINS
```

**公网生产环境（最高安全）**：
```bash
JWT_SECRET=$(openssl rand -base64 32) \
ALLOWED_ORIGINS=https://你的域名.com \
node api/agent.js
```

### 6. 令牌生成工具

可以使用以下方式生成安全的随机密钥：

```bash
# Linux/macOS（使用 OpenSSL）
openssl rand -base64 32

# Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 7. Agent 内置安全特性（自动生效）

| 特性 | 说明 |
|------|------|
| **安全响应头** | 使用 Helmet.js 自动设置 CSP、X-Content-Type-Options、X-Frame-Options 等头部 |
| **JWT 过期验证** | 令牌含 exp claim，过期后自动拒绝 |
| **bcrypt 密码哈希** | 密码使用 bcrypt 单向哈希，不可逆 |
| **审计日志** | 所有敏感操作记录时间、用户、IP 到 `./data/audit.log` |
| **错误信息脱敏** | API 错误不返回内部路径或堆栈，只返回通用提示 |
| **请求体限制** | JSON 请求体最大 10KB，防止恶意大体量请求 |
| **IP 识别** | 开启 `trust proxy` 正确获取真实客户端 IP（配合反向代理使用） |
| **去除指纹头** | 禁用 `X-Powered-By` 等暴露服务器信息头部 |

### 8. 面板端安全措施

| 措施 | 说明 |
|------|------|
| **Token 混淆存储** | 面板本地 Base64 编码存储令牌和密码，防止 DevTools 直接明文查看 |
| **localStorage 持久化** | 令牌持久化存储，关闭浏览器后需重新登录（24 小时过期） |
| **SSRF 防护** | 添加服务器时检查地址，禁止指向内网 IP（127.x、10.x、172.16-31.x、192.168.x） |
| **WebSocket 认证** | 连接时验证 JWT token，无效 token 拒绝连接 |

---

## 🏭 进程守护与生产运维

Agent 建议通过进程守护工具管理，确保崩溃后自动重启。

### pm2（推荐）

```bash
# 安装
npm install -g pm2

# 启动（带完整配置）
JWT_SECRET=你的密钥 AUTH_TOKEN=你的令牌 pm2 start api/agent.js --name server-monitor

# 保存进程列表，开机自动启动
pm2 save
pm2 startup

# 常用命令
pm2 status              # 查看状态
pm2 logs server-monitor # 查看日志
pm2 restart server-monitor # 重启
pm2 stop server-monitor   # 停止
```

### systemd（Linux 服务器）

```ini
# /etc/systemd/system/server-monitor-agent.service
[Unit]
Description=Server Monitor Agent v2.0
After=network.target

[Service]
Type=simple
User=your-user
WorkingDirectory=/path/to/project
Environment=JWT_SECRET=你的强密钥
Environment=ALLOWED_ORIGINS=https://你的域名.com
ExecStart=/usr/bin/node /path/to/project/api/agent.js
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable server-monitor-agent
sudo systemctl start server-monitor-agent
sudo systemctl status server-monitor-agent
```

### 一键部署脚本（推荐）

项目提供了开箱即用的一键部署脚本，适用于 Ubuntu / Debian / CentOS / RHEL / Rocky / AlmaLinux / macOS。

```bash
# 克隆项目
git clone https://github.com/xcicvas/server-monitor.git
cd server-monitor

# 赋予脚本执行权限
chmod +x scripts/deploy.sh

# 全自动部署（默认配置，自动生成密钥和密码）
sudo ./scripts/deploy.sh

# 自定义参数部署
sudo ./scripts/deploy.sh \
  -p 7001 \
  -j my_very_long_secret_key_here \
  -u admin \
  -w your_strong_password \
  -o https://monitor.yourdomain.com

# 查看帮助
./scripts/deploy.sh -h

# 卸载
sudo ./scripts/deploy.sh --uninstall
```

**脚本自动完成以下操作：**

| 步骤 | 说明 |
|------|------|
| 环境检测 | 识别操作系统、架构，自动使用 sudo 提权 |
| Node.js 安装 | 未安装或版本低于 20 时，自动通过 NodeSource 安装 |
| Agent 部署 | 复制 `api/agent.js` 到 `/opt/server-monitor-agent`，安装依赖 |
| JWT 密钥 | 自动生成 32 位随机密钥，或通过 `-j` 参数指定 |
| 管理员账户 | 自动生成密码，或通过 `-u` / `-w` 参数指定 |
| systemd 服务 | 注册为系统服务，开机自启，崩溃自动重启 |
| 防火墙配置 | 自动开放 ufw / firewalld 的指定端口 |
| 信息汇总 | 输出 Agent 地址、WebSocket、凭据、常用管理命令 |

**部署成功后输出示例：**

```
✓ Agent 部署完成
  Agent 地址:   http://192.168.1.100:7001
  WebSocket:    ws://192.168.1.100:7001/ws
  管理员账户:   admin
  管理员密码:   自动生成的密码（请妥善保存）
  启动服务:     sudo systemctl start server-monitor-agent
  查看状态:     sudo systemctl status server-monitor-agent
  查看日志:     sudo journalctl -u server-monitor-agent -f
  重启服务:     sudo systemctl restart server-monitor-agent
  卸载服务:     ./scripts/deploy.sh --uninstall
```

> 💡 **提示**：如需将面板部署在其他域名访问 Agent，请通过 `-o https://你的域名.com` 设置 CORS 白名单；云服务器还需要在云服务商安全组面板开放对应端口。

### Docker 部署（最简方式）

```bash
# 一键启动（Agent + 面板）
docker-compose up -d

# 仅启动 Agent（需自行提供环境变量）
docker run -d \
  --name server-monitor-agent \
  -p 7001:7001 \
  -e JWT_SECRET=你的强密钥 \
  -e ALLOWED_ORIGINS=http://localhost:5173 \
  -v $(pwd)/data:/app/data \
  xcicvas/server-monitor-agent
```

### Agent 优雅关闭

Agent 支持 `SIGTERM` / `SIGINT` 信号，收到后会在 10 秒内强制退出。配合 systemd/pm2 使用时，升级或重启前发送 `SIGTERM` 即可保证所有请求处理完毕。

---

## 🔧 高级用法

### 自定义 Agent 端口

默认端口是 `7001`，如果该端口被占用，可以自定义：

```bash
# 环境变量
AGENT_PORT=8000 node api/agent.js
```

### 调整 WebSocket 推送间隔

Agent 默认每 10 秒推送一次指标，可通过环境变量调整：

```bash
# 5 秒推送一次
WS_INTERVAL=5 node api/agent.js
```

### 调整历史数据保留条数

历史数据默认保留 288 条（约 6 小时），可调整：

```bash
# 保留 1000 条（约 2.7 小时@10秒间隔）
HISTORY_MAX=1000 node api/agent.js
```

### 监控多台服务器

对每一台要监控的服务器，重复以下步骤：

1. 将 `api/agent.js` 上传到该服务器
2. 运行 `node api/agent.js`（可自定义端口）
3. 在面板中点击「添加服务器」，填入该服务器的 Agent 地址 + 用户名/密码

各服务器独立运行、独立配置刷新间隔，互不影响。

---

## ❓ 常见问题

### Q: 面板显示"离线"，无法连接

**原因 1**：Agent 进程未启动
```bash
# 确认 Agent 正在运行
curl http://服务器IP:7001/api/health
# 返回 {"ok":true,"status":"online"} 表示正常
```

**原因 2**：未注册管理员账户
```bash
# 先注册账户
curl -X POST http://localhost:7001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "你的密码"}'
```

**原因 3**：防火墙拦截
```bash
# 云服务器需在安全组中开放 7001 端口
# Linux 检查防火墙
sudo firewall-cmd --list-ports
sudo iptables -L -n | grep 7001
```

### Q: WebSocket 连接失败

- 确认 Agent 已启动并监听
- 检查浏览器控制台是否有 CORS 错误
- 确认 JWT token 未过期（24 小时），过期需重新登录

**原因 1**：地址填写错误
```
# 正确格式
http://192.168.1.100:7001
http://example.com:7001

# 错误格式（缺少协议头）
192.168.1.100:7001      ← 缺少 http://
```

### Q: Agent 占用多少系统资源？

**实测数据**：
- CPU：几乎为 0，每次请求耗时 < 5ms
- 内存：约 30-50MB（Express 运行时）
- 网络：仅响应面板的轮询请求，无主动外发流量

### Q: 数据存储在哪里？隐私安全吗？

所有数据（服务器列表、配置）存储在**浏览器 localStorage** 中，完全不上传到任何服务器。Agent 只返回系统指标数据，不执行任何写操作，无法通过本工具控制服务器。

通过右上角「导出」菜单可以随时将配置导出为 JSON 文件备份，换浏览器或换电脑后可用「导入配置」一键恢复。导出的文件不含实时指标，仅包含服务器地址和认证信息。

### Q: 支持哪些操作系统？

Agent 基于 Node.js 的 `os` 模块实现，理论上支持所有 Node.js 支持的系统：

| 系统 | 支持状态 |
|------|---------|
| Linux | ✅ 完全支持 |
| macOS | ✅ 完全支持 |
| Windows | ✅ 完全支持 |
| Docker | ✅ 完全支持 |

---

## 🔄 版本历史

### v2.0.0 （最新）
**全面重构 —— WebSocket 实时推送 + JWT 用户认证**

- **WebSocket 实时推送**：Agent 每 10 秒主动推送指标数据，移除 HTTP 轮询，连接断开自动重连
- **JWT 用户认证**：新增注册/登录/改密接口，bcrypt 密码哈希，24 小时令牌过期
- **审计日志**：所有敏感操作记录到 `./data/audit.log`（登录/改密/数据访问）
- **历史数据持久化**：Agent 端写入 `./data/metrics_history.json`，保留 288 条约 6 小时数据
- **进程监控**：新增 `/api/processes` 接口，返回运行中进程列表（ID/名称/CPU%/内存%）
- **系统负载**：新增 `os.loadavg()` 指标，展示 1/5/15 分钟平均负载
- **磁盘 I/O**：预留结构监控磁盘读写状态
- **Docker 支持**：新增 Dockerfile（多阶段构建）+ docker-compose.yml 一键部署
- **前端 Hooks**：新增 `useAuth`（JWT 状态管理）、`useWebSocket`（WebSocket 连接管理）
- **AddServerModal 重构**：改为登录流程，认证成功后存储 JWT token/用户名/密码

### v1.4.1
- **配置持久化**：从 sessionStorage 升级为 localStorage，关闭浏览器不丢失
- **导入/导出配置**：支持导出 JSON 备份文件，导入一键恢复（换设备也不怕）
- **Agent 优雅关闭**：支持 SIGTERM/SIGINT 信号，10 秒强制退出保护
- **Agent 请求超时**：令牌模式下请求最长 5 秒，超时返回 408
- **进程守护文档**：新增 pm2 和 systemd 配置示例

### v1.4.0
- **总览统计卡片**：顶部网格展示所有服务器平均 CPU/内存/健康分
- **深色模式**：一键切换浅色/深色主题，记忆用户偏好，首次访问跟随系统
- **数据导出**：支持导出为 JSON（完整结构化数据）和 CSV（Excel 可打开）
- **实时时钟**：Header 显示当前时间和日期
- **Header 增强**：主题切换按钮、导出下拉菜单

### v1.3.0
- **历史趋势图**：CPU/内存 Sparkline 曲线，保留最近 30 次采集记录
- **健康评分**：综合 CPU(35%) + 内存(35%) + 磁盘(30%) 计算 0-100 健康分，环形进度可视化
- **滚动数字动画**：数值变化时 easeOutExpo 缓动平滑过渡
- **智能告警**：CPU/内存/磁盘任一项超过 85% 阈值时卡片边框变红 + 告警徽章
- **脉冲状态灯**：在线/检测中/离线三态呼吸脉冲动画

### v1.2.0
- **全面安全加固**：引入 Bear Token 认证、IP 限流（滑动窗口）、可配置 CORS 限制
- **Agent 端**：安装 Helmet 安全响应头、隐藏 MAC 地址、错误脱敏、禁用 X-Powered-By
- **面板端**：Token 混淆存储、禁止内网 IP 输入（防 SSRF）、sessionStorage 自动清除
- **Agent 启动控制台**：三色状态输出 + 未配置令牌警告

### v1.1.0
- **Agent + 面板分离架构**：从简单端口探测升级为真实系统指标采集
- **支持 CPU、内存、磁盘、网络四大指标**
- **暖色极简 UI**：Sora + DM Sans 字体，去除霓虹发光效果
- **本地 sessionStorage 持久化**

### v1.0.0
- 初始版本，简单的 HTTP 探测面板

---

## 📄 开源许可

本项目基于 [MIT License](LICENSE) 开源，可以自由使用、修改和分发。

---

<div align="center">

**如果这个项目对你有帮助，欢迎 ⭐ Star！**

</div>
