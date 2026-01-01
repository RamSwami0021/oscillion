import { useState } from 'react';
import { ChevronDown, Search, HelpCircle, MessageCircle, Mail, Phone, Users, Shield, Code, Cloud } from 'lucide-react';

const FaqPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'general', name: 'General', icon: MessageCircle },
    { id: 'services', name: 'Services', icon: Code },
    { id: 'pricing', name: 'Pricing & Billing', icon: Shield },
    { id: 'technical', name: 'Technical', icon: Cloud },
    { id: 'support', name: 'Support', icon: Users },
  ];

  const faqs = [
    {
      category: 'general',
      question: 'What services does Oscillion provide?',
      answer: 'Oscillion offers a comprehensive range of IT services including web development, mobile app development, cloud services, AI & machine learning solutions, cybersecurity, digital marketing, UI/UX design, and enterprise software development. We work with businesses of all sizes across various industries to deliver cutting-edge technology solutions.'
    },
    {
      category: 'general',
      question: 'How long has Oscillion been in business?',
      answer: 'Oscillion Software Services LLP has been providing professional IT services for over 15 years. We have successfully delivered 4,200+ projects for 1,400+ clients across 30+ countries, building a strong reputation for excellence and innovation in the technology industry.'
    },
    {
      category: 'general',
      question: 'What industries do you serve?',
      answer: 'We serve a diverse range of industries including e-commerce, healthcare, education, finance, real estate, logistics, fashion, travel, insurance, agritech, media, sports, food & beverage, and more. Our team has deep expertise in understanding industry-specific challenges and delivering tailored solutions.'
    },
    {
      category: 'services',
      question: 'Do you offer custom software development?',
      answer: 'Yes, custom software development is one of our core services. We work closely with clients to understand their unique business requirements and develop tailored solutions from scratch. Our team uses modern technologies and agile methodologies to build scalable, secure, and efficient software.'
    },
    {
      category: 'services',
      question: 'Can you help with existing project maintenance?',
      answer: 'Absolutely! We offer comprehensive maintenance and support services for existing applications. This includes bug fixes, performance optimization, security updates, feature enhancements, and technical support. We can take over projects built by other teams or continue supporting applications we developed.'
    },
    {
      category: 'services',
      question: 'Do you provide cloud migration services?',
      answer: 'Yes, we specialize in cloud migration services for AWS, Microsoft Azure, and Google Cloud Platform. Our team assesses your current infrastructure, plans the migration strategy, executes the migration with minimal downtime, and provides ongoing cloud management and optimization services.'
    },
    {
      category: 'services',
      question: 'What is your mobile app development process?',
      answer: 'Our mobile app development process includes: 1) Requirements gathering and analysis, 2) UI/UX design and prototyping, 3) Development using native or cross-platform technologies, 4) Quality assurance and testing, 5) App store submission and deployment, 6) Post-launch support and maintenance. We typically deliver MVPs in 8-12 weeks.'
    },
    {
      category: 'pricing',
      question: 'How do you charge for projects?',
      answer: 'We offer flexible pricing models based on project requirements: Fixed Price (for well-defined projects), Time & Material (for evolving requirements), Dedicated Team (for long-term engagements), and Monthly Retainer (for ongoing support). We provide detailed quotes after understanding your specific needs.'
    },
    {
      category: 'pricing',
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible payment terms based on project size and duration. For larger projects, we typically structure payments in milestones (e.g., 30% upfront, 40% mid-project, 30% on completion). For dedicated teams and retainers, we offer monthly or quarterly billing cycles.'
    },
    {
      category: 'pricing',
      question: 'What is included in your pricing?',
      answer: 'Our pricing includes project planning, design, development, testing, deployment, and initial support. Additional services like hosting, third-party licenses, premium APIs, and extended support can be added based on your needs. We provide transparent quotes with no hidden fees.'
    },
    {
      category: 'pricing',
      question: 'Do you provide free consultations?',
      answer: 'Yes, we offer free initial consultations to understand your requirements and provide preliminary recommendations. This typically includes a 30-60 minute discussion where we assess your needs, suggest solutions, and provide an estimated timeline and budget.'
    },
    {
      category: 'technical',
      question: 'What technologies do you work with?',
      answer: 'We work with a wide range of modern technologies including React, Angular, Vue.js, Node.js, Python, PHP, Java, .NET, React Native, Flutter, iOS, Android, AWS, Azure, GCP, MongoDB, PostgreSQL, MySQL, Docker, Kubernetes, and more. We stay updated with the latest industry trends and technologies.'
    },
    {
      category: 'technical',
      question: 'How do you ensure code quality?',
      answer: 'We maintain high code quality through: peer code reviews, automated testing (unit, integration, and end-to-end), continuous integration/continuous deployment (CI/CD), adherence to coding standards and best practices, security scanning, and performance testing. All code is thoroughly reviewed before deployment.'
    },
    {
      category: 'technical',
      question: 'Do you provide technical documentation?',
      answer: 'Yes, we provide comprehensive technical documentation including system architecture diagrams, API documentation, database schemas, deployment guides, user manuals, and code comments. Documentation is continuously updated throughout the project and handed over at completion.'
    },
    {
      category: 'technical',
      question: 'How do you handle security?',
      answer: 'Security is integrated throughout our development process. We follow industry best practices including secure coding standards (OWASP), data encryption, secure authentication and authorization, regular security audits, penetration testing, and compliance with standards like GDPR, HIPAA, and ISO 27001 where applicable.'
    },
    {
      category: 'support',
      question: 'What kind of support do you offer after project completion?',
      answer: 'We offer various post-launch support options including bug fixes, performance monitoring, security updates, feature enhancements, technical support, and maintenance. Support packages range from basic (business hours email support) to premium (24/7 phone and email support with guaranteed response times).'
    },
    {
      category: 'support',
      question: 'What are your support hours?',
      answer: 'Our standard support hours are Monday to Friday, 9 AM to 6 PM in your timezone. For clients with premium support packages, we offer 24/7 support with dedicated escalation channels. Emergency support is available for critical production issues.'
    },
    {
      category: 'support',
      question: 'How quickly do you respond to support requests?',
      answer: 'Response times depend on your support package: Standard support (within 24 hours), Priority support (within 4 hours), Premium support (within 1 hour). Critical production issues receive immediate attention regardless of the package, with typical response times under 2 hours.'
    },
    {
      category: 'general',
      question: 'Where are you located?',
      answer: 'Oscillion has offices in multiple locations worldwide including New York (USA), London (UK), Singapore, and Dubai (UAE). We work with clients globally and have team members across different time zones to provide seamless service and support.'
    },
    {
      category: 'general',
      question: 'How do I get started with a project?',
      answer: 'Getting started is easy: 1) Contact us through our website, email, or phone, 2) Schedule a free consultation to discuss your requirements, 3) Receive a detailed proposal with timeline and pricing, 4) Sign the agreement and begin the project. We typically kick off projects within 1-2 weeks of agreement signing.'
    },
    {
      category: 'services',
      question: 'Do you sign NDAs?',
      answer: 'Yes, we understand the importance of confidentiality and are happy to sign Non-Disclosure Agreements (NDAs) before discussing your project details. We can work with your standard NDA or provide our template. Protecting client information is a top priority for us.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const contactOptions = [
    {
      icon: Phone,
      title: 'Call Us',
      description: '+919119161210',
      action: 'tel:+919119161210'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'oscillionsoftware@gmail.com',
      action: 'mailto:oscillionsoftware@gmail.com'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our team',
      action: '#chat'
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
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Find answers to common questions about our services, pricing, and support.
              Can't find what you're looking for? Contact us directly.
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for answers..."
                  className="w-full pl-14 pr-4 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <category.icon className="w-5 h-5 mr-2" />
              {category.name}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4 mb-20">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-black pr-8">{faq.question}</span>
                    <ChevronDown
                      className={`w-6 h-6 text-black flex-shrink-0 transition-transform ${
                        openFaqIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-8 pb-6 animate-fadeIn">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-600">No questions found matching your search.</p>
              <p className="text-gray-500 mt-2">Try different keywords or browse by category.</p>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-black text-center mb-8">Still Need Help?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our support team is here to assist you. Choose your preferred method of contact and we'll get back to you promptly.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactOptions.map((option, index) => (
              <a
                key={index}
                href={option.action}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have more questions or ready to discuss your project? Our team is here to help.
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

export default FaqPage;
