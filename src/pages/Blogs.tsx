import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Search, Tag, TrendingUp, Eye, Heart } from 'lucide-react';
import blogsData from '../data/blogs.json';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allBlogs = [...blogsData.featured, ...blogsData.recent];

  const filteredBlogs = allBlogs.filter(blog => {
    const matchesSearch = searchQuery === '' ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredBlog = blogsData.featured[0];

  return (
    <div className="pt-16 bg-white">
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -bottom-48 -right-48 animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Tech Insights & News</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends, best practices, and expert insights in software development, cloud computing, and emerging technologies.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-14 pr-4 py-4 rounded-xl border border-gray-300 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Articles
            </button>
            {blogsData.categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {featuredBlog && selectedCategory === 'all' && searchQuery === '' && (
          <div className="mb-20 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-black mb-8">Featured Article</h2>
            <Link to={`/blog/${featuredBlog.slug}`} className="group">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-96 lg:h-auto overflow-hidden">
                    <img
                      src={featuredBlog.image}
                      alt={featuredBlog.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-black text-white rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-black">
                        {featuredBlog.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredBlog.readTime}
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors">
                      {featuredBlog.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {featuredBlog.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <div className="flex items-center">
                        <img
                          src={featuredBlog.authorImage}
                          alt={featuredBlog.author}
                          className="w-12 h-12 rounded-full object-cover mr-3"
                        />
                        <div>
                          <div className="font-semibold text-black">{featuredBlog.author}</div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(featuredBlog.publishedDate).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center text-black font-semibold">
                        Read More
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        <div>
          <h2 className="text-3xl font-bold text-black mb-8">
            {searchQuery ? 'Search Results' : selectedCategory === 'all' ? 'All Articles' : selectedCategory}
          </h2>

          {filteredBlogs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <Link
                  key={blog.id}
                  to={`/blog/${blog.slug}`}
                  className="group animate-fadeInUp"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-semibold">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {blog.readTime}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
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

                      <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center">
                          <img
                            src={blog.authorImage}
                            alt={blog.author}
                            className="w-8 h-8 rounded-full object-cover mr-2"
                          />
                          <div className="text-sm">
                            <div className="font-semibold text-black">{blog.author}</div>
                            <div className="text-gray-500 text-xs">
                              {new Date(blog.publishedDate).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric'
                              })}
                            </div>
                          </div>
                        </div>

                        <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Articles Found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black text-center mb-12">Browse by Category</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogsData.categories.map((category, index) => (
              <button
                key={category.slug}
                onClick={() => {
                  setSelectedCategory(category.name);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-left animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <Tag className="w-8 h-8 text-black" />
                  <span className="text-sm font-semibold text-gray-500">{category.count} articles</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest articles, tutorials, and insights delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
