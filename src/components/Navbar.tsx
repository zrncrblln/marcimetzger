import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Marci Metzger
              </span>
              <span className="block text-xs md:text-sm font-inter font-normal text-muted-foreground mt-1">
                The Ridge Realty Group
              </span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('founder')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('featured')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Properties
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            >
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('founder')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('featured')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Properties
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              >
                Call Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
