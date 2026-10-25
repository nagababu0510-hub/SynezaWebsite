import React from 'react';
import { useConfig } from '@/context/ConfigContext';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import {
  Code2,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Cpu,
} from 'lucide-react';
import { HomepageSection } from '@/types/config';

export const HeroSection: React.FC<{ section: HomepageSection }> = ({ section }) => {
  const { config } = useConfig();
  const { site } = config;

  const heading = section.heading || site.tagline;
  const subtitle = section.subtitle || site.shortDescription;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-16 pb-24 lg:pt-24 lg:pb-32">
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

          {/* Dual CTAs for both pillars */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
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
                className="w-full sm:w-auto text-base bg-slate-800/60 text-slate-100 border-slate-700 hover:bg-slate-800 hover:text-white"
              >
                <GraduationCap className="w-5 h-5 mr-2 text-emerald-400" />
                <span>{section.secondaryCta.label}</span>
              </Button>
            )}
          </div>
        </div>

        {/* Dual Pillar Visual Banner */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Pillar A Card */}
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-emerald-500/50 transition-colors group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <Badge variant="education" size="sm">
                For Colleges & Students
              </Badge>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              Education & Industry Employability
            </h2>
            <p className="text-sm text-slate-300 mb-5 leading-relaxed">
              Supervised human-led diagnostic assessments across 18 CS areas, hands-on 2-day Agile delivery simulations, and practical technical workshops.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Human-led interviews & institutional skill-gap reports</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>2-day (17-hr) Software Company Simulation with sprints</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Grounded guidance: realistic preparation, zero hype</span>
              </li>
            </ul>
          </div>

          {/* Pillar B Card */}
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-blue-500/50 transition-colors group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Code2 className="w-6 h-6" />
              </div>
              <Badge variant="software" size="sm">
                For Small to Enterprise Firms
              </Badge>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              Software Engineering & AI Solutions
            </h2>
            <p className="text-sm text-slate-300 mb-5 leading-relaxed">
              Custom software engineering, legacy modernization, database tuning, API integrations, and grounded, secure Large Language Model adoption.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Enterprise Java / Spring Boot, TypeScript, and Python</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Application maintenance, bug fixing, and refactoring</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Grounded RAG assistants with verifiable source citations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
