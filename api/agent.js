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

// ═══ 运行模式：secure / insecure ═══════════════════════════════════════════
//   INSECURE_MODE=true  → 不安全模式：不验证 JWT，不启用 Helmet / 限速 / 审计日志 / 超时
//                        → 面板中添加服务器时勾选『不安全模式』即可直接连接
//   默认（不设此变量）→ 完全安全模式：JWT + bcrypt + 限速 + 审计 + 超时 + 注册默认关闭
const INSECURE = process.env.INSECURE_MODE === 'true' || process.env.INSECURE_MODE === '1';

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
// 默认账户：admin / admin（首次部署时自动写入 users.json，之后不再重建）
// 生产环境请立即登录后修改密码，或用环境变量 ADMIN_PASSWORD 覆盖默认值
const DEFAULT_ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const DEFAULT_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin';
// 不安全模式：直接存明文（简单、无需 bcrypt 依赖）；安全模式：bcrypt 哈希
function hashPassword(pw) {
  if (INSECURE) return pw;
  return bcrypt.hashSync(pw, 10);
}
async function verifyPassword(pw, stored) {
  if (INSECURE) return pw === stored;
  try { return await bcrypt.compare(pw, stored); } catch { return false; }
}
const DEFAULT_ADMIN = {
  username: DEFAULT_ADMIN_USERNAME,
  passwordHash: hashPassword(DEFAULT_ADMIN_PASSWORD),
  createdAt: Date.now(),
};

const usersFile = path.join(HISTORY_DIR, 'users.json');
let usersCache = null;       // 内存缓存
let usersCacheMtime = 0;     // 文件上次修改时间
let usersCacheExpireAt = 0;  // 缓存过期时间戳

// 是否允许注册：默认关闭，必须显式开启
//   ALLOW_REGISTER=true  → 允许注册（注册仍需管理员 JWT）
//   其他任何情况          → 禁止注册
const REGISTRATION_ALLOWED = process.env.ALLOW_REGISTER === 'true' || process.env.ALLOW_REGISTER === '1';

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
      // 首次运行：只在 users.json 真正不存在时才写入默认账户
      // 一旦文件被创建，即使被清空也不会再自动重建——避免意外删除后出现后门
      users = [DEFAULT_ADMIN];
      fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), 'utf-8');
    }
    usersCache = users;
    usersCacheMtime = stat ? stat.mtimeMs : 0;
    usersCacheExpireAt = now + 30_000; // 30 秒 TTL
    return users;
  } catch {
    // 解析失败时不要回退到默认账户——宁可报错也不要留下后门
    return [];
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
  if (INSECURE) return;
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
  if (INSECURE) {
    // 不安全模式：不验证 token，伪造一个匿名用户
    req.user = { username: 'anonymous' };
    return next();
  }
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
  // 用 df -k（Linux/macOS 通用，单位 KB），乘 1024 转字节
  try {
    const stdout = await execCmd('df -k / 2>/dev/null', 1500);
    const lines = String(stdout).split('\n').filter((l) => l.trim().length > 0);
    if (lines.length >= 2) {
      const fields = lines[1].split(/\s+/);
      // fields: Filesystem Size(KB) Used(KB) Avail(KB) Use% Mounted
      const totalK = Number(fields[1]);
      const usedK = Number(fields[2]);
      const availK = Number(fields[3]);
      if (Number.isFinite(totalK) && totalK > 0) {
        return {
          total: totalK * 1024,
          used: usedK * 1024,
          free: availK * 1024,
          usagePercent: (usedK / totalK) * 100,
        };
      }
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

// 磁盘 I/O 状态（用于差分计算速率）
let lastDiskIO = { readBytes: 0, writeBytes: 0, ts: 0 };

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
  const now = Date.now();

  // 差分计算速率（MB/s）
  let readMbps = 0;
  let writeMbps = 0;
  if (lastDiskIO.ts > 0 && now > lastDiskIO.ts) {
    const dt = (now - lastDiskIO.ts) / 1000; // 秒
    if (dt > 0 && readBytes >= lastDiskIO.readBytes) {
      readMbps = ((readBytes - lastDiskIO.readBytes) / (1024 * 1024)) / dt;
    }
    if (dt > 0 && writeBytes >= lastDiskIO.writeBytes) {
      writeMbps = ((writeBytes - lastDiskIO.writeBytes) / (1024 * 1024)) / dt;
    }
  }
  lastDiskIO = { readBytes, writeBytes, ts: now };

  return {
    readBytes,
    writeBytes,
    readMbps: Number(readMbps.toFixed(3)),
    writeMbps: Number(writeMbps.toFixed(3)),
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

// ─── 历史记录存储（内存缓存 + 异步持久化，避免每 10 秒全量读写磁盘）
const HISTORY_FILE = path.join(HISTORY_DIR, 'metrics_history.json');
const HISTORY_MAX = 288; // 保留 288 条（约 48 分钟，按 10 秒一条算）

let historyCache = null;
let historyCacheLoaded = false;
let historyDirty = false;

function loadHistory() {
  if (historyCacheLoaded && historyCache) return historyCache.slice();
  try {
    if (fs.existsSync(HISTORY_FILE)) {
      historyCache = JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf-8'));
      if (!Array.isArray(historyCache)) historyCache = [];
    } else {
      historyCache = [];
    }
  } catch {
    historyCache = [];
  }
  historyCacheLoaded = true;
  return historyCache.slice();
}

function saveHistoryEntry(entry) {
  // 写内存缓存
  if (!historyCacheLoaded) loadHistory();
  historyCache.push(entry);
  if (historyCache.length > HISTORY_MAX) historyCache.shift();
  historyDirty = true;
}

// 每 30 秒异步落盘一次（不用每次都写）
setInterval(() => {
  if (!historyDirty) return;
  try {
    const snapshot = historyCache ? historyCache.slice() : [];
    historyDirty = false;
    fs.promises.writeFile(HISTORY_FILE, JSON.stringify(snapshot), 'utf-8').catch(() => {});
  } catch {}
}, 30_000).unref();

// 进程退出前最后一次写盘
function flushHistorySync() {
  if (!historyDirty || !historyCache) return;
  try {
    fs.writeFileSync(HISTORY_FILE, JSON.stringify(historyCache), 'utf-8');
    historyDirty = false;
  } catch {}
}

// ─── Express App ───────────────────────────────────────────────────────────

const app = express();

app.set('trust proxy', 1);

if (!INSECURE) {
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
}

app.use(express.json({ limit: INSECURE ? '1mb' : MAX_BODY_SIZE }));

// CORS：不安全模式不限制来源
if (INSECURE) {
  app.use(cors({ origin: true, methods: ['GET', 'POST'], allowedHeaders: ['Content-Type', 'Authorization'] }));
} else if (STRICT_CORS) {
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

// ─── 全局中间件（限速 + 超时）──────────────────────────────────────────────
// 不安全模式跳过；安全模式：所有 /api/* 路由（包括登录、health）都经过限速和超时
if (!INSECURE) {
  app.use('/api', rateLimitMiddleware, timeoutMiddleware);
}

// ─── 公开路由 ──────────────────────────────────────────────────────────────

// 健康检查（无需认证）— 返回前端探测所需的字段
app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    status: 'online',
    uptime: process.uptime(),
    timestamp: Date.now(),
    hostname: os.hostname(),
    platform: os.platform(),
    arch: os.arch(),
    nodeVersion: process.version,
  });
});

// 登录
app.post('/api/auth/login', async (req, res) => {
  const ip = (req.ip || req.connection.remoteAddress || '').split(':').pop();
  // 不安全模式：不需要账号密码，直接签发 token（任何用户名都行）
  if (INSECURE) {
    const username = (req.body && req.body.username) || 'anonymous';
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '30d' });
    res.json({ ok: true, token, username, insecure: true });
    return;
  }
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
  const ok = await verifyPassword(password, user.passwordHash);
  if (!ok) {
    audit('LOGIN_FAIL', ip, `username=${username}`);
    return res.status(401).json({ ok: false, error: '用户名或密码错误' });
  }
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: JWT_EXPIRY });
  audit('LOGIN_OK', ip, `username=${username}`);
  res.json({ ok: true, token, username });
});

