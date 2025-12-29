import { useParams, Navigate, Link } from 'react-router-dom';
import {
  ArrowRight, Check, Code, Target, Zap, DollarSign, Clock, Shield, Users, TrendingUp, Award, Lightbulb, CheckCircle, Star, Server, Smartphone, Cloud, Briefcase, Calendar, Globe
} from 'lucide-react';
import PageHero from '../components/common/PageHero';
import hireusData from '../data/hireus.json';

const iconMap: Record<string, any> = {
  code: Code,
  server: Server,
  smartphone: Smartphone,
  cloud: Cloud,
};

interface HireUsEntry {
  slug: string;
  title: string;
  name: string;
  description: string;
  longDesc: string;
  hero: {
    heading: string;
    description: string;
    gradient: string;
  };
  icon: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  pricing: {
    model: string;
    starting: string;
    duration: string;
  };
  expertise: string[];
}

const DynamicHirePage = () => {
  const { teamType, developerType } = useParams<{ teamType: string; developerType: string }>();

  const slug = `${teamType}/${developerType}`;
  const developer = (hireusData as Record<string, HireUsEntry>)[slug];

  if (!developer) return <Navigate to="/" replace />;

  const Icon = iconMap[developer.icon] || Code;

  const hiringProcess = [
    { step: '1', title: 'Share Requirements', description: 'Tell us about your project needs and team requirements' },
    { step: '2', title: 'Review Profiles', description: 'Get matched with pre-vetted developers within 24 hours' },
    { step: '3', title: 'Interview Candidates', description: 'Conduct technical interviews with shortlisted developers' },
    { step: '4', title: 'Start Trial', description: 'Begin with a risk-free trial period to evaluate fit' },
    { step: '5', title: 'Onboard Team', description: 'Seamless integration with your existing team and processes' },
    { step: '6', title: 'Scale as Needed', description: 'Easily scale your team up or down based on project needs' }
  ];

  const engagementModels = [
    { title: 'Dedicated Team', description: 'Full-time developers working exclusively on your project', icon: Users },
    { title: 'Fixed Price', description: 'Complete project delivery at a predetermined cost', icon: DollarSign },
    { title: 'Time & Material', description: 'Flexible hourly billing for evolving requirements', icon: Clock },
    { title: 'Staff Augmentation', description: 'Extend your existing team with our skilled developers', icon: TrendingUp }
  ];

  const whyChooseUs = [
    { icon: Award, title: 'Top 1% Talent', description: 'Rigorously vetted developers with proven expertise' },
    { icon: Shield, title: 'Quality Guarantee', description: 'Risk-free trial period and quality assurance' },
    { icon: Clock, title: 'Fast Hiring', description: 'Get matched with developers within 24-48 hours' },
    { icon: Users, title: 'Dedicated Support', description: 'Account manager and 24/7 technical support' },
    { icon: TrendingUp, title: 'Scalable Teams', description: 'Easily scale up or down based on needs' },
    { icon: Globe, title: 'Timezone Flexibility', description: 'Work with developers in your preferred timezone' }
  ];

  const skills = [
    'Agile/Scrum methodology',
    'Clean code practices',
    'Version control (Git)',
    'Problem-solving skills',
    'Strong communication',
    'Team collaboration'
  ];

  const industries = [
    { name: 'Healthcare', description: 'HIPAA-compliant healthcare solutions' },
    { name: 'Fintech', description: 'Secure financial applications' },
    { name: 'E-commerce', description: 'Scalable online stores' },
    { name: 'EdTech', description: 'Interactive learning platforms' },
    { name: 'SaaS', description: 'Cloud-based software products' },
    { name: 'Enterprise', description: 'Large-scale business solutions' }
  ];

  return (
    <div className="pt-16 bg-white">
      <PageHero
        badge="Hire Developers"
        title={developer.title}
        subtitle={developer.longDesc}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <div className="animate-fadeInUp">
              <h2 className="text-4xl font-bold text-black mb-8">Core Competencies</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {developer.features.map((feature, index) => (
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

            <div className="animate-fadeInUp">
              <h2 className="text-4xl font-bold text-black mb-8">Key Benefits</h2>
              <div className="space-y-4">
                {developer.benefits.map((benefit, index) => (
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

            <div className="animate-fadeInUp">
              <h2 className="text-4xl font-bold text-black mb-8">Technology Stack</h2>
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our developers are proficient in the latest technologies and tools to deliver cutting-edge solutions.
                </p>
                <div className="flex flex-wrap gap-3">
                  {developer.technologies.map((tech, index) => (
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

            <div className="animate-fadeInUp">
              <h2 className="text-4xl font-bold text-black mb-8">Additional Skills</h2>
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
                <div className="grid sm:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-gradient-to-br from-black to-gray-800 text-white p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center mb-6">
                  <DollarSign className="w-7 h-7 mr-3" />
                  <h3 className="text-2xl font-bold">Pricing</h3>
                </div>

                <div className="space-y-5 mb-8">
                  <div>
                    <p className="text-gray-300 text-sm mb-2">Engagement Model</p>
                    <p className="text-lg font-semibold">{developer.pricing.model}</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-2">Starting From</p>
                    <p className="text-4xl font-bold">{developer.pricing.starting}</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-gray-300" />
                    <span className="text-gray-300">{developer.pricing.duration}</span>
                  </div>
                </div>

                <Link
                  to="/request-quote"
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-2">Hire Developers</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-2 border-gray-200 hover:border-black transition-all duration-300">
                <h3 className="text-xl font-bold text-black mb-4">Our Developer Expertise</h3>
                <div className="space-y-3">
                  {developer.expertise.map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Star className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-2 border-gray-200 hover:border-black transition-all duration-300">
                <h3 className="text-xl font-bold text-black mb-4">Need Help Deciding?</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Talk to our hiring experts and get personalized recommendations.
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

      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Hiring Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent, and efficient hiring process to get you started quickly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hiringProcess.map((step, index) => (
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Flexible Engagement Models</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the engagement model that best fits your project requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {engagementModels.map((model, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <model.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">{model.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{model.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Oscillion</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with a trusted technology partner that delivers excellence
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our developers have extensive experience across various industries
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-3">
                <Briefcase className="w-6 h-6 text-black mr-3" />
                <h3 className="text-lg font-bold text-black">{industry.name}</h3>
              </div>
              <p className="text-gray-600 text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-3xl shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">Success by Numbers</h2>
              <p className="text-xl text-gray-600">
                Trusted by companies worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md">
                <div className="text-5xl font-bold text-black mb-2">750+</div>
                <div className="text-gray-600">Expert Developers</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md">
                <div className="text-5xl font-bold text-black mb-2">1400+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md">
                <div className="text-5xl font-bold text-black mb-2">98%</div>
                <div className="text-gray-600">Client Retention</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md">
                <div className="text-5xl font-bold text-black mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-black to-gray-800 text-white p-12 rounded-3xl shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Risk-Free Trial Period</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Start with a 2-week trial period to evaluate our developers. If not satisfied, pay nothing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">No Risk</h3>
              <p className="text-gray-300 text-sm">100% satisfaction guaranteed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">2-Week Trial</h3>
              <p className="text-gray-300 text-sm">Evaluate before committing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Scale Easily</h3>
              <p className="text-gray-300 text-sm">Grow your team anytime</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get matched with pre-vetted {developer.name.toLowerCase()} within 24 hours and start your project with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Hire Developers Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicHirePage;
