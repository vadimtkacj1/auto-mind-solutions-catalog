import { useState } from 'react';

export function Carousel4() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    {
      title: "מוצר מדהים 1",
      description: "תיאור מפורט של המוצר הראשון עם כל התכונות המיוחדות שלו",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800",
      price: "₪299"
    },
    {
      title: "מוצר מדהים 2",
      description: "תיאור מפורט של המוצר השני עם כל התכונות המיוחדות שלו",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800",
      price: "₪399"
    },
    {
      title: "מוצר מדהים 3",
      description: "תיאור מפורט של המוצר השלישי עם כל התכונות המיוחדות שלו",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800",
      price: "₪499"
    }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 p-8">
      <div className="relative w-full max-w-4xl">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <div className="relative h-96 bg-white">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-500 ${
                  idx === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="flex h-full">
                  <img src={slide.image} alt={slide.title} className="w-1/2 object-cover" />
                  <div className="w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{slide.title}</h3>
                    <p className="text-gray-600 mb-6">{slide.description}</p>
                    <div className="text-4xl font-bold text-gray-900 mb-6">{slide.price}</div>
                    <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                      קנה עכשיו
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <span className="text-gray-800 text-xl">‹</span>
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <span className="text-gray-800 text-xl">›</span>
        </button>
        
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-3 rounded-full transition-all ${
                idx === currentIndex ? 'w-8 bg-gray-900' : 'w-3 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel4;
