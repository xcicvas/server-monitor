import { useEffect, useCallback } from 'react';

const THEME_KEY = 'server-monitor-theme';

/**
 * 在 React 渲染前（纯 JS 环境）应用主题，避免首屏闪烁。
 * 不依赖任何 React Hook，可在 main.tsx 顶层直接调用。
 */
export function initTheme(): void {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (saved === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      // 首次访问：跟随系统偏好
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      }
    }
  } catch {
    /* localStorage 不可用时忽略 */
  }
}

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

  return { isDark, toggle };
}
