import React from 'react';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { ArrowRight, GraduationCap, Briefcase } from 'lucide-react';
import { HomepageSection } from '@/types/config';

export const FinalCtaSection: React.FC<{ section: HomepageSection }> = ({ section }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-slate-900 to-slate-950 text-white py-20">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <Badge variant="neutral" className="bg-white/10 text-white border-white/20">
          Get in Touch
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {section.heading || 'Ready to Collaborate?'}
        </h2>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {section.subtitle ||
            'Discuss your software engineering project, schedule an AI feasibility discovery, or tailor an employability readiness programme for your college.'}
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          {section.primaryCta && (
            <Button
              variant="primary"
              size="lg"
              href={section.primaryCta.href}
              className="w-full sm:w-auto text-base"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              <span>{section.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
          {section.secondaryCta && (
            <Button
              variant="outline"
              size="lg"
              href={section.secondaryCta.href}
              className="w-full sm:w-auto text-base bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              <GraduationCap className="w-5 h-5 mr-2 text-emerald-400" />
              <span>{section.secondaryCta.label}</span>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
