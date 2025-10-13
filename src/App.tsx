import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';
import Blogs from './components/Blogs';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ServicePage from './components/ServicePage';
import CookieConsent from './components/CookieConsent';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'service'>('home');

  if (currentPage === 'service') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation onNavigate={() => setCurrentPage('home')} />
        <ServicePage />
        <Footer />
        <CookieConsent />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigate={() => setCurrentPage('service')} />
      <Hero onViewService={() => setCurrentPage('service')} />
      <About />
      <Services onServiceClick={() => setCurrentPage('service')} />
      <Industries />
      <Testimonials />
      <Blogs />
      <ContactCTA />
      <Footer />
      <Chatbot />
      <CookieConsent />
    </div>
  );
}

export default App;
