
export interface WorkExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  tasks: string[];
}

export interface ProjectItem {
  name: string;
  organization?: string;
  date: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  board: string;
  score: string;
  duration: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
}
