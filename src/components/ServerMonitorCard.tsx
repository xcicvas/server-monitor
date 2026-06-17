import { RefreshCw, Trash2, Server, AlertTriangle } from 'lucide-react';
import { CircularProgress, LinearProgress } from './ProgressIndicator';
import { AnimatedNumber } from './AnimatedNumber';
import { SparklineChart } from './SparklineChart';
import { HealthScore, calcHealthScore } from './HealthScore';
import { PulseIndicator } from './PulseIndicator';
import { useServerHistory } from '../store/serverStore';
import type { ServerData } from '../store/serverStore';

interface ServerMonitorCardProps {
  server: ServerData;
  onDelete: (id: string) => void;
  onRefresh: (id: string) => void;
  index: number;
}

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

function barColor(v: number): string {
  if (v < 60) return '#16a34a';
  if (v < 80) return '#ca8a04';
  return '#dc2626';
}

const ALERT_THRESHOLD = 85; // 告警阈值

export function ServerMonitorCard({ server, onDelete, onRefresh, index }: ServerMonitorCardProps) {
  const isOnline = server.status === 'online';
  const isChecking = server.status === 'checking';
  const m = server.metrics;
  const history = useServerHistory(server.id);

  const cpuPct = m?.cpu.usagePercent ?? 0;
  const memPct = m?.memory.usagePercent ?? 0;
  const diskPct = m?.disk.usagePercent ?? 0;
  const netMbps = (m?.network.rxMbps ?? 0) + (m?.network.txMbps ?? 0);

  const healthScore = m ? calcHealthScore(m) : 0;

  // 是否触发告警
  const isAlert = isOnline && (
    cpuPct >= ALERT_THRESHOLD || memPct >= ALERT_THRESHOLD || diskPct >= ALERT_THRESHOLD
  );

  return (
    <article
      className={`card p-5 animate-slide-up overflow-hidden transition-all duration-300 ${isAlert ? 'ring-2 ring-red-300 ring-offset-1' : ''}`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* 顶部状态条 */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          {/* 状态图标 */}
          <div className={`relative w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border text-xs font-semibold
            ${isOnline ? 'bg-green-50 border-green-200 text-green-700' :
              isChecking ? 'bg-yellow-50 border-yellow-200 text-yellow-700' :
              'bg-red-50 border-red-200 text-red-600'}`}
          >
            {isChecking ? (
              <RefreshCw className="w-4 h-4 animate-spin" strokeWidth={2.5} />
            ) : (
              <Server className="w-4 h-4" strokeWidth={2.5} />
            )}
            {/* 脉冲指示器 */}
            <div className="absolute -top-1 -right-1">
              <PulseIndicator status={server.status} />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-stone-800 truncate leading-tight">{server.name}</h3>
              {isAlert && (
                <span className="flex items-center gap-0.5 shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200">
                  <AlertTriangle className="w-3 h-3" strokeWidth={2.5} />
                  告警
                </span>
              )}
            </div>
            <p className="text-xs text-stone-400 font-mono mt-0.5 truncate">
              {m?.hostname ?? '—'}
              {m?.arch ? <span className="ml-1 text-stone-300">· {m.arch}</span> : null}
            </p>
          </div>
        </div>

        {/* 健康评分 */}
        <div className="shrink-0">
          <HealthScore score={healthScore} size={64} strokeWidth={5} />
        </div>
      </div>

      {/* 主要指标：CPU + 内存 + 趋势图 */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <MetricTile
          label="CPU"
          value={cpuPct}
          detail={m ? `${m.cpu.cores}核 · ${m.cpu.model?.split(' ').slice(0, 3).join(' ')}` : '—'}
          color={barColor(cpuPct)}
          history={history.map(h => h.cpu)}
          isAlert={cpuPct >= ALERT_THRESHOLD}
        />
        <MetricTile
          label="内存"
          value={memPct}
          detail={m ? `${formatBytes(m.memory.used)} / ${formatBytes(m.memory.total)}` : '—'}
          color={barColor(memPct)}
          history={history.map(h => h.memory)}
          isAlert={memPct >= ALERT_THRESHOLD}
        />
      </div>

      {/* 磁盘 + 网络 */}
      <div className="space-y-3">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs text-stone-500 font-medium">磁盘</span>
            <span className="text-xs font-mono text-stone-500 flex items-center gap-2">
              {isAlert && diskPct >= ALERT_THRESHOLD && (
                <AlertTriangle className="w-3 h-3 text-red-500" strokeWidth={2.5} />
              )}
              {m ? `${formatBytes(m.disk.used)} / ${formatBytes(m.disk.total)}` : '—'}
            </span>
          </div>
          <LinearProgress value={diskPct} color={barColor(diskPct)} height={5} />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-stone-500 font-medium">网络</span>
          <span className="text-xs font-mono text-stone-500">
            {m ? `${m.network.interfaces} 接口 · ${netMbps.toFixed(1)} Mbps` : '—'}
          </span>
        </div>
      </div>

      {/* 底部：uptime + 地址 */}
      <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
        <span className="font-mono">
          {m ? formatUptime(m.uptime) : '—'}
          <span className="ml-1 text-stone-300">在线时长</span>
        </span>
        <span className="font-mono truncate max-w-[150px] text-right">
          {server.address.replace(/^https?:\/\//, '')}
        </span>
      </div>

      {/* 操作按钮 */}
      <div className="mt-3 pt-3 border-t border-stone-100 flex gap-2">
        <button
          onClick={() => onRefresh(server.id)}
          disabled={isChecking}
          className="btn-ghost flex-1 text-xs py-2 disabled:opacity-40"
          type="button"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isChecking ? 'animate-spin' : ''}`} strokeWidth={2} />
          刷新
        </button>
        <button
          onClick={() => onDelete(server.id)}
          className="btn-ghost flex-1 text-xs py-2 text-red-400 hover:text-red-600 hover:bg-red-50"
          type="button"
        >
          <Trash2 className="w-3.5 h-3.5" strokeWidth={2} />
          删除
        </button>
      </div>

      {/* 错误 */}
      {!isOnline && server.error && (
        <div className="mt-3 p-2.5 rounded-lg bg-red-50 border border-red-100 text-xs text-red-600 font-mono">
          {server.error}
        </div>
      )}
    </article>
  );
}

interface MetricTileProps {
  label: string;
  value: number;
  detail: string;
  color: string;
  history?: number[];
  isAlert?: boolean;
}

const MetricTile: React.FC<MetricTileProps> = ({ label, value, detail, color, history = [], isAlert }) => (
  <div className={`flex items-center gap-2 p-3 rounded-xl bg-stone-50 border transition-colors ${isAlert ? 'border-red-200 bg-red-50/50' : 'border-stone-100'}`}>
    <div className="relative shrink-0">
      <CircularProgress value={value} color={color} size={56} strokeWidth={5}>
        <div className="flex flex-col items-center leading-none">
          <AnimatedNumber
            value={value}
            decimals={0}
            className="text-sm font-bold text-stone-800 font-mono"
          />
          <span className="text-[9px] text-stone-400">%</span>
        </div>
      </CircularProgress>
    </div>
    <div className="min-w-0 flex-1">
      <div className="flex items-center justify-between mb-0.5">
        <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider">{label}</span>
        {isAlert && <AlertTriangle className="w-3 h-3 text-red-500 shrink-0" strokeWidth={2.5} />}
      </div>
      <div className="text-[10px] text-stone-500 font-mono truncate leading-tight">{detail}</div>
      {/* 趋势图 */}
      <div className="mt-1.5">
        <SparklineChart
          data={history}
          width={100}
          height={28}
          fill={false}
          dangerThreshold={ALERT_THRESHOLD}
        />
      </div>
    </div>
  </div>
);

export default ServerMonitorCard;
