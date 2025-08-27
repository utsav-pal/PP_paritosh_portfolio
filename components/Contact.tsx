import React from 'react';
import { Section } from './Section';
import { EMAIL_ADDRESS } from '../constants';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Contact">
      <div className="text-center">
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
        </p>
        <a
          href={`mailto:${EMAIL_ADDRESS}`}
          className="inline-block bg-sky-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </Section>
  );
};
