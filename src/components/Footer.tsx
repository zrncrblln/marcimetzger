import logo1 from "@/assets/logo1.jpg";
import logo2 from "@/assets/logo2.jpg";
import logo3 from "@/assets/logo3.jpg";
import logo4 from "@/assets/logo4.jpg";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left Section - Branding */}
          <div className="text-center md:text-left md:w-1/3">
            <h3 className="text-xl font-bold mb-1">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Marci Metzger
              </span>
            </h3>
            <p className="text-sm text-muted-foreground">
              The Ridge Realty Group
            </p>
          </div>

          {/* Center Section - Sponsors */}
          <div className="flex flex-col items-center text-center md:w-1/3">
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Our Sponsors
            </h4>
            <div className="flex items-center justify-center space-x-4">
              <img
                src={logo1}
                alt="Sponsor 1"
                className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <img
                src={logo2}
                alt="Sponsor 2"
                className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <img
                src={logo3}
                alt="Sponsor 3"
                className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <img
                src={logo4}
                alt="Sponsor 4"
                className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Right Section - Copyright */}
          <div className="text-center md:text-right md:w-1/3">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Marci Metzger. All rights
              reserved.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Pahrump, Nevada Real Estate
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
