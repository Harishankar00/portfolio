import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { TechStack } from './sections/TechStack';
import { Achievements } from './sections/Achievements';
import { Contact } from './sections/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-[#00BFFF]/20 selection:text-[#4FD1FF]">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <Achievements />
        <Contact />
      </main>

      {/* Subtle bottom border line */}
      <div className="w-full h-[1px] bg-zinc-950" />
    </div>
  );
};

export default App;
