import React from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '@/context/ConfigContext';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import {
  GraduationCap,
  ClipboardCheck,
  Laptop2,
  Users,
  Compass,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { HomepageSection } from '@/types/config';

export const EducationPreviewSection: React.FC<{ section: HomepageSection }> = ({
  section,
}) => {
  const { config } = useConfig();
  const { educationServices } = config;

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <Badge variant="education" className="mb-3">
              Academic Programs
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {section.heading || 'Education, Employability & Simulation'}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              {section.subtitle ||
                'Partnering with engineering colleges to diagnose technical gaps through human-led evaluations and immerse students in realistic Agile software company simulations.'}
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

        {/* Featured Dual Spotlight: Assessment & Simulation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Spotlight 1: Employability Assessment */}
          <div className="rounded-2xl border-2 border-emerald-600/30 bg-emerald-50/20 p-8 flex flex-col justify-between hover:shadow-card transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <ClipboardCheck className="w-6 h-6" />
                </div>
                <Badge variant="education">Human-Led Diagnostics</Badge>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Comprehensive Employability Assessment
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                A structured, supervised evaluation across 18 core software engineering areas—from OOP and Data Structures to Databases, APIs, and Version Control—culminating in 1-on-1 human technical interviews.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 mb-6 bg-white p-4 rounded-xl border border-emerald-100">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Supervised Paper Exam</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>1-on-1 Human Interviews</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Core CS & SQL Concepts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Institutional Gap Reports</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-emerald-100 flex items-center justify-between">
              <Link
                to="/education/employability-assessment"
                className="min-h-[44px] text-sm font-bold text-emerald-900 hover:text-emerald-950 focus:underline inline-flex items-center gap-1.5"
              >
                <span>Assessment Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs text-slate-700 font-semibold">1-2 Days On-Campus</span>
            </div>
          </div>

          {/* Spotlight 2: Software Company Simulation */}
          <div className="rounded-2xl border-2 border-blue-600/30 bg-blue-50/20 p-8 flex flex-col justify-between hover:shadow-card transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
                  <Laptop2 className="w-6 h-6" />
                </div>
                <Badge variant="software">2-Day Agile Immersion</Badge>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Software Company Simulation
              </h3>

              <p className="text-slate-700 text-sm leading-relaxed mb-6">
                An intensive 17-hour delivery simulation across four 4-hour sprints with user stories, acceptance criteria, branch merges, unexpected change requests, and executive proof-of-concept demonstrations.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-800 mb-6 bg-white p-4 rounded-xl border border-blue-100">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-800" />
                  <span>4 Structured Sprints (16h)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-800" />
                  <span>Git Branching & Merge PRs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-800" />
                  <span>Sprint 3 Change Request</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-800" />
                  <span>Working POC Demo</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-blue-100 flex items-center justify-between">
              <Link
                to="/education/software-company-simulation"
                className="min-h-[44px] text-sm font-bold text-blue-900 hover:text-blue-950 focus:underline inline-flex items-center gap-1.5"
              >
                <span>Simulation Structure</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs text-slate-700 font-semibold">17 Hours Total</span>
            </div>
          </div>
        </div>

        {/* Additional Education Pathways Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card hoverable className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg">
                  <Laptop2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900">Technology Workshops</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                Intensive practitioner tracks in enterprise backend architecture, REST APIs, database indexing, Git workflows, and practical AI integration.
              </p>
            </div>
            <Link
              to="/education/technology-workshops"
              className="min-h-[44px] text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1.5"
            >
              <span>View Topics Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Card>

          <Card hoverable className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900">Motivational Sessions</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                Fostering professional resilience, constructive responses to interview setbacks, and sustainable growth mindsets.
              </p>
            </div>
            <Link
              to="/education/motivational-sessions"
              className="min-h-[44px] text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1.5"
            >
              <span>Explore Sessions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Card>

          <Card hoverable className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900">For Engineering Colleges</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                Tailored institutional drives with custom cohort sizing, departmental scheduling, and transparent diagnostic reporting.
              </p>
            </div>
            <Link
              to="/for-colleges"
              className="min-h-[44px] text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1.5"
            >
              <span>Institutional Engagement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

