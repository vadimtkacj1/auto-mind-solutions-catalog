import { FaStar } from 'react-icons/fa';

export function Review6Full() {
  const reviews = [
    {
      text: "חוויה משנה חיים מתחילה ועד סוף. תשומת הלב לפרטים והמחויבות למצוינות ניכרים בכל היבט. זה הפך לחלק חיוני מהפעילות היומיומית שלנו ואנחנו לא יכולים לדמיין לעבוד בלעדיו.",
      author: "גיא כהן",
      role: "מנהל קריאייטיב",
      rating: 5
    },
    {
      text: "פשוט, אלגנטי ועוצמתי. כל מה שהיינו צריכים ושום דבר מיותר.",
      author: "ליאת אברהם",
      role: "מעצבת חוויית משתמש",
      rating: 5
    },
    {
      text: "תוצאות יוצאות דופן בזמן שיא. התשואה על ההשקעה עלתה על כל התחזיות הראשוניות ממשיכה להרשים את בעלי העניין.",
      author: "אייל לוי",
      role: "אנליסט עסקי",
      rating: 5
    }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center bg-white py-12 px-8">
      <div className="mx-auto columns-1 md:columns-2 lg:columns-3 gap-8 max-w-7xl w-full">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="break-inside-avoid mb-10 bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, idx) => (
                <FaStar key={idx} className="text-purple-500 text-2xl" />
              ))}
            </div>
            <p className="text-gray-800 text-base leading-relaxed mb-6">
              "{review.text}"
            </p>
            <div className="mt-auto pt-6 border-t border-purple-200">
              <p className="font-bold text-lg text-gray-900">{review.author}</p>
              <p className="text-base bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text font-semibold mt-1">
                {review.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
