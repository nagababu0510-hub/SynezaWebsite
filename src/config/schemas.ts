import { z } from 'zod';

export const SiteConfigSchema = z.object({
  companyName: z.string().default('Syneza Technologies'),
  legalName: z.string().default('Syneza Technologies Private Limited'),
  tagline: z.string().default('Engineering Technology. Enabling Potential.'),
  shortDescription: z.string().default('Providing technology solutions, software engineering, AI integrations, and industry-oriented employability readiness.'),
  canonicalUrl: z.string().default('https://syneza.com'),
  defaultLanguage: z.string().default('en'),
  copyrightText: z.string().default('© 2026 Syneza Technologies. All rights reserved.'),
  contactEmail: z.string().default('contact@syneza.com'),
  contactPhone: z.string().default('+91 (0) 80-0000-0000'),
  location: z.object({
    city: z.string().default('Bengaluru'),
    state: z.string().default('Karnataka'),
    country: z.string().default('India'),
    addressNote: z.string().optional(),
  }),
});

export const BrandingConfigSchema = z.object({
  companyName: z.string().default('Syneza Technologies'),
  logo: z.object({
    text: z.string().default('SYNEZA'),
    badgeText: z.string().optional().default('TECHNOLOGIES'),
    showIcon: z.boolean().default(true),
    iconName: z.string().optional().default('Layers'),
  }),
  colors: z.object({
    primary: z.string().default('#2563EB'),
    primaryHover: z.string().default('#1D4ED8'),
    navy: z.string().default('#14213D'),
    navyDark: z.string().default('#0B132B'),
    teal: z.string().default('#0F766E'),
    tealLight: z.string().default('#14B8A6'),
    emerald: z.string().default('#059669'),
    accentAi: z.string().default('#7C3AED'),
    accentAiLight: z.string().default('#A78BFA'),
    accentCyan: z.string().default('#0284C7'),
    surface: z.string().default('#F8FAFC'),
    surfaceCard: z.string().default('#FFFFFF'),
    textMain: z.string().default('#1E293B'),
    textMuted: z.string().default('#64748B'),
    border: z.string().default('#E2E8F0'),
  }),
  typography: z.object({
    fontFamily: z.string().default('Inter, system-ui, sans-serif'),
    baseFontSize: z.string().default('16px'),
    headingFontFamily: z.string().optional(),
  }),
  borderRadius: z.object({
    small: z.string().default('0.375rem'),
    medium: z.string().default('0.5rem'),
    large: z.string().default('0.75rem'),
    pill: z.string().default('9999px'),
  }),
  theme: z.object({
    defaultTheme: z.enum(['light', 'dark', 'system']).default('light'),
    allowToggle: z.boolean().default(false),
  }),
});

export const NavItemChildSchema = z.object({
  id: z.string(),
  label: z.string(),
  href: z.string(),
  description: z.string().optional(),
  badge: z.string().optional(),
  pillar: z.enum(['education', 'software', 'ai', 'general']).default('general'),
  enabled: z.boolean().default(true),
});

export const NavItemSchema = z.object({
  id: z.string(),
  label: z.string(),
  href: z.string(),
  enabled: z.boolean().default(true),
  children: z.array(NavItemChildSchema).optional(),
});

export const NavigationConfigSchema = z.object({
  mainNav: z.array(NavItemSchema),
});

export const HeaderConfigSchema = z.object({
  enabled: z.boolean().default(true),
  sticky: z.boolean().default(true),
  showLogo: z.boolean().default(true),
  showCompanyName: z.boolean().default(true),
  showTagline: z.boolean().default(false),
  announcementBar: z.object({
    enabled: z.boolean().default(true),
    text: z.string(),
    linkUrl: z.string().optional(),
    linkLabel: z.string().optional(),
    badge: z.string().optional(),
  }),
  primaryCta: z.object({
    enabled: z.boolean().default(true),
    label: z.string().default('Discuss a Project'),
    href: z.string().default('/contact'),
  }),
  secondaryCta: z.object({
    enabled: z.boolean().default(true),
    label: z.string().default('College Programmes'),
    href: z.string().default('/for-colleges'),
  }),
});

export const FooterColumnSchema = z.object({
  id: z.string(),
  heading: z.string(),
  enabled: z.boolean().default(true),
  links: z.array(
    z.object({
      label: z.string(),
      href: z.string(),
      badge: z.string().optional(),
      external: z.boolean().optional().default(false),
    })
  ),
});

export const FooterConfigSchema = z.object({
  enabled: z.boolean().default(true),
  showLogo: z.boolean().default(true),
  companyDescription: z.string(),
  columns: z.array(FooterColumnSchema),
  contactDetails: z.object({
    enabled: z.boolean().default(true),
    email: z.string(),
    phone: z.string(),
    location: z.string(),
  }),
  socialLinksEnabled: z.boolean().default(true),
  legalLinks: z.array(
    z.object({
      label: z.string(),
      href: z.string(),
    })
  ),
  copyrightText: z.string(),
});

export const HomepageSectionSchema = z.object({
  id: z.string(),
  type: z.string(),
  enabled: z.boolean().default(true),
  order: z.number().default(0),
  heading: z.string().optional(),
  subtitle: z.string().optional(),
  content: z.string().optional(),
  badge: z.string().optional(),
  primaryCta: z
    .object({
      label: z.string(),
      href: z.string(),
    })
    .optional(),
  secondaryCta: z
    .object({
      label: z.string(),
      href: z.string(),
    })
    .optional(),
  customProps: z.record(z.unknown()).optional(),
});

export const HomepageConfigSchema = z.object({
  sections: z.array(HomepageSectionSchema),
});

