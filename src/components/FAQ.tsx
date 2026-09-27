import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#070b12]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Common Inquiries
          </div>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase mb-5"
          >
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p
            id="faq-subheading"
            className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed"
          >
            Everything you need to know about starting a project with Kakarot Development.
          </p>
        </div>

        {/* Expandable Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className={`rounded-xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-[#0c1322] border-blue-500/40 shadow-lg shadow-blue-950/30'
                    : 'bg-[#090e18] border-white/[0.08] hover:border-white/20'
                }`}
              >
                <button
                  id={`faq-toggle-${index}`}
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 shrink-0 ${
                      isOpen
                        ? 'bg-blue-600/20 text-blue-400 rotate-180'
                        : 'bg-white/[0.05] text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-content-${index}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/[0.04]"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
