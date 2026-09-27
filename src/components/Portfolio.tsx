import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/content';
import { PortfolioProject } from '../types';
import { ProjectModal } from './ProjectModal';
import { Check, Globe, Bot, ArrowRight } from 'lucide-react';

interface PortfolioProps {
  onSelectProjectInquiry: (projectType: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  onSelectProjectInquiry,
}) => {
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  const openProject = (project: PortfolioProject) => {
    setSelectedProject(project);
  };

  return (
    <section
      id="portfolio"
      className="relative py-24 sm:py-32 bg-[#070b12]"
    >
      {/* FORCE HAND CURSOR ON PORTFOLIO PROJECTS */}
      <style>{`
        .portfolio-clickable,
        .portfolio-clickable *,
        .portfolio-clickable button {
          cursor: pointer !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Showcase & Case Studies
          </div>

          <h2
            id="portfolio-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase mb-5"
          >
            SELECTED WORK
          </h2>

          <p
            id="portfolio-subheading"
            className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed"
          >
            A look at what Kakarot Development can build.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {PORTFOLIO_PROJECTS.map((project) => {
            const isWeb = project.category === 'Web Development';
            const Icon = isWeb ? Globe : Bot;

            return (
              <div
                key={project.id}
                id={`portfolio-card-${project.id}`}
                onClick={() => openProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openProject(project);
                  }
                }}
                className="portfolio-clickable group relative flex flex-col justify-between rounded-2xl bg-[#090e18] border border-white/[0.08] hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-950/40 transition-all duration-300 overflow-hidden"
                style={{ cursor: 'pointer' }}
              >

                {/* Visual Header */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-gradient-to-b from-[#0e1628] to-[#090e18] border-b border-white/[0.06] p-6 flex flex-col justify-between">

                  {/* Category */}
                  <div className="flex items-center justify-between z-10">

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/[0.06] border border-white/10 text-slate-300 backdrop-blur-md">

                      <Icon className="w-3.5 h-3.5 text-blue-400" />

                      {project.category}

                    </span>

                    <span className="text-[11px] font-mono text-slate-400">
                      Showcase Concept
                    </span>

                  </div>

                  {/* AURELIA ATELIER */}
                  {project.previewType === 'architectural' && (
                    <div
                      className="relative w-full h-28 rounded-lg bg-stone-900/80 border border-stone-700/40 p-3.5 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-300"
                      style={{ cursor: 'pointer' }}
                    >

                      <div className="flex items-center justify-between">

                        <span className="font-serif tracking-widest text-xs uppercase text-stone-300">
                          AURELIA ATELIER
                        </span>

                        <span className="text-[9px] font-mono text-stone-500">
                          RESIDENTIAL ARCHITECTURE
                        </span>

                      </div>

                      <div className="flex gap-2">

                        <div className="flex-1 h-12 rounded bg-stone-800/80 border border-stone-700/40" />

                        <div className="flex-1 h-12 rounded bg-stone-800/80 border border-stone-700/40" />

                        <div className="flex-1 h-12 rounded bg-stone-800/80 border border-stone-700/40" />

                      </div>

                    </div>
                  )}

                  {/* TICKET SYSTEM */}
                  {project.previewType === 'ticket-system' && (
                    <div
                      className="relative w-full h-28 rounded-lg bg-[#070b13] border border-blue-500/20 p-3 flex flex-col justify-between font-mono text-[11px] group-hover:scale-[1.02] transition-transform duration-300"
                      style={{ cursor: 'pointer' }}
                    >

                      <div className="flex justify-between items-center text-slate-400 border-b border-white/[0.06] pb-1.5">

                        <span className="text-blue-300 font-bold">
                          #ticket-9021 [VIP SUPPORT]
                        </span>

                        <span className="text-emerald-400 text-[10px]">
                          ● STAFF ASSIGNED
                        </span>

                      </div>

                      <div className="text-slate-300 text-[10px]">

                        &gt; Action: User requested custom bot configuration.

                        <br />

                        &gt; Status: Automated transcript logged to secure database.

                      </div>

                    </div>
                  )}

                  {/* VERIFICATION */}
                  {project.previewType === 'verification' && (
                    <div
                      className="relative w-full h-28 rounded-lg bg-[#070b13] border border-blue-500/20 p-3.5 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-300"
                      style={{ cursor: 'pointer' }}
                    >

                      <div className="flex items-center justify-between text-xs text-slate-300 font-semibold">

                        <span>
                          Gateway Security System
                        </span>

                        <span className="text-[10px] font-mono text-blue-400">
                          Anti-Raid 2.0
                        </span>

                      </div>

                      <div className="p-2 rounded bg-blue-950/40 border border-blue-500/30 flex items-center justify-between">

                        <span className="text-xs text-slate-200">
                          Click to Verify & Obtain Roles
                        </span>

                        <span className="px-2 py-0.5 rounded bg-blue-600 text-white text-[10px] font-semibold">
                          Verify
                        </span>

                      </div>

                    </div>
                  )}

                  {/* BUSINESS PLATFORM */}
                  {project.previewType === 'business-platform' && (
                    <div
                      className="relative w-full h-28 rounded-lg bg-[#070b13] border border-slate-700/40 p-3.5 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-300"
                      style={{ cursor: 'pointer' }}
                    >

                      <div className="flex items-center justify-between text-xs font-bold text-slate-200">

                        <span>
                          Enterprise Operations Hub
                        </span>

                        <span className="text-[10px] font-mono text-emerald-400">
                          Lead API 200 OK
                        </span>

                      </div>

                      <div className="grid grid-cols-3 gap-2">

                        <div className="h-10 rounded bg-white/[0.04] border border-white/5 flex items-center justify-center text-[10px] text-slate-300">
                          99.9% Speed
                        </div>

                        <div className="h-10 rounded bg-white/[0.04] border border-white/5 flex items-center justify-center text-[10px] text-blue-400">
                          REST APIs
                        </div>

                        <div className="h-10 rounded bg-white/[0.04] border border-white/5 flex items-center justify-center text-[10px] text-slate-300">
                          Global CDN
                        </div>

                      </div>

                    </div>
                  )}

                </div>

                {/* Card Body */}
                <div className="p-7 flex flex-col flex-1 justify-between">

                  <div>

                    <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                      {project.name}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Features */}
                    {project.features && project.features.length > 0 && (
                      <div className="mb-5 space-y-1.5 pt-3 border-t border-white/[0.06]">

                        {project.features.slice(0, 4).map((feat, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs text-slate-300"
                          >

                            <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />

                            <span>
                              {feat}
                            </span>

                          </div>
                        ))}

                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6">

                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                  </div>

                  {/* View Project Button */}
                  <button
                    id={`portfolio-btn-${project.id}`}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openProject(project);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600/20 hover:bg-blue-600 border border-blue-500/40 hover:border-blue-500 transition-all duration-200 shadow-sm"
                    style={{ cursor: 'pointer' }}
                  >

                    <span>
                      View Project
                    </span>

                    <ArrowRight className="w-4 h-4" />

                  </button>

                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={(type) => onSelectProjectInquiry(type)}
      />

    </section>
  );
};