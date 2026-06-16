import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { TechStack } from './sections/TechStack';
import { Achievements } from './sections/Achievements';
import { Contact } from './sections/Contact';
import { CelestialSphere } from './components/ui/celestial-sphere';

const App: React.FC = () => {
  return (
    <div className="text-white min-h-screen selection:bg-[#00BFFF]/20 selection:text-[#4FD1FF] relative overflow-x-hidden bg-transparent">
      {/* Global Interactive ThreeJS WebGL Background */}
      <div className="fixed inset-0 pointer-events-none w-screen h-screen" style={{ zIndex: 0 }}>
        <div className="absolute inset-0 bg-[#050505]" />
        <CelestialSphere />
        {/* Radial vignette mask to fade the shader edges and maximize readability of text */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_75%)] pointer-events-none" />
      </div>

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
