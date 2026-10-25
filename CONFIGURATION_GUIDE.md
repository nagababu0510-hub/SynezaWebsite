# Syneza Technologies — Configuration Guide

This guide documents the JSON-driven configuration architecture powering the Syneza Technologies website. Routine content updates, service additions, branding changes, navigation adjustments, and SEO updates are controlled through JSON files located in `public/config/`.

---

## Architecture & Loading Mechanism

1. **Location**: All active configuration files reside in `public/config/`.
2. **Runtime Loading**: When a user accesses the site, `configService.ts` fetches each configuration file from `/config/{filename}.json` with cache-busting headers (`_t={timestamp}`).
3. **Runtime Schema Validation**: Every JSON response is validated against a strict [Zod](https://zod.dev) schema (`src/config/schemas.ts`).
4. **Resilience & Fallbacks**: If a JSON file is missing, unreachable, or fails validation:
   - Specific validation errors are logged to the developer console.
   - The application automatically falls back to the bundled defaults in `src/config/defaults.ts`.
   - The user never experiences an unhandled application crash or white-screen error.
5. **Rebuild Requirements**:
   - **Static Hosting (Cloudflare Pages, Netlify, Vercel, S3)**: If configuration files in `public/config/` are updated, simply uploading the modified JSON file to the static asset folder updates the website immediately **without rebuilding the React application bundle**.
   - **Local Development**: Edits in `public/config/` take effect immediately on page refresh.
   - **Bundled Fallback Updates**: If you wish to update the bundled offline fallback data in addition to the runtime files, update `src/config/defaults.ts` and run `npm run build`.

---

## Directory of Configuration Files

| Configuration File | Primary Purpose |
| :--- | :--- |
| `site.json` | Global company name, legal entity, tagline, location, and canonical URL. |
| `branding.json` | Palette tokens, typography, logo configuration, and border radii. |
| `header.json` | Header stickiness, announcement bar, primary & secondary CTAs. |
| `footer.json` | Multi-column links, contact display, social toggle, and legal links. |
| `navigation.json` | Main menu items, nested dropdown pathways, and badges. |
| `homepage.json` | Section order, enabled toggles, headings, subtitles, and hero CTAs. |
| `audience-segments.json` | Customer segment profiles for Colleges, Students, Small Biz, Enterprise. |
| `education-services.json` | Employability Assessment, 17-hr simulation, and workshop catalog. |
| `software-services.json` | Custom software development, maintenance, modernization, API integration. |
| `ai-services.json` | LLM integration, grounded RAG, workflow automation, and security. |
| `pricing.json` | Pricing visibility toggle, pricing notices, and scope models. |
| `engagement-models.json` | Fixed-scope, retainers, discovery sprints, and institutional drives. |
| `about.json` | Company purpose, mission, vision, dual-pillar philosophy, core values. |
| `contact.json` | Inquiry categories, phone, email, office location, and disclaimers. |
| `seo.json` | Page title templates, default meta description, and JSON-LD organization info. |
| `social-links.json` | Links and visibility for LinkedIn, GitHub, Twitter/X. |
| `forms.json` | Anti-spam thresholds, message length caps, and honeypot settings. |
| `legal.json` | Full content sections for Privacy Policy and Terms of Service. |

---

## Detailed File Specifications

### 1. `site.json`
Controls core global metadata.
```json
{
  "companyName": "Syneza Technologies",
  "legalName": "Syneza Technologies Private Limited",
  "tagline": "Engineering Technology. Enabling Potential.",
  "shortDescription": "From developing reliable software and integrating practical AI solutions to preparing the next generation of technology professionals, Syneza Technologies helps organizations turn ideas into meaningful outcomes.",
  "canonicalUrl": "https://syneza.com",
  "defaultLanguage": "en",
  "copyrightText": "© 2026 Syneza Technologies. All rights reserved.",
  "contactEmail": "contact@syneza.com",
  "contactPhone": "+91 (0) 80-0000-0000",
  "location": {
    "city": "Bengaluru",
    "state": "Karnataka",
    "country": "India",
    "addressNote": "Primary operations in India, delivering services globally."
  }
}
```

### 2. `branding.json`
Populates CSS variables on `document.documentElement` at runtime.
- `colors.primary`: Main brand blue (e.g. `#2563EB`).
- `colors.teal`: Accent for Pillar A Education (e.g. `#0F766E`).
- `colors.accentAi`: Accent for Pillar B AI Offerings (e.g. `#7C3AED`).
- `colors.navy`: Hero and header dark background (e.g. `#14213D`).
- `borderRadius`: `small`, `medium`, `large`, and `pill`.

### 3. `header.json`
Controls the header layout, announcement bar, and primary/secondary CTAs.
```json
{
  "enabled": true,
  "sticky": true,
  "showLogo": true,
  "showCompanyName": true,
  "showTagline": false,
  "announcementBar": {
    "enabled": true,
    "text": "Now Scheduling 2026 College Assessment Drives & Enterprise Discovery Sprints",
    "linkUrl": "/contact",
    "linkLabel": "Schedule Consultation",
    "badge": "Announcement"
  },
  "primaryCta": {
    "enabled": true,
    "label": "Discuss Your Project",
    "href": "/contact"
  },
  "secondaryCta": {
    "enabled": true,
    "label": "College Programmes",
    "href": "/for-colleges"
  }
}
```

### 4. `footer.json`
Defines the multi-column footer architecture:
- `columns`: Array of column objects with `id`, `heading`, `enabled`, and `links`.
- Set `"enabled": false` on any column to remove it from the footer UI immediately.

### 5. `homepage.json`
Controls which sections appear on the homepage and their vertical ordering:
```json
{
  "sections": [
    { "id": "hero", "type": "hero", "order": 1, "enabled": true },
    { "id": "dual-pillar-overview", "type": "dual-pillar-overview", "order": 2, "enabled": true },
    { "id": "software-services-preview", "type": "software-services-preview", "order": 3, "enabled": true },
    { "id": "ai-solutions-preview", "type": "ai-solutions-preview", "order": 4, "enabled": true },
    { "id": "education-preview", "type": "education-preview", "order": 5, "enabled": true },
    { "id": "audience-segments-preview", "type": "audience-segments-preview", "order": 6, "enabled": true },
    { "id": "engineering-principles", "type": "engineering-principles", "order": 7, "enabled": true },
    { "id": "security-responsible-ai", "type": "security-responsible-ai", "order": 8, "enabled": true },
    { "id": "faqs", "type": "faqs", "order": 9, "enabled": true },
    { "id": "final-cta", "type": "final-cta", "order": 10, "enabled": true }
  ]
}
```
*To reorder, change the numeric `order` values. To hide a section (e.g. FAQs), set `"enabled": false`.*

---

## How-To Guides

### How to Add a New Software or AI Service
1. Open `public/config/software-services.json` (or `ai-services.json`).
2. Add a new object to the `"services"` array:
   ```json
   {
     "id": "cloud-infrastructure-migration",
     "slug": "cloud-infrastructure-migration",
     "name": "Cloud Infrastructure Migration",
     "badge": "Infrastructure",
     "shortDescription": "Safe, incremental migration of on-premise applications to modern cloud providers.",
     "fullDescription": "We assess existing server dependencies, containerize workloads with Docker, and execute planned cutovers with rollback safety.",
     "targetAudience": ["Growing mid-market companies outgrowing local physical servers"],
     "businessProblem": ["Aging hardware failures causing unexpected downtime."],
     "synezaSolution": ["Containerization and staged migration with zero unverified assumptions."],
     "keyCapabilities": ["Cloud readiness audits", "Containerization with Docker", "Automated cutover scripts"],
     "deliveryApproach": [
       { "step": "Phase 1", "title": "Infrastructure Audit", "description": "Review server dependencies." },
       { "step": "Phase 2", "title": "Staged Migration", "description": "Deploy to staging replica." }
     ],
     "benefits": ["Higher uptime and automated backup guarantees."],
     "engagementModels": ["Fixed-Scope Migration Project"],
     "technologies": ["Docker", "Linux", "Nginx", "PostgreSQL"],
     "duration": "4 to 8 Weeks",
     "pricingNote": "Custom-scoped based on server count.",
     "cta": { "label": "Discuss Cloud Migration", "href": "/contact?category=cloud-migration" },
     "seo": {
       "title": "Cloud Infrastructure Migration Services | Syneza",
       "metaDescription": "Safe, incremental cloud migration for business applications.",
       "keywords": ["Cloud migration", "Docker containerization"]
     },
     "order": 9,
     "enabled": true
   }
   ```
3. Save the file.
4. **Result**: The new service is immediately listed in `/services` and accessible at `/services/cloud-infrastructure-migration` with complete SEO metadata, structured data, and an inquiry button—**without writing or modifying any React code!**

### How to Change the Company Tagline
1. Open `public/config/site.json` and edit `"tagline"`.
2. Open `public/config/homepage.json` and edit the `"heading"` property of the `"hero"` section.
3. Save the file. The homepage hero immediately displays the updated tagline.

### How to Change Header CTA Label & URL
1. Open `public/config/header.json`.
2. Update `"primaryCta"`:
   ```json
   "primaryCta": {
     "enabled": true,
     "label": "Schedule Discovery",
     "href": "/contact?intent=discovery"
   }
   ```
3. Save the file.

### How to Toggle Pricing Visibility
1. Open `public/config/pricing.json`.
2. Set `"showPricingGlobally": false` to suppress all commercial pricing figures until officially approved.

