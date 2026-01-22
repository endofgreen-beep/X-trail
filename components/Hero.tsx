import React from 'react';
import { ArrowDown } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen md:h-[100dvh] min-h-[600px] flex items-start pt-28 md:pt-0 md:items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image - Fixed for Parallax Effect */}
      <div className="fixed inset-0 z-0 w-full h-full">
        {/* 
            LCP Optimization: 
            Added fetchPriority="high" and decoding="sync" to ensure the hero image appears immediately.
        */}
        <img
          src="https://iili.io/fr4heg2.jpg"
          onError={(e) => {
            const target = e.currentTarget;
            // Prevent infinite loops by checking if we already tried the fallback
            if (!target.src.includes('unsplash')) {
                target.src = "https://images.unsplash.com/photo-1566847438217-76e82d383f84?q=80&w=2560&auto=format&fit=crop";
            }
          }}
          alt="Premium Jet Ski Trailer Lifestyle"
          className="w-full h-full object-cover object-center opacity-90"
          {...{ fetchPriority: "high" } as any}
          decoding="sync"
        />
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-black/20 to-black/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:mt-0 md:mb-48 text-white">
        <FadeIn>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 drop-shadow-lg">
            Прицеп, достойный<br />Вашего гидроцикла
            </h1>
        </FadeIn>
        
        <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light font-medium drop-shadow-md">
            Мы создаем эксклюзивные прицепы премиум-класса, которые становятся продолжением вашего стиля.
            </p>
        </FadeIn>

        <FadeIn delay={400}>
            <button
            onClick={scrollToGallery}
            className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
            Смотреть галерею
            </button>
        </FadeIn>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 z-10">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};