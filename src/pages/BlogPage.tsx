import React from 'react';
import { blogPosts } from '../data/blogData';
import BlogPostCard from '../components/BlogPostCard';
import Animation from '../components/Animation';

const BlogPage: React.FC = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-24 pb-12 bg-about-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <Animation>
            <h1 className="font-serif mb-4">Our Blog</h1>
          </Animation>
          <Animation delay={200}>
            <p className="text-lg max-w-2xl mx-auto">
              Dive into the fascinating world of Indian tea and coffee culture
            </p>
          </Animation>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section bg-cream-50 dark:bg-primary-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Animation key={post.id} delay={index * 100}>
                <BlogPostCard post={post} />
              </Animation>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom">
          <Animation>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif mb-4">Stay Updated</h2>
              <p className="mb-6">
                Subscribe to our newsletter for the latest articles, brewing tips, and special offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-lg flex-1 text-primary-800 focus:outline-none focus:ring-2 focus:ring-accent-400"
                />
                <button
                  type="submit"
                  className="btn-secondary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </Animation>
        </div>
      </section>
    </>
  );
};

export default BlogPage;