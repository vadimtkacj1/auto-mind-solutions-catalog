import { useState } from 'react';

export default function Accordion4() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    { q: "נושא אחד", a: "תשובה כאן" },
    { q: "נושא שני", a: "תשובה כאן" },
    { q: "נושא שלישי", a: "תשובה כאן" },
    { q: "נושא רביעי", a: "תשובה כאן" }
  ];

  return (
    <div className="w-full min-h-screen bg-white p-8 flex items-center">
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-right text-4xl mb-12 font-bold border-b-4 border-black pb-4 inline-block">
          תוכן
        </h2>

        <div className="mt-8 space-y-0">
          {items.map((item, index) => (
            <div key={index} className="border-b border-gray-300 last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-7 px-4 text-right hover:bg-gray-100"
              >
                <span className="font-semibold text-lg block">{item.q}</span>
              </button>

              {openIndex === index && (
                <div className="px-4 pb-7 text-gray-600 text-right">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
