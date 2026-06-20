import { ImageIcon, Grid3X3, Sparkles, Lock, Unlock, RotateCcw } from 'lucide-react'
import { useAppStore } from '../stores/useAppStore'

const MODES = [
  { id: 'spatial' as const, label: '3D视差', icon: Grid3X3 },
  { id: 'original' as const, label: '原图', icon: ImageIcon },
  { id: 'depth' as const, label: '深度图', icon: Sparkles },
]

export function ControlPanel() {
  const {
    parallaxStrength,
    setParallaxStrength,
    viewMode,
    setViewMode,
    isLocked,
    toggleLock,
    reset,
  } = useAppStore()

  return (
    <div className="absolute bottom-4 left-3 right-3 md:left-6 md:right-6
                    bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 md:p-4">
      {/* 模式切换 */}
      <div className="flex gap-1 mb-3">
        {MODES.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setViewMode(id)}
            className={`
              flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-medium
              transition-all active:scale-95
              ${viewMode === id
                ? 'bg-gradient-to-br from-cyan-400/30 to-purple-400/30 text-white border border-cyan-400/40'
                : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }
            `}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* 强度滑块（仅3D模式） */}
      {viewMode === 'spatial' && (
        <div className="flex items-center gap-3 mb-3">
          <span className="text-white/60 text-xs whitespace-nowrap">深度</span>
          <input
            type="range" min="0" max="2" step="0.05"
            value={parallaxStrength}
            onChange={(e) => setParallaxStrength(parseFloat(e.target.value))}
            className="flex-1 h-2 bg-white/10 rounded-full appearance-none cursor-pointer
                       [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4
                       [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full
                       [&::-webkit-slider-thumb]:bg-cyan-400
                       [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(0,212,255,0.5)]"
          />
          <span className="text-white/40 text-xs w-8 text-right">{parallaxStrength.toFixed(1)}</span>
        </div>
      )}

      {/* 操作按钮 */}
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={toggleLock}
          className={`
            py-2.5 rounded-xl text-xs font-medium transition-all active:scale-95
            ${isLocked
              ? 'bg-cyan-400/20 text-cyan-200 border border-cyan-400/30'
              : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
            }
          `}
        >
          {isLocked ? <><Lock className="w-4 h-4 inline mr-1" />已锁定</> : <><Unlock className="w-4 h-4 inline mr-1" />锁定</>}
        </button>

        <button
          onClick={() => {
            // 重置视角逻辑通过 App 外层处理
            window.dispatchEvent(new CustomEvent('spatial:reset-view'))
          }}
          className="py-2.5 rounded-xl text-xs font-medium bg-white/5 text-white/60
                     hover:bg-white/10 hover:text-white transition-all active:scale-95"
        >
          <RotateCcw className="w-4 h-4 inline mr-1" />重置
        </button>

        <button
          onClick={reset}
          className="py-2.5 rounded-xl text-xs font-medium bg-red-500/10 text-red-200/70
                     hover:bg-red-500/20 hover:text-red-100 transition-all active:scale-95"
        >
          换张图
        </button>
      </div>
    </div>
  )
}
