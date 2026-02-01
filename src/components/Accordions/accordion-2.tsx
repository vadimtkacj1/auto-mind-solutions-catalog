import { useState } from 'react';

export default function Accordion2() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      title: "כותרת אחת",
      content: "כאן יהיה התוכן המלא"
    },
    {
      title: "כותרת שתיים",
      content: "כאן יהיה התוכן המלא"
    },
    {
      title: "כותרת שלוש",
      content: "כאן יהיה התוכן המלא"
    },
    {
      title: "כותרת אַרבע",
      content: "כאן יהיה התוכן המלא"
    }
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-2xl">
        <h2 className="text-4xl font-bold text-right mb-10">מידע</h2>

        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-right"
              >
                <span className="text-base font-semibold">{item.title}</span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-700 text-right border-t border-gray-100">
                  <p className="mt-3">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
