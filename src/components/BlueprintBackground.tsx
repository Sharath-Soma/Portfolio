import React from 'react';

export const BlueprintBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* ------------------------------------------------------------- */}
      {/* LAYER 1: ATMOSPHERIC RADIAL GRADIENTS & DEPTH                 */}
      {/* ------------------------------------------------------------- */}
      {/* Hero Atmosphere (Top Left / Center) */}
      <div 
        className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[1200px] h-[750px] rounded-full opacity-[0.06] blur-[220px]"
        style={{
          background: 'radial-gradient(circle at 40% 40%, #D97745 0%, #E5E0D8 60%, transparent 100%)',
        }}
      />

      {/* Projects & Skills Section Atmosphere (Mid Right) */}
      <div 
        className="absolute top-[1600px] right-[-100px] w-[950px] h-[950px] rounded-full opacity-[0.07] blur-[260px]"
        style={{
          background: 'radial-gradient(circle, #EAE5DD 0%, #D97745 40%, transparent 75%)',
        }}
      />

      {/* Experience & Certifications Section Atmosphere (Mid Left) */}
      <div 
        className="absolute top-[3200px] left-[-200px] w-[900px] h-[900px] rounded-full opacity-[0.06] blur-[240px]"
        style={{
          background: 'radial-gradient(circle, #EAE5DD 0%, #D97745 35%, transparent 70%)',
        }}
      />

      {/* Contact Section Atmosphere (Bottom Center) */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] rounded-full opacity-[0.06] blur-[200px]"
        style={{
          background: 'radial-gradient(circle at 50% 60%, #D97745 0%, #E5E0D8 50%, transparent 80%)',
        }}
      />

      {/* ------------------------------------------------------------- */}
      {/* LAYER 2: SUBTLE MONOCHROME PAPER TEXTURE NOISE                */}
      {/* ------------------------------------------------------------- */}
      <div 
        className="absolute inset-0 opacity-[0.018] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ------------------------------------------------------------- */}
      {/* LAYER 3: FULL-PAGE ARCHITECTURAL DRAFTING GRID               */}
      {/* ------------------------------------------------------------- */}
      <div 
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #222222 1px, transparent 1px),
            linear-gradient(to bottom, #222222 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Secondary Finer Sub-Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #222222 1px, transparent 1px),
            linear-gradient(to bottom, #222222 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      {/* ------------------------------------------------------------- */}
      {/* LAYER 4: SECTION-SPECIFIC LARGE ENGINEERING GEOMETRIES        */}
      {/* ------------------------------------------------------------- */}
      <div className="relative w-full h-full max-w-7xl mx-auto opacity-[0.05] stroke-[#222222] fill-none">
        
        {/* HERO SECTION GEOMETRY (Top 0px - 900px) */}
        <svg className="absolute top-12 right-0 w-[700px] h-[700px] hidden md:block" viewBox="0 0 700 700">
          <circle cx="350" cy="350" r="320" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="350" cy="350" r="240" strokeWidth="1" />
          <circle cx="350" cy="350" r="160" strokeWidth="0.75" strokeDasharray="3 3" />
          <circle cx="350" cy="350" r="80" strokeWidth="1" />
          <line x1="350" y1="0" x2="350" y2="700" strokeWidth="0.75" />
          <line x1="0" y1="350" x2="700" y2="350" strokeWidth="0.75" />
          <line x1="100" y1="100" x2="600" y2="600" strokeWidth="0.5" strokeDasharray="2 4" />
          <line x1="100" y1="600" x2="600" y2="100" strokeWidth="0.5" strokeDasharray="2 4" />
          <text x="360" y="340" fill="#222222" fontSize="12" fontFamily="monospace" stroke="none">ORIGIN_0.0</text>
        </svg>

        {/* ABOUT SECTION GEOMETRY (Mid 900px - 1800px) */}
        <svg className="absolute top-[1050px] left-4 w-full h-[500px]" viewBox="0 0 1200 500">
          <rect x="50" y="40" width="1100" height="420" rx="16" strokeWidth="1" strokeDasharray="8 8" />
          <line x1="50" y1="250" x2="1150" y2="250" strokeWidth="0.75" />
          <line x1="600" y1="40" x2="600" y2="460" strokeWidth="0.75" />
          <circle cx="600" cy="250" r="120" strokeWidth="1" />
          <circle cx="50" cy="40" r="8" fill="#D97745" stroke="none" />
          <circle cx="1150" cy="40" r="8" fill="#D97745" stroke="none" />
          <circle cx="50" cy="460" r="8" fill="#D97745" stroke="none" />
          <circle cx="1150" cy="460" r="8" fill="#D97745" stroke="none" />
          <text x="65" y="30" fill="#222222" fontSize="11" fontFamily="monospace" stroke="none">|&lt;-- BOUNDS: 1280px --&gt;|</text>
        </svg>

        {/* PROJECTS SECTION TOPOLOGY GRAPH (Mid 1800px - 3000px) */}
        <svg className="absolute top-[2100px] left-0 w-full h-[700px]" viewBox="0 0 1200 700">
          <path d="M 100 150 Q 300 50 600 250 T 1100 350" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M 100 450 Q 400 600 700 350 T 1100 150" strokeWidth="1.5" />
          <circle cx="100" cy="150" r="12" fill="#D97745" stroke="none" />
          <circle cx="600" cy="250" r="16" />
          <circle cx="1100" cy="350" r="12" fill="#D97745" stroke="none" />
          <circle cx="400" cy="600" r="10" />
          <circle cx="700" cy="350" r="14" />
          <line x1="100" y1="150" x2="400" y2="600" strokeWidth="0.75" strokeDasharray="2 2" />
          <line x1="600" y1="250" x2="700" y2="350" strokeWidth="0.75" strokeDasharray="2 2" />
          <text x="620" y="240" fill="#222222" fontSize="11" fontFamily="monospace" stroke="none">CLUSTER_LATENT_01</text>
        </svg>

        {/* SKILLS SECTION DOT MATRIX & AXIS (3200px - 4100px) */}
        <svg className="absolute top-[3300px] left-10 w-full h-[500px]" viewBox="0 0 1100 500">
          <g fill="#222222" opacity="0.6">
            {Array.from({ length: 12 }).map((_, r) =>
              Array.from({ length: 22 }).map((_, c) => (
                <circle key={`${r}-${c}`} cx={50 + c * 48} cy={40 + r * 38} r="2" />
              ))
            )}
          </g>
          <line x1="50" y1="20" x2="1050" y2="20" strokeWidth="1" />
          <text x="50" y="14" fill="#222222" fontSize="10" fontFamily="monospace" stroke="none">AXIS_X_DOT_MATRIX [12x22]</text>
        </svg>

        {/* EXPERIENCE TIMELINE CONSTRUCTION LINES (4200px - 5200px) */}
        <svg className="absolute top-[4300px] left-1/2 -translate-x-1/2 w-[900px] h-[600px]" viewBox="0 0 900 600">
          <line x1="450" y1="0" x2="450" y2="600" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="450" cy="100" r="10" fill="#D97745" stroke="none" />
          <circle cx="450" cy="300" r="10" fill="#D97745" stroke="none" />
          <circle cx="450" cy="500" r="10" fill="#D97745" stroke="none" />
          <line x1="200" y1="100" x2="700" y2="100" strokeWidth="0.75" />
          <line x1="200" y1="300" x2="700" y2="300" strokeWidth="0.75" />
          <line x1="200" y1="500" x2="700" y2="500" strokeWidth="0.75" />
        </svg>

        {/* CONTACT SECTION CONCENTRIC RADAR (5400px - end) */}
        <svg className="absolute top-[5400px] left-1/2 -translate-x-1/2 w-[800px] h-[800px]" viewBox="0 0 800 800">
          <circle cx="400" cy="400" r="360" strokeWidth="1" strokeDasharray="8 8" />
          <circle cx="400" cy="400" r="260" strokeWidth="0.75" />
          <circle cx="400" cy="400" r="160" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="400" y1="0" x2="400" y2="800" strokeWidth="1" />
          <line x1="0" y1="400" x2="800" y2="400" strokeWidth="1" />
          <text x="415" y="390" fill="#222222" fontSize="12" fontFamily="monospace" stroke="none">SYS_FINAL_NODE [17.3850° N, 78.4867° E]</text>
        </svg>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* LAYER 5: EDITORIAL MARGIN TECHNICAL COORDINATE MARKERS        */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-24 lg:w-28 hidden xl:flex flex-col justify-between py-24 px-4 opacity-35 text-[9px] font-mono text-[#222222] leading-none border-r border-[#E5E0D8]/60">
        <div className="space-y-8">
          <div className="flex items-center gap-1.5 text-[#D97745] font-bold">
            <span>+</span>
            <span>01.00_LAT</span>
          </div>
          <div className="text-[8px] uppercase tracking-widest text-[#6B6660]">
            17.3850° N // AI_CORE
          </div>
          <div className="w-8 h-8 rounded-full border border-[#222222]/30 flex items-center justify-center font-bold text-[8px] text-[#222222]">
            SK
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-[8px] font-mono text-[#6B6660]">
            SYS_REF_01
          </div>
          <div className="w-8 h-[1px] bg-[#222222]/30" />
          <div className="text-[8px] font-mono text-[#222222]">
            RAG_GRAPH
          </div>
        </div>
      </div>

      <div className="absolute inset-y-0 right-0 w-16 md:w-24 lg:w-28 hidden xl:flex flex-col justify-between py-24 px-4 opacity-35 text-[9px] font-mono text-[#222222] leading-none items-end text-right border-l border-[#E5E0D8]/60">
        <div className="space-y-8 flex flex-col items-end">
          <div className="flex items-center gap-1.5 text-[#D97745] font-bold">
            <span>LNG_78.4867° E</span>
            <span>+</span>
          </div>
          <div className="text-[8px] uppercase tracking-widest text-[#6B6660]">
            [0.00ms // STABLE]
          </div>
          <div className="w-8 h-8 rounded-md border border-[#222222]/30 flex items-center justify-center font-bold text-[8px] text-[#222222]">
            DS
          </div>
        </div>

        <div className="space-y-6 flex flex-col items-end">
          <div className="text-[8px] font-mono text-[#6B6660]">
            EMBED_DIM: 1536
          </div>
          <div className="w-8 h-[1px] bg-[#222222]/30" />
          <div className="text-[8px] font-mono text-[#222222]">
            LLM_AGENT
          </div>
        </div>
      </div>
    </div>
  );
};
