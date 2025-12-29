import { useState } from 'react';
import { Target, Eye, Users, Award, Globe, TrendingUp, Shield, Zap, Clock, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our interactions and deliverables.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Constantly pushing boundaries with cutting-edge technologies and creative solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with clients and teams to achieve extraordinary results.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering superior quality in every project we undertake.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'Consistent delivery on time, every time, building lasting trust with our clients.'
    },
    {
      icon: CheckCircle,
      title: 'Client Success',
      description: 'Your success is our success. We go above and beyond to ensure client satisfaction.'
    }
  ];

  const timeline = [
    { year: '2010', title: 'Foundation', desc: 'Started with a vision to transform businesses through technology' },
    { year: '2013', title: 'Expansion', desc: 'Opened offices across 3 continents' },
    { year: '2016', title: 'Innovation Hub', desc: 'Launched R&D center for emerging technologies' },
    { year: '2020', title: 'Global Recognition', desc: 'Awarded Top IT Services Company' },
    { year: '2023', title: 'AI Leadership', desc: 'Leading the charge in AI and automation solutions' },
  ];

  const certifications = [
    'ISO 9001:2015',
    'ISO 27001:2013',
    'ISO 13485:2016',
    'CMMI Level 5',
    'SOC 2 Type II',
    'GDPR Compliant'
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
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">About Oscillion</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A global leader in software development and IT consulting, empowering businesses
              with innovative technology solutions since 2010.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fadeInLeft">
            <h2 className="text-4xl font-bold text-black mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Oscillion Software Services LLP is a premier IT solutions provider with over 15 years
              of experience in delivering cutting-edge technology services to businesses worldwide.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our team of 750+ expert developers, designers, and strategists work collaboratively
              to transform businesses through innovative digital solutions that drive growth,
              efficiency, and competitive advantage.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From startups to Fortune 500 companies, we've served over 1,400 clients across
              30+ countries, completing more than 4,200 successful projects spanning diverse
              industries and technologies.
            </p>
          </div>

          <div className="relative animate-fadeInRight">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold mb-1">99.9%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-xl p-1">
              {['mission', 'vision', 'values'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-black text-white shadow-lg'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {activeTab === 'mission' && (
              <div className="animate-fadeIn text-center">
                <Target className="w-16 h-16 mx-auto mb-6 text-black" />
                <h3 className="text-3xl font-bold text-black mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower businesses worldwide with innovative technology solutions that drive
                  digital transformation, enhance operational efficiency, and create sustainable
                  competitive advantages. We are committed to delivering excellence in every
                  project while fostering long-term partnerships built on trust and results.
                </p>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="animate-fadeIn text-center">
                <Eye className="w-16 h-16 mx-auto mb-6 text-black" />
                <h3 className="text-3xl font-bold text-black mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be the world's most trusted technology partner, recognized globally for
                  innovation, excellence, and transformative solutions. We envision a future where
                  every business, regardless of size or industry, has access to world-class
                  technology services that unlock their full potential and drive meaningful growth.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <value.icon className="w-10 h-10 text-black mb-4" />
                    <h4 className="text-xl font-bold text-black mb-2">{value.title}</h4>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } animate-fadeInUp`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-2xl font-bold text-black mb-2">{item.year}</div>
                    <div className="text-lg font-semibold text-gray-800 mb-2">{item.title}</div>
                    <div className="text-gray-600">{item.desc}</div>
                  </div>
                </div>
                <div className="w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-black text-center mb-8">Certifications & Compliance</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We maintain the highest industry standards and certifications to ensure quality,
            security, and compliance in all our services.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <Shield className="w-10 h-10 mx-auto mb-3 text-black" />
                <div className="text-sm font-semibold text-gray-800">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 1,400+ companies that trust Oscillion for their technology needs.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
