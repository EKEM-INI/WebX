import React from 'react';
import { CLIENT_SECTORS } from '../../data/cmsData';
import { useApp } from '../../context/AppContext';
import { SectionBadge } from '../common/Badge';
import {
  Utensils,
  Sparkles,
  Briefcase,
  ShoppingBag,
  ShoppingCart,
  Rocket,
  Camera,
  MapPin,
  Wrench,
  Building2,
  ArrowRight
} from 'lucide-react';

export const ClientTypes = () => {
  const { openApplication } = useApp();

  const iconMap = {
    Utensils: Utensils,
    Sparkles: Sparkles,
    Briefcase: Briefcase,
    ShoppingBag: ShoppingBag,
    ShoppingCart: ShoppingCart,
    Rocket: Rocket,
    Camera: Camera,
    MapPin: MapPin,
    Wrench: Wrench,
    Building2: Building2
  };

  return (
    <section id="clients" className="relative py-28 bg-obsidian-950 border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[36rem] h-[36rem] bg-cyber-cyan/5 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionBadge color="cyan">
            Sector Versatility
          </SectionBadge>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            BUILT FOR BUSINESSES.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From high-growth ventures and luxury dining to specialized professional firms and brick-and-mortar retailers, WebX engineers custom digital presence tailored to your revenue model.
          </p>
        </div>

        {/* 10 Business Sector Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CLIENT_SECTORS.map((sector) => {
            const Icon = iconMap[sector.icon] || Building2;
            return (
              <div
                key={sector.id}
                onClick={() => openApplication(sector.name)}
                className="group p-5 rounded-2xl bg-obsidian-900/60 border border-white/10 hover:border-cyber-cyan/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-obsidian-950 border border-cyber-cyan/20 flex items-center justify-center text-cyber-cyan group-hover:bg-cyber-cyan group-hover:text-obsidian-950 transition-colors mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold font-display text-white group-hover:text-cyber-cyan transition-colors">
                    {sector.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {sector.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-cyber-cyan transition-colors">
                  <span>Build For {sector.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
