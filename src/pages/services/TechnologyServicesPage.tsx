import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '@/context/ConfigContext';
import { SeoHead } from '@/components/common/SeoHead';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
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
  Briefcase,
  CheckCircle2,
} from 'lucide-react';

export const TechnologyServicesPage: React.FC = () => {
  const { config } = useConfig();
  const { softwareServices, engagementModels } = config;
  const overview = softwareServices.pillarOverview;

  const iconMap: Record<string, React.ReactNode> = {
    'custom-software-development': <Code2 className="w-6 h-6 text-blue-600" />,
    'software-maintenance': <Wrench className="w-6 h-6 text-blue-600" />,
    'application-modernization': <Layers className="w-6 h-6 text-blue-600" />,
    'api-system-integration': <Network className="w-6 h-6 text-blue-600" />,
    'database-engineering': <Database className="w-6 h-6 text-blue-600" />,
    'quality-engineering': <CheckCircle className="w-6 h-6 text-blue-600" />,
    'devops-delivery': <GitBranch className="w-6 h-6 text-blue-600" />,
    'technical-consulting-architecture': <Compass className="w-6 h-6 text-blue-600" />,
  };

  const services = softwareServices.services
    .filter((s) => s.enabled)
    .sort((a, b) => a.order - b.order);

  return (
    <>
      <SeoHead
        title="Technology Services & Software Engineering | Syneza Technologies"
        description="Comprehensive software development, application maintenance, modernization, API integration, and database engineering services for businesses."
        canonicalPath="/services"
      />

      <div className="pb-24">
        {/* Hero Section */}
        <header className="bg-slate-900 text-white py-16 lg:py-24 relative overflow-hidden border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <Badge variant="software">{overview.title}</Badge>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {overview.tagline}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {overview.description}
              </p>
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Button variant="primary" size="lg" href="/contact">
                  <Briefcase className="w-5 h-5 mr-2" />
                  <span>Discuss Your Project</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/solutions/small-business"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  <span>Small Business Solutions</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Core Principles Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-elevated">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Our Core Engineering Commitments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm text-slate-700">
              {overview.principles.map((pr, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>{pr}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Complete Service Catalogue */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
          <section aria-labelledby="catalogue-heading">
            <div className="max-w-2xl mb-12">
              <Badge variant="neutral" className="mb-2">Full Catalogue</Badge>
              <h2 id="catalogue-heading" className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Software Services & Capabilities
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                Each service is delivered by experienced engineers with clean documentation and automated test suites.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card
                  key={service.id}
                  hoverable
                  borderTopColor="primary"
                  className="flex flex-col justify-between p-8"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                        {iconMap[service.id] || <Code2 className="w-6 h-6 text-blue-600" />}
                      </div>
                      {service.badge && (
                        <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 uppercase tracking-wide">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                      <Link
                        to={`/services/${service.slug}`}
                        className="hover:text-blue-600 transition-colors focus:outline-none focus:underline"
                      >
                        {service.name}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {/* Key Deliverables */}
                    {service.keyCapabilities && service.keyCapabilities.length > 0 && (
                      <div className="space-y-2 mb-5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Core Deliverables
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {service.keyCapabilities.slice(0, 3).map((cap, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span className="leading-snug">{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Badges */}
                    {service.technologies && service.technologies.length > 0 && (
                      <div className="pt-4 border-t border-slate-100 mb-6">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                          Representative Technologies & Frameworks
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {service.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200/80 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-sm font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1.5 group"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Engagement Models Section */}
          <section aria-labelledby="engagement-heading" className="rounded-2xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800">
            <div className="max-w-2xl mb-8">
              <Badge variant="software">Flexible Collaboration</Badge>
              <h2 id="engagement-heading" className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                Transparent Engagement Models
              </h2>
              <p className="mt-2 text-slate-300 text-sm">
                We agree on clear boundaries, deliverables, and service commitments before commencing any technical work.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {engagementModels.models.map((model) => (
                <div key={model.id} className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-2">{model.name}</h3>
                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">{model.description}</p>
                    <div className="text-[11px] font-semibold text-blue-400 mb-3">Ideal for: {model.idealFor}</div>
                  </div>
                  <Link
                    to="/contact"
                    className="text-xs font-semibold text-blue-300 hover:text-white inline-flex items-center gap-1"
                  >
                    <span>Inquire About Model</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="p-8 sm:p-10 rounded-2xl bg-blue-600 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-2xl font-bold">Have an application to build or maintain?</h3>
              <p className="text-blue-100 text-sm max-w-xl">
                Our senior engineering team is ready to review your requirements, assess technical constraints, and prepare a clear proposal.
              </p>
            </div>
            <Button
              variant="secondary"
              size="lg"
              href="/contact"
              className="bg-white text-blue-900 hover:bg-slate-100 flex-shrink-0"
            >
              <span>Start a Project Discussion</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

