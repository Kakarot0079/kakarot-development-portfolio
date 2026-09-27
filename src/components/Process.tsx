import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const STEP_ICONS = [Search, PenTool, Code2, Rocket];

export const Process: React.FC = () => {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#060a10] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Our Methodology
          </div>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase mb-5"
          >
            FROM IDEA TO LAUNCH
          </h2>
          <p
            id="process-subheading"
            className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed"
          >
            A clear, disciplined development cycle ensuring transparency and quality at every milestone.
          </p>
        </div>

        {/* 4-Step Process with visual connecting line on desktop */}
        <div className="relative">
          {/* Desktop Horizontal Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-[2px] -translate-y-12 bg-gradient-to-r from-blue-600/20 via-blue-500/50 to-blue-600/20 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((item, idx) => {
              const Icon = STEP_ICONS[idx];
              return (
                <div
                  key={idx}
                  id={`process-step-${idx}`}
                  className="flex flex-col items-start p-6 rounded-2xl bg-[#090e19]/90 border border-white/[0.08] hover:border-blue-500/40 transition-all duration-200"
                >
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between w-full mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-950/70 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-md shadow-blue-950/50">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-2xl font-black text-blue-500/60">
                      {item.step}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Sub-tag */}
                  <div className="mt-auto pt-3 border-t border-white/[0.06] w-full">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
