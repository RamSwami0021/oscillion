import { useState } from 'react';
import { Users, Clock, DollarSign, Target, Shield, TrendingUp, CheckCircle, Zap, Award, Briefcase, Calendar, Code } from 'lucide-react';

const EngagementModelsPage = () => {
  const [selectedModel, setSelectedModel] = useState<number | null>(null);

  const models = [
    {
      icon: Clock,
      name: 'Time & Material',
      tagline: 'Flexible and Adaptive',
      description: 'Pay for the actual time and resources spent on your project. Perfect for projects with evolving requirements and dynamic scope.',
      bestFor: [
        'Projects with unclear or evolving requirements',
        'Long-term development with changing priorities',
        'Continuous product development and enhancement',
        'Projects requiring maximum flexibility'
      ],
      features: [
        'Flexible scope management',
        'Pay for actual hours worked',
        'Easy to scale up or down',
        'Transparent billing',
        'Regular progress updates',
        'Change requests welcomed'
      ],
      process: [
        'Define initial project scope and goals',
        'Select team size and skill sets needed',
        'Start development in sprints',
        'Track time and provide detailed reports',
        'Adapt scope based on feedback',
        'Continuous delivery and iteration'
      ],
      pricing: 'Hourly rates based on resource expertise',
      timeline: 'Flexible, ongoing engagement'
    },
    {
      icon: DollarSign,
      name: 'Fixed Price',
      tagline: 'Predictable and Defined',
      description: 'Agree on a fixed cost for a well-defined project scope. Ideal for projects with clear requirements and specific deliverables.',
      bestFor: [
        'Projects with well-defined requirements',
        'Fixed budget constraints',
        'Clear milestones and deliverables',
        'Short to medium-term projects'
      ],
      features: [
        'Fixed total cost',
        'Defined scope and deliverables',
        'Milestone-based payments',
        'Predictable timeline',
        'No billing surprises',
        'Clear project boundaries'
      ],
      process: [
        'Detailed requirement analysis',
        'Create comprehensive project plan',
        'Define milestones and deliverables',
        'Sign fixed-price agreement',
        'Execute according to plan',
        'Deliver on agreed timeline'
      ],
      pricing: 'Fixed cost agreed upfront',
      timeline: 'Defined project duration'
    },
    {
      icon: Users,
      name: 'Dedicated Team',
      tagline: 'Your Extended Team',
      description: 'Get a dedicated team working exclusively on your projects. Full control over resources with long-term commitment and team stability.',
      bestFor: [
        'Long-term product development',
        'Need for dedicated resources',
        'Multiple parallel projects',
        'Building in-house capabilities'
      ],
      features: [
        'Exclusive team allocation',
        'Full management control',
        'Direct team communication',
        'Team stability and continuity',
        'Flexible team composition',
        'Long-term collaboration'
      ],
      process: [
        'Assess resource requirements',
        'Build custom team composition',
        'Onboard team to your processes',
        'Set up communication channels',
        'Begin development work',
        'Scale team as needed'
      ],
      pricing: 'Monthly fixed cost per resource',
      timeline: 'Long-term engagement (3+ months)'
    },
    {
      icon: Target,
      name: 'Hybrid Model',
      tagline: 'Best of Both Worlds',
      description: 'Combine elements of different models to suit your unique needs. Flexible approach that adapts to project phases and requirements.',
      bestFor: [
        'Complex projects with mixed requirements',
        'Phased project delivery',
        'Multiple work streams',
        'Evolving business needs'
      ],
      features: [
        'Customized engagement structure',
        'Mix of fixed and flexible pricing',
        'Adaptive resource allocation',
        'Phase-based approach',
        'Optimized cost management',
        'Maximum flexibility'
      ],
      process: [
        'Analyze project complexity',
        'Design custom engagement model',
        'Define pricing for each phase',
        'Allocate resources strategically',
        'Execute with adaptive approach',
        'Optimize throughout project lifecycle'
      ],
      pricing: 'Custom pricing structure',
      timeline: 'Varies by project phase'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Choose the model that minimizes your project risks and maximizes success potential.'
    },
    {
      icon: TrendingUp,
      title: 'Cost Optimization',
      description: 'Select the most cost-effective approach based on your budget and requirements.'
    },
    {
      icon: Zap,
      title: 'Faster Time to Market',
      description: 'Right engagement model ensures efficient resource utilization and quicker delivery.'
    },
    {
      icon: Clock,
      title: 'Flexible Scaling',
      description: 'Scale your team and resources up or down based on project needs.'
    },
    {
      icon: Code,
      title: 'Quality Assurance',
      description: 'Consistent quality standards across all engagement models.'
    },
    {
      icon: Users,
      title: 'Expert Resources',
      description: 'Access to skilled professionals regardless of engagement model.'
    }
  ];

  const comparisonData = [
    {
      feature: 'Best For',
      timeAndMaterial: 'Evolving requirements',
      fixedPrice: 'Clear specifications',
      dedicatedTeam: 'Long-term projects',
      hybrid: 'Complex projects'
    },
    {
      feature: 'Flexibility',
      timeAndMaterial: 'Very High',
      fixedPrice: 'Low',
      dedicatedTeam: 'High',
      hybrid: 'Very High'
    },
    {
      feature: 'Budget Control',
      timeAndMaterial: 'Medium',
      fixedPrice: 'Very High',
      dedicatedTeam: 'High',
      hybrid: 'Medium to High'
    },
    {
      feature: 'Risk Level',
      timeAndMaterial: 'Medium',
      fixedPrice: 'Low',
      dedicatedTeam: 'Low',
      hybrid: 'Low to Medium'
    },
    {
      feature: 'Project Duration',
      timeAndMaterial: 'Flexible',
      fixedPrice: '2-6 months',
      dedicatedTeam: '6+ months',
      hybrid: 'Varies'
    },
    {
      feature: 'Change Management',
      timeAndMaterial: 'Easy',
      fixedPrice: 'Difficult',
      dedicatedTeam: 'Easy',
      hybrid: 'Moderate'
    }
  ];

  const faqs = [
    {
      question: 'How do I choose the right engagement model?',
      answer: 'The choice depends on several factors: project clarity, budget flexibility, timeline, and your involvement level. For well-defined projects with fixed budgets, Fixed Price works best. For evolving projects, Time & Material offers flexibility. For long-term needs, Dedicated Team provides stability. Our team can help assess your needs and recommend the best fit.'
    },
    {
      question: 'Can I switch engagement models mid-project?',
      answer: 'Yes, we offer flexibility to transition between models if project needs change. For example, you might start with Fixed Price for initial development and switch to Time & Material for ongoing enhancements. We discuss this during project planning.'
    },
    {
      question: 'What payment terms do you offer?',
      answer: 'Payment terms vary by model. Fixed Price typically follows milestone-based payments. Time & Material is billed monthly based on hours worked. Dedicated Team requires monthly advance payments. We offer flexible payment schedules and can accommodate your financial processes.'
    },
    {
      question: 'How do you ensure quality across different models?',
      answer: 'We maintain consistent quality standards regardless of engagement model. All projects follow our quality assurance processes including code reviews, testing, documentation, and continuous integration. You receive the same level of expertise and attention to detail.'
    },
    {
      question: 'What level of communication can I expect?',
      answer: 'Communication frequency depends on the model and your preferences. Time & Material and Dedicated Team typically involve daily standups and weekly reviews. Fixed Price includes regular milestone updates. All models include dedicated project managers and multiple communication channels.'
    },
    {
      question: 'Do you provide post-delivery support?',
      answer: 'Yes, all engagement models include post-delivery support. The duration and level vary by model and can be customized. We offer maintenance contracts, bug fixes, feature enhancements, and technical support based on your needs.'
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
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Engagement Models</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect collaboration model for your project. We offer flexible engagement
              options designed to match your budget, timeline, and business objectives.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Our Engagement Models</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible collaboration options tailored to your project needs, budget, and timeline
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-black transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-4">
                    <model.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">{model.name}</h3>
                  <p className="text-gray-600 font-semibold">{model.tagline}</p>
                </div>
                <button
                  onClick={() => setSelectedModel(selectedModel === index ? null : index)}
                  className="px-4 py-2 bg-gray-100 text-black rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300"
                >
                  {selectedModel === index ? 'Less' : 'More'}
                </button>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{model.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-black mb-3 uppercase tracking-wide">Best For</h4>
                <ul className="space-y-2">
                  {model.bestFor.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-black flex-shrink-0 mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <DollarSign className="w-5 h-5 text-black mb-2" />
                  <div className="text-xs text-gray-600 mb-1">Pricing</div>
                  <div className="text-sm font-semibold text-black">{model.pricing}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Calendar className="w-5 h-5 text-black mb-2" />
                  <div className="text-xs text-gray-600 mb-1">Timeline</div>
                  <div className="text-sm font-semibold text-black">{model.timeline}</div>
                </div>
              </div>

              {selectedModel === index && (
                <div className="mt-6 pt-6 border-t border-gray-200 animate-fadeIn">
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-black mb-3 uppercase tracking-wide">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {model.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start text-sm text-gray-700">
                          <Zap className="w-3 h-3 text-black flex-shrink-0 mr-2 mt-1" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-black mb-3 uppercase tracking-wide">Process</h4>
                    <ol className="space-y-2">
                      {model.process.map((step, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <span className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}

              <a
                href="/contact"
                className="block w-full text-center mt-6 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                Discuss This Model
              </a>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-black text-center mb-8">Why Our Engagement Models Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black text-center mb-12">Model Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold">Time & Material</th>
                  <th className="px-6 py-4 text-left font-semibold">Fixed Price</th>
                  <th className="px-6 py-4 text-left font-semibold">Dedicated Team</th>
                  <th className="px-6 py-4 text-left font-semibold">Hybrid</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-black">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-700">{row.timeAndMaterial}</td>
                    <td className="px-6 py-4 text-gray-700">{row.fixedPrice}</td>
                    <td className="px-6 py-4 text-gray-700">{row.dedicatedTeam}</td>
                    <td className="px-6 py-4 text-gray-700">{row.hybrid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-black text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="px-8 py-6">
                  <h3 className="text-lg font-semibold text-black mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Briefcase className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss which engagement model best fits your project needs.
            Our experts are here to guide you through the decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
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

export default EngagementModelsPage;
