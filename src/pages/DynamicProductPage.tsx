import { useParams, Navigate, Link } from 'react-router-dom';
import {
  Shield, Lock, Users, Clock, Calendar, Target, Briefcase, BookOpen, BarChart,
  DollarSign, User, CheckCircle, FileText, CreditCard, Book, Truck,
  Package, ShoppingCart, Database, Megaphone, Layout, TrendingUp, UserPlus,
  Mail, Zap, Headphones, Smartphone, Palette, QrCode, PenTool, Code,
  Check
} from 'lucide-react';
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

  const product = (productsData as Record<string, any>)[productSlug];

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="pt-20 bg-white">
      <div className={`relative bg-gradient-to-br ${product.hero.gradient} text-white py-24 overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -bottom-48 -right-48 animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeInUp">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              {product.category.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">{product.hero.heading}</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              {product.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                {product.cta.primaryButton}
              </Link>
              <Link
                to="/request-quote"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                {product.cta.secondaryButton}
              </Link>
            </div>
          </div>

          {product.hero.stats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto">
              {product.hero.stats.map((stat: any, index: number) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-200">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">{product.overview.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {product.overview.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {product.overview.highlights.map((highlight: string, index: number) => (
            <div
              key={index}
              className="flex items-start p-4 bg-gray-50 rounded-lg animate-fadeInUp"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mr-3 mt-0.5" />
              <span className="text-gray-700">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">
              Everything you need to power your operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {product.features.map((feature: any, index: number) => {
              const IconComponent = iconMap[feature.icon] || Shield;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-700 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Screenshots</h2>
          <p className="text-xl text-gray-600">
            See our product in action
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {product.screenshots.map((screenshot: any, index: number) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={screenshot.url}
                alt={screenshot.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{screenshot.title}</h3>
                  <p className="text-gray-200">{screenshot.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
            <p className="text-xl text-gray-300">
              {product.pricing.model}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {product.pricing.plans.map((plan: any, index: number) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 ${plan.popular ? 'ring-4 ring-white transform scale-105' : ''} hover:shadow-2xl transition-all duration-300 animate-fadeInUp`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="inline-block px-4 py-1 bg-black text-white rounded-full text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-black">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-gray-500 ml-2">/{product.pricing.model.split('/')[1]}</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mr-2 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'bg-gray-100 text-black hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Technology Stack</h2>
          <p className="text-xl text-gray-600">
            Built with modern, reliable technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {product.technologies.map((tech: string, index: number) => (
            <div
              key={index}
              className="px-6 py-3 bg-gray-100 rounded-lg font-semibold text-gray-700 hover:bg-gray-200 transition-colors animate-fadeInUp"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Key Benefits</h2>
            <p className="text-xl text-gray-600">
              Why businesses choose our solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((benefit: string, index: number) => (
              <div
                key={index}
                className="flex items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{product.cta.title}</h2>
          <p className="text-xl text-gray-300 mb-8">
            {product.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              {product.cta.primaryButton}
            </Link>
            <Link
              to="/request-quote"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              {product.cta.secondaryButton}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicProductPage;
