import React from 'react';
import { useConfig } from '@/context/ConfigContext';
import { SeoHead } from '@/components/common/SeoHead';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import {
  Code2,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Target,
  Eye,
  Compass,
  ArrowRight,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { config } = useConfig();
  const { about, site, branding } = config;

  return (
    <>
      <SeoHead
        title="About Us | Syneza Technologies"
        description="Learn about Syneza Technologies, our engineering standards, software services, and commitment to student readiness."
        canonicalPath="/about"
      />

      <div className="pb-24">
        {/* Hero Section */}
        <header className="bg-slate-900 text-white py-16 lg:py-24 relative overflow-hidden border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <Badge variant="neutral" className="bg-white/10 text-white border-white/20">
                Company Overview
              </Badge>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Engineering Technology. Enabling Potential.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {about.purpose}
              </p>
            </div>
            {branding.logo.symbolSrc && (
              <div className="hidden md:flex flex-shrink-0 items-center justify-center p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 shadow-inner">
                <img
                  src={branding.logo.symbolSrc}
                  alt={`${branding.companyName} Brand Mark`}
                  className="w-32 h-32 lg:w-40 lg:h-40 object-contain drop-shadow-md"
                  width={160}
                  height={160}
                />
              </div>
            )}
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
          {/* Mission & Vision */}
          <section aria-labelledby="mission-heading" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h2 id="mission-heading" className="text-2xl font-bold text-slate-900 mb-3">
                  Our Mission
                </h2>
                <p className="text-slate-700 text-base leading-relaxed">{about.mission}</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h2>
                <p className="text-slate-700 text-base leading-relaxed">{about.vision}</p>
              </div>
            </div>
          </section>

          {/* Integrated Engineering & Education Philosophy */}
          <section aria-labelledby="philosophy-heading" className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white p-8 sm:p-12 border border-slate-800">
            <div className="max-w-3xl space-y-4">
              <Badge variant="neutral" className="bg-white/10 text-white border-white/20">
                The Connection
              </Badge>
              <h2 id="philosophy-heading" className="text-2xl sm:text-3xl font-extrabold text-white">
                How Our Engineering & Education Practices Connect
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                {about.dualPillarPhilosophy}
              </p>
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <Code2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Production Experience:</strong> Real client engineering problems feed directly into student curriculum realism.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <GraduationCap className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Educational Rigor:</strong> Teaching and assessing core fundamentals reinforces disciplined coding across all client deliverables.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section aria-labelledby="values-heading" className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <Badge variant="neutral" className="mb-2">
                Guiding Principles
              </Badge>
              <h2 id="values-heading" className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Core Values
              </h2>
              <p className="mt-2 text-slate-700 text-sm sm:text-base">
                How we interact with client organizations, academic partners, and aspiring engineers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {about.coreValues.map((val, idx) => (
                <Card key={idx} hoverable className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {val.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* Engineering Standards */}
          <section aria-labelledby="standards-heading" className="p-8 sm:p-10 rounded-2xl bg-slate-100/80 border border-slate-200">
            <h2 id="standards-heading" className="text-2xl font-bold text-slate-900 mb-4">
              Our Professional & Engineering Commitments
            </h2>
            <div className="space-y-3">
              {about.engineeringStandards.map((std, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-800 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">{std}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Optional Leadership Section (Disabled by default per prompt) */}
          {about.leadershipSection.enabled && about.leadershipSection.members.length > 0 && (
            <section aria-labelledby="leadership-heading" className="space-y-6">
              <h2 id="leadership-heading" className="text-2xl font-bold text-slate-900">
                {about.leadershipSection.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {about.leadershipSection.members.map((member, idx) => (
                  <Card key={idx} className="p-6">
                    <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                    <div className="text-xs text-blue-800 font-semibold mb-2">{member.role}</div>
                    <p className="text-xs text-slate-700">{member.bio}</p>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* CTA Banner */}
          <div className="p-8 sm:p-10 rounded-2xl bg-blue-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-2xl font-extrabold">Ready to work with Syneza?</h3>
              <p className="text-blue-100 text-sm max-w-xl">
                Whether you need software engineering capacity or wish to introduce our simulation to your engineering students, let’s have a conversation.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Button
                variant="secondary"
                size="md"
                href="/contact"
                className="bg-white text-blue-950 hover:bg-slate-100 font-bold"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

