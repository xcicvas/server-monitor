import { useEffect, useRef, useCallback } from 'react';
import { useServerStore, type ServerData, type ServerMetrics } from '../store/serverStore';

/**
 * 规范化 Agent URL：确保有协议；没有路径则追加 /api/metrics
 */
function resolveAgentUrl(rawAddress: string): string {
  let url = rawAddress.trim();
  if (!/^https?:\/\//i.test(url)) {
    url = 'http://' + url;
  }
  try {
    const u = new URL(url);
    if (!u.pathname || u.pathname === '/') {
      u.pathname = '/api/metrics';
    }
    return u.toString();
  } catch {
    return url;
  }
}

/** 统一的采集逻辑：调用 Agent HTTP 接口，失败时返回错误 */
async function fetchMetrics(
  address: string,
  token: string
): Promise<{ metrics: ServerMetrics | null; error: string | null }> {
  const url = resolveAgentUrl(address);
  const headers: Record<string, string> = { Accept: 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    const resp = await fetch(url, {
      method: 'GET',
      signal: controller.signal,
      headers,
    });
    clearTimeout(timer);

    if (!resp.ok) {
      if (resp.status === 401) return { metrics: null, error: '令牌无效，请检查 Access Token' };
      if (resp.status === 403) return { metrics: null, error: '拒绝访问，Token 不匹配' };
      if (resp.status === 429) return { metrics: null, error: '请求过于频繁，请稍后再试' };
      return { metrics: null, error: `HTTP ${resp.status} ${resp.statusText}` };
    }
    const json = await resp.json();

    // Agent 正常返回：{ ok, status, data: {...}, timestamp }
    if (json && (json.ok === true || json.data || json.cpu)) {
      const d = json.data ?? json;
      const metrics: ServerMetrics = {
        hostname: d.hostname || d.host || 'unknown',
        platform: d.platform || '',
        arch: d.arch || '',
        uptime: Number(d.uptime || 0),
        cpu: {
          cores: d.cpu?.cores || d.cpu?.count || 1,
          model: d.cpu?.model || '',
          usagePercent: Number(d.cpu?.usagePercent ?? d.cpu?.usage ?? 0),
        },
        memory: {
          total: Number(d.memory?.total || 0),
          used: Number(d.memory?.used || 0),
          free: Number(d.memory?.free || 0),
          usagePercent: Number(d.memory?.usagePercent ?? d.memory?.usage ?? 0),
        },
        disk: {
          total: Number(d.disk?.total || 0),
          used: Number(d.disk?.used || 0),
          free: Number(d.disk?.free || 0),
          usagePercent: Number(d.disk?.usagePercent ?? d.disk?.usage ?? 0),
        },
        network: {
          interfaces: Number(d.network?.interfaces || d.network?.interfaces?.length || 0),
          rxMbps: Number(d.network?.rxMbps || 0),
          txMbps: Number(d.network?.txMbps || 0),
        },
      };
      return { metrics, error: null };
    }

    // 如果 Agent 返回了异常 JSON
    return { metrics: null, error: (json && json.error) || '响应格式不正确' };
  } catch (err) {
    const message =
      err instanceof Error
        ? (err.name === 'AbortError' ? '请求超时' : err.message)
        : '网络错误';
    return { metrics: null, error: message };
  }
}

export function usePollingServers() {
  const { servers, setMetrics, setStatus } = useServerStore();
  const intervalsRef = useRef<Map<string, NodeJS.Timeout>>(new Map());

  /** 单次触发：立即探测某台服务器 */
  const probeOne = useCallback(
    async (s: ServerData) => {
      setStatus(s.id, 'checking');
      const { metrics, error } = await fetchMetrics(s.address, s.token || '');
      setMetrics(s.id, metrics as ServerMetrics, error);
    },
    [setStatus, setMetrics]
  );

  /** 启动定时轮询（每台服务器独立 interval） */
  useEffect(() => {
    const current = new Set(servers.map((s) => s.id));

    // 清理已不存在的服务器定时器
    intervalsRef.current.forEach((t, id) => {
      if (!current.has(id)) {
        clearInterval(t);
        intervalsRef.current.delete(id);
      }
    });

    // 为新服务器创建 + 立即探一次
    servers.forEach((s) => {
      if (!intervalsRef.current.has(s.id)) {
        probeOne(s);
        const t = setInterval(() => probeOne(s), s.interval * 1000);
        intervalsRef.current.set(s.id, t);
      }
    });

    // 组件卸载时清理
    return () => {
      intervalsRef.current.forEach((t) => clearInterval(t));
      intervalsRef.current.clear();
    };
  }, [servers, probeOne]);

  return { probeOne };
}

export default usePollingServers;
