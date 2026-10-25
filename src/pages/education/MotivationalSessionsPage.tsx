import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '@/components/common/SeoHead';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import {
  Compass,
  HeartHandshake,
  Lightbulb,
  TrendingUp,
  Shield,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';

export const MotivationalSessionsPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Motivational & Career Readiness Sessions | Syneza Technologies"
        description="Fostering emotional resilience, constructive responses to setbacks, career awareness, and professional discipline for engineering students."
        canonicalPath="/education/motivational-sessions"
      />

      <div className="pb-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-slate-100/80 border-b border-slate-200 py-3 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link to="/education" className="hover:text-slate-900 transition-colors">Education & Employability</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-800 font-semibold">Motivational Sessions</span>
          </div>
        </nav>

        {/* Hero */}
        <header className="bg-slate-900 text-white py-16 lg:py-20 relative overflow-hidden border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <Badge variant="education">Professional Mindset</Badge>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Motivational & Inspirational Sessions
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Technical ability alone does not build a sustainable career. Our sessions equip aspiring engineers with emotional resilience, professional discipline, career clarity, and constructive responses to inevitable setbacks.
              </p>
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Button variant="teal" size="lg" href="/contact?category=motivational-sessions">
                  <span>Book a Session for Your College</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card hoverable className="p-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Resilience to Setbacks</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Reframing interview rejections and failed coding tests as diagnostic feedback rather than personal inadequacy.
              </p>
            </Card>

            <Card hoverable className="p-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">A Growth Mindset</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Embracing iterative improvement, active debugging patience, and learning through deliberate practice.
              </p>
            </Card>

            <Card hoverable className="p-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Career Realism</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Understanding industry career trajectories, avoiding short-term panic, and focusing on foundational craft over buzzwords.
              </p>
            </Card>

            <Card hoverable className="p-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Professional Discipline</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Workplace communication etiquette, accountability, peer collaboration, and ethical engineering habits.
              </p>
            </Card>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Frequently combined with Campus Assessment Drives</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Institutions often pair our technical diagnostic evaluations with an opening keynote to energize student preparation and establish a constructive learning mindset.
              </p>
            </div>
            <Button variant="teal" href="/contact?category=motivational-sessions">
              <span>Inquire for Auditorium Keynote</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
