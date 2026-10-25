import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { ShieldAlert, Lock, UserCheck, EyeOff, FileCode2, ArrowRight } from 'lucide-react';
import { HomepageSection } from '@/types/config';

export const SecurityResponsibleAiSection: React.FC<{ section: HomepageSection }> = ({
  section,
}) => {
  const securityControls = [
    {
      icon: <Lock className="w-5 h-5 text-purple-600" />,
      title: 'Data Minimization & Privacy',
      desc: 'We never transmit confidential business records or PII to external AI model APIs without explicit authorization and agreed zero-retention parameters.',
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-purple-600" />,
      title: 'Prompt-Injection Defense',
      desc: 'We employ strict input boundaries, structured delimiter formats, and validation checks to defend against prompt tampering and jailbreaks.',
    },
    {
      icon: <EyeOff className="w-5 h-5 text-purple-600" />,
      title: 'Pre-Retrieval Access Control',
      desc: 'In RAG knowledge assistants, document authorization is verified before retrieval so queries only access records the user has permission to see.',
    },
    {
      icon: <UserCheck className="w-5 h-5 text-purple-600" />,
      title: 'Human-in-the-Loop Safeguards',
      desc: 'Consequential decisions, external communications, and transactional state changes always require explicit human operator confirmation.',
    },
    {
      icon: <FileCode2 className="w-5 h-5 text-purple-600" />,
      title: 'Zero Secrets in Code',
      desc: 'API keys, database credentials, and certificates are strictly kept out of version control and client bundles via secure environment mechanisms.',
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <Badge variant="ai" className="mb-3 bg-purple-900/60 text-purple-300 border-purple-700/60">
              Architectural Security
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {section.heading || 'Security-First & Responsible AI'}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
              {section.subtitle ||
                'Business AI solutions require much more than an API key. We engineer systems with deliberate threat modeling, input boundaries, and human accountability.'}
            </p>
          </div>
          <Link
            to="/ai-solutions/llm-security-responsible-ai"
            className="text-sm font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center gap-1.5 flex-shrink-0"
          >
            <span>Explore Security Framework</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityControls.map((ctrl, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-slate-800/80 border border-slate-700/80 p-6 hover:border-purple-500/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-950/60 border border-purple-800/60 flex items-center justify-center mb-4">
                {ctrl.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{ctrl.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{ctrl.desc}</p>
            </div>
          ))}

          {/* Statement Card */}
          <div className="rounded-xl bg-purple-950/40 border border-purple-800/50 p-6 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-300">
                Our Guarantee of Honesty
              </span>
              <h3 className="text-base font-bold text-white mt-1 mb-2">
                Realistic Boundaries Over Marketing Claims
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                No system is 100% immune to attacks or hallucinations. We distinguish between theoretical marketing promises and rigorously tested engineering guardrails.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-purple-900/60 text-xs text-purple-300 font-medium">
              Evaluated on curated benchmark test suites.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

