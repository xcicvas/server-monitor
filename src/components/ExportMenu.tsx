import { useState, useRef } from 'react';
import { Download, Upload, ChevronDown, CheckCircle, AlertCircle } from 'lucide-react';
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

interface ImportResult {
  ok: boolean;
  message: string;
}

export function ExportMenu() {
  const [open, setOpen] = useState(false);
  const [importResult, setImportResult] = useState<ImportResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const servers = useServerStore((s) => s.servers);
  const { addServer, removeServer } = useServerStore();

  function exportJSON() {
    const data = servers.map((sv) => ({
      name: sv.name,
      address: sv.address,
      token: sv.token,
      interval: sv.interval,
    }));

    const blob = new Blob([JSON.stringify({ version: 1, servers: data, exportedAt: new Date().toISOString() }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `server-monitor-config-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setOpen(false);
  }

  function exportCSV() {
    const rows = [['名称', '地址', '令牌', '刷新间隔(秒)', '状态', 'hostname', 'CPU%', '内存%', '磁盘%', '更新时间']];
    for (const sv of servers) {
      rows.push([
        sv.name,
        sv.address,
        sv.token ? '******' : '',
        String(sv.interval),
        sv.status,
        sv.metrics?.hostname ?? '',
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

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const text = ev.target?.result as string;
        const parsed = JSON.parse(text);

        if (!parsed.servers || !Array.isArray(parsed.servers)) {
          throw new Error('文件格式不正确，缺少 servers 数组');
        }

        const imported = parsed.servers as Array<{
          name: string;
          address: string;
          token?: string;
          interval?: number;
        }>;

        if (imported.length === 0) {
          throw new Error('配置文件中没有服务器');
        }

        // 清空现有服务器（避免重复）
        servers.forEach((s) => removeServer(s.id));

        // 批量导入（状态设为 checking，等待下次轮询）
        for (const sv of imported) {
          if (!sv.name || !sv.address) continue;
          addServer({
            name: sv.name,
            address: sv.address,
            token: sv.token ?? '',
            interval: sv.interval ?? 10,
          });
        }

        setImportResult({ ok: true, message: `成功导入 ${imported.length} 台服务器` });
      } catch (err) {
        setImportResult({ ok: false, message: `导入失败：${err instanceof Error ? err.message : '文件格式错误'}` });
      }
    };
    reader.readAsText(file);

    // 清空 value，允许重复选择同一文件
    e.target.value = '';
    setOpen(false);

    // 3秒后清除提示
    setTimeout(() => setImportResult(null), 3000);
  }

  return (
    <div className="relative" ref={fileInputRef}>
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
          <div className="absolute right-0 top-full mt-2 z-50 w-52 bg-white dark:bg-dark-surface border border-stone-200 dark:border-dark-border rounded-xl shadow-lg shadow-stone-900/10 dark:shadow-black/40 overflow-hidden animate-scale-in">
            <button
              onClick={exportJSON}
              disabled={servers.length === 0}
              className="w-full px-4 py-2.5 text-sm text-left hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors disabled:opacity-40"
            >
              导出配置 (JSON)
            </button>
            <div className="border-t border-stone-100 dark:border-dark-border" />
            <button
              onClick={exportCSV}
              disabled={servers.length === 0}
              className="w-full px-4 py-2.5 text-sm text-left hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors disabled:opacity-40"
            >
              导出数据 (CSV)
            </button>
            <div className="border-t border-stone-100 dark:border-dark-border" />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full px-4 py-2.5 text-sm text-left hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
            >
              导入配置...
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </>
      )}

      {/* 导入结果提示 */}
      {importResult && (
        <div
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium shadow-lg animate-scale-in ${
            importResult.ok
              ? 'bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300'
              : 'bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300'
          }`}
        >
          {importResult.ok
            ? <CheckCircle className="w-4 h-4 shrink-0" strokeWidth={2} />
            : <AlertCircle className="w-4 h-4 shrink-0" strokeWidth={2} />
          }
          {importResult.message}
        </div>
      )}
    </div>
  );
}
