import { Shield, Zap, Users, Target, Clock, CheckCircle, Heart, Lightbulb, TrendingUp, Award, Globe, Star } from 'lucide-react';

const CoreValuesPage = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our interactions and deliverables. Honesty, transparency, and accountability are the foundation of everything we do.',
      principles: [
        'Always act with honesty and transparency',
        'Take responsibility for our actions',
        'Honor our commitments',
        'Build trust through consistent ethical behavior'
      ]
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly push boundaries with cutting-edge technologies and creative solutions. Our team stays ahead of industry trends to deliver forward-thinking solutions.',
      principles: [
        'Embrace new technologies and methodologies',
        'Encourage creative thinking and experimentation',
        'Challenge the status quo',
        'Continuously improve our processes'
      ]
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with clients and teams to achieve extraordinary results. We believe the best outcomes come from diverse perspectives and open communication.',
      principles: [
        'Foster open and honest communication',
        'Value diverse perspectives and ideas',
        'Support team members and share knowledge',
        'Partner closely with clients'
      ]
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering superior quality in every project we undertake. We set high standards and consistently exceed expectations through attention to detail.',
      principles: [
        'Strive for perfection in every deliverable',
        'Pay attention to the smallest details',
        'Never compromise on quality',
        'Continuously raise the bar'
      ]
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'Consistent delivery on time, every time, building lasting trust with our clients. Our reputation is built on dependability and meeting commitments.',
      principles: [
        'Meet deadlines and commitments',
        'Communicate proactively',
        'Be dependable and consistent',
        'Follow through on promises'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Client Success',
      description: 'Your success is our success. We go above and beyond to ensure client satisfaction and help you achieve your business goals.',
      principles: [
        'Put client needs first',
        'Deliver measurable business value',
        'Provide exceptional support',
        'Build long-term partnerships'
      ]
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about technology and its power to transform businesses. Our enthusiasm drives us to deliver exceptional results.',
      principles: [
        'Bring energy and enthusiasm to work',
        'Care deeply about project outcomes',
        'Take pride in our craft',
        'Inspire others with our dedication'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and stay current with evolving technologies. Learning is a lifelong journey that keeps us competitive.',
      principles: [
        'Invest in training and development',
        'Share knowledge and expertise',
        'Stay updated with industry trends',
        'Encourage curiosity and growth'
      ]
    }
  ];

  const culturalPillars = [
    {
      icon: Star,
      title: 'Diversity & Inclusion',
      description: 'We celebrate diverse backgrounds, perspectives, and experiences that enrich our team and work.'
    },
    {
      icon: Users,
      title: 'Work-Life Balance',
      description: 'We promote a healthy balance between professional excellence and personal well-being.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Mindset',
      description: 'We embrace challenges as opportunities to learn, grow, and become better professionals.'
    },
    {
      icon: Heart,
      title: 'Social Responsibility',
      description: 'We contribute positively to our communities and maintain sustainable business practices.'
    }
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
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Our Core Values</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The principles that guide our actions, shape our culture, and define who we are as a company.
              These values are the foundation of our success and the promise we make to our clients and team.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">What We Stand For</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our values are not just words on a page. They are the compass that guides our decisions,
            shapes our culture, and defines how we work with clients and each other every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{value.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{value.description}</p>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Key Principles</h4>
                <ul className="space-y-2">
                  {value.principles.map((principle, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mr-3 mt-0.5" />
                      <span className="text-sm">{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-12 text-white mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Cultural Pillars</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culturalPillars.map((pillar, index) => (
              <div
                key={index}
                className="text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-white bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4 hover:bg-opacity-20 transition-all duration-300">
                  <pillar.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-black text-center mb-8">Living Our Values</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
              Our core values are not just aspirational statements. They are integrated into every aspect
              of our business, from how we recruit and train team members to how we serve our clients and
              contribute to our communities.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-4xl font-bold text-black mb-2">100%</div>
                <div className="text-sm text-gray-600">Team Alignment with Values</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-4xl font-bold text-black mb-2">Daily</div>
                <div className="text-sm text-gray-600">Values Applied in Decisions</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-4xl font-bold text-black mb-2">Always</div>
                <div className="text-sm text-gray-600">Commitment to Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Values-Driven Team</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            If our values resonate with you, we'd love to have you join our team. Explore career
            opportunities and become part of a culture that celebrates excellence.
          </p>
          <a
            href="/company/careers"
            className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            View Career Opportunities
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesPage;
