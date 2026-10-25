import React from 'react';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Code, CheckSquare, ShieldCheck, UserCheck } from 'lucide-react';
import { HomepageSection } from '@/types/config';

export const EngineeringPrinciplesSection: React.FC<{ section: HomepageSection }> = ({
  section,
}) => {
  const commitments = [
    {
      icon: <Code className="w-6 h-6 text-blue-700" />,
      title: 'Simplicity Over Complexity',
      description:
        'We select the simplest, most dependable architecture that reliably satisfies your business needs. No premature microservices, no unnecessary dependencies, and no resume-driven engineering.',
    },
    {
      icon: <CheckSquare className="w-6 h-6 text-blue-700" />,
      title: 'Automated Testing as a Deliverable',
      description:
        'Quality is an engineering release criterion, not a last-minute chore. Every codebase we ship includes automated unit and integration test suites so any competent engineer can maintain and extend it.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-700" />,
      title: 'Strict Data Privacy & Responsible AI',
      description:
        'We never expose client proprietary data or source code to public AI model training pools. Pre-retrieval authorization, boundary delimiters, and mandatory human sign-offs are foundational.',
    },
    {
      icon: <UserCheck className="w-6 h-6 text-blue-700" />,
      title: '100% Objective Human Evaluation',
      description:
        'True engineering readiness cannot be measured by automated multiple-choice tests. Our student diagnostics, interviews, and code reviews are conducted directly by active technology practitioners.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="neutral" className="mb-3">
            Core Engineering Standard
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {section.heading || 'Our Engineering Commitments'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {section.subtitle ||
              'Simplicity over hype. Automated testing as standard. Strict data privacy. 100% human evaluation.'}
          </p>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {commitments.map((item, idx) => (
            <Card key={idx} hoverable className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
