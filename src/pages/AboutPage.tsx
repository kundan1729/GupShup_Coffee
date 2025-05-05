import React from 'react';
import Animation from '../components/Animation';
import { Link } from 'react-router-dom';
import { Coffee, Heart, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-24 pb-12 bg-about-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <Animation>
            <h1 className="font-serif mb-4">Our Story</h1>
          </Animation>
          <Animation delay={200}>
            <p className="text-lg max-w-2xl mx-auto">
              How three friends turned their chai pe charcha into a dream café
            </p>
          </Animation>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-cream-50 dark:bg-primary-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Animation>
              <div>
                <h2 className="font-serif mb-6">The Beginning</h2>
                <p className="mb-4 text-primary-700 dark:text-cream-200">
                  It all started in 2020 when three friends—Kundan, Rishabh, and Shashwat—found themselves 
                  meeting almost daily at a local chai stall near their engineering college in Begusarai. These chai 
                  breaks became their escape from academic pressure, a time to discuss their dreams, challenges, 
                  and ambitions.
                </p>
                <p className="mb-4 text-primary-700 dark:text-cream-200">
                  "We realized that the magic wasn't just in the chai," recalls Kundan. "It was in the 
                  conversations, the laughter, and the community that formed around that humble stall."
                </p>
                <p className="text-primary-700 dark:text-cream-200">
                  As graduation approached, the three friends made a pact: to create a space where others could 
                  experience the same joy they found in their chai-fueled discussions. After two years of planning, 
                  saving, and learning about the coffee and tea industry, GupShup & Coffee was born.
                </p>
              </div>
            </Animation>
            <Animation delay={300}>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/5094117/pexels-photo-5094117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Friends enjoying tea together" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Animation>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="section bg-primary-800 text-white">
        <div className="container-custom">
          <Animation>
            <div className="text-center mb-12">
              <h2 className="font-serif mb-4">Our Philosophy</h2>
              <p className="max-w-3xl mx-auto">
                At GupShup & Coffee, we believe in more than just serving beverages. We're creating experiences 
                and bringing people together through the time-honored tradition of chai pe charcha.
              </p>
            </div>
          </Animation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Animation delay={200}>
              <div className="bg-primary-700 p-8 rounded-lg text-center">
                <div className="mx-auto bg-primary-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Coffee className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl mb-3">Quality First</h3>
                <p className="text-cream-200">
                  We source our teas directly from estates in Darjeeling and Assam, and our coffee from small 
                  farms in Coorg and Chikmagalur, ensuring fair prices for farmers and exceptional quality for 
                  our customers.
                </p>
              </div>
            </Animation>

            <Animation delay={400}>
              <div className="bg-primary-700 p-8 rounded-lg text-center">
                <div className="mx-auto bg-primary-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl mb-3">Community Building</h3>
                <p className="text-cream-200">
                  Our café is designed to foster connection. From our communal tables to our weekly events, 
                  we create opportunities for meaningful interactions and new friendships.
                </p>
              </div>
            </Animation>

            <Animation delay={600}>
              <div className="bg-primary-700 p-8 rounded-lg text-center">
                <div className="mx-auto bg-primary-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl mb-3">Sustainability</h3>
                <p className="text-cream-200">
                  We're committed to minimizing our environmental impact. From compostable packaging to our 
                  partnership with local urban farms, sustainability guides every decision we make.
                </p>
              </div>
            </Animation>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-cream-50 dark:bg-primary-900">
        <div className="container-custom">
          <Animation>
            <div className="text-center mb-12">
              <h2 className="font-serif mb-4">Meet the Team</h2>
              <p className="text-primary-700 dark:text-cream-200 max-w-3xl mx-auto">
                The passionate people behind your favorite chai and coffee experience.
              </p>
            </div>
          </Animation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Animation delay={200}>
              <div className="card text-center overflow-hidden">
                <div className="mb-6 relative h-64 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Kundan Kumar" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="font-serif text-xl mb-1">Kundan Kumar</h3>
                <p className="text-accent-600 dark:text-accent-400 mb-3">Founder & Tea Master</p>
                <p className="text-primary-600 dark:text-cream-200 text-sm">
                  A certified tea sommelier with a passion for bringing authentic chai culture to a wider audience.
                </p>
              </div>
            </Animation>

            <Animation delay={400}>
              <div className="card text-center overflow-hidden">
                <div className="mb-6 relative h-64 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Risabh Prakash" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="font-serif text-xl mb-1">Risabh Prakash</h3>
                <p className="text-accent-600 dark:text-accent-400 mb-3">Co-Founder & Chef</p>
                <p className="text-primary-600 dark:text-cream-200 text-sm">
                  A culinary artist who has reimagined traditional Indian street snacks with a contemporary twist.
                </p>
              </div>
            </Animation>

            <Animation delay={600}>
              <div className="card text-center overflow-hidden">
                <div className="mb-6 relative h-64 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Sashwat Singh" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="font-serif text-xl mb-1">Sashwat Singh</h3>
                <p className="text-accent-600 dark:text-accent-400 mb-3">Co-Founder & Operations</p>
                <p className="text-primary-600 dark:text-cream-200 text-sm">
                  With a background in business management, Sashwat ensures smooth operations and exceptional customer experience.
                </p>
              </div>
            </Animation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-500 text-white">
        <div className="container-custom text-center">
          <Animation>
            <h2 className="font-serif mb-6">Join Our Story</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Whether you're a tea enthusiast, a coffee connoisseur, or simply looking for a place to connect, 
              GupShup & Coffee welcomes you. Come be part of our growing community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu" className="btn-primary">
                Explore Our Menu
              </Link>
              <Link to="/contact" className="btn-primary bg-white text-accent-600 hover:bg-cream-100">
                Visit Us Today
              </Link>
            </div>
          </Animation>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
