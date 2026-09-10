import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { SectionBadge } from '../common/Badge';
import { ProjectCard } from './ProjectCard';
import { Filter, Sparkles, ArrowRight } from 'lucide-react';

export const Portfolio = () => {
  const { projects, openApplication } = useApp();
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All',
    'Business',
    'E-commerce',
    'Restaurant',
    'Creative',
    'Professional',
    'Other'
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(
      (p) => p.category.toLowerCase() === activeFilter.toLowerCase()
    );
  }, [projects, activeFilter]);

  return (
    <section id="work" className="relative py-28 bg-obsidian-950 border-t border-white/5 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] bg-cyber-cyan/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[24rem] h-[24rem] bg-cyber-violet/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div className="space-y-4 max-w-2xl">
            <SectionBadge color="cyan">
              Proof of Craft
            </SectionBadge>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              WE BUILD. <br />
              <span className="text-gradient-cyan">YOU SEE THE DIFFERENCE.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              A selection of websites and digital experiences created by WebX. Each project is engineered with bespoke architecture, sub-second response times, and conversion psychology.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="hidden md:flex flex-col items-end">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Curated Showcase
            </span>
            <span className="text-2xl font-bold font-display text-cyber-cyan">
              {filteredProjects.length} Experiences
            </span>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar border-b border-white/5">
          <span className="text-xs font-mono text-slate-500 flex items-center gap-1 mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </span>
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-cyber-cyan text-obsidian-950 font-semibold shadow-glow-cyan/40 scale-105'
                    : 'bg-obsidian-900/80 text-slate-400 hover:text-white hover:bg-obsidian-850 border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-white font-display">
              Want your business featured in our portfolio?
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              We take on a limited number of select builds every month to ensure unmatched execution.
            </p>
          </div>

          <button
            onClick={() => openApplication('Business Website')}
            className="px-6 py-3 rounded-xl bg-cyber-cyan text-obsidian-950 text-xs font-semibold hover:bg-white transition-all shadow-glow-cyan flex items-center gap-2 shrink-0"
          >
            <span>Apply for Your Build</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
