import { Plus, Server, Cpu, MemoryStick, HardDrive, Network } from 'lucide-react';

interface EmptyStateProps {
  onAddClick: () => void;
}

const features = [
  { icon: Cpu, label: 'CPU', desc: '处理器使用率' },
  { icon: MemoryStick, label: 'Memory', desc: '内存占用' },
  { icon: HardDrive, label: 'Disk', desc: '磁盘空间' },
  { icon: Network, label: 'Network', desc: '网络状态' },
];

export function EmptyState({ onAddClick }: EmptyStateProps) {
  return (
    <div className="py-24 px-4">
      <div className="max-w-md mx-auto text-center">
        {/* Server icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-stone-100 border border-stone-200 mb-8">
          <Server className="w-7 h-7 text-stone-400" strokeWidth={1.5} />
        </div>

        <h1 className="text-xl font-display font-bold text-stone-800 mb-2">
          还没有添加服务器
        </h1>
        <p className="text-sm text-stone-500 leading-relaxed mb-8">
          在服务器上运行 Agent 后，在这里添加端点即可开始监控各项系统指标
        </p>

        <button
          onClick={onAddClick}
          className="btn-primary"
          type="button"
        >
          <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
          添加服务器
        </button>

        {/* 监控指标 */}
        <div className="mt-12 grid grid-cols-2 gap-2">
          {features.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-stone-200 text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-stone-400" strokeWidth={2} />
              </div>
              <div>
                <div className="text-xs font-semibold text-stone-700">{label}</div>
                <div className="text-[11px] text-stone-400">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmptyState;
