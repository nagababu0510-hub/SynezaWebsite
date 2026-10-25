export interface SiteConfig {
  companyName: string;
  legalName: string;
  tagline: string;
  shortDescription: string;
  canonicalUrl: string;
  defaultLanguage: string;
  copyrightText: string;
  contactEmail: string;
  contactPhone: string;
  location: {
    city: string;
    state: string;
    country: string;
    addressNote?: string;
  };
}

export interface BrandingConfig {
  companyName: string;
  logo: {
    text: string;
    badgeText?: string;
    showIcon: boolean;
    iconName?: string;
  };
  colors: {
    primary: string;
    primaryHover: string;
    navy: string;
    navyDark: string;
    teal: string;
    tealLight: string;
    emerald: string;
    accentAi: string;
    accentAiLight: string;
    accentCyan: string;
    surface: string;
    surfaceCard: string;
    textMain: string;
    textMuted: string;
    border: string;
  };
  typography: {
    fontFamily: string;
    baseFontSize: string;
    headingFontFamily?: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
    pill: string;
  };
  theme: {
    defaultTheme: 'light' | 'dark' | 'system';
    allowToggle: boolean;
  };
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  enabled: boolean;
  children?: Array<{
    id: string;
    label: string;
    href: string;
    description?: string;
    badge?: string;
    pillar?: 'education' | 'software' | 'ai' | 'general';
    enabled: boolean;
  }>;
}

export interface NavigationConfig {
  mainNav: NavItem[];
}

export interface HeaderConfig {
  enabled: boolean;
  sticky: boolean;
  showLogo: boolean;
  showCompanyName: boolean;
  showTagline: boolean;
  announcementBar: {
    enabled: boolean;
    text: string;
    linkUrl?: string;
    linkLabel?: string;
    badge?: string;
  };
  primaryCta: {
    enabled: boolean;
    label: string;
    href: string;
  };
  secondaryCta: {
    enabled: boolean;
    label: string;
    href: string;
  };
}

export interface FooterColumn {
  id: string;
  heading: string;
  enabled: boolean;
  links: Array<{
    label: string;
    href: string;
    badge?: string;
    external?: boolean;
  }>;
}

export interface FooterConfig {
  enabled: boolean;
  showLogo: boolean;
  companyDescription: string;
  columns: FooterColumn[];
  contactDetails: {
    enabled: boolean;
    email: string;
    phone: string;
    location: string;
  };
  socialLinksEnabled: boolean;
  legalLinks: Array<{
    label: string;
    href: string;
  }>;
  copyrightText: string;
}

export interface HomepageSection {
  id: string;
  type: string;
  enabled: boolean;
  order: number;
  heading?: string;
  subtitle?: string;
  content?: string;
  badge?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  customProps?: Record<string, unknown>;
}

export interface HomepageConfig {
  sections: HomepageSection[];
}

export interface AudienceSegment {
  id: string;
  slug: string;
  name: string;
  badge: string;
  pillar: 'education' | 'business';
  summary: string;
  coreConcerns: string[];
  keyOfferings: string[];
  primaryCta: {
    label: string;
    href: string;
  };
  enabled: boolean;
}

export interface AudienceSegmentsConfig {
  segments: AudienceSegment[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  targetAudience: string[];
  businessProblem: string[];
  synezaSolution: string[];
  keyCapabilities: string[];
  deliveryApproach: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  benefits: string[];
  engagementModels: string[];
  technologies?: string[];
  duration?: string;
  pricingNote?: string;
  cta: {
    label: string;
    href: string;
  };
  seo: {
    title: string;
    metaDescription: string;
    keywords: string[];
  };
  order: number;
  enabled: boolean;
}

export interface EducationServicesConfig {
  pillarOverview: {
    title: string;
    tagline: string;
    description: string;
    humanLedCommitment: string;
  };
  services: ServiceItem[];
  simulationDetails?: {
    title: string;
    duration: string;
    structure: Array<{
      sprint: string;
      title: string;
      focus: string;
      activities: string[];
    }>;
    learningOutcomes: string[];
  };
  workshopCatalog?: Array<{
    id: string;
    title: string;
    track: string;
    status: 'Available' | 'Upon Institutional Request' | 'In Development';
    duration: string;
    topics: string[];
  }>;
}

export interface SoftwareServicesConfig {
  pillarOverview: {
    title: string;
    tagline: string;
    description: string;
    principles: string[];
  };
  services: ServiceItem[];
}

export interface AiServicesConfig {
  pillarOverview: {
    title: string;
    tagline: string;
    description: string;
    responsibleAiStatement: string;
    deliveryProcess: Array<{
      step: number;
      name: string;
      description: string;
    }>;
  };
  services: ServiceItem[];
}

export interface PricingPlan {
  id: string;
  serviceId: string;
  name: string;
  priceModel: 'fixed' | 'scoped-estimate' | 'custom-consultation';
  publishedPrice?: string;
  currency?: string;
  unit?: string;
  scopeNotes: string;
  isPublished: boolean;
}

export interface PricingConfig {
  showPricingGlobally: boolean;
  pricingNotice: string;
  plans: PricingPlan[];
}

export interface EngagementModel {
  id: string;
  name: string;
  idealFor: string;
  description: string;
  keyCharacteristics: string[];
  enabled: boolean;
}

export interface EngagementModelsConfig {
  models: EngagementModel[];
}

export interface AboutConfig {
  purpose: string;
  mission: string;
  vision: string;
  dualPillarPhilosophy: string;
  coreValues: Array<{
    title: string;
    description: string;
  }>;
  engineeringStandards: string[];
  leadershipSection: {
    enabled: boolean;
    title: string;
    subtitle: string;
    members: Array<{
      name: string;
      role: string;
      bio: string;
    }>;
  };
}

export interface ContactConfig {
  title: string;
  subtitle: string;
  contactEmail: string;
  contactPhone: string;
  locationText: string;
  enquiryCategories: Array<{
    value: string;
    label: string;
    categoryGroup: 'software' | 'education' | 'ai' | 'general';
  }>;
  formDisclaimers: {
    privacyNotice: string;
    responseCommitment: string;
  };
}

export interface SeoConfig {
  siteTitleDefault: string;
  siteTitleTemplate: string;
  defaultMetaDescription: string;
  canonicalBase: string;
  ogImage: string;
  twitterHandle?: string;
  organizationSchema: {
    name: string;
    url: string;
    logo: string;
    email: string;
  };
}

export interface SocialLinksConfig {
  links: Array<{
    platform: string;
    url: string;
    enabled: boolean;
  }>;
}

export interface LegalConfig {
  privacyPolicy: {
    lastUpdated: string;
    sections: Array<{
      title: string;
      content: string;
    }>;
  };
  termsOfService: {
    lastUpdated: string;
    sections: Array<{
      title: string;
      content: string;
    }>;
  };
}

export interface AppConfig {
  site: SiteConfig;
  branding: BrandingConfig;
  navigation: NavigationConfig;
  header: HeaderConfig;
  footer: FooterConfig;
  homepage: HomepageConfig;
  audienceSegments: AudienceSegmentsConfig;
  educationServices: EducationServicesConfig;
  softwareServices: SoftwareServicesConfig;
  aiServices: AiServicesConfig;
  pricing: PricingConfig;
  engagementModels: EngagementModelsConfig;
  about: AboutConfig;
  contact: ContactConfig;
  seo: SeoConfig;
  socialLinks: SocialLinksConfig;
  legal: LegalConfig;
}
