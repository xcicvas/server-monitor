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
| 📊 **实时指标** | CPU 使用率、内存占用、磁盘空间、网络接口状态 |
| 📈 **历史趋势图** | CPU/内存 实时 Sparkline 曲线，回溯最近 30 次采集记录 |
| 💓 **健康评分** | 综合 CPU(35%) + 内存(35%) + 磁盘(30%) 计算 0-100 健康分，环形进度可视化 |
| ⚡ **滚动数字动画** | 数值变化时 easeOutExpo 缓动平滑过渡，避免突兀跳变 |
| 🔴 **智能告警** | CPU/内存/磁盘任一超过 85% 阈值时自动显示告警徽章和边框高亮 |
| 💡 **脉冲状态灯** | 在线/检测中/离线 三种状态，带呼吸脉冲动画 |
| 🔄 **自动轮询** | 每 N 秒自动采集一次数据，可自定义间隔（1-300 秒） |
| 💾 **本地存储** | 所有配置存在浏览器 localStorage，关闭浏览器不丢失，支持导入/导出备份 |
| 🪶 **轻量 Agent** | 仅 200 行 Node.js 代码，CPU/内存占用可忽略不计 |
| 🎨 **清爽界面** | 暖色极简设计，去除一切视觉噪音，专注数据本身 |
| 🛡️ **安全加固** | 令牌认证 + CORS 限制 + 限速 + Helmet 安全头 + SSRF 防护 |
| 📋 **总览统计** | 顶部网格展示所有服务器平均 CPU/内存/健康分，汇总一目了然 |
| 🌙 **深色模式** | 一键切换浅色/深色主题，记忆偏好，首次访问跟随系统 |
| 📁 **数据导出** | 一键导出为 JSON（结构化数据）或 CSV（Excel 可打开） |
| ⏰ **实时时钟** | Header 显示当前时间和日期，掌握监控时机 |

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
│  · 数据完全存储在浏览器本地（sessionStorage）              │
└──────────────────────────┬──────────────────────────────┘
                           │
                    HTTP 轮询请求
                    每 N 秒一次
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                      Agent 端                             │
│                 node api/agent.js                         │
│                  默认端口: 7001                           │
│                                                          │
│  · 运行在被监控的服务器上                                  │
│  · 提供 HTTP API 返回系统指标                             │
│  · 纯 Node.js 原生实现，无第三方依赖                       │
│  · 支持 Linux / macOS / Windows                         │
└─────────────────────────────────────────────────────────┘
```

> **数据流向**：面板（浏览器）→ HTTP → Agent → 操作系统。数据不经任何第三方服务器。

### Agent HTTP 接口

| 接口 | 方法 | 说明 | 典型响应 |
|------|------|------|---------|
| `/api/metrics` | GET | **轻量指标**（推荐） | CPU、内存、磁盘、网络数据 |
| `/api/system` | GET | 完整系统快照 | 含进程信息、负载、CPU 详细等 |
| `/api/health` | GET | 健康检查 | `{ ok: true, status: "online" }` |

---

## 🚀 快速开始

### 环境要求

- **Node.js**：18.0 或更高版本
- **npm**：9.0 或更高版本

### 第一步：克隆项目

```bash
git clone https://github.com/xcicvas/server-monitor.git
cd server-monitor
```

### 第二步：安装依赖

```bash
npm install
```

### 第三步：启动面板

```bash
npm run dev
```

终端显示类似如下信息后：

```
  VITE v6.4.3  ready in 162 ms

  ➜  Local:   http://localhost:5173/
```

在浏览器打开 **http://localhost:5173** 即可看到监控面板。

### 第四步：启动 Agent

**在被监控的服务器上**（可以跟面板同一台，也可以是不同的机器），执行：

```bash
node api/agent.js
```

Agent 启动后会显示：

```
╔══════════════════════════════════════════════════════════╗
║   服务器监控 Agent 已启动                                   ║
║                                                          ║
║   服务地址:   http://localhost:7001                       ║
║   健康检查:   http://localhost:7001/api/health             ║
║   指标接口:   http://localhost:7001/api/metrics            ║
║   完整信息:   http://localhost:7001/api/system             ║
╚══════════════════════════════════════════════════════════╝
```

### 第五步：在面板中添加服务器

1. 打开面板 http://localhost:5173
2. 点击右上角「**添加服务器**」按钮
3. 填写表单：
   - **服务器名称**：自定义名称，如 `生产环境-北京`
   - **Agent 地址**：Agent 的 URL，如 `http://192.168.1.100:7001`
   - **刷新间隔**：数据更新频率，默认 5 秒（范围 1-300 秒）
