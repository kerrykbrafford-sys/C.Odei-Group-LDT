import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Truck, ArrowRight } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "Construction",
    category: "construction",
    description: "C.Odei Group Limited is your trusted source in Construction With Professional Work Ethics. We specialize in commercial and residential developments.",
    icon: <HardHat className="w-12 h-12" />,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Material Sales",
    category: "materials",
    description: "We supply high-grade Iron Rods, Nails, Cement, Binding Wires, and Blocks ensuring maximum durability for your projects. We provide reliable delivery to any location across West Africa.",
    icon: <Truck className="w-12 h-12" />,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">What We Do</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark mt-2">Our Core Services</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={service.id} className="group relative h-96 perspective-1000 cursor-pointer">
               {/* This approach simulates a flip card or a reveal effect using group-hover */}
               <div className="relative w-full h-full transition-all duration-500 transform style-preserve-3d shadow-xl rounded-xl overflow-hidden">
                  
                  {/* Background Image */}
                  <div className="absolute inset-0">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className={`absolute inset-0 opacity-80 ${service.category === 'construction' ? 'bg-secondary/90 mix-blend-multiply' : 'bg-primary/90 mix-blend-multiply'}`}></div>
                  </div>

                  {/* Content - Default State */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 transition-opacity duration-300 group-hover:opacity-0">
                      <div className="bg-white/20 p-4 rounded-full mb-6 backdrop-blur-sm">
                        {service.icon}
                      </div>
                      <h3 className="text-3xl font-heading font-bold">{service.title}</h3>
                      <div className="mt-4 flex items-center text-sm font-medium">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                  </div>

                  {/* Content - Hover State (Reveal) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-10 bg-dark/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center translate-y-4 group-hover:translate-y-0">
                      <h3 className={`text-2xl font-heading font-bold mb-4 ${service.category === 'construction' ? 'text-primary' : 'text-white'}`}>
                        {service.title}
                      </h3>
                      <p className="leading-relaxed text-gray-300 mb-6">
                        {service.description}
                      </p>
                      <button className={`px-6 py-2 border-2 rounded-full font-semibold transition-colors ${service.category === 'construction' ? 'border-primary text-primary hover:bg-primary hover:text-white' : 'border-white text-white hover:bg-white hover:text-primary'}`}>
                        View Details
                      </button>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};