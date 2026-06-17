# 服务器监控面板

简洁的服务器监控工具，实时展示 CPU、内存、磁盘、网络等系统指标，支持多服务器管理。

## 系统架构

```
┌──────────────────────────────────────┐
│         监控面板（浏览器）              │
│       http://localhost:5173            │
└──────────────┬───────────────────────┘
               │ HTTP 轮询
               ▼
┌──────────────────────────────────────┐
│       Agent（被监控服务器）            │
│   node api/agent.js (默认端口 7001)   │
└──────────────────────────────────────┘
```

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动面板

```bash
npm run dev
```

浏览器打开 http://localhost:5173

### 3. 启动 Agent

在被监控的服务器上运行：

```bash
node api/agent.js
```

Agent 默认监听 7001 端口。

### 4. 添加服务器

在面板中点击「添加服务器」，填入 Agent 地址即可。

## 命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动前端面板 |
| `npm run build` | 构建生产版本 |
| `node api/agent.js` | 启动 Agent |

## 自定义 Agent 端口

```bash
AGENT_PORT=8000 node api/agent.js
```

## 技术栈

- **前端**：React + TypeScript + Tailwind CSS
- **状态管理**：Zustand + localStorage 持久化
- **Agent**：Node.js + Express
