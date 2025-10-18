import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

export const SearchListings = () => {
  const [priceRange, setPriceRange] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const handleSearch = () => {
    // In a real application, this would navigate to a search results page
    const searchParams = {
      priceRange,
      propertyType,
      bedrooms,
    };
    console.log("Search params:", searchParams);
    alert(
      "Search functionality will be connected to your MLS listings database"
    );
  };

  return (
    <section
      id="search"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">
            Find Your Perfect Home
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Search Listings
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Use our advanced search to find properties that match your exact
            criteria
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-sm p-8 shadow-xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Price Range */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Price Range
                </label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-300k">Under $300K</SelectItem>
                    <SelectItem value="300k-500k">$300K - $500K</SelectItem>
                    <SelectItem value="500k-750k">$500K - $750K</SelectItem>
                    <SelectItem value="750k-1m">$750K - $1M</SelectItem>
                    <SelectItem value="1m+">Over $1M</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Property Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Property Type
                </label>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single-family">Single Family</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Bedrooms */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Bedrooms
                </label>
                <Select value={bedrooms} onValueChange={setBedrooms}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground opacity-0 md:opacity-100">
                  Search
                </label>
                <Button
                  onClick={handleSearch}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-11 rounded-lg"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            {/* Location Search */}
            <div className="mt-6">
              <label className="text-sm font-medium text-foreground block mb-2">
                Location or Address
              </label>
              <div className="flex gap-4">
                <Input
                  type="text"
                  placeholder="Enter city, neighborhood, or address..."
                  className="flex-1 bg-background"
                />
              </div>
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-8">
            Can't find what you're looking for?{" "}
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary hover:underline font-medium"
            >
              Contact me directly
            </button>{" "}
            for personalized assistance
          </p>
        </div>
      </div>
    </section>
  );
};
