import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { ArrowRight } from 'lucide-react';

export const WorkPage = () => {
  const { projects, navigateTo } = useApp();
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
    <div className="py-20 bg-obsidian-950 min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 mb-12 pt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-slate-400">
            Portfolio Showroom
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-tight">
            SELECTED WORK.
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A comprehensive showcase of digital infrastructure, luxury dining portals, venture capital flagships, and headless e-commerce platforms engineered by WebX.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-white/[0.06] mb-12">
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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Commission Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-center space-y-4">
          <h3 className="text-2xl font-bold font-display text-white">
            Ready to have your business featured here?
          </h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            We limit concurrent builds every month to maintain our uncompromising level of craftsmanship.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigateTo('apply')}
              className="px-7 py-3 rounded-full bg-white text-obsidian-950 font-semibold text-xs hover:bg-slate-200 transition-all inline-flex items-center gap-2"
            >
              <span>Apply for Your Build</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
