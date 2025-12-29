import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import CookieConsent from './components/CookieConsent';
import HomePage from './pages/HomePage';
import DynamicServicePage from './pages/DynamicServicePage';
import DynamicHirePage from './pages/DynamicHirePage';
import DynamicIndustryPage from './pages/DynamicIndustryPage';
import DynamicProductPage from './pages/DynamicProductPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/About';
import CareerPage from './pages/Careers';
import TestimonialPage from './pages/Testimonials';
import FaqPage from './pages/Faq';
import BlogPage from './pages/Blogs';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/Contact';
import FreeToolPage from './pages/FreeToolPage';
import SEOAnalyzerTool from './pages/tools/SEOAnalyzerTool';
import WebsiteSpeedTestTool from './pages/tools/WebsiteSpeedTestTool';
import TechStackAdvisorTool from './pages/tools/TechStackAdvisorTool';
import PricingPage from './pages/PricingPage';

import RequestQuotePage from './pages/RequestQuotePage';
import CoreValuesPage from './pages/CoreValuesPage';
import PartnersPage from './pages/PartnersPage';
import LocationsPage from './pages/LocationsPage';
import EngagementModelsPage from './pages/EngagementModelsPage';
import ConfidentialityPage from './pages/ConfidentialityPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import RefundCancellationPage from './pages/RefundCancellationPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PartnerLoginPage from './pages/PartnerLoginPage';
import RequestAccessPage from './pages/RequestAccessPage';
import SupportPage from './pages/SupportPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          {/* === CORE PAGES === */}
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/request-quote" element={<RequestQuotePage />} />
          <Route path="/pricing" element={<PricingPage />} />

          {/* === COMPANY === */}
          <Route path="/company/about" element={<AboutPage />} />
          <Route path="/company/core-values" element={<CoreValuesPage />} />
          <Route path="/company/careers" element={<CareerPage />} />
          <Route path="/company/client-testimonials" element={<TestimonialPage />} />
          <Route path="/company/strategic-partners" element={<PartnersPage />} />
          <Route path="/company/locations" element={<LocationsPage />} />

          {/* === SERVICES === */}
          <Route path="/services/:category/:subSlug" element={<DynamicServicePage />} />

          {/* === INDUSTRIES === */}
          <Route path="/industry/:sector/:industryType" element={<DynamicIndustryPage />} />

          {/* === HIRE US === */}
          <Route path="/hire/:teamType/:developerType" element={<DynamicHirePage />} />

          {/* === PRODUCTS === */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:category/:productType" element={<DynamicProductPage />} />

          {/* === RESOURCES === */}
          <Route path="/resources/engagement-models" element={<EngagementModelsPage />} />
          <Route path="/resources/confidentiality-compliance" element={<ConfidentialityPage />} />
          <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
          <Route path="/resources/faqs" element={<FaqPage />} />
          <Route path="/resources/free-development-tools" element={<FreeToolPage />} />

          {/* === TOOLS === */}
          <Route path="/tools/seo-analyzer" element={<SEOAnalyzerTool />} />
          <Route path="/tools/website-speed-test" element={<WebsiteSpeedTestTool />} />
          <Route path="/tools/tech-stack-advisor" element={<TechStackAdvisorTool />} />

          {/* === LEGAL === */}
          <Route path="/legal/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/legal/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/legal/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/legal/refund-cancellation" element={<RefundCancellationPage />} />

          {/* === ACCOUNT === */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/partner-login" element={<PartnerLoginPage />} />
          <Route path="/request-access" element={<RequestAccessPage />} />
          <Route path="/support" element={<SupportPage />} />

          {/* === BLOG === */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />

          {/* === FALLBACK === */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>


        <Footer />
        <Chatbot />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
