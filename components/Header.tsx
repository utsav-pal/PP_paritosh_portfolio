
import React from 'react';
import {
  GITHUB_URL,
  LINKEDIN_URL,
  EMAIL_ADDRESS,
  PHONE_NUMBER,
  LOCATION,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  LocationIcon
} from '../constants';

export const Header: React.FC = () => {
  const contactItems = [
    { href: `mailto:${EMAIL_ADDRESS}`, text: EMAIL_ADDRESS, Icon: MailIcon },
    { href: `tel:${PHONE_NUMBER}`, text: PHONE_NUMBER, Icon: PhoneIcon },
    { href: LINKEDIN_URL, text: "LinkedIn", Icon: LinkedInIcon },
    { href: GITHUB_URL, text: "GitHub", Icon: GitHubIcon },
  ];

  return (
    <header className="flex flex-col items-center text-center">
      <h1 className="text-5xl font-bold text-slate-900 dark:text-white tracking-tight">PARITOSH PATRA</h1>
      <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">{LOCATION}</p>
      
      <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
        {contactItems.map(({ href, text, Icon }) => (
          <a
            key={text}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <Icon className="w-5 h-5" />
            <span className="hidden sm:inline">{text}</span>
          </a>
        ))}
      </div>
    </header>
  );
};