4. 点击「**添加**」

添加成功后，卡片会立即显示该服务器的实时指标，每隔 N 秒自动刷新。

---

## 📖 指标说明

| 指标 | 说明 | 颜色规则 |
|------|------|---------|
| **CPU** | 处理器使用率百分比 | 绿 < 60% · 黄 60-80% · 红 > 80% |
| **内存** | 内存使用率 + 已用/总量 | 同上 |
| **磁盘** | 磁盘使用率 + 已用/总量 | 同上 |
| **网络** | 网络接口数量 + 实时吞吐速率 | 固定紫色 |
| **在线时长** | 服务器连续运行时间 | — |

---

## 🔧 高级用法

### 自定义 Agent 端口

默认端口是 `7001`，如果该端口被占用，可以自定义：

```bash
# 方式一：环境变量
AGENT_PORT=8000 node api/agent.js

# 方式二：在 package.json 中添加脚本
# "agent:8000": "AGENT_PORT=8000 node api/agent.js"
```

### 监控多台服务器

对每一台要监控的服务器，重复以下步骤：

1. 将 `api/agent.js` 上传到该服务器
2. 运行 `node api/agent.js`（可自定义端口）
3. 在面板中点击「添加服务器」，填入该服务器的 Agent 地址

各服务器独立运行、独立配置刷新间隔，互不影响。

### 调整刷新间隔

在添加服务器时设置「刷新间隔」，数值越小刷新越频繁，但会增加网络请求：

| 场景 | 推荐间隔 |
|------|---------|
| 开发测试 | 3-5 秒 |
| 生产服务器 | 30-60 秒 |
| 低配服务器 | 60-120 秒 |

### 手动刷新

在服务器卡片上悬停，点击出现的「刷新」按钮可立即触发一次数据采集，不受自动间隔限制。

---

## 📁 项目结构

```
server-monitor/
├── api/
│   └── agent.js          # Agent 端：系统指标采集服务
├── src/
│   ├── App.tsx            # 主应用组件
│   ├── components/
│   │   ├── Header.tsx              # 顶部导航栏
│   │   ├── ServerMonitorCard.tsx   # 服务器指标卡片
│   │   ├── AddServerModal.tsx      # 添加服务器弹窗
│   │   ├── EmptyState.tsx          # 空状态引导
│   │   └── ProgressIndicator.tsx    # 环形/线性进度条
│   ├── hooks/
│   │   └── usePollingServers.ts    # 多服务器轮询逻辑
│   ├── store/
│   │   └── serverStore.ts          # Zustand 状态管理
│   ├── index.css                   # 全局样式
│   └── main.tsx                    # 入口文件
├── public/
│   └── favicon.svg
├── package.json
├── tailwind.config.js    # Tailwind CSS 配置
├── vite.config.ts        # Vite 构建配置
└── README.md
```

---

## ⚙️ 技术栈

| 层级 | 技术 | 说明 |
|------|------|------|
| **前端框架** | React 18 + TypeScript | 组件化开发，类型安全 |
| **构建工具** | Vite 6 | 极速开发服务器和构建 |
| **样式** | Tailwind CSS 3 | 原子化 CSS，快速构建界面 |
| **状态管理** | Zustand | 轻量状态库，支持 sessionStorage 持久化 |
| **图标** | Lucide React | 简洁一致的 SVG 图标库 |
| **字体** | Sora + DM Sans + JetBrains Mono | 现代无衬线 + 等宽字体 |
| **Agent** | Node.js + Express | 原生 HTTP 服务，无额外依赖 |

---

## 🛡️ 安全使用指南

本章节详细介绍如何加固你的 Agent 探针服务，防止未授权访问和恶意请求。

### 1. 开启访问令牌认证

默认情况下，Agent 不设置任何访问限制，任何知道地址的人都可以获取服务器指标。在公网环境下**强烈建议**开启令牌认证：

