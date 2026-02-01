import { useState } from 'react';

function FAQ2() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "איך תהליך הרכישה עובד?",
      answer: "הרכישה פשוטה - בוחרים מוצרים, מוסיפים לעגלה, ממלאים פרטי משלוח ובוחרים אמצעי תשלום. אפשר לשמור פרטים לקניות עתידיות ולעקוב אחר ההזמנה מרגע הרכישה ועד המשלוח."
    },
    {
      question: "כמה זמן לוקח המשלוח?",
      answer: "משלוח סטנדרטי לוקח 3-5 ימי עסקים. יש גם אפשרות למשלוח מהיר תוך 24-48 שעות. משלוחים לאזורים מרוחקים עשויים לקחת יום נוסף."
    },
    {
      question: "מה מדיניות ההחזרות?",
      answer: "ניתן להחזיר מוצרים תוך 14 יום מיום הקבלה. המוצר צריך להיות במצב מקורי עם התווית. אנחנו מעבדים החזרות תוך 5-7 ימי עסקים והכסף חוזר לאמצעי התשלום המקורי."
    },
    {
      question: "האם יש אחריות על המוצרים?",
      answer: "כל המוצרים שלנו מגיעים עם אחריות יצרן. מוצרי אלקטרוניקה בדרך כלל שנה, בגדים חצי שנה, ורהיטים שנתיים. אפשר לרכוש אחריות מורחבת בקופה."
    },
    {
      question: "אפשר לבטל הזמנה?",
      answer: "כן, ניתן לבטל הזמנה עד שהיא יוצאת למשלוח. אם ההזמנה כבר נשלחה, תצטרך להשתמש בתהליך ההחזרה הרגיל. הביטול מתבצע באזור האישי תחת ההזמנות שלי."
    },
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-8" dir="rtl">
      <div className="w-full max-w-4xl">
        <div className="text-right mb-12">
          <p className="text-indigo-600 text-sm font-medium mb-2">שאלות נפוצות</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">מחפשים תשובות?</h2>
          <p className="text-lg text-gray-600">
            כאן תמצאו מענה לשאלות הנפוצות ביותר על המוצרים והשירותים שלנו
          </p>
        </div>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 py-4 cursor-pointer" 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium text-gray-900">
                  {faq.question}
                </h3>
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 18 18" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out flex-shrink-0 mr-4`}
                >
                  <path 
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" 
                    stroke="#1D293D" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </div>
              <p 
                className={`text-sm text-gray-600 transition-all duration-500 ease-in-out max-w-3xl ${
                  openIndex === index 
                    ? "opacity-100 max-h-[300px] translate-y-0 pt-4" 
                    : "opacity-0 max-h-0 -translate-y-2"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            לא מצאתם את מה שחיפשתם?{' '}
            <a href="#" className="text-indigo-600 font-medium hover:underline">
              צרו קשר עם שירות הלקוחות
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ2;
