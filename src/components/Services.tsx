import React from 'react';
import { Globe, Bot, Zap, Wrench, Check, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServiceId } from '../types';

interface ServicesProps {
  onSelectService: (serviceId: ServiceId) => void;
}

const SERVICE_ICONS: Record<ServiceId, React.ElementType> = {
  website: Globe,
  discord: Bot,
  automation: Zap,
  maintenance: Wrench,
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#070b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Services & Capabilities
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase mb-5"
          >
            WHAT WE BUILD
          </h2>
          <p
            id="services-subheading"
            className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed"
          >
            Digital solutions designed around your goals — not generic templates.
          </p>
        </div>

        {/* 4 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => {
            const IconComponent = SERVICE_ICONS[service.id];

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative flex flex-col justify-between p-7 sm:p-9 rounded-2xl bg-gradient-to-b from-[#0e1524] to-[#090e18] border border-white/[0.08] hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-950/40 transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:border-blue-400/50 group-hover:bg-blue-600/25 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-mono font-medium text-slate-400 tracking-wider uppercase px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06]">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5 pt-4 pb-8 border-t border-white/[0.06]">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-xs sm:text-sm text-slate-300"
                      >
                        <div className="w-4 h-4 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <button
                  id={`service-cta-${service.id}`}
                  onClick={() => onSelectService(service.id)}
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl text-sm font-semibold text-white bg-white/[0.04] hover:bg-blue-600 border border-white/10 hover:border-blue-500 transition-all duration-200 group/btn"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover/btn:text-white transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
