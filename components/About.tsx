import React from 'react';
import { Section } from './Section';
import { CAREER_OBJECTIVE } from '../constants';

export const About: React.FC = () => {
  return (
    <Section id="about" title="Career Objective">
      <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
        {CAREER_OBJECTIVE}
      </p>
    </Section>
  );
};