// 注册：不安全模式 = 直接开放；安全模式 = 需管理员 JWT + REGISTRATION_ALLOWED
app.post('/api/auth/register', verifyToken, async (req, res) => {
  if (!INSECURE && !REGISTRATION_ALLOWED) {
    return res.status(403).json({ ok: false, error: '注册功能已禁用（如需开启请设置 ALLOW_REGISTER=true 后重启）' });
  }
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ ok: false, error: '用户名和密码不能为空' });
  }
  if (!INSECURE) {
    if (username.length < 3 || password.length < 8) {
      return res.status(400).json({ ok: false, error: '用户名至少3位，密码至少8位' });
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return res.status(400).json({ ok: false, error: '用户名只能包含字母、数字和下划线' });
    }
  }
  const users = loadUsers();
  if (!Array.isArray(users)) {
    return res.status(500).json({ ok: false, error: '用户数据不可用' });
  }
  if (!INSECURE && users.length >= 10) {
    return res.status(403).json({ ok: false, error: '账号数量已达上限（10个）' });
  }
  if (users.some((u) => u.username === username)) {
    return res.status(409).json({ ok: false, error: '用户名已存在' });
  }
  users.push({
    username,
    passwordHash: hashPassword(password),
    createdAt: Date.now(),
    createdBy: req.user && req.user.username ? req.user.username : 'admin',
  });
  saveUsers(users);
  if (!INSECURE) {
    const ip = (req.ip || '').split(':').pop();
    audit('REGISTER', ip, `username=${username} by=${req.user && req.user.username}`);
  }
  res.json({ ok: true, username });
});

// ─── 受保护路由 ────────────────────────────────────────────────────────────

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

