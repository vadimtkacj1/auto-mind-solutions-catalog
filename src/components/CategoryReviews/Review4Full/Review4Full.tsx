import { FaStar, FaQuoteRight } from 'react-icons/fa';

export function Review4Full() {
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
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-8">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-purple-200"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(item.rating)].map((_, idx) => (
                <FaStar key={idx} className="text-yellow-400 text-2xl" />
              ))}
            </div>
            <p className="text-gray-800 text-xl leading-relaxed mb-8">
              "{item.text}"
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-purple-100">
              <div className="flex items-center gap-5">
                <img
                  src={item.img}
                  alt={item.author}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-purple-300"
                />
                <div>
                  <p className="font-bold text-xl text-gray-900">{item.author}</p>
                  <p className="text-base text-purple-600 mt-1">{item.role}</p>
                </div>
              </div>
              <FaQuoteRight className="text-purple-300 text-4xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
