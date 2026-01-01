import { Search, Zap, Code, ArrowRight, Calculator, TrendingUp, Users, Award } from 'lucide-react';
import PageHero from '../components/common/PageHero';

const FreeToolPage = () => {
  const tools = [
    {
      id: 'seo-analyzer',
      name: 'SEO Analyzer',
      description: 'Analyze your website SEO performance and get actionable insights to improve search rankings',
      icon: Search,
      color: 'from-blue-500 to-cyan-600',
      link: '/tools/seo-analyzer',
      features: ['On-page SEO audit', 'Meta tags analysis', 'Performance metrics', 'Improvement recommendations']
    },
    {
      id: 'speed-test',
      name: 'Website Speed Test',
      description: 'Test your website loading speed and get optimization recommendations for better performance',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      link: '/tools/website-speed-test',
      features: ['Load time analysis', 'Performance metrics', 'Page size breakdown', 'Optimization tips']
    },
    {
      id: 'tech-stack',
      name: 'Tech Stack Advisor',
      description: 'Get personalized technology recommendations based on your project requirements and industry',
      icon: Code,
      color: 'from-purple-500 to-pink-600',
      link: '/tools/tech-stack-advisor',
      features: ['Custom recommendations', 'Industry-specific advice', 'Scalability planning', 'Budget optimization']
    },
  ];

  return (
    <div className="pt-20 bg-white">
      <PageHero
        badge="Free Resources"
        title="Free Development Tools"
        subtitle="Professional tools to help you make informed decisions about your software projects"
      />

      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-6xl font-bold mb-6">Powerful Tools for Your Success</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access professional-grade tools absolutely free. No registration required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-gray-200"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">{tool.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{tool.description}</p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Key Features:</p>
                  <ul className="space-y-2">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={tool.link}
                  className="inline-flex items-center text-black font-semibold hover:underline group-hover:translate-x-2 transition-transform"
                >
                  Use Tool
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Why Use Our Tools?</h2>
            <p className="text-xl text-gray-600">
              Trusted by thousands of businesses worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Accurate Results</h3>
              <p className="text-gray-600">
                Industry-standard methodologies for precise analysis
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Instant Analysis</h3>
              <p className="text-gray-600">
                Get results in seconds without waiting
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">No Registration</h3>
              <p className="text-gray-600">
                Use all tools freely without sign-up
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Expert Backed</h3>
              <p className="text-gray-600">
                Built by industry professionals
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6">Need Professional Help?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Our experts are ready to provide detailed consultation and implementation services tailored to your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/request-quote"
              className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-6 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-black mb-2">Are these tools really free?</h3>
                <p className="text-gray-600">
                  Yes, all our tools are completely free to use with no hidden charges or registration required.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">How accurate are the results?</h3>
                <p className="text-gray-600">
                  Our tools use industry-standard algorithms and best practices to provide accurate, reliable results.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">Can I use these for commercial projects?</h3>
                <p className="text-gray-600">
                  Absolutely! Our tools are designed for both personal and commercial use without restrictions.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">Do you offer implementation services?</h3>
                <p className="text-gray-600">
                  Yes, our expert team can help implement recommendations from these tools. Contact us for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeToolPage;
