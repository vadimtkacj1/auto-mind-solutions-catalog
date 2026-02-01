import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer2() {
  return (
    <footer className="bg-slate-50" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Info */}
          <div>
            <h3 className="text-slate-900 mb-6 text-2xl font-bold">צור קשר</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-emerald-600 mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="text-slate-900 font-medium">כתובת</p>
                  <p className="text-slate-600 text-sm leading-relaxed">רחוב העסקים 123, קומה 4</p>
                  <p className="text-slate-600 text-sm leading-relaxed">תל אביב, ישראל</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-emerald-600 mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="text-slate-900 font-medium">טלפון</p>
                  <p className="text-slate-600 text-sm">03-1234567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-emerald-600 mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="text-slate-900 font-medium">אימייל</p>
                  <p className="text-slate-600 text-sm">contact@example.co.il</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 mb-6 text-lg font-semibold">קישורים מהירים</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-600 hover:text-emerald-600 text-sm transition-colors">ראשי</a></li>
                <li><a href="#" className="text-slate-600 hover:text-emerald-600 text-sm transition-colors">אודות</a></li>
                <li><a href="#" className="text-slate-600 hover:text-emerald-600 text-sm transition-colors">שירותים</a></li>
                <li><a href="#" className="text-slate-600 hover:text-emerald-600 text-sm transition-colors">תיק עבודות</a></li>
              </ul>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-600 hover:text-emerald-600 text-sm transition-colors">בלוג</a></li>
                <li><a href="#" className="text-slate-600 hover:text-emerald-600 text-sm transition-colors">קריירה</a></li>
                <li><a href="#" className="text-slate-600 hover:text-emerald-600 text-sm transition-colors">תמיכה</a></li>
                <li><a href="#" className="text-slate-600 hover:text-emerald-600 text-sm transition-colors">צור קשר</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-slate-900 mb-6 text-lg font-semibold">ניוזלטר</h3>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              הירשם לניוזלטר שלנו לקבלת עדכונים והצעות בלעדיות.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="הכנס את המייל שלך"
                className="border-slate-300 bg-white flex-1 rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
              />
              <button className="bg-emerald-600 text-white hover:bg-emerald-700 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200">
                הרשמה
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-12 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-slate-600 text-sm">
              © 2024 החברה שלך. כל הזכויות שמורות.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">מדיניות פרטיות</a>
              <a href="#" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">תנאי שימוש</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
