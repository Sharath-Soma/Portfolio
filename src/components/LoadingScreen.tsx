import React, { useEffect, useState } from 'react';

export const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Show loader for ~750ms then start 250ms fadeout = total 1000ms max
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      const removeTimer = setTimeout(() => {
        setIsLoading(false);
      }, 250);
      return () => clearTimeout(removeTimer);
    }, 750);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#F8F5EF] text-[#222222] transition-opacity duration-300 pointer-events-none ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-4 max-w-xs text-center px-4">
        {/* Monogram Badge */}
        <div className="w-10 h-10 rounded-xl bg-[#222222] text-[#F8F5EF] flex items-center justify-center font-mono font-bold text-sm shadow-xs">
          SK
        </div>

        {/* Name */}
        <div className="space-y-0.5">
          <h1 className="font-heading font-extrabold text-xl text-[#222222] tracking-tight">
            Soma Sharath Kumar
          </h1>
          <p className="text-xs font-mono text-[#6B6660]">
            AI Engineer & Data Scientist
          </p>
        </div>

        {/* Thin minimal loading progress bar */}
        <div className="w-36 h-[2px] bg-[#E5E0D8] rounded-full overflow-hidden mt-2 relative">
          <div className="h-full bg-[#D97745] rounded-full animate-loading-bar" />
        </div>
      </div>
    </div>
  );
};
