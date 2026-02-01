import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export function Animation6() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    {
      title: "מנוי חודשי",
      price: "₪99",
      features: ["5 משתמשים", "10GB אחסון", "תמיכה בסיסית", "עדכונים שוטפים"]
    },
    {
      title: "מנוי שנתי",
      price: "₪999",
      features: ["25 משתמשים", "100GB אחסון", "תמיכה מועדפת", "עדכונים מתקדמים"],
      popular: true
    },
    {
      title: "מנוי ארגוני",
      price: "מותאם אישית",
      features: ["משתמשים ללא הגבלה", "אחסון ללא הגבלה", "תמיכה 24/7", "התאמות מיוחדות"]
    }
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl w-full">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">בחר את התוכנית שלך</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              className={`relative bg-white rounded-2xl p-8 shadow-xl transition-all duration-500 cursor-pointer ${
                activeCard === index ? 'scale-110 shadow-2xl z-10' : 'scale-100'
              } ${card.popular ? 'border-4 border-indigo-500' : ''}`}
              style={{
                transform: activeCard === index ? 'translateY(-10px) scale(1.05)' : 'translateY(0) scale(1)',
              }}
            >
              {card.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-6 py-2 rounded-full font-bold text-sm">
                  הכי פופולרי
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
              <div className="text-5xl font-bold text-indigo-600 mb-8">{card.price}</div>
              
              <ul className="space-y-4 mb-8">
                {card.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-lg font-bold transition-all duration-300 ${
                card.popular
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                התחל עכשיו
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
