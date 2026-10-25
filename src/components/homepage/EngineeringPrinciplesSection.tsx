import React from 'react';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Code, CheckSquare, ShieldCheck, MessageSquareText, Layers, RefreshCw } from 'lucide-react';
import { HomepageSection } from '@/types/config';

export const EngineeringPrinciplesSection: React.FC<{ section: HomepageSection }> = ({
  section,
}) => {
  const principles = [
    {
      icon: <Code className="w-5 h-5 text-blue-600" />,
      title: 'Simplicity Over Hype',
      description:
        'We choose the simplest, most dependable technology stack that genuinely meets your business requirements. No premature microservices, no unnecessary frameworks, and no resume-driven engineering.',
    },
    {
      icon: <CheckSquare className="w-5 h-5 text-blue-600" />,
      title: 'Automated Testing as Standard',
      description:
        'Quality is an engineering deliverable, not a last-minute chore. Every system we deliver is backed by unit and integration test suites that protect against regressions and enable confident iteration.',
    },
    {
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      title: 'Maintainable by Others',
      description:
        'We write clear, idiomatic code with explicit contracts, clean directory structures, and documented interfaces. Any competent engineer can inspect, maintain, and extend the applications we build.',
    },
    {
      icon: <MessageSquareText className="w-5 h-5 text-blue-600" />,
      title: 'Transparent Communication',
      description:
        'We communicate openly about tradeoffs, technical debt, and risks. If a proposed feature is technically unfeasible or an AI experiment premature, we tell you frankly and propose practical alternatives.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      title: 'Architectural Defense',
      description:
        'Security is designed into the foundation: data minimization, input validation, pre-retrieval access control, zero secret leakage in codebases, and safe error handling.',
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-blue-600" />,
      title: 'Continuous Craftsmanship',
      description:
        'The same disciplined principles we apply to enterprise client systems inform our student assessment and simulation curriculums, ensuring academic relevance and engineering fidelity.',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="neutral" className="mb-3">
            Core Philosophy
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {section.heading || 'Our Engineering Principles'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {section.subtitle ||
              'We do not chase transient tech fads. We build durable software and instill real engineering discipline.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, idx) => (
            <Card key={idx} hoverable className="p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {p.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

