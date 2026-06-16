import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import { GithubIcon as Github } from '../components/Icons';

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-11.2 11.2a1.376 1.376 0 0 0 0 1.943l1.943 1.943a1.376 1.376 0 0 0 1.943 0l9.257-9.257c.256-.256.672-.256.928 0l2.304 2.304a.656.656 0 0 1 0 .928l-8.704 8.704a2.048 2.048 0 0 1-2.896 0L5.76 15.68a.656.656 0 0 0-.928 0l-1.92 1.92a1.376 1.376 0 0 0 0 1.943l4.608 4.608a2.736 2.736 0 0 0 3.872 0l11.2-11.2a1.376 1.376 0 0 0 0-1.943L20.672.414A1.374 1.374 0 0 0 19.712 0h-6.229z" />
  </svg>
);

const HackerRankIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M12 0a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm3.8 16.5h-1.6v-3.2H9.8v3.2H8.2V7.5h1.6v3.2h4.4V7.5h1.6v9z" />
  </svg>
);

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

      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full flex flex-col items-center justify-center text-center relative z-10">
        
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
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 text-center max-w-3xl"
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
          className="text-base md:text-lg text-zinc-400 font-sans font-light max-w-xl leading-relaxed mb-8 text-center mx-auto"
        >
          AI Engineer focused on machine learning, backend systems, autonomous technologies, and real-world product development.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {/* View Projects (Primary Accent) */}
          <button
            onClick={scrollToProjects}
            className="flex items-center gap-2 group px-5 py-3 bg-white text-black font-semibold text-sm rounded transition-all duration-300 hover:bg-[#00BFFF] hover:text-black hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1CtnsADHg-ch-jg2lwbCtSGOuxHzXMvMI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 border border-zinc-800 hover:border-zinc-500 rounded text-sm text-zinc-300 hover:text-white font-mono transition-all duration-300 cursor-pointer bg-zinc-950/40"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/Harishankar00/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 border border-zinc-800 hover:border-zinc-500 rounded text-sm text-zinc-300 hover:text-white font-mono transition-all duration-300 cursor-pointer bg-zinc-950/40"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          {/* LeetCode Button */}
          <a
            href="https://leetcode.com/u/Harishankar_M/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 border border-zinc-800 hover:border-zinc-500 rounded text-sm text-zinc-300 hover:text-white font-mono transition-all duration-300 cursor-pointer bg-zinc-950/40"
          >
            <LeetCodeIcon />
            <span>LeetCode</span>
          </a>

          {/* HackerRank Button */}
          <a
            href="https://www.hackerrank.com/profile/harishankar00"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 border border-zinc-800 hover:border-zinc-500 rounded text-sm text-zinc-300 hover:text-white font-mono transition-all duration-300 cursor-pointer bg-zinc-950/40"
          >
            <HackerRankIcon />
            <span>HackerRank</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
