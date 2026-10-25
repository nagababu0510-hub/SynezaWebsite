import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { ConfigProvider } from '@/context/ConfigContext';
import { defaultAppConfig } from '@/config/defaults';

// Pages
import { Home } from '@/pages/Home';
import { AboutPage } from '@/pages/AboutPage';
import { EducationLandingPage } from '@/pages/education/EducationLandingPage';
import { EmployabilityAssessmentPage } from '@/pages/education/EmployabilityAssessmentPage';
import { SoftwareCompanySimulationPage } from '@/pages/education/SoftwareCompanySimulationPage';
import { TechnologyWorkshopsPage } from '@/pages/education/TechnologyWorkshopsPage';
import { MotivationalSessionsPage } from '@/pages/education/MotivationalSessionsPage';
import { ForCollegesPage } from '@/pages/education/ForCollegesPage';
import { ForStudentsPage } from '@/pages/education/ForStudentsPage';
import { TechnologyServicesPage } from '@/pages/services/TechnologyServicesPage';
import { ServiceDetailPage } from '@/pages/services/ServiceDetailPage';
import { AiSolutionsPage } from '@/pages/ai/AiSolutionsPage';
import { SmallBusinessSolutionsPage } from '@/pages/solutions/SmallBusinessSolutionsPage';
import { EnterpriseSolutionsPage } from '@/pages/solutions/EnterpriseSolutionsPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPage } from '@/pages/legal/PrivacyPage';
import { TermsPage } from '@/pages/legal/TermsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

const renderRoute = (initialPath: string) => {
  return render(
    <ConfigProvider initialConfig={defaultAppConfig}>
      <MemoryRouter initialEntries={[initialPath]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/education" element={<EducationLandingPage />} />
          <Route path="/education/employability-assessment" element={<EmployabilityAssessmentPage />} />
          <Route path="/education/software-company-simulation" element={<SoftwareCompanySimulationPage />} />
          <Route path="/education/technology-workshops" element={<TechnologyWorkshopsPage />} />
          <Route path="/education/motivational-sessions" element={<MotivationalSessionsPage />} />
          <Route path="/for-colleges" element={<ForCollegesPage />} />
          <Route path="/for-students" element={<ForStudentsPage />} />
          <Route path="/services" element={<TechnologyServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage pillar="software" />} />
          <Route path="/ai-solutions" element={<AiSolutionsPage />} />
          <Route path="/ai-solutions/:slug" element={<ServiceDetailPage pillar="ai" />} />
          <Route path="/solutions/small-business" element={<SmallBusinessSolutionsPage />} />
          <Route path="/solutions/enterprise" element={<EnterpriseSolutionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MemoryRouter>
    </ConfigProvider>
  );
};

describe('Comprehensive Route Integrity Tests (All Routes Render Cleanly)', () => {
  it('renders Home route /', () => {
    renderRoute('/');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Engineering Technology\. Enabling Potential\./i);
  });

  it('renders About Us route /about', () => {
    renderRoute('/about');
    expect(screen.getByRole('heading', { name: /Our Mission/i })).toBeInTheDocument();
  });

  it('renders Education Landing route /education', () => {
    renderRoute('/education');
    expect(screen.getByRole('heading', { name: /Bridging Academic Preparation/i })).toBeInTheDocument();
  });

  it('renders Employability Assessment route /education/employability-assessment', () => {
    renderRoute('/education/employability-assessment');
    expect(screen.getByRole('heading', { name: /Comprehensive Employability Assessment/i })).toBeInTheDocument();
  });

  it('renders Simulation route /education/software-company-simulation', () => {
    renderRoute('/education/software-company-simulation');
    expect(screen.getByRole('heading', { name: /The 17-Hour Programme Flow/i })).toBeInTheDocument();
  });

  it('renders Workshops route /education/technology-workshops', () => {
    renderRoute('/education/technology-workshops');
    expect(screen.getByRole('heading', { name: /Curated Workshop Modules/i })).toBeInTheDocument();
  });

  it('renders Motivational Sessions route /education/motivational-sessions', () => {
    renderRoute('/education/motivational-sessions');
    expect(screen.getByRole('heading', { name: /Motivational & Inspirational Sessions/i })).toBeInTheDocument();
  });

  it('renders For Colleges route /for-colleges', () => {
    renderRoute('/for-colleges');
    expect(screen.getByRole('heading', { name: /Empowering Colleges with Objective/i })).toBeInTheDocument();
  });

  it('renders For Students route /for-students', () => {
    renderRoute('/for-students');
    expect(screen.getByRole('heading', { name: /Transitioning from Student to Software Engineer/i })).toBeInTheDocument();
  });

  it('renders Technology Services catalogue route /services', () => {
    renderRoute('/services');
    expect(screen.getByRole('heading', { name: /Software Services & Capabilities/i })).toBeInTheDocument();
  });

  it('renders individual software service: Custom Software Development', () => {
    renderRoute('/services/custom-software-development');
    expect(screen.getByRole('heading', { name: /Custom Software Development/i })).toBeInTheDocument();
  });

  it('renders individual software service: Software Maintenance', () => {
    renderRoute('/services/software-maintenance');
    expect(screen.getByRole('heading', { name: /Software Maintenance & Application Support/i })).toBeInTheDocument();
  });

  it('renders individual software service: Application Modernization', () => {
    renderRoute('/services/application-modernization');
    expect(screen.getByRole('heading', { name: /Application Modernization/i })).toBeInTheDocument();
  });

  it('renders AI Solutions overview route /ai-solutions', () => {
    renderRoute('/ai-solutions');
    expect(screen.getByRole('heading', { name: /Enterprise AI & LLM Offerings/i })).toBeInTheDocument();
  });

  it('renders individual AI service: Retrieval-Augmented Generation', () => {
    renderRoute('/ai-solutions/retrieval-augmented-generation');
    expect(screen.getByRole('heading', { name: /Retrieval-Augmented Generation \(RAG\)/i })).toBeInTheDocument();
  });

  it('renders individual AI service: LLM Security & Responsible AI', () => {
    renderRoute('/ai-solutions/llm-security-responsible-ai');
    expect(screen.getByRole('heading', { name: /LLM Security & Responsible AI/i })).toBeInTheDocument();
  });

  it('renders Small Business solutions route /solutions/small-business', () => {
    renderRoute('/solutions/small-business');
    expect(screen.getByRole('heading', { name: /Practical Software Engineering Without/i })).toBeInTheDocument();
  });

  it('renders Enterprise solutions route /solutions/enterprise', () => {
    renderRoute('/solutions/enterprise');
    expect(screen.getByRole('heading', { name: /Architectural Discipline for Complex/i })).toBeInTheDocument();
  });

  it('renders Contact route /contact', () => {
    renderRoute('/contact');
    expect(screen.getByRole('heading', { name: /Contact Syneza Technologies/i })).toBeInTheDocument();
  });

  it('renders Privacy route /privacy', () => {
    renderRoute('/privacy');
    expect(screen.getByRole('heading', { name: /Privacy Policy/i })).toBeInTheDocument();
  });

  it('renders Terms route /terms', () => {
    renderRoute('/terms');
    expect(screen.getByRole('heading', { name: /Terms & Conditions/i })).toBeInTheDocument();
  });

  it('renders custom 404 page for unknown route', () => {
    renderRoute('/unknown-random-page');
    expect(screen.getByRole('heading', { name: /Page Not Found/i })).toBeInTheDocument();
  });
});

