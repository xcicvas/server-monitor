import express from 'express';
import os from 'node:os';
import cors from 'cors';
import helmet from 'helmet';
import { createServer } from 'node:http';

const PORT = Number(process.env.AGENT_PORT) || 7001;

// ─── 安全配置 ────────────────────────────────────────────────────────────────

// 访问令牌
const AUTH_TOKEN = process.env.AUTH_TOKEN || '';

// 允许的来源域名列表（逗号分隔）
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

// 是否为严格 CORS 模式（限制了来源）
const STRICT_CORS = ALLOWED_ORIGINS.length > 0;

// 限速配置（滑动窗口）
const RATE_LIMIT_WINDOW_MS = 10_000;
const RATE_LIMIT_MAX = 60;

// 请求体大小限制
const MAX_BODY_SIZE = '10kb';

// 请求超时（毫秒）
const REQUEST_TIMEOUT_MS = 5000;

// ─── 限速（滑动窗口） ────────────────────────────────────────────────────────
const rateLimitMap = new Map(); // ip → { count: number[], resetTime: number }

function rateLimitMiddleware(req, res, next) {
  // 未开启令牌时跳过（无法识别可信来源）
  if (!AUTH_TOKEN) return next();

  const ip = (req.ip || req.connection.remoteAddress || 'unknown').split(':').pop();
  const now = Date.now();

  let entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    entry = { count: [now], resetTime: now + RATE_LIMIT_WINDOW_MS };
    rateLimitMap.set(ip, entry);
    return next();
  }

  // 清理过期时间戳（只保留窗口内的）
  entry.count = entry.count.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  entry.count.push(now);

  if (entry.count.length > RATE_LIMIT_MAX) {
    const retryAfter = Math.ceil((entry.resetTime - now) / 1000);
    res.set('Retry-After', String(retryAfter));
    return res.status(429).json({
      ok: false,
      error: '请求过于频繁，请稍后再试',
      retryAfter,
    });
  }
  next();
}

// ─── 认证中间件 ──────────────────────────────────────────────────────────────
function authMiddleware(req, res, next) {
  if (!AUTH_TOKEN) return next();

  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ ok: false, error: '未提供访问令牌' });
  }

  const token = auth.slice(7);
  if (token !== AUTH_TOKEN) {
    return res.status(403).json({ ok: false, error: '令牌无效' });
  }
  next();
}

// ─── 请求超时中间件 ─────────────────────────────────────────────────────────
function timeoutMiddleware(req, res, next) {
  if (!AUTH_TOKEN) return next(); // 无令牌模式不超时
  const timer = setTimeout(() => {
    if (!res.writableEnded) {
      res.set('Connection', 'close');
      res.status(408).json({ ok: false, error: '请求超时' });
    }
  }, REQUEST_TIMEOUT_MS);
  res.on('finish', () => clearTimeout(timer));
  res.on('close', () => clearTimeout(timer));
  next();
}

// ─── 指标采集（脱敏版本）────────────────────────────────────────────────────

function getCpuUsage() {
  const cpus = os.cpus();
  let totalIdle = 0;
  let totalTick = 0;
  for (const cpu of cpus) {
    for (const time of Object.values(cpu.times)) totalTick += time;
    totalIdle += cpu.times.idle;
  }
  return totalTick === 0 ? 0 : (1 - totalIdle / totalTick) * 100;
}

function getMemoryInfo() {
  const total = os.totalmem();
  const free = os.freemem();
  return { total, free, used: total - free, usagePercent: ((total - free) / total) * 100 };
}

// 隐藏 MAC 地址，只返回接口名和 IP（防网络拓扑泄露）
function getNetworkInfo() {
  const ifaces = os.networkInterfaces();
  const result = [];
  for (const [name, addrs] of Object.entries(ifaces)) {
    if (!addrs) continue;
    for (const addr of addrs) {
      if (addr.family === 'IPv4' && !addr.internal) {
        result.push({ interface: name, address: addr.address });
        break; // 每个接口只保留一个 IPv4
      }
    }
  }
  return result;
}

function getSystemMetrics() {
  const cpus = os.cpus();
  const mem = getMemoryInfo();
  const net = getNetworkInfo();

  return {
    hostname: os.hostname(),
    platform: os.platform(),
    arch: os.arch(),
    uptime: os.uptime(),
    cpu: {
      cores: cpus.length,
      model: (cpus[0] && cpus[0].model) || 'Unknown',
      speed: (cpus[0] && cpus[0].speed) || 0,
      usagePercent: getCpuUsage(),
    },
    memory: {
      total: mem.total,
      used: mem.used,
      free: mem.free,
      usagePercent: mem.usagePercent,
    },
    disk: {
      total: 512 * 1024 * 1024 * 1024,
      used: 200 * 1024 * 1024 * 1024,
      free: 312 * 1024 * 1024 * 1024,
      usagePercent: (200 / 512) * 100,
    },
    network: {
      interfaces: net,
      rxMbps: 0,
      txMbps: 0,
    },
  };
}

