import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check, Code, Target, Zap, DollarSign, Clock, Shield, Users, TrendingUp, Award, Lightbulb, CheckCircle, Star } from 'lucide-react';
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
  'globe': Target,
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

  const processSteps = [
    { step: '1', title: 'Discovery', description: 'Understanding your business goals and requirements' },
    { step: '2', title: 'Planning', description: 'Creating detailed roadmap and technical specifications' },
    { step: '3', title: 'Development', description: 'Building your solution with agile methodology' },
    { step: '4', title: 'Testing', description: 'Comprehensive QA and performance testing' },
    { step: '5', title: 'Deployment', description: 'Seamless launch and integration' },
    { step: '6', title: 'Support', description: 'Ongoing maintenance and optimization' }
  ];

  const useCases = [
    { title: 'Enterprise Solutions', description: 'Scale your business operations with robust enterprise-grade applications' },
    { title: 'Startup MVPs', description: 'Launch your product quickly with a minimum viable product' },
    { title: 'Legacy Modernization', description: 'Transform outdated systems into modern, efficient platforms' },
    { title: 'Digital Transformation', description: 'Digitize your business processes for improved efficiency' }
  ];

  const whyChooseUs = [
    { icon: Award, title: 'Expert Team', description: '15+ years of experience with 750+ skilled professionals' },
    { icon: Shield, title: 'Quality Assurance', description: 'Rigorous testing and quality control processes' },
    { icon: TrendingUp, title: 'Proven Track Record', description: '4200+ successful projects delivered' },
    { icon: Clock, title: 'Timely Delivery', description: '99% on-time project completion rate' },
    { icon: Users, title: 'Client-Centric', description: 'Dedicated support and transparent communication' },
    { icon: Zap, title: 'Innovation First', description: 'Latest technologies and best practices' }
  ];

  return (
    <div className="pt-16 bg-white">
      <PageHero
        badge={serviceCategory.name}
        title={service.name}
        subtitle={service.longDesc}
      />

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            {/* Key Features */}
            <div className="animate-fadeInUp">
              <h2 className="text-4xl font-bold text-black mb-8">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-7 h-7 bg-black rounded-lg flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="animate-fadeInUp">
              <h2 className="text-4xl font-bold text-black mb-8">Business Benefits</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-5 border-l-4 border-black bg-gradient-to-r from-gray-50 to-white rounded-r-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Zap className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="animate-fadeInUp">
              <h2 className="text-4xl font-bold text-black mb-8">Technologies We Use</h2>
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We leverage the latest and most reliable technologies to build robust, scalable solutions
                  that stand the test of time.
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-5 py-2.5 bg-black text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Pricing Card */}
              <div className="bg-gradient-to-br from-black to-gray-800 text-white p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center mb-6">
                  <DollarSign className="w-7 h-7 mr-3" />
                  <h3 className="text-2xl font-bold">Pricing</h3>
                </div>

                <div className="space-y-5 mb-8">
                  <div>
                    <p className="text-gray-300 text-sm mb-2">Engagement Model</p>
                    <p className="text-lg font-semibold">{service.pricing.model}</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-2">Starting From</p>
                    <p className="text-4xl font-bold">{service.pricing.starting}</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-gray-300" />
                    <span className="text-gray-300">{service.pricing.duration}</span>
                  </div>
                </div>

                <Link
                  to="/request-quote"
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-2">Get a Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-2 border-gray-200 hover:border-black transition-all duration-300">
                <h3 className="text-xl font-bold text-black mb-4">Need Expert Advice?</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our specialists are ready to discuss your project and provide tailored recommendations.
                </p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-2">Contact Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful delivery from concept to launch
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6 text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Use Cases & Applications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our {service.name.toLowerCase()} can transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Oscillion</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with a team that delivers excellence, innovation, and results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Proven Results</h2>
            <p className="text-xl text-gray-600">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-md">
              <div className="text-5xl font-bold text-black mb-2">4200+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-md">
              <div className="text-5xl font-bold text-black mb-2">1400+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-md">
              <div className="text-5xl font-bold text-black mb-2">99%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-md">
              <div className="text-5xl font-bold text-black mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {otherServices.length > 0 && (
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">
                More {serviceCategory.name} Services
              </h2>
              <p className="text-xl text-gray-600">
                Explore our other {serviceCategory.name.toLowerCase()} offerings
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherServices.map((otherService) => {
                const ServiceIcon = iconMap[otherService.icon] || Code;

                return (
                  <Link
                    key={otherService.id}
                    to={`/services/${category}/${otherService.slug}`}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl group transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <ServiceIcon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
                      {otherService.name}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {otherService.shortDesc}
                    </p>

                    <div className="flex items-center text-black font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how our {service.name.toLowerCase()} can transform your business
            and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
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
