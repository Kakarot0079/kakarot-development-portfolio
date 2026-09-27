import React from 'react';

interface BrandLogoProps {
  compact?: boolean;
  className?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  compact = false,
  className = '',
  onClick,
}) => {
  return (
    <button
      id="brand-logo-btn"
      onClick={onClick}
      className={`group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1 transition-all ${className}`}
      aria-label="Kakarot Development Home"
    >
      {/* Custom Technical Geometric Symbol */}
      <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600/30 to-blue-900/40 border border-blue-500/40 text-blue-400 group-hover:border-blue-400/80 transition-colors shadow-sm shadow-blue-500/10">
        <svg
          className="w-5 h-5 text-blue-400 transition-transform group-hover:scale-105 duration-200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Stylized geometric chevron & bracket knot signifying build & automation */}
          <path d="M16 18l6-6-6-6" />
          <path d="M8 6l-6 6 6 6" />
          <path d="M14.5 4l-5 16" stroke="rgba(147, 197, 253, 0.9)" />
        </svg>
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
      </div>

      <div className="flex flex-col">
        <span className="text-[15px] font-bold tracking-[0.14em] text-white uppercase group-hover:text-blue-100 transition-colors">
          KAKAROT<span className="text-blue-400 font-extrabold ml-1.5">DEV</span>
        </span>
        {!compact && (
          <span className="text-[10px] tracking-[0.2em] uppercase text-slate-400 font-medium">
            Development Studio
          </span>
        )}
      </div>
    </button>
  );
};
