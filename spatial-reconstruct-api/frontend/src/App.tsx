import { useAppStore } from './stores/useAppStore'
import { UploadZone } from './components/UploadZone'
import { SpatialScene } from './components/SpatialScene'
import { ControlPanel } from './components/ControlPanel'

export default function App() {
  const originalImage = useAppStore((s) => s.originalImage)
  const depthResult = useAppStore((s) => s.depthResult)
  const isProcessing = useAppStore((s) => s.isProcessing)

  const showScene = originalImage && depthResult && !isProcessing

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-[#0a0a0f] text-white select-none">
      {/* 背景 */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0a2e] to-[#0a0a0f] opacity-80" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[40vmin] h-[40vmin] bg-cyan-500/10 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[40vmin] h-[40vmin] bg-purple-500/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* 主内容 */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Header */}
        <header className="px-4 py-3 md:px-6 md:py-4 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
              <span className="text-black font-bold text-sm md:text-base">S</span>
            </div>
            <div>
              <h1 className="text-white font-semibold text-base md:text-lg leading-tight">Spatial Reconstruct</h1>
              <p className="text-white/40 text-[10px] md:text-xs">
                {showScene ? 'Depth Pro 3D视差模式' : 'Apple Depth Pro · 空间深度重构'}
              </p>
            </div>
            {showScene && depthResult && (
              <div className="ml-auto text-right">
                <div className="text-[10px] text-white/30">处理耗时</div>
                <div className="text-xs text-cyan-400 font-mono">{depthResult.processingTimeMs}ms</div>
              </div>
            )}
          </div>
        </header>

        {/* 上传 / 场景区域 */}
        <main className="flex-1 px-3 md:px-6 pb-40 flex flex-col items-center min-h-0 overflow-auto">
          {!showScene && (
            <div className="text-center mb-4 md:mb-8 max-w-2xl">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  把照片变成立体空间
                </span>
              </h2>
              <p className="text-white/50 text-xs md:text-sm">
                基于 Apple Depth Pro 度量深度估计 · Three.js 实时3D视差渲染
              </p>
            </div>
          )}

          <div className="w-full max-w-3xl flex-1 min-h-0 flex items-center justify-center">
            <div className="w-full max-h-full">
              <UploadZone />
            </div>
          </div>

          {!showScene && (
            <div className="mt-6 text-center text-white/20 text-xs hidden md:block">
              上传图片后，将由 Depth Pro 模型分析空间深度，生成可交互的3D视差空间
            </div>
          )}
        </main>
      </div>

      {/* 3D 场景（覆盖在主页面上） */}
      {showScene && (
        <div className="absolute inset-0 z-20">
          <SpatialScene />
          <ControlPanel />
        </div>
      )}
    </div>
  )
}