```bash
# 设置一个强令牌（建议使用 32 位以上的随机字符串）
AUTH_TOKEN=你的强令牌 node api/agent.js

# 或者写入 .env 文件（需安装 dotenv）
# echo "AUTH_TOKEN=你的强令牌" > .env
# node api/agent.js
```

> ⚠️ **重要提示**：如果未设置 `AUTH_TOKEN`，Agent 启动时会显示红色警告 `⚠️ 警告：未设置 AUTH_TOKEN`，此时任何人都可以访问你的服务器数据。

启用后，面板端需要在「添加服务器」时填写与 `AUTH_TOKEN` 完全一致的令牌，否则会返回以下错误之一：
- `401 未提供访问令牌` — 请求没有携带令牌
- `403 令牌无效` — 令牌与 Agent 配置不匹配

### 2. 限制来源域名（CORS）

默认 CORS 策略允许所有来源（`origin: *`），如果你的 Agent 只服务于特定域名或 IP，可以限制只能从指定来源访问：

```bash
# 单个来源
ALLOWED_ORIGINS=http://localhost:5173 node api/agent.js

# 多个来源（用英文逗号分隔，无空格）
ALLOWED_ORIGINS=http://localhost:5173,https://example.com,https://监控面板.com node api/agent.js
```

> 💡 **提示**：本地开发时建议同时设置 `ALLOWED_ORIGINS=http://localhost:5173`，否则浏览器控制台会报 CORS 错误。

### 3. 请求频率限制（防滥用）

Agent 内置了基于 IP 的请求频率限制，防止恶意频繁请求：

- **时间窗口**：10 秒
- **请求上限**：60 次
- **触发后的响应**：返回 `429 请求过于频繁，请稍后再试`

频率限制仅在设置了 `AUTH_TOKEN` 时生效（未设置令牌时无法识别请求来源，限制无意义）。

### 4. 多重安全叠加

以上三种机制可以叠加使用，形成纵深防护：

| 防护层级 | 配置项 | 作用 |
|---------|-------|------|
| 第一层 | `AUTH_TOKEN` | 鉴别请求者身份，无令牌或令牌错误直接拒绝 |
| 第二层 | `ALLOWED_ORIGINS` | 限制只能从指定域名/地址发起请求 |
| 第三层 | 限速中间件 | 防止单 IP 大量请求耗尽资源 |

### 5. 安全配置组合示例

**本地开发（需要本地面板访问）**：
```bash
AUTH_TOKEN=dev_secret_123 ALLOWED_ORIGINS=http://localhost:5173 node api/agent.js
```

**内网生产环境（仅内网可访问）**：
```bash
AUTH_TOKEN=内网专用强令牌 node api/agent.js
# 内网本身已隔离，可不设置 ALLOWED_ORIGINS
```

**公网生产环境（最高安全）**：
```bash
AUTH_TOKEN=$(openssl rand -base64 32) ALLOWED_ORIGINS=https://你的域名.com node api/agent.js
```

### 6. 令牌生成工具

可以使用以下方式生成安全的随机令牌：

```bash
# Linux/macOS（使用 OpenSSL）
openssl rand -base64 32

# Linux（使用 /dev/urandom）
head -c 32 /dev/urandom | base64

# Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 7. Agent 内置安全特性（自动生效）

以下安全机制无需配置，Agent 启动后自动启用：

| 特性 | 说明 |
|------|------|
| **安全响应头** | 使用 Helmet.js 自动设置 CSP、X-Content-Type-Options、X-Frame-Options 等头部 |
| **敏感信息脱敏** | 网络接口不返回 MAC 地址，防止内部网络拓扑泄露 |
| **错误信息脱敏** | API 错误不返回内部路径或堆栈，只返回通用提示 |
| **请求体限制** | JSON 请求体最大 10KB，防止恶意大体量请求 |
| **IP 识别** | 开启 `trust proxy` 正确获取真实客户端 IP（配合反向代理使用） |
| **去除指纹头** | 禁用 `X-Powered-By` 等暴露服务器信息头部 |

### 8. 面板端安全措施

面板侧也内置了多层安全防护：

| 措施 | 说明 |
|------|------|
| **Token 混淆存储** | 面板本地 Base64 编码存储令牌，防止 DevTools 直接明文查看 |
| **Session 存储** | 令牌使用 `sessionStorage`，关闭浏览器标签页后自动清除 |
| **SSRF 防护** | 添加服务器时检查地址，禁止指向内网 IP（127.x、10.x、172.16-31.x、192.168.x） |
| **请求混淆** | 面板发出的请求不包含凭据信息（`credentials: omit`） |

### 9. 查看当前安全状态

启动 Agent 后，控制台会输出当前安全配置状态：

```
╔══════════════════════════════════════════════════════════╗
║         🖥️  服务器监控 Agent                              ║
╠══════════════════════════════════════════════════════════╣
║  端口:      7001                                        ║
║  令牌:      ✅ 已配置 (xxxx...xxxx)                      ║
║  CORS:      ✅ 仅允许 1 个来源                           ║
║  安全头:    ✅ Helmet 已启用                             ║
║  限速:      ✅ 60次/10秒（令牌模式）                     ║
╠══════════════════════════════════════════════════════════╣
║  API:      http://localhost:7001/api/metrics            ║
║  Health:   http://localhost:7001/api/health              ║
╚══════════════════════════════════════════════════════════╝

