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
            <p className="text-sm text-muted-foreground">The Ridge Realty Group</p>
          </div>

          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Marci Metzger. All rights reserved.</p>
            <p className="mt-1">Pahrump, Nevada Real Estate</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
