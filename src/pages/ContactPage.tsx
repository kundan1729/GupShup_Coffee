import React from 'react';
import ContactForm from '../components/ContactForm';
import Animation from '../components/Animation';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-24 pb-12 bg-menu-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <Animation>
            <h1 className="font-serif mb-4">Contact Us</h1>
          </Animation>
          <Animation delay={200}>
            <p className="text-lg max-w-2xl mx-auto">
              We'd love to hear from you! Drop by our café or send us a message.
            </p>
          </Animation>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-cream-50 dark:bg-primary-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Animation>
              <div>
                <h2 className="font-serif mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-accent-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-xl mb-2">Visit Us</h3>
                      <p className="text-primary-700 dark:text-cream-200">
                        GupShup & Coffee,<br />
                        Begusarai, Bihar 851101, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-accent-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-xl mb-2">Call Us</h3>
                      <p className="text-primary-700 dark:text-cream-200">
                        +91 9142089891
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-accent-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-xl mb-2">Email Us</h3>
                      <p className="text-primary-700 dark:text-cream-200">
                        kundan234432@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-accent-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-xl mb-2">Opening Hours</h3>
                      <ul className="text-primary-700 dark:text-cream-200 space-y-1">
                        <li className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span>8:00 AM - 10:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Saturday:</span>
                          <span>9:00 AM - 11:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Sunday:</span>
                          <span>9:00 AM - 9:00 PM</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Animation>

            <Animation delay={300}>
              <div className="card">
                <h3 className="font-serif text-2xl mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </Animation>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-cream-100 dark:bg-primary-800">
        <div className="h-full w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1651137182480!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="GupShup & Coffee Location"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-cream-50 dark:bg-primary-900">
        <div className="container-custom">
          <Animation>
            <h2 className="font-serif mb-8 text-center">Frequently Asked Questions</h2>
          </Animation>

          <div className="max-w-3xl mx-auto space-y-6">
            <Animation delay={200}>
              <div className="card">
                <h3 className="font-serif text-xl mb-2">Do you offer home delivery?</h3>
                <p className="text-primary-700 dark:text-cream-200">
                  Yes, we offer home delivery within a 5 km radius. Orders can be placed through our website or by calling us directly.
                </p>
              </div>
            </Animation>

            <Animation delay={300}>
              <div className="card">
                <h3 className="font-serif text-xl mb-2">Can I book the café for private events?</h3>
                <p className="text-primary-700 dark:text-cream-200">
                  Absolutely! We offer café bookings for private events after 8 PM on weekdays. Please contact us at least one week in advance to check availability.
                </p>
              </div>
            </Animation>

            <Animation delay={400}>
              <div className="card">
                <h3 className="font-serif text-xl mb-2">Do you have vegan options?</h3>
                <p className="text-primary-700 dark:text-cream-200">
                  Yes, we have several vegan options including almond milk and oat milk alternatives for all our beverages. We also have vegan snack options clearly marked on our menu.
                </p>
              </div>
            </Animation>

            <Animation delay={500}>
              <div className="card">
                <h3 className="font-serif text-xl mb-2">Do you host cultural events?</h3>
                <p className="text-primary-700 dark:text-cream-200">
                  Yes! We regularly host poetry readings, live music nights, and chai tasting workshops. Check our events calendar on our social media pages for upcoming events.
                </p>
              </div>
            </Animation>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;