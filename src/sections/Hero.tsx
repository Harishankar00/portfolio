import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import { GithubIcon as Github } from '../components/Icons';

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
          className="lg:col-span-5 h-[350px] md:h-[450px] w-full relative rounded-lg border border-zinc-900 bg-zinc-950/10 backdrop-blur-xs overflow-hidden flex flex-col justify-between p-6 text-left"
        >
          {/* Inner Technical HUD Elements */}
          <div className="flex justify-between items-center w-full">
            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              AMR_TELEMETRY // LIVE
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-mono text-emerald-500 uppercase tracking-widest">Connected</span>
            </div>
          </div>

          {/* Radar Scanner Visual Widget (Vector/CSS simulation) */}
          <div className="relative w-full h-48 border border-zinc-900/80 rounded bg-zinc-950/45 flex items-center justify-center overflow-hidden my-4">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:15px_15px]" />
            
            {/* Radar Sweep circle rings */}
            <div className="absolute w-40 h-40 border border-zinc-800/40 rounded-full flex items-center justify-center">
              <div className="w-28 h-28 border border-zinc-800/60 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 border border-zinc-800/80 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00BFFF]" />
                </div>
              </div>
            </div>
            
            {/* Rotating Radar sweep line */}
            <div className="absolute w-[200px] h-[200px] pointer-events-none origin-center animate-[spin_5s_linear_infinite]"
                 style={{ background: 'conic-gradient(from 0deg, transparent 40%, rgba(0, 191, 255, 0.15) 100%)' }} />
            
            {/* Detected Obstacle coordinates */}
            <span className="absolute w-1 h-1 rounded-full bg-rose-500 shadow-[0_0_6px_rgba(239,68,68,1)] top-12 left-16 animate-ping" />
            <span className="absolute w-1 h-1 rounded-full bg-[#00BFFF] shadow-[0_0_6px_rgba(0,191,255,1)] bottom-16 right-20" />
            
            {/* Trajectory vector route path */}
            <svg className="absolute inset-0 w-full h-full stroke-zinc-700/45 fill-none" viewBox="0 0 200 150">
              <path d="M 40,110 Q 90,40 140,80" strokeWidth="1" strokeDasharray="3,3" />
            </svg>
            
            <div className="absolute bottom-2 left-2 text-[8px] font-mono text-zinc-500">
              RANGE: 4.5m // RESOLUTION: 0.1m
            </div>
          </div>

          {/* Telemetry stats bottom grid */}
          <div className="grid grid-cols-3 gap-2 w-full text-[9px] font-mono text-zinc-400 border-t border-zinc-900/60 pt-4">
            <div>
              <span className="text-zinc-655 block">LOCALIZER</span>
              <span className="text-[#00BFFF]">SLAM_AMCL</span>
            </div>
            <div>
              <span className="text-zinc-655 block">LINEAR_V</span>
              <span className="text-white">0.35 m/s</span>
            </div>
            <div>
              <span className="text-zinc-655 block">ANGULAR_V</span>
              <span className="text-white">0.12 rad/s</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
