import React from 'react';
import { useConfig } from '@/context/ConfigContext';
import { Button } from '@/components/common/Button';
import {
  GraduationCap,
  ArrowRight,
} from 'lucide-react';
import { HomepageSection } from '@/types/config';

export const HeroSection: React.FC<{ section: HomepageSection }> = ({ section }) => {
  const { config } = useConfig();
  const { site } = config;

  const heading = section.heading || site.tagline;
  const subtitle = section.subtitle || site.shortDescription;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-16 pb-20 lg:pt-24 lg:pb-28">
      {/* Subtle decorative grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          {section.badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-blue-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {section.badge}
            </div>
          )}

          {/* Tagline / Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            {heading}
          </h1>

          {/* Supporting Statement */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
            {subtitle}
          </p>

          {/* Dual CTAs for both practices */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            {section.primaryCta && (
              <Button
                variant="primary"
                size="lg"
                href={section.primaryCta.href}
                className="w-full sm:w-auto text-base group"
              >
                <span>{section.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}
            {section.secondaryCta && (
              <Button
                variant="outline"
                size="lg"
                href={section.secondaryCta.href}
                className="w-full sm:w-auto text-base bg-slate-800/80 text-slate-100 border-slate-600 hover:bg-slate-700 hover:text-white"
              >
                <GraduationCap className="w-5 h-5 mr-2 text-emerald-400" />
                <span>{section.secondaryCta.label}</span>
              </Button>
            )}
          </div>
        </div>

        {/* Verifiable Impact & Practice Benchmarks (WCAG 2.2 AAA Contrast > 11:1) */}
        <div className="mt-16 pt-10 border-t border-slate-800/90 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center max-w-5xl mx-auto">
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/80">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">18+</div>
            <div className="text-xs sm:text-sm text-slate-200 font-semibold mt-1">CS Evaluation Topics</div>
            <p className="text-xs text-slate-300 mt-0.5">Supervised & human-led</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/80">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">17 Hours</div>
            <div className="text-xs sm:text-sm text-slate-200 font-semibold mt-1">Agile Simulation</div>
            <p className="text-xs text-slate-300 mt-0.5">4 sprints in campus labs</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/80">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
            <div className="text-xs sm:text-sm text-slate-200 font-semibold mt-1">Human Evaluated</div>
            <p className="text-xs text-slate-300 mt-0.5">Zero automated black boxes</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/80">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">Production</div>
            <div className="text-xs sm:text-sm text-slate-200 font-semibold mt-1">Architecture Standards</div>
            <p className="text-xs text-slate-300 mt-0.5">Tested & maintainable systems</p>
          </div>
        </div>
      </div>
    </section>
  );
};
