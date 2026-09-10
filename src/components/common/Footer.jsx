import React from 'react';
import { useApp } from '../../context/AppContext';
import { BRAND_CONFIG } from '../../data/cmsData';
import { ArrowUpRight, Terminal, Shield, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const { openApplication, openIwaju, toggleAdmin } = useApp();

  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-obsidian-950 border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Background soft ambient radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-cyber-cyan/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/5">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-obsidian-900 border border-cyber-cyan/40 shadow-glow-cyan/20">
                <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                  <path d="M6 9L13 23H10L6 14L2 23H0L6 9Z" fill="#00F0FF" />
                  <path d="M17 9L24 23H21L17 14L13 23H11L17 9Z" fill="#818CF8" />
                  <circle cx="26" cy="10" r="2.5" fill="#00F0FF" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold font-display tracking-tight text-white">
                  WebX
                </span>
                <span className="text-xs font-mono text-slate-400 ml-1.5 uppercase">
                  by Iwaju
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              {BRAND_CONFIG.tagline} We engineer high-converting websites, bespoke online stores, and automated digital infrastructure for ambitious businesses.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-900 border border-cyber-cyan/20 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
                Digital Infrastructure by Iwaju
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-slate-400 hover:text-cyber-cyan transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#services')}
                  className="text-slate-400 hover:text-cyber-cyan transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#work')}
                  className="text-slate-400 hover:text-cyber-cyan transition-colors"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#process')}
                  className="text-slate-400 hover:text-cyber-cyan transition-colors"
                >
                  Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => openApplication('Business Website')}
                  className="text-cyber-cyan hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Apply for a Build</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Parent & Technology */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold mb-4">
              Ecosystem
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={openIwaju}
                  className="text-slate-400 hover:text-cyber-violet transition-colors flex items-center gap-1"
                >
                  <span>About Iwaju</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#technology')}
                  className="text-slate-400 hover:text-cyber-cyan transition-colors"
                >
                  AI + Automation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#clients')}
                  className="text-slate-400 hover:text-cyber-cyan transition-colors"
                >
                  Client Sectors
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#why-webx')}
                  className="text-slate-400 hover:text-cyber-cyan transition-colors"
                >
                  Why WebX
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Channels */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold mb-4">
              Contact & HQ
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                <a href={`mailto:${BRAND_CONFIG.contactEmail}`} className="hover:text-slate-200 transition-colors">
                  {BRAND_CONFIG.contactEmail}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                <span>{BRAND_CONFIG.supportPhone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                <span>{BRAND_CONFIG.location}</span>
              </li>
              <li className="pt-2 flex items-center gap-3">
                <a
                  href={BRAND_CONFIG.socials.x}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-obsidian-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <span className="font-bold text-xs">𝕏</span>
                </a>
                <a
                  href={BRAND_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-obsidian-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-colors"
                  aria-label="Instagram"
                >
                  <span className="font-bold text-xs">IG</span>
                </a>
                <a
                  href={BRAND_CONFIG.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-obsidian-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-colors"
                  aria-label="LinkedIn"
                >
                  <span className="font-bold text-xs">IN</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {BRAND_CONFIG.copyrightYear} WebX by Iwaju. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleAdmin}
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-cyber-cyan transition-colors"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>CMS Admin Console</span>
            </button>
            <span className="text-slate-700">•</span>
            <span>Digital Infrastructure Division</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
