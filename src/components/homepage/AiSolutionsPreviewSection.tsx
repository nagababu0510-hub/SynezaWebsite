import React from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '@/context/ConfigContext';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import {
  Sparkles,
  BookOpen,
  Workflow,
  FileText,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { HomepageSection } from '@/types/config';

export const AiSolutionsPreviewSection: React.FC<{ section: HomepageSection }> = ({
  section,
}) => {
  const { config } = useConfig();
  const { aiServices } = config;

  const iconMap: Record<string, React.ReactNode> = {
    'retrieval-augmented-generation': <BookOpen className="w-5 h-5 text-purple-400" />,
    'ai-document-processing': <FileText className="w-5 h-5 text-purple-400" />,
    'ai-workflow-automation': <Workflow className="w-5 h-5 text-purple-400" />,
    'llm-integration': <Sparkles className="w-5 h-5 text-purple-400" />,
  };

  // Curate top 3 grounded enterprise solutions for maximum impact
  const topAiServices = aiServices.services
    .filter((s) => ['retrieval-augmented-generation', 'ai-document-processing', 'ai-workflow-automation'].includes(s.id))
    .slice(0, 3);

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <Badge variant="ai" className="mb-3 bg-purple-900/60 text-purple-300 border-purple-700/60">
              Pragmatic Enterprise AI
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {section.heading || 'Pragmatic AI & Knowledge Systems'}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
              {section.subtitle ||
                'Moving beyond novelty chatbots. Grounded knowledge retrieval, structured document extraction, and strict human authorization.'}
            </p>
          </div>
          {section.primaryCta && (
            <Button
              variant="outline"
              href={section.primaryCta.href}
              className="flex-shrink-0 self-start md:self-auto bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white"
            >
              <span>{section.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>

        {/* Responsible AI Security Strip */}
        <div className="mb-10 p-5 rounded-xl bg-purple-950/30 border border-purple-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-900/40 border border-purple-600/40 flex items-center justify-center text-purple-300 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              <strong className="text-white font-semibold">Security & Privacy Baseline:</strong> Zero proprietary data transmitted to public training pools. Verified document citations, pre-retrieval authorization, and human authorization for all consequential state changes.
            </p>
          </div>
          <Link
            to="/ai-solutions/llm-security-responsible-ai"
            className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex-shrink-0 inline-flex items-center gap-1"
          >
            <span>Security Framework</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3-Column Flagship Enterprise AI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {topAiServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-slate-800/80 border border-slate-700/80 p-7 flex flex-col justify-between hover:border-purple-500/50 hover:bg-slate-800 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-900/40 border border-purple-700/50 flex items-center justify-center">
                    {iconMap[service.id] || <Sparkles className="w-5 h-5 text-purple-400" />}
                  </div>
                  {service.badge && (
                    <span className="text-[11px] font-semibold text-purple-300 bg-purple-900/50 px-2.5 py-0.5 rounded-full border border-purple-700/60 uppercase tracking-wider">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                  <Link
                    to={`/ai-solutions/${service.slug}`}
                    className="hover:text-purple-400 transition-colors focus:outline-none focus:underline"
                  >
                    {service.name}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Key Capabilities */}
                {service.keyCapabilities && service.keyCapabilities.length > 0 && (
                  <ul className="space-y-1.5 mb-5 text-xs text-slate-300">
                    {service.keyCapabilities.slice(0, 2).map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Core Stack Highlight */}
                {service.technologies && service.technologies.length > 0 && (
                  <div className="pt-3 border-t border-slate-700/60 mb-4 flex items-center gap-2 text-xs text-slate-300">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 flex-shrink-0">
                      Stack:
                    </span>
                    <span className="truncate font-medium text-slate-200" title={service.technologies.join(', ')}>
                      {service.technologies.slice(0, 4).join(' · ')}
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between">
                <Link
                  to={`/ai-solutions/${service.slug}`}
                  className="min-h-[44px] inline-flex items-center text-xs sm:text-sm font-bold text-purple-300 hover:text-purple-200 focus:outline-none focus:underline group"
                >
                  <span>Explore Solution</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="min-h-[44px] inline-flex items-center text-xs text-slate-400 hover:text-white"
                >
                  Request Feasibility
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Navigation Strip */}
        <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-300 text-center sm:text-left">
            <strong className="text-white font-semibold">Discovery First:</strong> We evaluate data readiness and threat models before any client commits capital to LLM integration.
          </p>
          <Button
            variant="outline"
            size="sm"
            href="/ai-solutions"
            className="flex-shrink-0 bg-slate-800 border-slate-600 text-slate-100 hover:bg-slate-700"
          >
            <span>Explore All AI Capabilities</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
