import React, { useState } from 'react';

interface Contact2Props {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function Contact2({
  title = 'בואו נדבר',
  subtitle = 'ספר לנו על הפרויקט שלך',
  className = '',
}: Contact2Props = {}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log('Form submitted:', formData);
      alert('הטופס נשלח בהצלחה!');
      setStep(1);
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        projectType: '',
        message: '',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <section className={`bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-16 px-4 min-h-screen flex items-center ${className}`} dir="rtl">
      <div className="max-w-3xl mx-auto w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {title}
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              {subtitle}
            </p>

            {/* Progress Bar */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                      step >= num
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white scale-110'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {num}
                  </div>
                  {num < 3 && (
                    <div
                      className={`h-1 w-16 mx-2 transition-all ${
                        step > num ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">פרטים אישיים</h3>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="שם מלא *"
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none text-gray-900 text-lg"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="דוא״ל *"
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none text-gray-900 text-lg"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="שם החברה (אופציונלי)"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none text-gray-900 text-lg"
                  />
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">פרטי הפרויקט</h3>
                <div>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none text-gray-900 text-lg"
                  >
                    <option value="">בחר סוג פרויקט *</option>
                    <option value="website">אתר אינטרנט</option>
                    <option value="webapp">אפליקציית ווב</option>
                    <option value="mobile">אפליקציית מובייל</option>
                    <option value="ecommerce">חנות אונליין</option>
                    <option value="other">אחר</option>
                  </select>
                </div>
                <div>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none text-gray-900 text-lg"
                  >
                    <option value="">תקציב משוער *</option>
                    <option value="5-10k">₪5,000 - ₪10,000</option>
                    <option value="10-25k">₪10,000 - ₪25,000</option>
                    <option value="25-50k">₪25,000 - ₪50,000</option>
                    <option value="50k+">₪50,000+</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">ספר לנו עוד</h3>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="תאר את הפרויקט שלך, מטרות, ציפיות..."
                    required
                    rows={8}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none resize-none text-gray-900 text-lg"
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 bg-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-xl hover:bg-gray-300 transition-all duration-200"
                >
                  חזור
                </button>
              )}
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {step < 3 ? 'המשך' : 'שלח'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
