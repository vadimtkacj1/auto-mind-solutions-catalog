import { useState } from 'react';

export default function Accordion3() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    { title: "פריט ראשון", content: "מידע על הפריט" },
    { title: "פריט שני", content: "מידע על הפריט" },
    { title: "פריט שלישי", content: "מידע על הפריט" },
    { title: "פריט רביעי", content: "מידע על הפריט" },
    { title: "פריט חמישי", content: "מידע על הפריט" }
  ];

  return (
    <div className="w-full min-h-screen p-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-right mb-12">
          <h2 className="text-5xl font-bold mb-3">שאלות</h2>
          <p className="text-gray-500">לחץ לפתיחה</p>
        </div>

        <div>
          {items.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 text-right border-b border-gray-300"
              >
                <div className="flex justify-between items-center">
                  <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
                  <span className="text-xl font-medium">{item.title}</span>
                </div>
              </button>

              {openIndex === index && (
                <div className="py-5 text-right text-gray-600 border-b border-gray-200">
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
