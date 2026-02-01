import { useState } from 'react';
import { FaPaperPlane, FaMapMarkedAlt } from 'react-icons/fa';

export function Contact8() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white p-8">
      <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-8">
        {/* Map Section */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.6179374944447!2d34.77068931515624!3d32.0852999819917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a18c8db5b0!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1234567890123!5m2!1sen!2sil"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
          <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-start gap-3">
              <FaMapMarkedAlt className="text-red-500 text-2xl mt-1" />
              <div>
                <p className="font-bold text-gray-900">המשרד שלנו</p>
                <p className="text-sm text-gray-600">רחוב הרצל 50</p>
                <p className="text-sm text-gray-600">תל אביב, ישראל</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Form Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">צור קשר</h2>
          <p className="text-xl text-gray-600 mb-8">
            יש לך שאלה או הצעה? מלא את הטופס ונחזור אליך תוך 24 שעות.
          </p>
          
          <form className="space-y-6">
            <div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="שם מלא"
                className="w-full px-6 py-4 text-lg border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors bg-transparent"
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="כתובת אימייל"
                className="w-full px-6 py-4 text-lg border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors bg-transparent"
                required
              />
            </div>
            
            <div>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                placeholder="ההודעה שלך"
                className="w-full px-6 py-4 text-lg border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors bg-transparent resize-none"
                required
              />
            </div>
            
            <button
              type="submit"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-3"
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
