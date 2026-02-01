import { useState } from 'react';

export default function Accordion5() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    { title: "סעיף ראשון", text: "פרטים נוספים" },
    { title: "סעיף שני", text: "פרטים נוספים" },
    { title: "סעיף שלישי", text: "פרטים נוספים" },
    { title: "סעיף רביעי", text: "פרטים נוספים" },
    { title: "סעיף חמישי", text: "פרטים נוספים" }
  ];

  return (
    <div className="w-full min-h-screen bg-zinc-100 p-8">
      <div className="max-w-3xl mx-auto py-12">
        <h2 className="text-right text-3xl font-bold mb-2">מידע נוסף</h2>
        <p className="text-right text-gray-600 mb-10">כל מה שצריך לדעת</p>

        <div className="bg-white rounded-sm">
          {items.map((item, index) => (
            <div key={index} className="border-b border-gray-200 last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-right flex justify-between items-center"
              >
                <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center text-xs">
                  {openIndex === index ? '−' : '+'}
                </div>
                <span className="font-medium text-lg">{item.title}</span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pr-14 text-gray-600 text-right text-sm">
                  {item.text}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
