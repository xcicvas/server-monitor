import { useState } from 'react';
import { X, Server, Terminal, Loader, AlertCircle, CheckCircle2, Wifi } from 'lucide-react';
import { probeAgent, loginAgent } from '../utils/probeAgent';

interface AddServerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (data: {
    name: string;
    address: string;
    token: string;
    username: string;
    password: string;
    insecure: boolean;
    interval: number;
  }) => void;
}

function normalizeAddress(address: string): string {
  if (!/^https?:\/\//i.test(address)) {
    return `http://${address.trim()}`;
  }
  return address.trim();
}

export function AddServerModal({ isOpen, onClose, onAdd }: AddServerModalProps) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [insecure, setInsecure] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);
  const [probeResult, setProbeResult] = useState<{
    health: boolean;
    latency: number | null;
    hostname?: string;
    platform?: string;
  } | null>(null);
  const [probeState, setProbeState] = useState<'idle' | 'checking'>('idle');

  function reset() {
    setName('');
    setAddress('');
    setUsername('');
    setPassword('');
    setInsecure(false);
    setErrors({});
    setLoginError('');
    setLoading(false);
    setProbeResult(null);
    setProbeState('idle');
  }

  if (!isOpen) return null;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = '请输入服务器名称';
    if (!address.trim()) {
      e.address = '请输入 Agent 地址';
    } else {
      try {
        new URL(normalizeAddress(address));
      } catch {
        e.address = '地址格式不正确';
      }
    }
    if (!insecure) {
      if (!username.trim()) e.username = '请输入用户名';
      if (!password) e.password = '请输入密码';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleProbe = async () => {
    if (!address.trim()) return;
    setProbeState('checking');
    setProbeResult(null);
    const result = await probeAgent(address.trim());
    setProbeState('idle');
    setProbeResult({
      health: result.health,
      latency: result.latency,
      hostname: result.info?.hostname,
      platform: result.info?.platform,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const urlStr = normalizeAddress(address);

    setLoading(true);
    setLoginError('');

    try {
      let finalToken = '';
      if (!insecure) {
        const login = await loginAgent(urlStr, username, password);
        if (!login.ok) {
          setLoginError(login.error || '登录失败，请检查用户名和密码');
          setLoading(false);
          return;
        }
        finalToken = login.token || '';
      }

      onAdd({
        name: name.trim(),
        address: urlStr,
        token: finalToken,
        username: insecure ? '' : username.trim(),
        password: insecure ? '' : password,
        insecure,
        interval: 10,
      });
      reset();
      onClose();
    } catch {
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
            <div className="flex gap-2">
              <input
                type="text"
                value={address}
                onChange={(e) => { setAddress(e.target.value); setProbeResult(null); }}
                placeholder="http://服务器IP:7001"
                className={`input input-mono flex-1 ${errors.address ? 'input-error' : ''}`}
                disabled={loading}
              />
              <button
                type="button"
                onClick={handleProbe}
                disabled={loading || probeState === 'checking' || !address.trim()}
                className="px-3 py-2 rounded-xl bg-stone-100 text-stone-600 text-xs font-medium hover:bg-stone-200 transition-colors disabled:opacity-50 flex items-center gap-1"
              >
                <Wifi className="w-3 h-3" strokeWidth={2} />
                探测
              </button>
            </div>
            {errors.address ? (
              <p className="mt-1.5 text-xs text-red-500">{errors.address}</p>
            ) : probeState === 'checking' ? (
              <p className="mt-1.5 text-xs text-stone-400 flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-400 animate-pulse" />
                正在探测...
              </p>
            ) : probeResult ? (
              <div className={`mt-1.5 flex items-center gap-1.5 text-xs ${probeResult.health ? 'text-emerald-600' : 'text-amber-600'}`}>
                {probeResult.health ? (
                  <>
                    <CheckCircle2 className="w-3 h-3" strokeWidth={2} />
                    Agent 在线 — {probeResult.latency} ms
                    {probeResult.hostname && <span className="text-stone-400">· {probeResult.hostname}</span>}
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-3 h-3" strokeWidth={2} />
                    无法连接，请确认 Agent 已启动
                  </>
                )}
              </div>
            ) : (
              <p className="mt-1.5 text-xs text-stone-400">点击「探测」按钮可测试连接</p>
            )}
          </div>

          {/* 不安全模式开关 */}
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50 border border-amber-200">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={insecure}
                onChange={(e) => setInsecure(e.target.checked)}
                disabled={loading}
                className="w-4 h-4 rounded accent-brand cursor-pointer"
              />
              <span className="text-xs font-semibold text-amber-800">不安全模式</span>
            </label>
            <p className="text-xs text-amber-700 leading-relaxed">
              Agent 已开启 <code className="font-mono text-[10px] bg-amber-100 px-1 py-0.5 rounded">INSECURE_MODE=true</code> 时使用，跳过 JWT 登录。仅推荐内网/开发环境。
            </p>
          </div>

          {/* 用户名/密码：仅安全模式显示 */}
          {!insecure && (
            <>
              <div>
                <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
                  用户名 <span className="text-red-400 normal-case">*</span>
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className={`input ${errors.username ? 'input-error' : ''}`}
                  autoComplete="username"
                  disabled={loading}
                />
                {errors.username && <p className="mt-1.5 text-xs text-red-500">{errors.username}</p>}
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
                  className={`input ${errors.password ? 'input-error' : ''}`}
                  autoComplete="current-password"
                  disabled={loading}
                />
                {errors.password && <p className="mt-1.5 text-xs text-red-500">{errors.password}</p>}
                <p className="mt-1.5 text-xs text-stone-400">
                  默认：admin / admin（首次登录后请修改密码）
                </p>
              </div>
            </>
          )}

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
                  {insecure ? '添加中...' : '登录中...'}
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
