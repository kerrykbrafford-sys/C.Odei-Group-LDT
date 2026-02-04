import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight, Home } from 'lucide-react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#1a1a1a] text-gray-400 pt-20 pb-10 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div>
            <div className="mb-6">
                <div className="flex items-center font-heading font-bold text-2xl tracking-tight leading-none text-white">
                    <span className="text-white">C.</span>
                    <div className="relative flex items-center justify-center w-6 h-6 mx-1">
                        <Home className="w-6 h-6 text-primary absolute bottom-0.5" strokeWidth={2.5} />
                    </div>
                    <span className="text-primary">DEI</span>
                </div>
            </div>
            <p className="mb-6 leading-relaxed">
              C.Odei Group Limited is a reliable Construction and Building Materials company with over 20 years of excellence. We build your vision and supply your foundation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/codeigrouplimited?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-primary transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-xl mb-6 relative inline-block">
                Useful Links
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
                {['Home', 'About Us', 'Services', 'Projects', 'Careers', 'Contact'].map((item) => (
                    <li key={item}>
                        <a href="#" className="flex items-center hover:text-primary transition-colors group">
                            <ArrowRight className="w-4 h-4 mr-2 text-gray-600 group-hover:text-primary" />
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-heading font-bold text-xl mb-6 relative inline-block">
                Contact Info
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-4">
                <li className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Kwabenya - C.Odei Group, Accra</span>
                </li>
                <li className="flex items-start">
                    <Phone className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div className="flex flex-col">
                        <span>+233 030 395 9318</span>
                    </div>
                </li>
                <li className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>codeigrouplimited@yahoo.com</span>
                </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-heading font-bold text-xl mb-6 relative inline-block">
                Newsletter
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary"></span>
            </h3>
            <p className="mb-4 text-sm">Subscribe to get the latest news and updates.</p>
            <form className="flex flex-col space-y-3">
                <input 
                    type="email" 
                    placeholder="Your Email Address" 
                    className="bg-gray-800 border-none text-white px-4 py-3 rounded focus:ring-2 focus:ring-primary outline-none"
                />
                <Button variant="primary" size="md">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2025 C.Odei Group Limited. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};