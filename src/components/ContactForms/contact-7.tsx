import { useState } from 'react';
import { FaCalendar, FaClock, FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

export function Contact7() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: ''
  });

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">קביעת פגישה</h2>
          <p className="text-gray-600">בחר תאריך ושעה לפגישה וניצור איתך קשר לאישור</p>
        </div>
        
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                <FaUser className="text-blue-500" />
                שם מלא
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                required
              />
            </div>
            
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                <FaEnvelope className="text-blue-500" />
                אימייל
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
              <FaPhone className="text-blue-500" />
              טלפון
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              required
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                <FaCalendar className="text-blue-500" />
                תאריך
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                required
              />
            </div>
            
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                <FaClock className="text-blue-500" />
                שעה
              </label>
              <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                required
              >
                <option value="">בחר שעה</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">הערות נוספות</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
              placeholder="ספר לנו על מה תרצה לדבר בפגישה..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            קבע פגישה
          </button>
        </form>
      </div>
    </div>
  );
}
