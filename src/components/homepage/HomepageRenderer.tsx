import React from 'react';
import { useConfig } from '@/context/ConfigContext';
import { HomepageSection } from '@/types/config';
import { HeroSection } from './HeroSection';
import { DualPillarOverviewSection } from './DualPillarOverviewSection';
import { SoftwareServicesPreviewSection } from './SoftwareServicesPreviewSection';
import { AiSolutionsPreviewSection } from './AiSolutionsPreviewSection';
import { EducationPreviewSection } from './EducationPreviewSection';
import { AudienceSegmentsSection } from './AudienceSegmentsSection';
import { EngineeringPrinciplesSection } from './EngineeringPrinciplesSection';
import { SecurityResponsibleAiSection } from './SecurityResponsibleAiSection';
import { FaqSection } from './FaqSection';
import { FinalCtaSection } from './FinalCtaSection';

const sectionRegistry: Record<string, React.FC<{ section: HomepageSection }>> = {
  hero: HeroSection,
  'dual-pillar-overview': DualPillarOverviewSection,
  'software-services-preview': SoftwareServicesPreviewSection,
  'ai-solutions-preview': AiSolutionsPreviewSection,
  'education-preview': EducationPreviewSection,
  'audience-segments-preview': AudienceSegmentsSection,
  'engineering-principles': EngineeringPrinciplesSection,
  'security-responsible-ai': SecurityResponsibleAiSection,
  faqs: FaqSection,
  'final-cta': FinalCtaSection,
};

export const HomepageRenderer: React.FC = () => {
  const { config } = useConfig();
  const { homepage } = config;

  const activeSections = [...homepage.sections]
    .filter((sec) => sec.enabled)
    .sort((a, b) => a.order - b.order);

  return (
    <div>
      {activeSections.map((section) => {
        const Component = sectionRegistry[section.type];
        if (!Component) {
          if (process.env.NODE_ENV !== 'production') {
            console.warn(`[HomepageRenderer] Unknown section type: ${section.type}`);
          }
          return null;
        }
        return <Component key={section.id} section={section} />;
      })}
    </div>
  );
};

