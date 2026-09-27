import React from 'react';
import { ArrowRight, Terminal, Bot, Zap, CheckCircle2, Shield, Activity, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden bg-tech-grid"
    >
      {/* Ambient background gradients - restrained soft blue */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-blue-500/8 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small badge above heading */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm shadow-blue-500/10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>WEB • DISCORD • AUTOMATION</span>
            </div>

            {/* Main Heading */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.1] mb-4"
            >
              BUILD DIGITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-300">EXPERIENCES</span> THAT WORK.
            </h1>

            {/* Alternative Supporting Emphasis */}
            <p
              id="hero-tagline-emphasis"
              className="text-lg sm:text-xl font-semibold text-blue-400 tracking-wide mb-5 flex items-center gap-2"
            >
              <span className="text-blue-500">■</span>
              <span>Build. Automate. Grow.</span>
            </p>

            {/* Description */}
            <p
              id="hero-description"
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal"
            >
              Kakarot Development creates modern websites, custom Discord solutions, and powerful automation for businesses, creators, and online communities.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <button
                id="hero-primary-cta"
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onViewWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                <span>View Our Work</span>
              </button>
            </div>

            {/* Trust Statement */}
            <div
              id="hero-trust-statement"
              className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 tracking-wide font-medium"
            >
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Custom-built • Responsive • Client-focused</span>
            </div>
          </motion.div>

          {/* Right Column: Sophisticated Abstract Technology Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Outer Container with geometric borders & subtle blue backglow */}
            <div className="relative w-full max-w-lg rounded-2xl bg-gradient-to-b from-[#0c1322] to-[#080d17] border border-white/[0.1] shadow-2xl shadow-blue-950/40 p-5 overflow-hidden">
              
              {/* Subtle top header bar */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/40" />
                  <div className="w-3 h-3 rounded-full bg-green-500/40 border border-green-400/50" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400 font-medium">
                    kakarot-runtime // prod-cluster
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE (14ms)</span>
                </div>
              </div>

              {/* Main Code & Architecture Display */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] text-slate-300">
                  <div className="flex items-center justify-between text-slate-500 text-[10px] pb-2 mb-2 border-b border-white/[0.04]">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-blue-400" />
                      deploy.config.ts
                    </span>
                    <span className="text-blue-400">TypeScript 5.x</span>
                  </div>
                  <pre className="text-slate-300 text-[11px] leading-relaxed overflow-x-auto">
                    <span className="text-blue-400">import</span> &#123; KakarotEngine &#125; <span className="text-blue-400">from</span> <span className="text-emerald-300">'@kakarot/core'</span>;{'\n\n'}
                    <span className="text-purple-400">export default</span> <span className="text-blue-400">new</span> KakarotEngine(&#123;{'\n'}
                    {'  '}services: [<span className="text-emerald-300">'Web'</span>, <span className="text-emerald-300">'DiscordBot'</span>, <span className="text-emerald-300">'Automation'</span>],{'\n'}
                    {'  '}architecture: <span className="text-emerald-300">'Responsive & Custom'</span>,{'\n'}
                    {'  '}reliability: <span className="text-amber-300">0.9999</span>,{'\n'}
                    &#125;);
                  </pre>
                </div>

                {/* Live Service Event Stream */}
                <div className="space-y-2 pt-1">
                  <div className="text-[10px] font-medium tracking-wider uppercase text-slate-400 flex items-center justify-between">
                    <span>Active Telemetry</span>
                    <span className="text-blue-400 text-[10px]">Real-time</span>
                  </div>

                  {/* Event item 1: Web */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-blue-500/30 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-md bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                        <Layers className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-slate-200 text-[11px] font-medium">Aurelia Atelier Web Pipeline</span>
                        <span className="text-[9px] text-slate-400">Lighthouse 99 • Mobile Verified</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">DEPLOYED</span>
                  </div>

                  {/* Event item 2: Discord Bot */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-blue-500/30 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-md bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-slate-200 text-[11px] font-medium">Ticket Dispatcher & Logging</span>
                        <span className="text-[9px] text-slate-400">34 slash commands registered</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-blue-400 font-mono">ACTIVE</span>
                  </div>

                  {/* Event item 3: Automation */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-blue-500/30 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-md bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                        <Zap className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-slate-200 text-[11px] font-medium">Workflow Webhook Bridge</span>
                        <span className="text-[9px] text-slate-400">Zero latency message queue</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">SYNCED</span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Grid Accents */}
              <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-2 border-r-2 border-blue-500/40 rounded-br-2xl pointer-events-none" />
              <div className="absolute -top-1 -left-1 w-12 h-12 border-t-2 border-l-2 border-blue-500/40 rounded-tl-2xl pointer-events-none" />
            </div>

            {/* Floating Mini Badge 1: Quality Guarantee */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -left-4 sm:-left-6 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0e1626]/95 border border-blue-500/40 shadow-xl shadow-black/60 backdrop-blur-md"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-white">Clean Architecture</p>
                <p className="text-[9px] text-slate-400">No bloated templates</p>
              </div>
            </motion.div>

            {/* Floating Mini Badge 2: Discord & Web Latency */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-5 -right-4 sm:-right-6 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0e1626]/95 border border-emerald-500/40 shadow-xl shadow-black/60 backdrop-blur-md"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-white">High Reliability</p>
                <p className="text-[9px] text-emerald-400 font-mono">100% Uptime Mindset</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
