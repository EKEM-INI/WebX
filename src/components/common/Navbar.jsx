import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = () => {
  const { currentPage, navigateTo, toggleAdmin } = useApp();
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
    { name: 'Services', page: 'services' },
    { name: 'Work', page: 'work' },
    { name: 'Why WebX', page: 'why-webx' },
    { name: 'Process', page: 'process' },
    { name: 'Clients', page: 'clients' }
  ];

  const handleNavClick = (page) => {
    setMobileMenuOpen(false);
    navigateTo(page);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-obsidian-950/85 backdrop-blur-2xl border-b border-white/[0.08]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              onClick={() => navigateTo('home')}
              className="group focus:outline-none text-left"
            >
              <Logo />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              <button
                onClick={() => navigateTo('home')}
                className={`px-3.5 py-1.5 text-xs font-medium transition-colors rounded-full ${
                  currentPage === 'home'
                    ? 'bg-white text-obsidian-950 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                Home
              </button>

              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.page)}
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
                onClick={() => navigateTo('about-iwaju')}
                className={`px-3.5 py-1.5 text-xs font-medium transition-colors rounded-full flex items-center gap-1 ${
                  currentPage === 'about-iwaju'
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
                onClick={() => navigateTo('apply')}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 active:scale-[0.98] ${
                  currentPage === 'apply'
                    ? 'bg-cyber-cyan text-obsidian-950 shadow-glow-cyan'
                    : 'bg-white text-obsidian-950 hover:bg-slate-200 shadow-sm shadow-white/10'
                }`}
              >
                <span>Build With WebX</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-obsidian-950" />
              </button>
            </div>

            {/* Mobile trigger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => navigateTo('apply')}
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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-obsidian-950/98 backdrop-blur-2xl pt-24 px-6 pb-10 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
              Pages
            </div>
            <button
              onClick={() => handleNavClick('home')}
              className={`block w-full text-left py-2.5 text-lg font-medium border-b border-white/[0.05] ${
                currentPage === 'home' ? 'text-white font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Home
            </button>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.page)}
                className={`block w-full text-left py-2.5 text-lg font-medium border-b border-white/[0.05] ${
                  currentPage === link.page ? 'text-white font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('about-iwaju')}
              className={`w-full text-left py-2.5 text-lg font-medium flex items-center justify-between border-b border-white/[0.05] ${
                currentPage === 'about-iwaju' ? 'text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>About Iwaju</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-6 space-y-3">
            <button
              onClick={() => handleNavClick('apply')}
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
