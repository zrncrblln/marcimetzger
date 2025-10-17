import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, TrendingUp, Key, Search, Users, FileText } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Property Search',
    description: 'Comprehensive search assistance to find properties that match your exact criteria and lifestyle needs.',
  },
  {
    icon: Home,
    title: 'Luxury Homes',
    description: 'Specialized expertise in high-end properties and golf course communities throughout Pahrump.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Properties',
    description: 'Strategic guidance for investors seeking profitable opportunities in the Nevada real estate market.',
  },
  {
    icon: Key,
    title: 'First-Time Buyers',
    description: 'Patient, educational approach to help first-time buyers navigate the home buying process with confidence.',
  },
  {
    icon: Users,
    title: 'Relocation Services',
    description: 'Comprehensive support for clients relocating to Pahrump, including area tours and community insights.',
  },
  {
    icon: FileText,
    title: 'Market Analysis',
    description: 'Detailed market evaluations and pricing strategies to ensure optimal outcomes for buyers and sellers.',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">
            What I Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 bg-card border-border hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mb-4 w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
