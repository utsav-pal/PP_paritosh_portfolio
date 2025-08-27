import React from 'react';
import { Section } from './Section';
import { SKILLS_DATA } from '../constants';

export const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-6">
        {SKILLS_DATA.map((category) => (
          <div key={category.title}>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
