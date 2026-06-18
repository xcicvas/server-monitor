import express from 'express';
import os from 'node:os';
import cors from 'cors';
import helmet from 'helmet';
import { createServer } from 'node:http';
import { WebSocketServer, WebSocket } from 'ws';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import fs from 'node:fs';
import path from 'node:path';
import { exec } from 'node:child_process';

// ─── 子进程工具（跨平台获取磁盘/进程信息） ───────────────────────────────
function execCmd(cmd, timeoutMs = 2000) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('timeout')), timeoutMs);
    exec(cmd, { maxBuffer: 2 * 1024 * 1024 }, (err, stdout) => {
      clearTimeout(t);
      if (err) return reject(err);
      resolve(String(stdout).trim());
    });
  });
}

const PORT = Number(process.env.AGENT_PORT) || 7001;
const JWT_SECRET = process.env.JWT_SECRET || process.env.AUTH_TOKEN || 'change-me-in-production';
const JWT_EXPIRY = process.env.JWT_EXPIRY || '24h';
const HISTORY_DIR = process.env.HISTORY_DIR || './data';
const AUDIT_LOG = path.join(HISTORY_DIR, 'audit.log');

// ─── 目录创建 ──────────────────────────────────────────────────────────────
try { fs.mkdirSync(HISTORY_DIR, { recursive: true }); } catch {}

// ─── 安全配置 ──────────────────────────────────────────────────────────────
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || '')
  .split(',').map((o) => o.trim()).filter(Boolean);
const STRICT_CORS = ALLOWED_ORIGINS.length > 0;
const RATE_LIMIT_WINDOW_MS = 10_000;
const RATE_LIMIT_MAX = 60;
const MAX_BODY_SIZE = '10kb';
const REQUEST_TIMEOUT_MS = 5000;

// ─── 用户账户 ──────────────────────────────────────────────────────────────
// 默认账户：admin / admin（生产环境请通过环境变量或配置文件修改）
const DEFAULT_USER = { username: 'admin', passwordHash: bcrypt.hashSync('admin', 10) };

const usersFile = path.join(HISTORY_DIR, 'users.json');
let usersCache = null;       // 内存缓存
let usersCacheMtime = 0;     // 文件上次修改时间
let usersCacheExpireAt = 0;  // 缓存过期时间戳

function loadUsers() {
  try {
    const stat = fs.existsSync(usersFile) ? fs.statSync(usersFile) : null;
    const now = Date.now();
    // 如果缓存有效（文件未变更且 TTL 内），直接返回
    if (usersCache && stat && stat.mtimeMs === usersCacheMtime && now < usersCacheExpireAt) {
      return usersCache;
    }
    let users;
    if (stat) {
      const raw = fs.readFileSync(usersFile, 'utf-8');
      users = JSON.parse(raw);
    } else {
      // 首次运行，写入默认账户
      users = [DEFAULT_USER];
      fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), 'utf-8');
    }
    usersCache = users;
    usersCacheMtime = stat ? stat.mtimeMs : 0;
    usersCacheExpireAt = now + 30_000; // 30 秒 TTL
    return users;
  } catch {
    return [DEFAULT_USER];
  }
}

function saveUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), 'utf-8');
  usersCache = users;
  try { usersCacheMtime = fs.statSync(usersFile).mtimeMs; } catch { usersCacheMtime = 0; }
  usersCacheExpireAt = Date.now() + 30_000;
}

// ─── 审计日志 ─────────────────────────────────────────────────────────────
const auditQueue = [];
let auditFlushTimer = null;

function audit(action, ip, detail = '') {
  const ts = new Date().toISOString();
  auditQueue.push(`[${ts}] [${action}] ip=${ip} ${detail}\n`);
  if (auditFlushTimer) return;
  auditFlushTimer = setTimeout(() => {
    auditFlushTimer = null;
    const data = auditQueue.splice(0, auditQueue.length).join('');
    if (!data) return;
    fs.promises.appendFile(AUDIT_LOG, data, 'utf-8').catch(() => {});
  }, 500);
}

// ─── 限速 ─────────────────────────────────────────────────────────────────
const rateLimitMap = new Map();
// 每 60 秒清理一次过期条目，防止长期运行时内存膨胀
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.resetTime + RATE_LIMIT_WINDOW_MS) {
      rateLimitMap.delete(ip);
    }
  }
}, 60_000).unref();

