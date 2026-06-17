interface HealthScoreProps {
  score: number; // 0-100
  size?: number;
  strokeWidth?: number;
  className?: string;
}

function getScoreColor(score: number): string {
  if (score >= 80) return '#22c55e';
  if (score >= 50) return '#f59e0b';
  return '#ef4444';
}

function getScoreLabel(score: number): string {
  if (score >= 80) return '优秀';
  if (score >= 60) return '良好';
  if (score >= 40) return '一般';
  if (score >= 20) return '较差';
  return '危险';
}

export function HealthScore({ score, size = 72, strokeWidth = 6, className = '' }: HealthScoreProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - score / 100);
  const color = getScoreColor(score);

  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          {/* 底环 */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#f3f4f6"
            strokeWidth={strokeWidth}
          />
          {/* 进度环 */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-700 ease-out"
          />
        </svg>
        {/* 中心分数字 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="font-bold font-display leading-none transition-colors duration-500"
            style={{ fontSize: size * 0.28, color }}
          >
            {Math.round(score)}
          </span>
        </div>
      </div>
      <span className="text-[10px] font-medium" style={{ color }}>{getScoreLabel(score)}</span>
    </div>
  );
}

/**
 * 计算健康分（0-100）
 * 权重：CPU 35% + 内存 35% + 磁盘 30%
 * 每项超过阈值（默认80%）开始扣分
 */
export function calcHealthScore(metrics: {
  cpu: { usagePercent: number };
  memory: { usagePercent: number };
  disk: { usagePercent: number };
}): number {
  const cpuScore = Math.max(0, 100 - metrics.cpu.usagePercent);
  const memScore = Math.max(0, 100 - metrics.memory.usagePercent);
  const diskScore = Math.max(0, 100 - metrics.disk.usagePercent);
  return Math.round(cpuScore * 0.35 + memScore * 0.35 + diskScore * 0.30);
}
