import React from 'react';
import { useApp } from '../../context/AppContext';

export const Testimonials = () => {
  const { testimonials, toggleAdmin } = useApp();

  return (
    <section className="relative py-28 bg-obsidian-950 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-slate-400">
            Proof of Impact
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            DON'T TAKE OUR WORD FOR IT.
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Direct feedback from founders, managing partners, and brand leaders who commissioned their digital presence with WebX by Iwaju.
          </p>
        </div>

        {/* Minimal Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className={`p-8 rounded-2xl border backdrop-blur-xl transition-all duration-300 flex flex-col justify-between ${
                test.isPlaceholder
                  ? 'bg-white/[0.01] border-dashed border-white/10'
                  : 'bg-white/[0.02] border-white/[0.08] hover:border-white/20'
              }`}
            >
              <div>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-display font-normal">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm text-white">
                    {test.clientName}
                  </div>
                  <div className="text-xs text-slate-400">
                    {test.role}, <span className="text-slate-300">{test.business}</span>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-slate-500">
                  {test.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
