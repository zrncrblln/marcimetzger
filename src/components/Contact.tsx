import { Button } from './ui/button';
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm text-white/60 uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl text-white mt-6 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/70 mt-6 leading-relaxed">
            Contact us today to begin your real estate journey. We're here to help you 
            every step of the way.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Address */}
          <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg text-white mb-2">
                  Our Office
                </h3>
                <p className="text-white/70 leading-relaxed">
                  3190 HW-160, Suite F<br />
                  Pahrump, Nevada 89048<br />
                  United States
                </p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                <Clock className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg text-white mb-2">
                  Office Hours
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Open Daily<br />
                  8:00 AM – 7:00 PM<br />
                  <span className="text-sm text-white/60">Outside hours by appointment</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg text-white mb-2">
                  Get In Touch
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Schedule a consultation<br />
                  to discuss your<br />
                  real estate needs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-black rounded-full px-10 h-14 shadow-lg hover:shadow-xl transition-all group"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
          <p className="text-sm text-white/60 mt-4">
            Available for appointments outside regular office hours
          </p>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
    </section>
  );
}
