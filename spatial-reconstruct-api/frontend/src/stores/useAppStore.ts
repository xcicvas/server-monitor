import { create } from 'zustand'

export interface DepthResult {
  originalImage: string
  depthImage: string
  depthData: Float32Array
  depthWidth: number
  depthHeight: number
  focalLengthPx: number | null
  depthMin: number
  depthMax: number
  processingTimeMs: number
}

interface AppState {
  // 上传状态
  originalImage: string | null
  depthResult: DepthResult | null
  isProcessing: boolean
  error: string | null

  // 3D 交互状态
  parallaxStrength: number
  isLocked: boolean

  // 视图模式
  viewMode: 'spatial' | 'original' | 'depth'

  // Actions
  setOriginalImage: (img: string | null) => void
  setDepthResult: (result: DepthResult | null) => void
  setIsProcessing: (v: boolean) => void
  setError: (e: string | null) => void
  setParallaxStrength: (v: number) => void
  toggleLock: () => void
  setViewMode: (mode: 'spatial' | 'original' | 'depth') => void
  reset: () => void
}

export const useAppStore = create<AppState>((set) => ({
  originalImage: null,
  depthResult: null,
  isProcessing: false,
  error: null,
  parallaxStrength: 1.0,
  isLocked: false,
  viewMode: 'spatial',

  setOriginalImage: (img) => set({ originalImage: img }),
  setDepthResult: (result) => set({ depthResult: result }),
  setIsProcessing: (v) => set({ isProcessing: v }),
  setError: (e) => set({ error: e }),
  setParallaxStrength: (v) => set({ parallaxStrength: v }),
  toggleLock: () => set((s) => ({ isLocked: !s.isLocked })),
  setViewMode: (mode) => set({ viewMode: mode }),
  reset: () => set({
    originalImage: null,
    depthResult: null,
    isProcessing: false,
    error: null,
    parallaxStrength: 1.0,
    isLocked: false,
    viewMode: 'spatial',
  }),
}))
