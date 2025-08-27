import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-8 border-t border-slate-200 dark:border-slate-800 mt-16">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        &copy; {currentYear} Paritosh Patra. All Rights Reserved.
      </p>
    </footer>
  );
};
