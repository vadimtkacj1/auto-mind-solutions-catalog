import { useState } from 'react';

function FAQ6() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days, depending on your location. Express shipping options are available at checkout for 1-2 business day delivery.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. For enterprise customers, we also offer invoicing options.',
    },
    {
      question: 'Can I change or cancel my order?',
      answer: 'You can modify or cancel your order within 1 hour of placing it. After this window, please contact our customer support team who will assist you with any changes.',
    },
    {
      question: 'Do you ship internationally?',
      answer: "Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days. Additional customs fees may apply depending on your country's import regulations.",
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Products must be in original condition with tags attached. Some specialty items may have different return terms, which will be noted on the product page.',
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Questions?</h2>
        <p className="text-gray-600 mb-12">
          Everything you need to know about shipping and orders.
        </p>

        <div className="space-y-1">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-5 flex items-start justify-between text-left group"
              >
                <span className="text-lg pr-6 group-hover:text-gray-600">{item.question}</span>
                <span className="text-2xl text-gray-400 leading-none pt-1 flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div className="pb-6 pr-12">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            Still have questions? <a href="#" className="text-blue-600 hover:text-blue-700">Get in touch</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQ6;
