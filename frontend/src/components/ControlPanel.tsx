import { Image, Layers, Sparkles, Lock, Unlock, RotateCcw } from 'lucide-react'
import { useAppStore } from '../stores/useAppStore'

const MODES = [
  { id: 'spatial' as const, label: '3D 视差', icon: Layers },
  { id: 'original' as const, label: '原图', icon: Image },
  { id: 'depth' as const, label: '深度图', icon: Sparkles },
]

function Slider({
  label, value, min, max, step, onChange, format,
}: {
  label: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; format?: (v: number) => string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-[#9a9aa5] whitespace-nowrap w-16">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="flex-1 h-1.5 bg-[#22222c] rounded-full appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#00d4ff]
          [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(0,212,255,0.15)]
          hover:[&::-webkit-slider-thumb]:shadow-[0_0_0_6px_rgba(0,212,255,0.2)]
          transition-shadow"
      />
      <span className="text-xs text-[#737373] w-10 text-right tabular-nums">
        {format ? format(value) : value.toFixed(2)}
      </span>
    </div>
  )
}

export function ControlPanel() {
  const {
    parallaxStrength, setParallaxStrength,
    parallaxOffset, setParallaxOffset,
    viewMode, setViewMode,
    isLocked, toggleLock, reset,
  } = useAppStore()

  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
      {/* 模式切换 */}
      <div className="flex items-center bg-[#17171f] border border-[#22222c] rounded-lg p-1">
        {MODES.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setViewMode(id)}
            className={`flex items-center gap-1.5 h-8 px-3 text-xs rounded-md transition-colors ${
              viewMode === id
                ? 'bg-[#00d4ff] text-[#0f0f14] font-medium'
                : 'text-[#9a9aa5] hover:text-[#e5e5ea]'
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
      </div>

      {/* 参数区 */}
      {viewMode === 'spatial' && (
        <div className="flex-1 bg-[#17171f] border border-[#22222c] rounded-lg px-4 py-3 space-y-2 min-w-0">
          <Slider
            label="视差强度"
            value={parallaxStrength}
            min={0}
            max={3}
            step={0.05}
            onChange={setParallaxStrength}
            format={(v) => v.toFixed(1) + 'x'}
          />
          <Slider
            label="位移幅度"
            value={parallaxOffset}
            min={0.02}
            max={0.3}
            step={0.01}
            onChange={setParallaxOffset}
            format={(v) => (v * 100).toFixed(0) + '%'}
          />
        </div>
      )}

      {/* 操作按钮 */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleLock}
          className={`h-10 px-4 text-xs rounded-lg border transition-colors flex items-center gap-2 ${
            isLocked
              ? 'bg-[#00d4ff]/10 border-[#00d4ff]/30 text-[#00d4ff]'
              : 'bg-[#1f1f28] border-[#2a2a36] text-[#9a9aa5] hover:text-[#e5e5ea]'
          }`}
        >
          {isLocked ? (
            <><Lock className="w-3.5 h-3.5" />已锁定</>
          ) : (
            <><Unlock className="w-3.5 h-3.5" />锁定</>
          )}
        </button>
        <button
          onClick={() => {
            setParallaxStrength(1.0)
            setParallaxOffset(0.12)
          }}
          className="h-10 px-4 text-xs rounded-lg bg-[#1f1f28] border border-[#2a2a36] text-[#9a9aa5] hover:text-[#e5e5ea] transition-colors flex items-center gap-2"
        >
          <RotateCcw className="w-3.5 h-3.5" />重置参数
        </button>
        <button
          onClick={reset}
          className="h-10 px-4 text-xs rounded-lg bg-[#1f1f28] border border-[#2a2a36] text-[#9a9aa5] hover:text-[#e5e5ea] transition-colors flex items-center gap-2"
        >
          换张图
        </button>
      </div>
    </div>
  )
}
