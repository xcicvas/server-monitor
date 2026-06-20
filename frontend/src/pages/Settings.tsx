import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Settings as SettingsIcon, Key, Monitor, Palette, Keyboard, ArrowLeft, ChevronRight, Check } from 'lucide-react'

type Theme = 'dark' | 'system'
type ViewMode = 'spatial' | 'original' | 'depth'

export function Settings() {
  const [theme, setTheme] = useState<Theme>('dark')
  const [apiKey, setApiKey] = useState('')
  const [keySaved, setKeySaved] = useState(false)
  const [defaultView, setDefaultView] = useState<ViewMode>('spatial')

  const onSaveApiKey = () => {
    if (apiKey.trim()) {
      // 只保存在浏览器内存
      localStorage.setItem('user_api_key', apiKey.trim())
      setKeySaved(true)
      setTimeout(() => setKeySaved(false), 2000)
    }
  }

  // 页面初始化时从 localStorage 读取
  useState(() => {
    const savedKey = localStorage.getItem('user_api_key')
    if (savedKey) setApiKey(savedKey)
    return null
  })

  const sections = [
    {
      id: 'account',
      title: '账户',
      description: '管理您的登录信息',
      items: [
        {
          icon: Key,
          title: '管理员后台',
          description: '配置 Replicate API Key 和查看统计',
          action: (
            <Link
              to="/admin"
              className="h-8 px-3 text-xs rounded-lg bg-[#1f1f28] border border-[#2a2a36] text-[#e5e5ea] hover:bg-[#2a2a36] transition-colors flex items-center gap-1"
            >
              前往
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          ),
        },
      ],
    },
    {
      id: 'api',
      title: 'API 配置',
      description: '配置 Replicate API 调用参数',
      items: [
        {
          icon: Key,
          title: 'Replicate API Key',
          description: keySaved ? '已保存' : '用于调用深度分析模型',
          action: (
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="r8_..."
                className="h-8 w-56 px-3 rounded-lg bg-[#1f1f28] border border-[#2a2a36] text-xs text-[#e5e5ea] placeholder-[#5a5a65] focus:outline-none focus:border-[#00d4ff]/50"
              />
              <button
                onClick={onSaveApiKey}
                className={`h-8 px-3 text-xs rounded-lg transition-colors flex items-center gap-1 ${
                  keySaved
                    ? 'bg-[#2a3a2a] border border-[#3a5a3a] text-[#80ff80]'
                    : 'bg-[#00d4ff] text-[#0f0f14] hover:bg-[#33dfff]'
                }`}
              >
                {keySaved ? <><Check className="w-3 h-3" />已保存</> : '保存'}
              </button>
            </div>
          ),
        },
      ],
    },
    {
      id: 'appearance',
      title: '外观',
      description: '控制界面显示方式',
      items: [
        {
          icon: Palette,
          title: '主题',
          description: '选择深色或跟随系统',
          action: (
            <div className="flex bg-[#1f1f28] border border-[#2a2a36] rounded-lg p-0.5">
              {(['dark', 'system'] as Theme[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`h-7 px-3 text-xs rounded-md transition-colors ${
                    theme === t
                      ? 'bg-[#00d4ff] text-[#0f0f14] font-medium'
                      : 'text-[#9a9aa5] hover:text-[#e5e5ea]'
                  }`}
                >
                  {t === 'dark' ? '深色' : '跟随系统'}
                </button>
              ))}
            </div>
          ),
        },
        {
          icon: Monitor,
          title: '默认视图模式',
          description: '生成结果后默认显示的视图',
          action: (
            <div className="flex bg-[#1f1f28] border border-[#2a2a36] rounded-lg p-0.5">
              {(['spatial', 'original', 'depth'] as ViewMode[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setDefaultView(v)}
                  className={`h-7 px-3 text-xs rounded-md transition-colors ${
                    defaultView === v
                      ? 'bg-[#00d4ff] text-[#0f0f14] font-medium'
                      : 'text-[#9a9aa5] hover:text-[#e5e5ea]'
                  }`}
                >
                  {v === 'spatial' ? '3D 视差' : v === 'original' ? '原图' : '深度图'}
                </button>
              ))}
            </div>
          ),
        },
      ],
    },
    {
      id: 'shortcuts',
      title: '快捷键',
      description: '使用键盘提高效率',
      items: [
        {
          icon: Keyboard,
          title: '可用快捷键',
          description: (
            <div className="flex flex-wrap gap-4 mt-2 text-xs text-[#737373]">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-[#1f1f28] border border-[#2a2a36] rounded text-[11px] text-[#9a9aa5] font-mono">U</kbd>
                上传新图片
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-[#1f1f28] border border-[#2a2a36] rounded text-[11px] text-[#9a9aa5] font-mono">L</kbd>
                锁定/解锁视差
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-[#1f1f28] border border-[#2a2a36] rounded text-[11px] text-[#9a9aa5] font-mono">R</kbd>
                重置参数
              </span>
            </div>
          ) as unknown as string,
          action: null,
        },
      ],
    },
  ]

  return (
    <div className="h-screen flex flex-col">
      <header className="h-14 border-b border-[#22222c] bg-[#131318] flex items-center justify-between px-4 md:px-6 pl-12 md:pl-0">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-[#9a9aa5] hover:text-[#e5e5ea] transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <SettingsIcon className="w-4 h-4 text-[#00d4ff]" />
          <h1 className="text-[15px] font-medium text-[#e5e5ea]">偏好设置</h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-6 bg-[#0f0f14]">
        <div className="max-w-3xl mx-auto space-y-8">
          {sections.map((section) => (
            <div key={section.id}>
              <div className="mb-3">
                <h2 className="text-sm font-medium text-[#e5e5ea]">{section.title}</h2>
                <p className="text-xs text-[#737373] mt-0.5">{section.description}</p>
              </div>

              <div className="bg-[#131318] border border-[#22222c] rounded-xl divide-y divide-[#22222c]">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between px-5 py-4 gap-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-[#1f1f28] border border-[#2a2a36] flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-[#9a9aa5]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-[#e5e5ea]">{item.title}</p>
                        <p className="text-xs text-[#737373] mt-0.5">{item.description}</p>
                      </div>
                    </div>
                    {item.action}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* 关于 */}
          <div className="pt-4 border-t border-[#22222c]">
            <p className="text-xs text-[#5a5a65]">
              Spatial Studio · 基于 Replicate API 和 Three.js 构建
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
