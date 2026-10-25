import React from 'react';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Check, ArrowRight, GraduationCap, Building2 } from 'lucide-react';
import { HomepageSection } from '@/types/config';

export const AudienceSegmentsSection: React.FC<{ section: HomepageSection }> = ({
  section,
}) => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="neutral" className="mb-3">
            Engagement Pathways
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {section.heading || 'Tailored Engagement Pathways'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {section.subtitle ||
              'Direct, transparent collaboration aligned with your institutional or business objectives.'}
          </p>
        </div>

        {/* 2-Track Executive Pathways */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Pathway 1: For Colleges */}
          <Card
            borderTopColor="teal"
            className="flex flex-col justify-between p-8 sm:p-9 hover:shadow-card transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <Badge variant="education" size="sm">
                  Academic Institutions
                </Badge>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Engineering Colleges & Universities
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Equipping placement cells, principals, and department heads with verified diagnostics and simulated Agile delivery that transforms student employability before campus hiring.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  What We Deliver
                </h4>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                    <span>Objective, supervised human evaluation across 18 core software engineering areas.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                    <span>2-Day (17-hour) intensive software company Agile simulation in campus computer labs.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                    <span>Transparent cohort gap reports providing faculty precise curriculum guidance.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
              <Button variant="teal" href="/for-colleges" className="w-full sm:w-auto">
                <span>Explore Institutional Drives</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>

          {/* Pathway 2: For Businesses */}
          <Card
            borderTopColor="primary"
            className="flex flex-col justify-between p-8 sm:p-9 hover:shadow-card transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
                  <Building2 className="w-7 h-7" />
                </div>
                <Badge variant="software" size="sm">
                  Businesses & Enterprises
                </Badge>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Growing Businesses & Tech Teams
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Providing founders, CTOs, and engineering leaders with disciplined software delivery, legacy modernization, database tuning, and grounded AI without resume-driven engineering.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  What We Deliver
                </h4>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>Fixed-scope or milestone-based development with automated test deliverables.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>Pragmatic legacy refactoring, monolith decoupling, and zero-downtime releases.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>Grounded enterprise RAG assistants with pre-retrieval authorization and zero training leakage.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
              <Button variant="primary" href="/contact" className="w-full sm:w-auto">
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
