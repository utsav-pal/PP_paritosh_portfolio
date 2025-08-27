import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { SunIcon, MoonIcon, SystemIcon } from '../constants';

export const ThemeToggle: React.FC = () => {
  const [theme, cycleTheme] = useDarkMode();
  
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <SunIcon className="w-6 h-6" />;
      case 'dark':
        return <MoonIcon className="w-6 h-6" />;
      case 'system':
        return <SystemIcon className="w-6 h-6" />;
      default:
        return null;
    }
  };
  
  const getLabel = () => {
      switch (theme) {
        case 'light':
          return 'Switch to dark mode';
        case 'dark':
          return 'Switch to system preference';
        case 'system':
          return 'Switch to light mode';
        default:
          return 'Toggle theme';
      }
  }

  return (
    <button
      onClick={cycleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/75 dark:bg-slate-800/75 backdrop-blur-sm border border-slate-900/10 dark:border-slate-50/[0.06] text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition-colors"
      aria-label={getLabel()}
    >
      {getIcon()}
    </button>
  );
};
