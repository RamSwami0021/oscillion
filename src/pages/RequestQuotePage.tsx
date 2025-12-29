import { useState, FormEvent } from 'react';
import { Send, CheckCircle, Users, Zap, Shield, Code, Globe } from 'lucide-react';

const RequestQuotePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'Web Development',
    'Mobile App Development',
    'Cloud Services',
    'AI & Machine Learning',
    'Cybersecurity',
    'Digital Marketing',
    'UI/UX Design',
    'DevOps & Infrastructure',
    'E-commerce Solutions',
    'Enterprise Software',
    'Other'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    'Over $250,000'
  ];

  const timelines = [
    'ASAP',
    '1-3 Months',
    '3-6 Months',
    '6-12 Months',
    '12+ Months'
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Quick response within 24-48 hours with detailed proposal'
    },
    {
      icon: Shield,
      title: 'Transparent Pricing',
      description: 'Clear breakdown of costs with no hidden fees'
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Free consultation with our technical experts'
    },
    {
      icon: Code,
      title: 'Custom Solutions',
      description: 'Tailored proposals based on your specific needs'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Supporting clients across 30+ countries worldwide'
    },
    {
      icon: CheckCircle,
      title: 'Flexible Terms',
      description: 'Various payment and engagement models available'
    }
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
      });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6">Request a Quote</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Get a detailed quote for custom software development, web applications, mobile apps, cloud solutions, AI development, or IT consulting services - Free consultation and transparent pricing for your project
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">Tell Us About Your Project</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form with as much detail as possible. The more we know about your project,
              the better we can tailor our proposal to meet your specific needs.
            </p>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Thank you for your request! We'll review your requirements and get back to you within 24-48 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required *
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range *
                  </label>
                  <select
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Timeline *
                  </label>
                  <select
                    required
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Please describe your project requirements, goals, target audience, and any specific features you need..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Request
                  </>
                )}
              </button>
            </form>
          </div>

          <div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">What Happens Next?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">We Review Your Request</h4>
                    <p className="text-gray-600 text-sm">Our team carefully analyzes your requirements and project scope.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Initial Consultation</h4>
                    <p className="text-gray-600 text-sm">We schedule a call to discuss your project in detail and answer questions.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Detailed Proposal</h4>
                    <p className="text-gray-600 text-sm">You receive a comprehensive proposal with pricing, timeline, and approach.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Project Kickoff</h4>
                    <p className="text-gray-600 text-sm">Once approved, we begin development with dedicated resources.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black mb-4">Why Choose Oscillion?</h3>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
                  >
                    <benefit.icon className="w-6 h-6 text-black mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-black mb-1">{benefit.title}</div>
                      <div className="text-sm text-gray-600">{benefit.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Prefer to Talk Directly?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is available to discuss your project over a call or video conference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12125550123"
              className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Call Us: +1 (212) 555-0123
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              View Contact Options
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuotePage;
