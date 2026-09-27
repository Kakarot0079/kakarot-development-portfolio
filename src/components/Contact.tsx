import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';
import { COMPANY_CONFIG } from '../config';
import { ProjectInquiryData } from '../types';

interface ContactProps {
  initialProjectType?: ProjectInquiryData['projectType'];
  initialBudget?: ProjectInquiryData['budget'];
}

export const Contact: React.FC<ContactProps> = ({
  initialProjectType = 'Website',
  initialBudget = '$100–$250',
}) => {
  const [formData, setFormData] = useState<ProjectInquiryData>({
    name: '',
    email: '',
    discordUsername: '',
    projectType: initialProjectType,
    budget: initialBudget,
    projectDescription: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Sync initial values if changed externally (e.g. by clicking a pricing tier)
  useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }));
    }
  }, [initialProjectType]);

  useEffect(() => {
    if (initialBudget) {
      setFormData((prev) => ({ ...prev, budget: initialBudget }));
    }
  }, [initialBudget]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.projectDescription.trim()) {
      setErrorMessage('Please fill in your name, email, and a brief project description.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate reliable dispatch or trigger configured contact endpoint
    try {
      // In production, this can POST to COMPANY_CONFIG.contactApiEndpoint
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitted(true);
    } catch {
      setErrorMessage('Unable to send at this moment. Please try again or reach out on Discord.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      discordUsername: '',
      projectType: 'Website',
      budget: '$100–$250',
      projectDescription: '',
    });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#060a10] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Heading, Description & Discord Channel */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
                Start Your Project
              </div>

              <h2
                id="contact-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-5"
              >
                READY TO BUILD SOMETHING?
              </h2>

              <p
                id="contact-description"
                className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-normal"
              >
                Tell us what you're working on. We'll review your requirements and get back to you with the next steps.
              </p>

              <div className="space-y-4 p-5 rounded-2xl bg-[#090e18] border border-white/[0.08] mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-medium text-emerald-300">
                    Typical response time: Under 24 hours
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We review project requirements thoroughly to give you an honest scope estimate, clear milestones, and technical recommendations.
                </p>
              </div>
            </div>

            {/* Prefer Discord Box */}
            <div
              id="prefer-discord-box"
              className="p-6 rounded-2xl bg-gradient-to-br from-[#10172b] to-[#090e18] border border-blue-500/30 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    Prefer Discord?
                  </h3>
                  <p className="text-xs text-slate-400">
                    Connect directly with our development team
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Have a quick question about bot features, server architecture, or project feasibility? Join our Discord server for fast support.
              </p>
              <a
                id="join-discord-btn"
                href={COMPANY_CONFIG.discordInviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600/30 hover:bg-blue-600 border border-blue-500/40 hover:border-blue-500 transition-all duration-200"
              >
                <span>Join Our Discord</span>
                <Sparkles className="w-4 h-4 text-blue-300" />
              </a>
            </div>
          </div>

          {/* Right Column: High-Conversion Form */}
          <div className="lg:col-span-7">
            <div className="relative p-6 sm:p-10 rounded-2xl bg-[#090e18] border border-white/[0.08] shadow-2xl">
              
              {submitted ? (
                <div
                  id="contact-success-state"
                  className="py-12 px-4 text-center flex flex-col items-center justify-center animate-in fade-in duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Project Request Received
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base max-w-md mb-6 leading-relaxed">
                    Thank you for reaching out to Kakarot Development. We have recorded your project details and will follow up with you via email ({formData.email}) promptly.
                  </p>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-left w-full max-w-md mb-8 text-xs font-mono space-y-1 text-slate-300">
                    <div>Project: <span className="text-blue-300">{formData.projectType}</span></div>
                    <div>Budget: <span className="text-blue-300">{formData.budget}</span></div>
                    {formData.discordUsername && (
                      <div>Discord: <span className="text-blue-300">{formData.discordUsername}</span></div>
                    )}
                  </div>

                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-lg text-sm font-semibold text-slate-300 bg-white/[0.05] hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form id="project-inquiry-form" onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Your Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Parker"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Email Address <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Discord Username */}
                  <div>
                    <label htmlFor="contact-discord" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Discord Username <span className="text-slate-500 font-normal normal-case">(Optional, e.g. alex.dev)</span>
                    </label>
                    <input
                      type="text"
                      id="contact-discord"
                      name="discordUsername"
                      value={formData.discordUsername}
                      onChange={handleChange}
                      placeholder="username or user#0000"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                    />
                  </div>

                  {/* Project Type & Budget Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-project-type" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Project Type
                      </label>
                      <select
                        id="contact-project-type"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all cursor-pointer"
                      >
                        <option value="Website" className="bg-[#0b101c] text-white">Website</option>
                        <option value="Discord Bot" className="bg-[#0b101c] text-white">Discord Bot</option>
                        <option value="Automation" className="bg-[#0b101c] text-white">Automation</option>
                        <option value="Maintenance" className="bg-[#0b101c] text-white">Maintenance</option>
                        <option value="Other" className="bg-[#0b101c] text-white">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-budget" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Budget
                      </label>
                      <select
                        id="contact-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all cursor-pointer"
                      >
                        <option value="Under $100" className="bg-[#0b101c] text-white">Under $100</option>
                        <option value="$100–$250" className="bg-[#0b101c] text-white">$100–$250</option>
                        <option value="$250–$500" className="bg-[#0b101c] text-white">$250–$500</option>
                        <option value="$500+" className="bg-[#0b101c] text-white">$500+</option>
                        <option value="Not sure yet" className="bg-[#0b101c] text-white">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="contact-description-input" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Project Description <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      id="contact-description-input"
                      name="projectDescription"
                      required
                      rows={4}
                      value={formData.projectDescription}
                      onChange={handleChange}
                      placeholder="Outline your project scope, target timeline, or features you need built..."
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-inquiry-btn"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 shadow-lg shadow-blue-600/30 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <span>Send Project Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
