import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export function Contact5() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-10">
        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                    step >= num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step > num ? <FaCheckCircle /> : num}
                </div>
                {num < 3 && (
                  <div
                    className={`flex-1 h-1 mx-2 transition-colors ${
                      step > num ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>פרטים אישיים</span>
            <span>פרטי הפרוייקט</span>
            <span>סיכום</span>
          </div>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">פרטים אישיים</h2>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">שם מלא *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">אימייל *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">שם החברה</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
            <button
              onClick={handleNext}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              המשך
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">פרטי הפרוייקט</h2>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">סוג השירות *</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                required
              >
                <option value="">בחר שירות</option>
                <option value="web">פיתוח אתרים</option>
                <option value="mobile">אפליקציות מובייל</option>
                <option value="design">עיצוב UI/UX</option>
                <option value="marketing">שיווק דיגיטלי</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">תקציב משוער *</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                required
              >
                <option value="">בחר טווח תקציב</option>
                <option value="10k-25k">₪10,000 - ₪25,000</option>
                <option value="25k-50k">₪25,000 - ₪50,000</option>
                <option value="50k-100k">₪50,000 - ₪100,000</option>
                <option value="100k+">₪100,000+</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">תיאור הפרוייקט</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                חזור
              </button>
              <button
                onClick={handleNext}
                className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                המשך
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-green-600 text-4xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">סיכום</h2>
              <p className="text-gray-600">אנא בדוק את הפרטים לפני השליחה</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">שם:</span>
                <span className="text-gray-900">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">אימייל:</span>
                <span className="text-gray-900">{formData.email}</span>
              </div>
              {formData.company && (
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">חברה:</span>
                  <span className="text-gray-900">{formData.company}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">שירות:</span>
                <span className="text-gray-900">{formData.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">תקציב:</span>
                <span className="text-gray-900">{formData.budget}</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                חזור
              </button>
              <button
                onClick={() => console.log('Submitted:', formData)}
                className="flex-1 bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                שלח
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
