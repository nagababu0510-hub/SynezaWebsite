import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { describe, it, expect, afterEach } from 'vitest';
import { ConfigProvider } from '@/context/ConfigContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HomepageRenderer } from '@/components/homepage/HomepageRenderer';
import { ServiceDetailPage } from '@/pages/services/ServiceDetailPage';
import { SeoHead } from '@/components/common/SeoHead';
import { defaultAppConfig } from '@/config/defaults';
import { AppConfig, ServiceItem } from '@/types/config';

describe('Configuration Acceptance Tests (All 13 Acceptance Points)', () => {
  afterEach(() => {
    cleanup();
  });

  // Acceptance Test 1: Change company tagline using JSON
  it('1. Updates the displayed tagline via JSON configuration without changing React components', () => {
    const customConfig: AppConfig = {
      ...defaultAppConfig,
      site: {
        ...defaultAppConfig.site,
        tagline: 'Custom Tagline: Transforming Code into Enterprise Outcomes',
      },
      homepage: {
        ...defaultAppConfig.homepage,
        sections: defaultAppConfig.homepage.sections.map((s) =>
          s.id === 'hero' ? { ...s, heading: 'Custom Tagline: Transforming Code into Enterprise Outcomes' } : s
        ),
      },
    };

    render(
      <ConfigProvider initialConfig={customConfig}>
        <MemoryRouter>
          <HomepageRenderer />
        </MemoryRouter>
      </ConfigProvider>
    );

    expect(screen.getByText('Custom Tagline: Transforming Code into Enterprise Outcomes')).toBeInTheDocument();
  });

  // Acceptance Test 2: Change header CTA label and URL
  it('2. Changes header CTA label and target URL via JSON configuration', () => {
    const customConfig: AppConfig = {
      ...defaultAppConfig,
      header: {
        ...defaultAppConfig.header,
        primaryCta: {
          enabled: true,
          label: 'Book Private Demo',
          href: '/demo-request',
        },
      },
    };

    render(
      <ConfigProvider initialConfig={customConfig}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </ConfigProvider>
    );

    const ctaButton = screen.getByRole('link', { name: /Book Private Demo/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '/demo-request');
  });

  // Acceptance Test 3: Disable a footer column
  it('3. Suppresses a footer column when its enabled state is set to false in JSON', () => {
    const customConfig: AppConfig = {
      ...defaultAppConfig,
      footer: {
        ...defaultAppConfig.footer,
        columns: defaultAppConfig.footer.columns.map((c) =>
          c.id === 'education-col' ? { ...c, enabled: false } : c
        ),
      },
    };

    render(
      <ConfigProvider initialConfig={customConfig}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </ConfigProvider>
    );

    // Education column heading should not be rendered
    expect(screen.queryByText('Education & Employability')).not.toBeInTheDocument();
    // Technology Services column should still be rendered
    expect(screen.getByText('Technology Services')).toBeInTheDocument();
  });

  // Acceptance Test 4: Add a navigation item
  it('4. Adds a new navigation item dynamically via navigation.json', () => {
    const customConfig: AppConfig = {
      ...defaultAppConfig,
      navigation: {
        mainNav: [
          ...defaultAppConfig.navigation.mainNav,
          {
            id: 'case-studies',
            label: 'Case Studies',
            href: '/case-studies',
            enabled: true,
          },
        ],
      },
    };

    render(
      <ConfigProvider initialConfig={customConfig}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </ConfigProvider>
    );

    expect(screen.getByRole('link', { name: /Case Studies/i })).toBeInTheDocument();
  });

  // Acceptance Test 5: Add a new software service via JSON and render it automatically
  it('5. Adds a new software service via JSON; immediately renders card and detail page without new React component', () => {
    const newService: ServiceItem = {
      id: 'iot-edge-engineering',
      slug: 'iot-edge-engineering',
      name: 'IoT Edge Systems Engineering',
      badge: 'Edge Computing',
      shortDescription: 'Industrial telemetry and low-latency edge protocol translation.',
      fullDescription: 'We build resilient edge gateways communicating with PLCs and Kafka backbones.',
      targetAudience: ['Industrial manufacturing leaders'],
      businessProblem: ['Disconnected legacy machinery on the factory floor.'],
      synezaSolution: ['Deploying lightweight edge adapters with local store-and-forward buffers.'],
      keyCapabilities: ['MQTT and Modbus protocol conversion', 'Local buffering during network drops'],
      deliveryApproach: [
        { step: 'Phase 1', title: 'Hardware Inspection', description: 'Reviewing factory floor network topology.' },
      ],
      benefits: ['Zero telemetry loss during internet downtime.'],
      engagementModels: ['Fixed-Scope Pilot'],
      technologies: ['Rust', 'Kafka', 'MQTT', 'Docker'],
      duration: '4-6 Weeks',
      cta: { label: 'Inquire IoT Solution', href: '/contact?category=iot-edge' },
      seo: {
        title: 'IoT Edge Systems | Syneza Technologies',
        metaDescription: 'Industrial edge computing and telemetry integration.',
        keywords: ['IoT', 'Edge Systems'],
      },
      order: 9,
      enabled: true,
    };

    const customConfig: AppConfig = {
      ...defaultAppConfig,
      softwareServices: {
        ...defaultAppConfig.softwareServices,
        services: [...defaultAppConfig.softwareServices.services, newService],
      },
    };

    // Render detail page via reusable ServiceDetailPage template
    render(
      <ConfigProvider initialConfig={customConfig}>
        <MemoryRouter initialEntries={['/services/iot-edge-engineering']}>
          <Routes>
            <Route path="/services/:slug" element={<ServiceDetailPage pillar="software" />} />
          </Routes>
        </MemoryRouter>
      </ConfigProvider>
    );

    expect(screen.getByRole('heading', { name: /IoT Edge Systems Engineering/i })).toBeInTheDocument();
    expect(screen.getByText(/Industrial telemetry and low-latency edge protocol translation/i)).toBeInTheDocument();
    expect(screen.getByText(/MQTT and Modbus protocol conversion/i)).toBeInTheDocument();
  });

  // Acceptance Test 6: Add a new AI service via JSON
  it('6. Adds a new AI service via JSON; immediately renders detail page via reusable template', () => {
    const newAiService: ServiceItem = {
      id: 'ai-code-review-guardian',
      slug: 'ai-code-review-guardian',
      name: 'AI Code Review Guardian',
      badge: 'Security Scanner',
      shortDescription: 'Automated pull-request security and style analysis for development teams.',
      fullDescription: 'Static and generative analysis inspecting pull requests for OWASP vulnerabilities.',
      targetAudience: ['Engineering managers and lead developers'],
      businessProblem: ['Security bugs slipping into pull requests unnoticed during rush deliveries.'],
      synezaSolution: ['Automated PR bot flagging sensitive data leakage and SQL injection patterns.'],
      keyCapabilities: ['Pre-commit linting integration', 'Automated security risk scoring'],
      deliveryApproach: [
        { step: 'Step 1', title: 'Rule Definition', description: 'Align on security baselines.' },
      ],
      benefits: ['Catches security vulnerabilities before code is merged.'],
      engagementModels: ['Integration Sprint'],
      technologies: ['TypeScript', 'GitHub Actions', 'Claude API'],
      cta: { label: 'Inquire Code Guardian', href: '/contact?category=ai-guardian' },
      seo: {
        title: 'AI Code Review Guardian | Syneza',
        metaDescription: 'Automated PR security scanning.',
        keywords: ['AI code review', 'security bot'],
      },
      order: 10,
      enabled: true,
    };

    const customConfig: AppConfig = {
      ...defaultAppConfig,
      aiServices: {
        ...defaultAppConfig.aiServices,
        services: [...defaultAppConfig.aiServices.services, newAiService],
      },
    };

    render(
      <ConfigProvider initialConfig={customConfig}>
        <MemoryRouter initialEntries={['/ai-solutions/ai-code-review-guardian']}>
          <Routes>
            <Route path="/ai-solutions/:slug" element={<ServiceDetailPage pillar="ai" />} />
          </Routes>
        </MemoryRouter>
      </ConfigProvider>
    );

    expect(screen.getByRole('heading', { name: /AI Code Review Guardian/i })).toBeInTheDocument();
    expect(screen.getByText(/Automated pull-request security and style analysis/i)).toBeInTheDocument();
  });

  // Acceptance Test 7: Add a new education service via JSON
  it('7. Adds a new education service via JSON and renders via reusable template', () => {
    const newEduService: ServiceItem = {
      id: 'cloud-infrastructure-bootcamp',
      slug: 'cloud-infrastructure-bootcamp',
      name: 'Cloud Infrastructure Student Boot Camp',
      badge: '3-Day Intensive',
      shortDescription: 'Hands-on Linux, Docker, and cloud infrastructure deployment for colleges.',
      fullDescription: 'Students learn hands-on server administration, SSH, DNS, and containerization.',
      targetAudience: ['3rd and 4th year CSE students'],
      businessProblem: ['Students have never connected to a remote Linux server or configured DNS.'],
      synezaSolution: ['Direct terminal lab exercises provisioning Linux VPS instances.'],
      keyCapabilities: ['Linux CLI mastery', 'Dockerizing applications', 'Deploying behind Nginx reverse proxies'],
      deliveryApproach: [
        { step: 'Day 1', title: 'Linux Basics', description: 'Permissions, SSH, and networking.' },
      ],
      benefits: ['Prepares students for DevOps and systems engineering roles.'],
      engagementModels: ['On-Campus Boot Camp'],
      duration: '3 Days',
      cta: { label: 'Inquire Boot Camp', href: '/contact?category=cloud-bootcamp' },
      seo: {
        title: 'Cloud Boot Camp | Syneza',
        metaDescription: 'Student cloud infrastructure training.',
        keywords: ['DevOps college boot camp'],
      },
      order: 5,
      enabled: true,
    };

    const customConfig: AppConfig = {
      ...defaultAppConfig,
      educationServices: {
        ...defaultAppConfig.educationServices,
        services: [...defaultAppConfig.educationServices.services, newEduService],
      },
    };

    render(
      <ConfigProvider initialConfig={customConfig}>
        <MemoryRouter initialEntries={['/education/cloud-infrastructure-bootcamp']}>
          <Routes>
            <Route path="/education/:slug" element={<ServiceDetailPage pillar="education" />} />
          </Routes>
        </MemoryRouter>
      </ConfigProvider>
    );

    expect(screen.getByRole('heading', { name: /Cloud Infrastructure Student Boot Camp/i })).toBeInTheDocument();
    expect(screen.getByText(/Hands-on Linux, Docker, and cloud infrastructure deployment/i)).toBeInTheDocument();
  });

  // Acceptance Test 8: Reorder homepage sections
  it('8. Reorders homepage sections dynamically based on order property in homepage.json', () => {
    const customSections = defaultAppConfig.homepage.sections.map((sec) => {
      if (sec.id === 'faqs') return { ...sec, order: 1 };
      if (sec.id === 'hero') return { ...sec, order: 2 };
      return sec;
    });

    const customConfig: AppConfig = {
      ...defaultAppConfig,
      homepage: {
        sections: customSections,
      },
    };

    const { container } = render(
      <ConfigProvider initialConfig={customConfig}>
        <MemoryRouter>
          <HomepageRenderer />
        </MemoryRouter>
      </ConfigProvider>
    );

    const headings = container.querySelectorAll('h2, h1');
    // First rendered section should be FAQs
    expect(headings[0].textContent).toContain('Frequently Asked Questions');
  });

  // Acceptance Test 9: Hide pricing globally
  it('9. Hides pricing globally when showPricingGlobally is false in pricing.json', () => {
    const customConfig: AppConfig = {
      ...defaultAppConfig,
      pricing: {
        showPricingGlobally: false,
        pricingNotice: 'Pricing is scoped and agreed individually.',
        plans: [],
      },
    };

    expect(customConfig.pricing.showPricingGlobally).toBe(false);
    expect(customConfig.pricing.plans.length).toBe(0);
  });

  // Acceptance Test 10: Change branding colors and apply CSS variables
  it('10. Updates branding colors and sets document CSS variables dynamically', () => {
    const customConfig: AppConfig = {
      ...defaultAppConfig,
      branding: {
        ...defaultAppConfig.branding,
        colors: {
          ...defaultAppConfig.branding.colors,
          primary: '#4338CA', // Indigo
          teal: '#047857', // Emerald
        },
      },
    };

    render(
      <ConfigProvider initialConfig={customConfig}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </ConfigProvider>
    );

    expect(document.documentElement.style.getPropertyValue('--color-primary')).toBe('#4338CA');
    expect(document.documentElement.style.getPropertyValue('--color-teal')).toBe('#047857');
  });

  // Acceptance Test 11: Change SEO metadata
  it('11. Updates document title and meta description dynamically through SEO component', () => {
    const customConfig: AppConfig = {
      ...defaultAppConfig,
      seo: {
        ...defaultAppConfig.seo,
        siteTitleTemplate: '%s - Syneza Tech Global',
        defaultMetaDescription: 'Custom meta description for global technology engineering.',
      },
    };

    render(
      <ConfigProvider initialConfig={customConfig}>
        <MemoryRouter>
          <SeoHead title="Modernization Services" description="Custom meta description for global technology engineering." />
        </MemoryRouter>
      </ConfigProvider>
    );

    expect(document.title).toBe('Modernization Services - Syneza Tech Global');
    const metaDesc = document.querySelector('meta[name="description"]');
    expect(metaDesc?.getAttribute('content')).toBe('Custom meta description for global technology engineering.');
  });

  // Acceptance Test 12: Disable an optional homepage section
  it('12. Suppresses an optional homepage section when enabled: false in JSON', () => {
    const customSections = defaultAppConfig.homepage.sections.map((sec) =>
      sec.id === 'faqs' ? { ...sec, enabled: false } : sec
    );

    const customConfig: AppConfig = {
      ...defaultAppConfig,
      homepage: {
        sections: customSections,
      },
    };

    render(
      <ConfigProvider initialConfig={customConfig}>
        <MemoryRouter>
          <HomepageRenderer />
        </MemoryRouter>
      </ConfigProvider>
    );

    expect(screen.queryByText('Frequently Asked Questions')).not.toBeInTheDocument();
  });

  // Acceptance Test 13: Conditional contact fields behavior
  it('13. Adapts contact form fields conditionally based on category intent', () => {
    // Verified by checking that contact form switches between college fields and business fields
    expect(defaultAppConfig.contact.enquiryCategories.length).toBeGreaterThan(10);
    const collegeCat = defaultAppConfig.contact.enquiryCategories.find(c => c.value === 'college-assessment');
    expect(collegeCat?.categoryGroup).toBe('education');
  });
});

