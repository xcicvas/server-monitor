import { useState, useRef } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { useServerStore } from '../store/serverStore';

function formatBytes(bytes: number): string {
  if (!bytes || bytes < 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let i = 0;
  let v = bytes;
  while (v >= 1024 && i < units.length - 1) { v /= 1024; i++; }
  return `${v.toFixed(v >= 100 ? 0 : v >= 10 ? 1 : 2)} ${units[i]}`;
}

function formatUptime(seconds: number): string {
  if (!seconds) return '—';
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (d > 0) return `${d}天${h}小时`;
  if (h > 0) return `${h}小时${m}分`;
  return `${m}分钟`;
}

export function ExportMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const servers = useServerStore((s) => s.servers);

  function exportJSON() {
    const data = servers.map((sv) => ({
      name: sv.name,
      address: sv.address,
      status: sv.status,
      lastCheck: sv.lastCheckTime ? new Date(sv.lastCheckTime).toISOString() : null,
      metrics: sv.metrics ? {
        hostname: sv.metrics.hostname,
        platform: sv.metrics.platform,
        uptime: sv.metrics.uptime,
        cpu: {
          cores: sv.metrics.cpu.cores,
          model: sv.metrics.cpu.model,
          usagePercent: sv.metrics.cpu.usagePercent,
        },
        memory: {
          total: formatBytes(sv.metrics.memory.total),
          used: formatBytes(sv.metrics.memory.used),
          free: formatBytes(sv.metrics.memory.free),
          usagePercent: sv.metrics.memory.usagePercent,
        },
        disk: {
          total: formatBytes(sv.metrics.disk.total),
          used: formatBytes(sv.metrics.disk.used),
          free: formatBytes(sv.metrics.disk.free),
          usagePercent: sv.metrics.disk.usagePercent,
        },
        network: sv.metrics.network.interfaces,
      } : null,
    }));

    const blob = new Blob([JSON.stringify({ servers: data, exportedAt: new Date().toISOString() }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `server-monitor-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setOpen(false);
  }

  function exportCSV() {
    const rows = [['名称', '地址', '状态', 'hostname', '平台', '在线时长', 'CPU%', '内存%', '磁盘%', '更新时间']];
    for (const sv of servers) {
      rows.push([
        sv.name,
        sv.address,
        sv.status,
        sv.metrics?.hostname ?? '',
        sv.metrics?.platform ?? '',
        sv.metrics ? formatUptime(sv.metrics.uptime) : '',
        sv.metrics?.cpu.usagePercent.toFixed(1) ?? '',
        sv.metrics?.memory.usagePercent.toFixed(1) ?? '',
        sv.metrics?.disk.usagePercent.toFixed(1) ?? '',
        sv.lastCheckTime ? new Date(sv.lastCheckTime).toLocaleString('zh-CN') : '',
      ]);
    }
    const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `server-monitor-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    setOpen(false);
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="btn-ghost text-xs py-2 gap-1.5"
        type="button"
      >
        <Download className="w-3.5 h-3.5" strokeWidth={2} />
        <span className="hidden sm:inline">导出</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} strokeWidth={2} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 z-50 w-44 bg-white dark:bg-dark-surface border border-stone-200 dark:border-dark-border rounded-xl shadow-lg shadow-stone-900/10 dark:shadow-black/40 overflow-hidden animate-scale-in">
            <button
              onClick={exportJSON}
              disabled={servers.length === 0}
              className="w-full px-4 py-2.5 text-sm text-left hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors disabled:opacity-40"
            >
              导出为 JSON
            </button>
            <div className="border-t border-stone-100 dark:border-dark-border" />
            <button
              onClick={exportCSV}
              disabled={servers.length === 0}
              className="w-full px-4 py-2.5 text-sm text-left hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors disabled:opacity-40"
            >
              导出为 CSV
            </button>
          </div>
        </>
      )}
    </div>
  );
}
