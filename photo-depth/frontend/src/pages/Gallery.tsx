import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Images, Trash2, Download, X, Play } from 'lucide-react'
import { useAppStore } from '../stores/useAppStore'

export function Gallery() {
  const { history, removeFromHistory, clearHistory, setOriginalImage, setDepthResult, setViewMode } = useAppStore()
  const [preview, setPreview] = useState<string | null>(null)

  const onOpenItem = (id: string, original: string, depth: string) => {
    setOriginalImage(original)
    setDepthResult({ originalImage: original, depthImage: depth, processingTimeMs: 0, fileName: '', createdAt: Date.now() })
    setViewMode('spatial')
    window.scrollTo({ top: 0 })
    // 不跳转，用户只是想看 3D 视图
  }

  const onDownload = (dataUrl: string, name: string) => {
    const a = document.createElement('a')
    a.href = dataUrl
    a.download = name
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const visibleItems = history.filter((h) => h.originalImage && h.depthImage)

  return (
    <div className="h-screen flex flex-col">
      <header className="h-14 border-b border-[#22222c] bg-[#131318] flex items-center justify-between px-4 md:px-6 pl-12 md:pl-0">
        <div className="flex items-center gap-3">
          <Images className="w-4 h-4 text-[#00d4ff]" />
          <h1 className="text-[15px] font-medium text-[#e5e5ea]">历史作品</h1>
        </div>
        {visibleItems.length > 0 && (
          <button
            onClick={() => {
              if (confirm('清空所有历史记录？')) clearHistory()
            }}
            className="h-8 px-3 text-xs rounded-md bg-[#1f1f28] border border-[#2a2a36] text-[#9a9aa5] hover:text-[#e5e5ea] hover:bg-[#2a2a36] transition-colors flex items-center gap-1.5"
          >
            <Trash2 className="w-3.5 h-3.5" />清空
          </button>
        )}
      </header>

      <main className="flex-1 overflow-y-auto p-6 bg-[#0f0f14]">
        {visibleItems.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-xl bg-[#17171f] border border-[#22222c] flex items-center justify-center mb-4">
              <Images className="w-8 h-8 text-[#5a5a65]" />
            </div>
            <p className="text-sm text-[#9a9aa5] mb-1">还没有作品</p>
            <p className="text-xs text-[#5a5a65] mb-5">上传一张照片开始分析</p>
            <Link
              to="/"
              className="h-9 px-4 text-sm rounded-lg bg-[#00d4ff] text-[#0f0f14] font-medium hover:bg-[#33dfff] transition-colors"
            >
              去上传
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#131318] border border-[#22222c] rounded-lg overflow-hidden hover:border-[#3a3a46] transition-colors"
              >
                <div className="aspect-square relative overflow-hidden bg-[#0f0f14]">
                  <img
                    src={item.depthImage}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-100"
                  />
                  <img
                    src={item.originalImage}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* 悬浮操作 */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      onClick={() => onOpenItem(item.id, item.originalImage, item.depthImage)}
                      className="h-9 w-9 rounded-lg bg-[#00d4ff] text-[#0f0f14] flex items-center justify-center hover:bg-[#33dfff] transition-colors"
                      title="在工作台查看"
                    >
                      <Play className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setPreview(item.originalImage)}
                      className="h-9 w-9 rounded-lg bg-[#1f1f28] text-[#e5e5ea] flex items-center justify-center hover:bg-[#2a2a36] transition-colors"
                      title="查看原图"
                    >
                      <Images className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="p-3 border-t border-[#22222c]">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-[#9a9aa5] truncate">
                      {new Date(item.createdAt).toLocaleString()}
                    </span>
                    <button
                      onClick={() => removeFromHistory(item.id)}
                      className="text-[#5a5a65] hover:text-[#ff8080] transition-colors flex-shrink-0"
                      title="删除"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="flex gap-1.5 mt-2.5">
                    <button
                      onClick={() => onDownload(item.originalImage, `image-${item.id}.jpg`)}
                      className="flex-1 h-7 text-[11px] rounded bg-[#1f1f28] text-[#9a9aa5] hover:text-[#e5e5ea] hover:bg-[#2a2a36] transition-colors flex items-center justify-center gap-1"
                    >
                      <Download className="w-3 h-3" />原图
                    </button>
                    <button
                      onClick={() => onDownload(item.depthImage, `depth-${item.id}.png`)}
                      className="flex-1 h-7 text-[11px] rounded bg-[#1f1f28] text-[#9a9aa5] hover:text-[#e5e5ea] hover:bg-[#2a2a36] transition-colors flex items-center justify-center gap-1"
                    >
                      <Download className="w-3 h-3" />深度
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* 预览弹窗 */}
      {preview && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8"
          onClick={() => setPreview(null)}
        >
          <img
            src={preview}
            alt=""
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setPreview(null)}
            className="absolute top-4 right-4 h-9 w-9 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}
