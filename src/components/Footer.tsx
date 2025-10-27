import { useRef, useState, type FC } from 'react';
import {
  Mail,
  Linkedin,
  Plus,
  Instagram,
  Facebook,
  Minus,
  MessageCircle,
} from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  key: string;
  title: string;
  links: FooterLink[];
}

const footerData: FooterSection[] = [
  {
    key: 'contact',
    title: 'CONTACT',
    links: [
      { label: 'Email', href: 'mailto:info@oscillion.com' },
      { label: 'Contact', href: '#contact' },
      { label: 'Map', href: 'https://www.google.com/maps' },
    ],
  },
  {
    key: 'information',
    title: 'INFORMATION',
    links: [
      { label: 'Faq', href: '#faq' },
      { label: 'Support', href: '#shipping' },
      { label: 'Security & Compliance', href: '#refund' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Privacy Policy', href: '#privacy' },
    ],
  },
  {
    key: 'about',
    title: 'ABOUT US',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Services', href: '#about' },
      { label: 'Careers', href: '#collection' },
      { label: 'Associate With Us', href: '#services' },
      { label: 'Customer Access', href: '#services' },
    ],
  },
  {
    key: 'community',
    title: 'COMMUNITY',
    links: [
      { label: 'Instagram', href: '#instagram', icon: Instagram },
      { label: 'LinkedIn', href: '#linkedin', icon: Linkedin },
      { label: 'Facebook', href: '#facebook', icon: Facebook },
      { label: 'WhatsApp', href: 'https://wa.me/91XXXXXXXXXX', icon: MessageCircle },
    ],
  },
  {
    key: 'signin',
    title: 'SIGN IN',
    links: [],
  },
];

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleSection = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Desktop View */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-5 gap-8 mb-12">
          {footerData.map((col) =>
            col.key === 'signin' ? (
              <div key={col.key}>
                <h4 className="text-lg font-semibold text-black mb-4">{col.title}</h4>
                <p className="text-gray-600 text-sm mb-3">JOIN NOW FOR EXCLUSIVE ACCESS</p>
                <div className="flex items-center border-b border-gray-300 pb-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full text-sm text-gray-600 outline-none"
                  />
                  <Mail className="w-4 h-4 text-gray-600" />
                </div>
              </div>
            ) : (
              <div key={col.key}>
                <h4 className="text-lg font-semibold text-black mb-4">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((ln) => (
                    <li key={ln.label}>
                      <a
                        href={ln.href}
                        className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300"
                      >
                        {ln.icon && <ln.icon className="w-4 h-4" />} {ln.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>

      {/* Mobile Accordion */}
      <div className="lg:hidden max-w-3xl mx-auto px-4 sm:px-6 py-6">
        <div className="divide-y divide-gray-200">
          {footerData.map((sec, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={sec.key} className="py-4">
                <button
                  type="button"
                  className="w-full flex items-center justify-between"
                  onClick={() => toggleSection(index)}
                >
                  <span className="text-sm font-semibold text-black tracking-wide">
                    {sec.title}
                  </span>
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </button>

                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: isOpen ? contentRefs.current[index]?.scrollHeight : 0 }}
                >
                  <div className="pt-4">
                    {sec.key === 'signin' ? (
                      <>
                        <p className="text-gray-600 text-sm mb-3">
                          JOIN NOW FOR EXCLUSIVE ACCESS
                        </p>
                        <div className="flex items-center border-b border-gray-300 pb-2">
                          <input
                            type="email"
                            placeholder="Your email"
                            className="w-full text-sm text-gray-600 outline-none"
                          />
                          <Mail className="w-4 h-4 text-gray-600" />
                        </div>
                      </>
                    ) : (
                      <ul className="space-y-3">
                        {sec.links.map((ln) => (
                          <li key={ln.label}>
                            <a
                              href={ln.href}
                              className="flex items-center gap-2 text-gray-600 text-sm hover:text-black transition-colors duration-300"
                            >
                              {ln.icon && <ln.icon className="w-4 h-4" />} {ln.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center text-gray-600 py-6">
        <p>Oscillion Software Services LLP - ©{currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
