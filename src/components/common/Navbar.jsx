import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Menu, X, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';

export const Navbar = () => {
  const { openApplication, openIwaju, toggleAdmin } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Why WebX', href: '#why-webx' },
    { name: 'Process', href: '#process' },
    { name: 'AI + Tech', href: '#technology' },
    { name: 'Clients', href: '#clients' }
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-obsidian-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-obsidian-900 border border-cyber-cyan/30 group-hover:border-cyber-cyan transition-all duration-300 shadow-glow-cyan/20 group-hover:shadow-glow-cyan">
                {/* Custom Tech Monogram */}
                <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                  <path d="M6 9L13 23H10L6 14L2 23H0L6 9Z" fill="#00F0FF" />
                  <path d="M17 9L24 23H21L17 14L13 23H11L17 9Z" fill="#818CF8" opacity="0.85" />
                  <circle cx="26" cy="10" r="2.5" fill="#00F0FF" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-bold font-display tracking-tight text-white group-hover:text-cyber-cyan transition-colors">
                    WebX
                  </span>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-slate-400">
                    by Iwaju
                  </span>
                </div>
                <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase">
                  Digital Infrastructure
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-obsidian-900/60 border border-white/5 backdrop-blur-md">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyber-cyan transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={openIwaju}
                className="px-3 py-1.5 text-xs font-medium text-cyber-violet hover:text-white transition-colors rounded-lg hover:bg-cyber-violet/10 flex items-center gap-1"
              >
                <span>Iwaju</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleAdmin}
                title="Open CMS Console (Alt + A)"
                className="p-2 rounded-lg text-slate-400 hover:text-cyber-cyan hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
              >
                <Terminal className="w-4 h-4" />
              </button>

              <button
                onClick={() => openApplication('Business Website')}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-obsidian-950 bg-cyber-cyan hover:bg-white transition-all duration-200 shadow-glow-cyan/50 hover:shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Build With WebX</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => openApplication('Business Website')}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyber-cyan text-obsidian-950"
              >
                Build
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 border border-white/10"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-obsidian-950/95 backdrop-blur-2xl pt-24 px-6 pb-10 flex flex-col justify-between animate-fadeIn">
          <div className="space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">
              Navigation
            </div>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-3 text-lg font-medium text-slate-200 hover:text-cyber-cyan border-b border-white/5"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openIwaju();
              }}
              className="w-full text-left py-3 text-lg font-medium text-cyber-violet flex items-center justify-between border-b border-white/5"
            >
              <span>About Parent: Iwaju</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-6 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openApplication('Business Website');
              }}
              className="w-full py-3.5 rounded-xl bg-cyber-cyan text-obsidian-950 font-semibold text-center shadow-glow-cyan"
            >
              Build With WebX →
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openApplication('Online Store');
              }}
              className="w-full py-3 rounded-xl bg-obsidian-900 border border-white/10 text-white text-sm text-center"
            >
              Apply for a Store
            </button>
            <div className="text-center pt-2">
              <span className="text-[11px] font-mono text-slate-500">
                © 2026 WebX by Iwaju
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
