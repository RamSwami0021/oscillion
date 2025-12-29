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
import { motion } from 'framer-motion';
import ContactCTA from '../components/ContactCTA';

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
    <div className="pt-20">
      <div className={`relative bg-gradient-to-br ${industry.hero.gradient} text-white py-24 overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{industry.hero.heading}</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {industry.hero.description}
            </p>
          </motion.div>

          {industry.hero.stats && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto"
            >
              {industry.hero.stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-white/80">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {industry.overview && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{industry.overview.title}</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {industry.overview.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.overview.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {services.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions tailored to your industry needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon] || Shield;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-gray-300 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 flex-1">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {industry.technologies && industry.technologies.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Technologies We Use</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge tools and platforms powering your success
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {industry.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-6 py-3 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-full text-gray-700 font-medium hover:shadow-md hover:border-gray-300 transition-all duration-300"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {industry.benefits && industry.benefits.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Key Benefits</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your business with measurable results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {industry.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 flex-1">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {industry.process && industry.process.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology to deliver exceptional results
              </p>
            </motion.div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-600 transform -translate-x-1/2"></div>

              <div className="space-y-12">
                {industry.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="flex-1 md:text-right" style={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg z-10 relative">
                        {step.step}
                      </div>
                    </div>

                    <div className="flex-1"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {industry.caseStudies && industry.caseStudies.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from real clients
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {industry.caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">
                    {study.metric}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{study.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {industry.solutions && industry.solutions.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Tailored Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry-specific solutions designed for your unique needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {industry.solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-gray-300 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                  <div className="space-y-2">
                    {solution.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {industry.security && (
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Shield className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{industry.security.title}</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your data and operations are protected with industry-leading security measures
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {industry.security.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                >
                  <Lock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-200">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {industry.pricing && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{industry.pricing.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {industry.pricing.models.map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white p-8 rounded-2xl shadow-xl border-2 ${
                    index === 1 ? 'border-blue-600 transform md:scale-105' : 'border-gray-200'
                  } hover:shadow-2xl transition-all duration-300`}
                >
                  {index === 1 && (
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                      POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{model.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {model.price}
                  </div>
                  <p className="text-gray-600 mb-6">{model.description}</p>
                  <div className="space-y-3 mb-8">
                    {model.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      index === 1
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {industry.faqs && industry.faqs.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about our services
              </p>
            </motion.div>

            <div className="space-y-6">
              {industry.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {industry.cta ? (
        <section className={`py-20 bg-gradient-to-br ${industry.hero.gradient}`}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{industry.cta.title}</h2>
              <p className="text-xl text-white/90 mb-8">{industry.cta.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {industry.cta.primaryButton}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  {industry.cta.secondaryButton}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        <ContactCTA />
      )}
    </div>
  );
};

export default DynamicIndustryPage;

import industriesData from '../data/industry.json';
