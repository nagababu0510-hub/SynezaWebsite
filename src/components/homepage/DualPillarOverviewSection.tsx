import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { GraduationCap, Code2, ArrowRight, Check } from 'lucide-react';
import { HomepageSection } from '@/types/config';

export const DualPillarOverviewSection: React.FC<{ section: HomepageSection }> = ({
  section,
}) => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="neutral" className="mb-3">
            Integrated Dual-Pillar Model
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {section.heading || 'Two Complementary Business Pillars'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {section.subtitle ||
              'We combine practical software delivery with industry-oriented student readiness, creating a virtuous feedback loop of engineering craftsmanship and real-world talent.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Pillar A Deep Dive */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/30 p-8 sm:p-10 flex flex-col justify-between hover:shadow-card transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="p-3 bg-emerald-100 text-emerald-800 rounded-xl inline-block">
                  <GraduationCap className="w-8 h-8" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full">
                  Pillar A
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Education, Employability & Industry Readiness
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm sm:text-base">
                Engineering curriculums often focus on abstract theory. We help colleges and students identify concrete skill gaps and master the team practices, debugging techniques, and delivery discipline expected in commercial software roles.
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Core Programme Offerings
                </h4>
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Employability Assessment:</strong> Supervised paper-based and practical evaluations across 18 CS areas with 1-on-1 human technical interviews.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Software Company Simulation:</strong> 2-day (17-hour) intensive across 4 sprints with user stories, acceptance criteria, and change requests.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Technology Workshops:</strong> Hands-on tracks in Java, Spring Boot, Python, REST APIs, SQL, and practical Generative AI.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Institutional Gap Reports:</strong> Clear cohort analytics showing faculty exactly where students need guided remediation.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-emerald-200/80 flex items-center justify-between">
              <Link
                to="/education"
                className="inline-flex items-center text-sm font-semibold text-emerald-800 hover:text-emerald-950 group"
              >
                <span>Explore Education Programmes</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Button variant="teal" size="sm" href="/for-colleges">
                For Colleges
              </Button>
            </div>
          </div>

          {/* Pillar B Deep Dive */}
          <div className="rounded-2xl border border-blue-200 bg-blue-50/30 p-8 sm:p-10 flex flex-col justify-between hover:shadow-card transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="p-3 bg-blue-100 text-blue-800 rounded-xl inline-block">
                  <Code2 className="w-8 h-8" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-3 py-1 rounded-full">
                  Pillar B
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Software Engineering & AI Solutions
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm sm:text-base">
                Whether you need a new web application built from scratch, critical legacy systems maintained and stabilized, or practical AI integrated securely into existing workflows, we deliver reliable software without unnecessary bloat.
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Key Technical Capabilities
                </h4>
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Custom Software & Backend APIs:</strong> Clean web applications, enterprise portals, and microservices built with Java, React, and Python.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Maintenance & Modernization:</strong> Bug triage, root-cause fixes, technical debt reduction, and safe monolith modularization.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Grounded AI & RAG:</strong> Knowledge assistants with verifiable document source citations and defensive prompt guardrails.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Database & Quality Engineering:</strong> Schema modeling, SQL query tuning, automated test suites, and CI/CD quality gates.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-blue-200/80 flex items-center justify-between">
              <Link
                to="/services"
                className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-900 group"
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
