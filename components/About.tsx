import React from 'react';
import { FadeIn } from './FadeIn';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_55%] gap-12 lg:gap-24 items-center">
          
          <div className="order-1 lg:order-1">
            <FadeIn delay={200}>
                <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">Философия</h2>
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
                Есть разница между «перевезти» и «доставить с достоинством».
                </h3>
            </FadeIn>
            
            <FadeIn delay={400}>
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
                    <p>
                        Наши прицепы — это место, где инженерия встречается с искусством, создавая безупречный ансамбль из вашего автомобиля, гидроцикла и самого прицепа.
                    </p>
                    <p>
                        Это — три элемента одного стиля, объединенные безупречной эстетикой и функциональностью — ведь путь к воде должен быть таким же прекрасным, как и сама вода. Создадим эту красоту вместе.
                    </p>
                </div>
            </FadeIn>
          </div>

          <div className="order-2 lg:order-2 lg:-mr-24 lg:w-[110%]">
             <FadeIn>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                    <img 
                        src="https://iili.io/friOPWP.jpg"
                        alt="Деталь конструкции" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                    />
                </div>
             </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};