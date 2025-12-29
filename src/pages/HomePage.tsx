import { Link } from 'react-router-dom';
import {
  Award, Shield, Zap, Code, Users, Globe, TrendingUp, Target,
  CheckCircle, Star, Rocket, Brain, Database, Cloud, Smartphone,
  Lock, DollarSign, Clock, HeartHandshake, Briefcase,
  BarChart, Layers, Settings, ArrowRight, Sparkles, Trophy,
  Map, Building, GitBranch, Coffee, MessageCircle, Package,
  Lightbulb, PieChart, Activity
} from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Testimonials from '../components/Testimonials';
import Blogs from '../components/Blogs';
import ContactCTA from '../components/ContactCTA';
import companyData from '../data/company.json';

const HomePage = () => {
  const [counters, setCounters] = useState({ projects: 0, clients: 0, satisfaction: 0, countries: 0 });
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isCounterVisible) {
          setIsCounterVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isCounterVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        projects: Math.floor(progress * companyData.stats.projectsCompleted),
        clients: Math.floor(progress * 100),
        satisfaction: Math.floor(progress * companyData.stats.clientSatisfaction),
        countries: Math.floor(progress * companyData.stats.countriesServed),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters({
          projects: companyData.stats.projectsCompleted,
          clients: 100,
          satisfaction: companyData.stats.clientSatisfaction,
          countries: companyData.stats.countriesServed,
        });
      }
    }, stepDuration);
  };

  const technologies = [
    { name: 'React', icon: Code },
    { name: 'Node.js', icon: Database },
    { name: 'Python', icon: Code },
    { name: 'AWS', icon: Cloud },
    { name: 'Docker', icon: Package },
    { name: 'MongoDB', icon: Database },
    { name: 'TypeScript', icon: Code },
    { name: 'Flutter', icon: Smartphone },
  ];

  const whyChooseUs = [
    { icon: Award, title: 'Award-Winning Team', description: 'Industry-recognized developers and designers delivering excellence' },
    { icon: Clock, title: 'On-Time Delivery', description: '95% of projects delivered on or ahead of schedule' },
    { icon: Shield, title: 'Enterprise Security', description: 'Bank-grade security protocols and compliance standards' },
    { icon: DollarSign, title: 'Cost Effective', description: 'Transparent pricing with up to 40% cost savings' },
    { icon: HeartHandshake, title: 'Dedicated Support', description: '24/7 technical support and maintenance' },
    { icon: Target, title: 'Result Driven', description: 'Focus on measurable ROI and business outcomes' },
  ];

  const process = [
    { step: '01', title: 'Discovery', description: 'Understanding your vision and business goals', icon: Lightbulb },
    { step: '02', title: 'Planning', description: 'Strategic roadmap and technical architecture', icon: GitBranch },
    { step: '03', title: 'Design', description: 'User-centric UI/UX and prototyping', icon: Layers },
    { step: '04', title: 'Development', description: 'Agile development with continuous integration', icon: Code },
    { step: '05', title: 'Testing', description: 'Comprehensive QA and performance optimization', icon: CheckCircle },
    { step: '06', title: 'Deployment', description: 'Seamless launch and post-launch support', icon: Rocket },
  ];

  const achievements = [
    { icon: Trophy, value: '15+', label: 'Industry Awards' },
    { icon: Star, value: '4.9/5', label: 'Client Rating' },
    { icon: TrendingUp, value: '200%', label: 'Growth Rate' },
    { icon: Users, value: '25+', label: 'Expert Team' },
  ];

  const pricingModels = [
    { icon: DollarSign, title: 'Fixed Price', description: 'Clearly defined scope and budget for your project', best: 'Small to medium projects' },
    { icon: Clock, title: 'Time & Material', description: 'Flexible approach for evolving requirements', best: 'Long-term projects' },
    { icon: Users, title: 'Dedicated Team', description: 'Your own remote team of experts', best: 'Enterprise solutions' },
    { icon: Briefcase, title: 'Retainer Model', description: 'Ongoing support and maintenance', best: 'Continuous development' },
  ];

  const globalPresence = [
    { region: 'North America', countries: ['USA', 'Canada'], icon: Globe },
    { region: 'Europe', countries: ['UK', 'Germany', 'France'], icon: Globe },
    { region: 'Asia Pacific', countries: ['India', 'Singapore', 'Australia'], icon: Globe },
    { region: 'Middle East', countries: ['UAE', 'Saudi Arabia'], icon: Globe },
  ];

  const faqs = [
    {
      question: 'What industries do you serve?',
      answer: 'We serve diverse industries including Healthcare, Finance, E-commerce, Education, Real Estate, and more. Our expertise spans across all major business sectors.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. A simple website takes 4-6 weeks, while enterprise applications can take 3-6 months. We provide detailed timelines during planning.'
    },
    {
      question: 'Do you provide post-launch support?',
      answer: 'Yes! We offer comprehensive post-launch support, maintenance, and updates. Our 24/7 support team ensures your application runs smoothly.'
    },
    {
      question: 'What is your development process?',
      answer: 'We follow Agile methodology with sprints, regular updates, and continuous client collaboration. You stay involved throughout the development cycle.'
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white">
      <Hero />

      {/* Stats Counter Section */}
      <section ref={counterRef} className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 -mt-1">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2">{counters.projects}+</div>
              <div className="text-gray-400 text-lg">Projects Completed</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2">{counters.clients}+</div>
              <div className="text-gray-400 text-lg">Happy Clients</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2">{counters.satisfaction}%</div>
              <div className="text-gray-400 text-lg">Satisfaction Rate</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2">{counters.countries}+</div>
              <div className="text-gray-400 text-lg">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="section-title">Why Choose Oscillion</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Leading software development company delivering innovative solutions with proven expertise and commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services />

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="section-title">Technologies We Master</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Cutting-edge technology stack for scalable, secure, and high-performance software solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 animate-fadeInUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <tech.icon className="w-12 h-12 text-gray-900 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-center font-semibold text-gray-900">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Industries />

      {/* Our Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="section-title">Our Development Process</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Streamlined Agile methodology ensuring transparency, quality, and timely delivery of your software projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative group animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-start mb-6">
                    <div className="text-6xl font-bold text-gray-200 mr-4">{item.step}</div>
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-full -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="section-title text-white">Awards & Recognition</h2>
            <p className="section-subtitle text-gray-300 max-w-3xl mx-auto">
              Industry recognition and client appreciation for delivering exceptional software development services
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="w-16 h-16 text-white mx-auto mb-4 animate-pulse" />
                <div className="text-4xl font-bold text-white mb-2">{item.value}</div>
                <div className="text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Pricing Models Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="section-title">Flexible Pricing Models</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Choose the engagement model that best fits your project requirements and business goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingModels.map((model, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <model.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{model.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{model.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">Best for: <span className="font-semibold text-gray-900">{model.best}</span></p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/pricing" className="btn-primary inline-flex items-center group">
              View Detailed Pricing
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="section-title">Global Presence</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Serving clients worldwide with local expertise and global standards in software development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {globalPresence.map((region, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <region.icon className="w-12 h-12 text-gray-900 mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-4 text-center text-gray-900">{region.region}</h3>
                <ul className="space-y-2">
                  {region.countries.map((country, idx) => (
                    <li key={idx} className="text-gray-600 text-center flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="section-title">Expert Team</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Certified professionals with deep expertise in modern technologies and industry best practices
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Senior Developers', icon: Code, count: '15+', exp: '8+ years avg' },
              { title: 'UI/UX Designers', icon: Layers, count: '5+', exp: '6+ years avg' },
              { title: 'Project Managers', icon: Briefcase, count: '3+', exp: '10+ years avg' },
              { title: 'QA Engineers', icon: CheckCircle, count: '4+', exp: '5+ years avg' },
            ].map((team, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <team.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{team.title}</h3>
                <p className="text-3xl font-bold text-gray-900 mb-2">{team.count}</p>
                <p className="text-gray-600">{team.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & R&D Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <h2 className="section-title text-left">Innovation & R&D</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We invest heavily in research and development to stay ahead of technology trends and deliver cutting-edge solutions.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'AI & Machine Learning', desc: 'Advanced AI models and intelligent automation' },
                  { title: 'Blockchain Technology', desc: 'Decentralized applications and smart contracts' },
                  { title: 'IoT Solutions', desc: 'Connected devices and real-time data processing' },
                  { title: 'AR/VR Development', desc: 'Immersive experiences and virtual reality' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-fadeInUp animation-delay-200">
              {[
                { icon: Brain, label: 'AI Projects', value: '20+' },
                { icon: Zap, label: 'Innovation Labs', value: '3' },
                { icon: GitBranch, label: 'Open Source', value: '15+' },
                { icon: Activity, label: 'R&D Investment', value: '15%' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center"
                >
                  <stat.icon className="w-12 h-12 text-gray-900 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="section-title text-white">Security & Compliance</h2>
            <p className="section-subtitle text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade security protocols and industry compliance standards ensuring your data protection
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'ISO 27001', desc: 'Information security management' },
              { icon: Lock, title: 'SOC 2 Type II', desc: 'Security and availability' },
              { icon: CheckCircle, title: 'GDPR Compliant', desc: 'Data privacy standards' },
              { icon: Award, title: 'HIPAA Ready', desc: 'Healthcare data security' },
            ].map((cert, index) => (
              <div
                key={index}
                className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <cert.icon className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-400">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Blogs />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Common questions about our software development services, processes, and engagement models
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-lg font-bold text-gray-900">{faq.question}</span>
                  <ArrowRight
                    className={`w-5 h-5 text-gray-900 transform transition-transform duration-300 ${
                      openFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-8 transition-all duration-300 ${
                    openFaq === index ? 'py-6 max-h-96' : 'max-h-0 overflow-hidden'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/faq" className="btn-primary inline-flex items-center group">
              View All FAQs
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners & Integrations Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="section-title">Partners & Integrations</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Certified partnerships with leading technology providers for seamless integrations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'AWS Partner', 'Microsoft', 'Google Cloud', 'Stripe', 'Shopify', 'Salesforce'
            ].map((partner, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Building className="w-10 h-10 text-gray-900 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="font-semibold text-gray-900 text-sm">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="section-title">Client Success Stories</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Real results and transformative impact through our software development expertise
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: '3x', label: 'Revenue Growth', desc: 'E-commerce platform' },
              { metric: '60%', label: 'Cost Reduction', desc: 'Process automation' },
              { metric: '5M+', label: 'Users Reached', desc: 'Mobile app launch' },
            ].map((story, index) => (
              <div
                key={index}
                className="group p-10 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-bold text-gray-900 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {story.metric}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{story.label}</div>
                <div className="text-gray-600">{story.desc}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/case-studies" className="btn-primary inline-flex items-center group">
              View Case Studies
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};

export default HomePage;
