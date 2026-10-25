# Syneza Technologies — Technical Architecture

This document describes the software architecture, design patterns, component relationships, data flow, and security boundaries implemented in the Syneza Technologies web platform.

---

## 1. Architectural Philosophy

The website is engineered according to four fundamental architectural principles:

1. **Separation of Content and Presentation**: Component source code does not contain hardcoded copy, service lists, or navigation structures. All business messaging is driven by validated runtime JSON configurations.
2. **Resilience Through Dual-Layer Configuration**: The application pairs runtime dynamic configuration loading (`fetch('/config/*.json')`) with bundled TypeScript fallback objects (`src/config/defaults.ts`). This guarantees that offline visitors, test runners, and unexpected network dropouts never cause an unhandled white-screen crash.
3. **Template Reuse Over Component Duplication**: Instead of authoring 16+ separate static page components for each software or AI service, a single parameterized `ServiceDetailPage` template renders any enabled service directly from configuration.
4. **Low Operational Overhead**: The marketing platform is intentionally decoupled from heavyweight backend dependencies (e.g. databases or microservices). It builds to static HTML/CSS/JS artifacts deployable across global edge CDN networks with near-zero hosting costs.

---

## 2. System Architecture Diagram

```
[Browser / Edge Client]
         │
         ├─── 1. HTTP Request ────────► [Edge CDN / Static Server]
         │                                      │
         │◄── 2. Delivers Assets (HTML/JS/CSS) ─┘
         │
         ├─── 3. fetch('/config/*.json') ─────► [public/config/*.json]
         │                                              │
         │◄── 4. Raw JSON payloads ─────────────────────┘
         │
[Centralized Config Service]
         │
         ├─── 5. Zod Schema Validation (src/config/schemas.ts)
         │       ├── If Valid: Pass typed config to React Context
         │       └── If Invalid/Offline: Log issue, return bundled default (src/config/defaults.ts)
         │
         ├─── 6. Injects CSS Variables to :root (--color-primary, --color-teal, etc.)
         │
[React Context & Router]
         ├─── ConfigProvider (Provides reactive config, error state, and reload triggers)
         ├─── Layout (Header, SkipLink, AnnouncementBar, Footer)
         │       └── Main Nav (Dynamic dropdowns based on navigation.json)
         └─── Route Views (Home, About, Services, Education, AI, Contact, Legal, 404)
                 └── ServiceDetailPage (Reusable template for software/ai/education services)
```

---

## 3. Directory & Component Organization