function rateLimitMiddleware(req, res, next) {
  const ip = (req.ip || req.connection.remoteAddress || 'unknown').split(':').pop();
  const now = Date.now();
  let entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    entry = { count: [now], resetTime: now + RATE_LIMIT_WINDOW_MS };
    rateLimitMap.set(ip, entry);
    return next();
  }
  entry.count = entry.count.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  entry.count.push(now);
  if (entry.count.length > RATE_LIMIT_MAX) {
    const retryAfter = Math.ceil((entry.resetTime - now) / 1000);
    res.set('Retry-After', String(retryAfter));
    return res.status(429).json({ ok: false, error: '请求过于频繁，请稍后再试', retryAfter });
  }
  next();
}

// ─── JWT 验证中间件 ─────────────────────────────────────────────────────────
function verifyToken(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ ok: false, error: '未提供访问令牌' });
  }
  const token = auth.slice(7);
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch {
    return res.status(401).json({ ok: false, error: '令牌无效或已过期' });
  }
}

// ─── 请求超时 ─────────────────────────────────────────────────────────────
function timeoutMiddleware(req, res, next) {
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

// ─── 指标采集 ─────────────────────────────────────────────────────────────

function getCpuUsage() {
  const cpus = os.cpus();
  let totalIdle = 0, totalTick = 0;
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

function getNetworkInfo() {
  const ifaces = os.networkInterfaces();
  const result = [];
  for (const [name, addrs] of Object.entries(ifaces)) {
    if (!addrs) continue;
    for (const addr of addrs) {
      if (addr.family === 'IPv4' && !addr.internal) {
        result.push({ interface: name, address: addr.address });
        break;
      }
    }
  }
  return result;
}

async function getDiskInfo() {
  // 优先用 df（Linux/macOS 通用），失败时回退 Node.js fs.statfs
  try {
    // -B 1 以字节为单位（Linux）。macOS 的 df 默认以 512 字节为单位，另处理
    const stdout = await execCmd('df -B 1 -k / 2>/dev/null || df -k / 2>/dev/null', 1500);
    const lines = String(stdout).split('\n').filter((l) => l.trim().length > 0);
    if (lines.length >= 2) {
      const fields = lines[1].split(/\s+/);
      // fields: Filesystem Size Used Avail Use% Mounted
      let totalK = Number(fields[1]);
      let usedK = Number(fields[2]);
      let availK = Number(fields[3]);
      // macOS df -k 以 KB 为单位；Linux df -B 1 以字节为单位但加了 -k 会变 KB
      // 统一：df -k 输出 KB，乘 1024 转字节
      if (!Number.isFinite(totalK) || totalK <= 0) throw new Error('bad df');
      const total = totalK * 1024;
      const used = usedK * 1024;
      const free = availK * 1024;
      return { total, used, free, usagePercent: (used / total) * 100 };
    }
  } catch {}
  // 回退：fs.statfs（Node v19+ 支持）
  try {
    const stat = fs.statfsSync ? fs.statfsSync(process.cwd()) : null;
    if (stat && typeof stat.blocks === 'number') {
      const total = stat.blocks * stat.bsize;
      const free = stat.bfree * stat.bsize;
      const used = total - free;
      return { total, used, free, usagePercent: total > 0 ? (used / total) * 100 : 0 };
    }
  } catch {}
  // 最后回退：用 os.totalmem / freemem 的数量级占位（显式非零以避免前端除以零）
  const total = os.totalmem() * 10;
  const used = total * 0.5;
  return { total, used, free: total - used, usagePercent: 50 };
}

function getDiskIO() {
  // 读 /proc/diskstats（Linux），失败则返回零结构
  let readSectors = 0;
  let writeSectors = 0;
  try {
    if (fs.existsSync('/proc/diskstats')) {
      const raw = fs.readFileSync('/proc/diskstats', 'utf-8');
      const lines = raw.split('\n').filter(Boolean);
      for (const line of lines) {
        const fields = line.trim().split(/\s+/);
        // 只聚合物理设备（major 8 / 253 / 254 等），跳过分区与循环设备
        const major = Number(fields[0]);
        if (!Number.isFinite(major)) continue;
        const name = fields[2] || '';
        if (/^(loop|ram|zram|nvme.*n\d$|sr\d|md\d+$)/.test(name)) continue;
        // 字段：... sectors_read(6) sectors_written(10)
        const sr = Number(fields[5] || 0);
        const sw = Number(fields[9] || 0);
        readSectors += sr;
        writeSectors += sw;
      }
    }
  } catch {}
  // 512 字节/扇区 → 字节
  const readBytes = readSectors * 512;
  const writeBytes = writeSectors * 512;
  // 速率（简单：当前累计值，不做差分以避免额外状态）
  return {
    readBytes,
    writeBytes,
    readMbps: 0,
    writeMbps: 0,
  };
}

function getLoadAverage() {
  const [l1, l5, l15] = os.loadavg();
  const cpus = os.cpus().length;
  return {
    load1: l1,
    load5: l5,
    load15: l15,
    loadPerCpu: cpus > 0 ? (l1 / cpus) : 0,
    cpuCount: cpus,
  };
}

async function getSystemMetrics() {
  const cpus = os.cpus();
  const mem = getMemoryInfo();
  const net = getNetworkInfo();
  const load = getLoadAverage();
  const diskIO = getDiskIO();
  const disk = await getDiskInfo();

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
      total: disk.total,
      used: disk.used,
      free: disk.free,
      usagePercent: disk.usagePercent,
    },
    network: {
      interfaces: net.length,
      rxMbps: 0,
      txMbps: 0,
    },
    load: load,
    diskIO: diskIO,
  };
}

