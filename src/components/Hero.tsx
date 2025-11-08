import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Code, Sparkles, Rocket, Award, Users, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';
import companyData from '../data/company.json';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, value: `${companyData.stats.teamSize}+`, label: 'Expert Team' },
    { icon: Award, value: `${companyData.stats.projectsCompleted}+`, label: 'Projects' },
    { icon: Globe, value: `${companyData.stats.clientSatisfaction}%`, label: 'Satisfaction' },
    { icon: Sparkles, value: `${companyData.stats.countriesServed}+`, label: 'Countries' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-gray-700/30 to-gray-900/30 rounded-full blur-3xl -top-48 -left-48 animate-float opacity-50"></div>
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-gray-700/30 to-gray-900/30 rounded-full blur-3xl -bottom-48 -right-48 animate-float-delayed opacity-50"></div>

        {/* Floating Icons */}
        <div className="absolute top-32 left-10 lg:left-20 animate-float hidden md:block opacity-20">
          <Zap className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
        </div>
        <div className="absolute bottom-40 right-10 lg:right-20 animate-float-delayed hidden md:block opacity-20">
          <Shield className="w-16 h-16 lg:w-20 lg:h-20 text-white" />
        </div>
        <div className="absolute top-48 right-20 lg:right-32 animate-float hidden md:block opacity-20">
          <Code className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
        </div>
        <div className="absolute top-1/3 left-32 animate-float-delayed hidden lg:block opacity-20">
          <Sparkles className="w-14 h-14 text-white" />
        </div>
        <div className="absolute bottom-1/3 right-40 animate-float hidden lg:block opacity-20">
          <Rocket className="w-12 h-12 text-white" />
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-12 sm:py-16 lg:py-20 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fadeInUp">
            <Sparkles className="w-4 h-4 mr-2 text-white" />
            <span className="text-sm font-semibold text-white">Building Premium Software Since {companyData.founded}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="hero-title text-white mb-6 lg:mb-8 animate-fadeInUp animation-delay-200">
          {companyData.tagline}
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-gray-300 mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-400 px-4">
          {companyData.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp animation-delay-600 px-4 mb-12 lg:mb-16">
          <Link
            to="/services/generative-ai/overview"
            className="btn-primary inline-flex items-center justify-center w-full sm:w-auto group"
          >
            <span className="mr-2">Explore Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="btn-secondary inline-flex items-center justify-center w-full sm:w-auto"
          >
            Get in Touch
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto animate-fadeInUp animation-delay-800 px-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 lg:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <stat.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 sm:h-16 lg:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 L0,60 Q300,120 600,60 T1200,60 L1200,0 Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
