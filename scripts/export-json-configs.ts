import fs from 'fs';
import path from 'path';
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
} from '../src/config/defaults';

const configDir = path.resolve(__dirname, '../public/config');
if (!fs.existsSync(configDir)) {
  fs.mkdirSync(configDir, { recursive: true });
}

const configs: Record<string, unknown> = {
  'site.json': defaultSiteConfig,
  'branding.json': defaultBrandingConfig,
  'navigation.json': defaultNavigationConfig,
  'header.json': defaultHeaderConfig,
  'footer.json': defaultFooterConfig,
  'homepage.json': defaultHomepageConfig,
  'audience-segments.json': defaultAudienceSegmentsConfig,
  'education-services.json': defaultEducationServicesConfig,
  'software-services.json': defaultSoftwareServicesConfig,
  'ai-services.json': defaultAiServicesConfig,
  'pricing.json': defaultPricingConfig,
  'engagement-models.json': defaultEngagementModelsConfig,
  'about.json': defaultAboutConfig,
  'contact.json': defaultContactConfig,
  'seo.json': defaultSeoConfig,
  'social-links.json': defaultSocialLinksConfig,
  'legal.json': defaultLegalConfig,
  'forms.json': {
    contactForm: {
      enableHoneypot: true,
      maxMessageLength: 2000,
      rateLimitWindowMinutes: 15,
      maxSubmissionsPerWindow: 5,
      requiredFields: ['fullName', 'email', 'enquiryCategory', 'message'],
      conditionalFields: {
        collegeFields: ['institutionName', 'cohortSize', 'engineeringBranches', 'preferredTimeline'],
        businessFields: ['organizationName', 'projectType', 'existingStack', 'estimatedBudget'],
      },
    },
  },
};

for (const [filename, content] of Object.entries(configs)) {
  const filePath = path.join(configDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf-8');
  console.log(`Exported public/config/${filename}`);
}

console.log('All JSON configuration files successfully generated.');