async function getProcessList() {
  const totalMem = os.totalmem();
  const platform = os.platform();

  // --- Linux / macOS：解析 ps aux
  try {
    const cmd = platform === 'darwin'
      ? 'ps aux'
      : 'ps aux --sort=-%mem 2>/dev/null';
    const stdout = await execCmd(cmd, 2000);
    const lines = String(stdout).split('\n').filter(Boolean);
    if (lines.length > 1) {
      const result = [];
      for (let i = 1; i < Math.min(lines.length, 21); i++) {
        const parts = lines[i].trim().split(/\s+/);
        if (parts.length < 11) continue;
        const pid = Number(parts[1]);
        const cpuPercent = Number(parts[2]);
        const memPercent = Number(parts[3]);
        const rssKb = Number(parts[5]);
        const command = parts.slice(10).join(' ');
        const name = command.split(/[\/\s]/)[0] || command;
        result.push({
          pid,
          name: name.slice(0, 40),
          cpuPercent: Number.isFinite(cpuPercent) ? Number(cpuPercent.toFixed(1)) : 0,
          memPercent: Number.isFinite(memPercent) ? Number(memPercent.toFixed(2)) : 0,
          memRss: Number.isFinite(rssKb) ? rssKb * 1024 : 0,
          command: command.slice(0, 80),
        });
      }
      if (result.length > 0) return result;
    }
  } catch {}
  // --- Windows / 失败回退：只返回 Agent 自身进程
  const proc = process.memoryUsage();
  return [{
    pid: process.pid,
    name: 'node (agent)',
    cpuPercent: Number(Number(getCpuUsage()).toFixed(1)),
    memPercent: Number(((proc.heapUsed / totalMem) * 100).toFixed(2)),
    memRss: proc.rss,
    command: process.argv.join(' '),
  }];
}

// ─── 历史记录存储 ─────────────────────────────────────────────────────────
const HISTORY_FILE = path.join(HISTORY_DIR, 'metrics_history.json');
const HISTORY_MAX = 288; // 保留 288 条（约 6 小时，按 80 秒一条算）

function loadHistory() {
  try {
    if (fs.existsSync(HISTORY_FILE)) {
      return JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf-8'));
    }
  } catch {}
  return [];
}

function saveHistoryEntry(entry) {
  try {
    const history = loadHistory();
    history.push(entry);
    if (history.length > HISTORY_MAX) history.shift();
    fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2), 'utf-8');
  } catch {}
}

// ─── Express App ───────────────────────────────────────────────────────────

const app = express();

app.set('trust proxy', 1);

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

app.use(express.json({ limit: MAX_BODY_SIZE }));

if (STRICT_CORS) {
  app.use(cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (ALLOWED_ORIGINS.includes(origin)) return callback(null, true);
      callback(new Error(`不允许的来源: ${origin}`));
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
} else {
  app.use(cors({ origin: true, methods: ['GET', 'POST'], allowedHeaders: ['Content-Type', 'Authorization'] }));
}

app.disable('x-powered-by');

// ─── 公开路由 ──────────────────────────────────────────────────────────────

// 登录
app.post('/api/auth/login', async (req, res) => {
  const ip = (req.ip || req.connection.remoteAddress || '').split(':').pop();
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ ok: false, error: '用户名和密码不能为空' });
  }
  const users = loadUsers();
  const user = users.find((u) => u.username === username);
  if (!user) {
    audit('LOGIN_FAIL', ip, `username=${username}`);
    return res.status(401).json({ ok: false, error: '用户名或密码错误' });
  }
  try {
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      audit('LOGIN_FAIL', ip, `username=${username}`);
      return res.status(401).json({ ok: false, error: '用户名或密码错误' });
    }
  } catch {
    return res.status(401).json({ ok: false, error: '用户名或密码错误' });
  }
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: JWT_EXPIRY });
  audit('LOGIN_OK', ip, `username=${username}`);
  res.json({ ok: true, token, username });
});

