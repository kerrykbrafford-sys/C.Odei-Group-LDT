import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardHat, Truck, ArrowRight, X, Package, Boxes, CircleDot, MapPin, Clock, Shield, CheckCircle } from 'lucide-react';
import { Service } from '../types';
import { Button } from './Button';

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

const materials = [
  {
    name: "Iron Rods",
    icon: <CircleDot className="w-6 h-6" />,
    description: "Premium-grade steel reinforcement bars forged for exceptional tensile strength and corrosion resistance. Our iron rods form the backbone of your concrete structures, ensuring decades of structural integrity.",
    sizes: ["1/2 inch", "5/8 inch", "3/8 inch", "5/16 inch"],
    color: "from-gray-600 to-gray-800"
  },
  {
    name: "Cement",
    icon: <Boxes className="w-6 h-6" />,
    description: "Top-tier cement from Ghana's most trusted brands. Each bag delivers consistent mixing properties, rapid setting times, and outstanding compressive strength for foundations, walls, and finishing work.",
    sizes: ["Ghacem", "Dzata", "Supacem"],
    color: "from-stone-500 to-stone-700"
  },
  {
    name: "Cement Blocks",
    icon: <Package className="w-6 h-6" />,
    description: "High-density concrete blocks manufactured with precision for uniform dimensions and superior load-bearing capacity. Perfect for structural walls, foundations, and boundary constructions.",
    sizes: ["5-Inch", "6-Inch", "9-Inch"],
    color: "from-slate-500 to-slate-700"
  },
  {
    name: "Iron Nails",
    icon: <CircleDot className="w-6 h-6" />,
    description: "Industrial-strength nails engineered for maximum holding power. From common wire nails for framing to specialized masonry and roofing nails, we've got every fastening need covered.",
    sizes: ["Common", "Masonry", "Roofing", "Skirting"],
    color: "from-zinc-500 to-zinc-700"
  },
  {
    name: "Binding Wires",
    icon: <CircleDot className="w-6 h-6" />,
    description: "Flexible yet strong binding wires for securing reinforcement bars in concrete structures. Available in various coatings for enhanced durability and ease of use in any weather condition.",
    sizes: ["Black Annealed", "Galvanized", "PVC Coated"],
    color: "from-neutral-500 to-neutral-700"
  }
];

export const Services: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleViewDetails = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <section id="services" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">What We Do</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark mt-2">Our Core Services</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
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
                  <button
                    onClick={() => handleViewDetails(service)}
                    className={`px-6 py-2 border-2 rounded-full font-semibold transition-colors ${service.category === 'construction' ? 'border-primary text-primary hover:bg-primary hover:text-white' : 'border-white text-white hover:bg-white hover:text-primary'}`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Material Sales Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService?.category === 'materials' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-gradient-to-br from-dark/95 via-secondary/90 to-primary/70 backdrop-blur-md"
            >
              {/* Animated floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-20 left-[10%] w-24 h-24 bg-primary/30 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-32 right-[15%] w-32 h-32 bg-white/10 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/3 right-[30%] w-16 h-16 bg-tertiary/30 rounded-full blur-xl"
              />
            </motion.div>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-primary to-primary/80 text-white p-8 md:p-10 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-all hover:rotate-90 duration-300"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-4 mb-4"
                  >
                    <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                      <Package className="w-10 h-10" />
                    </div>
                    <div>
                      <h2 className="font-heading text-3xl md:text-4xl font-bold">Premium Building Materials</h2>
                      <p className="text-white/80 text-sm mt-1">Quality you can trust, delivered to your doorstep</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Materials Grid */}
              <div className="p-6 md:p-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-heading font-bold text-dark mb-2">Our Materials Collection</h3>
                  <p className="text-gray-500">Each material is carefully sourced and quality-tested to ensure your projects stand the test of time.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {materials.map((material, index) => (
                    <motion.div
                      key={material.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * (index + 1) }}
                      className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${material.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                        {material.icon}
                      </div>
                      <h4 className="text-xl font-bold text-dark mb-2">{material.name}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{material.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {material.sizes.map((size) => (
                          <span key={size} className="text-xs bg-light text-secondary px-2 py-1 rounded-full border border-orange-100">
                            {size}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Delivery Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-r from-secondary to-secondary/90 rounded-3xl p-8 md:p-10 text-white overflow-hidden relative"
                >
                  {/* Decorative */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="bg-primary p-4 rounded-2xl shadow-lg"
                      >
                        <Truck className="w-10 h-10" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold">Reliable Delivery Fleet</h3>
                        <p className="text-gray-300 text-sm">Your materials, delivered safely and on time</p>
                      </div>
                    </div>

                    <p className="text-gray-200 leading-relaxed mb-8 text-lg">
                      Our fleet of heavy-duty trucks is standing by to transport your orders safely to any destination across Ghana and West Africa. Whether it's a small renovation project or a massive commercial development, we've got the logistics covered. No order is too big, no distance too far – we deliver with care and precision.
                    </p>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { icon: <MapPin className="w-5 h-5" />, label: "Nationwide Coverage", desc: "All regions in Ghana" },
                        { icon: <Clock className="w-5 h-5" />, label: "Timely Delivery", desc: "On-schedule guaranteed" },
                        { icon: <Shield className="w-5 h-5" />, label: "Safe Transport", desc: "Insured and secured" },
                        { icon: <CheckCircle className="w-5 h-5" />, label: "Quality Assured", desc: "Damage-free arrival" }
                      ].map((item, idx) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + idx * 0.1 }}
                          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                        >
                          <div className="bg-primary/30 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                            {item.icon}
                          </div>
                          <h4 className="font-bold text-sm">{item.label}</h4>
                          <p className="text-xs text-gray-300">{item.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="mt-8 text-center"
                >
                  <Button onClick={closeModal} size="lg" className="px-12">
                    Close
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Construction Detail Modal - Simple version */}
      <AnimatePresence>
        {isModalOpen && selectedService?.category === 'construction' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-dark/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 text-center"
            >
              <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-dark">
                <X className="w-6 h-6" />
              </button>
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <HardHat className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-dark mb-4">Construction Services</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                C.Odei Group Limited brings over 20 years of expertise in commercial and residential construction. From architectural planning to project completion, our team of skilled engineers and builders ensures every project meets the highest standards of quality, safety, and on-time delivery.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We specialize in complete building construction, renovations, structural repairs, and custom developments tailored to your vision.
              </p>
              <Button onClick={closeModal}>Close</Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};