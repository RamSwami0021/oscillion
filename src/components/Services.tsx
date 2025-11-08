import { Link } from 'react-router-dom';
import { Sparkles, Cloud, Globe, Smartphone, Palette, ArrowRight } from 'lucide-react';
import servicesData from '../data/services-master.json';

const iconMap: Record<string, any> = {
  'sparkles': Sparkles,
  'cloud': Cloud,
  'globe': Globe,
  'smartphone': Smartphone,
  'palette': Palette,
};

const Services = () => {
  const categories = servicesData.categories.slice(0, 5);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fadeInUp">
          <div className="badge mb-4">
            What We Offer
          </div>
          <h2 className="section-title mb-4">
            Our Services
          </h2>
          <p className="section-text max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon] || Sparkles;

            return (
              <div
                key={category.id}
                className="card group cursor-pointer animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500 blur-xl" />
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${category.color} text-white rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                    <Icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors duration-300">
                  {category.name}
                </h3>

                <p className="section-text mb-4 line-clamp-2">
                  {category.description}
                </p>

                {/* Services Count */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    {category.services.length} Services
                  </span>

                  <Link
                    to={`/services/${category.slug}/${category.services[0].slug}`}
                    className="inline-flex items-center text-sm font-semibold text-black opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  >
                    Explore
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-black transition-all duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center animate-fadeInUp animation-delay-600">
          <Link
            to="/services/generative-ai/ai-strategy-consulting"
            className="btn-primary inline-flex items-center group"
          >
            <span className="mr-2">View All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
