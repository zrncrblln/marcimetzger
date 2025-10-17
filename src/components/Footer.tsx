import { Instagram, Facebook, Linkedin, Star } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-1">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Marci Metzger
              </span>
            </h3>
            <p className="text-sm text-muted-foreground">
              The Ridge Realty Group
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center space-x-6 md:space-x-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Connect with us on LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Read our Yelp reviews"
            >
              <Star size={24} />
            </a>
          </div>

          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Marci Metzger. All rights
              reserved.
            </p>
            <p className="mt-1">Pahrump, Nevada Real Estate</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
