import React from 'react';
import { FadeIn } from './FadeIn';

export const Craftsmanship: React.FC = () => {
  return (
    <section id="craftsmanship" className="py-1 bg-white relative z-20 overflow-hidden flex items-center justify-center">
      <div className="w-full overflow-hidden">
         <FadeIn>
            <h2 className="w-full text-center text-[7vw] leading-none font-bold tracking-widest text-gray-900 uppercase select-none whitespace-nowrap px-4 opacity-90">
              X-TRAILER
            </h2>
         </FadeIn>
      </div>
    </section>
  );
};