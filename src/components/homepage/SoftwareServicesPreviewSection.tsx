import React from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '@/context/ConfigContext';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import {
  Code2,
  Wrench,
  Layers,
  Network,
  Database,
  CheckCircle,
  GitBranch,
  Compass,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { HomepageSection } from '@/types/config';

export const SoftwareServicesPreviewSection: React.FC<{ section: HomepageSection }> = ({
  section,
}) => {
  const { config } = useConfig();
  const { softwareServices } = config;

  const iconMap: Record<string, React.ReactNode> = {
    'custom-software-development': <Code2 className="w-5 h-5 text-blue-700" />,
    'software-maintenance': <Wrench className="w-5 h-5 text-blue-700" />,
    'application-modernization': <Layers className="w-5 h-5 text-blue-700" />,
    'api-system-integration': <Network className="w-5 h-5 text-blue-700" />,
    'database-engineering': <Database className="w-5 h-5 text-blue-700" />,
    'quality-engineering': <CheckCircle className="w-5 h-5 text-blue-700" />,
    'devops-delivery': <GitBranch className="w-5 h-5 text-blue-700" />,
    'technical-consulting-architecture': <Compass className="w-5 h-5 text-blue-700" />,
  };

  const enabledServices = softwareServices.services
    .filter((s) => s.enabled)
    .sort((a, b) => a.order - b.order)
    .slice(0, 4);

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <Badge variant="software" className="mb-3">
              Engineering Disciplines
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {section.heading || 'Enterprise Software & Maintainable Systems'}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              {section.subtitle ||
                'Architected for longevity. Delivered with automated test suites, clean directory structures, and transparent handover.'}
            </p>
          </div>
          {section.primaryCta && (
            <Button
              variant="outline"
              href={section.primaryCta.href}
              className="flex-shrink-0 self-start md:self-auto"
            >
              <span>{section.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>

        {/* 4-Quadrant Flagship Engineering Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {enabledServices.map((service) => (
            <Card
              key={service.id}
              hoverable
              borderTopColor="primary"
              className="flex flex-col justify-between p-7"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                    {iconMap[service.id] || <Code2 className="w-5 h-5 text-blue-800" />}
                  </div>
                  {service.badge && (
                    <span className="text-[11px] font-bold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 uppercase tracking-wider">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-blue-800 transition-colors focus:outline-none focus:underline"
                  >
                    {service.name}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Key Capabilities */}
                {service.keyCapabilities && service.keyCapabilities.length > 0 && (
                  <ul className="space-y-1.5 mb-5 text-xs text-slate-700">
                    {service.keyCapabilities.slice(0, 2).map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Core Stack Highlight without awkward overflow counts */}
                {service.technologies && service.technologies.length > 0 && (
                  <div className="pt-3 border-t border-slate-200 mb-4 flex items-center gap-2 text-xs text-slate-700">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 flex-shrink-0">
                      Stack:
                    </span>
                    <span className="truncate font-medium text-slate-800" title={service.technologies.join(', ')}>
                      {service.technologies.slice(0, 4).join(' · ')}
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/services/${service.slug}`}
                  className="min-h-[44px] inline-flex items-center text-xs sm:text-sm font-bold text-blue-800 hover:text-blue-950 focus:outline-none focus:underline group"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="min-h-[44px] inline-flex items-center text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Request Scope Review
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Global Service Catalog Footer Bar */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-700 text-center sm:text-left">
            <strong className="text-slate-900 font-bold">Comprehensive Capabilities:</strong> Also covering automated CI/CD delivery pipelines, API gateways, independent architecture audits, and database query tuning.
          </p>
          <Button variant="outline" size="sm" href="/services" className="flex-shrink-0">
            <span>Browse All 8 Services</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
