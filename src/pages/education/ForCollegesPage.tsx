import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '@/components/common/SeoHead';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import {
  GraduationCap,
  ClipboardCheck,
  Laptop2,
  FileSpreadsheet,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Building,
} from 'lucide-react';

export const ForCollegesPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="For Engineering Colleges & Placement Cells | Syneza Technologies"
        description="Partnering with engineering institutions for student diagnostic assessments, institutional skill-gap reports, and 2-day Agile software simulations."
        canonicalPath="/for-colleges"
      />

      <div className="pb-24">
        {/* Hero */}
        <header className="bg-slate-900 text-white py-16 lg:py-24 relative overflow-hidden border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <Badge variant="education">Institutional Partnership</Badge>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Empowering Colleges with Objective Engineering Readiness
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                We work directly with engineering college leadership, department heads, and Training & Placement Officers (TPOs) to objectively evaluate student capabilities, identify curriculum gaps, and prepare students for commercial software engineering expectations.
              </p>
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Button variant="teal" size="lg" href="/contact?category=college-assessment">
                  <span>Discuss a College Programme</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Institutional Pillars */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hoverable borderTopColor="teal" className="p-8">
              <ClipboardCheck className="w-8 h-8 text-emerald-700 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Diagnostic Gap Analytics</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Receive unvarnished branch-level data showing exactly which disciplines (e.g. SQL indexing, concurrency, memory models) need revision before corporate recruitment cycles begin.
              </p>
              <Link
                to="/education/employability-assessment"
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
              >
                <span>Read About Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Card>

            <Card hoverable borderTopColor="teal" className="p-8">
              <Laptop2 className="w-8 h-8 text-emerald-700 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Software Company Simulation</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Expose student batches to four 4-hour Agile sprints, real Git branch merges, change requests, and working proof-of-concept demos inside your own campus computer labs.
              </p>
              <Link
                to="/education/software-company-simulation"
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
              >
                <span>Read About Simulation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Card>

            <Card hoverable borderTopColor="teal" className="p-8">
              <FileSpreadsheet className="w-8 h-8 text-emerald-700 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tailored Cohort Sizing</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Engagements can be adapted to pre-final or final-year cohorts, specific departments (CSE, IT, ECE, MCA), or campus-wide multi-day recruitment preparation drives.
              </p>
              <Link
                to="/contact?category=college-assessment"
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
              >
                <span>Inquire Custom Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Card>
          </div>

          {/* Institutional Integrity Notice */}
          <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-slate-600 mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900">Our Institutional Code of Conduct</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe trust is earned through factual, transparent engagement. We do not invent client colleges, publish unverified statistics, or make false claims of guaranteed placements. Our mission is to elevate genuine student capability through disciplined, human-evaluated engineering rigor.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="p-8 sm:p-12 rounded-2xl bg-emerald-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold">Schedule an Initial Alignment Discussion</h3>
              <p className="text-emerald-200 text-sm max-w-xl">
                Let us understand your upcoming academic calendar, batch sizes, and placement goals to propose a customized drive.
              </p>
            </div>
            <Button
              variant="secondary"
              size="lg"
              href="/contact?category=college-assessment"
              className="bg-white text-emerald-950 hover:bg-slate-100"
            >
              <span>Discuss a College Programme</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

