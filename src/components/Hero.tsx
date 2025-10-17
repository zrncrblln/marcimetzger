import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-black pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="text-sm text-white/90">Pahrump's Premier Real Estate Team</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white tracking-tight max-w-3xl mx-auto">
              Expert Real Estate Services in Pahrump
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Experience exceptional service with a team that puts clients first. 
              Market leaders dedicated to making your real estate journey seamless.
            </p>

            {/* Stats Inline */}
            <div className="flex flex-wrap items-center justify-center gap-8 py-8">
              <div className="flex items-center gap-2">
                <span className="text-3xl md:text-4xl text-white">90+</span>
                <span className="text-sm text-white/60">Clients<br/>Served</span>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="flex items-center gap-2">
                <span className="text-3xl md:text-4xl text-white">$28.5M</span>
                <span className="text-sm text-white/60">In Closed<br/>Sales</span>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="flex items-center gap-2">
                <span className="text-3xl md:text-4xl text-white">2021</span>
                <span className="text-sm text-white/60">Record<br/>Year</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-white hover:bg-white/90 text-black rounded-full px-8 h-12 shadow-lg hover:shadow-xl transition-all group"
                size="lg"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button
                onClick={() => scrollToSection('services')}
                variant="ghost"
                size="lg"
                className="text-white hover:text-white hover:bg-white/10 h-12 px-8 border border-white/20"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
    </section>
  );
}
