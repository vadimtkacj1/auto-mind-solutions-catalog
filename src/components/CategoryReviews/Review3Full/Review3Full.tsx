import { FaStar, FaHeart } from 'react-icons/fa';

export function Review3Full() {
  const reviews = [
    {
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600",
      name: "אלון ישראלי",
      role: "מנכ״ל חברת טכנולוגיה",
      text: "שירות יוצא דופן ותוצאות מדהימות. ממליץ בחום לכל עסק!",
      rating: 5
    },
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600",
      name: "נועה כהן",
      role: "מנהלת שיווק",
      text: "פלטפורמה משנה משחק ששינתה לחלוטין את תהליכי העבודה שלנו.",
      rating: 5
    },
    {
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600",
      name: "דני לוי",
      role: "מייסד ויזם",
      text: "ההשקעה הטובה ביותר שעשינו בתשתית העסקית שלנו.",
      rating: 5
    }
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-indigo-100"
          >
            <div className="p-8">
              <div className="flex items-center gap-5 mb-6">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-20 h-20 rounded-full object-cover ring-4 ring-indigo-200"
                />
                <div>
                  <h3 className="font-bold text-xl text-gray-900">{review.name}</h3>
                  <p className="text-base text-indigo-600 mt-1">{review.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400 text-2xl" />
                ))}
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                "{review.text}"
              </p>
              <div className="flex items-center gap-2 text-gray-500 pt-4 border-t border-gray-100">
                <FaHeart className="text-red-400" />
                <span className="text-sm">מומלץ בחום</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
