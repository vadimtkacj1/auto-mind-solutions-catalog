import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export function Contact4() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">צור קשר</h2>
          <p className="text-lg mb-10 opacity-90">
            נשמח לשמוע ממך! מלא את הטופס ונחזור אליך בהקדם האפשרי.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <FaPhone className="text-2xl" />
              </div>
              <div>
                <p className="font-semibold">טלפון</p>
                <p className="opacity-90">03-1234567</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <FaEnvelope className="text-2xl" />
              </div>
              <div>
                <p className="font-semibold">אימייל</p>
                <p className="opacity-90">info@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <div>
                <p className="font-semibold">כתובת</p>
                <p className="opacity-90">רחוב הרצל 1, תל אביב</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-10 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">שם מלא</label>
              <div className="relative">
                <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="הכנס את שמך"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">אימייל</label>
              <div className="relative">
                <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">טלפון</label>
              <div className="relative">
                <FaPhone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="050-1234567"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">הודעה</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                placeholder="כתוב את הודעתך כאן..."
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-3 hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              <span>שלח הודעה</span>
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
