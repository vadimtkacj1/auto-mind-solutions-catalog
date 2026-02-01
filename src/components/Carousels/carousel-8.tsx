import { useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export function Carousel8() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const slides = [
    {
      title: "חדשנות טכנולוגית",
      description: "פתרונות מתקדמים לעסק שלך",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "עיצוב מודרני",
      description: "ממשק משתמש אינטואיטיבי ונוח",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "ביצועים גבוהים",
      description: "מהירות ויציבות ללא פשרות",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "תמיכה 24/7",
      description: "אנחנו כאן בשבילך תמיד",
      color: "from-pink-500 to-rose-600"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-900 p-8">
      <div className="w-full max-w-5xl">
        <div className="relative h-96 rounded-2xl overflow-hidden">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 bg-gradient-to-r ${slide.color} transition-opacity duration-700 ${
                idx === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="h-full flex items-center justify-center text-white text-center p-8">
                <div>
                  <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-2xl opacity-90">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20">
            <div
              className="h-full bg-white transition-all duration-100"
              style={{
                width: `${((currentIndex + 1) / slides.length) * 100}%`
              }}
            />
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            {isPlaying ? <FaPause className="text-gray-800" /> : <FaPlay className="text-gray-800" />}
          </button>
          
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3 rounded-full transition-all ${
                  idx === currentIndex ? 'w-8 bg-white' : 'w-3 bg-white bg-opacity-30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel8;
