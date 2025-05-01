import React from 'react';
import { Link } from 'react-router-dom';
import { getSpecials } from '../data/menuData';
import { getRecentPosts } from '../data/blogData';
import MenuItemCard from '../components/MenuItemCard';
import BlogPostCard from '../components/BlogPostCard';
import Animation from '../components/Animation';
import { Coffee, Users, Clock } from 'lucide-react';

const HomePage: React.FC = () => {
  const specials = getSpecials();
  const recentPosts = getRecentPosts(3);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container-custom relative z-10 text-center text-white py-20">
          <Animation>
            <h1 className="font-serif font-bold mb-4">
              Where Every Sip Sparks a Story
            </h1>
          </Animation>
          <Animation delay={200}>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Join us for authentic Indian chai, artisanal coffee, and heartwarming conversation at Mumbai's most beloved café.
            </p>
          </Animation>
          <Animation delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu" className="btn-primary">
                View Menu
              </Link>
              <Link to="/contact" className="btn-secondary">
                Visit Us
              </Link>
            </div>
          </Animation>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-cream-100 dark:bg-primary-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Animation>
              <div className="card text-center p-8">
                <div className="mx-auto bg-primary-100 dark:bg-primary-800 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Coffee className="h-8 w-8 text-primary-700 dark:text-primary-300" />
                </div>
                <h3 className="font-serif text-xl mb-3">Premium Brews</h3>
                <p className="text-primary-600 dark:text-cream-200">
                  Our teas and coffees are sourced from the finest estates across India, ensuring every cup is perfect.
                </p>
              </div>
            </Animation>

            <Animation delay={200}>
              <div className="card text-center p-8">
                <div className="mx-auto bg-primary-100 dark:bg-primary-800 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary-700 dark:text-primary-300" />
                </div>
                <h3 className="font-serif text-xl mb-3">Chai Pe Charcha</h3>
                <p className="text-primary-600 dark:text-cream-200">
                  Our space is designed for connection and conversation, just like the Indian tradition of discussions over tea.
                </p>
              </div>
            </Animation>

            <Animation delay={400}>
              <div className="card text-center p-8">
                <div className="mx-auto bg-primary-100 dark:bg-primary-800 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-primary-700 dark:text-primary-300" />
                </div>
                <h3 className="font-serif text-xl mb-3">Quick Service</h3>
                <p className="text-primary-600 dark:text-cream-200">
                  Whether it's a cutting chai or a full breakfast, our service is always prompt and friendly.
                </p>
              </div>
            </Animation>
          </div>
        </div>
      </section>

      {/* Daily Specials */}
      <section className="section bg-cream-50 dark:bg-primary-800">
        <div className="container-custom">
          <Animation>
            <div className="text-center mb-12">
              <h2 className="font-serif mb-4">Today's Specials</h2>
              <p className="text-primary-600 dark:text-cream-200 max-w-2xl mx-auto">
                Our chefs and baristas prepare something special every day. Here's what's brewing today.
              </p>
            </div>
          </Animation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specials.map((item, index) => (
              <Animation key={item.id} delay={index * 200}>
                <MenuItemCard item={item} />
              </Animation>
            ))}
          </div>

          <Animation delay={600}>
            <div className="text-center mt-12">
              <Link to="/menu" className="btn-primary">
                View Full Menu
              </Link>
            </div>
          </Animation>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section bg-primary-700 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{backgroundImage: "url('https://images.pexels.com/photos/296888/pexels-photo-296888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}
        ></div>
        <div className="container-custom relative z-10">
          <Animation>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif mb-8">What Our Customers Say</h2>
              <blockquote className="text-xl md:text-2xl font-serif italic mb-6">
                "There's something magical about this place. The masala chai takes me back to my childhood, and the atmosphere is perfect for long conversations with friends."
              </blockquote>
              <div className="font-medium">
                <p className="text-cream-100">Rajesh Patel</p>
                <p className="text-cream-200 text-sm">Regular Customer</p>
              </div>
            </div>
          </Animation>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section bg-cream-50 dark:bg-primary-900">
        <div className="container-custom">
          <Animation>
            <div className="text-center mb-12">
              <h2 className="font-serif mb-4">From Our Blog</h2>
              <p className="text-primary-600 dark:text-cream-200 max-w-2xl mx-auto">
                Discover stories about Indian tea and coffee culture, brewing tips, and more.
              </p>
            </div>
          </Animation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <Animation key={post.id} delay={index * 200}>
                <BlogPostCard post={post} />
              </Animation>
            ))}
          </div>

          <Animation delay={600}>
            <div className="text-center mt-12">
              <Link to="/blog" className="btn-primary">
                Read More Articles
              </Link>
            </div>
          </Animation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-500 text-white">
        <div className="container-custom text-center">
          <Animation>
            <h2 className="font-serif mb-6">Ready for a Cup of Happiness?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join us today for the perfect blend of flavors, conversations, and memories.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-accent-600 hover:bg-cream-100">
              Find Us
            </Link>
          </Animation>
        </div>
      </section>
    </>
  );
};

export default HomePage;