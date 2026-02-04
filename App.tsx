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

const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="font-sans text-dark antialiased">
      <TopBar />
      <NavBar onOpenContact={openContact} />
      <main>
        <Hero onOpenContact={openContact} />
        <FeaturedProduct />
        <ProductShowcase />
        <Services />
        <About />
        <Stats />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
};

export default App;