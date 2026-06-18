import { useState } from 'react';
import { Monitor, LogIn, AlertCircle, Loader } from 'lucide-react';

interface LoginPageProps {
  onLogin: (token: string, username: string) => void;
  serverAddress?: string;
}

export function LoginPage({ onLogin, serverAddress = '' }: LoginPageProps) {
  const [address, setAddress] = useState(serverAddress);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!address.trim()) { setError('请输入服务器地址'); return; }
    if (!username.trim()) { setError('请输入用户名'); return; }
    if (!password) { setError('请输入密码'); return; }

    const normalized = /^https?:\/\//i.test(address.trim())
      ? address.trim()
      : `http://${address.trim()}`;

    setLoading(true);
    try {
      const resp = await fetch(`${normalized}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.trim(), password }),
      });
      const data = await resp.json();
      if (!resp.ok || !data.ok) {
        setError(data.error || '登录失败');
      } else {
        onLogin(data.token, data.username);
      }
    } catch (err) {
      setError(`无法连接到服务器：${err instanceof Error ? err.message : '网络错误'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(196,84,26,0.08) 0%, transparent 60%)' }}>
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-stone-900 dark:bg-stone-800 flex items-center justify-center mb-4 shadow-lg">
            <Monitor className="w-7 h-7 text-brand" strokeWidth={2} />
          </div>
          <h1 className="font-display text-2xl font-bold text-stone-800 dark:text-dark-text">servers</h1>
          <p className="text-sm text-stone-400 mt-1">服务器监控面板</p>
        </div>

        {/* Login Card */}
        <div className="card p-6">
          <h2 className="text-base font-semibold text-stone-700 dark:text-dark-text mb-5 flex items-center gap-2">
            <LogIn className="w-4 h-4 text-brand" strokeWidth={2} />
            登录到服务器
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-500 dark:text-dark-muted uppercase tracking-wider mb-1.5">
                服务器地址
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="http://服务器IP:7001"
                className="input"
                autoComplete="off"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-500 dark:text-dark-muted uppercase tracking-wider mb-1.5">
                用户名
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="input"
                autoComplete="username"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-500 dark:text-dark-muted uppercase tracking-wider mb-1.5">
                密码
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                className="input"
                autoComplete="current-password"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-950 border border-red-100 dark:border-red-900 text-xs text-red-600 dark:text-red-300">
                <AlertCircle className="w-4 h-4 shrink-0" strokeWidth={2} />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader className="w-4 h-4 animate-spin" strokeWidth={2} />
                  登录中...
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4" strokeWidth={2} />
                  登录
                </>
              )}
            </button>
          </form>

          <p className="text-[10px] text-stone-400 text-center mt-4">
            默认账户：admin / admin（首次登录后请立即修改密码）
          </p>
        </div>
      </div>
    </div>
  );
}
