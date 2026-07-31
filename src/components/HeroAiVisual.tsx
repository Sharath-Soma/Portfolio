import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const HeroAiVisual: React.FC = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 600], [0, -12]);
  const rotateParallax = useTransform(scrollY, [0, 600], [0, 1.5]);

  return (
    <motion.div 
      style={{ y: yParallax, rotate: rotateParallax }}
      className="relative w-full aspect-square max-w-[440px] lg:max-w-[480px] mx-auto flex items-center justify-center p-4"
    >
      {/* SVG Neural Knowledge Graph & Attention Flow Graphic */}
      <svg 
        viewBox="0 0 500 500" 
        className="w-full h-full text-[#222222] overflow-visible relative z-10 select-none"
        fill="none" 
        stroke="currentColor"
      >
        <defs>
          {/* Subtle Gradients for Nodes & Paths */}
          <linearGradient id="terracottaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D97745" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C56636" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D97745" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#8A857D" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#E5E0D8" stopOpacity="0.2" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Concentric Drafting Circles */}
        <circle cx="250" cy="250" r="220" stroke="#E5E0D8" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
        <circle cx="250" cy="250" r="170" stroke="#E5E0D8" strokeWidth="0.75" strokeDasharray="2 4" opacity="0.5" />
        <circle cx="250" cy="250" r="110" stroke="#D97745" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.3" />

        {/* Axis Guides & Coordinates */}
        <line x1="30" y1="250" x2="470" y2="250" stroke="#E5E0D8" strokeWidth="0.75" opacity="0.4" />
        <line x1="250" y1="30" x2="250" y2="470" stroke="#E5E0D8" strokeWidth="0.75" opacity="0.4" />

        {/* Neural Attention Bezier Paths (Connecting Nodes) */}
        <g strokeWidth="1.25" opacity="0.8">
          {/* Primary Connection Paths */}
          <path d="M 120 180 Q 250 100 380 180" stroke="url(#lineGrad)" />
          <path d="M 120 180 Q 200 250 250 350" stroke="url(#lineGrad)" />
          <path d="M 380 180 Q 300 250 250 350" stroke="url(#lineGrad)" />
          <path d="M 120 180 Q 250 250 380 320" stroke="url(#lineGrad)" />
          <path d="M 160 320 Q 250 210 380 180" stroke="url(#lineGrad)" />
          <path d="M 250 110 Q 340 220 380 320" stroke="url(#lineGrad)" />
          
          {/* Central Transformer Attention Cluster */}
          <path d="M 210 220 C 230 180, 270 180, 290 220 C 310 260, 270 300, 250 280 C 230 260, 190 260, 210 220 Z" 
                stroke="#D97745" strokeWidth="1.5" strokeDasharray="2 2" fill="none" opacity="0.7" />
        </g>

        {/* Floating Data & Vector Points */}
        {/* Central Core Model Node */}
        <g transform="translate(250, 250)">
          <circle cx="0" cy="0" r="28" fill="#F8F5EF" stroke="#D97745" strokeWidth="2" filter="url(#glow)" />
          <circle cx="0" cy="0" r="18" fill="url(#terracottaGrad)" />
          <circle cx="0" cy="0" r="6" fill="#FFFFFF" />
        </g>

        {/* Input Embeddings Cluster Node 1 (Top Left) */}
        <g transform="translate(120, 180)">
          <circle cx="0" cy="0" r="16" fill="#F8F5EF" stroke="#222222" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="6" fill="#D97745" />
          <text x="-38" y="-22" fill="#6B6660" fontSize="10" fontFamily="monospace" fontWeight="600" stroke="none">x_embed[1536]</text>
        </g>

        {/* Query/Key Attention Node 2 (Top Right) */}
        <g transform="translate(380, 180)">
          <circle cx="0" cy="0" r="16" fill="#F8F5EF" stroke="#222222" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="6" fill="#222222" />
          <text x="12" y="-22" fill="#6B6660" fontSize="10" fontFamily="monospace" fontWeight="600" stroke="none">Q · Kᵀ / √d_k</text>
        </g>

        {/* RAG Context Node 3 (Bottom Center) */}
        <g transform="translate(250, 350)">
          <circle cx="0" cy="0" r="18" fill="#F8F5EF" stroke="#D97745" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="8" fill="#D97745" />
          <text x="-48" y="32" fill="#222222" fontSize="10" fontFamily="monospace" fontWeight="700" stroke="none">RAG_KnowledgeGraph</text>
        </g>

        {/* Agentic Core Node 4 (Left) */}
        <g transform="translate(160, 320)">
          <circle cx="0" cy="0" r="12" fill="#F8F5EF" stroke="#8A857D" strokeWidth="1" />
          <circle cx="0" cy="0" r="4" fill="#8A857D" />
        </g>

        {/* Output Logits Node 5 (Right) */}
        <g transform="translate(380, 320)">
          <circle cx="0" cy="0" r="12" fill="#F8F5EF" stroke="#8A857D" strokeWidth="1" />
          <circle cx="0" cy="0" r="4" fill="#D97745" />
        </g>

        {/* Small Data Packet Dots on Path */}
        <circle cx="185" cy="140" r="3" fill="#D97745" />
        <circle cx="315" cy="140" r="3" fill="#D97745" />
        <circle cx="185" cy="265" r="2.5" fill="#222222" />
        <circle cx="315" cy="265" r="2.5" fill="#D97745" />
        <circle cx="250" cy="180" r="3" fill="#D97745" />

        {/* Technical Annotations & Latent Space Coordinates */}
        <text x="30" y="460" fill="#8A857D" fontSize="9" fontFamily="monospace" stroke="none">θ_PARAM: 8.2B</text>
        <text x="370" y="460" fill="#8A857D" fontSize="9" fontFamily="monospace" stroke="none">CTX_WIN: 128K</text>
        <text x="210" y="50" fill="#D97745" fontSize="9" fontFamily="monospace" fontWeight="700" stroke="none">SLM_AGENT_ARCH</text>
      </svg>
    </motion.div>
  );
};
