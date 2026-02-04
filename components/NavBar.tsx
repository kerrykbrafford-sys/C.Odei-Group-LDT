import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Home } from 'lucide-react';
import { Button } from './Button';
import { NavItem } from '../types';

interface NavBarProps {
  onOpenContact: () => void;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Construction', href: '#construction' },
  { label: 'Materials', href: '#products-showcase' }, // Updated link
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const NavBar: React.FC<NavBarProps> = ({ onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (item.label === 'Contact') {
      e.preventDefault();
      onOpenContact();
      setIsOpen(false);
    } else {
        setIsOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <div className="flex flex-col">
                <div className="flex items-center font-heading font-bold text-3xl tracking-tight leading-none">
                    <span className="text-secondary">C.</span>
                    <div className="relative flex items-center justify-center w-8 h-8 mx-1">
                        <Home className="w-8 h-8 text-primary absolute bottom-0.5" strokeWidth={2.5} />
                    </div>
                    <span className="text-primary">DEI</span>
                </div>
                <span className="text-[10px] tracking-[0.2em] text-secondary font-bold uppercase pl-1">Group Limited</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-gray-700 font-medium hover:text-primary transition-colors text-sm uppercase tracking-wide cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button size="md" className="group" onClick={onOpenContact}>
              Get Quote
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-5 duration-300">
             {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-gray-700 font-medium hover:text-primary transition-colors py-2 border-b border-gray-100 last:border-0"
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.label}
              </a>
            ))}
            <Button fullWidth onClick={() => {
                onOpenContact();
                setIsOpen(false);
            }}>Get Quote</Button>
          </div>
        )}
      </div>
    </header>
  );
};