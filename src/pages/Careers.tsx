import { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Users, TrendingUp, Heart, Coffee, Zap, Award, Target, Rocket } from 'lucide-react';

const CareerPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      desc: 'Comprehensive health insurance, gym memberships, and wellness programs'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      desc: 'Clear career paths, mentorship programs, and continuous learning opportunities'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      desc: 'Flexible working hours, remote work options, and generous PTO'
    },
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      desc: 'Industry-leading compensation packages with performance bonuses'
    },
    {
      icon: Users,
      title: 'Great Team',
      desc: 'Work with talented professionals in a collaborative environment'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      desc: 'Access to cutting-edge technologies and challenging projects'
    }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$100k - $150k',
      description: 'We are looking for an experienced Full Stack Developer to join our engineering team.'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'New York',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$80k - $120k',
      description: 'Create beautiful and intuitive user experiences for our clients.'
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'San Francisco',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110k - $160k',
      description: 'Build and maintain our cloud infrastructure and deployment pipelines.'
    },
    {
      id: 4,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120k - $170k',
      description: 'Lead product strategy and roadmap for our enterprise solutions.'
    },
    {
      id: 5,
      title: 'Data Scientist',
      department: 'Engineering',
      location: 'London',
      type: 'Full-time',
      experience: '3+ years',
      salary: '£70k - £100k',
      description: 'Analyze data and build ML models to drive business insights.'
    },
    {
      id: 6,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Toronto',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$85k - $125k',
      description: 'Drive marketing strategies and campaigns to grow our brand.'
    }
  ];

  const departments = ['all', 'Engineering', 'Design', 'Product', 'Marketing'];
  const locations = ['all', 'Remote', 'New York', 'San Francisco', 'London', 'Toronto'];

  const filteredJobs = jobs.filter(job => {
    const deptMatch = selectedDepartment === 'all' || job.department === selectedDepartment;
    const locMatch = selectedLocation === 'all' || job.location === selectedLocation;
    return deptMatch && locMatch;
  });

  return (
    <div className="pt-16 bg-white">
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -bottom-48 -right-48 animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Build your career with a global leader in technology. Work on exciting projects,
              collaborate with talented professionals, and make an impact.
            </p>
            <a
              href="#openings"
              className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Why Work at Oscillion?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer more than just a job - we offer a career path with growth, learning, and impact.
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
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-black text-center mb-8">Our Culture</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Zap className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">Innovation First</h4>
                  <p className="text-gray-600">We encourage creative thinking and experimentation. Your ideas matter here.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">Collaborative Environment</h4>
                  <p className="text-gray-600">Work with cross-functional teams across the globe on challenging projects.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">Continuous Learning</h4>
                  <p className="text-gray-600">Access to courses, certifications, conferences, and mentorship programs.</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div id="openings" className="scroll-mt-20">
          <h2 className="text-4xl font-bold text-black text-center mb-12">Open Positions</h2>

          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedDepartment === dept
                      ? 'bg-black text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {dept.charAt(0).toUpperCase() + dept.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setSelectedLocation(loc)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedLocation === loc
                      ? 'bg-black text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {loc.charAt(0).toUpperCase() + loc.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <div
                key={job.id}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-black mb-2">{job.title}</h3>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                  <a
                    href={`mailto:careers@oscillion.com?subject=Application for ${job.title}`}
                    className="inline-block px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 whitespace-nowrap"
                  >
                    Apply Now
                  </a>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {job.department}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {job.type}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {job.experience}
                  </div>
                  <div className="flex items-center font-semibold text-black">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {job.salary}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No positions match your filters. Try adjusting your search.</p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Don't See the Right Role?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:careers@oscillion.com"
            className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Send Your Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
