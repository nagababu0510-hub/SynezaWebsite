# Syneza Technologies — SEO & Content Mapping Strategy

This document outlines the technical search engine optimization (SEO) architecture, page-by-page keyword mapping, search intent analysis, internal linking strategy, and structured data hierarchy for Syneza Technologies.

---

## 1. SEO Architecture Overview

- **Canonical URL Policy**: Every page specifies an absolute canonical URL matching `https://syneza.com{pathname}` to prevent duplicate content indexing.
- **Title Tag Pattern**: `%s | Syneza Technologies` (e.g. `Custom Software Development Services | Syneza Technologies`).
- **OpenGraph & Social Sharing**: Configured with dynamic `og:title`, `og:description`, `og:url`, and `og:type` via `SeoHead.tsx`.
- **Crawl Directive**: `public/robots.txt` permits crawling of all public routes while protecting raw config directories from redundant scrapers.
- **XML Sitemap**: `public/sitemap.xml` lists all 30+ URLs with appropriate change frequencies and priorities.
- **JSON-LD Schema Hierarchy**:
  - `Organization`: Global entity information, logo, canonical base, and verified social profiles.
  - `WebSite`: Publisher linkage.
  - `Service`: Embedded on individual software and AI service detail pages.

---

## 2. Comprehensive Page-to-Keyword Mapping Matrix

### Pillar A: Education, Employability and Industry Readiness

| Route | Page Title | Primary Keyword Themes | Target Audience | Recommended Internal Links |
| :--- | :--- | :--- | :--- | :--- |
| `/education` | Education & Employability Services | `engineering student employability assessment`, `engineering college training`, `industry readiness` | College Deans, TPOs, Placement Faculty | Link to `/for-colleges`, `/education/employability-assessment`, `/education/software-company-simulation` |
| `/education/employability-assessment` | Comprehensive Employability Assessment | `engineering student employability assessment`, `technical skill assessment`, `campus placement preparation` | Training & Placement Officers, Principals | Link to `/education/technology-workshops`, `/contact?category=college-assessment` |
| `/education/software-company-simulation` | Software Company Simulation Programme | `Software Company Simulation`, `Agile sprint workshop for students`, `engineering college training` | Engineering Students, Department Heads | Link to `/for-students`, `/education/employability-assessment`, `/contact` |
| `/education/technology-workshops` | Technology Workshops for Engineering Colleges | `technical workshops for engineering colleges`, `Java Spring Boot college workshop`, `Python REST API training` | Coding Clubs, Faculty, Student Batches | Link to `/services/custom-software-development`, `/contact` |
| `/education/motivational-sessions` | Motivational & Career Readiness Sessions | `engineering student motivational sessions`, `career awareness`, `growth mindset for engineers` | Student Batches, Placement Cells | Link to `/for-students`, `/education` |
| `/for-colleges` | For Engineering Colleges & Placement Cells | `engineering college training partner`, `campus recruitment readiness`, `skill gap analysis for colleges` | TPOs, Academic Management | Link to `/education/employability-assessment`, `/contact?category=college-assessment` |
| `/for-students` | For Engineering Students & Graduates | `how to pass technical coding interviews`, `student to software engineer`, `real-world software expectations` | Final Year & Pre-final Students | Link to `/education/software-company-simulation`, `/education/technology-workshops` |

---

### Pillar B: Software Engineering and Technology Services

| Route | Page Title | Primary Keyword Themes | Target Audience | Recommended Internal Links |
| :--- | :--- | :--- | :--- | :--- |
| `/services` | Technology Services & Software Engineering | `custom software development services`, `software maintenance services`, `application modernization` | Business Owners, CTOs, VP Engineering | Link to `/services/custom-software-development`, `/services/software-maintenance`, `/contact` |
| `/services/custom-software-development` | Custom Software Development Services | `custom software development services`, `Java and Spring Boot development`, `web application engineering` | Small Businesses, Startups, Mid-market | Link to `/services/api-system-integration`, `/solutions/small-business`, `/contact` |
| `/services/software-maintenance` | Software Maintenance & Application Support | `software maintenance services`, `application support`, `code refactoring`, `technical debt reduction` | Companies with existing applications | Link to `/services/application-modernization`, `/services/quality-engineering` |
| `/services/application-modernization` | Application Modernization Services | `application modernization`, `monolith to microservices migration`, `Java upgrade services` | Enterprise Architects, Engineering Directors | Link to `/services/software-maintenance`, `/solutions/enterprise` |
| `/services/api-system-integration` | API Development & System Integration | `API development and integration`, `REST API design services`, `Kafka messaging integration` | Technical Leads, Integration Managers | Link to `/services/custom-software-development`, `/services/database-engineering` |
| `/services/database-engineering` | Database Engineering & SQL Optimization | `database optimization`, `SQL query tuning services`, `database schema design` | Database Administrators, Developers | Link to `/services/software-maintenance`, `/services/custom-software-development` |
| `/services/quality-engineering` | Quality Engineering & Test Automation | `quality engineering services`, `test automation partner`, `API regression testing` | QA Leads, Product Owners | Link to `/services/devops-delivery`, `/services/custom-software-development` |
| `/services/devops-delivery` | DevOps & Delivery Engineering | `DevOps and delivery engineering`, `CI/CD pipeline implementation`, `Docker containerization` | DevOps Leads, Infrastructure Teams | Link to `/services/quality-engineering`, `/services/application-modernization` |
| `/services/technical-consulting-architecture` | Architecture & Technical Consulting | `software engineering consulting`, `technical architecture review`, `technology stack selection` | Founders, CTOs, Investors | Link to `/services`, `/solutions/small-business`, `/solutions/enterprise` |

