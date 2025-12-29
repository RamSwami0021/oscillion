import { useState } from 'react';
import { Code, Sparkles, Award, ArrowRight, Layers, Zap, Shield, TrendingUp } from 'lucide-react';
import PageHero from '../../components/common/PageHero';

const TechStackAdvisorTool = () => {
  const [inputs, setInputs] = useState({
    projectType: 'web-app',
    industry: 'ecommerce',
    scalability: 'medium',
    budget: 'medium',
    features: [] as string[],
  });

  const [showResults, setShowResults] = useState(false);

  const toggleFeature = (feature: string) => {
    setInputs(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const getTechRecommendations = () => {
    const { projectType, industry, scalability, budget, features } = inputs;

    const recommendations: any = {
      'web-app': {
        ecommerce: {
          high: {
            frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
            backend: ['Node.js', 'NestJS', 'PostgreSQL', 'Redis'],
            cloud: ['AWS', 'Docker', 'Kubernetes'],
            payment: ['Stripe', 'PayPal', 'Razorpay'],
            features: ['Real-time inventory', 'AI recommendations', 'Advanced analytics']
          },
          medium: {
            frontend: ['React', 'TypeScript', 'Material-UI'],
            backend: ['Node.js', 'Express', 'MongoDB'],
            cloud: ['AWS', 'Vercel', 'Railway'],
            payment: ['Stripe', 'Razorpay'],
            features: ['Shopping cart', 'Payment gateway', 'Order management']
          },
          low: {
            frontend: ['WordPress', 'WooCommerce'],
            backend: ['PHP', 'MySQL'],
            cloud: ['Shared Hosting', 'Cloudflare'],
            payment: ['PayPal', 'Stripe'],
            features: ['Basic store', 'Product catalog', 'Checkout']
          }
        },
        healthcare: {
          high: {
            frontend: ['React', 'Next.js', 'TypeScript'],
            backend: ['Python Django', 'PostgreSQL', 'Redis'],
            cloud: ['AWS', 'HIPAA Compliant'],
            security: ['End-to-end encryption', 'HIPAA compliance', '2FA'],
            features: ['Patient portal', 'Telemedicine', 'EMR integration']
          },
          medium: {
            frontend: ['React', 'TypeScript'],
            backend: ['Node.js', 'MongoDB'],
            cloud: ['Azure', 'Docker'],
            security: ['SSL/TLS', 'Data encryption', 'Audit logs'],
            features: ['Appointment booking', 'Patient records', 'Billing']
          },
          low: {
            frontend: ['WordPress', 'Custom theme'],
            backend: ['PHP', 'MySQL'],
            cloud: ['Secure hosting'],
            security: ['SSL certificate', 'Basic encryption'],
            features: ['Appointment form', 'Contact management']
          }
        },
        finance: {
          high: {
            frontend: ['Angular', 'TypeScript', 'Angular Material'],
            backend: ['Java Spring Boot', 'PostgreSQL', 'Redis'],
            cloud: ['AWS', 'Multi-region deployment'],
            security: ['PCI DSS', 'SOC 2', 'Multi-factor auth', 'Encryption'],
            features: ['Real-time transactions', 'Fraud detection', 'Reporting']
          },
          medium: {
            frontend: ['React', 'TypeScript'],
            backend: ['Node.js', 'PostgreSQL'],
            cloud: ['AWS', 'Docker'],
            security: ['SSL', 'OAuth', 'Data encryption'],
            features: ['Transaction management', 'Dashboard', 'Reports']
          },
          low: {
            frontend: ['React', 'Bootstrap'],
            backend: ['Node.js', 'MongoDB'],
            cloud: ['Heroku'],
            security: ['Basic auth', 'SSL'],
            features: ['Basic transactions', 'User accounts']
          }
        },
        general: {
          high: {
            frontend: ['React', 'Next.js', 'TypeScript'],
            backend: ['Node.js', 'Python Django', 'PostgreSQL'],
            cloud: ['AWS', 'Docker', 'Kubernetes'],
            features: ['Scalable architecture', 'High performance', 'Advanced features']
          },
          medium: {
            frontend: ['React', 'Vue.js', 'TypeScript'],
            backend: ['Node.js', 'Express', 'MongoDB'],
            cloud: ['Vercel', 'Railway', 'Docker'],
            features: ['Standard features', 'Good performance']
          },
          low: {
            frontend: ['HTML/CSS', 'JavaScript', 'Bootstrap'],
            backend: ['PHP', 'MySQL'],
            cloud: ['Shared hosting'],
            features: ['Basic functionality']
          }
        }
      },
      'mobile-app': {
        ecommerce: {
          high: {
            framework: ['React Native', 'TypeScript'],
            backend: ['Node.js', 'MongoDB', 'Firebase'],
            features: ['Push notifications', 'Offline mode', 'Payment integration'],
            deployment: ['App Store', 'Play Store']
          },
          medium: {
            framework: ['React Native', 'Expo'],
            backend: ['Firebase', 'Supabase'],
            features: ['Product catalog', 'Cart', 'Orders'],
            deployment: ['App Store', 'Play Store']
          },
          low: {
            framework: ['React Native', 'Expo'],
            backend: ['Firebase'],
            features: ['Basic shopping', 'Product list'],
            deployment: ['Play Store']
          }
        },
        healthcare: {
          high: {
            framework: ['Flutter', 'Native iOS/Android'],
            backend: ['Python Django', 'PostgreSQL'],
            features: ['HIPAA compliance', 'Video calls', 'Secure messaging'],
            deployment: ['App Store', 'Play Store']
          },
          medium: {
            framework: ['React Native', 'TypeScript'],
            backend: ['Node.js', 'MongoDB'],
            features: ['Appointments', 'Records', 'Notifications'],
            deployment: ['App Store', 'Play Store']
          },
          low: {
            framework: ['React Native'],
            backend: ['Firebase'],
            features: ['Basic booking', 'Profiles'],
            deployment: ['Play Store']
          }
        },
        general: {
          high: {
            framework: ['Flutter', 'React Native', 'TypeScript'],
            backend: ['Node.js', 'Firebase', 'PostgreSQL'],
            features: ['Native performance', 'Offline support', 'Push notifications'],
            deployment: ['App Store', 'Play Store']
          },
          medium: {
            framework: ['React Native', 'Expo'],
            backend: ['Firebase', 'Supabase'],
            features: ['Core features', 'Cloud sync'],
            deployment: ['App Store', 'Play Store']
          },
          low: {
            framework: ['React Native', 'Expo'],
            backend: ['Firebase'],
            features: ['Basic features'],
            deployment: ['Play Store']
          }
        }
      },
      'ai-solution': {
        general: {
          high: {
            ai: ['OpenAI GPT-4', 'Custom ML Models', 'TensorFlow'],
            backend: ['Python FastAPI', 'PostgreSQL', 'Redis'],
            cloud: ['AWS SageMaker', 'Lambda', 'S3'],
            features: ['Real-time inference', 'Model training', 'Data pipeline']
          },
          medium: {
            ai: ['OpenAI API', 'Pre-trained models'],
            backend: ['Python Flask', 'MongoDB'],
            cloud: ['AWS', 'Docker'],
            features: ['API integration', 'Basic ML features']
          },
          low: {
            ai: ['OpenAI API'],
            backend: ['Node.js', 'MongoDB'],
            cloud: ['Heroku'],
            features: ['Simple AI integration']
          }
        }
      }
    };

    const projectRecs = recommendations[projectType] || recommendations['web-app'];
    const industryRecs = projectRecs[industry] || projectRecs['general'];
    const budgetLevel = budget || 'medium';

    return industryRecs[budgetLevel] || industryRecs['medium'];
  };

  const getServiceRecommendations = () => {
    const { projectType, industry } = inputs;

    const services: any = {
      'web-app': {
        ecommerce: [
          { title: 'E-commerce Development', link: '/industry/retail-commerce/ecommerce' },
          { title: 'Payment Gateway Integration', link: '/services/web-development/nodejs' },
          { title: 'SEO Services', link: '/services/digital-marketing/seo' },
        ],
        healthcare: [
          { title: 'Healthcare Software Development', link: '/industry/healthcare/healthcare-software' },
          { title: 'HIPAA Compliant Solutions', link: '/resources/confidentiality-compliance' },
          { title: 'Cloud Solutions', link: '/services/cloud/aws-solutions' },
        ],
        finance: [
          { title: 'Fintech Development', link: '/industry/finance/fintech' },
          { title: 'Secure Backend Development', link: '/services/web-development/python-web' },
          { title: 'Cloud Security', link: '/services/cloud/azure-services' },
        ],
        general: [
          { title: 'Web Development', link: '/services/web-development/nodejs' },
          { title: 'Cloud Solutions', link: '/services/cloud/aws-solutions' },
          { title: 'UI/UX Design', link: '/services/designing/ui-ux' },
        ]
      },
      'mobile-app': {
        ecommerce: [
          { title: 'React Native Development', link: '/services/app-development/react-native' },
          { title: 'Cross-Platform Apps', link: '/services/app-development/cross-platform' },
        ],
        general: [
          { title: 'iOS Development', link: '/services/app-development/ios' },
          { title: 'Android Development', link: '/services/app-development/android' },
          { title: 'Flutter Development', link: '/services/app-development/flutter' },
        ]
      },
      'ai-solution': {
        general: [
          { title: 'Generative AI', link: '/services/generative-ai/overview' },
          { title: 'AI Development Services', link: '/services/generative-ai/ai-development-services' },
          { title: 'AI Integration', link: '/services/generative-ai/ai-integration-solutions' },
        ]
      }
    };

    const projectServices = services[projectType] || services['web-app'];
    return projectServices[industry] || projectServices['general'];
  };

  const recommendations = getTechRecommendations();
  const serviceRecs = getServiceRecommendations();

  return (
    <div className="pt-16 bg-white">
      <PageHero
        badge="Free Tech Tool"
        title="Tech Stack Advisor"
        subtitle="Get personalized technology recommendations based on your project requirements and industry"
      />

      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-gray-200">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-black">Tell Us About Your Project</h2>
                  <p className="text-gray-600 mt-1">Answer a few questions</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Project Type
                  </label>
                  <select
                    value={inputs.projectType}
                    onChange={(e) => setInputs({ ...inputs, projectType: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile Application</option>
                    <option value="ai-solution">AI Solution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Industry
                  </label>
                  <select
                    value={inputs.industry}
                    onChange={(e) => setInputs({ ...inputs, industry: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="ecommerce">E-commerce / Retail</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance / Banking</option>
                    <option value="education">Education</option>
                    <option value="general">General / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Expected Scale
                  </label>
                  <select
                    value={inputs.scalability}
                    onChange={(e) => setInputs({ ...inputs, scalability: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="low">Small (1K-10K users)</option>
                    <option value="medium">Medium (10K-100K users)</option>
                    <option value="high">Large (100K+ users)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Budget Level
                  </label>
                  <select
                    value={inputs.budget}
                    onChange={(e) => setInputs({ ...inputs, budget: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="low">Limited Budget</option>
                    <option value="medium">Moderate Budget</option>
                    <option value="high">Flexible Budget</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Key Features (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['User Authentication', 'Payment Processing', 'Real-time Updates', 'Analytics', 'API Integration', 'Mobile Responsive'].map((feature) => (
                      <label key={feature} className="flex items-center p-3 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-purple-500 transition-colors">
                        <input
                          type="checkbox"
                          checked={inputs.features.includes(feature)}
                          onChange={() => toggleFeature(feature)}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setShowResults(true)}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Recommendations
                  <ArrowRight className="inline-block w-5 h-5 ml-2" />
                </button>
              </div>
            </div>

            {showResults && (
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-3xl border-2 border-purple-200 animate-fadeIn">
                <div className="flex items-center mb-8">
                  <Sparkles className="w-10 h-10 text-purple-600 mr-3" />
                  <div>
                    <h2 className="text-3xl font-bold text-black">Your Recommended Stack</h2>
                    <p className="text-gray-600 mt-1">Tailored for your needs</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {Object.entries(recommendations).map(([category, technologies]: [string, any]) => (
                    <div key={category} className="bg-white p-6 rounded-xl shadow-sm">
                      <p className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wider flex items-center">
                        <Layers className="w-4 h-4 mr-2" />
                        {category}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech: string, index: number) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-semibold shadow-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="bg-purple-100 border-2 border-purple-300 p-6 rounded-xl">
                    <div className="flex items-start">
                      <Award className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-purple-900 mb-2">Why This Stack?</p>
                        <p className="text-sm text-purple-700">
                          This technology stack is recommended based on your project requirements, industry best practices,
                          scalability needs, and budget considerations. It provides the optimal balance of performance,
                          maintainability, and cost-effectiveness.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-bold text-black mb-4 flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-green-600" />
                      Recommended Services
                    </h3>
                    <div className="space-y-3">
                      {serviceRecs.map((service: any, index: number) => (
                        <a
                          key={index}
                          href={service.link}
                          className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 hover:border-purple-500"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-black">{service.title}</span>
                            <ArrowRight className="w-4 h-4 text-purple-600" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Why Choose the Right Tech Stack?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The right technology choices can make or break your project
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Better Performance</h3>
              <p className="text-gray-600">Optimized stack ensures fast, responsive applications</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Scalability</h3>
              <p className="text-gray-600">Grow your application without technical limitations</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Security</h3>
              <p className="text-gray-600">Modern technologies with built-in security features</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Future-Proof</h3>
              <p className="text-gray-600">Stay current with modern, supported technologies</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Project?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let our experts help you choose and implement the perfect technology stack for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get Expert Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/hire/frontend/react-developers"
              className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Hire Developers
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackAdvisorTool;
