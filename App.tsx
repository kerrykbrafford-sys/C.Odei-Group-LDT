import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { FeaturedProduct } from './components/FeaturedProduct';
import { ProductShowcase } from './components/ProductShowcase';
import { Services } from './components/Services';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { OrderForm } from './components/OrderForm';

const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  const openOrder = (productId?: string) => {
    setSelectedProduct(productId || '');
    setIsOrderOpen(true);
  };
  const closeOrder = () => setIsOrderOpen(false);

  return (
    <div className="font-sans text-dark antialiased">
      <TopBar />
      <NavBar onOpenContact={openContact} />
      <main>
        <Hero onOpenContact={openContact} />
        <FeaturedProduct onOpenOrder={() => openOrder('cement-blocks')} />
        <ProductShowcase onOpenOrder={openOrder} />
        <Services />
        <About />
        <Stats />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      <OrderForm isOpen={isOrderOpen} onClose={closeOrder} preSelectedProduct={selectedProduct} />
    </div>
  );
};

export default App;