- `src/types/config.ts`: Strongly typed TypeScript interfaces defining the shape of all 18 configuration files.
- `src/config/schemas.ts`: Strict [Zod](https://zod.dev) validation schemas ensuring runtime integrity.
- `src/config/defaults.ts`: Complete bundled default configurations matching the schemas.
- `src/services/configService.ts`: Centralized fetch, validation, error tracking, and CSS custom property injection.
- `src/context/ConfigContext.tsx`: React Context exposing `config`, `isLoading`, `errors`, and `refreshConfig()` to all UI components.
- `src/components/common/`:
  - `SeoHead.tsx`: Injects dynamic `<title>`, `<meta name="description">`, OpenGraph, Twitter, canonical URLs, and JSON-LD structured schemas (`Organization`, `WebSite`, `Service`).
  - `Button.tsx`: Accessible interactive button supporting sizes, variants, external links, and focus styling.
  - `Card.tsx`: Structural container with configurable top accent borders (`primary`, `teal`, `ai`).
  - `Badge.tsx`: Pill indicators for pillar taxonomy (`education`, `software`, `ai`).
  - `ScrollToTop.tsx`: Resets window scroll position upon route transitions.
- `src/components/layout/`:
  - `Header.tsx`: Responsive navigation header with keyboard-accessible dropdown menus, announcement banner, and mobile drawer.
  - `Footer.tsx`: Configurable multi-column footer with contact details and legal links.
  - `Layout.tsx`: Shell component containing accessibility skip-to-content links.
- `src/components/homepage/`:
  - `HomepageRenderer.tsx`: Component registry mapping section types (`hero`, `dual-pillar-overview`, `software-services-preview`, `ai-solutions-preview`, `education-preview`, `audience-segments-preview`, `engineering-principles`, `security-responsible-ai`, `faqs`, `final-cta`) to their respective components and rendering them according to numeric `order`.

---

## 4. Routing Architecture

Routing is managed via `react-router-dom` v6 with client-side history management:

| Route | Component | Description |
| :--- | :--- | :--- |
| `/` | `Home` | Dynamic homepage composed via `HomepageRenderer` |
| `/about` | `AboutPage` | Company purpose, mission, dual-pillar philosophy, core values |
| `/education` | `EducationLandingPage` | Education pillar overview and human-led assessment commitment |
| `/education/employability-assessment` | `EmployabilityAssessmentPage` | Detailed 18-discipline diagnostic assessment breakdown |
| `/education/software-company-simulation` | `SoftwareCompanySimulationPage` | 17-hour, 4-sprint Agile company simulation details |
| `/education/technology-workshops` | `TechnologyWorkshopsPage` | Catalog of hands-on technical workshop tracks |
| `/education/motivational-sessions` | `MotivationalSessionsPage` | Growth mindset, resilience, and professional discipline |
| `/for-colleges` | `ForCollegesPage` | Institutional partnership pathways and cohort options |
| `/for-students` | `ForStudentsPage` | Practical career advice and interview expectations |
| `/services` | `TechnologyServicesPage` | Full software engineering service catalogue |
| `/services/:slug` | `ServiceDetailPage (software)` | Reusable detail page template rendering from JSON |
| `/ai-solutions` | `AiSolutionsPage` | AI solutions landing page & 6-step delivery framework |
| `/ai-solutions/:slug` | `ServiceDetailPage (ai)` | Reusable detail page template for AI offerings |
| `/solutions/small-business` | `SmallBusinessSolutionsPage` | Budget-conscious solutions, spreadsheets-to-app, MVPs |
| `/solutions/enterprise` | `EnterpriseSolutionsPage` | Legacy modernization, backend services, enterprise RAG |
| `/contact` | `ContactPage` | Multi-intent enquiry form with conditional fields |
| `/privacy` | `PrivacyPage` | Factual privacy disclosures and retention policies |
| `/terms` | `TermsPage` | General website terms and conditions |
| `*` | `NotFoundPage` | Custom branded, accessible 404 page |

---

## 5. Security & Boundary Architecture

1. **No Code Execution from JSON**: Configuration files store only raw data (strings, numbers, booleans, arrays). The application never evaluates scripts or imports dynamic modules based on JSON content.
2. **XSS Prevention**: React automatically escapes text node variables. The codebase avoids `dangerouslySetInnerHTML`.
3. **Client-Side Bot Defense**:
   - Hidden honeypot field (`company_website_url_hp`) detects automated form scripts without annoying human users with CAPTCHAs.
   - Timestamp verification ensures forms cannot be submitted faster than human reading speed.
   - Local submission rate-limiting throttles repeat submissions.
4. **Backend Contact Boundary**:
   - In production, contact submissions can POST to a secure backend endpoint defined by `VITE_CONTACT_API_URL`.
   - The frontend validates data prior to transmission and sanitizes all inputs.
   - Zero credentials or SMTP passwords exist in frontend bundles.
5. **AI Architectural Guardrails**:
   - The platform documents explicit architectural boundaries for client AI projects:
     - Provider abstraction preventing vendor lock-in.
     - Pre-retrieval authorization for RAG systems.
     - Strict human-in-the-loop approvals for any state-changing action.
     - Curated evaluation benchmark suites.

---

## 6. Future Extension Points

- **Backend Integration**: When lead management requires persistence, deploy a Spring Boot REST API with MySQL, pointing `VITE_CONTACT_API_URL` to the endpoint.
- **CMS Integration**: Because configuration files are plain JSON, a headless CMS (Strapi, Decap, Sanity) can output JSON directly into `public/config/` via automated Git commits or webhook deployments.
- **Multilingual Localization**: `site.defaultLanguage` and configuration schemas can be extended to support localized subdirectories (`/config/hi/`, `/config/en/`) without altering component templates.

