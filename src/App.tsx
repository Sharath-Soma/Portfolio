import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
const Projects = React.lazy(() => import("./components/Projects").then(m => ({ default: m.Projects })));
const Skills = React.lazy(() => import("./components/Skills").then(m => ({ default: m.Skills })));
const Experience = React.lazy(() => import("./components/Experience").then(m => ({ default: m.Experience })));
const Education = React.lazy(() => import("./components/Education").then(m => ({ default: m.Education })));
const Certifications = React.lazy(() => import("./components/Certifications").then(m => ({ default: m.Certifications })));
const Achievements = React.lazy(() => import("./components/Achievements").then(m => ({ default: m.Achievements })));
const Contact = React.lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const Footer = React.lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));
const ResumeModal = React.lazy(() => import("./components/ResumeModal").then(m => ({ default: m.ResumeModal })));
import { LoadingScreen } from './components/LoadingScreen';
import { BlueprintBackground } from './components/BlueprintBackground';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const lenisRef = useRef<Lenis | null>(null);

  // Listen for modal-closed events to resize lenis
  useEffect(() => {
    const handler = () => {
      lenisRef.current?.resize();
    };
    window.addEventListener("modal-closed", handler);
    return () => {
      window.removeEventListener("modal-closed", handler);
    };
  }, []);

  // Initialize Lenis smooth scroll engine
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: false,
      duration: 1,
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: 1,
    });



    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Pause / resume Lenis when body scroll is locked or modal is open
  useEffect(() => {
    const checkScrollLock = () => {
      const isLocked = document.body.style.overflow === 'hidden';
      if (isLocked) {
        lenisRef.current?.stop();
      } else {
        lenisRef.current?.start();
      }
    };

    // Initial check
    checkScrollLock();

    const observer = new MutationObserver(() => {
      checkScrollLock();
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });

    return () => {
      observer.disconnect();
    };
  }, [resumeOpen]);

  const handleOpenResume = () => {
    setResumeOpen(true);
  };

  // A narrow observer band prevents navigation from bouncing between sections.
  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'certifications', 'achievements', 'contact'];
    const sectionElements = sections.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    if (sectionElements.length === 0) return;

    let rAFId: number | null = null;

    const observer = new IntersectionObserver(
      () => {
        if (rAFId === null) {
          rAFId = requestAnimationFrame(() => {
            const marker = window.innerHeight * 0.35;
            const bestSection = sectionElements.find((element) => {
              const rect = element.getBoundingClientRect();
              return rect.top <= marker && rect.bottom > marker;
            })?.id ?? sectionElements.reduce((nearest, element) => {
              const currentDistance = Math.abs(element.getBoundingClientRect().top - marker);
              const nearestDistance = Math.abs(nearest.getBoundingClientRect().top - marker);
              return currentDistance < nearestDistance ? element : nearest;
            }, sectionElements[0]).id;

            setActiveSection((previous) => (previous === bestSection ? previous : bestSection));

            rAFId = null;
          });
        }
      },
      {
        root: null,
        rootMargin: '-35% 0px -64% 0px',
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      if (rAFId !== null) cancelAnimationFrame(rAFId);
      observer.disconnect();
    };
  }, []);

  // Keyboard shortcut listener: Cmd+K / Ctrl+K opens resume modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setResumeOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="bg-[#F8F5EF] text-[#222222] min-h-screen font-sans selection:bg-[#D97745]/15 selection:text-[#222222] relative overflow-hidden">
      {/* 0. Subtle Engineering Blueprint & Ambient Background Layer */}
      <BlueprintBackground />

      {/* 1. Minimal Initial Loading Screen (Max 1s) */}
      <LoadingScreen />

      {/* Sticky Top Navbar */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={handleOpenResume}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="w-full">
        <Hero onOpenResume={handleOpenResume} />
        <About />
        <React.Suspense fallback={<div className="py-20 text-center text-[#6B6660]">Loading section...</div>}>
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Certifications />
          <Achievements />
          <Contact />
        </React.Suspense>
      </main>

      {/* Footer */}
      <React.Suspense fallback={null}>
        <Footer onOpenResume={handleOpenResume} />
      </React.Suspense>

      {/* Interactive Resume View & Copy Modal */}
      <React.Suspense fallback={null}>
        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />
      </React.Suspense>
    </div>
  );
}

