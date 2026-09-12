import React from 'react';
import { useApp } from '../../context/AppContext';
import { BRAND_CONFIG } from '../../data/cmsData';
import { Terminal, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  const { navigateTo, toggleAdmin } = useApp();

  return (
    <footer className="relative bg-obsidian-950 border-t border-white/[0.06] pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/[0.06]">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => navigateTo('home')}
              className="text-left focus:outline-none group"
            >
              <Logo showTagline={true} />
            </button>

            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              {BRAND_CONFIG.tagline} We engineer high-converting websites, bespoke online stores, and automated digital infrastructure for ambitious businesses.
            </p>
          </div>

          {/* Column 2: Distinct Pages */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-300 font-semibold mb-3">
              Pages
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('work')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Selected Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('process')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('why-webx')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Why WebX
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('apply')}
                  className="text-white hover:underline transition-colors flex items-center gap-1"
                >
                  <span>Commission Build</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Ecosystem & Sectors */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-300 font-semibold mb-3">
              Ecosystem
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigateTo('about-iwaju')}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>About Iwaju</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('technology')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  AI + Tech
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('clients')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Client Sectors
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social Handles */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-300 font-semibold mb-3">
              Contact & Social
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href={`mailto:${BRAND_CONFIG.contactEmail}`} className="hover:text-white transition-colors">
                  {BRAND_CONFIG.contactEmail}
                </a>
              </li>
              <li>{BRAND_CONFIG.supportPhone}</li>
              <li>{BRAND_CONFIG.location}</li>
              <li>
                <a
                  href={BRAND_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-300"
                >
                  <svg className="w-3.5 h-3.5 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>Instagram: @iwajuofficial</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={BRAND_CONFIG.socials.x}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-300"
                >
                  <span className="font-bold text-xs text-slate-400 font-mono">𝕏</span>
                  <span>X (Twitter): @iwajuofficial</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li className="pt-2 flex items-center gap-2">
                <a
                  href={BRAND_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  title="Follow @iwajuofficial on Instagram"
                  className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/10 transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href={BRAND_CONFIG.socials.x}
                  target="_blank"
                  rel="noreferrer"
                  title="Follow on X"
                  className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-colors"
                >
                  <span className="font-bold text-[11px]">𝕏</span>
                </a>
                <a
                  href={BRAND_CONFIG.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="Follow on LinkedIn"
                  className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-colors"
                >
                  <span className="font-bold text-[11px]">IN</span>
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