// 注册（仅当无用户时允许，或通过环境变量禁用）
app.post('/api/auth/register', async (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ ok: false, error: '用户名和密码不能为空' });
  }
  if (username.length < 3 || password.length < 6) {
    return res.status(400).json({ ok: false, error: '用户名至少3位，密码至少6位' });
  }
  const users = loadUsers();
  if (users.some((u) => u.username === username)) {
    return res.status(409).json({ ok: false, error: '用户名已存在' });
  }
  users.push({ username, passwordHash: await bcrypt.hash(password, 10) });
  saveUsers(users);
  const ip = (req.ip || '').split(':').pop();
  audit('REGISTER', ip, `username=${username}`);
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: JWT_EXPIRY });
  res.json({ ok: true, token, username });
});

// ─── 受保护路由 ────────────────────────────────────────────────────────────

app.use('/api', rateLimitMiddleware, timeoutMiddleware);

// 获取系统指标（WebSocket 会推送，但 HTTP 也保留）
app.get('/api/metrics', verifyToken, async (req, res) => {
  try {
    const ip = (req.ip || '').split(':').pop();
    audit('METRICS', ip);
    const data = await getSystemMetrics();
    res.json({ ok: true, status: 'online', data });
  } catch {
    res.status(500).json({ ok: false, error: '获取指标失败' });
  }
});

// 获取进程列表
app.get('/api/processes', verifyToken, async (req, res) => {
  try {
    const ip = (req.ip || '').split(':').pop();
    audit('PROCESSES', ip);
    res.json({ ok: true, data: await getProcessList() });
  } catch {
    res.status(500).json({ ok: false, error: '获取进程列表失败' });
  }
});

// 获取历史数据
app.get('/api/history', verifyToken, (req, res) => {
  try {
    const limit = Math.min(Number(req.query.limit) || 30, HISTORY_MAX);
    const history = loadHistory().slice(-limit);
    res.json({ ok: true, data: history, total: history.length });
  } catch {
    res.status(500).json({ ok: false, error: '获取历史数据失败' });
  }
});

// 健康检查（无需认证）
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, status: 'online', uptime: process.uptime(), timestamp: Date.now() });
});

// 改密（已登录用户）
app.post('/api/auth/change-password', verifyToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body || {};
  if (!oldPassword || !newPassword || newPassword.length < 6) {
    return res.status(400).json({ ok: false, error: '新密码至少6位' });
  }
  const users = loadUsers();
  const idx = users.findIndex((u) => u.username === req.user.username);
  if (idx < 0) return res.status(404).json({ ok: false, error: '用户不存在' });
  try {
    const ok = await bcrypt.compare(oldPassword, users[idx].passwordHash);
    if (!ok) return res.status(403).json({ ok: false, error: '原密码错误' });
  } catch {
    return res.status(403).json({ ok: false, error: '原密码错误' });
  }
  users[idx].passwordHash = await bcrypt.hash(newPassword, 10);
  saveUsers(users);
  const ip = (req.ip || '').split(':').pop();
  audit('PASSWORD_CHANGE', ip, `username=${req.user.username}`);
  res.json({ ok: true });
});

// 未匹配路由
app.use((_req, res) => {
  res.status(404).json({ ok: false, error: 'Not Found' });
});

// 全局错误处理
app.use((err, _req, res, _next) => {
  console.error('[Agent Error]', err.message);
  res.status(500).json({ ok: false, error: '服务器内部错误' });
});

// ─── WebSocket 服务器 ─────────────────────────────────────────────────────
const server = createServer(app);
const wss = new WebSocketServer({ noServer: true });

// 在线 WebSocket 客户端
const wsClients = new Set();

async function broadcastMetrics() {
  if (wsClients.size === 0) return;
  const data = await getSystemMetrics();
  const msg = JSON.stringify({ type: 'metrics', data, ts: Date.now() });
  for (const ws of wsClients) {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(msg);
    }
  }
  // 同时写历史
  saveHistoryEntry({ ts: Date.now(), data });
}

