import React from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '@/context/ConfigContext';
import { SeoHead } from '@/components/common/SeoHead';
import { Card } from '@/components/common/Card';
import { ChevronRight, FileText } from 'lucide-react';

export const TermsPage: React.FC = () => {
  const { config } = useConfig();
  const terms = config.legal.termsOfService;

  return (
    <>
      <SeoHead
        title="Terms & Conditions | Syneza Technologies"
        description="Terms and conditions governing the use of the Syneza Technologies website and service inquiry workflows."
        canonicalPath="/terms"
      />

      <div className="pb-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-slate-100/80 border-b border-slate-200 py-3 text-xs text-slate-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-800 font-semibold">Terms & Conditions</span>
          </div>
        </nav>

        <header className="bg-slate-900 text-white py-16 border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Terms & Conditions</h1>
            <p className="text-xs text-slate-400">Last updated: {terms.lastUpdated}</p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <Card className="p-8 sm:p-10 space-y-8">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 flex items-start gap-3">
              <FileText className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
              <p>
                Draft website terms subject to final legal review. Formal service engagements between Syneza Technologies and its clients or college partners are executed through standalone, mutually agreed service contracts.
              </p>
            </div>

            {terms.sections.map((section, idx) => (
              <section key={idx} className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">{section.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed">{section.content}</p>
              </section>
            ))}
          </Card>
        </div>
      </div>
    </>
  );
};

