import { Shield, Lock, FileCheck, Eye, AlertCircle, CheckCircle, Award, Users, Globe, Server } from 'lucide-react';

const ConfidentialityPage = () => {
  const certifications = [
    {
      icon: Shield,
      title: 'ISO 27001:2013',
      description: 'Information Security Management System certified'
    },
    {
      icon: FileCheck,
      title: 'SOC 2 Type II',
      description: 'Audited security, availability, and confidentiality controls'
    },
    {
      icon: Globe,
      title: 'GDPR Compliant',
      description: 'Full compliance with EU data protection regulations'
    },
    {
      icon: Award,
      title: 'ISO 9001:2015',
      description: 'Quality management systems certification'
    },
    {
      icon: Server,
      title: 'HIPAA Compliant',
      description: 'Healthcare data protection standards'
    },
    {
      icon: Lock,
      title: 'ISO 13485:2016',
      description: 'Medical devices quality management'
    }
  ];

  const securityMeasures = [
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for data in transit and at rest using industry-standard AES-256 encryption protocols.'
    },
    {
      icon: Shield,
      title: 'Access Control',
      description: 'Role-based access control (RBAC) with multi-factor authentication and principle of least privilege.'
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 security monitoring, intrusion detection, and automated threat response systems.'
    },
    {
      icon: FileCheck,
      title: 'Regular Audits',
      description: 'Quarterly security audits, penetration testing, and vulnerability assessments by third-party experts.'
    },
    {
      icon: Server,
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade infrastructure hosted in certified data centers with redundant security layers.'
    },
    {
      icon: Users,
      title: 'Staff Training',
      description: 'Mandatory security training and awareness programs for all team members handling client data.'
    }
  ];

  const complianceAreas = [
    {
      title: 'Data Protection',
      points: [
        'Strict data handling policies aligned with international standards',
        'Regular data protection impact assessments',
        'Data minimization and retention policies',
        'Secure data disposal procedures'
      ]
    },
    {
      title: 'Privacy By Design',
      points: [
        'Privacy considerations integrated into every development phase',
        'Default privacy settings in all applications',
        'Transparent data collection and usage practices',
        'User consent management systems'
      ]
    },
    {
      title: 'Incident Response',
      points: [
        'Comprehensive incident response plan',
        'Dedicated security team available 24/7',
        'Clear communication protocols for data breaches',
        'Regular incident response drills and updates'
      ]
    },
    {
      title: 'Third-Party Management',
      points: [
        'Strict vendor security assessment procedures',
        'Regular third-party audits and reviews',
        'Data processing agreements with all vendors',
        'Continuous vendor risk monitoring'
      ]
    }
  ];

  const ndaProcess = [
    {
      step: '1',
      title: 'Initial Contact',
      description: 'Discuss your project requirements and confidentiality needs'
    },
    {
      step: '2',
      title: 'NDA Signing',
      description: 'Mutual NDA signed before sharing sensitive information'
    },
    {
      step: '3',
      title: 'Secure Exchange',
      description: 'Information shared through encrypted channels'
    },
    {
      step: '4',
      title: 'Ongoing Protection',
      description: 'Continuous compliance monitoring throughout the engagement'
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
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Confidentiality & Compliance</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your data security and privacy are our top priorities. We maintain the highest standards
              of confidentiality and compliance across all our services and engagements.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Our Commitment to Security</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand that trust is earned through consistent action. Our comprehensive security
            framework protects your intellectual property, confidential data, and privacy at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {securityMeasures.map((measure, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6">
                <measure.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{measure.title}</h3>
              <p className="text-gray-600 leading-relaxed">{measure.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-black text-center mb-8">Certifications & Compliance</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We maintain industry-leading certifications and comply with international standards
            to ensure your data is handled with the utmost care and security.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black text-center mb-12">Compliance Areas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-black transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-black mb-6">{area.title}</h3>
                <ul className="space-y-3">
                  {area.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mr-3 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black text-white rounded-2xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">NDA & Confidentiality Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ndaProcess.map((item, index) => (
              <div
                key={index}
                className="text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-white bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12">
          <div className="text-center mb-8">
            <AlertCircle className="w-16 h-16 mx-auto mb-6 text-black" />
            <h2 className="text-3xl font-bold text-black mb-4">Your Rights & Our Responsibilities</h2>
          </div>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Your Data Rights</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mr-3 mt-0.5" />
                  <span>Right to access your personal and project data at any time</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mr-3 mt-0.5" />
                  <span>Right to request data correction, deletion, or portability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mr-3 mt-0.5" />
                  <span>Right to withdraw consent for data processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mr-3 mt-0.5" />
                  <span>Right to object to automated decision-making</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black mb-3">Our Responsibilities</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mr-3 mt-0.5" />
                  <span>Maintain strict confidentiality of all client information</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mr-3 mt-0.5" />
                  <span>Implement appropriate technical and organizational measures</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mr-3 mt-0.5" />
                  <span>Notify you of any data breaches within 72 hours</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mr-3 mt-0.5" />
                  <span>Conduct regular security audits and updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Questions About Security?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our security team is here to address any concerns and provide detailed information
            about our security practices and compliance standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Security Team
            </a>
            <a
              href="/resources/faqs"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              View FAQs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfidentialityPage;
