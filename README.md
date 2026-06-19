# 🖥️ 服务器探针面板

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/xcicvas/server-monitor?style=flat-square)](https://github.com/xcicvas/server-monitor/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/xcicvas/server-monitor?style=flat-square)](https://github.com/xcicvas/server-monitor/network)
[![Node.js](https://img.shields.io/badge/Node.js-20+-green?style=flat-square&logo=nodedotjs)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

**支持多服务器添加、WebSocket 实时推送、JWT 认证的系统监控面板**

</div>

---

## 📌 项目简介

服务器探针面板是一套轻量级运维工具，**Agent + 面板分离部署**，在被监控服务器上运行 Agent，即可在浏览器中集中查看所有服务器的实时指标。

- **零配置**：一个 `node api/agent.js` 即可运行
- **多服务器**：同时监控任意数量服务器，各服务器独立运行
- **实时推送**：WebSocket 每 10 秒主动推送，连接断开自动重连
- **安全认证**：JWT + bcrypt + 审计日志 + 限速
- **数据私密**：所有配置存在浏览器本地，不上传任何数据

---

## 🏗️ 系统架构

```
┌────────────────────────────────────────────────────┐
│                     监控面板                         │
│                 React + TypeScript                  │
│              http://localhost:5173                  │
│                                                     │
│  · WebSocket 自动连接所有 Agent                     │
│  · 实时展示 CPU/内存/磁盘/网络/健康评分/趋势图     │
│  · 配置存储在浏览器 localStorage（加密混淆）       │
│  · 支持添加/删除/刷新服务器                        │
└──────────────────────────┬─────────────────────────┘
                           │
                    WebSocket 长连接
                    每 10 秒推送一次
                    断开自动重连（指数退避）
                           │
                           ▼
┌────────────────────────────────────────────────────┐
│                    Agent 端                         │
│               Node.js + Express + ws                 │
│                 默认端口: 7001                        │
│                                                     │
│  · 采集系统指标（CPU/内存/磁盘/网络/负载/磁盘I/O） │
│  · 提供 REST API + WebSocket 推送                   │
│  · JWT 认证 + bcrypt 密码哈希                       │
│  · 审计日志 + 历史数据持久化                        │
│  · 支持 Linux / macOS / Windows / Docker          │
└────────────────────────────────────────────────────┘
```

> **数据流向**：面板（浏览器）⇌ WebSocket ⇌ Agent → 操作系统。数据不经过任何第三方服务器。

---

## ✨ 功能特性

| 分类 | 功能 | 说明 |
|------|------|------|
| **监控** | 多服务器 | 同时管理任意数量服务器，各服务器独立配置 |
| | 实时指标 | CPU、内存、磁盘、网络接口、系统负载（1/5/15分钟）、磁盘 I/O |
| | 进程列表 | 查看服务器运行中进程（CPU%/内存%/RSS） |
| | 健康评分 | 综合 CPU(35%) + 内存(35%) + 磁盘(30%) 计算 0-100 分 |
| | 趋势图 | CPU/内存 最近 30 条 Sparkline 曲线 |
| | 智能告警 | CPU/内存/磁盘任一超 85% 时卡片边框高亮 + 告警徽章 |
| **连接** | WebSocket 推送 | 每 10 秒主动推送，零轮询，断开自动重连 |
| | HTTP API | REST 接口保留，可用于脚本接入 |
| | 实时时钟 | Header 显示当前时间 |
| **安全** | JWT 认证 | bcrypt 哈希密码，令牌 24 小时过期 |
| | 敏感数据加密 | 面板 localStorage 中的 token/密码经过 XOR 混淆存储 |
| | 注册控制 | 注册接口默认关闭，需管理员 JWT 才能创建新账号 |
| | 审计日志 | 登录/注册/改密/数据访问全部记录到 audit.log |
| | 限速防暴 | IP 滑动窗口限速（60次/10秒），请求超时 5 秒 |
| | CORS 控制 | 可配置允许的来源域名，支持内网/公网 |
| | 安全响应头 | Helmet 自动设置 CSP/X-Frame-Options 等 |
| **界面** | 总览统计 | 顶部网格展示所有服务器在线数/平均CPU/平均内存/平均健康分 |
| | 深色模式 | 一键切换亮/暗主题，记忆偏好 |
| | 脉冲状态灯 | 在线/检测中/离线 三态呼吸动画 |
| | 数据导出 | JSON（结构化）或 CSV（Excel 可打开） |
| | 导入/导出配置 | JSON 备份，换设备一键恢复 |
| **部署** | 一键脚本 | `deploy.sh` 自动装 Node.js + 注册 systemd 服务 |
| | Docker | `docker-compose up` 容器化部署 Agent |
| | 进程守护 | systemd / pm2 / Docker 多方案 |

---

## 🚀 快速开始

> **两个组件，分开部署**：
> - **面板**（前端 React）：在你的电脑或专门的面板服务器上运行，通过浏览器访问，集中显示所有服务器状态
> - **Agent**（Node.js）：在**每台被监控的服务器**上运行，负责采集系统指标并通过 WebSocket 推送给面板
>
> 👉 `scripts/deploy.sh` **仅用于部署 Agent**，面板需要手动启动

### 第一步：启动面板（本地快速体验）

在你的电脑或面板服务器上：

```bash
# 克隆项目
git clone https://github.com/xcicvas/server-monitor.git
cd server-monitor

# 安装依赖
npm install

# 启动面板（浏览器访问 http://localhost:5173）
npm run dev
```

也可以构建生产版本（体积更小，可部署到任意静态服务器）：

```bash
npm run build
# 产物在 dist/，用任意静态服务器托管（nginx、Vercel、GitHub Pages 等）
```

### 第二步：在被监控服务器上运行 Agent

#### 方式 A：一键部署（推荐，无需克隆整个项目）

**在被监控服务器上执行**（只需 agent.js 和 package.json）：

```bash
# 只下载部署脚本
curl -fsSL https://raw.githubusercontent.com/xcicvas/server-monitor/main/scripts/deploy.sh -o deploy.sh
chmod +x deploy.sh

# 全自动部署（自动生成密钥和随机密码）
sudo ./deploy.sh

# 自定义参数
sudo ./deploy.sh \
  -p 7001 \
  -j my_secret_key \
  -u admin \
  -w MyStr0ngPass \
  -o http://你的面板地址.com
```

脚本自动完成：检测系统 → 安装 Node.js → 复制 agent.js → 装依赖 → 配置账号 → 注册 systemd → 开放防火墙。

#### 方式 B：不安全模式（内网 / 开发环境）

Agent 支持 `INSECURE_MODE=true` — 关闭所有认证 / 限速 / helmet / 审计日志，面板直接通过 WebSocket 连接。

```bash
# 🔓 不安全模式：任何人可连接。仅推荐内网/开发环境
INSECURE_MODE=true node api/agent.js

# 🔒 安全模式：需账号密码登录，JWT 认证（默认）
node api/agent.js
```

面板中添加该服务器时勾选「不安全模式」即可跳过登录步骤。

#### 方式 C：Docker 部署 Agent

```bash
docker run -d \
  --name server-monitor-agent \
  --restart unless-stopped \
  -p 7001:7001 \
  -e JWT_SECRET=你的强密钥 \
  -e ADMIN_USERNAME=admin \
  -e ADMIN_PASSWORD=你的强密码 \
  -e ALLOWED_ORIGINS=http://localhost:5173 \
  -v $(pwd)/data:/app/data \
  node:20-alpine \
  sh -c "cd /app && npm install express helmet cors ws jsonwebtoken bcryptjs --omit=dev --silent && node agent.js"
```

> 或者用仓库自带的 `docker-compose.yml`（包含 agent + panel 两个容器）

#### 方式 D：本地直接运行（最简单，适合测试）

```bash
git clone https://github.com/xcicvas/server-monitor.git
cd server-monitor
npm install
node api/agent.js
```

Agent 启动后会显示：

```
╔══════════════════════════════════════════════════════════╗
║         🖥️  服务器监控 Agent                              ║
╠══════════════════════════════════════════════════════════╣
║  端口:      7001                                       ║
║  认证:      ✅ JWT 令牌（24小时过期）                   ║
║  CORS:      ⚠️ 未限制来源（建议内网使用）               ║
║  安全头:    ✅ Helmet 已启用                             ║
║  限速:      ✅ 60次/10秒                                ║
║  超时:      ✅ 5秒                                       ║
║  注册:      ✅ 已关闭（仅管理员可登录）                  ║
║  WebSocket: ✅ ws://localhost:7001/ws                    ║
║  历史:      ✅ 近 288 条（48 分钟）                      ║
║  审计日志:  ✅ ./data/audit.log                          ║
╠══════════════════════════════════════════════════════════╣
║  HTTP:     http://localhost:7001/api/metrics            ║
║  WS:       ws://localhost:7001/ws?token=<jwt>           ║
║  Health:   http://localhost:7001/api/health             ║
╚══════════════════════════════════════════════════════════╝
⚠️  警告：正在使用默认账号 admin/admin，登录后请立即修改密码
```

### 第三步：在面板中添加服务器

1. 打开面板 http://localhost:5173
2. 点击「添加服务器」
3. 填写：
   - **服务器名称**：如 `生产环境-北京`
   - **Agent 地址**：如 `http://192.168.1.100:7001`（必须包含协议头）
   - **用户名**：`admin`
   - **密码**：部署 Agent 时设置的密码
4. 点击「探测」确认连接，然后「添加」

添加成功后卡片立即显示该服务器的实时指标。

### 第四步（必做）：修改默认密码

```bash
# 1. 登录获取 JWT
TOKEN=$(curl -s -X POST http://AgentIP:7001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"默认密码"}' | jq -r '.token')

# 2. 修改密码
curl -X POST http://AgentIP:7001/api/auth/change-password \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"oldPassword":"默认密码","newPassword":"新密码（至少8位）"}'
```

---

## 🔐 认证与安全

### 安全设计

```
首次部署
    ↓
Agent 读取 ADMIN_USERNAME / ADMIN_PASSWORD 环境变量
    ↓
users.json 不存在时 → 自动创建第一个管理员账号
    ↓
登录获取 JWT → 添加服务器到面板
    ↓
面板 WebSocket 凭据加密后存 localStorage
```

### 登录

```bash
curl -X POST http://localhost:7001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin"}'

# 返回：
# { "ok": true, "token": "eyJ...", "username": "admin" }
```

### 修改密码

```bash
curl -X POST http://localhost:7001/api/auth/change-password \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <JWT_TOKEN>" \
  -d '{"oldPassword":"旧密码","newPassword":"新密码（至少8位）"}'
```

### 注册（默认关闭）

注册接口默认关闭。如需创建更多账号：

```bash
# 1. 先用现有账号登录获取 JWT
# 2. 启动 Agent 时设置 ALLOW_REGISTER=true
ALLOW_REGISTER=true node api/agent.js

# 3. 带上 JWT 注册新账号
curl -X POST http://localhost:7001/api/auth/register \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <管理员JWT>" \
  -d '{"username":"新用户名","password":"新密码（至少8位）"}'
```

> ⚠️ 建议创建完账号后重启 Agent，去掉 `ALLOW_REGISTER=true`

### 环境变量参考

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `AGENT_PORT` | `7001` | Agent 监听端口 |
| `JWT_SECRET` | `change-me-in-production` | JWT 签名密钥，**生产环境必须修改** |
| `JWT_EXPIRY` | `24h` | 令牌过期时间，如 `7d` |
| `ADMIN_USERNAME` | `admin` | 首次部署的默认管理员用户名 |
| `ADMIN_PASSWORD` | `admin` | 首次部署的默认管理员密码 |
| `ALLOWED_ORIGINS` | 无（不限制） | 允许的来源域名，逗号分隔，如 `http://localhost:5173,https://example.com` |
| `ALLOW_REGISTER` | `false` | 是否允许注册（需同时有管理员 JWT） |
| `HISTORY_DIR` | `./data` | 数据目录 |

### 面板端数据安全

面板中服务器列表（包含 token/用户名/密码）存储在浏览器 localStorage 中，敏感字段经过 XOR 混淆处理，并非明文存储。

---

## 📡 Agent 接口

| 接口 | 方法 | 认证 | 说明 |
|------|------|------|------|
| `/api/health` | GET | 无 | 健康检查，返回 hostname/platform/arch/uptime |
| `/api/auth/login` | POST | 无 | 登录，返回 JWT token |
| `/api/auth/register` | POST | JWT | 注册新账号（需管理员 JWT，`ALLOW_REGISTER=true`） |
| `/api/auth/change-password` | POST | JWT | 修改当前用户密码 |
| `/api/metrics` | GET | JWT | 获取系统指标（CPU/内存/磁盘/网络/负载/磁盘I/O） |
| `/api/processes` | GET | JWT | 获取进程列表（CPU%/内存%/RSS 排序） |
| `/api/history` | GET | JWT | 获取历史指标（最近 N 条） |
| `/ws` | WebSocket | JWT（query参数） | 实时指标推送，每 10 秒一次 |

### WebSocket 连接

```
ws://localhost:7001/ws?token=<JWT_TOKEN>
```

连接成功后 Agent 立即推送一次指标数据，此后每 10 秒推送一次。连接断开后自动重连（指数退避，最高 30 秒）。

### 指标字段

```json
{
  "hostname": "server-01",
  "platform": "linux",
  "arch": "x64",
  "uptime": 86400,
  "cpu": { "cores": 4, "model": "Intel...", "usagePercent": 35.2 },
  "memory": { "total": 8589934592, "used": 4294967296, "free": 4294967296, "usagePercent": 50.0 },
  "disk": { "total": 107374182400, "used": 53687091200, "free": 53687091200, "usagePercent": 50.0 },
  "network": { "interfaces": 2, "rxMbps": 0, "txMbps": 0 },
  "load": { "load1": 0.5, "load5": 0.3, "load15": 0.1, "loadPerCpu": 0.125, "cpuCount": 4 },
  "diskIO": { "readBytes": 0, "writeBytes": 0, "readMbps": 0, "writeMbps": 0 }
}
```

---

## 📖 指标说明

| 指标 | 说明 | 颜色规则 |
|------|------|---------|
| **CPU** | 处理器使用率百分比 | 绿 < 60% · 黄 60-80% · 红 > 80% |
| **内存** | 内存使用率 + 已用/总量 | 同上 |
| **磁盘** | 磁盘使用率 + 已用/总量 | 同上 |
| **网络** | 接口数量 + 实时吞吐 | 固定紫色 |
| **系统负载** | 1/5/15 分钟平均负载，参考 CPU 核心数 | 绿 < 核心数 · 黄 接近 · 红 超过 |
| **磁盘 I/O** | 磁盘读写速率 MB/s | 固定蓝色 |
| **健康评分** | 0-100 综合评分，环形进度 | 绿 ≥ 80 · 黄 ≥ 50 · 红 < 50 |
| **在线时长** | 服务器连续运行时间 | — |

---

## 📁 项目结构

```
server-monitor/
├── api/
│   └── agent.js              # Agent 端（指标采集 + WebSocket + 认证）
├── src/
│   ├── App.tsx               # 主应用（WebSocket 自动管理）
│   ├── main.tsx             # 入口
│   ├── index.css             # 全局样式 + 深色模式覆盖
│   ├── components/
│   │   ├── Header.tsx               # 顶部栏（时钟 + 主题 + 导出）
│   │   ├── ServerMonitorCard.tsx     # 服务器卡片
│   │   ├── AddServerModal.tsx       # 添加服务器（探测 + 登录）
│   │   ├── OverviewStats.tsx        # 总览统计
│   │   ├── ExportMenu.tsx          # 导出菜单
│   │   ├── ThemeToggle.tsx         # 主题切换
│   │   ├── EmptyState.tsx          # 空状态引导
│   │   ├── AnimatedNumber.tsx       # 数字滚动动画
│   │   ├── SparklineChart.tsx      # SVG 趋势图
│   │   ├── HealthScore.tsx         # 环形健康评分
│   │   ├── PulseIndicator.tsx      # 脉冲状态灯
│   │   └── ProgressIndicator.tsx   # 圆/条进度条
│   ├── hooks/
│   │   ├── useTheme.ts             # 主题状态（localStorage）
│   │   └── useWebSocket.ts         # WebSocket 连接管理（自动重连）
│   └── store/
│       └── serverStore.ts          # Zustand 状态（加密存储）
├── scripts/
│   └── deploy.sh            # 一键部署脚本（Linux / macOS）
├── data/                    # Agent 运行时数据（自动创建）
│   ├── users.json           # 用户账号（bcrypt 哈希）
│   ├── audit.log            # 审计日志
│   └── metrics_history.json # 历史指标（最近 288 条）
├── Dockerfile               # 多阶段构建
├── docker-compose.yml       # Docker Compose 编排
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

---

## ⚙️ 技术栈

| 层级 | 技术 |
|------|------|
| **前端框架** | React 18 + TypeScript |
| **构建工具** | Vite 6 |
| **样式** | Tailwind CSS 3 + 自定义 CSS 变量 |
| **状态管理** | Zustand + localStorage（加密存储） |
| **实时通信** | 原生 WebSocket（ws 库） |
| **用户认证** | JWT（jsonwebtoken）+ bcryptjs |
| **Agent** | Node.js + Express + ws |
| **安全** | Helmet + CORS + 限速 + 审计日志 |
| **容器化** | Docker + Docker Compose |
| **字体** | Sora + DM Sans + JetBrains Mono |
| **图标** | Lucide React |

---

## 🛡️ 生产环境加固清单

部署到公网前，务必完成以下检查：

### 1. 修改 JWT 密钥（必做）

```bash
# 自动生成强密钥
openssl rand -base64 32
```

### 2. 设置来源限制

```bash
# 只允许面板域名访问
ALLOWED_ORIGINS=https://你的域名.com node api/agent.js
```

### 3. 修改默认管理员密码（必做）

首次登录后立即修改，不要使用默认密码。

### 4. 云服务器开放端口

在云服务商安全组中开放 Agent 端口（默认 7001），并仅允许面板服务器 IP 访问。

### 5. 一键部署命令示例

```bash
sudo ./deploy.sh \
  -p 7001 \
  -j $(openssl rand -base64 32) \
  -u admin \
  -w $(openssl rand -base64 8) \
  -o http://你的面板域名.com
```

### Agent 内置安全特性（自动生效）

| 特性 | 说明 |
|------|------|
| **Helmet 安全头** | CSP/X-Frame-Options/X-Content-Type-Options 等 |
| **bcrypt 哈希** | 密码单向哈希，不可逆 |
| **JWT 过期验证** | token 含 exp claim，过期自动拒绝 |
| **限速** | IP 滑动窗口，60次/10秒 |
| **请求超时** | 5 秒超时，防止慢连接攻击 |
| **请求体限制** | JSON 最大 10KB |
| **审计日志** | 所有敏感操作记录 IP + 时间 + 用户 |
| **错误脱敏** | API 错误不返回内部路径或堆栈 |
| **去除指纹头** | 禁用 X-Powered-By |
| **IP 识别** | 开启 trust proxy，正确获取客户端 IP |

---

## 🔧 常见问题

### Q: 面板显示"离线"

```bash
# 确认 Agent 在运行
curl http://localhost:7001/api/health

# 返回示例：
# {
#   "ok": true,
#   "status": "online",
#   "hostname": "server-01",
#   "platform": "linux",
#   "uptime": 3600,
#   "timestamp": 1234567890
# }
```

可能原因：Agent 未启动 / 防火墙拦截 / 端口不对 / 账号密码错误

### Q: 注册接口返回 403

正常行为。注册接口默认关闭。如需开启，参考上方「注册」章节。

### Q: WebSocket 连接失败

- 检查地址格式：`http://服务器IP:7001`（必须有协议头）
- 检查 CORS：`ALLOWED_ORIGINS` 是否包含面板地址
- 检查 token：JWT 过期（24小时）后需重新登录

### Q: Agent 占用多少资源？

- **CPU**：几乎为 0，每次采集 < 5ms
- **内存**：约 30-50MB
- **磁盘**：历史数据约 10MB/天

### Q: 多台服务器如何管理？

所有 Agent 用同一套账号密码即可。面板中添加多台服务器时，用户名密码填同一套。

### Q: 数据存储在哪里？

面板配置存在**浏览器 localStorage** 中，完全不上传到任何服务器。Agent 只返回指标数据，不执行任何写操作。

---

## 🔄 版本历史

### v2.1.0（当前）
**安全加固 + WebSocket 重构**

- 注册接口加 JWT 验证，默认关闭
- 移除无用的 LoginPage / useAuth 组件
- WebSocket 重连逻辑重构（指数退避，稳定依赖）
- 面板 localStorage 加密存储替代 Base64 混淆
- `/api/health` 补全 hostname/platform/arch/nodeVersion 字段
- 支持 `ADMIN_USERNAME` / `ADMIN_PASSWORD` 环境变量
- `users.json` 解析失败时拒绝登录（不回退默认账号）

### v2.0.0
**全面重构**

- WebSocket 实时推送替代轮询
- JWT 用户认证
- 审计日志 + 历史数据持久化
- 进程监控 + 系统负载 + 磁盘 I/O
- Docker 多阶段构建
- 一键部署脚本

---

## 📄 开源许可

[MIT License](LICENSE)

---

<div align="center">

**如果对你有帮助，欢迎 ⭐ Star！**

</div>
