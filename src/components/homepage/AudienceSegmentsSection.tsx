import React from 'react';
import { useConfig } from '@/context/ConfigContext';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Check, ArrowRight, Building, GraduationCap, Briefcase, Building2 } from 'lucide-react';
import { HomepageSection } from '@/types/config';

export const AudienceSegmentsSection: React.FC<{ section: HomepageSection }> = ({
  section,
}) => {
  const { config } = useConfig();
  const { audienceSegments } = config;

  const iconMap: Record<string, React.ReactNode> = {
    colleges: <GraduationCap className="w-5 h-5 text-emerald-600" />,
    students: <Building className="w-5 h-5 text-emerald-600" />,
    'small-business': <Briefcase className="w-5 h-5 text-blue-600" />,
    enterprise: <Building2 className="w-5 h-5 text-blue-600" />,
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="neutral" className="mb-3">
            Audience Pathways
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {section.heading || 'Tailored Customer Pathways'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {section.subtitle ||
              'We tailor our engagement models to the specific operating constraints and goals of different organizations.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {audienceSegments.segments
            .filter((seg) => seg.enabled)
            .map((seg) => {
              const isEdu = seg.pillar === 'education';
              return (
                <Card
                  key={seg.id}
                  borderTopColor={isEdu ? 'teal' : 'primary'}
                  className="flex flex-col justify-between p-6"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          isEdu ? 'bg-emerald-50' : 'bg-blue-50'
                        }`}
                      >
                        {iconMap[seg.id] || <Building className="w-5 h-5" />}
                      </div>
                      <Badge variant={isEdu ? 'education' : 'software'} size="sm">
                        {seg.badge}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {seg.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                      {seg.summary}
                    </p>

                    <div className="space-y-3 mb-6">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                        Primary Focus Areas
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {seg.coreConcerns.slice(0, 3).map((concern, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check
                              className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                                isEdu ? 'text-emerald-600' : 'text-blue-600'
                              }`}
                            />
                            <span>{concern}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Button
                      variant={isEdu ? 'teal' : 'primary'}
                      size="sm"
                      fullWidth
                      href={seg.primaryCta.href}
                    >
                      <span>{seg.primaryCta.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </div>
                </Card>
              );
            })}
        </div>
      </div>
    </section>
  );
};

