import { useState } from 'react';

export function Carousel5() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      text: "המוצר הזה שינה לחלוטין את הדרך בה אני עובד. ממליץ בחום!",
      author: "יוסי כהן",
      role: "מנהל מוצר",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150",
      rating: 5
    },
    {
      text: "שירות לקוחות מעולה ומוצר איכותי. בדיוק מה שחיפשתי!",
      author: "שרה לוי",
      role: "מעצבת UX",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
      rating: 5
    },
    {
      text: "תשואה על השקעה מצוינת. הייתי קונה שוב בלי להסס!",
      author: "דני אברהם",
      role: "יזם",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
      rating: 5
    }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-lg p-10">
          <div className="text-gray-400 text-4xl mb-6">"</div>
          
          <div className="relative h-64 overflow-hidden">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-500 ${
                  idx === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gray-900 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-xl leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'w-8 bg-gray-900' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel5;
