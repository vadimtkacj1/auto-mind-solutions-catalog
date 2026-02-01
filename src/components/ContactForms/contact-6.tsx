import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export function Contact6() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl font-bold mb-4">בואו נדבר</h1>
          <p className="text-xl opacity-90">יש לך שאלה? נשמח לעזור!</p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">שלח לנו הודעה</h2>
              <form className="space-y-5">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="שם מלא"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="כתובת אימייל"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="נושא"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  placeholder="ההודעה שלך"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
                >
                  שלח הודעה
                </button>
              </form>
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 p-10 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">פרטי התקשרות</h3>
              <div className="space-y-6 mb-10">
                <div>
                  <p className="font-semibold text-lg mb-1">כתובת</p>
                  <p className="opacity-90">רחוב הרצל 123, תל אביב</p>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">טלפון</p>
                  <p className="opacity-90">03-1234567</p>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">אימייל</p>
                  <p className="opacity-90">hello@example.com</p>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">שעות פעילות</p>
                  <p className="opacity-90">ראשון-חמישי: 9:00-18:00</p>
                </div>
              </div>
              
              <div>
                <p className="font-semibold text-lg mb-4">עקוב אחרינו</p>
                <div className="flex gap-4">
                  <a href="#" className="bg-white bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-all">
                    <FaFacebook className="text-2xl" />
                  </a>
                  <a href="#" className="bg-white bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-all">
                    <FaTwitter className="text-2xl" />
                  </a>
                  <a href="#" className="bg-white bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-all">
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a href="#" className="bg-white bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-all">
                    <FaLinkedin className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
