# Syneza Technologies — Security & Accessibility Engineering Report

This document details the security threat model, defensive controls, WCAG 2.2 AA accessibility implementations, and verification results for the Syneza Technologies web platform.

---

## 1. Security Engineering

### 1.1 Threat Model & Assumptions

| Threat Category | Potential Risk | Implemented Defensive Control |
| :--- | :--- | :--- |
| **Untrusted Configuration** | Malicious injection or malformed data in JSON files. | Strict Zod schema parsing. Only whitelisted data types are accepted. Zero dynamic code execution. |
| **Cross-Site Scripting (XSS)** | Injection of scripts through user inputs or URL query params. | All inputs are rendered through standard React escaping. Zero use of `dangerouslySetInnerHTML`. Safe external URL handling. |
| **Secret Exposure** | Leaking API keys, tokens, or database passwords in client bundles. | Zero secrets in client-side code or `public/config/`. Public JSON files strictly store public marketing metadata. Backend secrets reside in server environment variables. |
| **Contact Form Abuse / Spam** | Automated spam bots flooding inboxes or denial-of-service. | Hidden honeypot field (`company_website_url_hp`), human fill-time threshold check, and rate-limiting window (5 requests / 15 minutes). |
| **Sensitive Data Transmission** | Interception of contact inquiries during transmission. | Mandatory HTTPS in production; minimal personal data collected; data retention disclaimers. |
| **AI LLM Specific Risks** | Prompt injection, data leakage, and hallucinations in business AI apps. | Explicit RAG pre-retrieval access control, source citation requirements, confidence thresholds, and human-in-the-loop review screens. |

### 1.2 Form Security Implementation
- **Input Boundaries**:
  - Full Name: max 100 characters.
  - Message: min 15 characters, max 2,500 characters.
  - Email: RFC 5322 regex validation.
- **Honeypot Trap**: Invisible to screen readers and human users via `aria-hidden="true"` and CSS `display: none`. If filled by an automated bot, submission is rejected.
- **Rate-Limiting**: Submissions are tracked in `localStorage` under a rolling 15-minute window to prevent automated flood attacks.
- **Truthful Error Handling**: If a network error occurs during submission, the UI displays a clear failure message with a direct email fallback rather than falsely claiming success.

---

## 2. Accessibility Engineering (WCAG 2.2 AA Compliance)

Accessibility is treated as a core architectural requirement rather than an afterthought. The platform implements the following accessibility standards:

### 2.1 Semantic HTML Structure
- Meaningful landmarks: `<header>`, `<nav>`, `<main id="main-content">`, `<section>`, `<article>`, `<aside>`, and `<footer>`.
- Correct heading hierarchy: Single `<h1>` per page, followed by logical `<h2>`, `<h3>`, and `<h4>` nestings without skipped levels.

### 2.2 Keyboard Navigation
- **Skip to Main Content Link**: Located at the very top of the DOM, hidden until focused via the `Tab` key, enabling keyboard-only users to bypass navigation headers directly to main content.
- **Accessible Dropdown Menus**:
  - Activated via `Enter` or `Space`.
  - Submenu opened via `ArrowDown`.
  - Dismissed via `Escape`, returning focus to the parent toggle button.
  - Tab order flows sequentially through menu items.
- **Visible Focus Indicators**: High-contrast outline focus rings (`outline: 2px solid #2563EB; outline-offset: 2px;`) applied globally to all interactive elements (`:focus-visible`).

### 2.3 Screen Reader & ARIA Attributes
- Form inputs have associated `<label htmlFor="...">` attributes.
- Interactive states communicate status via `aria-expanded="true|false"` and `aria-haspopup="true"`.
- Error messages are associated with invalid inputs via `aria-describedby` and flagged with `aria-invalid="true"`.
- Status alerts and submission receipts are wrapped in `role="alert"` and `aria-live="polite"`.

### 2.4 Contrast & Visual Presentation
- All body text exceeds the WCAG AA minimum contrast ratio of 4.5:1 against backgrounds (e.g. Slate-800 on Slate-50 has a contrast ratio > 11:1).
- Large headings exceed the 3:1 contrast ratio.
- Pillar colors are paired with high-contrast text shades (e.g. Emerald-800 text on Emerald-50 background).
- Visual status is never conveyed by color alone; text labels and icons are always paired.

### 2.5 Motion & Reflow
- CSS media query `@media (prefers-reduced-motion: reduce)` disables animations and smooth scrolling for users with vestibular sensitivities.
- Layout reflows smoothly from 320px mobile screens up to 4K displays without horizontal scrollbars.

---

## 3. Testing Performed & Verification Results

| Test Category | Suite / Tool | Items Verified | Status |
| :--- | :--- | :--- | :--- |
| **Schema Validation** | Vitest (`configSchemas.test.ts`) | Rejection of invalid types, schema adherence, fallback tolerance. | **PASSED (5/5)** |
| **Component Accessibility** | Vitest & Testing Library (`components.test.tsx`) | Header branding, skip link presence, keyboard dropdown toggles, footer links. | **PASSED (4/4)** |
| **Acceptance Criteria** | Vitest (`configurationAcceptance.test.tsx`) | All 13 configuration acceptance scenarios executed and verified. | **PASSED (13/13)** |
| **Form Integrity** | Vitest (`contactForm.test.tsx`) | Required fields, email regex, conditional fields, honeypot, rate limiting. | **PASSED (6/6)** |
| **Route Integrity** | Vitest (`routes.test.tsx`) | 22 comprehensive routes tested for render stability. | **PASSED (22/22)** |
| **Production Build** | TypeScript (`tsc -b`) & Vite 6 | Type-safety, zero compilation errors, optimized bundle chunking. | **PASSED (0 Errors)** |

---

## 4. Known Risks & Recommended Production Controls

1. **Static Hosting Headers**: When deploying to production (Cloudflare Pages, Netlify, or AWS CloudFront), configure security headers in hosting configuration:
   - `Content-Security-Policy`: Restrict script and style sources.
   - `X-Frame-Options: DENY`: Protect against clickjacking.
   - `X-Content-Type-Options: nosniff`: Prevent MIME-type sniffing.
   - `Referrer-Policy: strict-origin-when-cross-origin`.
2. **Backend Rate-Limiting**: While client-side rate limiting prevents casual abuse, a production backend (Spring Boot or API Gateway) should enforce IP-based rate limiting (e.g. 10 requests / minute) to protect email infrastructure.
3. **Continuous Dependency Audits**: Execute `npm audit` on a recurring monthly schedule to patch upstream third-party dependency vulnerabilities.

