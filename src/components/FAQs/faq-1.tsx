import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function FAQ1() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "איך פלטפורמת ניהול הפרויקטים שלכם עובדת?",
      answer: "הפלטפורמה שלנו מאפשרת לך לנהל את כל הפרויקטים במקום אחד - מתכנון ראשוני ועד השלמה. תוכל ליצור משימות, להקצות אחריות, לעקוב אחר התקדמות בזמן אמת, ולשתף פעולה עם הצוות דרך כלי עבודה משולבים."
    },
    {
      question: "האם המערכת מתאימה לצוותים מרוחקים?",
      answer: "בהחלט! המערכת תוכננה במיוחד לעבודה מרחוק. היא כוללת ועידות וידאו משולבות, שיתוף מסמכים בזמן אמת, לוח שנה משותף, והתראות חכמות שמתחשבות באזורי זמן שונים של חברי הצוות."
    },
    {
      question: "כמה פרויקטים אפשר לנהל בו זמנית?",
      answer: "בתוכנית הבסיסית ניתן לנהל עד 10 פרויקטים פעילים. בתוכנית המקצועית אין הגבלה על מספר הפרויקטים. כל פרויקט יכול להכיל אלפי משימות ותתי-משימות."
    },
    {
      question: "האם יש אפשרות לייצא דוחות התקדמות?",
      answer: "כן! המערכת מייצרת דוחות מפורטים אוטומטית. תוכל לייצא דוחות בפורמטים שונים - PDF, Excel, או PowerPoint. הדוחות כוללים גרפים, טבלאות, וניתוח התקדמות מול לוח זמנים."
    },
    {
      question: "מה קורה עם הנתונים אם אני מבטל את המנוי?",
      answer: "הנתונים שלך נשארים זמינים למשך 60 יום לאחר הביטול. במהלך תקופה זו תוכל להוריד ולייצא את כל המידע. אנחנו גם מציעים שירות העברה חינמי למערכת אחרת אם תצטרך."
    },
    {
      question: "האם אפשר לשלב עם כלי ניהול אחרים שאנחנו משתמשים בהם?",
      answer: "בהחלט! יש לנו אינטגרציות מובנות עם למעלה מ-200 כלים פופולריים כמו Jira, Asana, Monday, Google Workspace, Microsoft Teams, Slack, GitHub ועוד. אפשר גם ליצור אינטגרציות מותאמות אישית דרך ה-API שלנו."
    },
    {
      question: "איזה אבטחה יש למידע שלנו?",
      answer: "אנחנו נוקטים באמצעי אבטחה מחמירים ביותר - הצפנת SSL 256-bit לכל התקשורת, הצפנת מסד הנתונים, גיבויים יומיים מוצפנים, אימות דו-שלבי, ובדיקות אבטחה חיצוניות רבעוניות. אנחנו עומדים בתקן ISO 27001."
    },
    {
      question: "האם יש גרסה למובייל?",
      answer: "כן! יש לנו אפליקציות מקוריות ל-iOS ו-Android עם כל התכונות של גרסת הדסקטופ. האפליקציות פועלות גם במצב אופליין, והשינויים מסתנכרנים אוטומטית כשיש חיבור לאינטרנט."
    }
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">שאלות נפוצות</h2>
          <p className="text-xl text-gray-600">כל מה שרצית לדעת על השירות שלנו</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-right hover:bg-gray-50 transition-colors"
              >
                <span className="text-xl font-bold text-gray-900 flex-1">{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-blue-600 text-xl flex-shrink-0 ml-4" />
                ) : (
                  <FaChevronDown className="text-gray-400 text-xl flex-shrink-0 ml-4" />
                )}
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 text-lg leading-relaxed">
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

export default FAQ1;
