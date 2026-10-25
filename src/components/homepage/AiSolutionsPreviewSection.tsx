import React from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '@/context/ConfigContext';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
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
} from 'lucide-react';
import { HomepageSection } from '@/types/config';

export const AiSolutionsPreviewSection: React.FC<{ section: HomepageSection }> = ({
  section,
}) => {
  const { config } = useConfig();
  const { aiServices } = config;

  const iconMap: Record<string, React.ReactNode> = {
    'llm-integration': <Sparkles className="w-5 h-5 text-purple-600" />,
    'retrieval-augmented-generation': <BookOpen className="w-5 h-5 text-purple-600" />,
    'ai-workflow-automation': <Workflow className="w-5 h-5 text-purple-600" />,
    'ai-customer-support': <Headphones className="w-5 h-5 text-purple-600" />,
    'ai-document-processing': <FileText className="w-5 h-5 text-purple-600" />,
    'ai-readiness-discovery': <Search className="w-5 h-5 text-purple-600" />,
    'llm-security-responsible-ai': <Shield className="w-5 h-5 text-purple-600" />,
  };

  const enabledAiServices = aiServices.services
    .filter((s) => s.enabled)
    .sort((a, b) => a.order - b.order)
    .slice(0, 6);

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <Badge variant="ai" className="mb-3 bg-purple-900/60 text-purple-300 border-purple-700/60">
              Pragmatic Business AI
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {section.heading || 'AI & Large Language Model Solutions'}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
              {section.subtitle ||
                'Solving concrete operational challenges through grounded knowledge retrieval, document extraction, and human-in-the-loop workflows.'}
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

        {/* Responsible AI Callout Banner */}
        <div className="mb-10 p-5 rounded-xl bg-purple-950/40 border border-purple-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-800/40 border border-purple-600/40 flex items-center justify-center text-purple-300 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              <strong className="text-white font-semibold">Grounded & Defensive:</strong> We build with strict prompt boundaries, document source citations, least-privilege tool execution, and zero unverified hallucination claims.
            </p>
          </div>
          <Link
            to="/ai-solutions/llm-security-responsible-ai"
            className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex-shrink-0 inline-flex items-center gap-1"
          >
            <span>Read Security Controls</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Grid of AI Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enabledAiServices.map((service) => (
            <div
              key={service.id}
              className="rounded-xl bg-slate-800/80 border border-slate-700/80 p-6 flex flex-col justify-between hover:border-purple-500/50 hover:bg-slate-800 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-900/40 border border-purple-700/50 flex items-center justify-center">
                    {iconMap[service.id] || <Sparkles className="w-5 h-5 text-purple-400" />}
                  </div>
                  {service.badge && (
                    <span className="text-[10px] font-semibold text-purple-300 bg-purple-900/50 px-2 py-0.5 rounded border border-purple-700/60 uppercase">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  <Link
                    to={`/ai-solutions/${service.slug}`}
                    className="hover:text-purple-400 transition-colors focus:outline-none focus:underline"
                  >
                    {service.name}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4">
                  {service.shortDescription}
                </p>

                {/* Key Capabilities */}
                {service.keyCapabilities && service.keyCapabilities.length > 0 && (
                  <ul className="space-y-1.5 mb-4 text-xs text-slate-300">
                    {service.keyCapabilities.slice(0, 2).map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{cap}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Core Stack Highlight */}
                {service.technologies && service.technologies.length > 0 && (
                  <div className="pt-3 border-t border-slate-700/60 mb-4 flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 flex-shrink-0">
                      Stack:
                    </span>
                    <span className="truncate font-medium text-slate-300" title={service.technologies.join(', ')}>
                      {service.technologies.slice(0, 4).join(' · ')}
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-700/60">
                <Link
                  to={`/ai-solutions/${service.slug}`}
                  className="inline-flex items-center text-xs sm:text-sm font-semibold text-purple-400 hover:text-purple-300 group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

