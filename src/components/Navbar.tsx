import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';
import { cn } from '../utils/cn';

interface NavItem {
  name: string;
  id: string;
}

const navItems: NavItem[] = [
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Tech Stack', id: 'tech-stack' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Track active section on scroll using viewport-relative rects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Check if user has scrolled to the bottom
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }

      let currentSection = '';
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if section occupies the focal point (y = 200px) of the viewport
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = item.id;
            break;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 120) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // height of sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b',
          scrolled
            ? 'bg-[#050505]/85 border-[#ffffff]/10 backdrop-blur-md py-4'
            : 'bg-transparent border-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group text-white font-semibold tracking-wider font-mono text-sm uppercase cursor-pointer"
          >
            <Cpu className="w-4 h-4 text-[#00BFFF] transition-transform duration-500 group-hover:rotate-180" />
            <span>
              Harishankar<span className="text-[#00BFFF]"> M</span>
            </span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    'relative px-4 py-2 text-xs font-mono tracking-wide transition-colors duration-300 rounded-full cursor-pointer',
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 bg-[#00BFFF]/10 border border-[#00BFFF]/20 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Contact Button Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="relative overflow-hidden group px-4 py-2 border border-[#00BFFF]/30 rounded text-xs font-mono text-[#00BFFF] hover:text-white transition-colors duration-300 cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00BFFF] to-[#4FD1FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <span>Connect</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[73px] z-40 bg-[#050505] border-b border-[#ffffff]/10 py-6 px-8 flex flex-col gap-4 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'w-full text-left py-2 text-sm font-mono tracking-wide border-b border-[#ffffff]/5 pb-2 cursor-pointer',
                  activeSection === item.id ? 'text-[#00BFFF]' : 'text-zinc-400'
                )}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full text-center mt-2 py-2.5 border border-[#00BFFF]/50 text-xs font-mono text-[#00BFFF] rounded cursor-pointer"
            >
              Connect
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
