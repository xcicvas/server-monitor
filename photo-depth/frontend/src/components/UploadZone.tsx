import { useCallback, useRef, useState, useEffect } from 'react'
import { Upload, Image as ImageIcon, X, Download, Copy } from 'lucide-react'
import { useAppStore } from '../stores/useAppStore'
import { api } from '../lib/api'

export function UploadZone({ onUploadClick }: { onUploadClick?: () => void }) {
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const {
    originalImage, depthResult, isProcessing, error,
    setOriginalImage, setDepthResult, setIsProcessing, setError,
    addToHistory, reset,
  } = useAppStore()

  // 支持从外部触发上传
  useEffect(() => {
    const onExternalFile = (e: Event) => {
      const file = (e as CustomEvent).detail as File
      if (file) handleFile(file)
    }
    window.addEventListener('spatial:file', onExternalFile)
    return () => window.removeEventListener('spatial:file', onExternalFile)
  }, [])

  const handleFile = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('请上传 JPEG / PNG / WebP 图片')
      return
    }
    if (file.size > 20 * 1024 * 1024) {
      setError('文件过大（最大 20MB）')
      return
    }

    const reader = new FileReader()
    reader.onload = async (e) => {
      const dataUrl = e.target.result as string
      setOriginalImage(dataUrl)
      setIsProcessing(true)
      setError(null)

      try {
        const data = await api.estimateDepth(file)
        const depthData = {
          originalImage: data.original_image,
          depthImage: data.depth_image,
          processingTimeMs: data.processing_time_ms,
          fileName: file.name,
          createdAt: Date.now(),
        }
        setDepthResult(depthData)

        // 加入历史
        addToHistory({
          id: String(Date.now()),
          ...depthData,
        })
      } catch (err) {
        setError(err instanceof Error ? err.message : '深度估计失败，请稍后重试')
      } finally {
        setIsProcessing(false)
      }
    }
    reader.readAsDataURL(file)
  }, [setOriginalImage, setIsProcessing, setError, setDepthResult, addToHistory])

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    const f = e.dataTransfer.files?.[0]
    if (f) handleFile(f)
  }

  const triggerInput = () => {
    if (onUploadClick) {
      onUploadClick()
      return
    }
    inputRef.current?.click()
  }

  const handleDownloadDepth = () => {
    if (!depthResult?.depthImage) return
    const a = document.createElement('a')
    a.href = depthResult.depthImage
    a.download = `depth-${Date.now()}.png`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const handleDownloadOriginal = () => {
    if (!originalImage) return
    const a = document.createElement('a')
    a.href = originalImage
    a.download = `original-${Date.now()}.jpg`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const handleCopyDepth = async () => {
    if (!depthResult?.depthImage) return
    try {
      // 转换为 Blob 再复制
      const res = await fetch(depthResult.depthImage)
      const blob = await res.blob()
      await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })])
      setError(null)
    } catch {}
  }

  // 已上传状态 - 显示结果卡片
  if (originalImage) {
    return (
      <div className="space-y-5">
        {/* 主卡片 - 结果展示 */}
        <div className="bg-[#17171f] border border-[#22222c] rounded-xl overflow-hidden">
          <div className="relative flex items-center justify-center p-4 md:p-8 min-h-[200px] md:min-h-[360px]">
            <img
              src={originalImage}
              alt=""
              className="max-w-full max-h-[420px] rounded-lg"
              style={{ imageRendering: 'auto' }}
            />

            {/* 处理中遮罩 */}
            {isProcessing && (
              <div className="absolute inset-0 bg-[#0f0f14]/80 backdrop-blur-sm flex flex-col items-center justify-center">
                <div className="w-10 h-10 border-2 border-[#00d4ff] border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-sm text-[#e5e5ea]">正在分析空间深度...</p>
                <p className="text-xs text-[#737373] mt-1">调用 Replicate API · MiDaS 模型</p>
              </div>
            )}

            {/* 错误遮罩 */}
            {error && !isProcessing && (
              <div className="absolute bottom-4 left-4 right-4 bg-[#2a1a1a] border border-[#4a2a2a] rounded-lg px-4 py-2.5">
                <p className="text-sm text-[#ff8080]">{error}</p>
              </div>
            )}
          </div>

          {/* 深度图预览小图 */}
          {depthResult && !isProcessing && (
            <div className="border-t border-[#22222c] px-5 py-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-[#9a9aa5]">深度图</span>
                <span className="text-[11px] text-[#737373]">{depthResult.processingTimeMs}ms</span>
              </div>
              <div className="flex items-start gap-4">
                <img
                  src={depthResult.depthImage}
                  alt="depth"
                  className="w-24 h-24 rounded-lg object-cover border border-[#22222c]"
                />
                <div className="flex-1 space-y-2">
                  <div className="text-xs text-[#9a9aa5] leading-relaxed">
                    照片的深度信息已生成。切换到 3D 视差模式查看空间效果。
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <button
                      onClick={handleDownloadDepth}
                      className="h-8 px-3 text-xs rounded-md bg-[#1f1f28] border border-[#2a2a36] text-[#e5e5ea] hover:bg-[#2a2a36] transition-colors flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />下载深度图
                    </button>
                    <button
                      onClick={handleDownloadOriginal}
                      className="h-8 px-3 text-xs rounded-md bg-[#1f1f28] border border-[#2a2a36] text-[#e5e5ea] hover:bg-[#2a2a36] transition-colors flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />下载原图
                    </button>
                    <button
                      onClick={handleCopyDepth}
                      className="h-8 px-3 text-xs rounded-md bg-[#1f1f28] border border-[#2a2a36] text-[#e5e5ea] hover:bg-[#2a2a36] transition-colors flex items-center gap-1.5"
                    >
                      <Copy className="w-3.5 h-3.5" />复制深度图
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 操作按钮 */}
        <div className="flex items-center gap-2">
          <button
            onClick={triggerInput}
            className="h-10 px-4 text-sm rounded-lg bg-[#00d4ff] text-[#0f0f14] font-medium hover:bg-[#33dfff] transition-colors flex items-center gap-2"
          >
            <ImageIcon className="w-4 h-4" />换一张图片
          </button>
          <button
            onClick={reset}
            className="h-10 px-4 text-sm rounded-lg bg-[#1f1f28] border border-[#2a2a36] text-[#9a9aa5] hover:bg-[#2a2a36] hover:text-[#e5e5ea] transition-colors flex items-center gap-2"
          >
            <X className="w-4 h-4" />清空
          </button>
        </div>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0]
            if (f) handleFile(f)
            if (inputRef.current) inputRef.current.value = ''
          }}
        />
      </div>
    )
  }

  // 空状态 - 上传入口
  return (
    <div className="space-y-5">
      <div
        className={`relative min-h-[260px] md:min-h-[380px] h-auto rounded-xl border-2 border-dashed transition-all ${
          dragging
            ? 'border-[#00d4ff] bg-[#00d4ff]/5'
            : 'border-[#2a2a36] bg-[#131318] hover:border-[#3a3a46] hover:bg-[#17171f]'
        }`}
        onDrop={onDrop}
        onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={(e) => {
            const f = e.target.files?.[0]
            if (f) handleFile(f)
            if (inputRef.current) inputRef.current.value = ''
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 pointer-events-none">
          <div className="w-14 h-14 rounded-xl bg-[#1f1f28] border border-[#2a2a36] flex items-center justify-center mb-4">
            {dragging ? (
              <ImageIcon className="w-7 h-7 text-[#00d4ff]" />
            ) : (
              <Upload className="w-7 h-7 text-[#9a9aa5]" />
            )}
          </div>
          <p className="text-base font-medium text-[#e5e5ea] mb-1.5">
            {dragging ? '松开以上传图片' : '上传照片'}
          </p>
          <p className="text-sm text-[#737373] mb-1">拖拽图片到此处，或点击选择文件</p>
          <p className="text-xs text-[#5a5a65]">JPG · PNG · WebP · 最大 20MB</p>

          {error && (
            <div className="mt-4 bg-[#2a1a1a] border border-[#4a2a2a] text-[#ff8080] px-4 py-2 rounded-md text-sm">
              {error}
            </div>
          )}
        </div>
      </div>

      {/* 快速提示 */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { title: '空间分析', desc: '基于 MiDaS 模型自动生成深度图' },
          { title: '3D 视差', desc: '拖动鼠标查看真实空间效果' },
          { title: '参数可调', desc: '自由控制深度和位移强度' },
        ].map((item) => (
          <div key={item.title} className="bg-[#131318] border border-[#22222c] rounded-lg p-3">
            <p className="text-xs font-medium text-[#e5e5ea] mb-0.5">{item.title}</p>
            <p className="text-[11px] text-[#737373] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
