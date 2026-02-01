import { useState, useEffect } from 'react';

export function Carousel6() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    {
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200",
      title: "אופנה חדשה",
      subtitle: "קולקציית אביב 2024"
    },
    {
      url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200",
      title: "סגנון ייחודי",
      subtitle: "בגדים מעוצבים במיוחד"
    },
    {
      url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200",
      title: "מבצעים חמים",
      subtitle: "עד 50% הנחה"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-900">
      <div className="relative w-full h-screen overflow-hidden">
        {images.map((image, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ${
              idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-6xl font-bold mb-4">{image.title}</h2>
                <p className="text-2xl mb-8">{image.subtitle}</p>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                  גלה עוד
                </button>
              </div>
            </div>
          </div>
        ))}
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-3 rounded-full transition-all ${
                idx === currentIndex ? 'w-12 bg-white' : 'w-3 bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel6;
