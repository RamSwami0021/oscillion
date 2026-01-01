import { useState, FormEvent } from 'react';
import { Send, CheckCircle, Users, Zap, Shield, Code, Globe } from 'lucide-react';

const RequestQuotePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">Request a Quote</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get a detailed quote for web development, mobile apps, cloud solutions, AI development, or IT consulting.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">Tell Us About Your Project</h2>
            <p className="text-gray-600 mb-8">
              Share your project details and our experts will get back to you within 24–48 hours.
            </p>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Thank you! We’ll contact you shortly.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black"
                    placeholder="Oscillion"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black"
                    placeholder="oscillionsoftware@gmail.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black"
                    placeholder="+91 9119161210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black"
                    placeholder="Oscillion Software Services LLP"
                  />
                </div>
              </div>

              {/* Service Text Input */}
              <div>
                <label className="block text-sm font-medium mb-2">Service Required *</label>
                <input
                  type="text"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black"
                  placeholder="Web Development, Mobile App, AI, Cloud, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Details *</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black resize-none"
                  placeholder="Describe your project requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center"
              >
                {isSubmitting ? 'Submitting...' : (
                  <>
                    <Send className="w-5 h-5 mr-2" /> Submit Request
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Why Choose Oscillion?</h3>
            <div className="grid gap-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start p-4 bg-gray-50 rounded-xl">
                  <b.icon className="w-6 h-6 mr-4" />
                  <div>
                    <div className="font-semibold">{b.title}</div>
                    <div className="text-sm text-gray-600">{b.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuotePage;
