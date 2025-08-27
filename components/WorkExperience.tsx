import React from 'react';
import { Section } from './Section';
import { WORK_EXPERIENCE_DATA } from '../constants';
import type { WorkExperienceItem } from '../types';

const ExperienceCard: React.FC<{ item: WorkExperienceItem }> = ({ item }) => (
  <div className="mb-8 last:mb-0">
    <div className="flex justify-between items-start flex-wrap">
      <h3 className="font-bold text-lg text-slate-900 dark:text-white">{item.role} - <span className="font-semibold">{item.company}</span></h3>
      <p className="text-sm text-slate-500 dark:text-slate-400">{item.duration}</p>
    </div>
    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{item.location}</p>
    <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
      {item.tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  </div>
);

export const WorkExperience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience">
      {WORK_EXPERIENCE_DATA.map((item, index) => (
        <ExperienceCard key={index} item={item} />
      ))}
    </Section>
  );
};
