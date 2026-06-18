import { useState, useCallback, useEffect } from 'react';

const AUTH_KEY = 'server-monitor-auth';

interface AuthState {
  token: string;
  username: string;
}

function loadAuth(): AuthState | null {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // 检查 JWT 是否过期
    if (!parsed.token) return null;
    try {
      const payload = JSON.parse(atob(parsed.token.split('.')[1]));
      if (payload.exp && payload.exp * 1000 < Date.now()) {
        localStorage.removeItem(AUTH_KEY);
        return null;
      }
    } catch {}
    return parsed;
  } catch {
    return null;
  }
}

export function useAuth() {
  const [auth, setAuth] = useState<AuthState | null>(() => loadAuth());

  const login = useCallback((token: string, username: string) => {
    const state = { token, username };
    localStorage.setItem(AUTH_KEY, JSON.stringify(state));
    setAuth(state);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_KEY);
    setAuth(null);
  }, []);

  return { auth, login, logout };
}
