import { CategoryReviewProps } from '../CategoryReview.types';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

export function Review4Preview({ className = '' }: CategoryReviewProps) {
  const testimonials = [
    {
      text: "הפלטפורמה הזו שינתה לחלוטין את הדרך בה אנחנו מתייחסים לפעילות היומיומית שלנו. הממשק האינטואיטיבי והתכונות החזקות הופכים אותה לכלי חיוני עבור הצוות שלנו.",
      author: "רועי אברהם",
      role: "סמנכ״ל תפעול",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150",
      rating: 5
    },
    {
      text: "ניסיתי פתרונות רבים לאורך השנים, אבל שום דבר לא מתקרב לאפקטיביות והאמינות שחווינו כאן. באמת משנה את כללי המשחק!",
      author: "טל מזרחי",
      role: "מנהלת טכנולוגיות",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150",
      rating: 5
    }
  ];

  return (
    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 ${className}`}>
      <div className="grid grid-cols-2 gap-6 max-w-6xl scale-[0.45]">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-200"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(item.rating)].map((_, idx) => (
                <FaStar key={idx} className="text-yellow-400 text-xl" />
              ))}
            </div>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              "{item.text}"
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-purple-100">
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-purple-300"
                />
                <div>
                  <p className="font-bold text-gray-900">{item.author}</p>
                  <p className="text-sm text-purple-600">{item.role}</p>
                </div>
              </div>
              <FaQuoteRight className="text-purple-300 text-3xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
