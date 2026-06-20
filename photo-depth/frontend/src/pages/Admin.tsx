import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Key, BarChart3, Shield, Eye, EyeOff, Check, X, RefreshCw, Trash2, Image as ImageIcon } from 'lucide-react'
import { useAdminStore } from '../stores/useAdminStore'
import { api } from '../lib/api'

export function Admin() {
  const navigate = useNavigate()
  const { token, setToken, logout } = useAdminStore()

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [needsSetup, setNeedsSetup] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  // 已登录状态数据
  const [stats, setStats] = useState<{ total?: number; success?: number; errors?: number; today?: number; recent_logs?: any[] } | null>(null)
  const [apiKey, setApiKey] = useState('')
  const [showApiKey, setShowApiKey] = useState(false)
  const [savingKey, setSavingKey] = useState(false)
  const [keyMsg, setKeyMsg] = useState<string | null>(null)
  const [newPassword, setNewPassword] = useState('')
  const [pwMsg, setPwMsg] = useState<string | null>(null)

  // 检查首次设置状态
  useEffect(() => {
    checkFirstRun()
  }, [])

  const checkFirstRun = async () => {
    try {
      const res = await api.admin.firstRun()
      setNeedsSetup(res.needs_setup)
    } catch (e) {
      setError('无法连接服务器，请确认后端服务已启动')
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!password) return
    setLoading(true)
    setError(null)
    try {
      if (needsSetup && password !== confirmPassword) {
        setError('两次密码不一致')
        return
      }
      const res = await api.admin.login(password)
      setToken(res.token)
    } catch (err) {
      setError(err instanceof Error ? err.message : '登录失败')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try { await api.admin.logout(token!) } catch {}
    logout()
    navigate('/')
  }

  // 加载统计
  useEffect(() => {
    if (token) loadStats()
  }, [token])

  const loadStats = async () => {
    try {
      const data = await api.admin.getStats(token!)
      setStats(data)
    } catch {}
  }

  const handleSetApiKey = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!apiKey.trim()) return
    setSavingKey(true)
    setKeyMsg(null)
    try {
      await api.admin.setApiKey(token!, apiKey.trim())
      setKeyMsg('已保存')
      setTimeout(() => setKeyMsg(null), 2000)
    } catch (err) {
      setKeyMsg(err instanceof Error ? err.message : '保存失败')
    } finally {
      setSavingKey(false)
    }
  }

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPassword) return
    setPwMsg(null)
    try {
      await api.admin.changePassword(token!, newPassword)
      setPwMsg('密码修改成功')
      setTimeout(() => setPwMsg(null), 2000)
      setNewPassword('')
    } catch (err) {
      setPwMsg(err instanceof Error ? err.message : '修改失败')
    }
  }

  const handleResetStats = async () => {
    if (!confirm('确定重置所有统计数据？')) return
    try {
      await api.admin.resetStats(token!)
      setStats(null)
      loadStats()
    } catch {}
  }

  // 登录 / 首次设置页面
  if (!token) {
    return (
      <div className="min-h-screen bg-[#0f0f14] flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="flex justify-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
          </div>

          <h1 className="text-xl font-semibold text-[#e5e5ea] text-center mb-1.5">
            {needsSetup ? '创建管理员账户' : '管理后台'}
          </h1>
          <p className="text-sm text-[#737373] text-center mb-8">
            {needsSetup ? '设置一个密码开始使用' : '输入密码登录'}
          </p>

          <form onSubmit={handleLogin} className="space-y-3">
            <div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={needsSetup ? '设置密码' : '输入密码'}
                className="w-full h-11 px-4 pr-12 rounded-lg bg-[#131318] border border-[#22222c] text-sm text-[#e5e5ea] placeholder-[#5a5a65] focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute -mt-9.5 right-4 text-[#737373] hover:text-[#e5e5ea] relative float-right -mt-9 mr-3"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {needsSetup && (
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="确认密码"
                className="w-full h-11 px-4 rounded-lg bg-[#131318] border border-[#22222c] text-sm text-[#e5e5ea] placeholder-[#5a5a65] focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
              />
            )}

            {error && (
              <div className="bg-[#2a1a1a] border border-[#4a2a2a] rounded-lg px-4 py-2.5 text-sm text-[#ff8080]">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 rounded-lg bg-[#00d4ff] text-[#0f0f14] font-semibold hover:bg-[#33dfff] transition-colors disabled:opacity-50"
            >
              {needsSetup ? '创建并登录' : '登录'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/" className="text-xs text-[#737373] hover:text-[#e5e5ea] transition-colors">
              ← 返回首页
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // 管理后台主页
  return (
    <div className="min-h-screen bg-[#0f0f14]">
      <header className="sticky top-0 z-30 bg-[#131318] border-b border-[#22222c]">
        <div className="h-14 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-[#9a9aa5] hover:text-[#e5e5ea] transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] flex items-center justify-center">
              <Shield className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-medium text-[#e5e5ea]">管理后台</span>
          </div>
          <button
            onClick={handleLogout}
            className="text-xs text-[#9a9aa5] hover:text-[#e5e5ea] transition-colors"
          >
            退出登录
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8 space-y-8">
        {/* 统计概览 */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[#00d4ff]" />
              <h2 className="text-sm font-medium text-[#e5e5ea]">使用统计</h2>
            </div>
            <button
              onClick={handleResetStats}
              className="text-xs text-[#737373] hover:text-[#e5e5ea] flex items-center gap-1 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />重置
            </button>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <StatCard label="总调用" value={stats?.total ?? 0} />
            <StatCard label="成功" value={stats?.success ?? 0} color="text-[#80ff80]" />
            <StatCard label="失败" value={stats?.errors ?? 0} color="text-[#ff8080]" />
            <StatCard label="今日" value={stats?.today ?? 0} />
          </div>

          {stats?.recent_logs && stats.recent_logs.length > 0 && (
            <div className="mt-4 bg-[#131318] border border-[#22222c] rounded-xl overflow-hidden">
              <div className="px-5 py-3 border-b border-[#22222c]">
                <span className="text-xs text-[#9a9aa5]">最近记录</span>
              </div>
              <div className="divide-y divide-[#22222c]">
                {stats.recent_logs.slice(0, 10).map((log: any, i: number) => (
                  <div key={i} className="px-5 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {log.success ? (
                        <Check className="w-3.5 h-3.5 text-[#80ff80]" />
                      ) : (
                        <X className="w-3.5 h-3.5 text-[#ff8080]" />
                      )}
                      <span className="text-xs text-[#9a9aa5]">
                        {log.success ? '成功' : '失败'}
                      </span>
                    </div>
                    <span className="text-xs text-[#737373] tabular-nums">{log.ms || 0}ms</span>
                    <span className="text-xs text-[#5a5a65]">
                      {log.at ? new Date(log.at).toLocaleTimeString() : '—'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* API Key */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Key className="w-4 h-4 text-[#00d4ff]" />
            <h2 className="text-sm font-medium text-[#e5e5ea]">Replicate API Key</h2>
          </div>

          <div className="bg-[#131318] border border-[#22222c] rounded-xl p-5">
            <p className="text-xs text-[#737373] mb-4 leading-relaxed">
              API Key 用于调用深度分析模型。
              <a
                href="https://replicate.com/signin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00d4ff] hover:underline ml-1"
              >
                在 Replicate 网站获取
              </a>
            </p>

            <form onSubmit={handleSetApiKey} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <div className="relative flex-1">
                <input
                  type={showApiKey ? 'text' : 'password'}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="r8_xxxxxxxxxxxxxxxxxxxx"
                  className="w-full h-10 px-4 pr-12 rounded-lg bg-[#17171f] border border-[#22222c] text-sm text-[#e5e5ea] placeholder-[#5a5a65] focus:outline-none focus:border-[#00d4ff]/50 transition-colors font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowApiKey(!showApiKey)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] hover:text-[#e5e5ea] transition-colors"
                >
                  {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <button
                type="submit"
                disabled={savingKey || !apiKey.trim()}
                className="h-10 px-5 rounded-lg bg-[#00d4ff] text-[#0f0f14] text-sm font-medium hover:bg-[#33dfff] transition-colors disabled:opacity-50 flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                {savingKey ? '保存中...' : '保存'}
              </button>
            </form>

            {keyMsg && (
              <div className={`mt-3 text-xs ${keyMsg === '已保存' ? 'text-[#80ff80]' : 'text-[#ff8080]'}`}>
                {keyMsg}
              </div>
            )}
          </div>
        </section>

        {/* 修改密码 */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-4 h-4 text-[#00d4ff]" />
            <h2 className="text-sm font-medium text-[#e5e5ea]">修改密码</h2>
          </div>

          <div className="bg-[#131318] border border-[#22222c] rounded-xl p-5">
            <form onSubmit={handleChangePassword} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="输入新密码"
                className="flex-1 h-10 px-4 rounded-lg bg-[#17171f] border border-[#22222c] text-sm text-[#e5e5ea] placeholder-[#5a5a65] focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
              />
              <button
                type="submit"
                disabled={!newPassword}
                className="h-10 px-5 rounded-lg bg-[#1f1f28] border border-[#2a2a36] text-sm text-[#e5e5ea] hover:bg-[#2a2a36] transition-colors disabled:opacity-50 whitespace-nowrap"
              >
                修改密码
              </button>
            </form>
            {pwMsg && (
              <div className={`mt-3 text-xs ${pwMsg === '密码修改成功' ? 'text-[#80ff80]' : 'text-[#ff8080]'}`}>
                {pwMsg}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

function StatCard({
  label, value, color = 'text-[#e5e5ea]',
}: { label: string; value: string | number; color?: string }) {
  return (
    <div className="bg-[#131318] border border-[#22222c] rounded-xl p-4">
      <div className={`text-xl font-semibold tabular-nums ${color}`}>
        {typeof value === 'number' ? value.toLocaleString() : value}
      </div>
      <div className="text-xs text-[#737373] mt-1">{label}</div>
    </div>
  )
}
