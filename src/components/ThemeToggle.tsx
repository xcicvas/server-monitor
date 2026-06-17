import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="btn-icon"
      type="button"
      title={isDark() ? '切换到浅色模式' : '切换到深色模式'}
    >
      {isDark() ? (
        <Sun className="w-4 h-4" strokeWidth={2} />
      ) : (
        <Moon className="w-4 h-4" strokeWidth={2} />
      )}
    </button>
  );
}
