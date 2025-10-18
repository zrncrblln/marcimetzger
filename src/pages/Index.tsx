import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Founder } from '@/components/Founder';
import { FeaturedProperties } from '@/components/FeaturedProperties';
import { SearchListings } from '@/components/SearchListings';
import { Gallery } from '@/components/Gallery';
import { Services } from '@/components/Services';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Founder />
        <FeaturedProperties />
        <SearchListings />
        <Gallery />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
