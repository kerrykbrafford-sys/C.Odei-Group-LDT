import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, Ruler, ShoppingCart } from 'lucide-react';
import { Button } from './Button';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  specs: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Iron Rods",
    image: "https://media.istockphoto.com/id/1063784898/photo/building-armature-steel-bars-stack-on-white-background.jpg?s=612x612&w=0&k=20&c=fW1lo902dN0Oe_H3iSHKhuM9kS5pUOFJrO6Fp-EjH8Y=",
    description: "High-quality steel reinforcement bars engineered for maximum structural integrity. Our iron rods are resistant to corrosion and provide superior tensile strength, making them ideal for all types of concrete reinforcement in residential and commercial construction.",
    specs: ["1/2 inch", "5/8 inch", "3/8 inch", "5/16 inch"]
  },
  {
    id: 2,
    name: "Iron Nails",
    image: "https://t3.ftcdn.net/jpg/03/16/62/82/360_F_316628238_3HPXckMN0cnrrM2sajadXPewAytcW6gP.jpg",
    description: "Premium quality construction nails designed for superior holding power and durability. Whether for wood framing, masonry work, or roofing, our selection of nails ensures your structures hold together through any condition.",
    specs: [
      "Common Iron Wire Nails",
      "Concrete/Masonry Nails",
      "Galvanized Roofing Nails",
      "Double-Headed Skirting Nails"
    ]
  },
  {
    id: 3,
    name: "Cement",
    image: "https://www.ghacem.com/sites/default/files/2023-11/Screenshot%202023-11-10%20at%205.50.54%E2%80%AFPM.png",
    description: "We supply top-grade cement brands essential for any sturdy construction. Available in bulk for commercial projects or smaller quantities for residential renovations, ensuring high compressive strength and durability.",
    specs: [
      "Ghacem",
      "Dzata",
      "Supacem"
    ]
  },
  {
    id: 4,
    name: "Binding Wires",
    image: "https://www.jskcorp.co.in/wp-content/uploads/2019/08/binding-wires.jpg",
    description: "Essential for tying reinforcement bars and general construction use. Our binding wires offer excellent flexibility and tensile strength, ensuring secure knots and solid structural connections for your concrete framework.",
    specs: [
      "Black Annealed Binding Wire",
      "Galvanized Binding Wire",
      "PVC Coated Binding Wire"
    ]
  },
  {
    id: 5,
    name: "Cement Blocks",
    image: "https://media.istockphoto.com/id/1435155757/photo/pallet-of-concrete-cinder-blocks-grey-uniformed-brick-shapes-building-material-new-for-use-on.jpg?s=612x612&w=0&k=20&c=KbVZUrd3_WzwdWlfaglOAoqCp7enBGsvwJjQrbQnXYA=",
    description: "High-density concrete blocks manufactured for superior load-bearing capacity and durability. Perfect for foundation walls, partitions, and structural masonry, ensuring long-lasting stability for your building projects.",
    specs: [
      "5-Inch Blocks",
      "6-Inch Blocks",
      "9-Inch Blocks"
    ]
  }
];

export const ProductShowcase: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products-showcase" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-widest text-sm"
          >
            Our Catalog
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold text-dark mt-2"
          >
            Premium Building Materials
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-secondary mx-auto mt-4"
          />
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              layoutId={`product-card-${product.id}`}
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div layoutId={`product-image-${product.id}`} className="h-64 overflow-hidden relative bg-gray-100">
                 <div className="absolute inset-0 bg-dark/10 group-hover:bg-dark/0 transition-colors z-10" />
                 <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 
                 {/* Hover Badge */}
                 <div className="absolute bottom-4 right-4 z-20 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <ArrowRight className="w-5 h-5 text-primary" />
                 </div>
              </motion.div>
              
              <div className="p-6">
                <motion.h3 layoutId={`product-title-${product.id}`} className="text-2xl font-heading font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </motion.h3>
                <p className="text-gray-500 line-clamp-2 text-sm mb-4">{product.description}</p>
                
                <div className="flex flex-wrap gap-2">
                    {product.specs.slice(0, 3).map((spec, i) => (
                        <span key={i} className="text-xs font-medium bg-light text-secondary px-2 py-1 rounded border border-orange-100">
                            {spec}
                        </span>
                    ))}
                    {product.specs.length > 3 && (
                        <span className="text-xs font-medium bg-gray-100 text-gray-500 px-2 py-1 rounded">
                            +{product.specs.length - 3} more
                        </span>
                    )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
               {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-dark/80 backdrop-blur-sm"
              />

              {/* Modal Content */}
              <motion.div
                layoutId={`product-card-${selectedProduct.id}`}
                className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden relative z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-[600px]"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 z-50 bg-white/80 hover:bg-white p-2 rounded-full transition-colors backdrop-blur-sm shadow-sm"
                >
                  <X className="w-6 h-6 text-dark" />
                </button>

                {/* Left: Image */}
                <motion.div 
                    layoutId={`product-image-${selectedProduct.id}`}
                    className="w-full md:w-1/2 h-64 md:h-auto relative bg-gray-100"
                >
                   <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                </motion.div>

                {/* Right: Details */}
                <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto">
                   <div className="mb-auto">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Product Details</span>
                        <motion.h2 layoutId={`product-title-${selectedProduct.id}`} className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">
                            {selectedProduct.name}
                        </motion.h2>
                        
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed border-l-4 border-primary pl-4">
                            {selectedProduct.description}
                        </p>
                        
                        <div className="mb-8 bg-light p-6 rounded-xl border border-orange-100">
                            <h4 className="font-bold text-dark flex items-center gap-2 mb-4 text-lg">
                                <Ruler className="w-5 h-5 text-primary" />
                                Available Specifications
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                                {selectedProduct.specs.map((spec, idx) => (
                                    <div key={idx} className="flex items-center space-x-2 bg-white p-3 rounded shadow-sm">
                                        <Check className="w-4 h-4 text-primary" />
                                        <span className="font-medium text-dark">{spec}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                   </div>

                   <div className="pt-6 border-t border-gray-100 mt-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button fullWidth onClick={() => alert("Order placed!")} className="flex items-center justify-center gap-2">
                                <ShoppingCart className="w-5 h-5" />
                                Place Order
                            </Button>
                            <Button fullWidth variant="white" onClick={() => setSelectedProduct(null)}>
                                Close Details
                            </Button>
                        </div>
                   </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};