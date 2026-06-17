interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
  fill?: boolean;
  /** 是否显示危险区域（>80%）*/
  dangerThreshold?: number;
  className?: string;
}

function getColor(value: number, dangerThreshold = 80): string {
  if (value >= dangerThreshold) return '#ef4444'; // red
  if (value >= dangerThreshold * 0.75) return '#f59e0b'; // amber
  return '#22c55e'; // green
}

export function SparklineChart({
  data,
  width = 120,
  height = 40,
  color,
  fill = true,
  dangerThreshold = 80,
  className = '',
}: SparklineProps) {
  if (data.length < 2) {
    return (
      <svg width={width} height={height} className={className}>
        <line x1={0} y1={height / 2} x2={width} y2={height / 2} stroke="#e5e7eb" strokeWidth={1} strokeDasharray="3,3" />
        <text x={width / 2} y={height / 2 + 4} textAnchor="middle" fontSize={9} fill="#9ca3af">暂无数据</text>
      </svg>
    );
  }

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const stepX = width / (data.length - 1);
  const padY = 4;
  const chartH = height - padY * 2;

  const points = data.map((v, i) => ({
    x: i * stepX,
    y: padY + chartH - ((v - min) / range) * chartH,
  }));

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
  const fillPath = `${linePath} L ${points[points.length - 1].x.toFixed(1)} ${height} L 0 ${height} Z`;

  // 颜色取最新值的颜色
  const activeColor = color ?? getColor(data[data.length - 1], dangerThreshold);

  return (
    <svg width={width} height={height} className={className}>
      {fill && (
        <defs>
          <linearGradient id={`grad-spark-${className}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={activeColor} stopOpacity={0.25} />
            <stop offset="100%" stopColor={activeColor} stopOpacity={0.02} />
          </linearGradient>
        </defs>
      )}
      {fill && <path d={fillPath} fill={`url(#grad-spark-${className})`} />}
      <path d={linePath} fill="none" stroke={activeColor} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
      {/* 最新值圆点 */}
      <circle
        cx={points[points.length - 1].x}
        cy={points[points.length - 1].y}
        r={3}
        fill={activeColor}
      />
    </svg>
  );
}
