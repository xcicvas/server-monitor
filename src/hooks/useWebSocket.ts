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
  const retryCountRef = useRef<Map<string, number>>(new Map());

  const getWsUrl = useCallback((address: string) => {
    try {
      const url = new URL(address.startsWith('ws') ? address : `http://${address}`);
      const protocol = url.protocol === 'https:' ? 'wss:' : 'ws:';
      return `${protocol}//${url.host}/ws`;
    } catch {
      return null;
    }
  }, []);

  const connect = useCallback((server: { id: string; address: string; token: string; interval: number }) => {
    const existing = wsMapRef.current.get(server.id);
    if (existing && existing.readyState < 2) return;

    const wsUrl = getWsUrl(server.address);
    if (!wsUrl) {
      setStatus(server.id, 'offline');
      return;
    }

    setStatus(server.id, 'checking');

    const ws = new WebSocket(wsUrl);
    wsMapRef.current.set(server.id, ws);

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: 'auth', token: server.token }));
      retryCountRef.current.set(server.id, 0);
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

    ws.onerror = () => {
      setStatus(server.id, 'offline');
    };

    ws.onclose = (event) => {
      wsMapRef.current.delete(server.id);
      setStatus(server.id, 'offline');
      if (event.code !== 1000 && event.code !== 1001) {
        const key = server.id;
        const existing = reconnectMapRef.current.get(key);
        if (existing) clearTimeout(existing);

        const retryCount = (retryCountRef.current.get(key) || 0) + 1;
        retryCountRef.current.set(key, retryCount);
        const delay = Math.min(30000, 1000 * Math.pow(1.5, retryCount));
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
    retryCountRef.current.delete(serverId);
  }, []);

  useEffect(() => {
    for (const s of servers) {
      if (s.token) connect(s);
    }
  }, [servers, connect]);

  useEffect(() => {
    return () => {
      for (const [, ws] of wsMapRef.current) ws.close(1000, 'Component unmount');
      wsMapRef.current.clear();
      for (const [, t] of reconnectMapRef.current) clearTimeout(t);
      reconnectMapRef.current.clear();
      retryCountRef.current.clear();
    };
  }, []);

  return { connect, disconnect };
}
