import { useCallback, useRef, useState } from 'react'
import { Upload, Image as ImageIcon, RefreshCw, Trash2 } from 'lucide-react'
import { useAppStore } from '../stores/useAppStore'

const API_BASE = import.meta.env.VITE_API_BASE || '/api'

export function UploadZone() {
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const {
    originalImage,
    isProcessing,
    error,
    setOriginalImage,
    setDepthResult,
    setIsProcessing,
    setError,
    reset,
  } = useAppStore()

  const handleFile = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('请上传 JPEG / PNG / WebP 图片')
      return
    }

    const reader = new FileReader()
    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string
      setOriginalImage(dataUrl)
      setIsProcessing(true)
      setError(null)

      try {
        const formData = new FormData()
        formData.append('file', file)

        const res = await fetch(`${API_BASE}/estimate-depth`, {
          method: 'POST',
          body: formData,
        })

        if (!res.ok) {
          const err = await res.json().catch(() => ({ detail: '请求失败' }))
          throw new Error(err.detail || `HTTP ${res.status}`)
        }

        const data = await res.json()

        // 解码 depth_data (base64 -> Float32Array)
        let depthData: Float32Array | undefined
        if (data.depth_data) {
          const binaryStr = atob(data.depth_data)
          const bytes = new Uint8Array(binaryStr.length)
          for (let i = 0; i < binaryStr.length; i++) {
            bytes[i] = binaryStr.charCodeAt(i)
          }
          depthData = new Float32Array(bytes.buffer)
        }

        setDepthResult({
          originalImage: data.original_image,
          depthImage: data.depth_image,
          depthData: depthData || new Float32Array(0),
          depthWidth: data.depth_width,
          depthHeight: data.depth_height,
          focalLengthPx: data.focal_length_px,
          depthMin: data.depth_min,
          depthMax: data.depth_max,
          processingTimeMs: data.processing_time_ms,
        })
      } catch (err) {
        const msg = err instanceof Error ? err.message : '深度估计失败'
        setError(msg)
        console.error('Depth estimation error:', err)
      } finally {
        setIsProcessing(false)
      }
    }
    reader.readAsDataURL(file)
  }, [setOriginalImage, setIsProcessing, setError, setDepthResult])

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) handleFile(file)
  }, [handleFile])

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    if (!isDragging) setIsDragging(true)
  }, [isDragging])

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const onInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
    if (inputRef.current) inputRef.current.value = ''
  }, [handleFile])

  // 已上传状态
  if (originalImage) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <div className="relative">
          <img
            src={originalImage}
            alt="已上传"
            className="max-w-full max-h-[50vh] object-contain rounded-xl shadow-2xl"
          />
          {isProcessing && (
            <div className="absolute inset-0 bg-black/70 rounded-xl flex flex-col items-center justify-center">
              <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mb-3" />
              <p className="text-white font-medium text-sm">正在分析空间深度...</p>
              <p className="text-white/50 text-xs mt-1">使用 Depth Pro 进行度量深度估计</p>
            </div>
          )}
          {error && (
            <div className="absolute bottom-3 left-3 right-3 bg-red-500/90 text-white px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}
        </div>

        {!isProcessing && (
          <div className="flex gap-2">
            <button
              onClick={() => inputRef.current?.click()}
              className="px-4 py-2.5 rounded-xl text-sm font-medium bg-white/10 text-white hover:bg-white/20 transition-all active:scale-95 flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              换一张图
            </button>
            <button
              onClick={reset}
              className="px-4 py-2.5 rounded-xl text-sm font-medium bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all active:scale-95 flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              清空
            </button>
          </div>
        )}

        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={onInputChange} />
      </div>
    )
  }

  // 上传入口
  return (
    <div className="w-full h-full min-h-[280px]">
      <label
        htmlFor="file-input"
        className={`
          w-full h-full min-h-[280px] flex flex-col items-center justify-center
          border-2 border-dashed rounded-2xl cursor-pointer select-none transition-all px-4
          ${isDragging
            ? 'border-cyan-400 bg-cyan-400/10 scale-[1.02]'
            : 'border-white/20 hover:border-cyan-400/60 bg-white/5 hover:bg-cyan-400/5'
          }
        `}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
      >
        <input id="file-input" ref={inputRef} type="file" accept="image/*" className="sr-only" onChange={onInputChange} />

        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10">
          {isDragging
            ? <ImageIcon className="w-9 h-9 text-cyan-400" />
            : <Upload className="w-9 h-9 text-white/70" />
          }
        </div>

        <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
          {isDragging ? '松开以上传' : '上传照片'}
        </h2>
        <p className="text-white/50 text-xs md:text-sm text-center">拖拽或点击选择图片</p>
        <p className="text-white/30 text-[10px] md:text-xs mt-3">支持 JPG · PNG · WebP · 最大 20MB</p>

        {error && (
          <div className="mt-4 bg-red-500/20 border border-red-500/30 text-red-200 px-4 py-2 rounded-lg text-sm">
                {error}
              </div>
        )}
      </label>
    </div>
  )
}
