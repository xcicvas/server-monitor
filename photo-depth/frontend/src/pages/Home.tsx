import { useRef } from 'react'
import { Upload } from 'lucide-react'
import { UploadZone } from '../components/UploadZone'
import { SpatialScene } from '../components/SpatialScene'
import { ControlPanel } from '../components/ControlPanel'
import { useAppStore } from '../stores/useAppStore'

export function Home() {
  const { originalImage, depthResult, viewMode } = useAppStore()
  const inputRef = useRef<HTMLInputElement>(null)
  const inSpatialMode = viewMode === 'spatial' && originalImage && depthResult

  const onTriggerUpload = () => inputRef.current?.click()

  return (
    <div className="h-screen flex flex-col">
      {/* 顶栏 */}
      <header className="h-14 border-b border-[#22222c] bg-[#131318] flex items-center px-4 md:px-6 pl-12 md:pl-6 flex-shrink-0">
        <div className="flex items-baseline gap-3">
          <h1 className="text-[15px] font-medium text-[#e5e5ea]">
            {originalImage && depthResult ? '结果预览' : '深度工作台'}
          </h1>
          <span className="text-xs text-[#737373] hidden md:block">
            {originalImage && depthResult ? '拖动鼠标查看视差效果' : '上传照片开始分析'}
          </span>
        </div>
      </header>

      {/* 主内容 */}
      <main className="flex-1 min-h-0 relative overflow-hidden bg-[#0f0f14]">
        {/* 3D 视差场景 - 当有深度数据且在 3D 模式 */}
        {inSpatialMode && (
          <div className="absolute inset-0">
            <SpatialScene />
          </div>
        )}

        {/* 上传 / 处理中区域 */}
        {!inSpatialMode && (
          <div className="h-full flex items-center justify-center p-6">
            <div className="w-full max-w-3xl">
              <UploadZone onUploadClick={onTriggerUpload} />
            </div>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                  // 触发 UploadZone 的处理机制 - 通过自定义事件
                  window.dispatchEvent(new CustomEvent('spatial:file', { detail: file }))
                }
                if (inputRef.current) inputRef.current.value = ''
              }}
            />
          </div>
        )}
      </main>

      {/* 底栏控制面板 - 仅在 3D 模式显示 */}
      {inSpatialMode && (
        <div className="border-t border-[#22222c] bg-[#131318] px-6 py-4">
          <ControlPanel />
        </div>
      )}

      {/* 底部状态信息 - 仅在有结果且非 3D 模式时显示 */}
      {depthResult && !inSpatialMode && (
        <div className="border-t border-[#22222c] bg-[#131318] px-6 py-2.5 flex items-center justify-between text-xs text-[#737373]">
          <span>处理耗时: {depthResult.processingTimeMs}ms</span>
          <span>切换到 3D 视差模式查看效果</span>
        </div>
      )}
    </div>
  )
}
