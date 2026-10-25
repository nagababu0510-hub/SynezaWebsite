# Syneza Technologies — Content Management & Editorial Guide

This guide is designed for content editors, marketing specialists, and engineering managers who need to maintain, update, and expand the website content for Syneza Technologies.

Because the website architecture is entirely JSON-driven, **you do not need knowledge of React or TypeScript to edit content, add services, or adjust brand positioning**.

---

## Brand Voice & Messaging Rules

1. **Authenticity & Restraint**: Avoid exaggerated claims, unsupported superlatives ("#1 leader in India", "world's best"), or fabricated statistics.
2. **Dual-Pillar Balance**:
   - Never describe Syneza exclusively as a training institute or campus-placement vendor.
   - Never describe Syneza exclusively as a generic software agency.
   - Maintain the connection: real software engineering experience informs the training curriculum, and rigorous teaching reinforces our coding standards.
3. **Accuracy in Educational Offerings**:
   - The Employability Assessment is **supervised and human-led**. Never present it as an automated online-only test.
   - The Software Company Simulation is an **educational simulation**, not employment or an internship.
   - **Never promise 100% job placements or guaranteed recruitment outcomes.**
4. **Accuracy in AI & LLM Offerings**:
   - Frame AI as a tool for solving concrete business problems, not a generic chatbot add-on.
   - Explicitly highlight data privacy, source citations, pre-retrieval authorization, and human-in-the-loop oversight.
   - Never claim an AI system is immune to hallucinations or prompt injection.

---

## Content Tasks & Instructions

### 1. Updating Company Positioning & Taglines
- **Primary Tagline**: Edit `"tagline"` in `public/config/site.json` and `"heading"` in `public/config/homepage.json` (section `id: "hero"`).
- **Supporting Statement**: Edit `"shortDescription"` in `public/config/site.json` and `"subtitle"` in `public/config/homepage.json`.
- **Purpose & Vision**: Edit `public/config/about.json` under `"purpose"`, `"mission"`, and `"vision"`.

---

### 2. Adding or Removing Services

#### To Add a New Service:
1. Locate the appropriate file:
   - For software engineering services: `public/config/software-services.json`
   - For AI & LLM services: `public/config/ai-services.json`
   - For education programmes: `public/config/education-services.json`
2. Duplicate an existing service object in the `"services"` array.
3. Ensure the `"slug"` is unique (lowercase, hyphen-separated, e.g. `"cybersecurity-audits"`).
4. Fill out the fields:
   - `name`: Display title
   - `shortDescription`: 1-2 sentence card summary
   - `fullDescription`: Comprehensive multi-paragraph explanation
   - `targetAudience`: Array of target personas
   - `businessProblem`: Array of concrete pain points
   - `synezaSolution`: Array of Syneza's engineering responses
   - `keyCapabilities`: Array of feature bullets
   - `deliveryApproach`: Array of step objects with `step`, `title`, and `description`
   - `benefits`: Array of positive outcomes
   - `technologies`: Array of tech stack keywords
   - `cta`: `{ "label": "...", "href": "/contact?category=..." }`
   - `seo`: Title, meta description, and keywords
5. Set `"enabled": true`.
6. Save the file. The new service card appears on the catalogue page, and the dedicated detail page at `/services/{slug}` or `/ai-solutions/{slug}` is generated immediately.

#### To Remove or Temporarily Hide a Service:
- In the service entry, simply set `"enabled": false`. The service card will vanish from the catalogue, and direct visits to its URL will gracefully redirect to the 404 page.

---

### 3. Updating the Main Navigation
Open `public/config/navigation.json`:
- To add a new top-level menu item, append an item to `"mainNav"`.
- To add an item to a dropdown menu (e.g. under "Technology Services"), append an entry to that item's `"children"` array.
- To temporarily hide any navigation link without deleting it, change `"enabled": true` to `"enabled": false`.

---

### 4. Reordering Homepage Sections
Open `public/config/homepage.json`:
- Each section has an `"order"` number (1, 2, 3, etc.).
- Change the numbers to reorder sections. For example, to move `faqs` directly above `testimonials` or `engineering-principles`, swap their `order` numbers.
- To disable a section (such as an announcement banner or FAQ), set `"enabled": false`.

---

### 5. Managing Pricing Visibility
Open `public/config/pricing.json`:
- Keep `"showPricingGlobally": false` until commercial rate cards are finalized and formally approved.
- When enabled, update the `"pricingNotice"` to explain cohort sizing and custom scope requirements.

---

### 6. Changing Brand Colors & Typography
Open `public/config/branding.json`:
- `colors.primary`: Core brand blue (hex code).
- `colors.teal`: Education pillar accent.
- `colors.accentAi`: AI solutions violet accent.
- `borderRadius`: Adjust `small`, `medium`, or `large` rounding.

---

### 7. Updating Contact Information & Inquiries
Open `public/config/contact.json`:
- Update `contactEmail` or `contactPhone`.
- Add or modify items in `"enquiryCategories"`.
- To add a new inquiry category, provide:
  ```json
  {
    "value": "devops-audit",
    "label": "DevOps & Infrastructure Audit",
    "categoryGroup": "software"
  }
  ```
  The contact form will automatically include this option in the dropdown and display the relevant conditional parameter fields.
