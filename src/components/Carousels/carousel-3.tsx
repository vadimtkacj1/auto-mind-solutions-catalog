import React, { useState } from 'react';

interface Carousel3Props {
  title?: string;
  items?: Array<{
    id: number;
    icon: string;
    title: string;
    description: string;
    stats: string;
    color: string;
  }>;
  className?: string;
}

export default function Carousel3({
  title = 'השירותים שלנו',
  items = [
    {
      id: 1,
      icon: '🎨',
      title: 'עיצוב UI/UX',
      description: 'עיצוב ממשקים מודרניים ואינטואיטיביים המספקים חוויית משתמש מעולה',
      stats: '200+ פרויקטים',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      icon: '💻',
      title: 'פיתוח אתרים',
      description: 'פיתוח אתרים מתקדמים עם טכנולוגיות חדישות וביצועים מעולים',
      stats: '150+ אתרים',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      icon: '📱',
      title: 'אפליקציות מובייל',
      description: 'אפליקציות מובייל חכמות ומהירות עבור iOS ו-Android',
      stats: '100+ אפליקציות',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 4,
      icon: '🚀',
      title: 'אופטימיזציה',
      description: 'שיפור ביצועים, מהירות טעינה ו-SEO לתוצאות מקסימליות',
      stats: '300+ אתרים',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      id: 5,
      icon: '🛡️',
      title: 'אבטחת מידע',
      description: 'הגנה מקסימלית על המידע והנתונים של העסק שלך',
      stats: '99.9% אמינות',
      color: 'from-violet-500 to-purple-500',
    },
  ],
  className = '',
}: Carousel3Props = {}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 ${className}`} dir="rtl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          {title}
        </h2>

        <div className="relative">
          {/* Cards Container */}
          <div className="flex items-center justify-center gap-4 md:gap-6 h-[450px] perspective-1000">
            {items.map((item, index) => {
              const offset = index - activeIndex;
              const absOffset = Math.abs(offset);
              
              // Calculate position and scale
              const isCenter = offset === 0;
              const scale = isCenter ? 1 : 0.8 - absOffset * 0.1;
              const translateX = offset * 320;
              const opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.3;
              const zIndex = 10 - absOffset;

              return (
                <div
                  key={item.id}
                  className="absolute transition-all duration-500 ease-out cursor-pointer"
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale}) rotateY(${offset * 10}deg)`,
                    opacity,
                    zIndex,
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div
                    className={`w-80 h-96 rounded-3xl shadow-2xl p-8 bg-gradient-to-br ${item.color} text-white ${
                      isCenter ? 'ring-4 ring-white/50' : ''
                    }`}
                  >
                    <div className="text-6xl mb-6">{item.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-white/90 text-base leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-center">
                        <div className="font-bold text-lg">{item.stats}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white text-xl transition-all hover:scale-110"
            aria-label="Previous"
          >
            →
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white text-xl transition-all hover:scale-110"
            aria-label="Next"
          >
            ←
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {items.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? 'w-8 bg-white'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-6 text-white/60 text-sm">
            {activeIndex + 1} / {items.length}
          </div>
        </div>
      </div>
    </section>
  );
}
