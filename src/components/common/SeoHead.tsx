import { useEffect } from 'react';
import { useConfig } from '@/context/ConfigContext';

interface SeoHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown>;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  jsonLd,
}) => {
  const { config } = useConfig();
  const { seo, site } = config;

  const pageTitle = title
    ? seo.siteTitleTemplate.replace('%s', title)
    : seo.siteTitleDefault;
  const metaDescription = description || seo.defaultMetaDescription;
  const canonicalUrl = `${seo.canonicalBase}${canonicalPath}`;

  useEffect(() => {
    // Title
    document.title = pageTitle;

    // Meta description
    let metaDescEl = document.querySelector('meta[name="description"]');
    if (!metaDescEl) {
      metaDescEl = document.createElement('meta');
      metaDescEl.setAttribute('name', 'description');
      document.head.appendChild(metaDescEl);
    }
    metaDescEl.setAttribute('content', metaDescription);

    // Canonical link
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalUrl);

    // OpenGraph Title & Description
    const setMetaTag = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMetaTag('og:title', pageTitle);
    setMetaTag('og:description', metaDescription);
    setMetaTag('og:url', canonicalUrl);
    setMetaTag('og:type', ogType);
    setMetaTag('og:site_name', site.companyName);

    // JSON-LD Structured Data
    const scriptId = 'syneza-jsonld-schema';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    const baseSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${seo.canonicalBase}/#organization`,
          name: seo.organizationSchema.name,
          url: seo.organizationSchema.url,
          logo: seo.organizationSchema.logo,
          email: seo.organizationSchema.email,
          sameAs: config.socialLinks.links.filter((l) => l.enabled).map((l) => l.url),
        },
        {
          '@type': 'WebSite',
          '@id': `${seo.canonicalBase}/#website`,
          url: seo.canonicalBase,
          name: site.companyName,
          description: site.shortDescription,
          publisher: {
            '@id': `${seo.canonicalBase}/#organization`,
          },
        },
        ...(jsonLd ? [jsonLd] : []),
      ],
    };

    scriptEl.textContent = JSON.stringify(baseSchema);
  }, [pageTitle, metaDescription, canonicalUrl, ogType, site.companyName, site.shortDescription, seo, config.socialLinks, jsonLd]);

  return null;
};

