import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createJSONStorage } from 'zustand/middleware';

// ─── 安全工具：Token 混淆 ──────────────────────────────────────────────────
function obfuscate(str: string): string {
  try {
    return btoa(encodeURIComponent(str));
  } catch {
    return str;
  }
}

function deobfuscate(str: string): string {
  try {
    return decodeURIComponent(atob(str));
  } catch {
    return str;
  }
}

const localStorage_ = createJSONStorage(() => localStorage);

// ─── 历史数据内存 Store（不持久化）────────────────────────────────────────
const HISTORY_MAX = 30;

interface HistoryEntry {
  timestamp: number;
  cpu: number;
  memory: number;
  disk: number;
}

type HistoryMap = Map<string, HistoryEntry[]>;

const historyMap: HistoryMap = new Map();

export function useServerHistory(serverId: string): HistoryEntry[] {
  // 订阅 store 变化以触发重渲染
  useServerStore((s) => s.servers);
  return historyMap.get(serverId) ?? [];
}

export { historyMap, HISTORY_MAX };

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
  token: string;        // 混淆存储（Base64编码）
  interval: number;
  createdAt: number;
  status: 'online' | 'offline' | 'checking';
  lastCheckTime: number | null;
  metrics: ServerMetrics | null;
  error?: string | null;
}

interface ServerStore {
  servers: ServerData[];
  addServer: (data: { name: string; address: string; token?: string; interval: number }) => void;
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

      addServer: ({ name, address, token = '', interval }) =>
        set((state) => ({
          servers: [
            {
              id: genId(),
              name,
              address,
              token: token ? obfuscate(token) : '', // 混淆存储
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

      removeServer: (id) => {
        historyMap.delete(id);
        set((state) => ({ servers: state.servers.filter((s) => s.id !== id) }));
      },

      updateServer: (id, updates) =>
        set((state) => ({
          servers: state.servers.map((s) => {
            if (s.id !== id) return s;
            // 如果更新中包含 token，同样混淆
            const processed = { ...updates };
            if (processed.token !== undefined) {
              processed.token = processed.token ? obfuscate(processed.token) : '';
            }
            return { ...s, ...processed };
          }),
        })),

      setStatus: (id, status) =>
        set((state) => ({
          servers: state.servers.map((s) =>
            s.id === id ? { ...s, status, lastCheckTime: Date.now() } : s
          ),
        })),

      setMetrics: (id, metrics, err) =>
        set((state) => {
          // 更新历史记录
          if (!err && metrics) {
            const history = historyMap.get(id) ?? [];
            history.push({
              timestamp: Date.now(),
              cpu: metrics.cpu.usagePercent,
              memory: metrics.memory.usagePercent,
              disk: metrics.disk.usagePercent,
            });
            if (history.length > HISTORY_MAX) history.shift();
            historyMap.set(id, history);
          }
          return {
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
          };
        }),
    }),
    {
      name: 'server-monitor-storage',
      storage: localStorage_, // 使用 localStorage 持久化配置
      // 只持久化 servers 数组，不包含其他状态
      partialize: (state) => ({ servers: state.servers }),
      // 读取时对 token 去混淆
      onRehydrateStorage: () => (state) => {
        if (state && Array.isArray(state.servers)) {
          state.servers = state.servers.map((s: ServerData) => ({
            ...s,
            token: s.token ? deobfuscate(s.token) : '',
          }));
        }
      },
    }
  )
);

export default useServerStore;
