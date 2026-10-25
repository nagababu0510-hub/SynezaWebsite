import React from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '@/context/ConfigContext';
import { SeoHead } from '@/components/common/SeoHead';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import {
  Sparkles,
  BookOpen,
  Workflow,
  Headphones,
  FileText,
  ShieldCheck,
  Search,
  ArrowRight,
  Shield,
  CheckCircle2,
  Lock,
} from 'lucide-react';

export const AiSolutionsPage: React.FC = () => {
  const { config } = useConfig();
  const { aiServices } = config;
  const overview = aiServices.pillarOverview;

  const iconMap: Record<string, React.ReactNode> = {
    'llm-integration': <Sparkles className="w-6 h-6 text-purple-600" />,
    'retrieval-augmented-generation': <BookOpen className="w-6 h-6 text-purple-600" />,
    'ai-workflow-automation': <Workflow className="w-6 h-6 text-purple-600" />,
    'ai-customer-support': <Headphones className="w-6 h-6 text-purple-600" />,
    'ai-document-processing': <FileText className="w-6 h-6 text-purple-600" />,
    'ai-readiness-discovery': <Search className="w-6 h-6 text-purple-600" />,
    'llm-security-responsible-ai': <Shield className="w-6 h-6 text-purple-600" />,
  };

  const services = aiServices.services
    .filter((s) => s.enabled)
    .sort((a, b) => a.order - b.order);

  return (
    <>
      <SeoHead
        title="AI & LLM Solutions for Business | Syneza Technologies"
        description="Pragmatic Large Language Model integration, grounded RAG knowledge assistants with source citations, document processing, and AI workflow automation."
        canonicalPath="/ai-solutions"
      />

      <div className="pb-24">
        {/* Hero Section */}
        <header className="bg-slate-900 text-white py-16 lg:py-24 relative overflow-hidden border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <Badge variant="ai" className="bg-purple-900/60 text-purple-300 border-purple-700/60">
                {overview.title}
              </Badge>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {overview.tagline}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {overview.description}
              </p>
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact?category=ai-discovery"
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  <Search className="w-5 h-5 mr-2" />
                  <span>Schedule AI Discovery Sprint</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/ai-solutions/retrieval-augmented-generation"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  <span>Explore Grounded RAG</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Responsible AI Security Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          <div className="p-6 rounded-2xl bg-purple-950/90 text-white border border-purple-800/80 shadow-elevated flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-800/80 flex items-center justify-center text-purple-200 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-white mb-1">
                Our Responsible AI & Security Commitment
              </h3>
              <p className="text-xs sm:text-sm text-purple-100 leading-relaxed">
                {overview.responsibleAiStatement}
              </p>
            </div>
            <Link
              to="/ai-solutions/llm-security-responsible-ai"
              className="text-xs font-semibold text-purple-300 hover:text-white inline-flex items-center gap-1.5 flex-shrink-0"
            >
              <span>View Security Controls</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* AI Service Catalogue */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
          <section aria-labelledby="ai-catalogue-heading">
            <div className="max-w-2xl mb-12">
              <Badge variant="neutral" className="mb-2">AI Capabilities</Badge>
              <h2 id="ai-catalogue-heading" className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Enterprise AI & LLM Offerings
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                Engineered with clean provider abstractions, structured JSON validation, and strict boundary controls.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card
                  key={service.id}
                  hoverable
                  borderTopColor="ai"
                  className="flex flex-col justify-between p-8"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center">
                        {iconMap[service.id] || <Sparkles className="w-6 h-6 text-purple-600" />}
                      </div>
                      {service.badge && (
                        <span className="text-[10px] font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200 uppercase tracking-wide">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                      <Link
                        to={`/ai-solutions/${service.slug}`}
                        className="hover:text-purple-600 transition-colors focus:outline-none focus:underline"
                      >
                        {service.name}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-5 line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {/* Key Deliverables */}
                    {service.keyCapabilities && service.keyCapabilities.length > 0 && (
                      <div className="space-y-2 mb-5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                          Core Deliverables
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {service.keyCapabilities.slice(0, 3).map((cap, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-purple-800 mt-0.5 flex-shrink-0" />
                              <span className="leading-snug">{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Badges */}
                    {service.technologies && service.technologies.length > 0 && (
                      <div className="pt-4 border-t border-slate-200 mb-6">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block mb-2">
                          Frameworks & Architecture Patterns
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {service.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 text-xs font-semibold bg-slate-50 text-slate-800 border border-slate-300 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/ai-solutions/${service.slug}`}
                      className="min-h-[44px] text-sm font-bold text-purple-900 hover:text-purple-950 focus:underline inline-flex items-center gap-1.5 group"
                    >
                      <span>Explore Offering</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* 6-Step Configurable Delivery Process */}
          <section aria-labelledby="process-heading" className="rounded-2xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800">
            <div className="max-w-2xl mb-10">
              <Badge variant="ai" className="bg-purple-900/60 text-purple-300 border-purple-700/60">
                Disciplined Delivery
              </Badge>
              <h2 id="process-heading" className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                Our 6-Step AI Solutions Delivery Process
              </h2>
              <p className="mt-2 text-slate-300 text-sm">
                A structured engineering workflow that minimizes cost risk and maximizes operational value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {overview.deliveryProcess.map((step) => (
                <div key={step.step} className="p-6 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-3">
                  <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-sm flex items-center justify-center">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-white">{step.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Banner */}
          <div className="p-8 sm:p-10 rounded-2xl bg-purple-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-2xl font-bold">Unsure whether AI fits your business problem?</h3>
              <p className="text-purple-200 text-sm max-w-xl">
                Schedule a 1-week AI Readiness Discovery. We examine your workflows, data boundaries, and operational costs to give you an honest recommendation.
              </p>
            </div>
            <Button
              variant="secondary"
              size="lg"
              href="/contact?category=ai-discovery"
              className="bg-white text-purple-950 hover:bg-slate-100 flex-shrink-0"
            >
              <span>Request Feasibility Discovery</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

