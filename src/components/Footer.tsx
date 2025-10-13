import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Engagement Models', href: '#engagement' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'Blogs', href: '#blogs' },
    ],
    industries: [
      { label: 'Healthcare', href: '#industry-healthcare' },
      { label: 'Education', href: '#industry-education' },
      { label: 'Finance', href: '#industry-finance' },
      { label: 'Real Estate', href: '#industry-realestate' },
      { label: 'Logistics', href: '#industry-logistics' },
      { label: 'Ecommerce', href: '#industry-ecommerce' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Confidentiality', href: '#confidentiality' },
      { label: 'Cookie Policy', href: '#cookies' },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">

            <h3 className="text-2xl font-bold text-black mb-4">Oscillion</h3>
            <p className="text-gray-600 mb-6">
              Empowering businesses with innovative technology solutions.
            </p>
            <div className="space-y-3 mb-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-600 text-sm">
                    123 Tech Boulevard, Silicon Valley,
                    <br />
                    CA 94025, United States
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-black flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-600 text-sm hover:text-black transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-black flex-shrink-0" />
                <a href="mailto:info@oscillion.com" className="text-gray-600 text-sm hover:text-black transition-colors duration-300">
                  info@oscillion.com
                </a>
              </div>
            </div>
            <div className="flex space-x-4">
              <a
                href="#linkedin"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#twitter"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#facebook"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#instagram"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Legal</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-600">
            <p>&copy; {currentYear} Oscillion Software Services. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
