import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-sky-600 dark:text-sky-400 mb-8">{title}</h2>
      {children}
    </section>
  );
};
