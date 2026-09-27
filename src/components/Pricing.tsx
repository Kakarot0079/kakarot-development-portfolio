import React from 'react';
import { PRICING_PLANS } from '../data/content';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-[#070b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Transparent Investment
          </div>
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase mb-5"
          >
            SIMPLE STARTING PRICES
          </h2>
          <p
            id="pricing-subheading"
            className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed"
          >
            Every project is different. These packages provide a starting point.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#111c34] to-[#0c1426] border-2 border-blue-500/80 shadow-2xl shadow-blue-950/60 lg:-translate-y-2'
                    : 'bg-[#090e18] border border-white/[0.08] hover:border-blue-500/30'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-md shadow-blue-600/40">
                    <Sparkles className="w-3 h-3" />
                    <span>POPULAR</span>
                  </div>
                )}

                <div>
                  {/* Plan Title */}
                  <h3 className="text-base font-bold tracking-wider text-white uppercase mb-2">
                    {plan.title}
                  </h3>

                  {/* Price Tag with "Starting at" label */}
                  <div className="pt-2 pb-6 border-b border-white/[0.08] mb-6">
                    <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mb-1">
                      Starting at
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-white">
                        {plan.priceStartingAt}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                      >
                        <div className="w-4 h-4 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Button */}
                <button
                  id={`pricing-btn-${plan.id}`}
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isPopular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-white/[0.04] hover:bg-blue-600/20 text-white border border-white/10 hover:border-blue-500/40'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Pricing Footnote */}
        <div className="mt-12 text-center max-w-2xl mx-auto p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <p
            id="pricing-footnote"
            className="text-xs sm:text-sm text-slate-400 leading-relaxed"
          >
            Final pricing depends on project scope, features, integrations, and development time.
          </p>
        </div>

      </div>
    </section>
  );
};
