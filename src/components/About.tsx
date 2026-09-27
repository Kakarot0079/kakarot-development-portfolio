import React from 'react';
import { Layers, Terminal, Sparkles, Shield, Users, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const TARGET_GROUPS = [
    'Small businesses',
    'Startups',
    'Content creators',
    'Gaming communities',
    'Discord communities',
    'Online businesses',
    'Local businesses',
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#060a10] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Official Copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
              Studio Philosophy
            </div>

            {/* Heading */}
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-6"
            >
              BUILT TO TURN IDEAS INTO DIGITAL PRODUCTS.
            </h2>

            {/* Primary Description */}
            <p
              id="about-description-1"
              className="text-base sm:text-lg text-slate-300 leading-relaxed mb-5 font-normal"
            >
              Kakarot Development is a digital development studio focused on building modern websites, Discord systems, and automation that solve real problems.
            </p>

            {/* Supporting Description */}
            <p
              id="about-description-2"
              className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-normal"
            >
              We combine thoughtful design with practical development to create digital experiences that are fast, responsive, and built around the people who use them.
            </p>

            {/* Target Audience / Who We Serve */}
            <div className="pt-6 border-t border-white/[0.08]">
              <h4 className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-3">
                Tailored For Modern Operators & Communities
              </h4>
              <div className="flex flex-wrap gap-2">
                {TARGET_GROUPS.map((group, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    {group}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Technical Capability Panel */}
          <div className="lg:col-span-5">
            <div className="relative p-7 rounded-2xl bg-gradient-to-b from-[#0e1628] to-[#080d16] border border-white/[0.1] shadow-2xl space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
                <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Engineering Focus</h4>
                  <p className="text-[11px] font-mono text-slate-400">Pragmatic • Modern • Dependable</p>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-3.5 rounded-xl bg-black/30 border border-white/[0.05]">
                  <div className="text-slate-200 font-semibold mb-1 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-400" />
                    Zero Bloat, High Performance
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    We steer clear of bloated site builders and heavyweight generic frameworks. Every line of code serves a functional goal.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-black/30 border border-white/[0.05]">
                  <div className="text-slate-200 font-semibold mb-1 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-400" />
                    End-to-End Ownership
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    From initial design and interactive components to database setup, deployment, and ongoing fixes.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-black/30 border border-white/[0.05]">
                  <div className="text-slate-200 font-semibold mb-1 flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    Direct Collaboration
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Work directly with technical builders who understand the code and respect your project timeline.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
