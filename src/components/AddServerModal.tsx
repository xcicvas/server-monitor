import { useState } from 'react';
import { X, Server, Terminal, Loader, AlertCircle } from 'lucide-react';

interface AddServerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (data: {
    name: string;
    address: string;
    token: string;
    username: string;
    password: string;
    interval: number;
  }) => void;
}

const PRIVATE_IP_RE = /^(127\.|10\.|172\.(1[6-9]|2[0-9]|3[0-1])\.|192\.168\.|0\.|169\.254\.|localhost|::1|fe80|::ffff:)/i;

function isPrivateIp(ip: string): boolean {
  if (!ip) return false;
  ip = ip.toLowerCase();
  if (PRIVATE_IP_RE.test(ip)) return true;
  const parts = ip.split('.').map(Number);
  if (parts.length === 4 && !isNaN(parts[0])) {
    if (parts[0] === 0) return true;
    if (parts[0] === 10) return true;
    if (parts[0] === 127) return true;
    if (parts[0] === 169 && parts[1] === 254) return true;
    if (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) return true;
    if (parts[0] === 192 && parts[1] === 168) return true;
  }
  return false;
}

async function checkSSRF(address: string): Promise<boolean> {
  try {
    const urlStr = /^https?:\/\//i.test(address) ? address : `http://${address}`;
    const u = new URL(urlStr);
    if (isPrivateIp(u.hostname)) return true;
    try {
      const addr = await fetch(`https://dns.google/resolve?name=${encodeURIComponent(u.hostname)}&type=A`);
      const data = await addr.json();
      if (data.Answer) {
        for (const ans of data.Answer) {
          if (ans.data && isPrivateIp(ans.data)) return true;
        }
      }
    } catch {}
    return false;
  } catch {
    return true;
  }
}

export function AddServerModal({ isOpen, onClose, onAdd }: AddServerModalProps) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [interval, setInterval] = useState(5);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  function reset() {
    setName('');
    setAddress('');
    setUsername('');
    setPassword('');
    setInterval(5);
    setErrors({});
    setLoginError('');
    setLoading(false);
  }

  if (!isOpen) return null;

  const validateBasic = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = '请输入服务器名称';
    if (!address.trim()) {
      e.address = '请输入 Agent 地址';
    } else {
      const normalized = /^https?:\/\//i.test(address.trim())
        ? address.trim()
        : `http://${address.trim()}`;
      try { new URL(normalized); } catch { e.address = '地址格式不正确'; }
    }
    if (interval < 1 || interval > 300) e.interval = '刷新间隔需在 1-300 秒之间';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateBasic()) return;

    const urlStr = /^https?:\/\//i.test(address.trim()) ? address.trim() : `http://${address.trim()}`;

    setLoading(true);
    setLoginError('');

    try {
      const isPrivate = await checkSSRF(address.trim());
      if (isPrivate) {
        setErrors({ address: '不支持内网 IP 地址，请使用公网可访问的 Agent 地址' });
        setLoading(false);
        return;
      }

      const resp = await fetch(`${urlStr}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.trim(), password }),
      });
      const data = await resp.json();
      if (!resp.ok || !data.ok) {
        setLoginError(data.error || '登录失败，请检查用户名和密码');
        setLoading(false);
        return;
      }
      // 登录成功，添加到列表
      onAdd({
        name: name.trim(),
        address: urlStr,
        token: data.token,
        username: username.trim(),
        password: password,
        interval,
      });
      reset();
      onClose();
    } catch (err) {
      setLoginError(`无法连接到 ${urlStr}，请确认 Agent 已启动且地址正确`);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-stone-900/30 backdrop-blur-sm animate-fade-in" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl shadow-stone-900/10 animate-scale-in overflow-hidden">
        <div className="h-0.5 bg-gradient-to-r from-stone-200 via-brand to-stone-200" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center">
              <Server className="w-4 h-4 text-brand" strokeWidth={2} />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-stone-800 font-display">添加服务器</h2>
              <p className="text-xs text-stone-400 mt-0.5">登录后开始监控</p>
            </div>
          </div>
          <button onClick={onClose} className="btn-icon" type="button">
            <X className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
              服务器名称 <span className="text-red-400 normal-case">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="例如：生产环境-北京"
              className={`input ${errors.name ? 'input-error' : ''}`}
              autoFocus
              disabled={loading}
            />
            {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
              Agent 地址 <span className="text-red-400 normal-case">*</span>
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="http://服务器IP:7001"
              className={`input input-mono ${errors.address ? 'input-error' : ''}`}
              disabled={loading}
            />
            {errors.address ? (
              <p className="mt-1.5 text-xs text-red-500">{errors.address}</p>
            ) : (
              <p className="mt-1.5 text-xs text-stone-400">请使用公网可访问的地址</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
              用户名 <span className="text-red-400 normal-case">*</span>
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              className="input"
              autoComplete="username"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
              密码 <span className="text-red-400 normal-case">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••"
              className="input"
              autoComplete="current-password"
              disabled={loading}
            />
            <p className="mt-1.5 text-xs text-stone-400">
              默认：admin / admin（首次登录后请修改密码）
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
              刷新间隔
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={interval}
                onChange={(e) => setInterval(Number(e.target.value))}
                min={1}
                max={300}
                className={`input input-mono flex-1 ${errors.interval ? 'input-error' : ''}`}
                disabled={loading}
              />
              <div className="flex gap-1">
                {[3, 5, 10, 30].map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setInterval(v)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors
                      ${interval === v
                        ? 'bg-stone-800 text-white dark:bg-stone-700'
                        : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                      }`}
                    disabled={loading}
                  >
                    {v}s
                  </button>
                ))}
              </div>
            </div>
            {errors.interval && <p className="mt-1.5 text-xs text-red-500">{errors.interval}</p>}
          </div>

          {loginError && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-100 text-xs text-red-600">
              <AlertCircle className="w-4 h-4 shrink-0" strokeWidth={2} />
              {loginError}
            </div>
          )}

          {/* 提示 */}
          <div className="flex gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200">
            <Terminal className="w-4 h-4 text-stone-400 mt-0.5 shrink-0" strokeWidth={2} />
            <p className="text-xs text-stone-500 leading-relaxed">
              在被监控的服务器上运行 <code className="px-1 py-0.5 rounded bg-stone-200 text-stone-700 font-mono text-[10px]">node api/agent.js</code>，默认端口 7001
            </p>
          </div>

          {/* 提交 */}
          <div className="flex gap-2 pt-1">
            <button type="button" onClick={onClose} className="btn-ghost flex-1" disabled={loading}>
              取消
            </button>
            <button type="submit" className="btn-primary flex-1" disabled={loading}>
              {loading ? (
                <>
                  <Loader className="w-4 h-4 animate-spin" strokeWidth={2} />
                  登录中...
                </>
              ) : '添加'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddServerModal;
