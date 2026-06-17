import { useState, useEffect } from 'react';
import { Plus, Monitor } from 'lucide-react';
import type { ServerData } from '../store/serverStore';

interface HeaderProps {
  onAddClick: () => void;
  servers: ServerData[];
}

export function Header({ onAddClick, servers }: HeaderProps) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const online = servers.filter((s) => s.status === 'online').length;

  const timeStr = now.toLocaleTimeString('zh-CN', { hour12: false });

  return (
    <header className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/60">
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-14 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <Monitor className="w-5 h-5 text-brand" strokeWidth={2} />
            <span className="font-display font-bold text-stone-800 text-base tracking-tight">
              servers
            </span>
          </div>

          {/* Center stats */}
          {servers.length > 0 && (
            <div className="hidden sm:flex items-center gap-1.5 text-sm text-stone-500">
              <span className="w-2 h-2 rounded-full bg-online animate-pulse-dot" />
              <span>
                <span className="font-semibold text-stone-700">{online}</span>
                <span className="text-stone-400">/{servers.length}</span>
                <span className="ml-1">台在线</span>
              </span>
            </div>
          )}

          {/* Right: time + button */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-xs font-mono text-stone-400">{timeStr}</span>
            <button
              onClick={onAddClick}
              className="btn-primary"
              type="button"
            >
              <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
              <span>添加服务器</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
