import React from 'react';
import { WHY_US_BENEFITS } from '../data/content';
import { Target, Sparkles, Sliders, ShieldCheck } from 'lucide-react';

const BENEFIT_ICONS = [Target, Sparkles, Sliders, ShieldCheck];

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-[#060a10] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Our Principles
          </div>
          <h2
            id="why-us-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase mb-5"
          >
            WHY WORK WITH US?
          </h2>
          <p
            id="why-us-subheading"
            className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed"
          >
            We focus on technical craftsmanship, direct communication, and lasting client value.
          </p>
        </div>

        {/* 4 Clean Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_BENEFITS.map((benefit, idx) => {
            const Icon = BENEFIT_ICONS[idx];
            return (
              <div
                key={idx}
                id={`benefit-card-${benefit.number}`}
                className="group p-6 rounded-2xl bg-[#090e18] border border-white/[0.08] hover:border-blue-500/40 hover:bg-[#0c1424] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xl font-bold text-slate-500 group-hover:text-blue-400 transition-colors">
                      {benefit.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.05]">
                  <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider">
                    Core Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
