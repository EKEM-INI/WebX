import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';

export const Navbar = () => {
  const { openApplication, openIwaju, toggleAdmin, currentTab, setTab } = useApp();
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
    { name: 'Services', tab: 'services' },
    { name: 'Work', tab: 'work' },
    { name: 'Why WebX', tab: 'why' },
    { name: 'Process', tab: 'process' },
    { name: 'AI + Tech', tab: 'technology' },
    { name: 'Clients', tab: 'clients' }
  ];

  const handleNavClick = (tabId) => {
    setMobileMenuOpen(false);
    setTab(tabId);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-obsidian-950/80 backdrop-blur-2xl border-b border-white/[0.08]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => setTab('overview')}
              className="flex items-center gap-3 group focus:outline-none text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-white transition-colors group-hover:border-cyber-cyan/50">
                <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none">
                  <path d="M6 9L13 23H10L6 14L2 23H0L6 9Z" fill="#00F0FF" />
                  <path d="M17 9L24 23H21L17 14L13 23H11L17 9Z" fill="#FFFFFF" opacity="0.9" />
                </svg>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-bold font-display tracking-tight text-white group-hover:text-cyber-cyan transition-colors">
                  WebX
                </span>
                <span className="text-[11px] font-mono tracking-wider uppercase text-slate-400">
                  by Iwaju
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = currentTab === link.tab;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.tab)}
                    className={`px-3.5 py-1.5 text-xs font-medium transition-colors rounded-full ${
                      isActive
                        ? 'bg-white text-obsidian-950 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
              <button
                onClick={() => setTab('iwaju')}
                className={`px-3.5 py-1.5 text-xs font-medium transition-colors rounded-full flex items-center gap-1 ${
                  currentTab === 'iwaju'
                    ? 'bg-white text-obsidian-950 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <span>Iwaju</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </button>
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleAdmin}
                title="CMS Console (Alt + A)"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
              >
                <Terminal className="w-4 h-4" />
              </button>

              <button
                onClick={() => openApplication('Business Website')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-obsidian-950 bg-white hover:bg-slate-200 transition-all duration-200 active:scale-[0.98] shadow-sm shadow-white/10"
              >
                <span>Build With WebX</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-obsidian-950" />
              </button>
            </div>

            {/* Mobile trigger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => openApplication('Business Website')}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-obsidian-950"
              >
                Build
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.05]"
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
        <div className="fixed inset-0 z-30 md:hidden bg-obsidian-950/98 backdrop-blur-2xl pt-24 px-6 pb-10 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
              Menu
            </div>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.tab)}
                className={`block w-full text-left py-2.5 text-lg font-medium border-b border-white/[0.05] ${
                  currentTab === link.tab ? 'text-white font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setTab('iwaju');
              }}
              className="w-full text-left py-2.5 text-lg font-medium text-slate-400 hover:text-white flex items-center justify-between border-b border-white/[0.05]"
            >
              <span>About Iwaju</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-6 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openApplication('Business Website');
              }}
              className="w-full py-3.5 rounded-full bg-white text-obsidian-950 font-semibold text-center text-sm"
            >
              Build With WebX →
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
