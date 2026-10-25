import React from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '@/context/ConfigContext';
import { SeoHead } from '@/components/common/SeoHead';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import {
  Code2,
  Clock,
  Check,
  ArrowRight,
  ChevronRight,
  Sparkles,
  BookOpen,
} from 'lucide-react';

export const TechnologyWorkshopsPage: React.FC = () => {
  const { config } = useConfig();
  const catalog = config.educationServices.workshopCatalog || [];

  return (
    <>
      <SeoHead
        title="Technology Workshops for Engineering Colleges | Syneza Technologies"
        description="Hands-on technology workshops for engineering institutions. Enterprise backend architecture, REST APIs, SQL, Git, and practical LLM integration."
        canonicalPath="/education/technology-workshops"
      />

      <div className="pb-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-slate-100/80 border-b border-slate-200 py-3 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link to="/education" className="hover:text-slate-900 transition-colors">Education & Employability</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-800 font-semibold">Technology Workshops</span>
          </div>
        </nav>

        {/* Hero */}
        <header className="bg-slate-900 text-white py-16 lg:py-20 relative overflow-hidden border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <Badge variant="education">Practitioner-Taught Labs</Badge>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Technology Workshops
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Hands-on, project-backed workshops led by active technology practitioners. Designed to bridge curriculum gaps in modern enterprise backend frameworks, databases, and practical AI.
              </p>
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Button variant="teal" size="lg" href="/contact?category=technology-workshops">
                  <span>Inquire About Workshop Tracks</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Workshops Catalog */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-12">
          <div className="max-w-2xl">
            <Badge variant="neutral" className="mb-2">Available Tracks</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Curated Workshop Modules
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              We advertise availability transparently. All modules include guided code exercises and take-home starter repositories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalog.map((ws) => {
              const isAvailable = ws.status === 'Available';
              return (
                <Card key={ws.id} hoverable borderTopColor="teal" className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        {ws.track}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                          isAvailable
                            ? 'bg-emerald-50 text-emerald-900 border border-emerald-300'
                            : 'bg-amber-50 text-amber-950 border border-amber-300'
                        }`}
                      >
                        {ws.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {ws.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-slate-700 font-medium mb-4">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{ws.duration}</span>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                        Topics Covered:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                        {ws.topics.map((t, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-800 mt-0.5 flex-shrink-0" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Button
                      variant="outline"
                      size="sm"
                      fullWidth
                      href={`/contact?category=technology-workshops&track=${encodeURIComponent(ws.title)}`}
                    >
                      <span>Inquire About Track</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

