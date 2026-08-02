import React, { useState } from 'react';
import {
  Github,
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Search,
  X,
  ExternalLink,
  HelpCircle,
  Lightbulb,
  Trophy,
  Monitor,
  Smartphone,
  BarChart3,
  LayoutGrid
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { Reveal } from './Reveal';
import { Modal } from './Modal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeGalleryTab, setActiveGalleryTab] = useState<'desktop' | 'feature' | 'analytics' | 'mobile'>('desktop');

  const categories = ['All', 'AI / NLP', 'Machine Learning', 'Data Science', 'Python', 'Web Applications'];

  const filteredProjects = PROJECTS.filter((p) => {
    // Filter Category matching
    const matchesCategory =
      activeFilter === 'All'
        ? true
        : activeFilter === 'Python'
        ? p.techStack.includes('Python')
        : activeFilter === 'Machine Learning'
        ? p.category === 'AI / NLP' || p.techStack.some((t) => t.toLowerCase().includes('learning') || t.toLowerCase().includes('scikit'))
        : p.category === activeFilter;

    // Search query matching
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      query === '' ||
      p.title.toLowerCase().includes(query) ||
      p.subtitle.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.techStack.some((t) => t.toLowerCase().includes(query)) ||
      p.keyFeatures.some((f) => f.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const galleryTabs: { id: 'desktop' | 'feature' | 'analytics' | 'mobile'; label: string; icon: React.ReactNode }[] = [
    { id: 'desktop', label: 'Desktop View', icon: <Monitor className="w-3.5 h-3.5" /> },
    { id: 'feature', label: 'Feature View', icon: <LayoutGrid className="w-3.5 h-3.5" /> },
    { id: 'analytics', label: 'Analytics View', icon: <BarChart3 className="w-3.5 h-3.5" /> },
    { id: 'mobile', label: 'Mobile View', icon: <Smartphone className="w-3.5 h-3.5" /> },
  ];

  const renderGalleryView = (project: Project, tab: 'desktop' | 'feature' | 'analytics' | 'mobile') => {
    switch (tab) {
      case 'desktop':
        return (
          <div className="bg-[#2D2B28] rounded-xl p-4 sm:p-5 text-[#EFEDE8] font-mono text-xs border border-[#E2DFD8] shadow-inner space-y-3">
            <div className="flex items-center justify-between border-b border-[#45433F] pb-2.5">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D98457]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B9BEC7]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6B6862]"></span>
                </div>
                <span className="text-xs text-[#B9BEC7] ml-2 font-sans font-semibold">{project.title} — Desktop Interface</span>
              </div>
              <span className="text-[10px] text-[#D98457] bg-[#D98457]/15 px-2 py-0.5 rounded border border-[#D98457]/30">
                Primary Dashboard
              </span>
            </div>
            <div className="bg-[#383632] p-4 rounded-lg space-y-2 border border-[#45433F]">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#D98457] font-bold">{project.subtitle}</span>
                <span className="text-[#B9BEC7]">{project.category}</span>
              </div>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">{project.description}</p>
            </div>
          </div>
        );

      case 'feature':
        return (
          <div className="bg-[#2D2B28] rounded-xl p-4 sm:p-5 text-[#EFEDE8] font-mono text-xs border border-[#E2DFD8] shadow-inner space-y-3">
            <div className="flex items-center justify-between border-b border-[#45433F] pb-2.5">
              <span className="text-xs text-[#D98457] font-bold uppercase tracking-wider">Feature Breakdown</span>
              <span className="text-[10px] text-[#B9BEC7]">Core Engineering Modules</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-sans">
              {project.keyFeatures.map((feature, i) => (
                <div key={i} className="bg-[#383632] p-3 rounded-lg border border-[#45433F] text-xs">
                  <span className="text-[#D98457] font-mono font-bold block mb-1">MODULE #0{i + 1}</span>
                  <p className="text-zinc-200">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="bg-[#2D2B28] rounded-xl p-4 sm:p-5 text-[#EFEDE8] font-mono text-xs border border-[#E2DFD8] shadow-inner space-y-3">
            <div className="flex items-center justify-between border-b border-[#45433F] pb-2.5">
              <span className="text-xs text-[#B9BEC7] font-bold">Metrics & Performance Benchmarks</span>
              <span className="text-[10px] font-bold text-[#D98457]">Evaluated Outcome</span>
            </div>
            <div className="bg-[#383632] p-4 rounded-lg space-y-3 font-sans border border-[#45433F]">
              <div className="text-xs text-zinc-200">
                <strong className="text-[#D98457] font-mono block mb-1">MEASURABLE RESULT:</strong>
                {project.caseStudy.results}
              </div>
              <div className="text-xs text-zinc-300 border-t border-[#45433F] pt-2">
                <strong className="text-[#B9BEC7] font-mono block mb-1">ARCHITECTURE PERFORMANCE:</strong>
                {project.caseStudy.technicalArchitecture}
              </div>
            </div>
          </div>
        );

      case 'mobile':
        return (
          <div className="bg-[#2D2B28] rounded-xl p-4 sm:p-5 text-[#EFEDE8] font-mono text-xs border border-[#E2DFD8] shadow-inner flex justify-center">
            <div className="w-full max-w-xs bg-[#383632] border border-[#45433F] rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-[#45433F] pb-2">
                <span className="text-[10px] text-[#D98457] font-bold">MOBILE VIEWPORT</span>
                <span className="text-[9px] text-zinc-400">100% Responsive</span>
              </div>
              <div className="text-xs text-white font-heading font-bold">{project.title}</div>
              <p className="text-[11px] text-zinc-300 font-sans">{project.subtitle}</p>
              <div className="bg-[#2D2B28] p-2.5 rounded-lg border border-[#45433F] text-[10px] text-zinc-400">
                Touch targets & layout verified for mobile access.
              </div>
            </div>
          </div>
        );
    }
  };

  // Render SVG UI mockups matching the 3 verified projects from resume
  const renderProjectMockup = (projectId: string) => {
    switch (projectId) {
      case 'talentforge':
        return (
          <div className="bg-[#2D2B28] rounded-xl p-4 text-[#EFEDE8] font-mono text-xs border border-[#E2DFD8] shadow-xs select-none group-hover:scale-[1.02] transition-transform duration-500 ease-out">
            <div className="flex items-center justify-between border-b border-[#45433F] pb-2 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D98457]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#B9BEC7]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#6B6862]"></span>
                <span className="text-[11px] text-[#B9BEC7] ml-2">TalentForge — AI Candidate Matcher</span>
              </div>
              <span className="text-[10px] text-[#D98457] bg-[#D98457]/10 px-2 py-0.5 rounded border border-[#D98457]/30">TF-IDF & MySQL</span>
            </div>
            <div className="space-y-2.5">
              <div className="bg-[#383632] p-2.5 rounded-lg flex items-center justify-between border border-[#45433F]">
                <div>
                  <div className="text-white font-semibold text-xs">AI / Data Science Candidate #01</div>
                  <div className="text-[10px] text-[#B9BEC7]">Skills: Python, NLP, scikit-learn, MySQL</div>
                </div>
                <div className="text-right">
                  <span className="text-[#D98457] font-bold text-sm">94.8%</span>
                  <div className="text-[9px] text-[#B9BEC7]">Resume Match</div>
                </div>
              </div>
              <div className="bg-[#383632]/60 p-2.5 rounded-lg flex items-center justify-between border border-[#45433F]/60">
                <div>
                  <div className="text-zinc-300 font-medium text-xs">Flask Backend Applicant #02</div>
                  <div className="text-[10px] text-zinc-400">Skills: Python, Flask, REST API, SQL</div>
                </div>
                <div className="text-right">
                  <span className="text-[#B9BEC7] font-bold text-sm">88.2%</span>
                  <div className="text-[9px] text-zinc-400">Resume Match</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'digital-addressing-system':
        return (
          <div className="bg-[#2D2B28] rounded-xl p-4 text-[#EFEDE8] font-mono text-xs border border-[#E2DFD8] shadow-xs select-none group-hover:scale-[1.02] transition-transform duration-500 ease-out">
            <div className="flex items-center justify-between border-b border-[#45433F] pb-2 mb-3">
              <div className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#D98457]" />
                <span className="text-[11px] text-[#EFEDE8]">QR Location Encoder & Parser</span>
              </div>
              <span className="text-[10px] text-[#D98457] bg-[#D98457]/10 px-2 py-0.5 rounded border border-[#D98457]/30">100% Accuracy</span>
            </div>
            <div className="space-y-2 font-sans">
              <div className="bg-[#383632] p-2.5 rounded-lg text-xs text-zinc-200 border border-[#45433F]">
                <span className="text-[#D98457] font-mono font-bold block mb-1">ENCODED LOCATION DATA:</span>
                "Loc: MRCET Tech Campus, Jubilee Hills, Hyderabad — Lat: 17.3850, Long: 78.4867"
              </div>
              <div className="bg-[#D98457]/15 p-2.5 rounded-lg text-xs border border-[#D98457]/30 text-[#EFEDE8]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#D98457] font-mono font-semibold">VALIDATION STATUS:</span>
                  <span className="text-[10px] text-[#B9BEC7] font-mono">Cross-Device Tested</span>
                </div>
                <p className="text-[11px] text-zinc-300 leading-normal">
                  QR validation passed. Seamless responsive layout verified on 3 mobile & desktop target device profiles.
                </p>
              </div>
            </div>
          </div>
        );

      case 'personal-fitness-tracker':
        return (
          <div className="bg-[#2D2B28] rounded-xl p-4 text-[#EFEDE8] font-mono text-xs border border-[#E2DFD8] shadow-xs select-none group-hover:scale-[1.02] transition-transform duration-500 ease-out">
            <div className="flex items-center justify-between border-b border-[#45433F] pb-2 mb-3">
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#D98457]" />
                <span className="text-[11px] text-[#EFEDE8]">Fitness Activity Analytics</span>
              </div>
              <span className="text-[10px] text-[#D98457] bg-[#D98457]/10 px-2 py-0.5 rounded border border-[#D98457]/30">30+ Test Users</span>
            </div>
            <div className="space-y-2 font-sans">
              <div className="bg-[#383632] p-2.5 rounded-lg border border-[#45433F] flex justify-between items-center text-xs">
                <div>
                  <span className="text-white font-bold block">Daily Goal Completion</span>
                  <span className="text-[10px] text-[#B9BEC7]">Monitored Activity Logs</span>
                </div>
                <span className="text-[#D98457] font-mono font-bold text-sm">94.2%</span>
              </div>
              <div className="bg-[#383632]/60 p-2 rounded-lg border border-[#45433F]/50 text-[11px] text-zinc-300 flex justify-between">
                <span>AICTE Certificate of Merit</span>
                <span className="text-[#D98457] font-mono font-semibold">Verified Proof</span>
              </div>
            </div>
          </div>
        );

      case 'estateflow-ai':
      default:
        return (
          <div className="bg-[#2D2B28] rounded-xl p-4 text-[#EFEDE8] font-mono text-xs border border-[#E2DFD8] shadow-xs select-none group-hover:scale-[1.02] transition-transform duration-500 ease-out">
            <div className="flex items-center justify-between border-b border-[#45433F] pb-2 mb-3">
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#D98457]" />
                <span className="text-[11px] text-[#EFEDE8]">EstateFlow Valuation Engine</span>
              </div>
              <span className="text-[10px] text-[#B9BEC7]">ML Predictive Vector</span>
            </div>
            <div className="space-y-1.5 font-sans">
              <div className="flex justify-between items-center text-[11px] p-2 bg-[#383632] rounded border border-[#45433F]">
                <span className="font-semibold text-white">Estimated Property Valuation</span>
                <span className="text-[#D98457] font-mono font-bold">±2.4% Margin</span>
              </div>
              <div className="flex justify-between items-center text-[11px] p-2 bg-[#383632]/60 rounded border border-[#45433F]/50">
                <span className="text-zinc-300">Market Trend Index</span>
                <span className="text-[#B9BEC7] font-mono font-bold">Predictive AI</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-28 md:py-36 bg-[#F8F5EF] border-t border-[#E5E0D8] relative z-10 overflow-hidden">
      {/* Background Motif: Faint Dot Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-0 select-none"
        style={{
          backgroundImage: 'radial-gradient(#222222 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <Reveal delay={0}>
          <div className="flex flex-col gap-6 mb-12">
            <div>
              <div className="w-12 h-[2px] bg-[#D97745] mb-6" />
              <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-[#D97745] font-extrabold mb-3">
                <span>02 // REPOSITORIES & ENGINEERING</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#111111] tracking-tighter mb-3">
                Featured Projects
              </h2>
              <p className="text-base sm:text-lg text-[#6B6660] max-w-2xl font-normal leading-relaxed">
                Real-world AI applications, vector search architectures, and statistical software systems focused on performance.
              </p>
            </div>

            {/* Controls: Search + Filter Pills */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
              {/* Instant Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-[#6B6660] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects by tech (e.g., Python, RAG, MySQL)..."
                  className="w-full pl-10 pr-9 py-2 bg-[#FFFFFF] border border-[#E5E0D8] focus:border-[#D97745] rounded-full text-xs font-medium text-[#222222] placeholder-[#A09A90] focus:outline-none transition-all shadow-sm ring-1 ring-black/5"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#6B6660] hover:text-[#222222]"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center p-1 bg-[#FFFFFF] border border-[#E5E0D8] rounded-2xl w-fit shadow-sm ring-1 ring-black/5 gap-1">
                {categories.map((filter) => {
                  const isActive = activeFilter === filter;
                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveFilter(filter)}
                      className={`px-4 py-2 rounded-xl text-[11px] font-mono transition-all cursor-pointer flex items-center justify-center leading-none ${
                        isActive
                          ? 'bg-[#222222] text-white font-bold shadow-sm'
                          : 'text-[#6B6660] hover:text-[#222222] hover:bg-[#F3EFE7]/60 font-medium'
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Project List */}
        <div className="space-y-10">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={0.1 + idx * 0.1}>
              <div
                onClick={() => {
                  setSelectedProject(project);
                  setActiveGalleryTab('desktop');
                }}
                className="w-full text-left bg-[#FFFFFF] border border-[#E5E0D8] rounded-3xl p-6 sm:p-8 hover:border-[#D97745]/40 shadow-premium hover:shadow-premium-hover card-hover-effect hover:-translate-y-2 group cursor-pointer block"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Visual Mockup Column */}
                  <div className="lg:col-span-5 order-2 lg:order-1">
                    {renderProjectMockup(project.id)}
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#D97745] bg-[#D97745]/10 px-2.5 py-0.5 rounded-full border border-[#D97745]/20">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#111111] tracking-tighter group-hover:text-[#D97745] transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-sm font-medium text-[#6B6660] mt-1 block">
                          {project.subtitle}
                        </span>
                      </div>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 text-[#6B6660] hover:text-[#222222] hover:bg-[#F8F5EF] btn-tactile border border-[#E5E0D8] rounded-full shrink-0 shadow-sm hover:shadow-premium"
                        aria-label="View on GitHub"
                        title="View Repository on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>

                    {/* Description */}
                    <p className="text-base text-[#55524D] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="pt-1">
                      <ul className="space-y-2 text-xs sm:text-sm text-[#55524D]">
                        {project.keyFeatures.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#D97745] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack & Case Study Trigger */}
                    <div className="pt-4 border-t border-[#E5E0D8] flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[11px] font-mono bg-[#FFFFFF] shadow-sm border border-[#E5E0D8] text-[#222222] rounded-lg font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D97745] hover:bg-[#C56636] text-white rounded-full text-xs font-mono font-medium shadow-glow btn-tactile hover:-translate-y-[1px] cursor-pointer">
                        <span>View Deep Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        ariaLabel={selectedProject ? `Case Study: ${selectedProject.title}` : 'Project Dialog'}
      >
        {selectedProject && (
          <>
            {/* Minimal Top Navigation Header (Sticky & Always Visible) */}
            <div className="px-4 sm:px-6 py-3 sm:py-3.5 border-b border-[#E2DFD8] bg-[#EFEDE8] flex items-center justify-between gap-3 shrink-0 z-20 sticky top-0">
              <div className="flex items-center gap-2.5 overflow-hidden min-w-0">
                <div className="text-xs font-mono font-bold text-[#D98457] uppercase tracking-wider truncate">
                  {selectedProject.category}
                </div>
                <span className="text-[#B5B0A6]">•</span>
                <div className="text-xs font-mono font-bold text-[#6B6862] uppercase tracking-wider shrink-0">
                  Case Study
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 shrink-0 z-30">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F7F6F3] hover:bg-white text-[#2D2B28] border border-[#E2DFD8] rounded-xl text-xs font-mono font-bold transition-all shadow-2xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repo</span>
                  <ExternalLink className="w-3 h-3 text-[#6B6862]" />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl bg-[#FAF8F5] hover:bg-white text-[#6B6862] hover:text-[#2D2B28] transition-colors border border-[#E2DFD8] cursor-pointer shrink-0"
                  aria-label="Close project case study dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Vertical Story Case Study Stage */}
            <div
              className="flex-1 min-h-0 bg-[#FAF8F5] overflow-y-auto px-5 sm:px-10 py-6 sm:py-8 custom-scrollbar"
              data-lenis-prevent="true"
              data-modal-scroll
              tabIndex={0}
            >
              <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
                {/* Title & Headline Header */}
                <div>
                  <h1 className="text-2xl sm:text-3xl font-heading font-bold text-[#111111] tracking-tighter mb-1.5">
                    {selectedProject.title}
                  </h1>
                  <p className="text-sm sm:text-base text-[#6B6862] font-medium leading-relaxed">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* HERO SCREENSHOT / GALLERY VIEW */}
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono uppercase text-[#D98457] font-bold tracking-wider">
                      Interactive Interface Preview
                    </span>

                    {/* Viewport Tabs */}
                    <div className="flex items-center gap-1 p-1 bg-[#EFEDE8] border border-[#E2DFD8] rounded-xl">
                      {galleryTabs.map((tab) => {
                        const isActive = activeGalleryTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActiveGalleryTab(tab.id)}
                            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                              isActive
                                ? 'bg-[#2D2B28] text-white shadow-xs'
                                : 'text-[#6B6862] hover:text-[#2D2B28]'
                            }`}
                          >
                            {tab.icon}
                            <span>{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Hero Container */}
                  <div className="w-full bg-[#EFECE6] border border-[#E2DFD8] rounded-2xl p-2 sm:p-3 shadow-sm">
                    {renderGalleryView(selectedProject, activeGalleryTab)}
                  </div>
                </div>

                {/* Executive Overview */}
                <div className="pt-2">
                  <h2 className="text-xs font-mono uppercase text-[#D98457] font-bold tracking-wider mb-2">
                    Project Abstract & Overview
                  </h2>
                  <p className="text-base text-[#2D2B28] leading-relaxed font-normal">
                    {selectedProject.caseStudy.overview}
                  </p>
                </div>

                {/* Problem Statement vs Engineering Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#E2DFD8]">
                  <div>
                    <h2 className="text-xs font-mono uppercase text-[#D98457] font-bold tracking-wider mb-2 flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4" />
                      <span>Problem Statement</span>
                    </h2>
                    <p className="text-sm text-[#55524D] leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xs font-mono uppercase text-[#D98457] font-bold tracking-wider mb-2 flex items-center gap-1.5">
                      <Lightbulb className="w-4 h-4" />
                      <span>Engineering Solution</span>
                    </h2>
                    <p className="text-sm text-[#55524D] leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Technical Architecture & Challenges */}
                <div className="pt-4 border-t border-[#E2DFD8] space-y-6">
                  <div>
                    <h2 className="text-xs font-mono uppercase text-[#D98457] font-bold tracking-wider mb-2 flex items-center gap-1.5">
                      <Cpu className="w-4 h-4" />
                      <span>Technical Architecture</span>
                    </h2>
                    <p className="text-sm text-[#55524D] leading-relaxed">
                      {selectedProject.caseStudy.technicalArchitecture}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-mono uppercase text-[#6B6862] font-bold tracking-wider mb-3">
                      Key Engineering Challenges & Solutions
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.caseStudy.keyChallenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-[#55524D] leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D98457] mt-2 shrink-0" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Measurable Impact & Outcome */}
                <div className="pt-4 border-t border-[#E2DFD8]">
                  <h2 className="text-xs font-mono uppercase text-[#D98457] font-bold tracking-wider mb-2 flex items-center gap-1.5">
                    <Trophy className="w-4 h-4" />
                    <span>Measurable Performance Impact</span>
                  </h2>
                  <p className="text-base font-extrabold text-[#2D2B28] leading-relaxed">
                    {selectedProject.caseStudy.results}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-[#E2DFD8]">
                  <h2 className="text-xs font-mono uppercase text-[#6B6862] font-bold tracking-wider mb-3">
                    Technologies & Tools
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#EFEDE8] border border-[#E2DFD8] text-[#2D2B28] rounded-lg text-xs font-mono font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Final Actions */}
                <div className="pt-6 border-t border-[#E2DFD8] flex flex-wrap items-center gap-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#222222] hover:bg-[#111111] text-white rounded-full text-xs font-mono font-bold transition-all shadow-md flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Full Source Code on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#D98457]" />
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
};