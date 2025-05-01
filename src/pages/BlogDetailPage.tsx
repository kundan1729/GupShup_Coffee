import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPostBySlug, getRecentPosts } from '../data/blogData';
import BlogPostCard from '../components/BlogPostCard';
import Animation from '../components/Animation';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getPostBySlug(slug || '');
  const recentPosts = getRecentPosts(3).filter(p => p.slug !== slug);

  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);

  if (!post) return null;

  return (
    <>
      {/* Hero Banner */}
      <section 
        className="pt-24 pb-12 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="container-custom relative z-10 text-white">
          <Animation>
            <Link to="/blog" className="inline-flex items-center text-cream-100 hover:text-accent-400 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all articles
            </Link>
          </Animation>
          <Animation delay={200}>
            <h1 className="font-serif mb-4">{post.title}</h1>
          </Animation>
          <Animation delay={300}>
            <div className="flex flex-wrap items-center text-cream-200 gap-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
            </div>
          </Animation>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section bg-cream-50 dark:bg-primary-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Animation>
              <div 
                className="prose prose-lg prose-primary dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </Animation>

            <Animation delay={300}>
              <div className="border-t border-primary-200 dark:border-primary-700 mt-12 pt-8">
                <h3 className="font-serif text-2xl mb-6">Share this article</h3>
                <div className="flex space-x-4">
                  <a 
                    href={`https://twitter.com/intent/tweet?text=${post.title}&url=${window.location.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-800 hover:bg-primary-200 dark:hover:bg-primary-700 rounded-lg transition-colors"
                  >
                    Twitter
                  </a>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-800 hover:bg-primary-200 dark:hover:bg-primary-700 rounded-lg transition-colors"
                  >
                    Facebook
                  </a>
                  <a 
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${post.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-800 hover:bg-primary-200 dark:hover:bg-primary-700 rounded-lg transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </Animation>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {recentPosts.length > 0 && (
        <section className="section bg-cream-100 dark:bg-primary-800">
          <div className="container-custom">
            <Animation>
              <h2 className="font-serif mb-8 text-center">More Articles to Explore</h2>
            </Animation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <Animation key={post.id} delay={index * 200}>
                  <BlogPostCard post={post} />
                </Animation>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogDetailPage;