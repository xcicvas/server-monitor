import { useEffect, useRef, useCallback } from 'react';
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

export function useWebSocketServers() {
  const { servers, setMetrics, setStatus } = useServerStore();
  const wsMapRef = useRef<Map<string, WebSocket>>(new Map());
  const reconnectMapRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const getWsUrl = useCallback((address: string, token: string) => {
    // 构造 WebSocket URL：ws://host:port/ws?token=xxx
    try {
      const url = new URL(address.startsWith('ws') ? address : `http://${address}`);
      const protocol = url.protocol === 'https:' ? 'wss:' : 'ws:';
      return `${protocol}//${url.host}/ws?token=${encodeURIComponent(token)}`;
    } catch {
      return null;
    }
  }, []);

  const connect = useCallback((server: { id: string; address: string; token: string; interval: number }) => {
    const existing = wsMapRef.current.get(server.id);
    if (existing && existing.readyState < 2) return; // already connecting or open

    const wsUrl = getWsUrl(server.address, server.token);
    if (!wsUrl) {
      setStatus(server.id, 'offline');
      return;
    }

    setStatus(server.id, 'checking');

    const ws = new WebSocket(wsUrl);
    wsMapRef.current.set(server.id, ws);

    ws.onopen = () => {
      setStatus(server.id, 'online');
      // 清除重连定时器
      const t = reconnectMapRef.current.get(server.id);
      if (t) { clearTimeout(t); reconnectMapRef.current.delete(server.id); }
    };

    ws.onmessage = (event) => {
      try {
        const msg: WsMessage = JSON.parse(event.data);
        if (msg.type === 'metrics' && msg.data) {
          setMetrics(server.id, msg.data);
        }
      } catch {}
    };

    ws.onerror = () => {
      setStatus(server.id, 'offline');
    };

    ws.onclose = (event) => {
      wsMapRef.current.delete(server.id);
      setStatus(server.id, 'offline');
      // 非正常关闭时，指数退避重连
      if (event.code !== 1000 && event.code !== 1001) {
        const key = server.id;
        const existing = reconnectMapRef.current.get(key);
        if (existing) clearTimeout(existing);

        const delay = Math.min(30000, 1000 * Math.pow(1.5, wsMapRef.current.size + 1));
        const t = setTimeout(() => connect(server), delay);
        reconnectMapRef.current.set(key, t);
      }
    };
  }, [getWsUrl, setMetrics, setStatus]);

  const disconnect = useCallback((serverId: string) => {
    const ws = wsMapRef.current.get(serverId);
    if (ws) { ws.close(1000, 'User disconnected'); wsMapRef.current.delete(serverId); }
    const t = reconnectMapRef.current.get(serverId);
    if (t) { clearTimeout(t); reconnectMapRef.current.delete(serverId); }
  }, []);

  // 连接所有服务器
  useEffect(() => {
    for (const s of servers) {
      if (s.token) connect(s);
    }
  }, [servers, connect]);

  // 组件卸载时断开所有
  useEffect(() => {
    return () => {
      for (const [, ws] of wsMapRef.current) ws.close(1000, 'Component unmount');
      wsMapRef.current.clear();
      for (const [, t] of reconnectMapRef.current) clearTimeout(t);
      reconnectMapRef.current.clear();
    };
  }, []);

  return { connect, disconnect };
}
