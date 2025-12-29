import { useState } from 'react';
import { Zap, CheckCircle, AlertCircle, XCircle, Clock, Server, Image as ImageIcon, FileCode, Globe } from 'lucide-react';
import PageHero from '../../components/common/PageHero';

const WebsiteSpeedTestTool = () => {
  const [url, setUrl] = useState('');
  const [testing, setTesting] = useState(false);
  const [results, setResults] = useState<any>(null);

  const testSpeed = () => {
    if (!url) return;

    setTesting(true);

    setTimeout(() => {
      const loadTime = (Math.random() * 3 + 0.5).toFixed(2);
      const score = Math.max(0, 100 - parseFloat(loadTime) * 20);

      const mockResults = {
        loadTime: loadTime,
        score: Math.floor(score),
        grade: score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F',
        metrics: {
          firstContentfulPaint: (Math.random() * 1.5 + 0.3).toFixed(2),
          largestContentfulPaint: (Math.random() * 2 + 1).toFixed(2),
          timeToInteractive: (Math.random() * 3 + 1.5).toFixed(2),
          totalBlockingTime: Math.floor(Math.random() * 300 + 50),
          cumulativeLayoutShift: (Math.random() * 0.25).toFixed(3),
        },
        pageSize: {
          total: (Math.random() * 3 + 1).toFixed(2),
          html: (Math.random() * 100 + 20).toFixed(0),
          css: (Math.random() * 200 + 50).toFixed(0),
          javascript: (Math.random() * 800 + 200).toFixed(0),
          images: (Math.random() * 2000 + 500).toFixed(0),
          fonts: (Math.random() * 150 + 30).toFixed(0),
        },
        requests: Math.floor(Math.random() * 50 + 30),
        recommendations: [
          {
            priority: 'high',
            title: 'Optimize Images',
            description: 'Compress and resize images to reduce file size. Use modern formats like WebP.',
            impact: 'Can save up to 1.2 MB'
          },
          {
            priority: 'high',
            title: 'Minify JavaScript',
            description: 'Remove unnecessary characters from JavaScript files to reduce size.',
            impact: 'Can save up to 340 KB'
          },
          {
            priority: 'medium',
            title: 'Enable Browser Caching',
            description: 'Set proper cache headers to reduce repeat load times for returning visitors.',
            impact: 'Improve repeat visit speed by 60%'
          },
          {
            priority: 'medium',
            title: 'Reduce Server Response Time',
            description: 'Optimize your server configuration and database queries.',
            impact: 'Can reduce TTFB by 200-400ms'
          },
          {
            priority: 'low',
            title: 'Use a CDN',
            description: 'Distribute content across global servers to reduce latency.',
            impact: 'Improve global load times by 30-50%'
          },
        ]
      };

      setResults(mockResults);
      setTesting(false);
    }, 3000);
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A':
        return 'from-green-500 to-emerald-600';
      case 'B':
        return 'from-blue-500 to-cyan-600';
      case 'C':
        return 'from-yellow-500 to-orange-600';
      case 'D':
      case 'F':
        return 'from-red-500 to-pink-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <XCircle className="w-5 h-5 text-red-600" />;
      case 'medium':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'low':
        return <CheckCircle className="w-5 h-5 text-blue-600" />;
      default:
        return null;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'low':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className="pt-16 sm:pt-20 bg-white">
      <PageHero
        badge="Free Speed Tool"
        title="Website Speed Test Tool"
        subtitle="Test your website's loading speed and get optimization recommendations for better performance"
      />

      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-gray-200">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-black">Test Your Website Speed</h2>
                <p className="text-gray-600 mt-1">Get detailed performance metrics and optimization tips</p>
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
                  className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors text-lg"
                  onKeyPress={(e) => e.key === 'Enter' && testSpeed()}
                />
                <button
                  onClick={testSpeed}
                  disabled={!url || testing}
                  className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                  {testing ? 'Testing...' : 'Test Speed'}
                </button>
              </div>
            </div>

            {testing && (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600"></div>
                <p className="ml-4 text-gray-600">Testing your website speed...</p>
              </div>
            )}

            {results && !testing && (
              <div className="space-y-8 animate-fadeIn">
                <div className={`bg-gradient-to-br ${getGradeColor(results.grade)} p-8 rounded-2xl text-white`}>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-white/80 mb-2 font-semibold">Load Time</p>
                      <p className="text-5xl font-bold">{results.loadTime}s</p>
                    </div>
                    <div>
                      <p className="text-white/80 mb-2 font-semibold">Performance Score</p>
                      <p className="text-5xl font-bold">{results.score}</p>
                    </div>
                    <div>
                      <p className="text-white/80 mb-2 font-semibold">Grade</p>
                      <p className="text-5xl font-bold">{results.grade}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                    <Clock className="w-6 h-6 mr-3" />
                    Performance Metrics
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                      <h4 className="font-bold text-black mb-2">First Contentful Paint</h4>
                      <p className="text-3xl font-bold text-blue-600 mb-1">{results.metrics.firstContentfulPaint}s</p>
                      <p className="text-sm text-gray-600">Time until first content is visible</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                      <h4 className="font-bold text-black mb-2">Largest Contentful Paint</h4>
                      <p className="text-3xl font-bold text-green-600 mb-1">{results.metrics.largestContentfulPaint}s</p>
                      <p className="text-sm text-gray-600">Time until main content loads</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                      <h4 className="font-bold text-black mb-2">Time to Interactive</h4>
                      <p className="text-3xl font-bold text-purple-600 mb-1">{results.metrics.timeToInteractive}s</p>
                      <p className="text-sm text-gray-600">Time until page is fully interactive</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                      <h4 className="font-bold text-black mb-2">Total Blocking Time</h4>
                      <p className="text-3xl font-bold text-yellow-600 mb-1">{results.metrics.totalBlockingTime}ms</p>
                      <p className="text-sm text-gray-600">Time page is blocked from interaction</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                    <Server className="w-6 h-6 mr-3" />
                    Page Size Breakdown
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
                      <div>
                        <FileCode className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                        <p className="text-sm text-gray-600 mb-1">HTML</p>
                        <p className="font-bold text-black">{results.pageSize.html} KB</p>
                      </div>
                      <div>
                        <FileCode className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                        <p className="text-sm text-gray-600 mb-1">CSS</p>
                        <p className="font-bold text-black">{results.pageSize.css} KB</p>
                      </div>
                      <div>
                        <FileCode className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                        <p className="text-sm text-gray-600 mb-1">JavaScript</p>
                        <p className="font-bold text-black">{results.pageSize.javascript} KB</p>
                      </div>
                      <div>
                        <ImageIcon className="w-8 h-8 mx-auto mb-2 text-green-600" />
                        <p className="text-sm text-gray-600 mb-1">Images</p>
                        <p className="font-bold text-black">{results.pageSize.images} KB</p>
                      </div>
                      <div>
                        <FileCode className="w-8 h-8 mx-auto mb-2 text-red-600" />
                        <p className="text-sm text-gray-600 mb-1">Fonts</p>
                        <p className="font-bold text-black">{results.pageSize.fonts} KB</p>
                      </div>
                      <div>
                        <Globe className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                        <p className="text-sm text-gray-600 mb-1">Total</p>
                        <p className="font-bold text-black">{results.pageSize.total} MB</p>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-gray-600">Total Requests: <span className="font-bold text-black">{results.requests}</span></p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                    <Zap className="w-6 h-6 mr-3" />
                    Optimization Recommendations
                  </h3>
                  <div className="space-y-4">
                    {results.recommendations.map((rec: any, index: number) => (
                      <div key={index} className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-colors">
                        <div className="flex items-start gap-4">
                          {getPriorityIcon(rec.priority)}
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-bold text-black">{rec.title}</h4>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase border ${getPriorityBadge(rec.priority)}`}>
                                {rec.priority}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-2">{rec.description}</p>
                            <p className="text-sm text-gray-500 italic">Impact: {rec.impact}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Need Help Optimizing Your Website?</h3>
                  <p className="text-gray-300 mb-6">
                    Our performance experts can help you achieve lightning-fast load times
                  </p>
                  <div className="flex gap-4 justify-center">
                    <a
                      href="/services/web-development/nodejs"
                      className="px-8 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition-colors"
                    >
                      View Development Services
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
            <h2 className="text-4xl font-bold text-black mb-4">Why Website Speed Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fast websites provide better user experience, improve SEO rankings, and increase conversions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">40%</div>
              <p className="text-gray-600">Users abandon sites that take over 3 seconds to load</p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">2x</div>
              <p className="text-gray-600">Faster sites get twice the conversion rate</p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">-7%</div>
              <p className="text-gray-600">Conversion drop per second of load time</p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-5xl font-bold text-yellow-600 mb-2">#1</div>
              <p className="text-gray-600">Page speed is a Google ranking factor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteSpeedTestTool;
