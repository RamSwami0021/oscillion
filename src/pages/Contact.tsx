import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Globe, Linkedin, Facebook, Instagram } from 'lucide-react';

const ContactPage = () => {
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      city: 'New York',
      country: 'USA',
      address: '350 Fifth Avenue, New York, NY 10118',
      phone: '+1 (212) 555-0123',
      email: 'newyork@oscillion.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST'
    },
    {
      city: 'London',
      country: 'UK',
      address: '1 Canada Square, Canary Wharf, London E14 5AB',
      phone: '+44 20 7946 0958',
      email: 'london@oscillion.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '1 Raffles Place, Singapore 048616',
      phone: '+65 6789 0123',
      email: 'singapore@oscillion.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM SGT'
    },
    {
      city: 'Dubai',
      country: 'UAE',
      address: 'Dubai Internet City, Dubai, UAE',
      phone: '+971 4 123 4567',
      email: 'dubai@oscillion.com',
      hours: 'Sun-Thu: 9:00 AM - 6:00 PM GST'
    }
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'Cloud Services',
    'AI & Machine Learning',
    'Cybersecurity',
    'Digital Marketing',
    'UI/UX Design',
    'DevOps',
    'Other'
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
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Let's discuss how we can help transform your
              business with innovative technology solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fadeInLeft">
            <h2 className="text-3xl font-bold text-black mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 animate-fadeIn">
                Thank you for your message! We'll be in touch shortly.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 animate-fadeIn">
                Something went wrong. Please try again.
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
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interested In *
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="animate-fadeInRight space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Other Ways to Reach Us</h3>

              <div className="space-y-4">
                <a
                  href="mailto:contact@oscillion.com"
                  className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Mail className="w-6 h-6 text-black mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-black mb-1">Email Us</div>
                    <div className="text-gray-600">contact@oscillion.com</div>
                    <div className="text-sm text-gray-500 mt-1">We typically respond within 24 hours</div>
                  </div>
                </a>

                <a
                  href="tel:+12125550123"
                  className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Phone className="w-6 h-6 text-black mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-black mb-1">Call Us</div>
                    <div className="text-gray-600">+1 (212) 555-0123</div>
                    <div className="text-sm text-gray-500 mt-1">Mon-Fri: 9:00 AM - 6:00 PM EST</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/12125550123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <MessageSquare className="w-6 h-6 text-black mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-black mb-1">WhatsApp</div>
                    <div className="text-gray-600">Chat with us instantly</div>
                    <div className="text-sm text-gray-500 mt-1">Available 24/7</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-black text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://linkedin.com/company/oscillion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/oscillion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/oscillion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://oscillion.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-300 text-sm">
                Stay connected with us for the latest updates, industry insights, and technology trends.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black text-center mb-12">Our Global Offices</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-black text-lg">{office.city}</div>
                    <div className="text-sm text-gray-500">{office.country}</div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-gray-400 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{office.address}</span>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-black">
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-black">
                      {office.email}
                    </a>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-4 h-4 text-gray-400 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's turn your vision into reality. Our team is ready to discuss your
            requirements and provide a tailored solution.
          </p>
          <a
            href="/request-quote"
            className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
