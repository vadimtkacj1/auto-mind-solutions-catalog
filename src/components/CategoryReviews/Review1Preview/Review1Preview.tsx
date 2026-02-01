import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export function Review1Preview() {
  const reviews = [
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600",
      name: "דוד כהן",
      role: "מנהל שיווק דיגיטלי",
      text: "השירות המעולה הזה שינה לנו את כללי המשחק. ממליץ בחום!",
      rating: 5
    },
    {
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600",
      name: "שרה לוי",
      role: "מעצבת ראשית",
      text: "כלי מדהים שחוסך לנו המון זמן ומאפשר יצירתיות מקסימלית.",
      rating: 5
    },
    {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600",
      name: "רונית אברהם",
      role: "מנהלת מוצר",
      text: "שילוב מושלם של פשטות וכוח - בדיוק מה שהצוות שלנו היה צריך.",
      rating: 5
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="flex flex-wrap items-center justify-center gap-6 scale-[0.55]">
        {reviews.map((review, i) => (
          <div key={i} className="max-w-80 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src={review.img}
                alt={review.name}
                className="h-48 w-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400 text-lg" />
                ))}
              </div>
              <FaQuoteLeft className="text-purple-400 text-2xl mb-3" />
              <p className="text-gray-700 mb-5 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-sm text-purple-600">{review.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}