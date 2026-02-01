import { CategoryReviewProps } from '../CategoryReview.types';
import { FaStar, FaCheckCircle } from 'react-icons/fa';

export function Review2Preview({ className = '' }: CategoryReviewProps) {
  const testimonials = [
    {
      text: "כלי מדהים שחסך לנו המון זמן ומאפשר לנו ליצור דברים שלא חשבנו שאפשריים. שילוב מושלם של פשטות ועוצמה.",
      author: "יוסי כהן",
      role: "מעצב מוצר",
      rating: 5,
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150"
    },
    {
      text: "ההחלטה הטובה ביותר שקיבלנו השנה. הפרודוקטיביות עלתה פי 10 והצוות מאוד מרוצה מהשירות.",
      author: "מיכל אברהם",
      role: "ראש צוות פיתוח",
      rating: 5,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150"
    }
  ];

  return (
    <div className={`w-full h-full flex items-center justify-center bg-gray-50 ${className}`}>
      <div className="mx-auto w-full max-w-5xl space-y-6 scale-[0.5] px-4">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
          >
            <div className="flex items-start gap-6">
              <img src={item.img} alt={item.author} className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(item.rating)].map((_, idx) => (
                    <FaStar key={idx} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-gray-900">{item.author}</p>
                  <FaCheckCircle className="text-blue-500" />
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{item.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
