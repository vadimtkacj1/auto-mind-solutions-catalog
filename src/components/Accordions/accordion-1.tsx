import { useState } from 'react';

export default function Accordion1() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      title: "שאלה ראשונה",
      content: "תוכן התשובה יופיע כאן"
    },
    {
      title: "שאלה שנייה",
      content: "תוכן התשובה יופיע כאן"
    },
    {
      title: "שאלה שלישית",
      content: "תוכן התשובה יופיע כאן"
    },
    {
      title: "שאלה רביעית",
      content: "תוכן התשובה יופיע כאן"
    }
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white p-8">
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-right text-gray-900 mb-8">שאלות נפוצות</h2>

        <div className="space-y-1">
          {items.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 text-right hover:bg-gray-50"
              >
                <span className="text-lg font-medium text-gray-900">{item.title}</span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 text-right">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
