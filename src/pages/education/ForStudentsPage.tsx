import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '@/components/common/SeoHead';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import {
  GraduationCap,
  Lightbulb,
  CheckCircle2,
  Code2,
  ArrowRight,
  HelpCircle,
  Sparkles,
} from 'lucide-react';

export const ForStudentsPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="For Engineering Students & Graduates | Syneza Technologies"
        description="Practical career preparation and technical expectations for engineering students. What technical interviewers look for, problem decomposition, and Agile teamwork."
        canonicalPath="/for-students"
      />

      <div className="pb-24">
        {/* Hero */}
        <header className="bg-slate-900 text-white py-16 lg:py-24 relative overflow-hidden border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <Badge variant="education">Student Preparation</Badge>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Transitioning from Student to Software Engineer
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Academic projects teach individual programming syntax. Commercial software delivery requires collaborative architecture, version control branching, automated testing, and clear technical communication under real deadlines.
              </p>
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Button variant="teal" size="lg" href="/education/software-company-simulation">
                  <span>Explore Software Simulation</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/education/technology-workshops"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  <span>View Technical Workshops</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
          {/* What Interviewers Actually Look For */}
          <section aria-labelledby="interviewers-heading">
            <div className="max-w-2xl mb-8">
              <Badge variant="neutral" className="mb-2">Demystifying Interviews</Badge>
              <h2 id="interviewers-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                What Technical Interviewers Actually Evaluate
              </h2>
              <p className="mt-2 text-slate-600 text-sm">
                Memorizing leetcode solutions is not enough. Senior engineers evaluate how you think, communicate, and test.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card hoverable className="p-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Problem Decomposition</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Can you break a vague requirement into smaller, testable sub-problems? Interviewers listen to your thought process and how you clarify assumptions before typing code.
                </p>
              </Card>

              <Card hoverable className="p-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Code Clarity & Edge Cases</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Clean naming, idiomatic constructs, handling null or boundary inputs, and thinking about memory and runtime complexity rather than hacking together quick fixes.
                </p>
              </Card>

              <Card hoverable className="p-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Project Ownership</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Can you deeply explain every architectural decision in your final-year project? Interviewers quickly identify whether code was genuinely written or copy-pasted.
                </p>
              </Card>
            </div>
          </section>

          {/* Academic vs Commercial Software Reality */}
          <section className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-card">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Academic Projects vs. Commercial Software
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div className="space-y-3 p-5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-700 text-xs uppercase tracking-wider block">
                  University Project Environment
                </span>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span>Requirements remain static for an entire semester</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span>Single developer or uncoordinated zip-file sharing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span>Evaluation focuses on a PowerPoint presentation and printed report</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3 p-5 rounded-xl bg-blue-50/50 border border-blue-200">
                <span className="font-bold text-blue-900 text-xs uppercase tracking-wider block">
                  Industry Software Squad Reality
                </span>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Requirements change mid-sprint based on client feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Git feature branches, pull requests, and peer code reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Automated test suites running on CI/CD pipelines before code is merged</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Student Action Banner */}
          <div className="p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-xl font-bold">Ask Your Placement Cell About Syneza Programmes</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Colleges across India partner with us to bring our Software Company Simulation and assessment drives directly to student batches.
              </p>
            </div>
            <Button variant="teal" href="/education/software-company-simulation">
              <span>View Simulation Details</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
