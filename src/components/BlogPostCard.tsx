import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types/menu';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="card group hover:scale-[1.01] transition-all h-full flex flex-col">
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex-grow">
        <div className="text-xs text-primary-500 dark:text-primary-300 mb-2">
          {post.date} • by {post.author}
        </div>
        <h3 className="font-serif text-xl mb-2">{post.title}</h3>
        <p className="text-primary-600 dark:text-cream-200 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
      </div>
      <Link 
        to={`/blog/${post.slug}`} 
        className="inline-block text-accent-600 dark:text-accent-400 font-medium hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
      >
        Read More →
      </Link>
    </div>
  );
};

export default BlogPostCard;