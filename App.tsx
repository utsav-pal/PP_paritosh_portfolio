
import React from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { WorkExperience } from './components/WorkExperience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { ThemeToggle } from './components/ThemeToggle';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen transition-colors duration-300">
        <ThemeToggle />
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
          <main className="space-y-16">
            <Header />
            <About />
            <WorkExperience />
            <Projects />
            <Education />
            <Skills />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;