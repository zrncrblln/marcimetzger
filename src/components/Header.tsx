import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-white text-lg tracking-tight">Marci Metzger Homes</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white/70 hover:text-white transition-colors text-sm"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white/70 hover:text-white transition-colors text-sm"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white/70 hover:text-white transition-colors text-sm"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-white hover:bg-white/90 text-black rounded-full px-6 shadow-sm hover:shadow-md transition-all"
              size="sm"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-white hover:bg-white/90 text-black w-full"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
