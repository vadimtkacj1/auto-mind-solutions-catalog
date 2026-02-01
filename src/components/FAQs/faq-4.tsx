import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

function FAQ4() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "באילו אזורים אתם מספקים משלוחים?",
      answer: "אנחנו מספקים משלוחים בכל אזור המרכז, תל אביב והסביבה, הרצליה, רמת גן, גבעתיים, חולון, בת ים וראשון לציון. אזורי משלוח נוספים נפתחים כל הזמן. תוכל לבדוק זמינות באזור שלך בעת ההזמנה."
    },
    {
      question: "כמה זמן לוקח עד שההזמנה מגיעה?",
      answer: "רוב ההזמנות מגיעות תוך 30-45 דקות מרגע האישור. בשעות שיא (12:00-14:00, 19:00-21:00) זמן האספקה עלול להיות עד 60 דקות. באפליקציה תוכל לעקוב אחר השליח בזמן אמת."
    },
    {
      question: "מה דמי המשלוח?",
      answer: "דמי משלוח סטנדרטיים הם 15 ₪. בהזמנה מעל 60 ₪ המשלוח חינם! למנויי מועדון VIP יש משלוח חינם על כל הזמנה + הנחות בלעדיות במסעדות נבחרות."
    },
    {
      question: "האם אפשר לשלם במזומן או רק באשראי?",
      answer: "אפשר לשלם בכרטיס אשראי, ביט, PayPal או במזומן ישירות לשליח. שים לב שבתשלום במזומן לא ניתן לקבל חשבונית אוטומטית, אבל תמיד אפשר לבקש מהמסעדה לספק."
    },
    {
      question: "מה קורה אם האוכל מגיע קר או לא בסדר?",
      answer: "שביעות הרצון שלך חשובה לנו! אם האוכל הגיע לא בסדר, צור קשר עם שירות הלקוחות מיד דרך האפליקציה. אנחנו נטפל בתלונה תוך דקות - נשלח הזמנה חדשה, נחזיר כסף, או נזכה אותך לפי המקרה."
    },
    {
      question: "האם יש הנחות או קופונים?",
      answer: "כן! משתמשים חדשים מקבלים 30% הנחה על ההזמנה הראשונה. אנחנו גם שולחים קופונים שבועיים למנויים, יש הנחות מסעדה של השבוע, והפתעות במועדונים וחגים."
    },
    {
      question: "אפשר להזמין מראש לשעה מסוימת?",
      answer: "בהחלט! באפליקציה יש אפשרות לתזמן הזמנה עד 7 ימים מראש. זה מושלם למסיבות, אירועים עסקיים, או פשוט אם אתה רוצה לוודא שהאוכל יגיע בדיוק בזמן הנכון."
    },
    {
      question: "האם המסעדות כשרות?",
      answer: "יש לנו מסעדות כשרות וגם לא כשרות. בעת החיפוש אפשר לסנן לפי כשרות - יש אפשרויות של כשרות רבנות מקומית, בד״ץ, מהדרין, ומסעדות טבעוניות וצמחוניות. כל מסעדה מציינת במפורש את סוג הכשרות."
    }
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white p-8">
      <div className="w-full max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">שאלות ותשובות</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              מצא תשובות לשאלות הנפוצות ביותר על השירות שלנו. אם יש לך שאלה נוספת, אל תהסס ליצור קשר.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">עדיין יש שאלות?</h3>
            <p className="mb-6 opacity-90">דבר עם אחד ממומחי התמיכה שלנו</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors w-full">
              צור קשר עכשיו
            </button>
          </div>
        </div>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-blue-500 shadow-lg' : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-right hover:bg-gray-50 transition-colors"
              >
                <span className="text-xl font-bold text-gray-900 flex-1">{faq.question}</span>
                <FaChevronDown
                  className={`text-blue-600 text-xl flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 text-lg leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ4;
