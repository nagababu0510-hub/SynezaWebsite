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
  CheckCircle2,
  GitBranch,
  Compass,
  ArrowRight,
} from 'lucide-react';
import { HomepageSection } from '@/types/config';

export const SoftwareServicesPreviewSection: React.FC<{ section: HomepageSection }> = ({
  section,
}) => {
  const { config } = useConfig();
  const { softwareServices } = config;

  const iconMap: Record<string, React.ReactNode> = {
    'custom-software-development': <Code2 className="w-5 h-5 text-blue-600" />,
    'software-maintenance': <Wrench className="w-5 h-5 text-blue-600" />,
    'application-modernization': <Layers className="w-5 h-5 text-blue-600" />,
    'api-system-integration': <Network className="w-5 h-5 text-blue-600" />,
    'database-engineering': <Database className="w-5 h-5 text-blue-600" />,
    'quality-engineering': <CheckCircle className="w-5 h-5 text-blue-600" />,
    'devops-delivery': <GitBranch className="w-5 h-5 text-blue-600" />,
    'technical-consulting-architecture': <Compass className="w-5 h-5 text-blue-600" />,
  };

  const enabledServices = softwareServices.services
    .filter((s) => s.enabled)
    .sort((a, b) => a.order - b.order);

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <Badge variant="software" className="mb-3">
              Engineering Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {section.heading || 'Software Engineering & Maintenance'}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              {section.subtitle ||
                'From custom web applications to legacy modernization and database optimization, we build systems designed for maintainability and reliability.'}
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

        {/* Dynamic Grid of Services Rendered from Configuration */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {enabledServices.map((service) => (
            <Card
              key={service.id}
              hoverable
              borderTopColor="primary"
              className="flex flex-col justify-between p-6"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
                    {iconMap[service.id] || <Code2 className="w-5 h-5 text-blue-800" />}
                  </div>
                  {service.badge && (
                    <span className="text-[10px] font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-300 uppercase">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-blue-800 transition-colors focus:outline-none focus:underline"
                  >
                    {service.name}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed line-clamp-3 mb-4">
                  {service.shortDescription}
                </p>

                {/* Key Capabilities */}
                {service.keyCapabilities && service.keyCapabilities.length > 0 && (
                  <ul className="space-y-1.5 mb-4 text-xs text-slate-700">
                    {service.keyCapabilities.slice(0, 2).map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-800 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{cap}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Core Stack Highlight without awkward overflow counts */}
                {service.technologies && service.technologies.length > 0 && (
                  <div className="pt-3 border-t border-slate-200 mb-4 flex items-center gap-1.5 text-xs text-slate-700">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 flex-shrink-0">
                      Stack:
                    </span>
                    <span className="truncate font-semibold text-slate-800" title={service.technologies.join(', ')}>
                      {service.technologies.slice(0, 4).join(' · ')}
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-slate-100">
                <Link
                  to={`/services/${service.slug}`}
                  className="min-h-[44px] inline-flex items-center text-xs sm:text-sm font-bold text-blue-800 hover:text-blue-950 focus:outline-none focus:underline group"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

