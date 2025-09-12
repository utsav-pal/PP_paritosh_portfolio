import React from 'react';
import type { WorkExperienceItem, ProjectItem, EducationItem, SkillCategory, CertificationItem } from './types';

export const GITHUB_URL = "https://github.com/ParitoshPatra";
export const LINKEDIN_URL = "https://www.linkedin.com/in/paritosh-patra-461178284";
export const EMAIL_ADDRESS = "pparitosh955@gmail.com";
export const PHONE_NUMBER = "8600266711";
export const LOCATION = "O.F.Ambajhari, Nagpur, Maharashtra";

export const CAREER_OBJECTIVE = "Final-year electronics and VLSI enthusiast with a solid foundation in digital and analog electronics, hardware-software co-design and semiconductor technology. Actively seeking for hands-on internship opportunity to contribute to innovate hardware projects and support advancement in both society and the electronics industry. Eager to gain practical experience, enhance technical skills, and collaborate with cross-functional engineering teams in high-performance environment.";

export const WORK_EXPERIENCE_DATA: WorkExperienceItem[] = [
  {
    role: "Project Intern",
    company: "Bharat Electronics Limited (BEL)",
    location: "Pune",
    duration: "May 2025",
    tasks: [
      "Updated GUI for Bio Treat Detection using C# and .NET framework.",
      "Developed & Integrated ATmega128 with DAC using SPI protocol.",
      "Implemented UART communication for Laser Threat Detection System."
    ]
  },
  {
    role: "Summer Research Intern",
    company: "Shri Ramdeobaba College of Engineering and Management",
    location: "Nagpur",
    duration: "Jun 2024 - Jul 2024",
    tasks: [
      "A POCT-based sensor device using Raspberry Pi 4B.",
      "A robust system integrating digital image processing for measuring chemiluminescence intensity.",
      "Used OpenCV and RPi Camera Module to enhance system accuracy."
    ]
  },
  {
    role: "Embedded Systems Virtual Internship",
    company: "Microchip, AICTE",
    location: "Nagpur",
    duration: "Jan 2024 - Mar 2024",
    tasks: [
      "Gained foundational knowledge of Microchip micro controllers and their applications.",
      "Studied Advanced Embedded C programming concepts for embedded systems.",
      "Explored sensor integration techniques with many peripheral device and their control mechanisms."
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    name: "Mini Project: RISC-V Smart Attendance System",
    date: "Ongoing",
    description: [
      "Designed a biometric system using arduino and explored FPGA implementation using PicoRV32 RISC-V core on Xilinx Artix-7 (Nexys 4 DDR) by simulating core logic and running sample programs.",
      "Integrated an R307 fingerprint sensor and OLED display for fingerprint sensing and valid result display.",
      "Demonstrated efficient hardware-software co-design, parallel processing, pipelining and addressed issues in educational environment like proxy attendance, reliability and manual errors."
    ]
  },
  {
    name: "Manual Robotics, Axis'24",
    organization: "VNIT, Nagpur",
    date: "Mar 2024",
    description: [
      "Redesigned and improved the RC-controlled pick-and-drop bot to navigate a hurdled track.",
      "Participated in the competition and secured 7th position. This experience helped me learn from my mistakes and improve for future challenges."
    ]
  },
  {
    name: "Cozmoclench Competition (Zonal Level)",
    organization: "IIT Bombay, Techfest",
    date: "Oct 2023",
    description: [
      "Developed an RC-controlled pick-and-drop bot designed to complete a hurdled track.",
      "During the competition, my team and I encountered unexpected challenges, which we successfully resolved through quick problem-solving and adaptability.",
      "This experience enhanced my critical thinking and ability to make impromptu decisions, benefiting both myself and my team."
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.Tech., ECE",
    institution: "Shri Ramdeobaba College of Engineering and Management",
    board: "Nagpur",
    score: "9.15 CGPA (3rd yr)",
    duration: "Nov 2022 - Jun 2026"
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "Kendriya Vidyalaya Ambajhari",
    board: "Nagpur (CBSE)",
    score: "85.8%",
    duration: "Apr 2021 - Mar 2022"
  },
  {
    degree: "Secondary (X)",
    institution: "Kendriya Vidyalaya Ambajhari",
    board: "Nagpur (CBSE)",
    score: "95.2%",
    duration: "Apr 2019 - Mar 2020"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Java", "C", "PyPy", "SQL (MySQL)", "Assembly (8085,8086,8051)", "Verilog"]
  },
  {
    title: "Technical Skills",
    skills: ["Arduino", "Raspberry Pi", "ESP32", "RISC-V"]
  },
  {
    title: "Software Tools",
    skills: ["Kicad", "Keil uVision", "Xilinx ISE 14.7", "Xilinx Vivado", "Matlab", "Linux (Basic)", "LTspice"]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    name: "Fundamentals of Digital Design for VLSI Chip Design",
    issuer: "L&T EduTech, Coursera",
    date: "Feb 2025"
  },
  {
    name: "Blockchain: Understanding Its Uses and Implications",
    issuer: "The Linux Foundation, Edx",
    date: "Dec 2023"
  }
];

export const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25ZM19 19h-3v-4.75c0-1.4-1.2-2.5-2.5-2.5S11 12.85 11 14.25V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c2.2 0 3.9 1.8 3.9 4.1z"></path></svg>
);

export const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M1.5 4h21A1.5 1.5 0 0 1 24 5.5v13A1.5 1.5 0 0 1 22.5 20h-21A1.5 1.5 0 0 1 0 18.5v-13A1.5 1.5 0 0 1 1.5 4ZM2.25 6.8v10.4c0 .1.1.2.2.2h18.1c.1 0 .2-.1.2-.2V6.8L12.5 13a1.5 1.5 0 0 1-1 0Z"></path></svg>
);

