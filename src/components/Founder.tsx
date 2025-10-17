import marciImage from '@/assets/marci-portrait.jpg';
import { Button } from '@/components/ui/button';

export const Founder = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="founder" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl opacity-50" />
              <img
                src={marciImage}
                alt="Marci Metzger - Founder and Professional Real Estate Agent"
                className="relative rounded-sm w-full h-auto shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">
                Meet the Founder
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Marci Metzger
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Pahrump Realtor | The Ridge Realty Group
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                With over a decade of experience in Nevada's dynamic real estate market, Marci Metzger
                has established herself as one of Pahrump's most trusted and successful realtors.
              </p>
              <p>
                As the founder and lead agent at The Ridge Realty Group, Marci brings an unparalleled
                combination of local market expertise, negotiation skills, and genuine dedication to
                helping clients achieve their real estate dreams.
              </p>
              <p>
                Whether you're searching for a luxury golf course property, a family home with mountain
                views, or a smart investment opportunity, Marci's personalized approach ensures that
                every client receives exceptional service tailored to their unique needs.
              </p>
              <p className="font-semibold text-foreground">
                "My mission is simple: to make your real estate journey smooth, successful, and
                rewarding. Your goals are my priority."
              </p>
            </div>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold mt-4"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
