import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Code,
  Database,
  Brain,
  Cpu,
  Layers,
  Sparkles,
  Server,
  Terminal,
  Table,
  GitBranch,
  Layout,
  Network,
  Activity,
  PieChart,
  X,
  ExternalLink,
  Briefcase,
  FolderGit2,
  Palette
} from 'lucide-react';
import { SKILLS, PROJECTS, EXPERIENCES } from '../data/portfolioData';
import { Reveal } from './Reveal';
import { Skill } from '../types';

interface MarqueeTickerProps {
  skills: Skill[];
  getIcon: (iconName: string) => React.ReactNode;
  onSelectSkill: (skill: Skill) => void;
  activeCategory: string;
}

const MarqueeTicker: React.FC<MarqueeTickerProps> = ({ skills, getIcon, onSelectSkill, activeCategory }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const posRef = useRef(0);
  const speedFactorRef = useRef(1.0);
  const lastTimeRef = useRef<number | null>(null);
  const isHoveredRef = useRef(isHovered);

  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    let rAFId: number;

    const tick = (now: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = now;
      }
      const dt = Math.min(now - lastTimeRef.current, 64);
      lastTimeRef.current = now;

      if (trackRef.current) {
        const halfWidth = trackRef.current.scrollWidth / 2;

        if (halfWidth > 0) {
          // Exactly 25 seconds (25000ms) for one full loop (halfWidth)
          const baseSpeedPxPerMs = halfWidth / 25000;

          // Smooth 300-500ms deceleration / acceleration
          const targetSpeedFactor = isHoveredRef.current ? 0 : 1;
          const easeRate = 1 - Math.exp(-dt / 120);
          speedFactorRef.current += (targetSpeedFactor - speedFactorRef.current) * easeRate;

          posRef.current += baseSpeedPxPerMs * speedFactorRef.current * dt;

          if (posRef.current >= halfWidth) {
            posRef.current = posRef.current % halfWidth;
          }

          trackRef.current.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
        }
      }

      rAFId = requestAnimationFrame(tick);
    };

    rAFId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rAFId);
      lastTimeRef.current = null;
    };
  }, [shouldReduceMotion]);

  if (skills.length === 0) return null;

  let baseSet = [...skills];
  while (baseSet.length > 0 && baseSet.length < 12) {
    baseSet = [...baseSet, ...skills];
  }
  const marqueeItems = [...baseSet, ...baseSet];

  if (shouldReduceMotion) {
    return (
      <div className="w-full py-4 border-y border-[#E2DFD8] bg-[#EFEDE8]">
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto px-4">
          {skills.map((skill, index) => (
            <button
              key={`${skill.name}-${index}`}
              onClick={() => onSelectSkill(skill)}
              className="inline-flex items-center gap-3 px-4 py-2.5 bg-[#F7F6F3] border border-[#E2DFD8] rounded-xl text-left hover:border-[#D98457]"
            >
              <div className="w-7 h-7 rounded-lg bg-[#EFEDE8] flex items-center justify-center shrink-0">
                {getIcon(skill.iconName)}
              </div>
              <span className="font-heading font-bold text-xs text-[#2D2B28]">
                {skill.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full overflow-hidden py-4 border-y border-[#E2DFD8] bg-[#EFEDE8] select-none cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div
        ref={trackRef}
        className="flex w-max will-change-transform"
        style={{ transform: 'translate3d(0,0,0)' }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="flex w-max"
          >
            {marqueeItems.map((skill, index) => (
              <button
                key={`${activeCategory}-${skill.name}-${index}`}
                onClick={() => onSelectSkill(skill)}
                className="inline-flex items-center gap-3 px-5 py-3 mx-2.5 bg-[#F7F6F3] border border-[#E2DFD8] rounded-xl shadow-2xs shrink-0 hover:border-[#D98457] hover:bg-white active:scale-95 transition-all duration-300 text-left cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-[#EFEDE8] flex items-center justify-center shrink-0">
                  {getIcon(skill.iconName)}
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-xs text-[#2D2B28] whitespace-nowrap">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#6B6862]">
                    {skill.category}
                  </span>
                </div>
              </button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedSkillModal, setSelectedSkillModal] = useState<Skill | null>(null);

  const categories = [
    'All',
    'Programming',
    'Generative AI',
    'Machine Learning',
    'Data Analysis & Visualization',
    'Databases',
    'Developer Tools'
  ];

  const filteredSkills = SKILLS.filter((s) => {
    if (activeCategory === 'All') return true;
    return s.category === activeCategory;
  });

  // Find projects and experience using selected skill
  const relatedProjects = selectedSkillModal
    ? PROJECTS.filter(p =>
        p.techStack.some(t => t.toLowerCase().includes(selectedSkillModal.name.toLowerCase())) ||
        p.description.toLowerCase().includes(selectedSkillModal.name.toLowerCase()) ||
        p.keyFeatures.some(f => f.toLowerCase().includes(selectedSkillModal.name.toLowerCase()))
      )
    : [];

  const relatedExperiences = selectedSkillModal
    ? EXPERIENCES.filter(e =>
        e.skillsUsed.some(s => s.toLowerCase().includes(selectedSkillModal.name.toLowerCase())) ||
        e.points.some(p => p.toLowerCase().includes(selectedSkillModal.name.toLowerCase()))
      )
    : [];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'python':
      case 'code':
        return <Code className="w-4 h-4 text-[#D98457]" />;
      case 'database':
        return <Database className="w-4 h-4 text-[#D98457]" />;
      case 'brain':
        return <Brain className="w-4 h-4 text-[#D98457]" />;
      case 'cpu':
        return <Cpu className="w-4 h-4 text-[#D98457]" />;
      case 'network':
        return <Network className="w-4 h-4 text-[#D98457]" />;
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-[#D98457]" />;
      case 'server':
        return <Server className="w-4 h-4 text-[#D98457]" />;
      case 'terminal':
        return <Terminal className="w-4 h-4 text-[#D98457]" />;
      case 'table':
        return <Table className="w-4 h-4 text-[#D98457]" />;
      case 'bar-chart':
      case 'activity':
        return <Activity className="w-4 h-4 text-[#D98457]" />;
      case 'pie-chart':
        return <PieChart className="w-4 h-4 text-[#D98457]" />;
      case 'layout':
        return <Layout className="w-4 h-4 text-[#D98457]" />;
      case 'palette':
        return <Palette className="w-4 h-4 text-[#D98457]" />;
      case 'git-branch':
      case 'github':
        return <GitBranch className="w-4 h-4 text-[#D98457]" />;
      default:
        return <Layers className="w-4 h-4 text-[#D98457]" />;
    }
  };

  return (
    <section id="skills" className="py-28 md:py-36 bg-[#F8F5EF] border-t border-[#E5E0D8] relative z-10 overflow-hidden">
      {/* Background Motif: Subtle Technical Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] z-0 select-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #222222 1px, transparent 1px),
            linear-gradient(to bottom, #222222 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <Reveal delay={0}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="w-12 h-[2px] bg-[#D97745] mb-6" />
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#D97745] font-semibold mb-3">
                <span>03 // COMPETENCIES & MATRIX</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#222222] tracking-tight mb-3">
                Technical Skills
              </h2>
              <p className="text-base text-[#6B6660] max-w-xl font-normal leading-relaxed">
                Core engineering proficiencies across AI systems, data science pipelines, backend services, and cloud tools.
              </p>
            </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#FFFFFF] border border-[#E5E0D8] rounded-2xl w-fit shadow-2xs">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#222222] text-white shadow-2xs'
                          : 'text-[#6B6660] hover:text-[#222222] hover:bg-[#F3EFE7]/60'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

        {/* Filtered Grid with Smooth Transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-12"
          >
            {filteredSkills.map((skill, idx) => (
              <motion.button
                key={`${skill.name}-${idx}`}
                onClick={() => setSelectedSkillModal(skill)}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: idx * 0.02 }}
                className="bg-[#FFFFFF] border border-[#E5E0D8] rounded-xl p-3.5 flex items-center gap-3 hover:border-[#D97745]/60 shadow-premium hover:shadow-premium-hover card-hover-effect hover:-translate-y-1 active:scale-95 group text-left cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-[#F8F5EF] border border-[#E5E0D8] flex items-center justify-center shrink-0 group-hover:border-[#D97745]/40 transition-colors">
                  {getIcon(skill.iconName)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-heading font-semibold text-xs text-[#222222] truncate">
                    {skill.name}
                  </div>
                  <div className="text-[10px] font-mono text-[#6B6660] truncate">
                    {skill.category}
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Infinite Filtered Marquee Ticker with Continuous Physics & Smooth Category Transitions */}
      <MarqueeTicker
        skills={filteredSkills}
        getIcon={getIcon}
        onSelectSkill={setSelectedSkillModal}
        activeCategory={activeCategory}
      />

      {/* Clicked Skill Usage Modal */}
      {selectedSkillModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-[#2D2B28]/60 backdrop-blur-xs animate-in fade-in duration-150 p-4 sm:p-6 md:p-8 flex min-h-full items-center justify-center"
          onClick={() => setSelectedSkillModal(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[#F7F6F3] border border-[#E2DFD8] rounded-2xl shadow-2xl p-6 text-[#2D2B28] my-auto focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedSkillModal(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-[#EFEDE8] hover:bg-[#E8E5DF] text-[#6B6862] hover:text-[#2D2B28] transition-colors border border-[#E2DFD8]"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#E2DFD8]">
              <div className="w-10 h-10 rounded-xl bg-[#EFEDE8] border border-[#E2DFD8] flex items-center justify-center">
                {getIcon(selectedSkillModal.iconName)}
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#D98457] font-bold block">Skill Connections</span>
                <h3 className="text-xl font-heading font-extrabold text-[#2D2B28]">{selectedSkillModal.name}</h3>
              </div>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              {/* Projects Using Skill */}
              <div>
                <h4 className="text-xs font-mono uppercase text-[#6B6862] font-bold mb-2 flex items-center gap-1.5">
                  <FolderGit2 className="w-3.5 h-3.5 text-[#D98457]" />
                  Projects Utilizing {selectedSkillModal.name}
                </h4>
                {relatedProjects.length > 0 ? (
                  <div className="space-y-2">
                    {relatedProjects.map((p) => (
                      <div key={p.id} className="bg-[#EFEDE8] border border-[#E2DFD8] rounded-xl p-3 flex justify-between items-center">
                        <div>
                          <div className="font-heading font-bold text-xs text-[#2D2B28]">{p.title}</div>
                          <div className="text-[11px] text-[#6B6862]">{p.subtitle}</div>
                        </div>
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-[#6B6862] hover:text-[#2D2B28]"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-[#6B6862] italic bg-[#EFEDE8] p-3 rounded-xl">Applied across core CS coursework and hands-on laboratory builds.</p>
                )}
              </div>

              {/* Experience Using Skill */}
              {relatedExperiences.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#6B6862] font-bold mb-2 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#D98457]" />
                    Applied in Professional Roles
                  </h4>
                  <div className="space-y-2">
                    {relatedExperiences.map((e) => (
                      <div key={e.id} className="bg-[#EFEDE8] border border-[#E2DFD8] rounded-xl p-3">
                        <div className="font-heading font-bold text-xs text-[#2D2B28]">{e.role}</div>
                        <div className="text-[11px] text-[#6B6862]">{e.company} ({e.period})</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setSelectedSkillModal(null)}
              className="w-full mt-5 py-2 bg-[#D98457] hover:bg-[#C27346] text-white text-xs font-mono rounded-xl font-semibold transition-colors shadow-2xs"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
};