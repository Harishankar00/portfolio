import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import { GithubIcon as Github } from '../components/Icons';
import { CelestialSphere } from '../components/ui/celestial-sphere';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Grid Pattern - Subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Radial Gradient overlay to fade edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_85%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Technical Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00BFFF]/20 bg-[#00BFFF]/5 w-fit mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-[#4FD1FF] uppercase">
              System Architect & AI Engineer
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6"
          >
            Building Intelligent Systems That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#4FD1FF]">
              Learn, Adapt,
            </span>{' '}
            and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FD1FF] to-white">
              Scale.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-zinc-400 font-sans font-light max-w-xl leading-relaxed mb-8"
          >
            AI Engineer focused on machine learning, backend systems, autonomous technologies, and real-world product development.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            {/* View Projects (Primary Accent) */}
            <button
              onClick={scrollToProjects}
              className="flex items-center gap-2 group px-6 py-3 bg-white text-black font-semibold text-sm rounded transition-all duration-300 hover:bg-[#00BFFF] hover:text-black hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1CtnsADHg-ch-jg2lwbCtSGOuxHzXMvMI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 border border-zinc-800 hover:border-zinc-500 rounded text-sm text-zinc-300 hover:text-white font-mono transition-all duration-300 cursor-pointer bg-zinc-950/40"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/Harishankar00/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 border border-zinc-800 hover:border-zinc-500 rounded text-sm text-zinc-300 hover:text-white font-mono transition-all duration-300 cursor-pointer bg-zinc-950/40"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Interactive Visual System */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 h-[350px] md:h-[450px] w-full relative rounded-lg border border-zinc-900 bg-zinc-950/20 overflow-hidden"
        >
          {/* Inner Technical HUD Elements (Gives it a professional product feel) */}
          <div className="absolute top-4 left-4 z-20 pointer-events-none">
            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              SYSTEM_RENDERER // ACTIVE
            </p>
          </div>
          <div className="absolute bottom-4 right-4 z-20 pointer-events-none text-right">
            <p className="text-[10px] font-mono text-[#4FD1FF]/50 uppercase tracking-widest">
              COIMBATORE, IN
            </p>
          </div>
          <div className="absolute top-4 right-4 z-20 pointer-events-none w-2 h-2 rounded-full bg-[#00BFFF] animate-pulse" />

          {/* Interactive ThreeJS Shader Background */}
          <CelestialSphere
            hue={200.0}
            speed={0.4}
            zoom={1.2}
            particleSize={3.5}
            className="absolute inset-0 w-full h-full"
          />

          {/* Radial mask to fade the Canvas edges nicely into the UI box border */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#050505_95%)] pointer-events-none" />
          <div className="absolute inset-0 border border-zinc-900/50 pointer-events-none rounded-lg" />
        </motion.div>
      </div>
    </section>
  );
};
