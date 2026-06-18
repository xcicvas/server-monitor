import { useEffect, useRef } from 'react';
import { useServerStore } from '../store/serverStore';
import type { ServerMetrics } from '../store/serverStore';

interface WsMessage {
  type: string;
  data?: ServerMetrics;
  ts?: number;
  error?: string;
  username?: string;
  uptime?: number;
  retryAfter?: number;
}

function buildWsUrl(address: string): string | null {
  try {
    const url = new URL(
      address.startsWith('ws') || address.startsWith('http')
        ? address
        : `http://${address}`
    );
    const protocol = url.protocol === 'https:' ? 'wss:' : 'ws:';
    return `${protocol}//${url.host}/ws`;
  } catch {
    return null;
  }
}

interface ServerIdentity {
  id: string;
  address: string;
  token: string;
}

export function useWebSocketServers(): void {
  // 所有可变状态放在 ref 中，避免 effect 依赖变化导致重复连接
  const wsMapRef = useRef<Map<string, WebSocket>>(new Map());
  const reconnectMapRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());
  const retryCountRef = useRef<Map<string, number>>(new Map());

  // 关键：只依赖"连接身份签名"，不依赖 metrics/status 等变化字段
  const servers = useServerStore((s) => s.servers);
  const connectSignature = servers
    .map((s) => `${s.id}|${s.address}|${s.token ? 't' : ''}`)
    .join('||');

  useEffect(() => {
    // 每次签名变化：清理所有旧连接和定时器
    for (const [, ws] of wsMapRef.current) {
      try { ws.close(1000, 'Servers changed'); } catch {}
    }
    wsMapRef.current.clear();
    for (const [, t] of reconnectMapRef.current) clearTimeout(t);
    reconnectMapRef.current.clear();
    retryCountRef.current.clear();

    // 通过 getState() 拿稳定 action — setMetrics/setStatus 是稳定引用
    const { setMetrics, setStatus } = useServerStore.getState();

    const openConnection = (server: ServerIdentity, attempt = 0): void => {
      if (!server.token) return;
      const wsUrl = buildWsUrl(server.address);
      if (!wsUrl) {
        setStatus(server.id, 'offline');
        return;
      }

      let ws: WebSocket;
      try {
        ws = new WebSocket(wsUrl);
      } catch {
        setStatus(server.id, 'offline');
        return;
      }
      wsMapRef.current.set(server.id, ws);

      ws.onopen = () => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ type: 'auth', token: server.token }));
          retryCountRef.current.set(server.id, 0);
        }
      };

      ws.onmessage = (event) => {
        try {
          const msg: WsMessage = JSON.parse(event.data);
          if (msg.type === 'metrics' && msg.data) {
            setStatus(server.id, 'online');
            setMetrics(server.id, msg.data);
          } else if (msg.type === 'auth_ok') {
            setStatus(server.id, 'online');
          } else if (msg.type === 'auth_error') {
            setStatus(server.id, 'offline');
          }
        } catch {}
      };

      ws.onerror = () => setStatus(server.id, 'offline');

      ws.onclose = (event) => {
        wsMapRef.current.delete(server.id);
        setStatus(server.id, 'offline');

        // 1000=正常关闭，1001=端点离开。其他代码 = 异常断开，需要重连
        if (event.code === 1000 || event.code === 1001) return;

        const nextCount = attempt + 1;
        retryCountRef.current.set(server.id, nextCount);
        const delay = Math.min(30_000, 1000 * Math.pow(1.5, nextCount));

        const t = setTimeout(() => {
          reconnectMapRef.current.delete(server.id);
          // 重连前再检查一下服务器是否还在列表里、还有 token
          const current = useServerStore.getState().servers.find((s) => s.id === server.id);
          if (!current || !current.token) return;
          openConnection(
            { id: current.id, address: current.address, token: current.token },
            nextCount
          );
        }, delay);
        reconnectMapRef.current.set(server.id, t);
      };
    };

    // 初次建立
    for (const server of servers) {
      if (!server.token) continue;
      openConnection({ id: server.id, address: server.address, token: server.token }, 0);
    }

    // 组件卸载 / effect 重新执行时清理
    return () => {
      for (const [, ws] of wsMapRef.current) {
        try { ws.close(1000, 'Effect cleanup'); } catch {}
      }
      wsMapRef.current.clear();
      for (const [, t] of reconnectMapRef.current) clearTimeout(t);
      reconnectMapRef.current.clear();
      retryCountRef.current.clear();
    };
    // 只依赖 connectSignature — metrics/status 变化不会触发重连
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectSignature]);
}
