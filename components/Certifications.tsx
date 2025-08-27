import React from 'react';
import { Section } from './Section';
import { CERTIFICATIONS_DATA } from '../constants';
import type { CertificationItem } from '../types';

const CertificationCard: React.FC<{ item: CertificationItem }> = ({ item }) => (
  <div className="py-4 border-b border-slate-200 dark:border-slate-700 last:border-b-0 flex justify-between items-center flex-wrap">
    <div>
      <h3 className="font-semibold text-slate-900 dark:text-white">{item.name}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400">{item.issuer}</p>
    </div>
    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 md:mt-0">{item.date}</p>
  </div>
);

export const Certifications: React.FC = () => {
  return (
    <Section id="certifications" title="Courses">
      {CERTIFICATIONS_DATA.map((item, index) => (
        <CertificationCard key={index} item={item} />
      ))}
    </Section>
  );
};
