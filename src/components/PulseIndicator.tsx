interface PulseIndicatorProps {
  status: 'online' | 'offline' | 'checking';
  className?: string;
}

export function PulseIndicator({ status, className = '' }: PulseIndicatorProps) {
  if (status === 'offline') {
    return (
      <span className={`relative inline-flex h-2.5 w-2.5 ${className}`}>
        <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
      </span>
    );
  }

  if (status === 'checking') {
    return (
      <span className={`relative inline-flex h-2.5 w-2.5 ${className}`}>
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
      </span>
    );
  }

  // online — 脉冲动画
  return (
    <span className={`relative inline-flex h-2.5 w-2.5 ${className}`}>
      <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
    </span>
  );
}
