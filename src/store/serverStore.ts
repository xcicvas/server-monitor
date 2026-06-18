import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const STORAGE_KEY = 'server-monitor-storage';
const HISTORY_KEY = 'server-monitor-history';

// ─── 简易混淆（仅防浏览器 localStorage 直读，非强加密）──────────
// 设计原则：内存中保持明文，磁盘上保持密文。在 storage 层做加/解密。
const ENCRYPTION_KEY = 'server-monitor-v2-key';

function xorTransform(input: string): string {
  let out = '';
  for (let i = 0; i < input.length; i++) {
    out += String.fromCharCode(input.charCodeAt(i) ^ ENCRYPTION_KEY.charCodeAt(i % ENCRYPTION_KEY.length));
  }
  return out;
}

function encryptPlain(plain: string): string {
  try {
    // btoa 只能处理 Latin1，UTF-8 需先 encode
    const utf8 = unescape(encodeURIComponent(plain));
    return btoa(xorTransform(utf8));
  } catch {
    return btoa(unescape(encodeURIComponent(plain)));
  }
}

function decryptPlain(cipher: string): string {
  try {
    const utf8 = xorTransform(atob(cipher));
    return decodeURIComponent(escape(utf8));
  } catch {
    // 兼容旧数据（明文）
    try {
      return decodeURIComponent(escape(atob(cipher)));
    } catch {
      return cipher;
    }
  }
}

// 只加密敏感字段的序列化层：
// 写入：JSON.stringify → encrypt sensitive fields → JSON.stringify
// 读取：JSON.parse → decrypt sensitive fields → return
function encryptServerFields(obj: unknown): unknown {
  if (!obj) return obj;
  if (Array.isArray(obj)) return obj.map(encryptServerFields);
  if (typeof obj !== 'object') return obj;
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
    if (typeof v === 'string' && (k === 'token' || k === 'username' || k === 'password')) {
      out[k] = v ? `__enc__${encryptPlain(v)}` : v;
    } else if (Array.isArray(v)) {
      out[k] = v.map(encryptServerFields);
    } else if (v && typeof v === 'object') {
      out[k] = encryptServerFields(v);
    } else {
      out[k] = v;
    }
  }
  return out;
}

function decryptServerFields(obj: unknown): unknown {
  if (!obj) return obj;
  if (Array.isArray(obj)) return obj.map(decryptServerFields);
  if (typeof obj !== 'object') return obj;
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
    if (typeof v === 'string' && (k === 'token' || k === 'username' || k === 'password')) {
      out[k] = v.startsWith('__enc__') ? decryptPlain(v.slice(7)) : v;
    } else if (Array.isArray(v)) {
      out[k] = v.map(decryptServerFields);
    } else if (v && typeof v === 'object') {
      out[k] = decryptServerFields(v);
    } else {
      out[k] = v;
    }
  }
  return out;
}

interface PersistedStateShape {
  servers: ServerData[];
}

interface StorageValueShape {
  state: PersistedStateShape;
  version?: number;
}

function createEncryptedStorage() {
  return {
    getItem: (name: string): StorageValueShape | null => {
      if (typeof localStorage === 'undefined') return null;
      const str = localStorage.getItem(name);
      if (!str) return null;
      try {
        const parsed: StorageValueShape = JSON.parse(str);
        if (parsed && typeof parsed === 'object' && 'state' in parsed) {
          parsed.state = decryptServerFields(parsed.state) as PersistedStateShape;
        }
        return parsed;
      } catch {
        return null;
      }
    },
    setItem: (name: string, value: StorageValueShape): void => {
      if (typeof localStorage === 'undefined') return;
      try {
        const toWrite: StorageValueShape =
          value && typeof value === 'object' && 'state' in value
            ? { ...value, state: encryptServerFields(value.state) as PersistedStateShape }
            : value;
        localStorage.setItem(name, JSON.stringify(toWrite));
      } catch {
        try { localStorage.setItem(name, JSON.stringify(value)); } catch {}
      }
    },
    removeItem: (name: string): void => {
      if (typeof localStorage === 'undefined') return;
      try { localStorage.removeItem(name); } catch {}
    },
  };
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

      // 内存中保持明文，storage 层自动加解密敏感字段（token/username/password）
      addServer: ({ name, address, token = '', username = '', password = '', interval }) =>
        set((state) => ({
          servers: [
            {
              id: genId(),
              name,
              address,
              token,
              username,
              password,
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
          servers: state.servers.map((s) => (s.id === id ? { ...s, ...updates } : s)),
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
      // storage 层自动加解密敏感字段：token/username/password
      // 内存 state 保持明文，便于直接读取/发送；磁盘上始终是混淆形式
      storage: createEncryptedStorage(),
      partialize: (state) => ({ servers: state.servers }),
      // onRehydrateStorage 不再改 state — storage 层已经处理完解密
      version: 2,
    }
  )
);

export default useServerStore;
