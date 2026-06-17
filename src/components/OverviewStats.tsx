import { useServerStore } from '../store/serverStore';
import { calcHealthScore } from './HealthScore';
import { AnimatedNumber } from './AnimatedNumber';

function avg(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((a, b) => a + b, 0) / values.length;
}

export function OverviewStats() {
  const servers = useServerStore((s) => s.servers);
  if (servers.length === 0) return null;

  const online = servers.filter((sv) => sv.status === 'online');
  const offline = servers.filter((sv) => sv.status === 'offline');

  const cpuValues = online.map((s) => s.metrics?.cpu.usagePercent ?? 0);
  const memValues = online.map((s) => s.metrics?.memory.usagePercent ?? 0);
  const diskValues = online.map((s) => s.metrics?.disk.usagePercent ?? 0);
  const healthValues = online.map((s) => s.metrics ? calcHealthScore(s.metrics) : 0);

  const avgCpu = avg(cpuValues);
  const avgMem = avg(memValues);
  const avgDisk = avg(diskValues);
  const avgHealth = avg(healthValues);

  const avgCpuOk = avgCpu < 60 ? 'text-green-600' : avgCpu < 80 ? 'text-amber-500' : 'text-red-500';
  const avgMemOk = avgMem < 60 ? 'text-green-600' : avgMem < 80 ? 'text-amber-500' : 'text-red-500';
  const avgDiskOk = avgDisk < 60 ? 'text-green-600' : avgDisk < 80 ? 'text-amber-500' : 'text-red-500';

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
      {/* 服务器数量 */}
      <div className="card p-4 flex flex-col items-center justify-center text-center">
        <span className="text-2xl font-bold font-display text-stone-800 dark:text-dark-text">
          {servers.length}
        </span>
        <span className="text-[10px] text-stone-400 uppercase tracking-wider mt-0.5">服务器</span>
        <div className="flex items-center gap-1.5 mt-1">
          {online.length > 0 && (
            <span className="flex items-center gap-0.5 text-[10px] text-green-600">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              {online.length}在线
            </span>
          )}
          {offline.length > 0 && (
            <span className="flex items-center gap-0.5 text-[10px] text-red-500">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              {offline.length}离线
            </span>
          )}
        </div>
      </div>

      {/* 平均 CPU */}
      <div className="card p-4 flex flex-col items-center justify-center text-center">
        <span className={`text-2xl font-bold font-display font-mono ${avgCpuOk}`}>
          <AnimatedNumber value={avgCpu} decimals={1} suffix="%" />
        </span>
        <span className="text-[10px] text-stone-400 uppercase tracking-wider mt-0.5">平均 CPU</span>
        <div className="w-full mt-2 h-1 rounded-full bg-stone-100 dark:bg-stone-800 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{ width: `${avgCpu}%`, backgroundColor: avgCpu < 60 ? '#22c55e' : avgCpu < 80 ? '#f59e0b' : '#ef4444' }}
          />
        </div>
      </div>

      {/* 平均内存 */}
      <div className="card p-4 flex flex-col items-center justify-center text-center">
        <span className={`text-2xl font-bold font-display font-mono ${avgMemOk}`}>
          <AnimatedNumber value={avgMem} decimals={1} suffix="%" />
        </span>
        <span className="text-[10px] text-stone-400 uppercase tracking-wider mt-0.5">平均内存</span>
        <div className="w-full mt-2 h-1 rounded-full bg-stone-100 dark:bg-stone-800 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{ width: `${avgMem}%`, backgroundColor: avgMem < 60 ? '#22c55e' : avgMem < 80 ? '#f59e0b' : '#ef4444' }}
          />
        </div>
      </div>

      {/* 平均健康分 */}
      <div className="card p-4 flex flex-col items-center justify-center text-center">
        <span
          className="text-2xl font-bold font-display font-mono"
          style={{ color: avgHealth >= 80 ? '#22c55e' : avgHealth >= 50 ? '#f59e0b' : '#ef4444' }}
        >
          <AnimatedNumber value={avgHealth} decimals={0} />
        </span>
        <span className="text-[10px] text-stone-400 uppercase tracking-wider mt-0.5">平均健康分</span>
        <div className="w-full mt-2 h-1 rounded-full bg-stone-100 dark:bg-stone-800 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{ width: `${avgHealth}%`, backgroundColor: avgHealth >= 80 ? '#22c55e' : avgHealth >= 50 ? '#f59e0b' : '#ef4444' }}
          />
        </div>
      </div>
    </div>
  );
}
