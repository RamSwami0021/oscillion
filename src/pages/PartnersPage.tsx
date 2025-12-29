import { Handshake, TrendingUp, Users, Award, Zap, Shield, Target, Globe, CheckCircle, ArrowRight, Mail, Phone } from 'lucide-react';

const PartnersPage = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: 'Years of experience delivering enterprise-grade solutions with technical excellence and business acumen.'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Partnership team providing ongoing support, training, and resources to ensure mutual success.'
    },
    {
      icon: TrendingUp,
      title: 'Co-Marketing Opportunities',
      description: 'Collaborate on joint marketing initiatives, webinars, and case studies to expand market reach.'
    },
    {
      icon: Zap,
      title: 'Revenue Growth',
      description: 'Develop new revenue streams through joint solutions, referral programs, and integrated offerings.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to our worldwide network of clients and partners across 30+ countries.'
    },
    {
      icon: Shield,
      title: 'Technical Excellence',
      description: 'Partner with a team recognized for innovation and quality in software development.'
    }
  ];

  const partnershipModels = [
    {
      icon: Target,
      title: 'Technology Partners',
      description: 'Integrate your technology platform with our solutions to create powerful, comprehensive offerings for mutual clients.',
      features: [
        'API integrations and data connectivity',
        'Joint solution development',
        'Technical collaboration and support',
        'Co-innovation opportunities'
      ],
      color: 'blue'
    },
    {
      icon: Handshake,
      title: 'Reseller Partners',
      description: 'Expand your service portfolio by reselling our solutions to your customer base with attractive margin structures.',
      features: [
        'Competitive reseller pricing',
        'Sales and technical training',
        'Marketing materials and support',
        'Lead generation assistance'
      ],
      color: 'green'
    },
    {
      icon: Users,
      title: 'Implementation Partners',
      description: 'Work with our solutions to deliver consulting, implementation, and deployment services to end customers.',
      features: [
        'Implementation methodologies',
        'Customer success support',
        'Professional services collaboration',
        'Certification programs'
      ],
      color: 'orange'
    },
    {
      icon: Globe,
      title: 'Strategic Alliance',
      description: 'Establish long-term strategic relationships focused on market expansion and innovation in specific industries.',
      features: [
        'Joint go-to-market strategies',
        'Dedicated account management',
        'Co-investment opportunities',
        'Executive sponsorship'
      ],
      color: 'purple'
    }
  ];

  const requirements = [
    {
      icon: Target,
      title: 'Alignment',
      description: 'Shared values and commitment to customer success and innovation'
    },
    {
      icon: Award,
      title: 'Capability',
      description: 'Relevant expertise and resources to deliver joint solutions'
    },
    {
      icon: Globe,
      title: 'Market Presence',
      description: 'Established customer base or market access in target segments'
    },
    {
      icon: Zap,
      title: 'Commitment',
      description: 'Dedicated resources and active participation in partnership initiatives'
    }
  ];

  const stats = [
    { icon: Handshake, value: '100+', label: 'Active Partners' },
    { icon: Globe, value: '30+', label: 'Countries' },
    { icon: Users, value: '1400+', label: 'Joint Clients' },
    { icon: TrendingUp, value: '95%', label: 'Partner Satisfaction' }
  ];

  return (
    <div className="pt-16 bg-white">
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -bottom-48 -right-48 animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Strategic Partners</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Together we deliver exceptional value. Join our network of technology leaders
              and strategic partners to drive innovation and growth.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-black" />
              <div className="text-3xl font-bold text-black mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Why Partner With Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build a lasting partnership that drives mutual success and delivers exceptional
            value to our combined customer base.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black text-center mb-12">Partnership Models</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipModels.map((model, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-black transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6">
                  <model.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{model.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{model.description}</p>
                <ul className="space-y-3">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mr-3 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black text-white rounded-2xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Partner Requirements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-white bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4 hover:bg-opacity-20 transition-all duration-300">
                  <req.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{req.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{req.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12">
          <div className="text-center mb-8">
            <Handshake className="w-16 h-16 mx-auto mb-6 text-black" />
            <h2 className="text-3xl font-bold text-black mb-4">Ready to Partner?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're excited to explore partnership opportunities that create mutual value
              and drive innovation in the market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:partnerships@oscillion.com"
              className="flex items-center justify-center p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-black hover:shadow-lg transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-black mr-3" />
              <div className="text-left">
                <div className="font-semibold text-black">Email Us</div>
                <div className="text-sm text-gray-600">partnerships@oscillion.com</div>
              </div>
            </a>

            <a
              href="tel:+18000000000"
              className="flex items-center justify-center p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-black hover:shadow-lg transition-all duration-300"
            >
              <Phone className="w-6 h-6 text-black mr-3" />
              <div className="text-left">
                <div className="font-semibold text-black">Call Us</div>
                <div className="text-sm text-gray-600">+1 (800) 000-0000</div>
              </div>
            </a>
          </div>

          <a
            href="/contact"
            className="flex items-center justify-center w-full px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            Contact Partnership Team
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Partner Ecosystem</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's work together to deliver innovative solutions and create exceptional
            value for our customers. Start your partnership journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Become a Partner
            </a>
            <a
              href="/resources/faqs"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Partner FAQs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
