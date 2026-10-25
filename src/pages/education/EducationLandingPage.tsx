import React from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '@/context/ConfigContext';
import { SeoHead } from '@/components/common/SeoHead';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import {
  GraduationCap,
  ClipboardCheck,
  Laptop2,
  Users,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building,
} from 'lucide-react';

export const EducationLandingPage: React.FC = () => {
  const { config } = useConfig();
  const { educationServices } = config;
  const overview = educationServices.pillarOverview;

  return (
    <>
      <SeoHead
        title="Education & Employability Services | Syneza Technologies"
        description="Bridging engineering education and industry expectations through human-led employability assessments, 2-day Agile simulations, and technical workshops."
        canonicalPath="/education"
      />

      <div className="pb-24">
        {/* Hero Section */}
        <header className="bg-slate-900 text-white py-16 lg:py-24 relative overflow-hidden border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <Badge variant="education">{overview.title}</Badge>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {overview.tagline}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {overview.description}
              </p>
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Button variant="teal" size="lg" href="/for-colleges">
                  <Building className="w-5 h-5 mr-2" />
                  <span>For Engineering Colleges</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/for-students"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  <GraduationCap className="w-5 h-5 mr-2" />
                  <span>For Students</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Human-Led Evaluation Commitment Callout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="p-6 rounded-2xl bg-emerald-950/90 text-white border border-emerald-700/80 shadow-elevated flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-800/80 flex items-center justify-center text-emerald-300 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-white mb-1">
                Our Human-Led Assessment Commitment
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                {overview.humanLedCommitment}
              </p>
            </div>
          </div>
        </div>

        {/* Core Programme Offerings Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
          <section aria-labelledby="programmes-heading">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Badge variant="neutral" className="mb-2">
                Structured Curriculums
              </Badge>
              <h2 id="programmes-heading" className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Employability & Training Offerings
              </h2>
              <p className="mt-2 text-slate-700 text-sm sm:text-base">
                Designed to be modular, supervised, and adapted to college academic schedules.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Employability Assessment */}
              <Card hoverable borderTopColor="teal" className="p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-900 flex items-center justify-center mb-5">
                    <ClipboardCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Comprehensive Employability Assessment
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6">
                    Supervised paper-based and practical evaluations across 18 CS areas, culminating in 1-on-1 human technical interviews and institutional gap reports.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                      <span>Covers Aptitude, OOP, Data Structures, SQL, OS, APIs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                      <span>One-on-one structured interviews with engineers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                      <span>Detailed institutional report for placement faculty</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to="/education/employability-assessment"
                    className="min-h-[44px] text-sm font-bold text-emerald-900 hover:text-emerald-950 focus:underline inline-flex items-center gap-1.5"
                  >
                    <span>Read Assessment Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-xs text-slate-500 font-medium">1-2 Days</span>
                </div>
              </Card>

              {/* Card 2: Software Company Simulation */}
              <Card hoverable borderTopColor="teal" className="p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-900 flex items-center justify-center mb-5">
                    <Laptop2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Software Company Simulation
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6">
                    A 2-day (17-hour) hands-on sprint delivery simulation. Four 4-hour sprints with user stories, acceptance criteria, branch merges, unexpected change requests, and working POC demos.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                      <span>Practical Agile immersion and role assignments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                      <span>Real Git merge conflicts and code review workflows</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                      <span>Demonstration of working proof-of-concept software</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to="/education/software-company-simulation"
                    className="min-h-[44px] text-sm font-bold text-emerald-900 hover:text-emerald-950 focus:underline inline-flex items-center gap-1.5"
                  >
                    <span>Explore Simulation Structure</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-xs text-slate-500 font-medium">17 Hours</span>
                </div>
              </Card>

              {/* Card 3: Technology Workshops */}
              <Card hoverable borderTopColor="teal" className="p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-900 flex items-center justify-center mb-5">
                    <Laptop2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Technology Workshops</h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6">
                    Practitioner-led coding workshops in Java 21, Spring Boot, Python, REST APIs, SQL query tuning, Git version control, and practical Generative AI integration.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                      <span>70% hands-on lab coding and live debugging</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                      <span>Verified instructor availability before scheduling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                      <span>Take-home repositories for ongoing practice</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to="/education/technology-workshops"
                    className="min-h-[44px] text-sm font-bold text-emerald-900 hover:text-emerald-950 focus:underline inline-flex items-center gap-1.5"
                  >
                    <span>View Workshop Catalog</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-xs text-slate-500 font-medium">1-3 Days</span>
                </div>
              </Card>

              {/* Card 4: Motivational & Mindset Sessions */}
              <Card hoverable borderTopColor="teal" className="p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-900 flex items-center justify-center mb-5">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Motivational & Career Sessions
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6">
                    Cultivating emotional resilience, professional etiquette, constructive responses to interview setbacks, and a sustainable growth mindset for lifelong engineering.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                      <span>Demystifying real-world engineering careers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                      <span>Overcoming interview anxiety and setback fatigue</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                      <span>Establishing self-directed learning habits</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to="/education/motivational-sessions"
                    className="min-h-[44px] text-sm font-bold text-emerald-900 hover:text-emerald-950 focus:underline inline-flex items-center gap-1.5"
                  >
                    <span>Read Session Focus</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-xs text-slate-500 font-medium">2-3 Hours</span>
                </div>
              </Card>
            </div>
          </section>

          {/* Institutional CTA */}
          <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800">
            <div className="space-y-3 max-w-xl text-center lg:text-left">
              <Badge variant="education">Partner With Syneza</Badge>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Plan a College Readiness Drive
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect with our academic coordination team to schedule a diagnostic assessment drive or delivery simulation for your pre-final or final-year engineering students.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Button variant="teal" size="lg" href="/contact?category=college-assessment">
                <span>Request Institutional Proposal</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

