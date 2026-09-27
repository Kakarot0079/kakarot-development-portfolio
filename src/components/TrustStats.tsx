import React from 'react';
import { Globe, MessageSquareCode, Cpu, ShieldCheck } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const TRUST_ITEMS = [
    {
      title: 'Web Development',
      spec: 'Tailored UI/UX & Performance',
      icon: Globe,
      detail: 'Responsive, fast, and engineered to convert visitors.',
    },
    {
      title: 'Discord Systems',
      spec: 'Enterprise Bot Architecture',
      icon: MessageSquareCode,
      detail: 'Tickets, verification, moderation, and database sync.',
    },
    {
      title: 'Automation',
      spec: 'Streamlined Data Workflows',
      icon: Cpu,
      detail: 'Eliminating repetitive operations with robust APIs.',
    },
    {
      title: 'Ongoing Support',
      spec: 'Dedicated Reliability',
      icon: ShieldCheck,
      detail: 'Proactive maintenance, bug resolutions, and updates.',
    },
  ];

  return (
    <section
      id="trust-stats"
      className="relative py-12 border-y border-white/[0.08] bg-[#070b12]/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tagline */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold tracking-[0.25em] text-blue-400 uppercase">
            BUILT FOR MODERN DIGITAL NEEDS
          </span>
        </div>

        {/* Four Compact Metrics / Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                id={`trust-metric-${idx}`}
                className="group relative p-5 rounded-xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.06] hover:border-blue-500/30 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-600/20 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="text-xs font-mono text-blue-300 font-medium mb-1">
                  {item.spec}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
