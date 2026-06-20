import { create } from 'zustand'

export interface DepthData {
  originalImage: string
  depthImage: string
  processingTimeMs: number
  fileName: string
  createdAt: number
}

export interface HistoryItem {
  id: string
  originalImage: string
  depthImage: string
  fileName: string
  processingTimeMs: number
  createdAt: number
}

interface AppState {
  // 当前会话
  originalImage: string | null
  depthResult: DepthData | null
  isProcessing: boolean
  error: string | null

  // 视差参数
  parallaxStrength: number
  parallaxOffset: number   // 位移幅度
  focusPoint: number       // 焦点 (0 = 无限远, 1 = 前景)
  isLocked: boolean
  viewMode: 'spatial' | 'original' | 'depth'

  // 历史记录
  history: HistoryItem[]
  sidebarCollapsed: boolean

  // 操作
  setOriginalImage: (img: string | null) => void
  setDepthResult: (r: DepthData | null) => void
  setIsProcessing: (v: boolean) => void
  setError: (e: string | null) => void
  setParallaxStrength: (v: number) => void
  setParallaxOffset: (v: number) => void
  setFocusPoint: (v: number) => void
  toggleLock: () => void
  setViewMode: (m: 'spatial' | 'original' | 'depth') => void
  reset: () => void
  addToHistory: (item: HistoryItem) => void
  removeFromHistory: (id: string) => void
  clearHistory: () => void
  toggleSidebar: () => void
  setSidebarCollapsed: (v: boolean) => void
}

const HISTORY_KEY = 'spatial_history'

function loadHistory(): HistoryItem[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY)
    if (!raw) return []
    const data = JSON.parse(raw)
    if (Array.isArray(data)) return data.slice(0, 20)
    return []
  } catch {
    return []
  }
}

function saveHistory(h: HistoryItem[]) {
  try {
    // 保存最近 20 条，但不保存原图和深度图数据到 localStorage (太大)
    const meta = h.map(({ id, fileName, processingTimeMs, createdAt }) => ({
      id, fileName, processingTimeMs, createdAt, originalImage: '', depthImage: ''
    }))
    localStorage.setItem(HISTORY_KEY, JSON.stringify(meta))
  } catch {}
}

export const useAppStore = create<AppState>((set, get) => ({
  // 初始状态
  originalImage: null,
  depthResult: null,
  isProcessing: false,
  error: null,
  parallaxStrength: 1.0,
  parallaxOffset: 0.12,
  focusPoint: 0.5,
  isLocked: false,
  viewMode: 'spatial',
  history: loadHistory(),
  sidebarCollapsed: false,

  setOriginalImage: (img) => set({ originalImage: img }),
  setDepthResult: (r) => set({ depthResult: r }),
  setIsProcessing: (v) => set({ isProcessing: v }),
  setError: (e) => set({ error: e }),
  setParallaxStrength: (v) => set({ parallaxStrength: v }),
  setParallaxOffset: (v) => set({ parallaxOffset: v }),
  setFocusPoint: (v) => set({ focusPoint: v }),
  toggleLock: () => set((s) => ({ isLocked: !s.isLocked })),
  setViewMode: (m) => set({ viewMode: m }),
  reset: () => set({
    originalImage: null,
    depthResult: null,
    isProcessing: false,
    error: null,
    parallaxStrength: 1.0,
    parallaxOffset: 0.12,
    focusPoint: 0.5,
    isLocked: false,
    viewMode: 'spatial',
  }),
  addToHistory: (item) => {
    const next = [item, ...get().history].slice(0, 20)
    set({ history: next })
    saveHistory(next)
  },
  removeFromHistory: (id) => {
    const next = get().history.filter(h => h.id !== id)
    set({ history: next })
    saveHistory(next)
  },
  clearHistory: () => {
    set({ history: [] })
    saveHistory([])
  },
  toggleSidebar: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
  setSidebarCollapsed: (v) => set({ sidebarCollapsed: v }),
}))
