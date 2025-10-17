import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '90+',
    label: 'Clients Served',
    description: 'in 2021',
  },
  {
    icon: TrendingUp,
    value: '$28.5M',
    label: 'Closed Sales',
    description: 'in 2021',
  },
  {
    icon: Award,
    value: '100%',
    label: 'Commitment',
    description: 'to excellence',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Available',
    description: 'by appointment',
  },
];

export function Stats() {
  return (
    <section className="relative py-32 overflow-hidden bg-black border-y border-white/10">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl text-white tracking-tight">
            Results That Speak For Themselves
          </h2>
          <p className="text-xl text-white/70 mt-6 leading-relaxed">
            Our track record demonstrates our commitment to delivering exceptional 
            results for every client we serve.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Card */}
                <div className="relative p-10 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>
                  
                  {/* Value */}
                  <div className="text-center">
                    <div className="text-5xl text-white mb-3">
                      {stat.value}
                    </div>
                    <div className="text-lg text-white/90 mb-2">
                      {stat.label}
                    </div>
                    <p className="text-sm text-white/60">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
