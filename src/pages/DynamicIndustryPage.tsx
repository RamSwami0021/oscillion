import { useParams, Navigate, Link } from 'react-router-dom';
import {
  Shield,
  Lock,
  Heart,
  Building2,
  ShoppingBag,
  Sprout,
  UtensilsCrossed,
  Plane,
  Film,
  Trophy,
  GraduationCap,
  Truck,
  Sparkles,
  PawPrint,
  DollarSign,
  Database,
  ShoppingCart,
  Lightbulb,
  Smartphone,
  Users,
  Camera,
  Book,
  Search,
  Package,
  Gift,
  Monitor,
  QrCode,
  Server,
  Cloud,
  CheckCircle2,
  ArrowRight,
  Check,
} from 'lucide-react';
import ContactCTA from '../components/ContactCTA';
import industriesData from '../data/industry.json';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  lock: Lock,
  heart: Heart,
  building: Building2,
  shoppingbag: ShoppingBag,
  sprout: Sprout,
  utensils: UtensilsCrossed,
  plane: Plane,
  film: Film,
  trophy: Trophy,
  graduationcap: GraduationCap,
  truck: Truck,
  sparkles: Sparkles,
  pawprint: PawPrint,
  dollarsign: DollarSign,
  database: Database,
  shoppingcart: ShoppingCart,
  lightbulb: Lightbulb,
  smartphone: Smartphone,
  users: Users,
  camera: Camera,
  book: Book,
  search: Search,
  package: Package,
  gift: Gift,
  monitor: Monitor,
  qrcode: QrCode,
  server: Server,
  cloud: Cloud,
};

interface Stat {
  value: string;
  label: string;
}

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface CaseStudy {
  title: string;
  metric: string;
  description: string;
}

interface Solution {
  title: string;
  description: string;
  features: string[];
}

interface PricingModel {
  name: string;
  price: string;
  description: string;
  features: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

interface IndustryData {
  slug: string;
  title: string;
  name?: string;
  description: string;
  hero: {
    heading: string;
    description: string;
    gradient: string;
    stats?: Stat[];
  };
  overview?: {
    title: string;
    description: string;
    highlights: string[];
  };
  services?: Service[];
  features?: Service[];
  technologies?: string[];
  benefits?: string[];
  process?: ProcessStep[];
  caseStudies?: CaseStudy[];
  solutions?: Solution[];
  security?: {
    title: string;
    features: string[];
  };
  pricing?: {
    title: string;
    models: PricingModel[];
  };
  faqs?: FAQ[];
  cta?: {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
}

const DynamicIndustryPage = () => {
  const { sector, industryType } = useParams<{ sector: string; industryType: string }>();

  const slug = `${sector}/${industryType}`;
  const industry = (industriesData as Record<string, IndustryData>)[slug];

  if (!industry) {
    return <Navigate to="/" replace />;
  }

  const services = industry.services || industry.features || [];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-black to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 leading-tight">{industry.hero.heading}</h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              {industry.hero.description}
            </p>
          </div>
        </div>
      </div>

      {industry.overview && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">{industry.overview.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {industry.overview.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.overview.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {services.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions tailored to your industry needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon] || Shield;
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {industry.technologies && industry.technologies.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Technologies We Use</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge tools and platforms powering your success
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {industry.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-gray-100 border border-gray-200 rounded-full text-gray-700 font-medium hover:bg-gray-200 transition-colors"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {industry.benefits && industry.benefits.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Key Benefits</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your business with measurable results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {industry.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 flex-1">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {industry.process && industry.process.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology to deliver exceptional results
              </p>
            </div>

            <div className="space-y-8">
              {industry.process.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-700 text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {industry.caseStudies && industry.caseStudies.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from real clients
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {industry.caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl font-bold text-black mb-4">
                    {study.metric}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{study.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {industry.solutions && industry.solutions.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Tailored Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry-specific solutions designed for your unique needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {industry.solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                  <div className="space-y-2">
                    {solution.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {industry.security && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 mx-auto mb-6 text-black" />
              <h2 className="text-4xl font-bold mb-4 text-gray-900">{industry.security.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your data and operations are protected with industry-leading security measures
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {industry.security.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm"
                >
                  <Lock className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {industry.faqs && industry.faqs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about our services
              </p>
            </div>

            <div className="space-y-4">
              {industry.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {industry.cta ? (
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">{industry.cta.title}</h2>
            <p className="text-xl mb-8 text-gray-300">{industry.cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {industry.cta.primaryButton}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-gray-900 transition-colors"
              >
                {industry.cta.secondaryButton}
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <ContactCTA />
      )}
    </div>
  );
};

export default DynamicIndustryPage;
