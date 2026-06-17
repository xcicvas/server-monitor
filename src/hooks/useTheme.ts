import { useEffect, useCallback } from 'react';

const THEME_KEY = 'server-monitor-theme';

export function useTheme() {
  const isDark = () => document.documentElement.classList.contains('dark');

  const applyTheme = useCallback((dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light');
    } catch {}
  }, []);

  const toggle = useCallback(() => {
    applyTheme(!isDark());
  }, [applyTheme]);

  // 初始化
  useEffect(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === 'dark') {
        document.documentElement.classList.add('dark');
      } else if (saved === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        // 自动跟随系统
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.classList.add('dark');
        }
      }
    } catch {}
  }, []);

  return { isDark, toggle };
}