⚠️  警告：未设置 AUTH_TOKEN，任何知道地址的人都能访问系统指标！
   生产环境请运行: AUTH_TOKEN=你的秘密令牌 node api/agent.js
```

---

## 🏭 进程守护与生产运维

Agent 建议通过进程守护工具管理，确保崩溃后自动重启。

### pm2（推荐）

```bash
# 安装
npm install -g pm2

# 启动（带令牌）
AUTH_TOKEN=你的令牌 pm2 start api/agent.js --name server-monitor

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
Description=Server Monitor Agent
After=network.target

[Service]
Type=simple
User=your-user
WorkingDirectory=/path/to/project
Environment=AUTH_TOKEN=你的令牌
ExecStart=/usr/bin/node api/agent.js
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

### Agent 优雅关闭

Agent 支持 `SIGTERM` / `SIGINT` 信号，收到后会在 10 秒内强制退出。配合 systemd/pm2 使用时，升级或重启前发送 `SIGTERM` 即可保证所有请求处理完毕。

### 版本查看

```bash
node api/agent.js --version
# 或查看 Git 提交记录
git log --oneline -5
```

---

## ❓ 常见问题

### Q: 面板显示"离线"，无法连接

**原因 1**：Agent 进程未启动
```bash
# 确认 Agent 正在运行
curl http://服务器IP:7001/api/health
# 返回 {"ok":true,"status":"online"} 表示正常
```

**原因 2**：防火墙拦截
```bash
# 云服务器需在安全组中开放 7001 端口
# Linux 检查防火墙
sudo firewall-cmd --list-ports
sudo iptables -L -n | grep 7001
```

**原因 3**：地址填写错误
```
# 正确格式
http://192.168.1.100:7001
http://example.com:7001

# 错误格式（缺少协议头）
192.168.1.100:7001      ← 缺少 http://
```

---

### Q: Agent 占用多少系统资源？

**实测数据**：
- CPU：几乎为 0，每次请求耗时 < 5ms
- 内存：约 30-50MB（Express 运行时）
- 网络：仅响应面板的轮询请求，无主动外发流量

一天约产生 17,000-86,000 次请求（按 3-15 秒间隔），对服务器影响可忽略。

---

### Q: 数据存储在哪里？隐私安全吗？

所有数据（服务器列表、配置）存储在**浏览器 localStorage** 中，完全不上传到任何服务器。Agent 只返回系统指标数据，不执行任何写操作，无法通过本工具控制服务器。

通过右上角「导出」菜单可以随时将配置导出为 JSON 文件备份，换浏览器或换电脑后可用「导入配置」一键恢复。导出的文件不含实时指标，仅包含服务器地址和令牌。

---

### Q: 支持哪些操作系统？

Agent 基于 Node.js 的 `os` 模块实现，理论上支持所有 Node.js 支持的系统：

| 系统 | 支持状态 |
|------|---------|
| Linux | ✅ 完全支持 |
| macOS | ✅ 完全支持 |
| Windows | ✅ 完全支持 |

---

### Q: 如何同时监控大量服务器（>50 台）？

本工具适合 5-20 台服务器的中小规模监控。如需监控更多服务器，建议使用专业的监控系统（如 Prometheus + Grafana）。

---

## 🔄 版本历史

### v1.4.1 （最新）
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
