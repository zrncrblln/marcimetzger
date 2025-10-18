import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  {
    id: 1,
    src: gallery1,
    title: "Mountain Falls Golf Club",
    category: "Exterior",
  },
  { id: 2, src: gallery2, title: "Ailanto Ave", category: "Exterior" },
  {
    id: 3,
    src: gallery3,
    title: "Daisy Ln, Palm Desert",
    category: "Exterior",
  },
  { id: 4, src: gallery4, title: "Adkisson St", category: "Exterior" },
  {
    id: 5,
    src: gallery5,
    title: "Hawes Crossing",
    category: "Exterior",
  },
  {
    id: 6,
    src: gallery6,
    title: "Beacon Ridge Dr",
    category: "Exterior",
  },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">
            Visual Inspiration
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Photo Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore stunning interiors and exteriors from our exclusive Pahrump
            properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-sm cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-sm text-primary font-medium mb-1">
                    {image.category}
                  </p>
                  <h3 className="text-xl font-bold text-foreground">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl max-h-[90vh]">
              <button
                className="absolute -top-12 right-0 text-foreground hover:text-primary text-4xl font-light"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <img
                src={galleryImages.find((img) => img.id === selectedImage)?.src}
                alt={
                  galleryImages.find((img) => img.id === selectedImage)?.title
                }
                className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
