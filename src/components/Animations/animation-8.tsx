import { useState } from 'react';

export function Animation8() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400",
    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=400",
    "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?q=80&w=400",
    "https://images.unsplash.com/photo-1618004652321-13a63e576b80?q=80&w=400"
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold text-white text-center mb-16">הגלריה שלנו</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative overflow-hidden rounded-2xl cursor-pointer group"
              style={{
                height: '300px'
              }}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  hoveredIndex === index
                    ? 'scale-125 rotate-3'
                    : hoveredIndex !== null
                    ? 'scale-90 blur-sm'
                    : 'scale-100'
                }`}
              />
              
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-70' : 'opacity-0'
                }`}
              >
                <div className="absolute bottom-4 right-4 text-white">
                  <p className="font-bold text-xl">פרויקט {index + 1}</p>
                  <p className="text-sm opacity-90">לחץ לצפייה מלאה</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
