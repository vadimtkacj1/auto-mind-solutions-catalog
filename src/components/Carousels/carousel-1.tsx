import React, { useState } from 'react';

interface Carousel1Props {
  title?: string;
  items?: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
  }>;
  className?: string;
}

export default function Carousel1({
  title = 'הפרויקטים שלנו',
  items = [
    {
      id: 1,
      title: 'פרויקט חדשני',
      description: 'פתרון טכנולוגי מתקדם המשלב בינה מלאכותית וחוויית משתמש מעולה',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
    {
      id: 2,
      title: 'עיצוב מודרני',
      description: 'ממשק משתמש אלגנטי ואינטואיטיבי עם אנימציות חלקות ונעימות',
      image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop',
    },
    {
      id: 3,
      title: 'פיתוח מהיר',
      description: 'תהליך פיתוח זריז המאפשר השקה מהירה של מוצרים איכוtiים',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    },
    {
      id: 4,
      title: 'תמיכה מלאה',
      description: 'צוות תמיכה זמין 24/7 לסיוע בכל שאלה או בעיה שתתעורר',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
    },
  ],
  className = '',
}: Carousel1Props = {}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <section className={`bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-4 ${className}`} dir="rtl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          {title}
        </h2>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            {items.map((item, index) => {
              const offset = index - currentIndex;
              const isActive = index === currentIndex;
              
              return (
                <div
                  key={item.id}
                  className="absolute inset-0 transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translateX(${offset * 100}%) scale(${isActive ? 1 : 0.8})`,
                    opacity: isActive ? 1 : 0,
                    zIndex: isActive ? 10 : 1,
                  }}
                >
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-200 max-w-2xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white text-2xl transition-all hover:scale-110"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white text-2xl transition-all hover:scale-110"
            aria-label="Next slide"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {items.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-12 bg-blue-500'
                    : 'w-3 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
