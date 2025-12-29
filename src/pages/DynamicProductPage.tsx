import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import {
  Shield, Lock, Users, Clock, Calendar, Target, Briefcase, BookOpen, BarChart,
  DollarSign, User, CheckCircle, FileText, CreditCard, Book, Truck,
  Package, ShoppingCart, Database, Megaphone, Layout, TrendingUp, UserPlus,
  Mail, Zap, Headphones, Smartphone, Palette, QrCode, PenTool, Code,
  Check, Star, Award, Globe, ArrowRight, Play, ChevronDown, Download,
  Settings, Cloud, Server, Bell, MessageSquare, Search, Filter,
  FileCheck, Lock as LockIcon, Briefcase as BriefcaseIcon, HeadphonesIcon
} from 'lucide-react';
import PageHero from '../components/common/PageHero';
import productsData from '../data/product.json';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  lock: Lock,
  users: Users,
  clock: Clock,
  calendar: Calendar,
  target: Target,
  briefcase: Briefcase,
  'book-open': BookOpen,
  'bar-chart': BarChart,
  'dollar-sign': DollarSign,
  user: User,
  'check-circle': CheckCircle,
  'file-text': FileText,
  'credit-card': CreditCard,
  book: Book,
  truck: Truck,
  package: Package,
  'shopping-cart': ShoppingCart,
  database: Database,
  megaphone: Megaphone,
  layout: Layout,
  'trending-up': TrendingUp,
  'user-plus': UserPlus,
  mail: Mail,
  zap: Zap,
  headphones: Headphones,
  smartphone: Smartphone,
  palette: Palette,
  'qr-code': QrCode,
  'pen-tool': PenTool,
  code: Code,
};

