import { useState, useEffect } from 'react';
import { X, Server, Terminal } from 'lucide-react';

interface AddServerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (data: { name: string; address: string; interval: number }) => void;
}

export function AddServerModal({ isOpen, onClose, onAdd }: AddServerModalProps) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [interval, setInterval] = useState(5);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      setName('');
      setAddress('');
      setInterval(5);
      setErrors({});
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = '请输入服务器名称';
    if (!address.trim()) {
      e.address = '请输入 Agent 地址';
    } else {
      const urlStr = /^https?:\/\//i.test(address.trim()) ? address.trim() : `http://${address.trim()}`;
      try { new URL(urlStr); } catch { e.address = '地址格式不正确'; }
    }
    if (interval < 1 || interval > 300) e.interval = '刷新间隔需在 1-300 秒之间';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const urlStr = /^https?:\/\//i.test(address.trim()) ? address.trim() : `http://${address.trim()}`;
    onAdd({ name: name.trim(), address: urlStr, interval });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-stone-900/30 backdrop-blur-sm animate-fade-in" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl shadow-stone-900/10 animate-scale-in overflow-hidden">
        {/* 顶部线 */}
        <div className="h-0.5 bg-gradient-to-r from-stone-200 via-brand to-stone-200" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center">
              <Server className="w-4 h-4 text-brand" strokeWidth={2} />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-stone-800 font-display">添加服务器</h2>
              <p className="text-xs text-stone-400 mt-0.5">配置 Agent 端点开始监控</p>
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
              placeholder="http://192.168.1.10:7001"
              className={`input input-mono ${errors.address ? 'input-error' : ''}`}
            />
            {errors.address ? (
              <p className="mt-1.5 text-xs text-red-500">{errors.address}</p>
            ) : (
              <p className="mt-1.5 text-xs text-stone-400">Agent 默认提供 /api/metrics 接口</p>
            )}
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
              />
              <div className="flex gap-1">
                {[3, 5, 10, 30].map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setInterval(v)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors
                      ${interval === v
                        ? 'bg-stone-800 text-white'
                        : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                      }`}
                  >
                    {v}s
                  </button>
                ))}
              </div>
            </div>
            {errors.interval && <p className="mt-1.5 text-xs text-red-500">{errors.interval}</p>}
          </div>

          {/* 提示 */}
          <div className="flex gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200">
            <Terminal className="w-4 h-4 text-stone-400 mt-0.5 shrink-0" strokeWidth={2} />
            <p className="text-xs text-stone-500 leading-relaxed">
              在被监控的服务器上运行 <code className="px-1 py-0.5 rounded bg-stone-200 text-stone-700 font-mono text-[10px]">node api/agent.js</code>，默认端口 7001
            </p>
          </div>

          {/* 提交 */}
          <div className="flex gap-2 pt-1">
            <button type="button" onClick={onClose} className="btn-ghost flex-1">
              取消
            </button>
            <button type="submit" className="btn-primary flex-1">
              添加
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddServerModal;
