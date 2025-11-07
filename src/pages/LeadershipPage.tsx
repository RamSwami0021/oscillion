import { Linkedin, Mail, Users, Award, TrendingUp, Globe, Target, Briefcase } from 'lucide-react';

const LeadershipPage = () => {
  const stats = [
    { icon: Users, value: '50+', label: 'Years Combined Experience', color: 'from-black to-gray-700' },
    { icon: Globe, value: '30+', label: 'Countries Operated', color: 'from-gray-800 to-black' },
    { icon: Award, value: '100+', label: 'Industry Awards', color: 'from-black to-gray-600' },
    { icon: TrendingUp, value: '4,200+', label: 'Projects Led', color: 'from-gray-700 to-black' },
  ];

  const leaders = [
    {
      name: 'Rajesh Kumar',
      role: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Rajesh brings over 20 years of experience in technology leadership and business strategy. Under his guidance, Oscillion has grown from a small startup to a global technology leader serving clients across 30+ countries.',
      expertise: ['Strategic Planning', 'Business Development', 'Digital Transformation'],
      linkedin: 'https://linkedin.com',
      email: 'rajesh.kumar@oscillion.com'
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Sarah is a visionary technologist with expertise in cloud computing, AI, and enterprise architecture. She leads our technical strategy and innovation initiatives, ensuring we stay at the forefront of emerging technologies.',
      expertise: ['Cloud Architecture', 'AI & Machine Learning', 'Technology Innovation'],
      linkedin: 'https://linkedin.com',
      email: 'sarah.chen@oscillion.com'
    },
    {
      name: 'Michael Anderson',
      role: 'Chief Operating Officer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Michael oversees global operations and delivery excellence. His focus on process optimization and quality assurance has helped Oscillion maintain a 99% client satisfaction rate across thousands of projects.',
      expertise: ['Operations Management', 'Process Optimization', 'Quality Assurance'],
      linkedin: 'https://linkedin.com',
      email: 'michael.anderson@oscillion.com'
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Financial Officer',
      image: 'https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Priya brings deep expertise in financial strategy and corporate governance. She ensures fiscal responsibility while supporting aggressive growth initiatives and strategic investments in technology and talent.',
      expertise: ['Financial Strategy', 'Corporate Finance', 'Risk Management'],
      linkedin: 'https://linkedin.com',
      email: 'priya.sharma@oscillion.com'
    },
    {
      name: 'David Martinez',
      role: 'VP of Engineering',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'David leads our engineering teams across multiple technology stacks. His passion for clean code and scalable architecture has been instrumental in delivering high-quality solutions to enterprise clients.',
      expertise: ['Software Engineering', 'Team Leadership', 'Architecture Design'],
      linkedin: 'https://linkedin.com',
      email: 'david.martinez@oscillion.com'
    },
    {
      name: 'Emily Thompson',
      role: 'VP of Client Services',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Emily champions client success through exceptional service delivery and relationship management. Her client-first approach has resulted in long-term partnerships with Fortune 500 companies.',
      expertise: ['Client Relations', 'Service Delivery', 'Account Management'],
      linkedin: 'https://linkedin.com',
      email: 'emily.thompson@oscillion.com'
    }
  ];

  const achievements = [
    'Led digital transformation for 500+ enterprises',
    'Expanded operations to 30+ countries',
    'Built a team of 750+ professionals',
    'Achieved 15 consecutive years of profitability',
    'Maintained 99% client retention rate',
    'Recognized as Top IT Services Provider'
  ];

  return (
    <div className="pt-20 bg-white">
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -bottom-48 -right-48 animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Leadership Team</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Meet the visionary leaders driving Oscillion's mission to transform businesses through
              innovative technology solutions. Our leadership team brings decades of combined experience
              in technology, business strategy, and client service.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 transform hover:-translate-y-2 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-black mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Executive Leadership</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our leadership team combines deep industry expertise with a passion for innovation,
            driving strategic vision and operational excellence across all aspects of the business.
          </p>
        </div>

        <div className="space-y-12 mb-20">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-8 items-center bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeInUp ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="lg:w-1/3">
                <div className="relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full aspect-square object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-black text-white p-4 rounded-xl shadow-lg">
                    <Briefcase className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-black mb-2">{leader.name}</h3>
                  <p className="text-lg text-gray-600 font-semibold">{leader.role}</p>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{leader.bio}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">
                    Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${leader.email}`}
                    className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-12 text-white mb-20">
          <h2 className="text-4xl font-bold text-center mb-8">Leadership Achievements</h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Under the guidance of our leadership team, Oscillion has achieved remarkable milestones
            and continues to set new standards in the technology services industry.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-white bg-opacity-10 rounded-xl hover:bg-opacity-20 transition-all duration-300"
              >
                <Target className="w-6 h-6 flex-shrink-0 mr-3 mt-1" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Our Leadership Philosophy</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            We believe in servant leadership, where leaders empower teams, foster innovation, and
            create an environment where everyone can thrive. Our leadership team is committed to
            transparency, accountability, and continuous improvement, setting the tone for our
            entire organization.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl font-bold text-black mb-2">Lead by Example</div>
              <div className="text-sm text-gray-600">Actions speak louder than words</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl font-bold text-black mb-2">Empower Teams</div>
              <div className="text-sm text-gray-600">Enable success at every level</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl font-bold text-black mb-2">Drive Innovation</div>
              <div className="text-sm text-gray-600">Challenge and inspire greatness</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Want to Connect?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our leadership team is always open to connecting with clients, partners, and potential
            team members. Reach out to discuss opportunities or learn more about Oscillion.
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

export default LeadershipPage;