const DynamicProductPage = () => {
  const { category, productType } = useParams<{ category: string; productType: string }>();
  const productSlug = `${category}/${productType}`;
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const product = (productsData as Record<string, any>)[productSlug];

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const useCases = [
    {
      title: 'Small Businesses',
      description: 'Perfect for startups and small teams looking to streamline operations and scale efficiently.',
      icon: Briefcase,
    },
    {
      title: 'Enterprise',
      description: 'Robust solutions for large organizations with complex workflows and multiple departments.',
      icon: Building2,
    },
    {
      title: 'Remote Teams',
      description: 'Enable seamless collaboration for distributed teams working from anywhere in the world.',
      icon: Globe,
    },
  ];

  const workflowSteps = [
    { title: 'Setup & Configuration', description: 'Quick 5-minute setup with guided onboarding' },
    { title: 'Import Your Data', description: 'Seamlessly migrate from your existing systems' },
    { title: 'Customize Workflows', description: 'Tailor the platform to match your processes' },
    { title: 'Go Live', description: 'Start using all features immediately' },
  ];

  const integrations = [
    { name: 'Slack', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg' },
    { name: 'Google Workspace', logo: 'https://images.pexels.com/photos/18069696/pexels-photo-18069696.jpeg' },
    { name: 'Microsoft 365', logo: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg' },
    { name: 'Salesforce', logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg' },
    { name: 'Zapier', logo: 'https://images.pexels.com/photos/262438/pexels-photo-262438.jpeg' },
    { name: 'Stripe', logo: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      content: 'This platform has completely transformed how we operate. The ROI was evident within the first month.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director, Global Corp',
      content: 'Best decision we made this year. The automation features alone saved us countless hours.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    },
    {
      name: 'Emily Rodriguez',
      role: 'CTO, Innovation Labs',
      content: 'Incredibly intuitive and powerful. Our entire team was up and running in less than a day.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    },
  ];

  const faqs = [
    {
      question: 'How long does implementation take?',
      answer: 'Most customers are fully operational within 24-48 hours. Our guided setup process and dedicated support team ensure a smooth transition.',
    },
    {
      question: 'Can I migrate data from my existing system?',
      answer: 'Yes! We provide comprehensive data migration tools and support. Our team can help you migrate data from virtually any system.',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer 24/7 support via chat, email, and phone. Enterprise customers get a dedicated account manager and priority support.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use bank-level encryption, regular security audits, and comply with SOC 2, GDPR, and HIPAA standards.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, there are no long-term contracts. You can upgrade, downgrade, or cancel your subscription at any time.',
    },
  ];

  const securityFeatures = [
    { icon: Shield, title: 'SOC 2 Certified', description: 'Independently audited security controls' },
    { icon: LockIcon, title: 'End-to-End Encryption', description: 'AES-256 encryption for all data' },
    { icon: FileCheck, title: 'GDPR Compliant', description: 'Full compliance with data protection regulations' },
    { icon: Server, title: '99.99% Uptime', description: 'Enterprise-grade infrastructure reliability' },
  ];

  const supportResources = [
    { icon: BookOpen, title: 'Documentation', description: 'Comprehensive guides and tutorials' },
    { icon: MessageSquare, title: '24/7 Live Chat', description: 'Instant help when you need it' },
    { icon: Play, title: 'Video Tutorials', description: 'Learn at your own pace' },
    { icon: Users, title: 'Community Forum', description: 'Connect with other users' },
  ];

  return (
    <div className="pt-20 bg-white">
      <PageHero
        badge={product.category.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        title={product.hero.heading}
        subtitle={product.hero.description}
      />

      <div className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-10 py-5 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                {product.cta.primaryButton}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group inline-flex items-center justify-center px-10 py-5 bg-white border-2 border-gray-300 text-black rounded-xl font-bold text-lg hover:border-black transition-all duration-300 transform hover:scale-105">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

            {product.hero.stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {product.hero.stats.map((stat: any, index: number) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-5xl font-bold mb-2 text-black">{stat.value}</div>
                    <div className="text-sm text-gray-600 uppercase tracking-wider font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl font-bold text-black mb-6">{product.overview.title}</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {product.overview.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.overview.highlights.map((highlight: string, index: number) => (
              <div
                key={index}
                className="group flex items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fadeInUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-lg font-semibold text-gray-800">{highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed, all in one comprehensive platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {product.features.map((feature: any, index: number) => {
              const IconComponent = iconMap[feature.icon] || Shield;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 animate-fadeInUp"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Perfect For Every Team</h2>
            <p className="text-xl text-gray-300">
              Trusted by teams of all sizes, from startups to Fortune 500 companies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">See It In Action</h2>
            <p className="text-xl text-gray-600">
              Explore our intuitive interface and powerful features
            </p>
          </div>

          <div className="mb-8 flex justify-center gap-4 flex-wrap">
            {product.screenshots.map((screenshot: any, index: number) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {screenshot.title}
              </button>
            ))}
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={product.screenshots[activeTab].url}
              alt={product.screenshots[activeTab].title}
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 w-full">
                <h3 className="text-3xl font-bold text-white mb-3">{product.screenshots[activeTab].title}</h3>
                <p className="text-xl text-gray-200">{product.screenshots[activeTab].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">How It Works</h2>
            <p className="text-xl text-gray-600">
              Get started in minutes with our simple 4-step process
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 -z-10"></div>
                )}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold text-white shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">Built With Modern Technology</h2>
            <p className="text-xl text-gray-600">
              Powered by industry-leading technologies for reliability and performance
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {product.technologies.map((tech: string, index: number) => (
              <div
                key={index}
                className="group px-8 py-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl font-bold text-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-200 hover:border-gray-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Seamless Integrations</h2>
            <p className="text-xl text-gray-300">
              Connect with the tools you already use and love
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl mb-3 mx-auto overflow-hidden">
                    <img src={integration.logo} alt={integration.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm font-semibold">{integration.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">Plus 100+ more integrations</p>
            <Link
              to="/contact"
              className="inline-flex items-center text-white font-semibold hover:underline"
            >
              View All Integrations
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">Why Businesses Choose Us</h2>
            <p className="text-xl text-gray-600">
              Real results from real customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((benefit: string, index: number) => (
              <div
                key={index}
                className="group flex items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">Loved By Thousands</h2>
            <p className="text-xl text-gray-600">
              See what our customers have to say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-black">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300">
              {product.pricing.model} - Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {product.pricing.plans.map((plan: any, index: number) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-10 ${
                  plan.popular ? 'ring-4 ring-white transform scale-105 shadow-2xl' : 'shadow-xl'
                } hover:shadow-2xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-sm font-bold shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-black">{plan.price}</span>
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-500 text-lg ml-2">/{product.pricing.model.split('/')[1]}</span>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mr-3 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full text-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-black to-gray-800 text-white shadow-lg'
                      : 'bg-gray-100 text-black hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">All plans include 14-day free trial • No credit card required</p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our platform
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xl font-bold text-black pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-black flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6 animate-fadeIn">
                    <p className="text-gray-700 text-lg leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">Enterprise-Grade Security</h2>
            <p className="text-xl text-gray-600">
              Your data security is our top priority
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">Support & Resources</h2>
            <p className="text-xl text-gray-600">
              We're here to help you succeed every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportResources.map((resource, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <button className="text-black font-semibold hover:underline inline-flex items-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl top-0 left-0 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl bottom-0 right-0 animate-pulse"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl sm:text-6xl font-bold mb-8">{product.cta.title}</h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            {product.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center px-12 py-6 bg-white text-black rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              {product.cta.primaryButton}
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center justify-center px-12 py-6 bg-transparent border-2 border-white text-white rounded-xl font-bold text-xl hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              {product.cta.secondaryButton}
            </Link>
          </div>
          <p className="mt-8 text-gray-400">Start your 14-day free trial today • No credit card required</p>
        </div>
      </div>
    </div>
  );
};

const Building2 = Briefcase;

export default DynamicProductPage;
