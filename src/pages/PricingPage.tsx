import { useState } from 'react';
import { Check, X, Zap, TrendingUp, Crown, Rocket, Shield, Users, Clock, Award } from 'lucide-react';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const stats = [
    { icon: Users, value: '1,400+', label: 'Active Clients', color: 'from-black to-gray-700' },
    { icon: Rocket, value: '4,200+', label: 'Projects Delivered', color: 'from-gray-800 to-black' },
    { icon: Award, value: '99%', label: 'Client Satisfaction', color: 'from-black to-gray-600' },
    { icon: TrendingUp, value: '24/7', label: 'Support Available', color: 'from-gray-700 to-black' },
  ];

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      description: 'Perfect for startups and small projects',
      monthlyPrice: 999,
      annualPrice: 9990,
      features: [
        { name: 'Up to 3 team members', included: true },
        { name: '5 projects per month', included: true },
        { name: 'Basic support (email)', included: true },
        { name: '50 GB storage', included: true },
        { name: 'Basic analytics', included: true },
        { name: 'Mobile app access', included: true },
        { name: 'Priority support', included: false },
        { name: 'Advanced security', included: false },
        { name: 'Custom integrations', included: false },
        { name: 'Dedicated account manager', included: false },
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      icon: TrendingUp,
      description: 'Ideal for growing businesses',
      monthlyPrice: 2499,
      annualPrice: 24990,
      features: [
        { name: 'Up to 10 team members', included: true },
        { name: '20 projects per month', included: true },
        { name: 'Priority support (24/7)', included: true },
        { name: '200 GB storage', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Mobile app access', included: true },
        { name: 'Priority support', included: true },
        { name: 'Advanced security', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Dedicated account manager', included: false },
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      description: 'For large organizations with complex needs',
      monthlyPrice: null,
      annualPrice: null,
      features: [
        { name: 'Unlimited team members', included: true },
        { name: 'Unlimited projects', included: true },
        { name: 'Premium support (24/7)', included: true },
        { name: 'Unlimited storage', included: true },
        { name: 'Custom analytics dashboard', included: true },
        { name: 'Mobile app access', included: true },
        { name: 'Priority support', included: true },
        { name: 'Advanced security', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Dedicated account manager', included: true },
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const addons = [
    {
      name: 'Additional Team Member',
      price: '$99/month',
      description: 'Add more users to your plan'
    },
    {
      name: 'Extra Storage (100 GB)',
      price: '$49/month',
      description: 'Increase your storage capacity'
    },
    {
      name: 'Premium Support',
      price: '$299/month',
      description: '24/7 priority phone and email support'
    },
    {
      name: 'Custom Integrations',
      price: '$499/month',
      description: 'Connect with your favorite tools'
    }
  ];

  const faqs = [
    {
      question: 'Can I switch plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. Cryptocurrency payments are available for Enterprise customers.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for the Professional plan. No credit card required to start.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We will notify you when you approach your limits. You can upgrade your plan or purchase add-ons to continue without interruption.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you are not satisfied, contact us for a full refund.'
    },
    {
      question: 'Can I get a custom plan?',
      answer: 'Absolutely! Contact our sales team to discuss your specific requirements and get a custom quote.'
    }
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="pt-16 bg-white">
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -bottom-48 -right-48 animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your business. All plans include core features with no hidden fees.
              Scale as you grow with flexible pricing options.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 transform hover:-translate-y-2 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4`}>
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-black mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-black text-white shadow-lg'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                billingCycle === 'annual'
                  ? 'bg-black text-white shadow-lg'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Save 17%</span>
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300 animate-fadeInUp ${
                plan.popular ? 'ring-4 ring-black' : 'border border-gray-200'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-4">
                  <plan.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="mb-6">
                {plan.monthlyPrice ? (
                  <>
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-black">
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : Math.floor(plan.annualPrice / 12)}
                      </span>
                      <span className="text-gray-600 ml-2">/month</span>
                    </div>
                    {billingCycle === 'annual' && (
                      <div className="text-sm text-gray-500 mt-1">
                        Billed annually at ${plan.annualPrice}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-3xl font-bold text-black">Custom Pricing</div>
                )}
              </div>

              <a
                href="/contact"
                className={`block w-full text-center px-6 py-4 rounded-lg font-semibold transition-all duration-300 mb-6 ${
                  plan.popular
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </a>

              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-black flex-shrink-0 mr-3 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 flex-shrink-0 mr-3 mt-0.5" />
                    )}
                    <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-black text-center mb-8">Available Add-ons</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Shield className="w-10 h-10 text-black mb-4" />
                <h3 className="text-lg font-bold text-black mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold text-black mb-2">{addon.price}</div>
                <p className="text-sm text-gray-600">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-black text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-black pr-8">{faq.question}</span>
                  <Clock className={`w-6 h-6 text-black flex-shrink-0 transition-transform ${
                    openFaqIndex === index ? 'transform rotate-180' : ''
                  }`} />
                </button>
                {openFaqIndex === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is here to help you find the perfect plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Sales
            </a>
            <a
              href="/request-quote"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Request Custom Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
