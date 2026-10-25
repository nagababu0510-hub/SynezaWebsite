import React from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '@/context/ConfigContext';
import { SeoHead } from '@/components/common/SeoHead';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import {
  Laptop2,
  Clock,
  GitBranch,
  FileCode,
  AlertTriangle,
  Presentation,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Users,
} from 'lucide-react';

export const SoftwareCompanySimulationPage: React.FC = () => {
  const { config } = useConfig();
  const sim = config.educationServices.simulationDetails;

  return (
    <>
      <SeoHead
        title="Software Company Simulation Programme | Syneza Technologies"
        description="Two-day, 17-hour Agile software delivery simulation for engineering students. Sprint planning, prepared user stories, change requests, and working POC demos."
        canonicalPath="/education/software-company-simulation"
      />

      <div className="pb-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-slate-100/80 border-b border-slate-200 py-3 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link to="/education" className="hover:text-slate-900 transition-colors">Education & Employability</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-800 font-semibold">Software Company Simulation</span>
          </div>
        </nav>

        {/* Hero */}
        <header className="bg-slate-900 text-white py-16 lg:py-20 relative overflow-hidden border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <Badge variant="software">2-Day Industry Simulation</Badge>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Software Company Simulation
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                An intensive 17-hour immersion inside a simulated software delivery squad. Four structured sprints with user stories, acceptance criteria, Git merge conflicts, surprise client change requests, and executive proof-of-concept demonstrations.
              </p>
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Button variant="teal" size="lg" href="/contact?category=company-simulation">
                  <span>Schedule Simulation for College</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <div className="inline-flex items-center gap-2 text-xs text-slate-300 bg-slate-800 px-3.5 py-2 rounded-lg border border-slate-700">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>2 Days / 17 Total Programme Hours</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Accuracy Notice */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          <div className="p-4 sm:p-5 rounded-xl bg-blue-50 border border-blue-200 text-slate-800 flex items-start gap-3 shadow-card">
            <Laptop2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs sm:text-sm text-blue-950 leading-relaxed">
              <strong>Simulated Educational Environment:</strong> This programme is a simulated learning experience designed to teach collaborative software delivery and team Agile discipline. It does not constitute actual employment or an internship at a software company.
            </p>
          </div>
        </div>

        {/* 17-Hour Structure Breakdown */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
          <section aria-labelledby="structure-heading">
            <div className="max-w-2xl mb-10">
              <Badge variant="neutral" className="mb-2">Sprint Architecture</Badge>
              <h2 id="structure-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                The 17-Hour Programme Flow
              </h2>
              <p className="mt-2 text-slate-600 text-sm">
                One hour of Agile immersion followed by four 4-hour delivery sprints (16 hours sprint time).
              </p>
            </div>

            <div className="space-y-6">
              {sim?.structure.map((sprint, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-card flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="flex-shrink-0">
                    <span className="px-3.5 py-1.5 rounded-lg bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider block text-center">
                      {sprint.sprint}
                    </span>
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-xl font-bold text-slate-900">{sprint.title}</h3>
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        {sprint.focus}
                      </span>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 pt-2 font-medium">
                      {sprint.activities.map((act, actIdx) => (
                        <li key={actIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-800 mt-0.5 flex-shrink-0" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Change Request Highlight */}
          <section className="p-8 sm:p-10 rounded-2xl bg-amber-50 border border-amber-200">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-100 text-amber-800 rounded-xl flex-shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-amber-950">
                  The Sprint 3 Change Request: Where Real Learning Occurs
                </h3>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  In university projects, requirements remain static from day one. In commercial software delivery, requirements evolve constantly. During Sprint 3, our mentors introduce an unexpected client change request affecting schema models and API endpoints. Student squads must analyze the blast radius, refactor code, negotiate trade-offs, and maintain test coverage—giving them real stories to discuss during technical job interviews.
                </p>
              </div>
            </div>
          </section>

          {/* Learning Outcomes */}
          <section aria-labelledby="outcomes-heading" className="space-y-6">
            <h2 id="outcomes-heading" className="text-2xl font-bold text-slate-900">
              Key Learning Outcomes for Students
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sim?.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Action CTA */}
          <div className="p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-white">
                Bring the Simulation to Your Campus Labs
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Conducted over a weekend or departmental intensive for student cohorts.
              </p>
            </div>
            <Button variant="teal" href="/contact?category=company-simulation">
              <span>Schedule Simulation</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