export const AudienceSegmentSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: stringOrEmpty(),
  badge: z.string().default(''),
  pillar: z.enum(['education', 'business']).default('business'),
  summary: z.string(),
  coreConcerns: z.array(z.string()),
  keyOfferings: z.array(z.string()),
  primaryCta: z.object({
    label: z.string(),
    href: z.string(),
  }),
  enabled: z.boolean().default(true),
});

function stringOrEmpty() {
  return z.string().default('');
}

export const AudienceSegmentsConfigSchema = z.object({
  segments: z.array(AudienceSegmentSchema),
});

export const ServiceItemSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  badge: z.string().optional(),
  shortDescription: z.string(),
  fullDescription: z.string(),
  targetAudience: z.array(z.string()),
  businessProblem: z.array(z.string()),
  synezaSolution: z.array(z.string()),
  keyCapabilities: z.array(z.string()),
  deliveryApproach: z.array(
    z.object({
      step: z.string(),
      title: z.string(),
      description: z.string(),
    })
  ),
  benefits: z.array(z.string()),
  engagementModels: z.array(z.string()),
  technologies: z.array(z.string()).optional(),
  duration: z.string().optional(),
  pricingNote: z.string().optional(),
  cta: z.object({
    label: z.string().default('Enquire Now'),
    href: z.string().default('/contact'),
  }),
  seo: z.object({
    title: z.string(),
    metaDescription: z.string(),
    keywords: z.array(z.string()),
  }),
  order: z.number().default(0),
  enabled: z.boolean().default(true),
});

export const EducationServicesConfigSchema = z.object({
  pillarOverview: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    humanLedCommitment: z.string(),
  }),
  services: z.array(ServiceItemSchema),
  simulationDetails: z
    .object({
      title: z.string(),
      duration: z.string(),
      structure: z.array(
        z.object({
          sprint: z.string(),
          title: z.string(),
          focus: z.string(),
          activities: z.array(z.string()),
        })
      ),
      learningOutcomes: z.array(z.string()),
    })
    .optional(),
  workshopCatalog: z
    .array(
      z.object({
        id: z.string(),
        title: z.string(),
        track: z.string(),
        status: z.enum(['Available', 'Upon Institutional Request', 'In Development']),
        duration: z.string(),
        topics: z.array(z.string()),
      })
    )
    .optional(),
});

export const SoftwareServicesConfigSchema = z.object({
  pillarOverview: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    principles: z.array(z.string()),
  }),
  services: z.array(ServiceItemSchema),
});

export const AiServicesConfigSchema = z.object({
  pillarOverview: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    responsibleAiStatement: z.string(),
    deliveryProcess: z.array(
      z.object({
        step: z.number(),
        name: z.string(),
        description: z.string(),
      })
    ),
  }),
  services: z.array(ServiceItemSchema),
});

export const PricingPlanSchema = z.object({
  id: z.string(),
  serviceId: z.string(),
  name: z.string(),
  priceModel: z.enum(['fixed', 'scoped-estimate', 'custom-consultation']),
  publishedPrice: z.string().optional(),
  currency: z.string().optional(),
  unit: z.string().optional(),
  scopeNotes: z.string(),
  isPublished: z.boolean().default(false),
});

export const PricingConfigSchema = z.object({
  showPricingGlobally: z.boolean().default(false),
  pricingNotice: z.string(),
  plans: z.array(PricingPlanSchema),
});

export const EngagementModelSchema = z.object({
  id: z.string(),
  name: z.string(),
  idealFor: z.string(),
  description: z.string(),
  keyCharacteristics: z.array(z.string()),
  enabled: z.boolean().default(true),
});

export const EngagementModelsConfigSchema = z.object({
  models: z.array(EngagementModelSchema),
});

export const AboutConfigSchema = z.object({
  purpose: z.string(),
  mission: z.string(),
  vision: z.string(),
  dualPillarPhilosophy: z.string(),
  coreValues: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
    })
  ),
  engineeringStandards: z.array(z.string()),
  leadershipSection: z.object({
    enabled: z.boolean().default(false),
    title: z.string(),
    subtitle: z.string(),
    members: z.array(
      z.object({
        name: z.string(),
        role: z.string(),
        bio: z.string(),
      })
    ),
  }),
});

export const ContactConfigSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  contactEmail: z.string(),
  contactPhone: z.string(),
  locationText: z.string(),
  enquiryCategories: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
      categoryGroup: z.enum(['software', 'education', 'ai', 'general']),
    })
  ),
  formDisclaimers: z.object({
    privacyNotice: z.string(),
    responseCommitment: z.string(),
  }),
});

export const SeoConfigSchema = z.object({
  siteTitleDefault: z.string(),
  siteTitleTemplate: z.string(),
  defaultMetaDescription: z.string(),
  canonicalBase: z.string(),
  ogImage: z.string(),
  twitterHandle: z.string().optional(),
  organizationSchema: z.object({
    name: z.string(),
    url: z.string(),
    logo: z.string(),
    email: z.string(),
  }),
});

export const SocialLinksConfigSchema = z.object({
  links: z.array(
    z.object({
      platform: z.string(),
      url: z.string(),
      enabled: z.boolean(),
    })
  ),
});

export const LegalConfigSchema = z.object({
  privacyPolicy: z.object({
    lastUpdated: z.string(),
    sections: z.array(
      z.object({
        title: z.string(),
        content: z.string(),
      })
    ),
  }),
  termsOfService: z.object({
    lastUpdated: z.string(),
    sections: z.array(
      z.object({
        title: z.string(),
        content: z.string(),
      })
    ),
  }),
});

