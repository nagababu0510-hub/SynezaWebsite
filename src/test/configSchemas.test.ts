import { describe, it, expect } from 'vitest';
import {
  SiteConfigSchema,
  BrandingConfigSchema,
  NavigationConfigSchema,
  HeaderConfigSchema,
  FooterConfigSchema,
  HomepageConfigSchema,
  ServiceItemSchema,
  SoftwareServicesConfigSchema,
  AiServicesConfigSchema,
  EducationServicesConfigSchema,
} from '@/config/schemas';
import { validateWithFallback, ValidationIssue } from '@/services/configService';
import { defaultSiteConfig, defaultHeaderConfig, defaultFooterConfig } from '@/config/defaults';

describe('Configuration Schema Validation & Fallback Handling', () => {
  it('should validate valid SiteConfig correctly', () => {
    const validData = {
      companyName: 'Syneza Technologies Test',
      legalName: 'Syneza Technologies Private Limited',
      tagline: 'Engineering Technology. Enabling Potential.',
      shortDescription: 'Reliable software engineering and education readiness.',
      canonicalUrl: 'https://syneza.com',
      defaultLanguage: 'en',
      copyrightText: '© 2026 Syneza Technologies',
      contactEmail: 'contact@syneza.com',
      contactPhone: '+91 80 0000 0000',
      location: {
        city: 'Bengaluru',
        state: 'Karnataka',
        country: 'India',
      },
    };

    const errors: ValidationIssue[] = [];
    const result = validateWithFallback(validData, SiteConfigSchema, defaultSiteConfig, 'site.json', errors);

    expect(result.companyName).toBe('Syneza Technologies Test');
    expect(errors.length).toBe(0);
  });

  it('should safely fall back to default when required fields are malformed or invalid', () => {
    const invalidData = {
      companyName: 12345, // invalid type, should be string
      location: 'Invalid object', // invalid type, should be object
    };

    const errors: ValidationIssue[] = [];
    const result = validateWithFallback(
      invalidData,
      SiteConfigSchema,
      defaultSiteConfig,
      'site.json',
      errors
    );

    expect(result).toEqual(defaultSiteConfig);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].file).toBe('site.json');
  });

  it('should handle null or undefined data gracefully by returning fallback', () => {
    const errors: ValidationIssue[] = [];
    const result = validateWithFallback(null, HeaderConfigSchema, defaultHeaderConfig, 'header.json', errors);

    expect(result).toEqual(defaultHeaderConfig);
    expect(errors.length).toBe(1);
    expect(errors[0].message).toContain('null or undefined');
  });

  it('should validate a new custom service entry according to ServiceItemSchema', () => {
    const customService = {
      id: 'custom-iot-service',
      slug: 'custom-iot-service',
      name: 'Custom IoT & Edge Integration',
      shortDescription: 'Industrial edge gateway and sensor data integration.',
      fullDescription: 'Full lifecycle edge device connectivity and protocol translation.',
      targetAudience: ['Industrial manufacturing teams'],
      businessProblem: ['Disconnected PLC hardware and protocol mismatches'],
      synezaSolution: ['Lightweight edge gateways with MQTT and Kafka backbones'],
      keyCapabilities: ['Edge parsing', 'MQTT broker setup', 'Real-time alerting'],
      deliveryApproach: [
        { step: 'Phase 1', title: 'Hardware Audit', description: 'Review serial and network protocols' },
      ],
      benefits: ['Real-time telemetry and predictive downtime alerts'],
      engagementModels: ['Fixed-Scope Pilot'],
      technologies: ['C++', 'Rust', 'Kafka', 'MQTT'],
      cta: { label: 'Inquire Edge Integration', href: '/contact?category=custom-iot' },
      seo: {
        title: 'Custom IoT Integration | Syneza',
        metaDescription: 'Industrial edge computing and sensor integration services.',
        keywords: ['IoT engineering', 'edge computing'],
      },
      order: 9,
      enabled: true,
    };

    const parseResult = ServiceItemSchema.safeParse(customService);
    expect(parseResult.success).toBe(true);
  });

  it('should validate FooterConfig with enabled and disabled columns', () => {
    const testFooter = {
      ...defaultFooterConfig,
      columns: [
        {
          id: 'col-1',
          heading: 'Services',
          enabled: true,
          links: [{ label: 'Custom Software', href: '/services/custom-software-development' }],
        },
        {
          id: 'col-2',
          heading: 'Disabled Column',
          enabled: false,
          links: [{ label: 'Hidden Link', href: '/hidden' }],
        },
      ],
    };

    const parseResult = FooterConfigSchema.safeParse(testFooter);
    expect(parseResult.success).toBe(true);
    if (parseResult.success) {
      expect(parseResult.data.columns[1].enabled).toBe(false);
    }
  });
});
