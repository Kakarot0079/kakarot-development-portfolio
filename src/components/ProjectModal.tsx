import React from 'react';
import {
  X,
  Check,
  ArrowRight,
  ExternalLink,
  Shield,
  Bot,
  Activity,
  Sparkles,
} from 'lucide-react';
import { PortfolioProject } from '../types';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onRequestSimilar: (projectType: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  if (!project) {
    return null;
  }

  const isDiscord = project.category === 'Discord Development';

  const handleLiveProject = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleDemo = () => {
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  let statusClass =
    'bg-purple-500/10 text-purple-300 border-purple-500/20';

  if (project.projectStatus === 'Live') {
    statusClass =
      'bg-emerald-500/10 text-emerald-300 border-emerald-500/20';
  }

  if (project.projectStatus === 'Demo') {
    statusClass =
      'bg-blue-500/10 text-blue-300 border-blue-500/20';
  }

  if (project.projectStatus === 'Coming Soon') {
    statusClass =
      'bg-amber-500/10 text-amber-300 border-amber-500/20';
  }

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        id="project-modal-dialog"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0b101c] border border-white/10 shadow-2xl p-6 sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        {/* CLOSE */}
        <button
          id="project-modal-close"
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HEADER */}
        <div className="mb-6 pr-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-600/20 text-blue-300 border border-blue-500/30">
              {project.category}
            </span>

            {project.projectStatus && (
              <span
                className={
                  'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ' +
                  statusClass
                }
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {project.projectStatus}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.name}
          </h2>
        </div>

        {/* PREVIEW */}
        <div className="relative w-full rounded-xl overflow-hidden bg-[#070b13] border border-white/10 mb-6 p-5">

          {/* AURELIA */}
          {project.previewType === 'architectural' && (
            <div className="space-y-4">
              <button
                type="button"
                onClick={handleLiveProject}
                disabled={!project.liveUrl}
                className="w-full text-left rounded-xl p-2 hover:bg-white/[0.03] transition-all"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-serif italic text-lg text-slate-200">
                    Aurelia Atelier — Luxury Spaces
                  </span>

                  <span className="text-xs font-mono text-blue-400 flex items-center gap-1.5">
                    LIVE WEBSITE
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="h-28 rounded-lg bg-gradient-to-br from-stone-800 to-stone-900 border border-stone-700/50 flex flex-col justify-end p-2.5">
                    <span className="text-[10px] text-stone-300 font-medium">
                      Penthouse Minimalist
                    </span>
                  </div>

                  <div className="h-28 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 flex flex-col justify-end p-2.5">
                    <span className="text-[10px] text-slate-300 font-medium">
                      Bespoke Materials
                    </span>
                  </div>

                  <div className="h-28 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 flex flex-col justify-end p-2.5">
                    <span className="text-[10px] text-zinc-300 font-medium">
                      Modernist Pavilions
                    </span>
                  </div>
                </div>

                <div className="p-3 mt-4 rounded bg-white/[0.02] border border-white/[0.05] text-xs text-slate-300 flex items-center justify-between">
                  <span>
                    Responsive experience • Desktop • Tablet • Mobile
                  </span>

                  <span className="text-emerald-400 font-mono text-[11px]">
                    LIVE
                  </span>
                </div>

                {project.liveUrl && (
                  <div className="text-center pt-3">
                    <span className="text-xs text-blue-400">
                      Click here to visit the live website →
                    </span>
                  </div>
                )}
              </button>
            </div>
          )}

          {/* TICKET SYSTEM */}
          {project.previewType === 'ticket-system' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-slate-300 font-bold flex items-center gap-1.5">
                  <Bot className="w-4 h-4 text-blue-400" />
                  Kakarot Ticket System
                </span>

                <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px]">
                  DEMO SYSTEM
                </span>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-white/[0.05] space-y-2">
                <div className="text-slate-400">
                  Ticket: <span className="text-white">#ticket-0412</span>
                </div>

                <div className="text-slate-400">
                  Status:{' '}
                  <span className="text-emerald-400">
                    Staff Assigned
                  </span>
                </div>

                <div className="text-slate-400">
                  Action:{' '}
                  <span className="text-blue-300">
                    Ticket activity logged
                  </span>
                </div>

                <div className="text-slate-400">
                  Transcript:{' '}
                  <span className="text-slate-200">
                    HTML archive generated
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded bg-blue-600/30 text-blue-300 text-[10px] border border-blue-500/40">
                  Create Ticket
                </span>

                <span className="px-2.5 py-1 rounded bg-white/[0.05] text-slate-300 text-[10px] border border-white/10">
                  Claim
                </span>

                <span className="px-2.5 py-1 rounded bg-white/[0.05] text-slate-300 text-[10px] border border-white/10">
                  Transcript
                </span>

                <span className="px-2.5 py-1 rounded bg-white/[0.05] text-slate-300 text-[10px] border border-white/10">
                  Logs
                </span>
              </div>
            </div>
          )}

          {/* VERIFICATION */}
          {project.previewType === 'verification' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-slate-300 font-bold flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-blue-400" />
                  Server Gateway Verification
                </span>

                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px]">
                  COMING SOON
                </span>
              </div>

              <div className="p-4 rounded-lg bg-blue-950/30 border border-blue-500/20 space-y-2">
                <div className="text-slate-200 font-sans text-sm font-semibold">
                  Welcome to the Community
                </div>

                <div className="text-slate-400 text-xs font-sans">
                  Planned verification workflow for controlled server access
                  and member onboarding.
                </div>

                <div className="pt-2">
                  <div className="inline-flex px-4 py-1.5 rounded-md bg-blue-600/50 text-white text-xs font-sans font-medium items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    Verification System
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-slate-400 flex items-center justify-between">
                <span>Project Status: In Development</span>

                <span className="text-amber-400 font-mono">
                  COMING SOON
                </span>
              </div>
            </div>
          )}

          {/* BUSINESS PLATFORM */}
          {project.previewType === 'business-platform' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-slate-200 font-bold flex items-center gap-1.5 text-sm">
                  <Activity className="w-4 h-4 text-blue-400" />
                  Business Analytics & Funnel Platform
                </span>

                <span className="text-xs font-mono text-purple-400">
                  CONCEPT
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-slate-400 text-[10px]">
                    Lead Capture
                  </div>

                  <div className="text-white font-bold text-base mt-1">
                    Planned
                  </div>
                </div>

                <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-slate-400 text-[10px]">
                    API Integration
                  </div>

                  <div className="text-blue-400 font-bold text-base mt-1">
                    Ready
                  </div>
                </div>

                <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-slate-400 text-[10px]">
                    Platform
                  </div>

                  <div className="text-purple-400 font-bold text-base mt-1">
                    Concept
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* DESCRIPTION */}
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* FEATURES */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
              System Capabilities
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]"
                >
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TECH STACK */}
        <div className="mb-8">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
            Technologies & Frameworks
          </h4>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/10">
          {project.liveUrl && (
            <button
              type="button"
              onClick={handleLiveProject}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Live Website
            </button>
          )}

          {project.demoUrl && (
            <button
              type="button"
              onClick={handleDemo}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Open Demo
            </button>
          )}

          {!project.liveUrl &&
            !project.demoUrl &&
            project.projectStatus === 'Coming Soon' && (
              <div className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/20">
                <Sparkles className="w-4 h-4" />
                Project Coming Soon
              </div>
            )}

          {!project.liveUrl &&
            !project.demoUrl &&
            project.projectStatus === 'Concept' && (
              <div className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20">
                <Sparkles className="w-4 h-4" />
                Concept Project
              </div>
            )}

          <button
            id="modal-request-similar-btn"
            type="button"
            onClick={() => {
              onClose();
              onRequestSimilar(
                isDiscord ? 'Discord Bot' : 'Website'
              );
            }}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-white/[0.05] hover:bg-white/10 border border-white/10 transition-all"
          >
            <span>Request Similar Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* FOOTER */}
        <div className="mt-5 flex items-center gap-2 text-[11px] text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          Built and presented by Kakarot Development.
        </div>
      </div>
    </div>
  );
};