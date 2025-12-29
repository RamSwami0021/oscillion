import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, Award, TrendingUp, Users } from 'lucide-react';

const TestimonialPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechVision Inc',
      industry: 'Technology',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Oscillion transformed our digital presence with their innovative solutions. Their team\'s expertise in web development and AI integration exceeded our expectations. The level of professionalism and dedication they brought to our project was outstanding.',
      rating: 5,
      project: 'Enterprise Web Platform'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'Global Logistics Solutions',
      industry: 'Logistics',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Working with Oscillion was a game-changer for our business. They delivered a robust cloud infrastructure that scaled perfectly with our growth. Their proactive approach to problem-solving and commitment to deadlines is commendable.',
      rating: 5,
      project: 'Cloud Infrastructure'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'StyleHub Fashion',
      industry: 'E-commerce',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'The eCommerce platform Oscillion built for us increased our sales by 150% in the first quarter. Their attention to detail and understanding of our industry made all the difference. Highly recommended for any business looking to scale.',
      rating: 5,
      project: 'E-commerce Platform'
    },
    {
      name: 'David Thompson',
      role: 'Director of IT',
      company: 'HealthCare Plus',
      industry: 'Healthcare',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Security was our top priority, and Oscillion delivered beyond expectations. Their cybersecurity solutions give us peace of mind knowing our patient data is protected. The team was incredibly responsive and knowledgeable.',
      rating: 5,
      project: 'Healthcare Security'
    },
    {
      name: 'Lisa Wang',
      role: 'VP of Marketing',
      company: 'EduTech Academy',
      industry: 'Education',
      image: 'https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'The mobile app Oscillion developed has revolutionized how our students learn. Intuitive design, seamless functionality, and outstanding performance across all devices. They truly understood our vision and brought it to life.',
      rating: 5,
      project: 'Education Mobile App'
    },
    {
      name: 'James Mitchell',
      role: 'CEO',
      company: 'FinanceHub',
      industry: 'Finance',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Oscillion\'s expertise in financial technology is unmatched. They built a secure, scalable platform that handles millions of transactions daily. Their commitment to quality and security is exceptional.',
      rating: 5,
      project: 'Financial Platform'
    }
  ];

  const industries = ['all', 'Technology', 'Logistics', 'E-commerce', 'Healthcare', 'Education', 'Finance'];

  const filteredTestimonials = selectedIndustry === 'all'
    ? testimonials
    : testimonials.filter(t => t.industry === selectedIndustry);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const currentTestimonial = filteredTestimonials[currentIndex];

  return (
    <div className="pt-16 bg-white">
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -bottom-48 -right-48 animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover what our clients say about working with Oscillion. Real feedback from
              real businesses who trusted us with their technology needs.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-6">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => {
                  setSelectedIndustry(industry);
                  setCurrentIndex(0);
                }}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedIndustry === industry
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {industry.charAt(0).toUpperCase() + industry.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {currentTestimonial && (
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 relative animate-fadeIn">
              <Quote className="w-16 h-16 text-gray-200 absolute top-8 left-8" />

              <div className="relative z-10">
                <div className="flex mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-black fill-black" />
                  ))}
                </div>

                <p className="text-xl text-gray-800 mb-8 leading-relaxed">
                  {currentTestimonial.content}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div className="flex items-center">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-gray-100"
                    />
                    <div>
                      <div className="font-bold text-black text-lg">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-gray-600">
                        {currentTestimonial.role}, {currentTestimonial.company}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Project: {currentTestimonial.project}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <div className="text-sm text-gray-500 mb-1">Industry</div>
                    <div className="px-4 py-2 bg-gray-100 rounded-lg font-semibold">
                      {currentTestimonial.industry}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex space-x-2">
                {filteredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-black w-8' : 'bg-gray-300 w-2'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-black fill-black" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 line-clamp-3 leading-relaxed">
                {testimonial.content}
              </p>

              <div className="flex items-center pt-4 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-semibold text-black text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl font-bold text-black mb-3">4200+</div>
              <div className="text-lg text-gray-600">Projects Completed</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-black mb-3">98%</div>
              <div className="text-lg text-gray-600">Projects On Time</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-black mb-3">95%</div>
              <div className="text-lg text-gray-600">Client Retention</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's build something amazing together. Start your project with Oscillion today.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
