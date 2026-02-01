import { CategoryReviewProps } from '../CategoryReview.types';
import { FaStar, FaHeart } from 'react-icons/fa';

export function Review3Preview({ className = '' }: CategoryReviewProps) {
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
    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 ${className}`}>
      <div className="grid grid-cols-3 gap-4 scale-[0.5]">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-indigo-100 max-w-xs"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-indigo-200"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-indigo-600">{review.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400 text-lg" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "{review.text}"
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <FaHeart className="text-red-400" />
                <span className="text-xs">מומלץ בחום</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
