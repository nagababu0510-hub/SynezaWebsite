import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '@/components/common/SeoHead';
import { Button } from '@/components/common/Button';
import { Home, ArrowLeft, Search, GraduationCap, Code2, Sparkles } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Page Not Found (404) | Syneza Technologies"
        description="The requested page could not be found on Syneza Technologies."
      />

      <div className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="w-20 h-20 rounded-2xl bg-blue-50 border border-blue-200 text-blue-800 flex items-center justify-center mx-auto text-3xl font-extrabold font-mono shadow-sm">
          404
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-base text-slate-700 max-w-md mx-auto leading-relaxed">
            The page you requested may have been relocated, disabled in configuration, or does not exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button variant="primary" size="md" href="/">
            <Home className="w-4 h-4 mr-2" />
            <span>Return to Homepage</span>
          </Button>
          <Button variant="outline" size="md" href="/contact">
            <span>Contact Support</span>
          </Button>
        </div>

        {/* Helpful links strip */}
        <div className="pt-10 border-t border-slate-200 text-left">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-4 text-center">
            Helpful Pathways
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              to="/services"
              className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-500 hover:shadow-xs transition-all group min-h-[44px] block focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <Code2 className="w-5 h-5 text-blue-800 mb-2" />
              <div className="text-sm font-bold text-slate-900 group-hover:text-blue-800">
                Technology Services
              </div>
              <p className="text-xs text-slate-700 mt-1">Custom software & maintenance</p>
            </Link>

            <Link
              to="/education"
              className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-500 hover:shadow-xs transition-all group min-h-[44px] block focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              <GraduationCap className="w-5 h-5 text-emerald-800 mb-2" />
              <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-900">
                Education & College
              </div>
              <p className="text-xs text-slate-700 mt-1">Assessments & simulations</p>
            </Link>

            <Link
              to="/ai-solutions"
              className="p-4 rounded-xl border border-slate-200 bg-white hover:border-purple-500 hover:shadow-xs transition-all group min-h-[44px] block focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <Sparkles className="w-5 h-5 text-purple-900 mb-2" />
              <div className="text-sm font-bold text-slate-900 group-hover:text-purple-950">
                AI & LLM Solutions
              </div>
              <p className="text-xs text-slate-700 mt-1">Grounded RAG & workflows</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

