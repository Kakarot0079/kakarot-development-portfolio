import React from 'react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_CONFIG } from '../config';
import { MessageSquare, Github, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const FOOTER_LINKS = [
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer id="main-footer" className="relative bg-[#05080e] border-t border-white/[0.08] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Left: Brand Logo & Tagline */}
          <div className="flex flex-col items-start gap-2">
            <BrandLogo onClick={() => onNavigate('home')} />
            <p className="text-sm font-medium text-slate-400 pl-1">
              "{COMPANY_CONFIG.tagline}"
            </p>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8">
            {FOOTER_LINKS.map((link) => (
              <button
                key={link.id}
                id={`footer-link-${link.id}`}
                onClick={() => onNavigate(link.id)}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right: Social / Community Placeholders */}
          <div className="flex items-center gap-3">
            <a
              id="footer-discord-link"
              href={COMPANY_CONFIG.discordInviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-blue-500/40 transition-all"
              aria-label="Discord Community"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a
              id="footer-github-link"
              href={COMPANY_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-blue-500/40 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              id="footer-twitter-link"
              href={COMPANY_CONFIG.xTwitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-blue-500/40 transition-all"
              aria-label="X / Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>

            <a
              id="footer-linkedin-link"
              href={COMPANY_CONFIG.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-blue-500/40 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p id="footer-copyright">
            © {COMPANY_CONFIG.establishedYear} {COMPANY_CONFIG.brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer transition-colors" onClick={() => onNavigate('privacy')}>Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors" onClick={() => onNavigate('terms')}>Terms of Service</span>
            <a href={`mailto:${COMPANY_CONFIG.contactEmail}`} className="hover:text-blue-400 transition-colors">
              {COMPANY_CONFIG.contactEmail}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
