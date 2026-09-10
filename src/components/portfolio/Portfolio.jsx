import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { ProjectCard } from './ProjectCard';
import { ArrowRight } from 'lucide-react';

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
    <section id="work" className="relative py-28 bg-obsidian-950 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-slate-400">
              Selected Work
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              WE BUILD. <br />
              <span className="text-gradient-silver">YOU SEE THE DIFFERENCE.</span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              A selection of websites and digital experiences created by WebX. Each project is engineered with bespoke architecture, sub-second response times, and conversion psychology.
            </p>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-white/[0.06]">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-obsidian-950 font-semibold'
                    : 'bg-transparent text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};
