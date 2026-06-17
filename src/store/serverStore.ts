import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ServerMetrics {
  hostname: string;
  platform: string;
  arch: string;
  uptime: number;
  cpu: {
    cores: number;
    model: string;
    usagePercent: number;
  };
  memory: {
    total: number;
    used: number;
    free: number;
    usagePercent: number;
  };
  disk: {
    total: number;
    used: number;
    free: number;
    usagePercent: number;
  };
  network: {
    interfaces: number;
    rxMbps: number;
    txMbps: number;
  };
}

export interface ServerData {
  id: string;
  name: string;
  address: string;
  interval: number;
  createdAt: number;
  status: 'online' | 'offline' | 'checking';
  lastCheckTime: number | null;
  metrics: ServerMetrics | null;
  error?: string | null;
}

interface ServerStore {
  servers: ServerData[];
  addServer: (data: { name: string; address: string; interval: number }) => void;
  removeServer: (id: string) => void;
  updateServer: (id: string, updates: Partial<ServerData>) => void;
  setStatus: (id: string, status: ServerData['status']) => void;
  setMetrics: (id: string, metrics: ServerMetrics, err?: string | null) => void;
}

const genId = () =>
  'svr_' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);

export const useServerStore = create<ServerStore>()(
  persist(
    (set) => ({
      servers: [],

      addServer: ({ name, address, interval }) =>
        set((state) => ({
          servers: [
            {
              id: genId(),
              name,
              address,
              interval,
              createdAt: Date.now(),
              status: 'checking',
              lastCheckTime: null,
              metrics: null,
              error: null,
            },
            ...state.servers,
          ],
        })),

      removeServer: (id) =>
        set((state) => ({ servers: state.servers.filter((s) => s.id !== id) })),

      updateServer: (id, updates) =>
        set((state) => ({
          servers: state.servers.map((s) => (s.id === id ? { ...s, ...updates } : s)),
        })),

      setStatus: (id, status) =>
        set((state) => ({
          servers: state.servers.map((s) =>
            s.id === id ? { ...s, status, lastCheckTime: Date.now() } : s
          ),
        })),

      setMetrics: (id, metrics, err) =>
        set((state) => ({
          servers: state.servers.map((s) =>
            s.id === id
              ? {
                  ...s,
                  metrics,
                  lastCheckTime: Date.now(),
                  status: err ? 'offline' : 'online',
                  error: err ?? null,
                }
              : s
          ),
        })),
    }),
    { name: 'server-monitor-storage' }
  )
);

export default useServerStore;
