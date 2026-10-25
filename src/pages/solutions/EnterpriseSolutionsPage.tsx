import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '@/components/common/SeoHead';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import {
  Building2,
  Layers,
  Network,
  Database,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  GitBranch,
  FileCheck2,
} from 'lucide-react';

export const EnterpriseSolutionsPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Enterprise & Growing Business Technology Services | Syneza Technologies"
        description="Disciplined engineering capacity for backend systems, legacy application modernization, high-throughput APIs, and secure enterprise AI adoption."
        canonicalPath="/solutions/enterprise"
      />

      <div className="pb-24">
        {/* Hero */}
        <header className="bg-slate-900 text-white py-16 lg:py-24 relative overflow-hidden border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <Badge variant="software">Growing & Enterprise Organizations</Badge>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Architectural Discipline for Complex Software Systems
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                As software systems scale, architectural decisions compound. We provide experienced engineering capacity for legacy modernization, high-throughput backend services, database tuning, and secure Large Language Model adoption.
              </p>
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Button variant="primary" size="lg" href="/contact?category=enterprise-solutions">
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/services/application-modernization"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  <span>Modernization Services</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
          {/* Core Enterprise Capabilities */}
          <section aria-labelledby="enterprise-focus">
            <div className="max-w-2xl mb-8">
              <Badge variant="neutral" className="mb-2">Enterprise Engineering</Badge>
              <h2 id="enterprise-focus" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Areas of Technical Engagement
              </h2>
              <p className="mt-2 text-slate-600 text-sm">
                Built to operate smoothly within existing governance, security review cycles, and deployment protocols.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card hoverable className="p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Legacy Modernization</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Incremental monolith decoupling, framework and Java runtime upgrades (e.g. Java 8/11 to 17/21), and modularization without the high risk of a total rewrite.
                </p>
              </Card>

              <Card hoverable className="p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Network className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">High-Throughput APIs & Messaging</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Contract-first REST API design with OpenAPI specs, Kafka event streams, idempotency enforcement, and third-party partner integration.
                </p>
              </Card>

              <Card hoverable className="p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Database Performance Tuning</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Execution plan diagnostics, indexing optimization, connection leak remediation, and safe schema migration testing with verified rollback plans.
                </p>
              </Card>

              <Card hoverable className="p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Grounded Enterprise RAG</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Knowledge assistants searching internal wikis and documents with pre-retrieval authorization, source passage citations, and zero model training leakage.
                </p>
              </Card>

              <Card hoverable className="p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Quality & Test Automation</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Building automated regression suites, API contract testing, and CI quality gates that prevent high-impact defects from reaching production.
                </p>
              </Card>

              <Card hoverable className="p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <GitBranch className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">CI/CD & Delivery Engineering</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Containerization with Docker, multi-stage pipeline configuration, deployment runbooks, and zero-downtime cutover strategies.
                </p>
              </Card>
            </div>
          </section>

          {/* Governance & Integrity Notice */}
          <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Authentic Capabilities & Clear Boundaries</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We distinguish intended capabilities from independently verified formal certifications. We do not claim unverified corporate partnerships or publish fictitious enterprise case studies. We engage on defined scopes with clear acceptance criteria and technical accountability.
            </p>
          </div>

          {/* CTA Banner */}
          <div className="p-8 sm:p-12 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold">Plan an Engineering Discovery Session</h3>
              <p className="text-slate-300 text-sm max-w-xl">
                Engage our technical architects to assess your architecture, technical debt, or planned system integration under NDA.
              </p>
            </div>
            <Button
              variant="primary"
              size="lg"
              href="/contact?category=enterprise-solutions"
              className="flex-shrink-0"
            >
              <span>Discuss Your Requirements</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
