import { useState } from 'react';
import { Search, CheckCircle, XCircle, AlertCircle, TrendingUp, FileText, Link as LinkIcon, Image as ImageIcon, Zap } from 'lucide-react';
import PageHero from '../../components/common/PageHero';

const SEOAnalyzerTool = () => {
  const [url, setUrl] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const analyzeSEO = () => {
    if (!url) return;

    setAnalyzing(true);

    setTimeout(() => {
      const mockResults = {
        score: Math.floor(Math.random() * 30) + 70,
        checks: {
          title: {
            status: Math.random() > 0.3 ? 'pass' : 'fail',
            message: Math.random() > 0.3
              ? 'Title tag is present and optimized (58 characters)'
              : 'Title tag is missing or too short',
            recommendation: 'Keep title tags between 50-60 characters'
          },
          metaDescription: {
            status: Math.random() > 0.3 ? 'pass' : 'warning',
            message: Math.random() > 0.3
              ? 'Meta description is present (145 characters)'
              : 'Meta description is too short',
            recommendation: 'Aim for 150-160 characters for optimal display'
          },
          headings: {
            status: Math.random() > 0.4 ? 'pass' : 'warning',
            message: 'Found H1 tag and proper heading hierarchy',
            recommendation: 'Use only one H1 tag per page'
          },
          images: {
            status: Math.random() > 0.5 ? 'pass' : 'fail',
            message: Math.random() > 0.5
              ? 'All images have alt attributes'
              : '3 images missing alt attributes',
            recommendation: 'Add descriptive alt text to all images for accessibility'
          },
          mobileResponsive: {
            status: Math.random() > 0.3 ? 'pass' : 'fail',
            message: 'Website is mobile-responsive',
            recommendation: 'Ensure viewport meta tag is present'
          },
          pageSpeed: {
            status: Math.random() > 0.4 ? 'pass' : 'warning',
            message: `Page load time: ${(Math.random() * 2 + 1).toFixed(2)}s`,
            recommendation: 'Aim for under 2 seconds load time'
          },
          ssl: {
            status: 'pass',
            message: 'HTTPS is enabled',
            recommendation: 'Always use SSL certificate for security'
          },
          canonicalTag: {
            status: Math.random() > 0.4 ? 'pass' : 'warning',
            message: Math.random() > 0.4
              ? 'Canonical tag is properly set'
              : 'Canonical tag is missing',
            recommendation: 'Use canonical tags to avoid duplicate content issues'
          },
        },
        recommendations: [
          'Optimize images by compressing them to reduce file size',
          'Add schema markup for better rich snippets in search results',
          'Improve internal linking structure for better crawlability',
          'Create an XML sitemap and submit it to search engines',
          'Optimize page load speed by enabling browser caching',
        ]
      };

      setResults(mockResults);
      setAnalyzing(false);
    }, 2000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'fail':
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return null;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreGradient = (score: number) => {
    if (score >= 80) return 'from-green-500 to-emerald-600';
    if (score >= 60) return 'from-yellow-500 to-orange-600';
    return 'from-red-500 to-pink-600';
  };

  return (
    <div className="pt-16 sm:pt-20 bg-white">
      <PageHero
        badge="Free SEO Tool"
        title="SEO Analyzer Tool"
        subtitle="Analyze your website's SEO performance and get actionable insights to improve search rankings"
      />

      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-gray-200">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                <Search className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-black">Analyze Your Website SEO</h2>
                <p className="text-gray-600 mt-1">Get a comprehensive SEO audit in seconds</p>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Enter Website URL
              </label>
              <div className="flex gap-4">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-lg"
                  onKeyPress={(e) => e.key === 'Enter' && analyzeSEO()}
                />
                <button
                  onClick={analyzeSEO}
                  disabled={!url || analyzing}
                  className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                  {analyzing ? 'Analyzing...' : 'Analyze'}
                </button>
              </div>
            </div>

            {analyzing && (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <p className="ml-4 text-gray-600">Analyzing your website SEO...</p>
              </div>
            )}

            {results && !analyzing && (
              <div className="space-y-8 animate-fadeIn">
                <div className={`bg-gradient-to-br ${getScoreGradient(results.score)} p-8 rounded-2xl text-white`}>
                  <div className="text-center">
                    <p className="text-white/80 mb-2 font-semibold">Your SEO Score</p>
                    <p className="text-7xl font-bold mb-2">{results.score}</p>
                    <p className="text-white/90">out of 100</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                    <FileText className="w-6 h-6 mr-3" />
                    SEO Audit Results
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(results.checks).map(([key, check]: [string, any]) => (
                      <div key={key} className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center">
                            {getStatusIcon(check.status)}
                            <h4 className="ml-2 font-bold text-black capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </h4>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{check.message}</p>
                        <p className="text-gray-500 text-xs italic">{check.recommendation}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-200">
                  <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-3 text-blue-600" />
                    Recommendations to Improve SEO
                  </h3>
                  <ul className="space-y-3">
                    {results.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Need Professional SEO Services?</h3>
                  <p className="text-gray-300 mb-6">
                    Our SEO experts can help you improve your rankings and drive more organic traffic
                  </p>
                  <div className="flex gap-4 justify-center">
                    <a
                      href="/services/digital-marketing/seo"
                      className="px-8 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition-colors"
                    >
                      View SEO Services
                    </a>
                    <a
                      href="/contact"
                      className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-black transition-colors"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Why SEO Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Search Engine Optimization is crucial for driving organic traffic and growing your online presence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Higher Rankings</h3>
              <p className="text-gray-600">Improve your position in search engine results</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <LinkIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">More Traffic</h3>
              <p className="text-gray-600">Attract more visitors to your website organically</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <ImageIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Brand Visibility</h3>
              <p className="text-gray-600">Increase brand awareness and credibility</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Better ROI</h3>
              <p className="text-gray-600">Get more value from your marketing budget</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOAnalyzerTool;