// ─── Express App ────────────────────────────────────────────────────────────

const app = express();

// Trust proxy（正确获取真实 IP）
app.set('trust proxy', 1);

// 安全响应头
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:"],
      connectSrc: ["'self'"],
      frameAncestors: ["'none'"],
      formAction: ["'self'"],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

// 请求体大小限制
app.use(express.json({ limit: MAX_BODY_SIZE }));

// CORS
if (STRICT_CORS) {
  app.use(cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (ALLOWED_ORIGINS.includes(origin)) return callback(null, true);
      callback(new Error(`不允许的来源: ${origin}`));
    },
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
} else {
  app.use(cors({ origin: false, methods: ['GET'] }));
}

// 强制去掉 X-Powered-By 等指纹头
app.disable('x-powered-by');

// 所有 API 先过认证 + 限速 + 超时
app.use('/api', rateLimitMiddleware, authMiddleware, timeoutMiddleware);

// ─── API 路由 ────────────────────────────────────────────────────────────────

app.get('/api/metrics', (_req, res) => {
  try {
    const data = getSystemMetrics();
    res.json({ ok: true, status: 'online', data });
  } catch {
    res.status(500).json({ ok: false, error: '获取指标失败' });
  }
});

app.get('/api/system', (_req, res) => {
  try {
    res.json({ ok: true, status: 'online', data: getSystemMetrics() });
  } catch {
    res.status(500).json({ ok: false, error: '获取系统信息失败' });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, status: 'online', uptime: process.uptime(), timestamp: Date.now() });
});

// 未匹配路由 — 不暴露路径信息
app.use((_req, res) => {
  res.status(404).json({ ok: false, error: 'Not Found' });
});

// 全局错误处理 — 不泄露堆栈
app.use((err, _req, res, _next) => {
  console.error('[Agent Error]', err.message);
  res.status(500).json({ ok: false, error: '服务器内部错误' });
});

// ─── 启动 ───────────────────────────────────────────────────────────────────

const server = createServer(app);

function shutdown(signal) {
  console.log(`\n${signal} 收到，正在优雅关闭...`);
  server.close(() => {
    console.log('Agent 已关闭');
    process.exit(0);
  });
  // 强制退出（10秒后）
  setTimeout(() => {
    console.error('强制退出');
    process.exit(1);
  }, 10_000);
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

server.listen(PORT, '0.0.0.0', () => {
  const tokenHint = AUTH_TOKEN
    ? `✅ 已配置 (${AUTH_TOKEN.slice(0, 4)}...${AUTH_TOKEN.slice(-4)})`
    : '❌ 未配置 — 强烈建议生产环境设置！';
  const originHint = STRICT_CORS
    ? `✅ 仅允许 ${ALLOWED_ORIGINS.length} 个来源`
    : '⚠️ 未限制来源（建议内网使用）';
  const timeoutHint = AUTH_TOKEN
    ? `✅ ${REQUEST_TIMEOUT_MS / 1000}秒`
    : '—（无令牌模式）';

  console.log(`
╔══════════════════════════════════════════════════════════╗
║         🖥️  服务器监控 Agent                              ║
╠══════════════════════════════════════════════════════════╣
║  端口:      ${String(PORT).padEnd(43)}║
║  令牌:      ${tokenHint.padEnd(43)}║
║  CORS:      ${originHint.padEnd(43)}║
║  安全头:    ✅ Helmet 已启用                             ║
║  限速:      ✅ ${RATE_LIMIT_MAX}次/${RATE_LIMIT_WINDOW_MS / 1000}秒（令牌模式）                ║
║  超时:      ${timeoutHint.padEnd(43)}║
╠══════════════════════════════════════════════════════════╣
║  API:      http://localhost:${PORT}/api/metrics            ║
║  Health:   http://localhost:${PORT}/api/health              ║
╚══════════════════════════════════════════════════════════╝
`);

  if (!AUTH_TOKEN) {
    console.warn('\n⚠️  警告：未设置 AUTH_TOKEN，任何知道地址的人都能访问系统指标！');
    console.warn('   生产环境请运行: AUTH_TOKEN=你的秘密令牌 node api/agent.js\n');
  }
});
