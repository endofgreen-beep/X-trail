import React from 'react';
import { 
  Palette, 
  Settings, 
  Layers, 
  ShieldCheck, 
  Anchor, 
  Circle,
  MousePointer2, 
  Droplets, 
  ArrowUpToLine, 
  Wrench 
} from 'lucide-react';
import { FadeIn } from './FadeIn';
import { Feature } from '../types';

const featuresList: Feature[] = [
  { title: "Эксклюзивный дизайн", icon: Palette },
  { title: "Регулируемые ложементы под любую модель", icon: Settings },
  { title: "Палуба из качественного искусственного тика", icon: Layers },
  { title: "Усиленная рама с порошковым покрытием", icon: ShieldCheck },
  { title: "Мощная лебёдка 800кг", icon: Anchor },
  { title: "Большие низкопрофильные колеса", icon: Circle },
  { title: "3 точки фиксации гидроцикла", icon: MousePointer2 },
  { title: "Влагозащищенная диодная оптика", icon: Droplets },
  { title: "Складное опорное колесо", icon: ArrowUpToLine },
  { title: "Нержавеющий крепёж", icon: Wrench },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-24 bg-black overflow-hidden">
      {/* 
        Parallax Implementation:
        Using a div with backgroundImage instead of img tag.
        bg-scroll on mobile (smoothness), md:bg-fixed on desktop (parallax).
      */}
      <div className="absolute inset-0 z-0">
        <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed opacity-50"
            style={{ backgroundImage: "url('https://iili.io/frsFtee.jpg')" }}
        ></div>
         {/* Overlay: Black, 5% opacity as requested */}
         <div className="absolute inset-0 bg-black/5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn>
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">Почему именно X-Trailer?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Совершенство в каждой детали конструкции.
            </p>
            </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <FadeIn key={index} delay={index * 50}>
                <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex items-start gap-4 hover:-translate-y-1">
                <div className="text-accent p-2 bg-gray-100 rounded-lg">
                    <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                    <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                </div>
                </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};