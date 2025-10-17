export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="text-xl text-white tracking-tight">
              Marci Metzger Homes
            </div>
            <p className="text-white/70 max-w-md leading-relaxed">
              Your trusted real estate partner in Pahrump, Nevada. 
              Delivering excellence with a commitment to exceptional client service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm text-white mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('about');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('services');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm text-white mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>3190 HW-160, Suite F</li>
              <li>Pahrump, NV 89048</li>
              <li className="pt-2 text-white">Daily: 8:00 AM – 7:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Marci Metzger Homes. All rights reserved.
            </p>
            <div className="flex gap-8">
              <button className="text-sm text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-sm text-white/60 hover:text-white transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
