import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

type AuthUser = {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
};

type LoginOptions = {
  redirectUrl?: string;
  initialView?: 'signup' | 'login';
};

type AuthContextValue = {
  user: AuthUser | null;
  isLoading: boolean;
  loginWithRedirect: (options?: LoginOptions) => void;
  logout: () => void;
};

const STORAGE_KEY = 'wisdom.auth.user';

const AuthContext = createContext<AuthContextValue | null>(null);

function parseStoredUser(raw: string | null): AuthUser | null {
  if (!raw) return null;

  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

function createDemoUser(initialView?: 'signup' | 'login'): AuthUser {
  const ts = Date.now();

  return {
    id: String(ts),
    email: initialView === 'signup' ? `new-learner-${ts}@example.com` : 'learner@example.com',
    firstName: initialView === 'signup' ? 'New' : 'Demo',
    lastName: 'Learner',
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setUser(parseStoredUser(localStorage.getItem(STORAGE_KEY)));
    setIsLoading(false);
  }, []);

  const loginWithRedirect = (options?: LoginOptions) => {
    const nextUser = user ?? createDemoUser(options?.initialView);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
    setUser(nextUser);

    if (options?.redirectUrl) {
      window.location.assign(options.redirectUrl);
    }
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
    window.location.assign('/');
  };

  const value = useMemo<AuthContextValue>(
    () => ({ user, isLoading, loginWithRedirect, logout }),
    [user, isLoading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
}

export type { AuthUser };
