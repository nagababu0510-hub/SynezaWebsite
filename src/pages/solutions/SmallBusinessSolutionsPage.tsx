import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '@/components/common/SeoHead';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import {
  Briefcase,
  FileSpreadsheet,
  Layers,
  Wrench,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  DollarSign,
} from 'lucide-react';

export const SmallBusinessSolutionsPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Software Engineering for Small Businesses & Startups | Syneza Technologies"
        description="Practical software development, spreadsheet automation, MVP builds, and application maintenance for small businesses with controlled budgets."
        canonicalPath="/solutions/small-business"
      />

      <div className="pb-24">
        {/* Hero */}
        <header className="bg-slate-900 text-white py-16 lg:py-24 relative overflow-hidden border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <Badge variant="software">Small Business & Startup Solutions</Badge>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Practical Software Engineering Without Unnecessary Complexity
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Small businesses need reliable tools that solve real operational headaches—not over-engineered enterprise microservices or runaway cloud bills. We build clean web applications, automate manual spreadsheets, and maintain critical software within defined budgets.
              </p>
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Button variant="primary" size="lg" href="/contact?category=small-business">
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
          {/* Core Small Business Scenarios */}
          <section aria-labelledby="scenarios-heading">
            <div className="max-w-2xl mb-8">
              <Badge variant="neutral" className="mb-2">Practical Scenarios</Badge>
              <h2 id="scenarios-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                How We Help Small Growing Teams
              </h2>
              <p className="mt-2 text-slate-600 text-sm">
                Clear business language, pragmatic technology selection, and transparent scope control.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card hoverable className="p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Replacing Fragile Spreadsheets</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  When Excel files start crashing or causing costly data duplication across staff, we migrate your workflows into a secure, multiuser database web application.
                </p>
              </Card>

              <Card hoverable className="p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Building Your First MVP</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Turn your startup or product idea into a tested Minimum Viable Product with core user stories, rapid turnaround, and clean intellectual property handover.
                </p>
              </Card>

              <Card hoverable className="p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Rescuing Unmaintained Apps</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If previous freelancers left you with buggy code or no documentation, we audit the codebase, fix recurring bugs, and establish steady maintenance.
                </p>
              </Card>

              <Card hoverable className="p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Pragmatic AI Workflows</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Automate invoice parsing or support document search without expensive consultants or unpredictable API billing surprises.
                </p>
              </Card>

              <Card hoverable className="p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Controlled Budgets</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We work within fixed-scope milestones so you never receive an unexpected bill or ballooning development invoice.
                </p>
              </Card>

              <Card hoverable className="p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">100% IP Ownership</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  All source code, database scripts, documentation, and repository credentials belong entirely to your company upon milestone completion.
                </p>
              </Card>
            </div>
          </section>

          {/* CTA Banner */}
          <div className="p-8 sm:p-12 rounded-2xl bg-blue-600 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold">Have an idea or application you need help with?</h3>
              <p className="text-blue-100 text-sm max-w-xl">
                Tell us about your current workflow. We’ll outline a straightforward, budget-conscious path forward.
              </p>
            </div>
            <Button
              variant="secondary"
              size="lg"
              href="/contact?category=small-business"
              className="bg-white text-blue-900 hover:bg-slate-100 flex-shrink-0"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
