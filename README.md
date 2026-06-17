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
| 🔄 **自动轮询** | 每 N 秒自动采集一次数据，可自定义间隔（1-300 秒） |
| 💾 **本地存储** | 所有配置存在浏览器 localStorage，无后端依赖 |
| 🪶 **轻量 Agent** | 仅 200 行 Node.js 代码，CPU/内存占用可忽略不计 |
| 🎨 **清爽界面** | 暖色极简设计，去除一切视觉噪音，专注数据本身 |

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
│  · 数据完全存储在浏览器本地（localStorage）               │
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
| **状态管理** | Zustand | 轻量状态库，支持 localStorage 持久化 |
| **图标** | Lucide React | 简洁一致的 SVG 图标库 |
| **字体** | Sora + DM Sans + JetBrains Mono | 现代无衬线 + 等宽字体 |
| **Agent** | Node.js + Express | 原生 HTTP 服务，无额外依赖 |

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

所有数据（服务器列表、配置）存储在**浏览器 localStorage** 中，完全不上传到任何服务器。

Agent 只返回系统指标数据，不执行任何写操作，无法通过本工具控制服务器。

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

### v1.0.0
- 全新架构，Agent + 面板分离设计
- 支持 CPU、内存、磁盘、网络四大指标
- 暖色极简 UI 设计
- localStorage 本地持久化
- 多服务器独立配置

---

## 📄 开源许可

本项目基于 [MIT License](LICENSE) 开源，可以自由使用、修改和分发。

---

<div align="center">

**如果这个项目对你有帮助，欢迎 ⭐ Star！**

</div>
