import { Target, TrendingUp, Award, Users, CheckCircle, ArrowRight } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: 'E-Commerce Platform Transformation',
      client: 'Leading Retail Enterprise',
      industry: 'Retail',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenges: [
        'Aging monolithic architecture',
        'Poor scalability during peak seasons',
        'Limited mobile experience',
        'High maintenance costs'
      ],
      solutions: [
        'Microservices architecture migration',
        'Cloud infrastructure deployment',
        'Responsive mobile-first design',
        'Real-time analytics integration'
      ],
      results: {
        text: '300% increase in transaction capacity, 45% reduction in page load time, and 60% improvement in customer satisfaction scores within 6 months.',
        metrics: [
          { label: 'Transaction Capacity', value: '+300%' },
          { label: 'Page Load Time', value: '-45%' },
          { label: 'Customer Satisfaction', value: '+60%' }
        ]
      },
      color: 'blue'
    },
    {
      title: 'Healthcare Data Management System',
      client: 'Regional Hospital Network',
      industry: 'Healthcare',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenges: [
        'Fragmented data systems',
        'HIPAA compliance requirements',
        'Manual workflow processes',
        'Limited interoperability'
      ],
      solutions: [
        'Unified EHR platform development',
        'End-to-end encryption implementation',
        'Automated workflow system',
        'HL7 FHIR integration standards'
      ],
      results: {
        text: '100% HIPAA compliance achieved, 40% reduction in administrative overhead, and seamless data sharing across 8 facilities.',
        metrics: [
          { label: 'HIPAA Compliance', value: '100%' },
          { label: 'Admin Overhead', value: '-40%' },
          { label: 'Facilities Connected', value: '8' }
        ]
      },
      color: 'green'
    },
    {
      title: 'Financial Services AI Integration',
      client: 'Investment Management Firm',
      industry: 'Finance',
      image: 'https://images.pexels.com/photos/5849566/pexels-photo-5849566.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenges: [
        'Rising fraud incidents',
        'Manual risk assessment',
        'Limited predictive insights',
        'Complex compliance requirements'
      ],
      solutions: [
        'Machine learning fraud detection model',
        'Predictive analytics engine',
        'Real-time alert system',
        'Automated compliance reporting'
      ],
      results: {
        text: '99.2% fraud detection accuracy, 35% reduction in false positives, and enhanced regulatory reporting efficiency.',
        metrics: [
          { label: 'Detection Accuracy', value: '99.2%' },
          { label: 'False Positives', value: '-35%' },
          { label: 'Compliance', value: 'Automated' }
        ]
      },
      color: 'purple'
    },
    {
      title: 'Manufacturing IoT Solution',
      client: 'Industrial Manufacturing Company',
      industry: 'Manufacturing',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenges: [
        'Unplanned equipment downtime',
        'Limited production visibility',
        'Manual monitoring processes',
        'High operational costs'
      ],
      solutions: [
        'IoT sensor network deployment',
        'Predictive maintenance system',
        'Real-time production dashboard',
        'Machine learning optimization'
      ],
      results: {
        text: '50% reduction in downtime, 25% increase in production efficiency, and 30% lower maintenance costs annually.',
        metrics: [
          { label: 'Downtime', value: '-50%' },
          { label: 'Efficiency', value: '+25%' },
          { label: 'Costs', value: '-30%' }
        ]
      },
      color: 'orange'
    }
  ];

  const stats = [
    { icon: Target, value: '4200+', label: 'Projects Delivered' },
    { icon: Users, value: '1400+', label: 'Happy Clients' },
    { icon: TrendingUp, value: '99%', label: 'Success Rate' },
    { icon: Award, value: '15+', label: 'Years Experience' }
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
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses achieve their goals through innovative
              software solutions and strategic consulting across various industries.
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

        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br from-${study.color}-50 to-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300`}>
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className={`relative h-96 overflow-hidden ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent opacity-30"></div>
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-black text-white rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  <div className={`p-8 lg:p-12 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <h2 className="text-3xl font-bold text-black mb-3">{study.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{study.client}</p>

                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-black mb-4">Challenge</h3>
                      <ul className="space-y-2">
                        {study.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-black mb-4">Solution</h3>
                      <ul className="space-y-2">
                        {study.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <CheckCircle className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-black text-white p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-4">Results</h3>
                      <p className="mb-6 text-gray-200 leading-relaxed">{study.results.text}</p>
                      <div className="grid grid-cols-3 gap-4">
                        {study.results.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-2xl font-bold mb-1">{metric.value}</div>
                            <div className="text-xs text-gray-300">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-gradient-to-br from-gray-50 to-white p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-black mb-4">Want to Share Your Success Story?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss how we can help transform your business with innovative technology solutions.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's work together to achieve remarkable results for your business. Our team is ready to discuss your unique challenges and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
            <a
              href="/request-quote"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
