import { createContext, useContext, useState, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage('user', null);
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async ({ email, password }) => {
    setIsLoading(true);
    setAuthError('');
    await new Promise(r => setTimeout(r, 800));

    if (!email || !password) {
      setAuthError('Please fill in all fields.');
      setIsLoading(false);
      return false;
    }
    if (password.length < 6) {
      setAuthError('Password must be at least 6 characters.');
      setIsLoading(false);
      return false;
    }

    // Simulate auth success
    setUser({
      id: 'u1',
      email,
      name: email.split('@')[0],
      avatar: null,
      plan: 'free',
      joinedAt: new Date().toISOString(),
    });
    setIsLoading(false);
    return true;
  }, []);

  const signup = useCallback(async ({ name, email, password }) => {
    setIsLoading(true);
    setAuthError('');
    await new Promise(r => setTimeout(r, 1000));

    if (!name || !email || !password) {
      setAuthError('Please fill in all fields.');
      setIsLoading(false);
      return false;
    }
    if (password.length < 6) {
      setAuthError('Password must be at least 6 characters.');
      setIsLoading(false);
      return false;
    }

    setUser({
      id: 'u' + Date.now(),
      email,
      name,
      avatar: null,
      plan: 'free',
      joinedAt: new Date().toISOString(),
    });
    setIsLoading(false);
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, authError, isLoading, login, signup, logout, setAuthError }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
