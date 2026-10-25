import { z } from 'zod';
import {
  SiteConfig,
  BrandingConfig,
  NavigationConfig,
  HeaderConfig,
  FooterConfig,
  HomepageConfig,
  AudienceSegmentsConfig,
  EducationServicesConfig,
  SoftwareServicesConfig,
  AiServicesConfig,
  PricingConfig,
  EngagementModelsConfig,
  AboutConfig,
  ContactConfig,
  SeoConfig,
  SocialLinksConfig,
  LegalConfig,
  AppConfig,
} from '@/types/config';
import {
  SiteConfigSchema,
  BrandingConfigSchema,
  NavigationConfigSchema,
  HeaderConfigSchema,
  FooterConfigSchema,
  HomepageConfigSchema,
  AudienceSegmentsConfigSchema,
  EducationServicesConfigSchema,
  SoftwareServicesConfigSchema,
  AiServicesConfigSchema,
  PricingConfigSchema,
  EngagementModelsConfigSchema,
  AboutConfigSchema,
  ContactConfigSchema,
  SeoConfigSchema,
  SocialLinksConfigSchema,
  LegalConfigSchema,
} from '@/config/schemas';
import {
  defaultSiteConfig,
  defaultBrandingConfig,
  defaultNavigationConfig,
  defaultHeaderConfig,
  defaultFooterConfig,
  defaultHomepageConfig,
  defaultAudienceSegmentsConfig,
  defaultEducationServicesConfig,
  defaultSoftwareServicesConfig,
  defaultAiServicesConfig,
  defaultPricingConfig,
  defaultEngagementModelsConfig,
  defaultAboutConfig,
  defaultContactConfig,
  defaultSeoConfig,
  defaultSocialLinksConfig,
  defaultLegalConfig,
  defaultAppConfig,
} from '@/config/defaults';

export interface ValidationIssue {
  file: string;
  field: string;
  message: string;
}

export interface ConfigServiceState {
  config: AppConfig;
  isLoading: boolean;
  errors: ValidationIssue[];
}

export function validateWithFallback<T>(
  data: unknown,
  schema: z.ZodType<T, any, any>,
  fallback: T,
  fileName: string,
  errorCollector: ValidationIssue[]
): T {
  if (!data) {
    errorCollector.push({
      file: fileName,
      field: 'root',
      message: `Configuration for ${fileName} is null or undefined. Using defaults.`,
    });
    return fallback;
  }

  const result = schema.safeParse(data);
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      const fieldPath = issue.path.join('.') || 'root';
      errorCollector.push({
        file: fileName,
        field: fieldPath,
        message: `${issue.message} (code: ${issue.code})`,
      });
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`[ConfigValidation] ${fileName} -> ${fieldPath}: ${issue.message}`);
      }
    });
    // Return fallback for safety or partial merged fallback if applicable
    return fallback;
  }

  return result.data;
}

export async function fetchJsonConfig<T>(
  filename: string,
  schema: z.ZodType<T, any, any>,
  fallback: T,
  errorCollector: ValidationIssue[]
): Promise<T> {
  const url = `/config/${filename}?_t=${Date.now()}`;
  try {
    const res = await fetch(url, { headers: { 'Cache-Control': 'no-cache' } });
    if (!res.ok) {
      errorCollector.push({
        file: filename,
        field: 'fetch',
        message: `HTTP ${res.status} when fetching ${filename}. Using default bundled configuration.`,
      });
      return fallback;
    }
    const data = await res.json();
    return validateWithFallback(data, schema, fallback, filename, errorCollector);
  } catch (err) {
    errorCollector.push({
      file: filename,
      field: 'network',
      message: `Network or parsing error for ${filename}: ${(err as Error).message}. Using default.`,
    });
    return fallback;
  }
}

