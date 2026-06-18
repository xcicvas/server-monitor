import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createJSONStorage } from 'zustand/middleware';

const STORAGE_KEY = 'server-monitor-storage';
const HISTORY_KEY = 'server-monitor-history';

const ENCRYPTION_KEY = 'server-monitor-v2-key';

function deriveKey(key: string): Uint8Array {
  const hash = new Uint8Array(32);
  for (let i = 0; i < key.length; i++) {
    hash[i % 32] ^= key.charCodeAt(i);
  }
  return hash;
}

function encrypt(str: string): string {
  try {
    const key = deriveKey(ENCRYPTION_KEY);
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const encrypted = new Uint8Array(data.length);
    for (let i = 0; i < data.length; i++) {
      encrypted[i] = data[i] ^ key[i % key.length];
    }
    return btoa(String.fromCharCode(...encrypted));
  } catch {
    return btoa(encodeURIComponent(str));
  }
}

function decrypt(str: string): string {
  try {
    const key = deriveKey(ENCRYPTION_KEY);
    const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
    const decrypted = new Uint8Array(bytes.length);
    for (let i = 0; i < bytes.length; i++) {
      decrypted[i] = bytes[i] ^ key[i % key.length];
    }
    return new TextDecoder().decode(decrypted);
  } catch {
    try {
      return decodeURIComponent(atob(str));
    } catch {
      return str;
    }
  }
}

// ─── 历史数据持久化 ─────────────────────────────────────────────────────────
const HISTORY_MAX = 30;

interface HistoryEntry {
  timestamp: number;
  cpu: number;
  memory: number;
  disk: number;
}

type HistoryMap = Map<string, HistoryEntry[]>;

function loadHistory(): HistoryMap {
  const map = new Map<string, HistoryEntry[]>();
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      for (const [id, entries] of Object.entries(data)) {
        if (Array.isArray(entries)) {
          map.set(id, entries);
        }
      }
    }
  } catch {}
  return map;
}

function saveHistory(map: HistoryMap): void {
  try {
    const data: Record<string, HistoryEntry[]> = {};
    for (const [id, entries] of map) {
      data[id] = entries;
    }
    localStorage.setItem(HISTORY_KEY, JSON.stringify(data));
  } catch {}
}

const historyMap: HistoryMap = loadHistory();

export function useServerHistory(serverId: string): HistoryEntry[] {
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
  load: {
    load1: number;
    load5: number;
    load15: number;
    loadPerCpu: number;
    cpuCount: number;
  };
  diskIO: {
    readBytes: number;
    writeBytes: number;
    readMbps: number;
    writeMbps: number;
  };
}

export interface ServerData {
  id: string;
  name: string;
  address: string;
  token: string;
  username: string;
  password: string;
  interval: number;
  createdAt: number;
  status: 'online' | 'offline' | 'checking';
  lastCheckTime: number | null;
  metrics: ServerMetrics | null;
  error?: string | null;
}

interface ServerStore {
  servers: ServerData[];
  addServer: (data: { name: string; address: string; token?: string; username?: string; password?: string; interval: number }) => void;
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

      addServer: ({ name, address, token = '', username = '', password = '', interval }) =>
        set((state) => ({
          servers: [
            {
              id: genId(),
              name,
              address,
              token: token ? encrypt(token) : '',
              username: username ? encrypt(username) : '',
              password: password ? encrypt(password) : '',
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
        saveHistory(historyMap);
        set((state) => ({ servers: state.servers.filter((s) => s.id !== id) }));
      },

      updateServer: (id, updates) =>
        set((state) => ({
          servers: state.servers.map((s) => {
            if (s.id !== id) return s;
            const processed = { ...updates };
            if (processed.token !== undefined) {
              processed.token = processed.token ? encrypt(processed.token) : '';
            }
            if (processed.username !== undefined) {
              processed.username = processed.username ? encrypt(processed.username) : '';
            }
            if (processed.password !== undefined) {
              processed.password = processed.password ? encrypt(processed.password) : '';
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
            saveHistory(historyMap);
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
      name: STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ servers: state.servers }),
      onRehydrateStorage: () => (state) => {
        if (state && Array.isArray(state.servers)) {
          state.servers = state.servers.map((s: ServerData) => ({
            ...s,
            token: s.token ? decrypt(s.token) : '',
            username: s.username ? decrypt(s.username) : '',
            password: s.password ? decrypt(s.password) : '',
          }));
        }
      },
    }
  )
);

export default useServerStore;
