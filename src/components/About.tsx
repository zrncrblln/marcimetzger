import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, TrendingUp, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm text-white/60 uppercase tracking-widest">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-white tracking-tight leading-tight">
                Market Leaders<br/>You Can Trust
              </h2>
            </div>

            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                We helped nearly 90 clients in 2021, and closed 28.5 million in sales. 
                Our success is built on a simple philosophy: our clients deserve our best, 
                and we want to make sure our best is better every year.
              </p>
              <p>
                We live, work, and play in this community. That deep connection gives us 
                unparalleled insight into the local market and a genuine commitment to 
                helping our neighbors find their perfect home.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Award className="text-white" size={22} />
                </div>
                <p className="text-sm text-white/60">Market<br/>Experts</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <TrendingUp className="text-white" size={22} />
                </div>
                <p className="text-sm text-white/60">Proven<br/>Results</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Heart className="text-white" size={22} />
                </div>
                <p className="text-sm text-white/60">Community<br/>First</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <ImageWithFallback
                src="https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwdGVhbSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjA2NjE1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Real estate team"
                className="w-full h-[600px] object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            {/* Floating stat card */}
            <div className="absolute -bottom-8 -left-8 bg-black/90 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="text-5xl text-white mb-2">$28.5M</div>
              <p className="text-white/70">Closed in 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
