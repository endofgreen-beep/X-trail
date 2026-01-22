import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

// Structure: thumb for the grid (fast load), full for the lightbox (high quality)
const images = [
  { thumb: "https://iili.io/frs1awu.md.jpg", full: "https://iili.io/frs1awu.jpg" },
  { thumb: "https://iili.io/frs11Mx.md.jpg", full: "https://iili.io/frs11Mx.jpg" },
  { thumb: "https://iili.io/frs1MFV.md.jpg", full: "https://iili.io/frs1MFV.jpg" },
  { thumb: "https://iili.io/frs1cZb.md.jpg", full: "https://iili.io/frs1cZb.jpg" },
  { thumb: "https://iili.io/frs1gSI.md.jpg", full: "https://iili.io/frs1gSI.jpg" },
  { thumb: "https://iili.io/frs1its.md.jpg", full: "https://iili.io/frs1its.jpg" },
  { thumb: "https://iili.io/frs1ZP4.md.jpg", full: "https://iili.io/frs1ZP4.jpg" },
  { thumb: "https://iili.io/frs1bl2.md.jpg", full: "https://iili.io/frs1bl2.jpg" },
  { thumb: "https://iili.io/frs1mSS.md.jpg", full: "https://iili.io/frs1mSS.jpg" },
  { thumb: "https://iili.io/frs1yH7.md.jpg", full: "https://iili.io/frs1yH7.jpg" },
  { thumb: "https://iili.io/frsE9R9.md.jpg", full: "https://iili.io/frsE9R9.jpg" }
];

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  const getGridClass = (index: number) => {
    if (index === 3) return 'md:col-span-2';
    if (index === 6) return 'md:col-span-2';
    if (index === 10) return 'md:col-span-3';
    return '';
  };

  return (
    <section id="gallery" className="relative py-24 bg-gray-900 overflow-hidden">
      {/* 
        Clean dark background without heavy image
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-12 text-center">Галерея</h2>
        </FadeIn>

        {/* Masonry-ish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {images.map((img, index) => (
            <FadeIn key={index} delay={index * 50} className={`relative group overflow-hidden rounded-xl cursor-pointer ${getGridClass(index)}`}>
               <img
                  // Use full resolution for the last image (index 10) because it spans the full width.
                  // This prevents blurriness on large screens.
                  src={index === 10 ? img.full : img.thumb} 
                  alt={`X-Trailer view ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onClick={() => openLightbox(index)}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    // Fallback to thumbnail if full res fails (relevant for index 10)
                    e.currentTarget.src = img.thumb;
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-50 p-2"
            onClick={prevImage}
          >
            <ChevronLeft size={48} />
          </button>

          <div className="relative w-full h-full flex items-center justify-center">
            <img
                src={images[selectedImage].full} // Load full version only when needed
                alt="Full view"
                className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl animate-in fade-in duration-300"
                onClick={(e) => e.stopPropagation()} 
                onError={(e) => {
                    // Critical fix: If full image fails to load, fallback to the thumbnail
                    // This ensures the user sees something instead of a broken image
                    const target = e.currentTarget;
                    const fallback = images[selectedImage].thumb;
                    if (target.src !== fallback) {
                        target.src = fallback;
                    }
                }}
            />
          </div>

          <button
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-50 p-2"
            onClick={nextImage}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
};