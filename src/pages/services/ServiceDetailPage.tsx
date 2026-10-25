import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useConfig } from '@/context/ConfigContext';
import { SeoHead } from '@/components/common/SeoHead';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import {
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Layers,
  Wrench,
  Clock,
  Briefcase,
  Code2,
} from 'lucide-react';

interface ServiceDetailPageProps {
  pillar: 'software' | 'ai' | 'education';
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ pillar }) => {
  const { slug } = useParams<{ slug: string }>();
  const { config } = useConfig();

  // Find service from corresponding configuration
  let serviceList = config.softwareServices.services;
  let pillarPath = '/services';
  let pillarName = 'Technology Services';
  let badgeVariant: 'software' | 'ai' | 'education' = 'software';

  if (pillar === 'ai') {
    serviceList = config.aiServices.services;
    pillarPath = '/ai-solutions';
    pillarName = 'AI & LLM Solutions';
    badgeVariant = 'ai';
  } else if (pillar === 'education') {
    serviceList = config.educationServices.services;
    pillarPath = '/education';
    pillarName = 'Education & Employability';
    badgeVariant = 'education';
  }

  const service = serviceList.find((s) => s.slug === slug);

  if (!service || !service.enabled) {
    return <Navigate to="/404" replace />;
  }

  const schemaJsonLd = {
    '@type': 'Service',
    name: service.name,
    description: service.shortDescription,
    provider: {
      '@type': 'Organization',
      name: config.site.companyName,
      url: config.site.canonicalUrl,
    },
    serviceType: service.name,
  };

  return (
    <>
      <SeoHead
        title={service.seo.title}
        description={service.seo.metaDescription}
        canonicalPath={`${pillarPath}/${service.slug}`}
        jsonLd={schemaJsonLd}
      />

      <article className="pb-24">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="bg-slate-100/80 border-b border-slate-200 py-3 text-xs text-slate-500"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
            <Link to="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link to={pillarPath} className="hover:text-slate-900 transition-colors">
              {pillarName}
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-800 font-semibold truncate">{service.name}</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="bg-slate-900 text-white py-16 lg:py-20 relative overflow-hidden border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant={badgeVariant}>{pillarName}</Badge>
                {service.badge && (
                  <span className="px-2.5 py-1 text-xs font-semibold bg-white/10 text-white rounded-full border border-white/20">
                    {service.badge}
                  </span>
                )}
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {service.name}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {service.shortDescription}
              </p>
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Button variant="primary" size="lg" href={service.cta.href}>
                  <span>{service.cta.label}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                {service.duration && (
                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-300 bg-slate-800/80 px-3.5 py-2 rounded-lg border border-slate-700">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Estimated Duration: {service.duration}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Article Body */}
            <div className="lg:col-span-2 space-y-12">
              {/* Detailed Overview */}
              <section aria-labelledby="overview-heading" className="space-y-4">
                <h2 id="overview-heading" className="text-2xl font-bold text-slate-900">
                  Service Overview
                </h2>
                <p className="text-base text-slate-700 leading-relaxed">
                  {service.fullDescription}
                </p>
              </section>

              {/* The Business Challenge / Problem */}
              <section aria-labelledby="challenges-heading" className="space-y-4">
                <h2 id="challenges-heading" className="text-xl font-bold text-slate-900">
                  Challenges We Address
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.businessProblem.map((problem, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                        {problem}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* The Syneza Solution */}
              <section aria-labelledby="solution-heading" className="space-y-4">
                <h2 id="solution-heading" className="text-xl font-bold text-slate-900">
                  Our Engineering Approach
                </h2>
                <div className="space-y-3">
                  {service.synezaSolution.map((sol, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-blue-50/50 border border-blue-200/70 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                        {sol}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Key Capabilities */}
              <section aria-labelledby="capabilities-heading" className="space-y-4">
                <h2 id="capabilities-heading" className="text-xl font-bold text-slate-900">
                  Key Capabilities & Deliverables
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.keyCapabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs flex items-center gap-2.5"
                    >
                      <Layers className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-800 font-medium">{cap}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Step-by-Step Delivery Approach */}
              <section aria-labelledby="delivery-heading" className="space-y-6">
                <h2 id="delivery-heading" className="text-xl font-bold text-slate-900">
                  Phased Delivery Approach
                </h2>
                <div className="space-y-4">
                  {service.deliveryApproach.map((phase, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col sm:flex-row gap-4 sm:items-start"
                    >
                      <div className="px-3 py-1 rounded bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider flex-shrink-0 self-start">
                        {phase.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-slate-900 mb-1">{phase.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Expected Outcomes & Benefits */}
              <section aria-labelledby="benefits-heading" className="space-y-4">
                <h2 id="benefits-heading" className="text-xl font-bold text-slate-900">
                  Expected Business & Technical Outcomes
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-emerald-50/50 border border-emerald-200/70 flex items-start gap-2.5"
                    >
                      <Sparkles className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-800 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Meta Box */}
            <aside aria-label="Service Information" className="space-y-6">
              <Card className="p-6 space-y-6 sticky top-24">
                {/* Target Audience */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Who This Is For
                  </h3>
                  <div className="space-y-1.5">
                    {service.targetAudience.map((aud, idx) => (
                      <div key={idx} className="text-xs sm:text-sm text-slate-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span>{aud}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                {service.technologies && service.technologies.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Representative Technologies
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Engagement Models */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Available Engagement Models
                  </h3>
                  <div className="space-y-1.5">
                    {service.engagementModels.map((em, idx) => (
                      <div key={idx} className="text-xs sm:text-sm text-slate-700 flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                        <span>{em}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing Note */}
                {service.pricingNote && (
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 leading-relaxed">
                    <strong>Pricing & Scope:</strong> {service.pricingNote}
                  </div>
                )}

                {/* CTA Action */}
                <div className="pt-2">
                  <Button variant="primary" fullWidth href={service.cta.href}>
                    <span>{service.cta.label}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
};

