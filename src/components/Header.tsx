import { useState, useEffect } from 'react';
import { Plus, Monitor } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { ExportMenu } from './ExportMenu';
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
  const dateStr = now.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric', weekday: 'short' });

  return (
    <header className="sticky top-0 z-40 bg-stone-50/90 dark:bg-dark-bg/90 backdrop-blur-md border-b border-stone-200/60 dark:border-dark-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-14 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5 shrink-0">
            <Monitor className="w-5 h-5 text-brand" strokeWidth={2} />
            <span className="font-display font-bold text-stone-800 dark:text-dark-text text-base tracking-tight">
              servers
            </span>
          </div>

          {/* Center stats */}
          {servers.length > 0 && (
            <div className="hidden md:flex items-center gap-1.5 text-sm text-stone-500 dark:text-dark-muted">
              <span className="w-2 h-2 rounded-full bg-online animate-pulse-dot" />
              <span>
                <span className="font-semibold text-stone-700 dark:text-dark-text">{online}</span>
                <span className="text-stone-400 dark:text-dark-muted">/{servers.length}</span>
                <span className="ml-1">台在线</span>
              </span>
            </div>
          )}

          {/* Right: date/time + theme + export + add */}
          <div className="flex items-center gap-2">
            {/* 日期时间 */}
            <div className="hidden sm:flex flex-col items-end leading-tight">
              <span className="text-[10px] font-mono text-stone-400 dark:text-dark-muted">{timeStr}</span>
              <span className="text-[10px] text-stone-300 dark:text-dark-muted">{dateStr}</span>
            </div>

            <div className="w-px h-5 bg-stone-200 dark:bg-dark-border mx-1" />

            <ThemeToggle />
            <ExportMenu />

            <button
              onClick={onAddClick}
              className="btn-primary"
              type="button"
            >
              <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
              <span className="hidden sm:inline">添加服务器</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
