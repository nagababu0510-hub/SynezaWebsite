# Syneza Technologies — Official Website & Application Platform

> **"Engineering Technology. Enabling Potential."**  
> *From developing reliable software and integrating practical AI solutions to preparing the next generation of technology professionals, Syneza Technologies helps organizations turn ideas into meaningful outcomes.*

This repository houses the complete, production-oriented, JSON-driven website and service platform for **Syneza Technologies**. The application delivers a unified brand identity across two complementary business pillars:

1. **Pillar A: Education, Employability and Industry Readiness** — Serving engineering colleges, placement cells, and students through supervised, human-led diagnostic assessments (18 CS disciplines), an intensive 2-day (17-hour) Agile Software Company Simulation across 4 sprints, and practitioner-taught technology workshops.
2. **Pillar B: Software Engineering & AI Solutions** — Serving startups, small businesses, and growing enterprises through custom software development, application maintenance, legacy modernization, API & event-driven integration, database engineering, quality automation, and pragmatic Large Language Model (LLM) / Retrieval-Augmented Generation (RAG) solutions.

---

## Key Architectural Principles

- **JSON-Driven Headless Configuration**: Navigation, header, footer, branding tokens, homepage section composition and order, customer journeys, and all service catalogues are managed via validated JSON files (`public/config/*.json`). Content editors can add new services or adjust taglines without modifying React components.
- **Runtime Schema Validation with Safe Fallback**: Centralized configuration service powered by [Zod](https://zod.dev) parses and validates JSON files at runtime. If a JSON file is missing or malformed, the application logs the exact schema violation and gracefully falls back to bundled defaults without crashing.
- **Reusable Service Page Templates**: Adding a service entry to `software-services.json`, `ai-services.json`, or `education-services.json` dynamically renders a rich, SEO-optimized detail page with structured JSON-LD schemas and inquiry CTAs.
- **Accessibility Target (WCAG 2.2 AA)**: Semantic HTML5, high-contrast palette, accessible keyboard navigation with skip-to-content link, screen-reader ARIA states (`aria-expanded`, `aria-controls`, `aria-describedby`), and `prefers-reduced-motion` compliance.
- **Security-First Engineering**: Zero secrets in frontend code, client and server input boundaries, honeypot anti-spam defense, rate-limiting, pre-retrieval access control principles for AI, and strict XSS prevention.

---

## Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 18, TypeScript 5, Vite 6 |
| **Routing** | React Router DOM v6 |
| **Design System** | Tailwind CSS v3 with CSS Custom Properties injected from JSON |
| **Iconography** | Lucide React |
| **Schema Validation** | Zod v3 |
| **Testing Harness** | Vitest, React Testing Library, JSDOM |
| **Deployment Target** | Static edge CDN (Cloudflare Pages, Vercel, Netlify, AWS S3/CloudFront) or Docker Nginx container |

---

## Project Structure

```
SynezaWebsite/
├── public/
│   ├── config/                     # Runtime JSON configuration files
│   │   ├── about.json              # Mission, vision, core values, governance
│   │   ├── ai-services.json        # AI & LLM service catalogue & 6-step process
│   │   ├── audience-segments.json  # Colleges, Students, Small Biz, Enterprise
│   │   ├── branding.json           # Palette tokens, typography, logo config
│   │   ├── contact.json            # Enquiry categories, phone, email, office
│   │   ├── education-services.json # Assessments, 17-hr simulation, workshops
│   │   ├── engagement-models.json  # Fixed-scope, retainers, discovery sprints
│   │   ├── footer.json             # Footer column layouts, legal links
│   │   ├── forms.json              # Contact form limits and honeypot flags
│   │   ├── header.json             # Announcement bar, header CTAs, stickiness
│   │   ├── homepage.json           # Homepage section order & composition
│   │   ├── legal.json              # Privacy policy and terms of service
│   │   ├── navigation.json         # Main menu hierarchy and dropdown items
│   │   ├── pricing.json            # Commercial visibility & scope notices
│   │   ├── seo.json                # Metadata templates, OpenGraph, JSON-LD
│   │   ├── site.json               # Global company details & canonical URL
│   │   ├── social-links.json       # LinkedIn, GitHub, social links
│   │   └── software-services.json  # Software catalogue & engineering principles
│   ├── favicon.svg                 # Scalable brand vector icon
│   ├── robots.txt                  # Crawl policies
│   └── sitemap.xml                 # XML sitemap covering all 30+ URLs
├── scripts/
│   ├── export-json-configs.ts      # Synchronization script from defaults to JSON
│   └── generate-configs.js         # Build utility
├── src/
│   ├── components/
│   │   ├── common/                 # Button, Card, Badge, SeoHead, ScrollToTop
│   │   ├── homepage/               # Hero, DualPillar, Software, AI, Edu, FAQs
│   │   └── layout/                 # Accessible Header, Footer, and Layout
│   ├── config/
│   │   ├── defaults.ts             # Bundled offline fallbacks
│   │   └── schemas.ts              # Zod validation schemas
│   ├── context/
│   │   └── ConfigContext.tsx       # Reactive React Context for app settings
│   ├── pages/
│   │   ├── ai/                     # AI & LLM Solutions landing page
│   │   ├── education/              # Assessment, Simulation, Workshops, Colleges
│   │   ├── legal/                  # Privacy Policy & Terms of Service
│   │   ├── services/               # Services Catalogue & Dynamic Detail Page
│   │   ├── solutions/              # Small Business & Enterprise pathways
│   │   ├── AboutPage.tsx           # Company overview
│   │   ├── ContactPage.tsx         # Accessible multi-intent enquiry form
│   │   ├── Home.tsx                # Homepage entry point
│   │   └── NotFoundPage.tsx        # Branded accessible 404
│   ├── services/
│   │   └── configService.ts        # Dynamic fetch, validation, & CSS tokens
│   ├── test/                       # Vitest & Testing Library unit/acceptance tests
│   ├── types/
│   │   └── config.ts               # Core TypeScript interface definitions
│   ├── App.tsx                     # Main routing tree
│   ├── index.css                   # Tailwind base, utilities, motion queries
│   └── main.tsx                    # Application entry
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js v20+ or v22+
- npm v10+

### Installation

```bash
git clone https://github.com/syneza-technologies/syneza-website.git
cd syneza-website
npm install
```

### Local Development Server

```bash
npm run dev
```

The application runs locally at `http://localhost:5173/`. Vite HMR (Hot Module Replacement) updates components and styles instantaneously.

---

## Testing & Quality Verification

Run the comprehensive test suite with Vitest:

```bash
# Run unit, integration, and configuration acceptance tests
npm test
```

### Verified Test Suites (50 Tests Passing):
1. **`configSchemas.test.ts`**: Schema parsing, invalid data rejection, missing optional field tolerance, and fallback resilience.
2. **`components.test.tsx`**: Header branding, skip links, accessible dropdown menus, and footer rendering.
3. **`configurationAcceptance.test.tsx`**: Proves all 13 required configuration acceptance criteria (dynamic tagline change, CTA change, disabled footer columns, adding software/AI/education services via JSON, section reordering, pricing toggle, branding colors, and SEO meta tags).
4. **`contactForm.test.tsx`**: Required field validation, email format checking, conditional field toggling (colleges vs. businesses), honeypot anti-spam defense, and rate-limiting.
5. **`routes.test.tsx`**: Verifies that every single route in the site map renders cleanly without runtime exceptions.

---

## Production Build & Preview

```bash
# Type check and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

Output is bundled into `dist/` with modular code splitting (`vendor`, `validation`, `icons`, and `index`), gzip compressed to ~140 kB total.

---

## Environment Variables

Copy `.env.example` to `.env` to configure optional integrations:

```env
# Base Canonical URL
VITE_CANONICAL_URL=https://syneza.com

# Optional Backend Contact Form Webhook / REST Endpoint
# If omitted, contact submissions are safely processed and confirmed locally.
VITE_CONTACT_API_URL=
```

---

## Documentation Index

For detailed instructions on configuration, content authoring, security, and deployment, consult the companion guides:

- [CONFIGURATION_GUIDE.md](file:///d:/data/syneza/projects/SynezaWebsite/CONFIGURATION_GUIDE.md): Complete field reference for all 18 JSON files.
- [CONTENT_GUIDE.md](file:///d:/data/syneza/projects/SynezaWebsite/CONTENT_GUIDE.md): Step-by-step instructions for non-developers to edit services, taglines, and navigation.
- [ARCHITECTURE.md](file:///d:/data/syneza/projects/SynezaWebsite/ARCHITECTURE.md): Frontend system design, component registry, and extensibility boundaries.
- [SECURITY_AND_ACCESSIBILITY.md](file:///d:/data/syneza/projects/SynezaWebsite/SECURITY_AND_ACCESSIBILITY.md): WCAG 2.2 AA audit results, threat model, and bot defenses.
- [DEPLOYMENT_GUIDE.md](file:///d:/data/syneza/projects/SynezaWebsite/DEPLOYMENT_GUIDE.md): Hosting on Cloudflare Pages, Vercel, S3/CloudFront, and Docker.
- [SEO_CONTENT_PLAN.md](file:///d:/data/syneza/projects/SynezaWebsite/SEO_CONTENT_PLAN.md): Keyword themes, meta mapping, and structured JSON-LD data strategy.

---

## License

Copyright © 2026 Syneza Technologies Private Limited. All rights reserved.
