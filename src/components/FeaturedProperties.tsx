import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bed, Bath, Square, MapPin } from 'lucide-react';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

const properties = [
  {
    id: 1,
    image: property1,
    title: 'Modern Desert Retreat',
    price: '$749,000',
    location: 'Mountain Falls Golf Course',
    beds: 4,
    baths: 3,
    sqft: '3,200',
    status: 'For Sale',
  },
  {
    id: 2,
    image: property2,
    title: 'Luxury Pool Estate',
    price: '$895,000',
    location: 'Pahrump Valley',
    beds: 5,
    baths: 4,
    sqft: '4,100',
    status: 'Featured',
  },
  {
    id: 3,
    image: property3,
    title: 'Spacious Ranch Home',
    price: '$525,000',
    location: 'Desert View Estates',
    beds: 3,
    baths: 2.5,
    sqft: '2,800',
    status: 'New Listing',
  },
];

export const FeaturedProperties = () => {
  return (
    <section id="featured" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">
            Discover Your Dream Home
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our hand-picked selection of exceptional homes in Pahrump
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Card
              key={property.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 bg-background border-border hover:border-primary animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {property.status}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{property.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <p className="text-3xl font-bold text-primary">{property.price}</p>
                </div>
                <div className="flex items-center justify-between text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center">
                    <Bed className="w-5 h-5 mr-1" />
                    <span className="text-sm font-medium">{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-5 h-5 mr-1" />
                    <span className="text-sm font-medium">{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-5 h-5 mr-1" />
                    <span className="text-sm font-medium">{property.sqft} sqft</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
