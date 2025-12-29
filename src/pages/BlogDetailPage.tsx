import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Eye, Heart, Share2, Tag, Facebook, Linkedin, Mail } from 'lucide-react';
import blogsData from '../data/blogs.json';

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const allBlogs = [...blogsData.featured, ...blogsData.recent];
  const blog = allBlogs.find(b => b.slug === slug);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  const relatedBlogs = allBlogs
    .filter(b => b.id !== blog.id && (b.category === blog.category || b.tags.some(tag => blog.tags.includes(tag))))
    .slice(0, 3);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = blog.title;

    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="pt-16 bg-white">
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -bottom-48 -right-48 animate-float-delayed"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>

          <div className="mb-6">
            <span className="px-4 py-2 bg-white bg-opacity-10 rounded-full text-sm font-semibold">
              {blog.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">{blog.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-300">
            <div className="flex items-center">
              <img
                src={blog.authorImage}
                alt={blog.author}
                className="w-12 h-12 rounded-full object-cover mr-3 ring-2 ring-white ring-opacity-20"
              />
              <div>
                <div className="font-semibold text-white">{blog.author}</div>
                <div className="text-sm">{blog.authorRole}</div>
              </div>
            </div>

            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(blog.publishedDate).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </div>

            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {blog.readTime}
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                {blog.views.toLocaleString()}
              </span>
              <span className="flex items-center">
                <Heart className="w-4 h-4 mr-1" />
                {blog.likes}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-96 object-cover"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <article className="prose prose-lg max-w-none">
              <div className="text-xl text-gray-600 leading-relaxed mb-8 italic border-l-4 border-black pl-6">
                {blog.excerpt}
              </div>

              <div className="text-gray-700 leading-relaxed space-y-6">
                {blog.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-black mt-8 mb-4">
                        {paragraph.replace(/\*\*/g, '')}
                      </h2>
                    );
                  }

                  if (paragraph.startsWith('# ')) {
                    return (
                      <h2 key={index} className="text-3xl font-bold text-black mt-8 mb-4">
                        {paragraph.replace('# ', '')}
                      </h2>
                    );
                  }

                  if (paragraph.match(/^\d+\./)) {
                    const items = paragraph.split('\n').filter(item => item.trim());
                    return (
                      <ol key={index} className="list-decimal list-inside space-y-2 ml-4">
                        {items.map((item, idx) => (
                          <li key={idx} className="text-gray-700">
                            {item.replace(/^\d+\.\s*/, '').replace(/\*\*/g, '')}
                          </li>
                        ))}
                      </ol>
                    );
                  }

                  return (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </article>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2 mb-8">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    <Tag className="w-3 h-3 inline mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span className="font-semibold">{blog.likes}</span>
                  </button>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                    <Eye className="w-5 h-5" />
                    <span className="font-semibold">{blog.views.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-700 mr-2 flex items-center">
                    <Share2 className="w-4 h-4 mr-1" />
                    Share:
                  </span>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('email')}
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-6">
                <img
                  src={blog.authorImage}
                  alt={blog.author}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-5 h-5 text-gray-600" />
                    <h3 className="text-2xl font-bold text-black">{blog.author}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{blog.authorRole}</p>
                  <p className="text-gray-700 leading-relaxed">
                    {blog.author} is a passionate technology professional with extensive experience in {blog.category.toLowerCase()}.
                    They regularly contribute insights and best practices to help the developer community stay ahead of the curve.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-black mb-4">Quick Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-semibold text-black">{blog.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Read Time:</span>
                    <span className="font-semibold text-black">{blog.readTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Views:</span>
                    <span className="font-semibold text-black">{blog.views.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Likes:</span>
                    <span className="font-semibold text-black">{blog.likes}</span>
                  </div>
                </div>
              </div>

              <div className="bg-black text-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4">Subscribe to Newsletter</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Get the latest articles delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 mb-3 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-black mb-4">Categories</h3>
                <div className="space-y-2">
                  {blogsData.categories.slice(0, 6).map((category) => (
                    <Link
                      key={category.slug}
                      to="/blog"
                      className="flex items-center justify-between text-sm text-gray-700 hover:text-black transition-colors"
                    >
                      <span>{category.name}</span>
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded">{category.count}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {relatedBlogs.length > 0 && (
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-black mb-12 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog, index) => (
                <Link
                  key={relatedBlog.id}
                  to={`/blog/${relatedBlog.slug}`}
                  className="group animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-semibold">
                          {relatedBlog.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Clock className="w-4 h-4 mr-1" />
                        {relatedBlog.readTime}
                      </div>

                      <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
                        {relatedBlog.title}
                      </h3>

                      <p className="text-gray-600 line-clamp-2 leading-relaxed mb-4">
                        {relatedBlog.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center">
                          <img
                            src={relatedBlog.authorImage}
                            alt={relatedBlog.author}
                            className="w-8 h-8 rounded-full object-cover mr-2"
                          />
                          <span className="text-sm font-semibold text-black">{relatedBlog.author}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              to="/blog"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              More Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
