import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from '@/context/ConfigContext';
import { Layout } from '@/components/layout/Layout';
import { ScrollToTop } from '@/components/common/ScrollToTop';

// Pages
import { Home } from '@/pages/Home';
import { AboutPage } from '@/pages/AboutPage';

// Education Pillar Pages
import { EducationLandingPage } from '@/pages/education/EducationLandingPage';
import { EmployabilityAssessmentPage } from '@/pages/education/EmployabilityAssessmentPage';
import { SoftwareCompanySimulationPage } from '@/pages/education/SoftwareCompanySimulationPage';
import { TechnologyWorkshopsPage } from '@/pages/education/TechnologyWorkshopsPage';
import { MotivationalSessionsPage } from '@/pages/education/MotivationalSessionsPage';
import { ForCollegesPage } from '@/pages/education/ForCollegesPage';
import { ForStudentsPage } from '@/pages/education/ForStudentsPage';

// Technology Services Pillar Pages
import { TechnologyServicesPage } from '@/pages/services/TechnologyServicesPage';
import { ServiceDetailPage } from '@/pages/services/ServiceDetailPage';

// AI & LLM Solutions Pages
import { AiSolutionsPage } from '@/pages/ai/AiSolutionsPage';

// Customer Segment Pages
import { SmallBusinessSolutionsPage } from '@/pages/solutions/SmallBusinessSolutionsPage';
import { EnterpriseSolutionsPage } from '@/pages/solutions/EnterpriseSolutionsPage';

// Contact & Legal
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPage } from '@/pages/legal/PrivacyPage';
import { TermsPage } from '@/pages/legal/TermsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <ConfigProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            {/* Homepage */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />

            {/* Academic & Student Readiness */}
            <Route path="/education" element={<EducationLandingPage />} />
            <Route
              path="/education/employability-assessment"
              element={<EmployabilityAssessmentPage />}
            />
            <Route
              path="/education/software-company-simulation"
              element={<SoftwareCompanySimulationPage />}
            />
            <Route
              path="/education/technology-workshops"
              element={<TechnologyWorkshopsPage />}
            />
            <Route
              path="/education/motivational-sessions"
              element={<MotivationalSessionsPage />}
            />
            <Route path="/for-colleges" element={<ForCollegesPage />} />
            <Route path="/for-students" element={<ForStudentsPage />} />

            {/* Software Engineering Services */}
            <Route path="/services" element={<TechnologyServicesPage />} />
            <Route
              path="/services/:slug"
              element={<ServiceDetailPage pillar="software" />}
            />

            {/* AI & LLM Solutions */}
            <Route path="/ai-solutions" element={<AiSolutionsPage />} />
            <Route
              path="/ai-solutions/:slug"
              element={<ServiceDetailPage pillar="ai" />}
            />

            {/* Customer Segments */}
            <Route
              path="/solutions/small-business"
              element={<SmallBusinessSolutionsPage />}
            />
            <Route
              path="/solutions/enterprise"
              element={<EnterpriseSolutionsPage />}
            />

            {/* Contact & Legal */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />

            {/* Catch-all 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
