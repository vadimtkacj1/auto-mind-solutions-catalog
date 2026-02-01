import { CategoryReviewProps } from '../CategoryReview.types';
import { FaStar } from 'react-icons/fa';

export function Review6Preview({ className = '' }: CategoryReviewProps) {
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
    <div className={`w-full h-full flex items-center justify-center bg-white ${className}`}>
      <div className="columns-3 gap-4 max-w-6xl scale-[0.45] px-4">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="break-inside-avoid mb-6 bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
            style={{
              height: i === 0 ? '320px' : i === 1 ? '220px' : '280px'
            }}
          >
            <div className="flex gap-1 mb-3">
              {[...Array(review.rating)].map((_, idx) => (
                <FaStar key={idx} className="text-purple-500 text-xl" />
              ))}
            </div>
            <p className="text-gray-800 mb-4 leading-relaxed">
              "{review.text}"
            </p>
            <div className="mt-auto pt-4 border-t border-purple-200">
              <p className="font-bold text-gray-900">{review.author}</p>
              <p className="text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text font-semibold">
                {review.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
