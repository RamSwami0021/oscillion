import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check, Code, Target, Zap, DollarSign, Clock, Shield } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import servicesData from '../data/services-master.json';

const iconMap: Record<string, any> = {
  'sparkles': Zap,
  'code': Code,
  'target': Target,
  'link': Shield,
  'cloud': Shield,
  'server': Shield,
  'database': Shield,
  'smartphone': Shield,
  'layers': Code,
  'palette': Target,
  'award': Target,
};

const DynamicServicePage = () => {
  const { category, subSlug } = useParams();

  const serviceCategory = servicesData.categories.find(cat => cat.slug === category);
  const service = serviceCategory?.services.find(s => s.slug === subSlug);

  if (!service || !serviceCategory) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Service Not Found</h1>
          <Link to="/" className="btn-primary inline-flex items-center">
            <span className="mr-2">Back to Home</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Code;
  const otherServices = serviceCategory.services.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="pt-20">
      <PageHero
        badge={serviceCategory.name}
        title={service.name}
        subtitle={service.longDesc}
        icon={<Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="section-title mb-6">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <span className="section-text font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="section-title mb-6">Benefits</h2>
                <div className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 border-l-4 border-black bg-gray-50 rounded-r-xl"
                    >
                      <Zap className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                      <span className="section-text">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="section-title mb-6">Technologies We Use</h2>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-black text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="card bg-gradient-to-br from-black to-gray-800 text-white mb-6 sticky top-24">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-6 h-6 mr-2" />
                  <h3 className="text-xl font-bold">Pricing</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Model</p>
                    <p className="text-lg font-semibold">{service.pricing.model}</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Starting From</p>
                    <p className="text-3xl font-bold">{service.pricing.starting}</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-gray-300" />
                    <span className="text-gray-300">{service.pricing.duration}</span>
                  </div>
                </div>

                <Link
                  to="/request-quote"
                  className="btn-secondary w-full inline-flex items-center justify-center bg-white text-black hover:bg-gray-100"
                >
                  <span className="mr-2">Get Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="card bg-gray-50">
                <h3 className="text-xl font-bold text-black mb-4">Need Help?</h3>
                <p className="section-text mb-6">
                  Our experts are ready to discuss your project requirements.
                </p>
                <Link
                  to="/contact"
                  className="btn-primary w-full inline-flex items-center justify-center"
                >
                  <span className="mr-2">Contact Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {otherServices.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">
              More {serviceCategory.name} Services
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherServices.map((otherService) => {
                const ServiceIcon = iconMap[otherService.icon] || Code;

                return (
                  <Link
                    key={otherService.id}
                    to={`/services/${category}/${otherService.slug}`}
                    className="card group hover:shadow-2xl"
                  >
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <ServiceIcon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
                      {otherService.name}
                    </h3>

                    <p className="section-text mb-4 line-clamp-2">
                      {otherService.shortDesc}
                    </p>

                    <div className="flex items-center text-black font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="page-title text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="page-subtitle text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="btn-primary bg-white text-black hover:bg-gray-100"
            >
              Request Quote
            </Link>
            <Link
              to="/contact"
              className="btn-secondary border-white text-white hover:bg-white hover:text-black"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicServicePage;
