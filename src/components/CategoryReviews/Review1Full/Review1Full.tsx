import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export function Review1Full() {
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
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="flex flex-wrap items-center justify-center gap-8 max-w-7xl">
        {reviews.map((review, i) => (
          <div key={i} className="w-[380px] bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src={review.img}
                alt={review.name}
                className="h-64 w-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <FaQuoteLeft className="text-purple-400 text-3xl mb-4" />
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4 pt-5 border-t border-gray-200">
                <img src={review.img} alt={review.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-gray-900 text-lg">{review.name}</p>
                  <p className="text-purple-600">{review.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