export function applyBrandingCssVariables(branding: BrandingConfig): void {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  const colors = branding.colors;
  root.style.setProperty('--color-primary', colors.primary);
  root.style.setProperty('--color-primary-hover', colors.primaryHover);
  root.style.setProperty('--color-navy', colors.navy);
  root.style.setProperty('--color-navy-dark', colors.navyDark);
  root.style.setProperty('--color-teal', colors.teal);
  root.style.setProperty('--color-teal-light', colors.tealLight);
  root.style.setProperty('--color-emerald', colors.emerald);
  root.style.setProperty('--color-accent-ai', colors.accentAi);
  root.style.setProperty('--color-accent-ai-light', colors.accentAiLight);
  root.style.setProperty('--color-accent-cyan', colors.accentCyan);
  root.style.setProperty('--color-surface', colors.surface);
  root.style.setProperty('--color-surface-card', colors.surfaceCard);
  root.style.setProperty('--color-text-main', colors.textMain);
  root.style.setProperty('--color-text-muted', colors.textMuted);
  root.style.setProperty('--color-border', colors.border);

  if (branding.borderRadius) {
    root.style.setProperty('--radius-sm', branding.borderRadius.small);
    root.style.setProperty('--radius-md', branding.borderRadius.medium);
    root.style.setProperty('--radius-lg', branding.borderRadius.large);
  }
}

export async function loadRuntimeAppConfig(): Promise<{
  config: AppConfig;
  errors: ValidationIssue[];
}> {
  const errors: ValidationIssue[] = [];

  const [
    site,
    branding,
    navigation,
    header,
    footer,
    homepage,
    audienceSegments,
    educationServices,
    softwareServices,
    aiServices,
    pricing,
    engagementModels,
    about,
    contact,
    seo,
    socialLinks,
    legal,
  ] = await Promise.all([
    fetchJsonConfig<SiteConfig>('site.json', SiteConfigSchema, defaultSiteConfig, errors),
    fetchJsonConfig<BrandingConfig>('branding.json', BrandingConfigSchema, defaultBrandingConfig, errors),
    fetchJsonConfig<NavigationConfig>('navigation.json', NavigationConfigSchema, defaultNavigationConfig, errors),
    fetchJsonConfig<HeaderConfig>('header.json', HeaderConfigSchema, defaultHeaderConfig, errors),
    fetchJsonConfig<FooterConfig>('footer.json', FooterConfigSchema, defaultFooterConfig, errors),
    fetchJsonConfig<HomepageConfig>('homepage.json', HomepageConfigSchema, defaultHomepageConfig, errors),
    fetchJsonConfig<AudienceSegmentsConfig>('audience-segments.json', AudienceSegmentsConfigSchema, defaultAudienceSegmentsConfig, errors),
    fetchJsonConfig<EducationServicesConfig>('education-services.json', EducationServicesConfigSchema, defaultEducationServicesConfig, errors),
    fetchJsonConfig<SoftwareServicesConfig>('software-services.json', SoftwareServicesConfigSchema, defaultSoftwareServicesConfig, errors),
    fetchJsonConfig<AiServicesConfig>('ai-services.json', AiServicesConfigSchema, defaultAiServicesConfig, errors),
    fetchJsonConfig<PricingConfig>('pricing.json', PricingConfigSchema, defaultPricingConfig, errors),
    fetchJsonConfig<EngagementModelsConfig>('engagement-models.json', EngagementModelsConfigSchema, defaultEngagementModelsConfig, errors),
    fetchJsonConfig<AboutConfig>('about.json', AboutConfigSchema, defaultAboutConfig, errors),
    fetchJsonConfig<ContactConfig>('contact.json', ContactConfigSchema, defaultContactConfig, errors),
    fetchJsonConfig<SeoConfig>('seo.json', SeoConfigSchema, defaultSeoConfig, errors),
    fetchJsonConfig<SocialLinksConfig>('social-links.json', SocialLinksConfigSchema, defaultSocialLinksConfig, errors),
    fetchJsonConfig<LegalConfig>('legal.json', LegalConfigSchema, defaultLegalConfig, errors),
  ]);

  const config: AppConfig = {
    site,
    branding,
    navigation,
    header,
    footer,
    homepage,
    audienceSegments,
    educationServices,
    softwareServices,
    aiServices,
    pricing,
    engagementModels,
    about,
    contact,
    seo,
    socialLinks,
    legal,
  };

  applyBrandingCssVariables(config.branding);

  return { config, errors };
}
