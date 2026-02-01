import { FaCheckCircle } from 'react-icons/fa';

export function Review5Full() {
  const reviews = [
    {
      name: "עמית שפירא",
      role: "מפתח בכיר",
      text: "קוד נקי, תיעוד מעולה, בדיוק מה שהיינו צריכים!",
      img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=150",
      verified: true
    },
    {
      name: "מיכל ברק",
      role: "מנהלת מוצר",
      text: "ייעל את תהליכי העבודה והגביר את הפרודוקטיביות של הצוות.",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150",
      verified: true
    },
    {
      name: "אורי דהן",
      role: "ראש צוות טכנולוגיה",
      text: "איכות יוצאת דופן ותמיכה מעולה מהצוות.",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150",
      verified: true
    }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 py-12 px-8">
      <div className="mx-auto w-full max-w-5xl space-y-8">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="flex items-center gap-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <img
              src={review.img}
              alt={review.name}
              className="w-20 h-20 rounded-full object-cover flex-shrink-0 ring-4 ring-green-100"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <p className="font-bold text-xl text-gray-900">{review.name}</p>
                <span className="text-base text-gray-500">• {review.role}</span>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">{review.text}</p>
            </div>
            {review.verified && (
              <FaCheckCircle className="flex-shrink-0 text-green-500 text-3xl" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
