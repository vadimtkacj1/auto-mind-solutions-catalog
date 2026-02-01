import React, { useState, useEffect } from 'react';

interface Carousel2Props {
  title?: string;
  subtitle?: string;
  items?: Array<{
    id: number;
    title: string;
    description: string;
    badge: string;
    image: string;
  }>;
  autoPlayInterval?: number;
  className?: string;
}

export default function Carousel2({
  title = 'מה הלקוחות שלנו אומרים',
  subtitle = 'אלפי לקוחות מרוצים ברחבי הארץ',
  items = [
    {
      id: 1,
      title: 'שירות מעולה',
      description: 'חוויה פנטסטית! הצוות היה מקצועי, ידידותי ועזר לנו להשיג תוצאות מעבר לציפיות.',
      badge: 'שביעות רצון מלאה',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'תוצאות מדהימות',
      description: 'תוך חודש ראינו שיפור משמעותי במדדים העסקיים. ממליץ בחום לכל מי שרוצה להתקדם.',
      badge: '5 כוכבים',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'מקצועיות ללא פשרות',
      description: 'עבודה מדויקת, מהירה ומקצועית. בדיוק מה שחיפשנו. תודה רבה על השירות!',
      badge: 'מומלץ ביותר',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
    },
  ],
  autoPlayInterval = 5000,
  className = '',
}: Carousel2Props = {}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPaused, items.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className={`bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-20 px-4 ${className}`} dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            {subtitle}
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Container */}
          <div className="relative h-[400px] overflow-hidden">
            {items.map((item, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + items.length) % items.length;
              const isNext = index === (currentIndex + 1) % items.length;

              let transform = 'translateX(100%) scale(0.8)';
              let opacity = 0;
              let zIndex = 1;

              if (isActive) {
                transform = 'translateX(0) scale(1)';
                opacity = 1;
                zIndex = 10;
              } else if (isPrev) {
                transform = 'translateX(-100%) scale(0.8)';
                opacity = 0.3;
                zIndex = 5;
              } else if (isNext) {
                transform = 'translateX(100%) scale(0.8)';
                opacity = 0.3;
                zIndex = 5;
              }

              return (
                <div
                  key={item.id}
                  className="absolute inset-0 transition-all duration-700 ease-in-out"
                  style={{
                    transform,
                    opacity,
                    zIndex,
                  }}
                >
                  <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 h-full flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-purple-200 shadow-lg"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-right">
                      <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                        {item.badge}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="mt-6 flex justify-center md:justify-start gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className="text-yellow-400 text-2xl">
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {items.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`transition-all ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                } rounded-full`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          {!isPaused && (
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-sm text-gray-400 flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              מתחלף אוטומטית
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
