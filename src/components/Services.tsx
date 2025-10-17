import { TrendingUp, Map, Handshake, Search, CreditCard, Home } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Get It SOLD!',
    description: 'We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home',
  },
  {
    icon: Map,
    title: 'Market Expertise',
    description: "Nobody knows the market like we do. Market analysis, upgrades lists, contractors on speed dial, & more!",
  },
  {
    icon: Handshake,
    title: 'Buyer & Seller Support',
    description: "Whether you're getting ready to buy or sell your residence, looking at investment properties, our team ensures you get the best experience possible!",
  },
  {
    icon: Search,
    title: 'Property Search',
    description: 'Large or small, condo or mansion, we can find it and get it at the price that\'s right',
  },
  {
    icon: CreditCard,
    title: 'Financing Solutions',
    description: 'If you have questions about affordability, credit, and loan options, trust us to connect you with the right people',
  },
  {
    icon: Home,
    title: 'Local Community',
    description: 'We live, work, and play in this community',
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm text-white/60 uppercase tracking-widest">Our Services</span>
          <h2 className="text-4xl md:text-5xl text-white mt-6 tracking-tight">
            Complete Real Estate Solutions
          </h2>
          <p className="text-lg text-white/70 mt-6 leading-relaxed">
            From finding your dream home to securing the best financing, we provide 
            comprehensive support throughout your real estate journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                    <Icon className="text-white" size={26} />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
