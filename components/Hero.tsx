import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const scrollToProducts = () => {
    const element = document.getElementById('products-showcase');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Modern Construction Building" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay - Updated to Warm Dark/Orange theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1512]/95 via-[#2D2420]/80 to-primary/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 flex items-center space-x-2"
          >
             <div className="h-8 w-1 bg-primary"></div>
             <span className="text-lg md:text-xl font-medium tracking-wide text-gray-200">Build With Confidence.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6"
          >
            Construction <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">& Premium</span> <br/>
            <span className="text-primary">Materials</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
          >
            Your trusted partner for top-tier construction services and supply of essential building materials including Iron Rods, Cement, Blocks, and Nails.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              variant="primary" 
              className="rounded-none sm:rounded shadow-lg shadow-primary/20"
              onClick={scrollToProducts}
            >
              View Products
            </Button>
            <Button 
              size="lg" 
              variant="white" 
              className="rounded-none sm:rounded text-secondary"
              onClick={onOpenContact}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 right-10 hidden md:block"
      >
        <div className="flex space-x-2">
            <div className="w-12 h-1 bg-white/20"></div>
            <div className="w-12 h-1 bg-white/40"></div>
            <div className="w-12 h-1 bg-primary"></div>
        </div>
      </motion.div>
    </section>
  );
};