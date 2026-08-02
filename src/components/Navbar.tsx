import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { FileText, Github, Linkedin, Menu, X, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty('--header-height', `${headerRef.current.offsetHeight}px`);
      }
    };
    updateHeight();
    
    const ro = new ResizeObserver(updateHeight);
    if (headerRef.current) ro.observe(headerRef.current);
    
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    let rAFId: number | null = null;

    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);

      if (progressBarRef.current) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? Math.min(1, Math.max(0, currentScroll / totalHeight)) : 0;
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }
      rAFId = null;
    };

    const handleScrollOrResize = () => {
      if (rAFId === null) {
        rAFId = requestAnimationFrame(updateScrollProgress);
      }
    };

    // Initial update
    updateScrollProgress();

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    return () => {
      if (rAFId !== null) cancelAnimationFrame(rAFId);
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const modalIsOpen = document.body.dataset.modalOpen === 'true';
    window.dispatchEvent(new CustomEvent('close-all-modals'));
    setMobileMenuOpen(false);

    if (href.startsWith('#')) {
      window.setTimeout(() => {
        const targetEl = document.getElementById(href.substring(1));
        if (targetEl) {
          const headerOffset = 80;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        window.history.pushState(null, '', href);
      }, modalIsOpen ? 210 : 0);
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F5EF]/90 backdrop-blur-2xl border-b border-[#E5E0D8]/80 py-2.5 shadow-md'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Unified Logo & Navigation Pill */}
          <div className="flex items-center bg-[#FFFFFF]/90 backdrop-blur-sm border border-[#E5E0D8]/90 p-1.5 rounded-[2rem] shadow-sm ring-1 ring-black/5">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex-none w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#222222] text-[#F8F5EF] flex items-center justify-center font-mono font-bold text-xs sm:text-sm hover:bg-[#D97745] transition-colors select-none focus:outline-none focus:ring-2 focus:ring-[#D97745]/50 active:scale-[0.98]"
            >
              SK
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-1 ml-2 relative">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 py-1.5 text-xs font-mono rounded-full transition-colors duration-200 select-none ${
                    isActive
                      ? 'text-[#222222] font-semibold'
                      : 'text-[#6B6660] hover:text-[#222222] hover:bg-[#F3EFE7]/50'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      className="absolute inset-0 bg-[#F8F5EF] rounded-full shadow-[0_2px_6px_-1px_rgba(34,34,34,0.05)] border border-[#E5E0D8]"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
            </nav>
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-1.5 shrink-0">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-[#6B6660] hover:text-[#222222] hover:bg-[#FFFFFF] btn-tactile border border-transparent hover:border-[#E5E0D8] rounded-full hover:shadow-premium"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-[#6B6660] hover:text-[#222222] hover:bg-[#FFFFFF] btn-tactile border border-transparent hover:border-[#E5E0D8] rounded-full hover:shadow-premium"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 text-[#6B6660] hover:text-[#222222] hover:bg-[#FFFFFF] btn-tactile border border-transparent hover:border-[#E5E0D8] rounded-full hover:shadow-premium"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onOpenResume();
              }}
              className="flex items-center gap-1.5 px-6 py-2.5 text-xs font-heading font-bold uppercase tracking-wider text-white bg-[#D97745] hover:bg-[#C56636] hover:-translate-y-[1px] btn-tactile rounded-full shadow-glow ml-1 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-[#222222] bg-[#FFFFFF] border border-[#E5E0D8] rounded-full active:scale-95 transition-all shrink-0 shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F5EF] border-b border-[#E5E0D8] px-4 pt-3 pb-5 space-y-2 mt-2 shadow-md">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2 text-xs font-medium rounded-lg text-left transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#FFFFFF] text-[#222222] font-bold border border-[#E5E0D8]'
                    : 'text-[#6B6660] hover:bg-[#FFFFFF]/50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E5E0D8] flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-heading font-bold uppercase tracking-wider text-white bg-[#D98457] hover:bg-[#C27346] active:scale-98 rounded-lg transition-all cursor-pointer shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      )}

      {/* Reading Progress Bar (Requirement #1) */}
      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E2DFD8]/40 overflow-hidden">
        <div
          ref={progressBarRef}
          className="h-full w-full bg-[#D98457] origin-left will-change-transform"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>
    </header>
  );
};