export const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.279-.08a1.123 1.123 0 0 0 .41 1.053c.803.743 1.59 1.49 2.345 2.197a11.32 11.32 0 0 0 2.197 2.345c.345.247.74.364 1.123.41.192.02.35-.043.43-.18l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" /></svg>
);

export const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 005.16-4.242 16.975 16.975 0 002.5-7.48C20.065 5.69 16.776 2 12 2 7.224 2 3.935 5.69 3.935 10.625a16.975 16.975 0 002.5 7.48 16.975 16.975 0 005.159 4.242zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
);

export const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.106a.75.75 0 0 1 0 1.06l-1.591 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.591a.75.75 0 0 1 1.06 0ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.894 17.894a.75.75 0 0 1-1.06 0l-1.59-1.591a.75.75 0 1 1 1.06-1.06l1.591 1.59a.75.75 0 0 1 0 1.06ZM12 18a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V18.75a.75.75 0 0 1 .75-.75ZM5.106 17.894a.75.75 0 0 1 0-1.06l1.591-1.59a.75.75 0 0 1 1.06 1.06l-1.59 1.591a.75.75 0 0 1-1.06 0ZM3 12a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12ZM6.106 5.106a.75.75 0 0 1 1.06 0l1.59 1.591a.75.75 0 1 1-1.06 1.06l-1.591-1.59a.75.75 0 0 1 0-1.06Z" />
  </svg>
);

export const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69a.75.75 0 0 1 .981.981A10.503 10.503 0 0 1 18 19.5a10.5 10.5 0 0 1-10.5-10.5c0-1.25.22-2.454.622-3.572a.75.75 0 0 1 .806-.311Z" clipRule="evenodd" />
  </svg>
);

export const SystemIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M21.75 12.75a.75.75 0 0 0-1.5 0v2.25H3.75v-2.25a.75.75 0 0 0-1.5 0v2.25A1.5 1.5 0 0 0 3.75 16.5h16.5a1.5 1.5 0 0 0 1.5-1.5v-2.25ZM3 4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v6.072a2.25 2.25 0 0 1-1.12.982l-6.75 3.375a2.25 2.25 0 0 1-2.26 0l-6.75-3.375A2.25 2.25 0 0 1 3 10.572V4.5Zm1.5.75v5.322l5.72 2.86a.75.75 0 0 0 .76 0l5.72-2.86V5.25H4.5Z" />
    </svg>
);
