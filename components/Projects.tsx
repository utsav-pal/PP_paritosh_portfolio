import React from 'react';
import { Section } from './Section';
import { PROJECTS_DATA } from '../constants';
import type { ProjectItem } from '../types';

const ProjectCard: React.FC<{ item: ProjectItem }> = ({ item }) => (
  <div className="mb-8 last:mb-0">
    <div className="flex justify-between items-start flex-wrap">
       <h3 className="font-bold text-lg text-slate-900 dark:text-white">{item.name} {item.organization && <span className="font-semibold">- {item.organization}</span>}</h3>
       <p className="text-sm text-slate-500 dark:text-slate-400">{item.date}</p>
    </div>
    <ul className="list-disc pl-5 mt-2 space-y-2 text-slate-600 dark:text-slate-400">
      {item.description.map((desc, index) => (
        <li key={index}>{desc}</li>
      ))}
    </ul>
  </div>
);

export const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects & Competition">
      {PROJECTS_DATA.map((item, index) => (
        <ProjectCard key={index} item={item} />
      ))}
    </Section>
  );
};