---

### Pillar B: AI & Large Language Model Solutions

| Route | Page Title | Primary Keyword Themes | Target Audience | Recommended Internal Links |
| :--- | :--- | :--- | :--- | :--- |
| `/ai-solutions` | AI & LLM Solutions for Business | `AI integration services`, `LLM integration`, `generative AI solutions for businesses` | Business Leaders, Innovation Directors | Link to `/ai-solutions/retrieval-augmented-generation`, `/ai-solutions/llm-integration` |
| `/ai-solutions/llm-integration` | LLM Integration Services for Applications | `LLM integration services`, `Large Language Model API integration`, `structured output LLM` | Product Managers, Backend Engineers | Link to `/ai-solutions/ai-workflow-automation`, `/ai-solutions/llm-security-responsible-ai` |
| `/ai-solutions/retrieval-augmented-generation` | Grounded RAG & Knowledge Assistants | `retrieval-augmented generation`, `RAG knowledge assistant`, `internal document search AI` | Operations, Customer Support, Legal | Link to `/ai-solutions/llm-security-responsible-ai`, `/contact` |
| `/ai-solutions/ai-workflow-automation` | AI Workflow Automation & Controlled Agents | `AI workflow automation`, `human in the loop AI`, `business process automation AI` | Operations Managers, Business Leaders | Link to `/ai-solutions/ai-document-processing`, `/ai-solutions/llm-integration` |
| `/ai-solutions/ai-customer-support` | AI for Customer Support & Helpdesk | `AI for customer support`, `helpdesk ticket classification`, `support agent copilot` | Customer Success Heads, Support Leads | Link to `/ai-solutions/retrieval-augmented-generation`, `/contact` |
| `/ai-solutions/ai-document-processing` | AI Document Processing & Data Extraction | `AI document processing`, `invoice data extraction AI`, `PDF to JSON extraction` | Finance Teams, Operations, Supply Chain | Link to `/ai-solutions/ai-workflow-automation`, `/services/custom-software-development` |
| `/ai-solutions/ai-developer-workflows` | AI-Assisted Developer Workflows | `AI developer workflows`, `automated unit test generation`, `developer productivity AI` | Engineering Directors, Lead Developers | Link to `/services/quality-engineering`, `/ai-solutions/llm-security-responsible-ai` |
| `/ai-solutions/ai-readiness-discovery` | AI Readiness & Feasibility Discovery | `AI readiness assessment`, `AI use case discovery`, `AI consulting for business` | Founders, Executives considering AI | Link to `/ai-solutions`, `/contact?category=ai-discovery` |
| `/ai-solutions/llm-security-responsible-ai` | LLM Security & Responsible AI Architecture | `LLM security services`, `prompt injection defense`, `responsible AI architecture` | Security Officers, Compliance Teams | Link to `/ai-solutions/retrieval-augmented-generation`, `/privacy` |

---

## 3. Customer Segments & Core Brand Pages

| Route | Page Title | Primary Keyword Themes | Search Intent |
| :--- | :--- | :--- | :--- |
| `/` | Syneza Technologies — Engineering Technology. Enabling Potential. | `Syneza Technologies`, `software engineering partner`, `college employability assessment` | Navigational & Commercial |
| `/about` | About Syneza Technologies — Purpose & Standards | `about Syneza Technologies`, `engineering craftsmanship`, `dual-pillar technology company` | Informational |
| `/solutions/small-business` | Software Engineering for Small Businesses | `software development for small business`, `spreadsheet to database migration`, `small business MVP build` | Commercial / Transactional |
| `/solutions/enterprise` | Enterprise Technology Services | `enterprise application modernization`, `backend services architecture`, `enterprise LLM security` | Commercial / Transactional |
| `/contact` | Contact Syneza Technologies — Project & College Inquiries | `contact Syneza Technologies`, `request software project quote`, `schedule college assessment drive` | Transactional |
| `/privacy` | Privacy Policy | `Syneza Technologies privacy policy` | Legal / Trust |
| `/terms` | Terms & Conditions | `Syneza Technologies terms of service` | Legal / Trust |

---

## 4. Internal Linking Guidelines

1. **Dual-Pillar Cross-Pollination**: Always connect the relevance between academic readiness and commercial software engineering (e.g. on `/education/technology-workshops`, link to the production `/services/custom-software-development` page).
2. **Contextual Inquiries**: Anchor CTAs with prefilled inquiry category parameters (e.g. `/contact?category=college-assessment` on educational pages, `/contact?category=application-modernization` on modernization pages) to minimize user friction.
3. **No Keyword Stuffing**: Keep keyword mentions natural, contextually accurate, and informative. Never artificially repeat keyword phrases.
