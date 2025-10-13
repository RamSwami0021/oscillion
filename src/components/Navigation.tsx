import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ShoppingBag, Heart, GraduationCap, Building2, Shield, Truck, Sparkles, Plane, Sprout, Film, DollarSign, Trophy, UtensilsCrossed, PawPrint, CookingPot } from 'lucide-react';

interface SubItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface Category {
  title: string;
  items: SubItem[];
}

interface NavItem {
  label: string;
  href?: string;
  categories?: Category[];
}

interface NavigationProps {
  onNavigate?: () => void;
}

const Navigation = ({ onNavigate }: NavigationProps = {}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navItems: NavItem[] = [
    {
      label: 'Company',
      categories: [
        {
          title: 'About',
          items: [
            { label: 'About Us', href: '#about' },
            { label: 'Careers', href: '#careers' },
            { label: 'Testimonials', href: '#testimonials' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Engagement Models', href: '#engagement' },
            { label: 'Confidentiality', href: '#confidentiality' },
            { label: 'FAQs', href: '#faqs' },
          ],
        },
        {
          title: 'Connect',
          items: [
            { label: 'Contact Us', href: '#contact' },
            { label: 'Blogs', href: '#blogs' },
          ],
        },
      ],
    },
    {
      label: 'Services',
      categories: [
        {
          title: 'Cyber Security',
          items: [
            { label: 'Firewalls Solutions', href: '#firewalls' },
            { label: 'Security Proxy Solutions', href: '#security-proxy' },
            { label: 'Endpoint Security Solutions', href: '#endpoint-security' },
            { label: 'Data Loss Prevention (DLP)', href: '#dlp' },
            { label: 'SIEM & Log Management Solutions', href: '#siem' },
            { label: 'Cloud Security Solutions', href: '#cloud-security' },
          ],
        },
        {
          title: 'Generative AI',
          items: [
            { label: 'AI Strategy Consulting', href: '#ai-strategy' },
            { label: 'AI Development', href: '#ai-development' },
            { label: 'AI Integration', href: '#ai-integration' },
            { label: 'AI Training and Support', href: '#ai-training' },
            { label: 'AI Engagement', href: '#ai-engagement' },
            { label: 'AI Ethics and Compliance', href: '#ai-ethics' },
          ],
        },
        {
          title: 'Cloud Services',
          items: [
            { label: 'AWS', href: '#aws' },
            { label: 'Microsoft Azure', href: '#azure' },
            { label: 'Google Cloud Platform (GCP)', href: '#gcp' },
          ],
        },
        {
          title: 'Web Development',
          items: [
            { label: 'PHP', href: '#php' },
            { label: 'Mean Stack', href: '#mean-stack' },
            { label: 'Node JS', href: '#nodejs' },
            { label: 'Angular JS', href: '#angularjs' },
            { label: 'Python Web', href: '#python-web' },
            { label: 'Code Igniter', href: '#codeigniter' },
            { label: 'Laravel', href: '#laravel' },
            { label: 'Cake PHP', href: '#cakephp' },
          ],
        },
        {
          title: 'App Development',
          items: [
            { label: 'iOS', href: '#ios' },
            { label: 'Android', href: '#android' },
            { label: 'Cross Platform', href: '#cross-platform' },
            { label: 'Flutter', href: '#flutter' },
            { label: 'Wearable', href: '#wearable' },
            { label: 'React Native', href: '#react-native' },
          ],
        },
        {
          title: 'CMS & Ecommerce',
          items: [
            { label: 'WordPress', href: '#wordpress' },
            { label: 'Magento', href: '#magento' },
            { label: 'Joomla', href: '#joomla' },
            { label: 'Shopify', href: '#shopify' },
            { label: 'Opencart', href: '#opencart' },
            { label: 'Drupal', href: '#drupal' },
          ],
        },
        {
          title: 'Digital Marketing',
          items: [
            { label: 'SEO', href: '#seo' },
            { label: 'SMO', href: '#smo' },
            { label: 'PPC', href: '#ppc' },
            { label: 'Email Marketing', href: '#email-marketing' },
            { label: 'Whatsapp Marketing', href: '#whatsapp-marketing' },
          ],
        },
        {
          title: 'Designing',
          items: [
            { label: 'Logo Designing', href: '#logo-designing' },
            { label: 'UI/UX', href: '#ui-ux' },
            { label: 'Graphic Designing', href: '#graphic-designing' },
            { label: 'Custom Designing', href: '#custom-designing' },
          ],
        },
      ],
    },
    {
      label: 'Hire Us',
      categories: [
        {
          title: 'Frontend',
          items: [
            { label: 'React Developers', href: '#hire-react' },
            { label: 'Vue.js Developers', href: '#hire-vue' },
            { label: 'Angular Developers', href: '#hire-angular' },
          ],
        },
        {
          title: 'Backend',
          items: [
            { label: 'Node.js Developers', href: '#hire-node' },
            { label: 'Python Developers', href: '#hire-python' },
            { label: 'PHP Developers', href: '#hire-php' },
          ],
        },
        {
          title: 'Mobile',
          items: [
            { label: 'iOS Developers', href: '#hire-ios' },
            { label: 'Android Developers', href: '#hire-android' },
            { label: 'React Native Developers', href: '#hire-react-native' },
          ],
        },
        {
          title: 'Specialized',
          items: [
            { label: 'eCommerce Developers', href: '#hire-ecommerce' },
            { label: 'CMS Developers', href: '#hire-cms' },
            { label: 'DevOps Engineers', href: '#hire-devops' },
          ],
        },
      ],
    },
    {
      label: 'Industries',
      categories: [
        {
          title: 'Retail & Commerce',
          items: [
            { label: 'Ecommerce', href: '#industry-ecommerce', icon: <ShoppingBag className="w-4 h-4" /> },
            { label: 'Fashion', href: '#industry-fashion', icon: <Sparkles className="w-4 h-4" /> },
            { label: 'Food', href: '#industry-food', icon: <UtensilsCrossed className="w-4 h-4" /> },
            { label: 'Kitchenware', href: '#industry-kitchenware', icon: <CookingPot className="w-4 h-4" /> },
          ],
        },
        {
          title: 'Healthcare & Education',
          items: [
            { label: 'Healthcare', href: '#industry-healthcare', icon: <Heart className="w-4 h-4" /> },
            { label: 'Education', href: '#industry-education', icon: <GraduationCap className="w-4 h-4" /> },
            { label: 'Pet', href: '#industry-pet', icon: <PawPrint className="w-4 h-4" /> },
          ],
        },
        {
          title: 'Finance & Security',
          items: [
            { label: 'Finance', href: '#industry-finance', icon: <DollarSign className="w-4 h-4" /> },
            { label: 'Insurance', href: '#industry-insurance', icon: <Shield className="w-4 h-4" /> },
            { label: 'Security', href: '#industry-security', icon: <Shield className="w-4 h-4" /> },
          ],
        },
        {
          title: 'Infrastructure',
          items: [
            { label: 'Real Estate', href: '#industry-realestate', icon: <Building2 className="w-4 h-4" /> },
            { label: 'Logistics', href: '#industry-logistics', icon: <Truck className="w-4 h-4" /> },
            { label: 'Travel', href: '#industry-travel', icon: <Plane className="w-4 h-4" /> },
            { label: 'Agritech', href: '#industry-agritech', icon: <Sprout className="w-4 h-4" /> },
          ],
        },
        {
          title: 'Media & Entertainment',
          items: [
            { label: 'Media', href: '#industry-media', icon: <Film className="w-4 h-4" /> },
            { label: 'Sports', href: '#industry-sports', icon: <Trophy className="w-4 h-4" /> },
          ],
        },
      ],
    },
    {
      label: 'Products',
      categories: [
        {
          title: 'Category Demo1',
          items: [
            { label: 'Demo A', href: '#demo-a' },
            { label: 'Demo B', href: '#demo-b' },
            { label: 'Demo C', href: '#demo-c' },
          ],
        },
        {
          title: 'Category Demo2',
          items: [
            { label: 'Demo D', href: '#demo-d' },
            { label: 'Demo E', href: '#demo-e' },
          ],
        },
      ],
    },
    { label: 'Free Tools', href: '#free-tools' },
    { label: 'Pricing', href: '#pricing-tools' },
  ];

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleDropdownClick = (label: string) => {
    if (openDropdown === label) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(label);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-black tracking-tight">
              Oscillion
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
              >
                {item.categories ? (
                  <>
                    <button
                      onClick={() => handleDropdownClick(item.label)}
                      className="flex items-center space-x-1 text-black hover:text-gray-600 transition-colors duration-300 py-2"
                    >
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.label && (
                      <>
                        <div
                          className="fixed inset-0 bg-black bg-opacity-20 z-40"
                          onClick={() => setOpenDropdown(null)}
                        />
                        <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 bg-white shadow-2xl rounded-lg overflow-hidden animate-dropdown border border-gray-100 z-50 max-h-[calc(100vh-6rem)] overflow-y-auto">

                          <div className={`p-6 grid gap-8 ${
                            item.categories.length <= 2 ? 'grid-cols-2 min-w-[400px]' :
                            item.categories.length === 3 ? 'grid-cols-3 min-w-[600px]' :
                            item.categories.length === 4 ? 'grid-cols-4 min-w-[800px]' :
                            item.categories.length === 5 ? 'grid-cols-5 min-w-[900px]' :
                            item.categories.length === 6 ? 'grid-cols-3 min-w-[700px]' :
                            item.categories.length === 7 ? 'grid-cols-4 min-w-[900px]' :
                            'grid-cols-4 min-w-[1000px]'
                          }`}>
                            {item.categories.map((category) => (
                              <div key={category.title} className="space-y-3">
                                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-2">
                                  {category.title}
                                </h3>
                                <div className="space-y-2">
                                  {category.items.map((subItem) => (
                                    <a
                                      key={subItem.label}
                                      href={subItem.href}
                                      className="flex items-center space-x-2 text-sm text-gray-700 hover:text-black hover:translate-x-1 transition-all duration-200 group/item"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      {subItem.icon && (
                                        <span className="text-gray-400 group-hover/item:text-black transition-colors">
                                          {subItem.icon}
                                        </span>
                                      )}
                                      <span>{subItem.label}</span>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-black font-medium hover:text-gray-600 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#quote"
              className="inline-block px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              Get a Quote
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-black">Menu</h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-black p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100%-5rem)] p-4 space-y-2">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.categories ? (
                <>
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className="flex items-center justify-between w-full px-4 py-3 text-black hover:bg-gray-100 rounded-md transition-all duration-200"
                  >
                    <span className="font-medium">{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openDropdown === item.label ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="ml-4 mt-2 space-y-4 animate-slideDown">
                      {item.categories.map((category) => (
                        <div key={category.title} className="space-y-2">
                          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider px-4">
                            {category.title}
                          </h4>
                          {category.items.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.icon && (
                                <span className="text-gray-400">{subItem.icon}</span>
                              )}
                              <span>{subItem.label}</span>
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  className="block px-4 py-3 text-black hover:bg-gray-100 rounded-md transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
          <div className="pt-4">
            <a
              href="#quote"
              className="block w-full text-center px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
