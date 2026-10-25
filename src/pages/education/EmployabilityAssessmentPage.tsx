import React from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '@/context/ConfigContext';
import { SeoHead } from '@/components/common/SeoHead';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import {
  ClipboardCheck,
  CheckCircle2,
  Users,
  ShieldAlert,
  FileSpreadsheet,
  ArrowRight,
  ChevronRight,
  BookOpen,
} from 'lucide-react';

export const EmployabilityAssessmentPage: React.FC = () => {
  const { config } = useConfig();
  const assessmentService = config.educationServices.services.find(
    (s) => s.slug === 'employability-assessment'
  );

  const evaluationTopics = [
    { title: 'Aptitude & Logical Reasoning', desc: 'Quantitative problem-solving, analytical deduction, and numerical interpretation.' },
    { title: 'Programming Fundamentals', desc: 'Control flow, memory models, recursion, modular decomposition, and algorithmic thinking.' },
    { title: 'Data Structures & Algorithms', desc: 'Arrays, linked lists, trees, graphs, sorting, searching, time and space complexity analysis.' },
    { title: 'Object-Oriented Programming (OOP)', desc: 'Encapsulation, abstraction, inheritance, polymorphism, design patterns, and SOLID principles.' },
    { title: 'Operating Systems & Concurrency', desc: 'Process scheduling, threads, synchronization primitives, deadlocks, and virtual memory.' },
    { title: 'Computer Networks', desc: 'OSI and TCP/IP models, HTTP/HTTPS protocols, DNS, socket communication, and routing basics.' },
    { title: 'Computer Architecture', desc: 'Instruction sets, CPU caching hierarchy, pipelining, and memory address translation.' },
    { title: 'Database Concepts & SQL', desc: 'Relational normalization (3NF), indexing, joins, aggregate queries, and ACID transactions.' },
    { title: 'Software Engineering Fundamentals', desc: 'SDLC models, requirements gathering, architectural separation of concerns, and clean code.' },
    { title: 'Software Testing & Quality', desc: 'Unit testing, test-driven logic, boundary analysis, mocking, and regression awareness.' },
    { title: 'Version Control (Git)', desc: 'Branching, commit hygiene, merge conflict resolution, rebasing, and remote workflows.' },
    { title: 'Web Technologies & REST APIs', desc: 'REST principles, status codes, JSON payloads, headers, statelessness, and authentication tokens.' },
    { title: 'Project Code Comprehension', desc: 'In-depth examination of final-year academic projects, evaluating individual contributions vs. borrowed code.' },
    { title: 'Technical Communication', desc: 'Articulating engineering tradeoffs, asking clarifying questions, and explaining technical logic.' },
    { title: 'Practical Coding Decomposition', desc: 'Live problem breakdown on whiteboard or paper without IDE autocorrect crutches.' },
    { title: 'One-on-One Human Technical Interviews', desc: '20-30 minute structured interviews conducted by active software engineers.' },
  ];

  return (
    <>
      <SeoHead
        title="Comprehensive Employability Assessment | Syneza Technologies"
        description="Supervised, human-led engineering employability assessments for colleges. Diagnostic skill-gap reports across 18 core software engineering areas."
        canonicalPath="/education/employability-assessment"
      />

      <div className="pb-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-slate-100/80 border-b border-slate-200 py-3 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link to="/education" className="hover:text-slate-900 transition-colors">Education & Employability</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-800 font-semibold">Employability Assessment</span>
          </div>
        </nav>

        {/* Hero */}
        <header className="bg-slate-900 text-white py-16 lg:py-20 relative overflow-hidden border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <Badge variant="education">Diagnostic Assessment</Badge>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Comprehensive Employability Assessment
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Supervised on-campus written and practical evaluations followed by 1-on-1 human technical interviews, providing institutions with an unvarnished diagnosis of student software engineering readiness.
              </p>
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Button variant="teal" size="lg" href="/contact?category=college-assessment">
                  <span>Schedule College Assessment Drive</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Core Principles & Accuracy Notice */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-elevated grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">100% Human-Led</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Evaluated by experienced software engineers. AI only assists with formatting aggregated summary reports.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ClipboardCheck className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Supervised & Practical</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Conducted under supervised on-campus conditions, eliminating copy-paste memorization.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Honest Expectations</h4>
                <p className="text-xs text-slate-600 mt-1">
                  We diagnose skill gaps; we never make misleading promises of guaranteed job placements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 16 Assessment Disciplines Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
          <section aria-labelledby="topics-heading">
            <div className="max-w-2xl mb-8">
              <Badge variant="neutral" className="mb-2">Assessment Scope</Badge>
              <h2 id="topics-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Evaluation Areas & Core Competencies
              </h2>
              <p className="mt-2 text-slate-600 text-sm">
                Calibrated to the student cohort, engineering branch, and specific institutional focus areas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {evaluationTopics.map((topic, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-emerald-500/50 transition-colors">
                  <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                    Area {idx + 1}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">{topic.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{topic.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Institutional Reporting Section */}
          <section aria-labelledby="reporting-heading" className="rounded-2xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <Badge variant="education">Actionable Analytics</Badge>
                <h2 id="reporting-heading" className="text-2xl sm:text-3xl font-extrabold text-white">
                  Institutional Skill-Gap Reporting
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Following the drive, college leadership and Training & Placement Officers receive comprehensive analytical reports. The data details cohort distribution, strong vs. weak disciplines across sections, and individual feedback cards.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Aggregated branch-level and section-level competency distribution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Identification of curriculum topics requiring lab reinforcement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Constructive individual improvement notes for every assessed student</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/90 p-6 rounded-xl border border-slate-700 space-y-4 text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                  <span className="font-bold text-white text-sm">Sample Institutional Report Dimensions</span>
                  <span className="text-emerald-400 font-mono font-semibold">CONFIDENTIAL</span>
                </div>
                <div className="space-y-2 text-slate-300">
                  <div className="flex justify-between">
                    <span>Problem Decomposition & Logic</span>
                    <span className="text-slate-400">Cohort Score: 64%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[64%]" />
                  </div>

                  <div className="flex justify-between pt-2">
                    <span>Database Modeling & SQL</span>
                    <span className="text-slate-400">Cohort Score: 52% (Focus Area)</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full w-[52%]" />
                  </div>

                  <div className="flex justify-between pt-2">
                    <span>Technical Interview Communication</span>
                    <span className="text-slate-400">Cohort Score: 58%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-[58%]" />
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-700">
                  Enables college management to commission targeted workshop interventions where they deliver maximum impact.
                </p>
              </div>
            </div>
          </section>

          {/* Action Callout */}
          <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-emerald-950">
                Interested in conducting an assessment drive for your institution?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800">
                Engagements are tailored around your batch sizes, semester dates, and academic schedules.
              </p>
            </div>
            <Button variant="teal" href="/contact?category=college-assessment">
              <span>Request College Drive Proposal</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
