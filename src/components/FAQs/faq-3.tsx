import { useState } from 'react';

function FAQ3() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "מה כולל החבילה הבסיסית?",
      answer: "החבילה הבסיסית כוללת גישה למערכת, תמיכה טכנית בימי עסקים, 5GB אחסון, ועדכוני תוכנה שוטפים. מתאימה לעסקים קטנים ויזמים עצמאיים."
    },
    {
      question: "איך משדרגים לחבילה גבוהה יותר?",
      answer: "השדרוג פשוט ונעשה באזור האישי תחת הגדרות חשבון. השינוי נכנס לתוקף מיד והתשלום מחושב יחסית. אין צורך ליצור חשבון חדש."
    },
    {
      question: "האם אפשר לשנות פרטי חיוב?",
      answer: "כן, ניתן לעדכן אמצעי תשלום, כתובת חיוב ופרטי החברה בכל עת דרך הגדרות החשבון. השינויים נשמרים באופן מאובטח ומוצפן."
    },
    {
      question: "מה קורה אם עברתי את הלימיט?",
      answer: "אם עברת את מכסת השימוש, תקבל התראה מראש. אפשר לשדרג את החבילה או לרכוש תוספת חד פעמית. המערכת לא תיחסם באופן פתאומי."
    },
    {
      question: "איך מבטלים מנוי?",
      answer: "ביטול המנוי נעשה דרך הגדרות החשבון בלחיצת כפתור. השירות ימשיך עד תום תקופת החיוב הנוכחית. אפשר להוריד את כל הנתונים לפני הביטול."
    },
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white p-8" dir="rtl">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-start justify-center gap-8">
        <img
          className="max-w-sm w-full rounded-xl h-auto object-cover"
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=830&h=844&auto=format&fit=crop"
          alt="FAQ illustration"
        />
        <div className="flex-1">
          <p className="text-indigo-600 text-sm font-medium">שאלות ותשובות</p>
          <h1 className="text-3xl font-semibold text-gray-900 mt-1">מחפשים מידע?</h1>
          <p className="text-sm text-slate-600 mt-2 pb-4">
            כל המידע שאתם צריכים על החבילות, התשלומים והשירותים שלנו במקום אחד
          </p>
          {faqs.map((faq, index) => (
            <div 
              className="border-b border-slate-200 py-4 cursor-pointer" 
              key={index} 
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
                className={`text-sm text-slate-600 transition-all duration-500 ease-in-out max-w-md ${
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
      </div>
    </div>
  );
}

export default FAQ3;
