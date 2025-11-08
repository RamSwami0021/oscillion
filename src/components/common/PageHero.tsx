import { ReactNode } from 'react';
import { Sparkles } from 'lucide-react';

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  icon?: ReactNode;
  className?: string;
}

const PageHero = ({ badge, title, subtitle, icon, className = '' }: PageHeroProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -bottom-48 -right-48 animate-float-delayed"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          {icon && (
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 animate-fadeInUp">
              {icon}
            </div>
          )}

          {/* Badge */}
          {badge && (
            <div className="inline-block mb-4 sm:mb-6 animate-fadeInUp animation-delay-200">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm font-semibold">{badge}</span>
              </div>
            </div>
          )}

          {/* Title */}
          <h1 className="page-title text-white mb-4 sm:mb-6 animate-fadeInUp animation-delay-400">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="page-subtitle text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-600">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-8 sm:h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 L0,60 Q300,120 600,60 T1200,60 L1200,0 Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default PageHero;
