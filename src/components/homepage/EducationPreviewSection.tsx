import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { Card } from '@/components/common/Card';
import {
  ClipboardCheck,
  Laptop2,
  BarChart3,
  Wrench,
  Compass,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { HomepageSection } from '@/types/config';

export const EducationPreviewSection: React.FC<{ section: HomepageSection }> = ({
  section,
}) => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <Badge variant="education" className="mb-3">
              Academic Transformation
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {section.heading || 'The Academic Transformation Journey'}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              {section.subtitle ||
                'How we bridge the college curriculum gap through objective human-led diagnostics, immersive Agile delivery simulations, and institutional faculty analytics.'}
            </p>
          </div>
          {section.primaryCta && (
            <Button
              variant="teal"
              href={section.primaryCta.href}
              className="flex-shrink-0 self-start md:self-auto"
            >
              <span>{section.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>

        {/* 3-Stage Progressive Pathway (Zero Card Duplication) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Stage 1 */}
          <div className="rounded-2xl bg-white border border-slate-200 p-7 flex flex-col justify-between hover:shadow-card transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Phase 01 · Diagnostic
                </span>
                <ClipboardCheck className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                18-Topic Employability Diagnostic
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Supervised written evaluation and individual 1-on-1 human practitioner interviews across 18 core software engineering areas. Zero automated black-box scoring.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                  <span>Foundational logic & clean syntax</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                  <span>Relational data modeling & SQL</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                  <span>Debugging stack traces under pressure</span>
                </li>
              </ul>
            </div>
            <Link
              to="/education/employability-assessment"
              className="min-h-[44px] inline-flex items-center text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-950 focus:underline group"
            >
              <span>View Assessment Details</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stage 2 */}
          <div className="rounded-2xl bg-white border-2 border-emerald-500/40 p-7 flex flex-col justify-between hover:shadow-card transition-shadow relative">
            <div className="absolute -top-3 right-6 bg-emerald-700 text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-sm">
              Flagship Immersion
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Phase 02 · Immersion
                </span>
                <Laptop2 className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                17-Hour Agile Company Simulation
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                4 sprint cycles conducted inside campus labs. Student teams implement user stories, resolve git merge conflicts, handle mid-sprint change requests, and deliver working demos.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                  <span>Real sprint standups & backlog triage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                  <span>Collaborative Git branch reviews</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                  <span>Working proof-of-concept deliverable</span>
                </li>
              </ul>
            </div>
            <Link
              to="/education/software-company-simulation"
              className="min-h-[44px] inline-flex items-center text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-950 focus:underline group"
            >
              <span>Explore Simulation Format</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stage 3 */}
          <div className="rounded-2xl bg-white border border-slate-200 p-7 flex flex-col justify-between hover:shadow-card transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Phase 03 · Analytics
                </span>
                <BarChart3 className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Institutional Skill Gap Reports
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Transparent data-backed analytics provided to college leadership, heads of department, and placement faculty to pinpoint curriculum areas needing laboratory reinforcement.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                  <span>Batch-level diagnostic distribution</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                  <span>Individual student readiness scorecards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                  <span>Actionable recommendations for faculty</span>
                </li>
              </ul>
            </div>
            <Link
              to="/for-colleges"
              className="min-h-[44px] inline-flex items-center text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-950 focus:underline group"
            >
              <span>Institutional Drive Details</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Modular Reinforcement Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card hoverable className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-100 text-emerald-900 rounded-xl flex-shrink-0">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">
                  Practitioner-Led Technology Labs
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
                  Intensive 1-to-2 day hands-on workshops in enterprise backend architecture, REST API design, relational database tuning, and practical AI application integration.
                </p>
              </div>
            </div>
            <Link
              to="/education/technology-workshops"
              className="min-h-[44px] inline-flex items-center text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 flex-shrink-0 group"
            >
              <span>View Workshops</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Card>

          <Card hoverable className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-100 text-emerald-900 rounded-xl flex-shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">
                  Career Resilience & Mindset Keynotes
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
                  Grounded industry sessions fostering emotional resilience, constructive responses to recruitment setbacks, and sustainable growth mindsets for 30-year engineering careers.
                </p>
              </div>
            </div>
            <Link
              to="/education/motivational-sessions"
              className="min-h-[44px] inline-flex items-center text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 flex-shrink-0 group"
            >
              <span>Explore Sessions</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};
