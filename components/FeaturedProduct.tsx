import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle } from 'lucide-react';
import { Button } from './Button';

interface FeaturedProductProps {
  onOpenOrder: () => void;
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({ onOpenOrder }) => {
  return (
    <section className="py-20 bg-tertiary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content matching the ad */}
          <div className="w-full lg:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl leading-none text-white drop-shadow-sm">
                Build with <br />
                confidence
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-bold text-3xl md:text-4xl text-dark mb-2">
                Our Durable blocks <br /> ensure longevity
              </h3>
              <p className="font-heading font-bold text-2xl text-secondary italic">
                “One Block at a Time”
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 space-y-4"
            >
              <div className="flex items-center space-x-3 text-dark font-medium">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span>High density concrete mix</span>
              </div>
              <div className="flex items-center space-x-3 text-dark font-medium">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span>Uniform shape and size</span>
              </div>
              <div className="flex items-center space-x-3 text-dark font-medium">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span>Perfect for structural integrity</span>
              </div>
            </motion.div>

            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" className="shadow-xl" onClick={onOpenOrder}>
                Order Now
              </Button>
              <div className="flex items-center space-x-3 text-dark font-bold bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                <Phone className="w-5 h-5" />
                <div className="flex flex-col text-sm leading-tight">
                  <span>+233 030 395 9318</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Content - Updated with provided link */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Image */}
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border-4 border-white/30">
              <img
                src="https://drive.google.com/uc?export=view&id=1EKdMNIA9EpJOOkpIX72yS_mHuTpP2C3S"
                alt="Stack of Cement Blocks"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/20 rounded-full blur-2xl"></div>

            {/* Badge */}
            <div className="absolute top-6 right-6 z-20 bg-primary text-white p-4 rounded-full shadow-lg font-heading font-bold text-center w-24 h-24 flex items-center justify-center transform rotate-12">
              <span>Top Quality</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};