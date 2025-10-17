import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-pahrump.jpg';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful Pahrump Nevada landscape with mountains and golf course"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <p className="text-primary text-sm md:text-base font-medium uppercase tracking-wider mb-4">
          The Ridge Realty Group
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
          Pahrump Realtor
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
          Your trusted partner in finding the perfect home in Nevada's desert paradise
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 rounded-sm font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Call Now
        </Button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => {
          const element = document.getElementById('about');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-foreground/60 hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
};
