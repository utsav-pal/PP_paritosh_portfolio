import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

export const useDarkMode = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(
    () => (typeof window !== 'undefined' ? (localStorage.getItem('theme') as Theme) || 'system' : 'system')
  );

  const cycleTheme = () => {
    const sequence: Theme[] = ['light', 'dark', 'system'];
    const nextIndex = (sequence.indexOf(theme) + 1) % sequence.length;
    setTheme(sequence[nextIndex]);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    
    const applyTheme = (t: Theme) => {
        const isDark = t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
        root.classList.toggle('dark', isDark);
    }
    
    applyTheme(theme);
    localStorage.setItem('theme', theme);
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const mediaListener = () => {
        if (localStorage.getItem('theme') === 'system') {
            applyTheme('system');
        }
    };
    mediaQuery.addEventListener('change', mediaListener);

    return () => mediaQuery.removeEventListener('change', mediaListener);
  }, [theme]);

  return [theme, cycleTheme];
};
