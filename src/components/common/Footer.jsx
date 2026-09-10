import React from 'react';
import { useApp } from '../../context/AppContext';
import { BRAND_CONFIG } from '../../data/cmsData';
import { Terminal, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  const { openApplication, openIwaju, toggleAdmin } = useApp();

  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-obsidian-950 border-t border-white/[0.06] pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/[0.06]">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-white">
                <svg className="w-3.5 h-3.5" viewBox="0 0 32 32" fill="none">
                  <path d="M6 9L13 23H10L6 14L2 23H0L6 9Z" fill="#00F0FF" />
                  <path d="M17 9L24 23H21L17 14L13 23H11L17 9Z" fill="#FFFFFF" opacity="0.9" />
                </svg>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-base font-bold font-display text-white">
                  WebX
                </span>
                <span className="text-[11px] font-mono text-slate-400 uppercase">
                  by Iwaju
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              {BRAND_CONFIG.tagline} We engineer high-converting websites, bespoke online stores, and automated digital infrastructure for ambitious businesses.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-300 font-semibold mb-3">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#services')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#work')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#process')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => openApplication('Business Website')}
                  className="text-white hover:underline transition-colors flex items-center gap-1"
                >
                  <span>Apply for Build</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Ecosystem */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-300 font-semibold mb-3">
              Ecosystem
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={openIwaju}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>About Iwaju</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#technology')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  AI + Tech
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#clients')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Client Sectors
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#why-webx')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Why WebX
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-300 font-semibold mb-3">
              Contact
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href={`mailto:${BRAND_CONFIG.contactEmail}`} className="hover:text-white transition-colors">
                  {BRAND_CONFIG.contactEmail}
                </a>
              </li>
              <li>{BRAND_CONFIG.supportPhone}</li>
              <li>{BRAND_CONFIG.location}</li>
              <li className="pt-2 flex items-center gap-2">
                <a
                  href={BRAND_CONFIG.socials.x}
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-colors"
                >
                  <span className="font-bold text-[10px]">𝕏</span>
                </a>
                <a
                  href={BRAND_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-colors"
                >
                  <span className="font-bold text-[10px]">IG</span>
                </a>
                <a
                  href={BRAND_CONFIG.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-colors"
                >
                  <span className="font-bold text-[10px]">IN</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {BRAND_CONFIG.copyrightYear} WebX by Iwaju. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleAdmin}
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-white transition-colors"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>CMS Console</span>
            </button>
            <span className="text-slate-700">•</span>
            <span>Digital Infrastructure Division</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
