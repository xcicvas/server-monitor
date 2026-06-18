export interface AgentInfo {
  hostname: string;
  platform: string;
  architecture: string;
  nodeVersion: string;
  uptime: number;
}

export interface ProbeResult {
  health: boolean;
  latency: number | null;
  info?: AgentInfo;
}

export interface LoginResult {
  ok: boolean;
  token: string | null;
  username: string | null;
  error?: string;
  latency?: number;
}

const DEFAULT_TIMEOUT = 8000;

function normalizeAddress(address: string): string {
  if (!/^https?:\/\//i.test(address)) {
    return `http://${address.trim()}`;
  }
  return address.trim();
}

export async function probeAgent(
  address: string,
  timeout = DEFAULT_TIMEOUT
): Promise<ProbeResult> {
  const url = normalizeAddress(address);
  const start = performance.now();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const resp = await fetch(`${url}/api/health`, {
      method: 'GET',
      signal: controller.signal,
      cache: 'no-store',
      headers: { Accept: 'application/json' },
    });

    clearTimeout(timer);

    if (!resp.ok) {
      return { health: false, latency: performance.now() - start };
    }

    const data = await resp.json().catch(() => null);

    return {
      health: true,
      latency: Math.round(performance.now() - start),
      info: data && typeof data === 'object' ? {
        hostname: data.hostname || '',
        platform: data.platform || '',
        architecture: data.arch || '',
        nodeVersion: data.nodeVersion || '',
        uptime: Number(data.uptime) || 0,
      } : undefined,
    };
  } catch {
    clearTimeout(timer);
    return { health: false, latency: null };
  }
}

export async function loginAgent(
  address: string,
  username: string,
  password: string,
  timeout = DEFAULT_TIMEOUT
): Promise<LoginResult> {
  const url = normalizeAddress(address);
  const start = performance.now();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const resp = await fetch(`${url}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.trim(), password }),
      signal: controller.signal,
    });

    clearTimeout(timer);

    const data = await resp.json().catch(() => null);

    if (!resp.ok || !data || !data.ok) {
      return {
        ok: false,
        token: null,
        username: null,
        error: data?.error || '登录失败，请检查用户名和密码',
        latency: Math.round(performance.now() - start),
      };
    }

    return {
      ok: true,
      token: data.token || null,
      username: data.username || username.trim(),
      latency: Math.round(performance.now() - start),
    };
  } catch (err) {
    clearTimeout(timer);
    return {
      ok: false,
      token: null,
      username: null,
      error: `无法连接到 ${url}，请确认 Agent 已启动且地址正确`,
      latency: null,
    };
  }
}