// 改密（已登录用户）：不安全模式跳过密码校验
app.post('/api/auth/change-password', verifyToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body || {};
  if (!newPassword || newPassword.length < (INSECURE ? 0 : 6)) {
    return res.status(400).json({ ok: false, error: INSECURE ? '新密码不能为空' : '新密码至少6位' });
  }
  const users = loadUsers();
  const idx = users.findIndex((u) => u.username === req.user.username);
  if (idx < 0) return res.status(404).json({ ok: false, error: '用户不存在' });
  if (!INSECURE) {
    const ok = await verifyPassword(oldPassword, users[idx].passwordHash);
    if (!ok) return res.status(403).json({ ok: false, error: '原密码错误' });
  }
  users[idx].passwordHash = hashPassword(newPassword);
  saveUsers(users);
  if (!INSECURE) {
    const ip = (req.ip || '').split(':').pop();
    audit('PASSWORD_CHANGE', ip, `username=${req.user.username}`);
  }
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
  let authenticated = INSECURE; // 不安全模式默认为已认证
  let userInfo = INSECURE ? { username: 'anonymous' } : null;

  if (INSECURE) {
    ws.user = userInfo;
    wsClients.add(ws);
    (async () => {
      try {
        const m = await getSystemMetrics();
        ws.send(JSON.stringify({ type: 'metrics', data: m, ts: Date.now() }));
      } catch {}
    })();
    ws.send(JSON.stringify({ type: 'connected', username: 'anonymous', uptime: process.uptime() }));
    // 不安全模式：消息处理跳过认证
    ws.on('close', () => wsClients.delete(ws));
    ws.on('error', () => wsClients.delete(ws));
    return;
  }

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
  flushHistorySync();
  server.close(() => {
    console.log('Agent 已关闭');
    process.exit(0);
  });
  setTimeout(() => { flushHistorySync(); console.error('强制退出'); process.exit(1); }, 10_000);
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
process.on('unhandledRejection', (reason) => {
  console.error('[Unhandled Rejection]', reason);
});
process.on('uncaughtException', (err) => {
  console.error('[Uncaught Exception]', err);
  try { flushHistorySync(); } catch {}
  setTimeout(() => process.exit(1), 200);
});

server.listen(PORT, '0.0.0.0', () => {
  if (INSECURE) {
    // 不安全模式：简单、醒目、红色警告
    console.log(`
╔══════════════════════════════════════════════════════════╗
║  🖥️  服务器监控 Agent （不安全模式）                       ║
╠══════════════════════════════════════════════════════════╣
║  端口:      ${String(PORT).padEnd(43)}║
║  认证:      ⛔ 已关闭（任何人均可连接）                    ║
║  CORS:      ⚠️  未限制来源                                ║
║  安全头:    ⛔ 已关闭（Helmet 未启用）                     ║
║  限速:      ⛔ 已关闭                                      ║
║  超时:      ⛔ 已关闭                                      ║
║  注册:      ✅ 开放（无需管理员 JWT）                      ║
║  WebSocket: ✅ ws://localhost:${PORT}/ws                    ║
║  历史:      ✅ 近 ${HISTORY_MAX} 条（${(HISTORY_MAX * 10 / 60).toFixed(0)} 分钟）                       ║
║  审计日志:  ⛔ 已关闭                                      ║
╠══════════════════════════════════════════════════════════╣
║  ⚠️  警告：不安全模式仅用于开发 / 内网 / 受信任环境       ║
║      生产环境请移除 INSECURE_MODE 环境变量                 ║
╠══════════════════════════════════════════════════════════╣
║  HTTP:    http://localhost:${PORT}/api/metrics            ║
║  WS:      ws://localhost:${PORT}/ws                       ║
║  Health:  http://localhost:${PORT}/api/health             ║
╚══════════════════════════════════════════════════════════╝
`);
    return;
  }

  const originHint = STRICT_CORS
    ? `✅ 仅允许 ${ALLOWED_ORIGINS.length} 个来源`
    : '⚠️ 未限制来源（建议内网使用）';

  const registerHint = REGISTRATION_ALLOWED
    ? '⚠️ 已开启（需管理员JWT）'
    : '✅ 已关闭（仅管理员可登录）';

  const users = (() => {
    try { return loadUsers(); } catch { return []; }
  })();
  const usingDefault = users.length === 1 && users[0].username === 'admin';

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
║  注册:      ${registerHint.padEnd(43)}║
║  WebSocket: ✅ ws://localhost:${PORT}/ws                    ║
║  历史:      ✅ 近 ${HISTORY_MAX} 条（${(HISTORY_MAX * 10 / 60).toFixed(0)} 分钟）                       ║
║  审计日志:  ✅ ${HISTORY_DIR}/audit.log                      ║
╠══════════════════════════════════════════════════════════╣
║  HTTP:     http://localhost:${PORT}/api/metrics            ║
║  WS:       ws://localhost:${PORT}/ws?token=<jwt>           ║
║  Health:   http://localhost:${PORT}/api/health             ║
╚══════════════════════════════════════════════════════════╝
${usingDefault ? '⚠️  警告：正在使用默认账号 admin/admin，登录后请立即修改密码' : ''}
`);
});
