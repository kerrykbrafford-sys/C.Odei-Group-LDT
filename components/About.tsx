import React from 'react';
import { Button } from './Button';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-cd2a1fb0e538?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Engineer working" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative back square */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary/20 rounded-2xl -z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-0"></div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-primary font-bold uppercase tracking-wider mb-2">Who We Are</h4>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6">
              Building the Future, <br/> Supplying the Foundation.
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              C.Odei Group Limited is a premier leader in Construction and Building Material Sales. 
              For over two decades, we have delivered iconic design-build projects and supplied top-quality materials 
              to contractors and homeowners across the region.
            </p>
            
            <div className="space-y-4 mb-8">
                {[
                    "Comprehensive Project Management",
                    "Premium Iron Rods & Nails Supply",
                    "High-Grade Cement & Blocks",
                    "Expert Team of Engineers & Builders"
                ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                        <CheckCircle2 className="text-primary w-6 h-6" />
                        <span className="text-dark font-medium">{item}</span>
                    </div>
                ))}
            </div>

            <Button variant="secondary">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};