import { Target, Eye, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-fadeInLeft">
            <div className="inline-block mb-4 px-4 py-2 bg-black/5 rounded-full">
              <span className="text-sm font-semibold text-gray-700">About Oscillion</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Who We Are
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Oscillion is a leading IT solutions provider specializing in cutting-edge
              technology services. With over 15 years of experience, we transform businesses
              through innovative digital solutions that drive growth and efficiency.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Our team of expert developers, designers, and strategists work collaboratively
              to deliver world-class web applications, mobile solutions, AI implementations,
              and cybersecurity services tailored to your unique business needs.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">Our Mission</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    To empower businesses with innovative technology solutions that drive
                    digital transformation and sustainable growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">Our Vision</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    To be the most trusted technology partner for businesses worldwide,
                    recognized for excellence and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fadeInRight order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent"></div>
                <Zap className="w-24 h-24 sm:w-32 sm:h-32 text-black opacity-20 animate-float" />
              </div>
            </div>

            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-black text-white p-6 sm:p-8 rounded-xl shadow-2xl max-w-[200px] sm:max-w-xs">
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">99.9%</div>
              <div className="text-xs sm:text-sm">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
