import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { GraduationCap, Code2, ArrowRight, Check } from 'lucide-react';
import { HomepageSection } from '@/types/config';

export const DualPillarOverviewSection: React.FC<{ section: HomepageSection }> = ({
  section,
}) => {
  const [selectedPersona, setSelectedPersona] = useState<'all' | 'college' | 'business'>('all');

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge variant="neutral" className="mb-3">
            Core Practice Areas
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {section.heading || 'Two Disciplines. One High Standard.'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {section.subtitle ||
              'We partner with engineering colleges to build student capability, and with businesses to design, modernize, and maintain reliable software systems.'}
          </p>

          {/* Persona Quick Selector (WCAG 2.2 AAA SC 2.5.5 touch target >= 44px) */}
          <div
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
            role="tablist"
            aria-label="Customer pathways selector"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedPersona === 'all'}
              onClick={() => setSelectedPersona('all')}
              className={`min-h-[44px] px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 ${
                selectedPersona === 'all'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              All Practice Areas
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedPersona === 'college'}
              onClick={() => setSelectedPersona('college')}
              className={`min-h-[44px] px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700 ${
                selectedPersona === 'college'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-4 h-4 inline mr-1.5" />
              For Engineering Colleges
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedPersona === 'business'}
              onClick={() => setSelectedPersona('business')}
              className={`min-h-[44px] px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 ${
                selectedPersona === 'business'
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              <Code2 className="w-4 h-4 inline mr-1.5" />
              For Businesses & Enterprises
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Practice 1: Education & Readiness */}
          <div
            className={`rounded-2xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-200 ${
              selectedPersona === 'college'
                ? 'bg-emerald-50/50 border-2 border-emerald-600 shadow-xl'
                : selectedPersona === 'business'
                ? 'bg-slate-50/60 border border-slate-200 opacity-60'
                : 'rounded-2xl border border-emerald-200/90 bg-emerald-50/20 hover:shadow-card'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl inline-block">
                  <GraduationCap className="w-7 h-7" />
                </span>
                <Badge variant="education" size="sm">
                  Academic Programs
                </Badge>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Engineering Colleges & Students
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                We bridge curriculum gaps through objective diagnostic assessments and immersive 2-day Agile delivery simulations that prepare student cohorts for professional software engineering expectations.
              </p>

              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Core Offerings
                </h4>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Employability Assessment:</strong> Supervised paper & 1-on-1 practitioner interviews across 18 CS areas.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Software Company Simulation:</strong> 2-Day (17-hr) sprint-based Agile immersion in campus computer labs.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Institutional Gap Reports:</strong> Cohort analytics showing faculty curriculum areas requiring lab reinforcement.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-emerald-200/80 flex items-center justify-between">
              <Link
                to="/education"
                className="min-h-[44px] inline-flex items-center text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-950 group"
              >
                <span>Explore Education Programmes</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Button variant="teal" size="sm" href="/for-colleges">
                For Colleges
              </Button>
            </div>
          </div>

          {/* Practice 2: Technology Services & AI */}
          <div
            className={`rounded-2xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-200 ${
              selectedPersona === 'business'
                ? 'bg-blue-50/50 border-2 border-blue-600 shadow-xl'
                : selectedPersona === 'college'
                ? 'bg-slate-50/60 border border-slate-200 opacity-60'
                : 'rounded-2xl border border-blue-200/90 bg-blue-50/20 hover:shadow-card'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="p-2.5 bg-blue-100 text-blue-800 rounded-xl inline-block">
                  <Code2 className="w-7 h-7" />
                </span>
                <Badge variant="software" size="sm">
                  Engineering Services
                </Badge>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Businesses & Enterprises
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                From building custom web applications and microservices to maintaining unaddressed technical debt and integrating grounded AI, we deliver maintainable codebases built to endure.
              </p>

              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Key Capabilities
                </h4>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Custom Software:</strong> Modern web applications, microservices, and enterprise backend systems.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Maintenance & Modernization:</strong> Defect triage, dependency upgrades, and technical debt reduction.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Grounded AI & RAG:</strong> Domain-specific knowledge assistants with verifiable source citations.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-blue-200/80 flex items-center justify-between">
              <Link
                to="/services"
                className="min-h-[44px] inline-flex items-center text-xs sm:text-sm font-semibold text-blue-700 hover:text-blue-900 group"
              >
                <span>View Full Service Catalogue</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Button variant="primary" size="sm" href="/contact">
                Discuss a Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
