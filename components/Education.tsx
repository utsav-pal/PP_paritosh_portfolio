import React from 'react';
import { Section } from './Section';
import { EDUCATION_DATA } from '../constants';
import type { EducationItem } from '../types';

const EducationCard: React.FC<{ item: EducationItem }> = ({ item }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 py-4 border-b border-slate-200 dark:border-slate-700 last:border-b-0">
    <div>
      <h3 className="font-semibold text-slate-900 dark:text-white">{item.degree}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400">{item.institution}, {item.board}</p>
    </div>
    <div className="md:text-center">
      <p className="text-slate-600 dark:text-slate-400">{item.score}</p>
    </div>
    <div className="md:text-right">
      <p className="text-slate-500 dark:text-slate-400 text-sm">{item.duration}</p>
    </div>
  </div>
);

export const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div>
        {EDUCATION_DATA.map((item, index) => (
          <EducationCard key={index} item={item} />
        ))}
      </div>
    </Section>
  );
};
