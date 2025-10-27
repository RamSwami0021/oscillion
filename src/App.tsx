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
import AboutPage from './pages/About';
import CareerPage from './pages/Careers';
import TestimonialPage from './pages/Testimonials';
import FaqPage from './pages/Faq';
import BlogPage from './pages/Blogs';
import ContactPage from './pages/Contact';
import FreeToolPage from './pages/FreeToolPage';
import PricingPage from './pages/PricingPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:serviceSlug" element={<DynamicServicePage />} />
          <Route path="/hireus/:hireusSlug" element={<DynamicHirePage />} />
          <Route path="/industry/:industrySlug" element={<DynamicIndustryPage />} />
          <Route path="/product/:productSlug" element={<DynamicProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          <Route path="/resources/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/free-tools" element={<FreeToolPage />} />
          <Route path="/pricing-tools" element={<PricingPage />} />
        </Routes>
        <Footer />
        <Chatbot />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