// 每 10 秒广播一次
const broadcastInterval = setInterval(broadcastMetrics, 10_000);

wss.on('connection', (ws, req) => {
  const ip = (req.socket.remoteAddress || '').split(':').pop();
  let authenticated = false;
  let userInfo = null;

  const url = new URL(req.url, `http://localhost`);
  const queryToken = url.searchParams.get('token');

  if (queryToken) {
    try {
      const payload = jwt.verify(queryToken, JWT_SECRET);
      authenticated = true;
      userInfo = payload;
      audit('WS_CONNECT', ip, `username=${payload.username}`);
      ws.user = payload;
      wsClients.add(ws);
      (async () => {
        try {
          const m = await getSystemMetrics();
          ws.send(JSON.stringify({ type: 'metrics', data: m, ts: Date.now() }));
        } catch {}
      })();
      ws.send(JSON.stringify({ type: 'connected', username: payload.username, uptime: process.uptime() }));
    } catch {
      ws.close(4001, 'Invalid token');
      return;
    }
  }

  ws.on('message', (data) => {
    try {
      const msg = JSON.parse(data);
      if (msg.type === 'auth' && !authenticated) {
        try {
          const payload = jwt.verify(msg.token, JWT_SECRET);
          authenticated = true;
          userInfo = payload;
          audit('WS_CONNECT', ip, `username=${payload.username}`);
          ws.user = payload;
          wsClients.add(ws);
          ws.send(JSON.stringify({ type: 'auth_ok', username: payload.username }));
          (async () => {
            try {
              const m = await getSystemMetrics();
              ws.send(JSON.stringify({ type: 'metrics', data: m, ts: Date.now() }));
            } catch {}
          })();
        } catch {
          ws.send(JSON.stringify({ type: 'auth_error', error: 'Invalid token' }));
        }
      }
    } catch {}
  });

  ws.on('close', () => {
    wsClients.delete(ws);
    if (userInfo) {
      audit('WS_DISCONNECT', ip, `username=${userInfo.username}`);
    }
  });

  ws.on('error', () => {
    wsClients.delete(ws);
  });
});

// 处理 HTTP upgrade 请求
server.on('upgrade', (req, socket, head) => {
  const ip = (socket.remoteAddress || '').split(':').pop();
  // WebSocket 路径是 /ws
  if (req.url && req.url.startsWith('/ws')) {
    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit('connection', ws, req);
    });
  } else {
    socket.destroy();
  }
});

// ─── 启动 ─────────────────────────────────────────────────────────────────

function shutdown(signal) {
  console.log(`\n${signal} 收到，正在优雅关闭...`);
  clearInterval(broadcastInterval);
  for (const ws of wsClients) ws.close(1001, 'Server shutting down');
  server.close(() => {
    console.log('Agent 已关闭');
    process.exit(0);
  });
  setTimeout(() => { console.error('强制退出'); process.exit(1); }, 10_000);
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

server.listen(PORT, '0.0.0.0', () => {
  const originHint = STRICT_CORS
    ? `✅ 仅允许 ${ALLOWED_ORIGINS.length} 个来源`
    : '⚠️ 未限制来源（建议内网使用）';

  console.log(`
╔══════════════════════════════════════════════════════════╗
║         🖥️  服务器监控 Agent                              ║
╠══════════════════════════════════════════════════════════╣
║  端口:      ${String(PORT).padEnd(43)}║
║  认证:      ✅ JWT 令牌（24小时过期）                   ║
║  CORS:      ${originHint.padEnd(43)}║
║  安全头:    ✅ Helmet 已启用                             ║
║  限速:      ✅ ${RATE_LIMIT_MAX}次/${RATE_LIMIT_WINDOW_MS / 1000}秒                             ║
║  超时:      ✅ ${REQUEST_TIMEOUT_MS / 1000}秒                                      ║
║  WebSocket: ✅ ws://localhost:${PORT}/ws                    ║
║  历史:      ✅ 近 ${HISTORY_MAX} 条（${(HISTORY_MAX * 10 / 60).toFixed(0)} 分钟）                       ║
║  审计日志:  ✅ ${HISTORY_DIR}/audit.log                      ║
╠══════════════════════════════════════════════════════════╣
║  HTTP:     http://localhost:${PORT}/api/metrics            ║
║  WS:       ws://localhost:${PORT}/ws?token=<jwt>           ║
║  Health:   http://localhost:${PORT}/api/health             ║
╚══════════════════════════════════════════════════════════╝
`);
});
