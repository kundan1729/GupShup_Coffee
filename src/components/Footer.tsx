import React from 'react';
import { NavLink } from 'react-router-dom';
import { Coffee, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-cream-100 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-6 w-6" />
              <span className="font-serif text-xl font-bold">GupShup & Coffee</span>
            </div>
            <p className="mb-4 text-cream-200 text-sm">
              Where every sip sparks a story and friends come together over perfect brews.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream-100 hover:text-accent-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream-100 hover:text-accent-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream-100 hover:text-accent-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-cream-200 hover:text-accent-400 transition-colors text-sm">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu" className="text-cream-200 hover:text-accent-400 transition-colors text-sm">
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-cream-200 hover:text-accent-400 transition-colors text-sm">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-cream-200 hover:text-accent-400 transition-colors text-sm">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-cream-200 hover:text-accent-400 transition-colors text-sm">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-cream-200">
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

          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent-400 flex-shrink-0 mt-0.5" />
                <span className="text-cream-200">123 Chai Street, Mumbai, Maharashtra 400001, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-400 flex-shrink-0" />
                <span className="text-cream-200">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-400 flex-shrink-0" />
                <span className="text-cream-200">kundan234432@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-primary-700 text-center text-sm text-cream-300">
          <p>&copy; {currentYear} GupShup & Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;