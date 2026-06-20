/**
 * API 客户端 - 与后端通信
 */

const BASE = '/api'

async function fetchJSON(path: string, options: RequestInit = {}) {
  const res = await fetch(`${BASE}${path}`, options)
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: '请求失败' }))
    throw new Error(err.detail || `HTTP ${res.status}`)
  }
  return res.json()
}

// ── 公开接口 ───────────────────────────────────────────

export interface DepthResult {
  original_image: string   // base64 data URL
  depth_image: string      // base64 data URL
  width: number
  height: number
  processing_time_ms: number
}

export interface HealthStatus {
  status: string
  api_key_configured: boolean
  admin_configured: boolean
}

export const api = {
  health: () => fetchJSON('/health') as Promise<HealthStatus>,

  estimateDepth: (file: File): Promise<DepthResult> => {
    const form = new FormData()
    form.append('file', file)
    return fetchJSON('/estimate-depth', { method: 'POST', body: form })
  },

  // ── 管理接口 ───────────────────────────────────────────
  admin: {
    firstRun: () => fetchJSON('/admin/first-run') as Promise<{ needs_setup: boolean; api_key_configured: boolean }>,

    login: (password: string) =>
      fetchJSON('/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      }) as Promise<{ token: string; admin_configured: boolean }>,

    logout: (token: string) =>
      fetchJSON('/admin/logout', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      }),

    getStats: (token: string) =>
      fetchJSON('/admin/stats', {
        headers: { Authorization: `Bearer ${token}` },
      }),

    setApiKey: (token: string, apiKey: string) =>
      fetchJSON('/admin/settings/api-key', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ api_key: apiKey }),
      }),

    getSettingsStatus: (token: string) =>
      fetchJSON('/admin/settings/status', {
        headers: { Authorization: `Bearer ${token}` },
      }),

    resetStats: (token: string) =>
      fetchJSON('/admin/stats/reset', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      }),

    changePassword: (token: string, password: string) =>
      fetchJSON('/admin/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ password }),
      }),
  },
}
