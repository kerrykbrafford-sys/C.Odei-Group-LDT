import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  { id: 1, title: "Skyline Tower", category: "Construction", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Bulk Cement Supply", category: "Materials", image: "https://images.unsplash.com/photo-1518709414768-a88981a4515d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "Green Valley Homes", category: "Construction", image: "https://images.unsplash.com/photo-1600596542815-60c37c6525fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 4, title: "Iron Rods Distribution", category: "Materials", image: "https://images.unsplash.com/photo-1535063404120-40ceb47fe05f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 5, title: "Modern Office Complex", category: "Construction", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 6, title: "Concrete Blocks Batch", category: "Materials", image: "https://images.unsplash.com/photo-1590074219150-e18e4726cd55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

const categories = ["All", "Construction", "Materials"];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold text-dark">Our Work & Supplies</h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">Explore some of our successfully delivered projects and material supplies across the region.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat 
                ? "bg-secondary text-white shadow-lg scale-105" 
                : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-xl overflow-hidden shadow-md cursor-pointer h-72"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-secondary font-medium text-sm mb-1">{project.category}</span>
                  <div className="flex justify-between items-end">
                    <h3 className="text-white text-xl font-bold font-heading">{project.title}</h3>
                    <div className="bg-white text-dark p-2 rounded-full hover:bg-secondary hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-12">
            <button className="text-primary font-semibold border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors">
                View All Projects
            </button>
        </div>
      </div>
    </section>
  );
};