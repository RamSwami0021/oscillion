import { ArrowRight, Award, Zap, Shield, Star, TrendingUp, Users } from 'lucide-react';

interface HeroProps {
  onViewService?: () => void;
}

const Hero = ({ onViewService }: HeroProps = {}) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50 -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50 -bottom-48 -right-48 animate-float-delayed"></div>

        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-black/5 rounded-lg backdrop-blur-sm transform rotate-12"></div>
        </div>
        <div className="absolute bottom-32 right-20 animate-float-delayed">
          <div className="w-20 h-20 bg-black/5 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 bg-black/5 rounded-lg backdrop-blur-sm transform -rotate-12"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full mb-6 animate-fadeInUp border border-black/10">
          <Star className="w-4 h-4 text-black fill-black" />
          <span className="text-sm font-medium text-black">Trusted by 200+ Companies Worldwide</span>
          <Star className="w-4 h-4 text-black fill-black" />
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 animate-fadeInUp animation-delay-200">
          Empowering Digital Innovation
          <br />
          <span className="relative inline-block mt-2">
            <span className="text-gray-700">with Oscillion</span>
            <svg className="absolute -bottom-2 left-0 w-full animate-drawLine" height="8" viewBox="0 0 300 8" fill="none">
              <path d="M2 6C50 2 250 2 298 6" stroke="black" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-400">
          We build scalable web, app, and AI solutions for modern businesses.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 animate-fadeInUp animation-delay-600">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-black shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
            <Award className="w-4 h-4" />
            ISO Certified
          </span>
          <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-black shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
            <Zap className="w-4 h-4" />
            24/7 Support
          </span>
          <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-black shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
            <Shield className="w-4 h-4" />
            Secure & Reliable
          </span>
          <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-black shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
            <TrendingUp className="w-4 h-4" />
            98% Success Rate
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fadeInUp animation-delay-800">
          <a
            href="#quote"
            className="group inline-flex items-center px-8 py-4 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            Get a Quote
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <a
            href="#services"
            className="inline-flex items-center px-8 py-4 bg-white text-black border-2 border-black rounded-md hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            Explore Services
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center group animate-fadeInUp animation-delay-1000">
            <div className="relative inline-block mb-3">
              <div className="absolute inset-0 bg-black/5 rounded-full blur-xl group-hover:bg-black/10 transition-all duration-300"></div>
              <div className="relative text-4xl font-bold text-black mb-2 transform group-hover:scale-110 transition-transform duration-300">500+</div>
            </div>
            <div className="text-gray-600 font-medium">Projects Delivered</div>
            <div className="w-12 h-1 bg-black/10 mx-auto mt-2 rounded-full group-hover:w-full group-hover:bg-black transition-all duration-300"></div>
          </div>
          <div className="text-center group animate-fadeInUp animation-delay-1200">
            <div className="relative inline-block mb-3">
              <div className="absolute inset-0 bg-black/5 rounded-full blur-xl group-hover:bg-black/10 transition-all duration-300"></div>
              <div className="relative text-4xl font-bold text-black mb-2 transform group-hover:scale-110 transition-transform duration-300">200+</div>
            </div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
            <div className="w-12 h-1 bg-black/10 mx-auto mt-2 rounded-full group-hover:w-full group-hover:bg-black transition-all duration-300"></div>
          </div>
          <div className="text-center group animate-fadeInUp animation-delay-1400">
            <div className="relative inline-block mb-3">
              <div className="absolute inset-0 bg-black/5 rounded-full blur-xl group-hover:bg-black/10 transition-all duration-300"></div>
              <div className="relative text-4xl font-bold text-black mb-2 transform group-hover:scale-110 transition-transform duration-300">50+</div>
            </div>
            <div className="text-gray-600 font-medium">Team Members</div>
            <div className="w-12 h-1 bg-black/10 mx-auto mt-2 rounded-full group-hover:w-full group-hover:bg-black transition-all duration-300"></div>
          </div>
          <div className="text-center group animate-fadeInUp animation-delay-1600">
            <div className="relative inline-block mb-3">
              <div className="absolute inset-0 bg-black/5 rounded-full blur-xl group-hover:bg-black/10 transition-all duration-300"></div>
              <div className="relative text-4xl font-bold text-black mb-2 transform group-hover:scale-110 transition-transform duration-300">15+</div>
            </div>
            <div className="text-gray-600 font-medium">Years Experience</div>
            <div className="w-12 h-1 bg-black/10 mx-auto mt-2 rounded-full group-hover:w-full group-hover:bg-black transition-all duration-300"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes drawLine {
          from {
            stroke-dasharray: 300;
            stroke-dashoffset: 300;
          }
          to {
            stroke-dasharray: 300;
            stroke-dashoffset: 0;
          }
        }

        .animate-drawLine {
          animation: drawLine 1.5s ease-out 1s forwards;
        }

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }

        .animation-delay-1200 {
          animation-delay: 1200ms;
        }

        .animation-delay-1400 {
          animation-delay: 1400ms;
        }

        .animation-delay-1600 {
          animation-delay: 1600ms;
        }
      `}</style>
    </section>
  );
};

export default Hero;
