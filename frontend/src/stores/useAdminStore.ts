import { create } from 'zustand'

interface AdminStats {
  total: number
  success: number
  errors: number
  today: number
  avg_ms: number
  last_call_at: string | null
  recent_logs: Array<{ at: string; success: boolean; ms: number }>
}

interface AdminState {
  token: string | null
  isFirstRun: boolean
  apiKeyConfigured: boolean
  stats: AdminStats | null
  error: string | null

  setToken: (t: string | null) => void
  setFirstRun: (v: boolean) => void
  setApiKeyConfigured: (v: boolean) => void
  setStats: (s: AdminStats | null) => void
  setError: (e: string | null) => void
  logout: () => void
}

export const useAdminStore = create<AdminState>((set) => ({
  token: localStorage.getItem('admin_token'),
  isFirstRun: false,
  apiKeyConfigured: false,
  stats: null,
  error: null,

  setToken: (t) => {
    if (t) localStorage.setItem('admin_token', t)
    else localStorage.removeItem('admin_token')
    set({ token: t })
  },
  setFirstRun: (v) => set({ isFirstRun: v }),
  setApiKeyConfigured: (v) => set({ apiKeyConfigured: v }),
  setStats: (s) => set({ stats: s }),
  setError: (e) => set({ error: e }),
  logout: () => {
    localStorage.removeItem('admin_token')
    set({ token: null, stats: null })
  },
}))
