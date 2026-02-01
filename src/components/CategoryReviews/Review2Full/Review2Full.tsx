import { FaStar, FaCheckCircle } from 'react-icons/fa';

export function Review2Full() {
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
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="mx-auto w-full max-w-5xl space-y-8">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 border border-gray-100"
          >
            <div className="flex items-start gap-8">
              <img src={item.img} alt={item.author} className="w-20 h-20 rounded-full object-cover flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(item.rating)].map((_, idx) => (
                    <FaStar key={idx} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                <p className="text-gray-700 text-xl mb-6 leading-relaxed">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-3">
                  <p className="font-bold text-gray-900 text-lg">{item.author}</p>
                  <FaCheckCircle className="text-blue-500 text-lg" />
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600 text-base">{item.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
