import { useCallback, useState } from 'react';

export type ThemeMode = 'dark' | 'light';

const STORAGE_KEY = 'theme';

const readStored = (): ThemeMode => {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
};

const store = (mode: ThemeMode) => {
  try {
    localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    // Storage unavailable (private mode, blocked): the choice just isn't remembered.
  }
};

export function useThemeMode(): { mode: ThemeMode; toggle: () => void } {
  const [mode, setMode] = useState<ThemeMode>(readStored);

  const toggle = useCallback(() => {
    setMode((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      store(next);
      return next;
    });
  }, []);

  return { mode, toggle };
}
