import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Call or Visit
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to find your dream home? I'm here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-card border-border hover:border-primary transition-all group">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+17027275555"
                      className="text-muted-foreground hover:text-primary transition-colors text-lg"
                    >
                      (702) 727-5555
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary transition-all group">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:marci@theridgerealtygroup.com"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      marci@theridgerealtygroup.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary transition-all group">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Office Location
                    </h3>
                    <p className="text-muted-foreground">
                      Pahrump, Nevada 89048
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  onClick={() => (window.location.href = "tel:+17027275555")}
                >
                  Call Now to Get Started
                </Button>
              </div>
            </div>

            {/* Map */}
            <div className="animate-fade-in">
              <div className="bg-card border border-border rounded-sm overflow-hidden h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206444.82238267266!2d-116.20944555!3d36.2082635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c92ab1fc3e3f0d%3A0x5c3c7bc0f8c0d7b7!2sPahrump%2C%20NV!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pahrump, Nevada Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
