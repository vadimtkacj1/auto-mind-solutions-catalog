import { Send } from 'lucide-react'

export default function Footer5() {
  return (
    <footer className="bg-white" dir="rtl">
      {/* Newsletter Section */}
      <div className="bg-indigo-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div>
              <h3 className="text-2xl font-bold">הישאר מעודכן</h3>
              <p className="text-indigo-100 mt-1">קבל את החדשות והעדכונים האחרונים ישירות לתיבת המייל שלך.</p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="הכנס את המייל שלך"
                  className="text-slate-900 flex-1 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white md:w-80 text-right"
                />
                <button className="bg-white text-indigo-600 hover:bg-indigo-50 flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-all duration-200 shadow-md hover:shadow-lg">
                  <Send className="h-4 w-4" />
                  הרשמה
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="text-indigo-600 mb-4 text-2xl font-bold">החברה</div>
              <p className="text-slate-600 mb-6 max-w-md text-sm leading-relaxed">
                אנחנו בונים את העתיד של מוצרים דיגיטליים. הצטרף לאלפי חברות שסומכות עלינו להעניק תוצאות יוצאות דופן.
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="המייל שלך"
                  className="border-slate-300 bg-white flex-1 rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-right"
                />
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-slate-900 mb-4 font-semibold">פלטפורמה</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">תכונות</a></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">אבטחה</a></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">ארגוני</a></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">סיפורי לקוחות</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 mb-4 font-semibold">תמיכה</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">מרכז עזרה</a></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">קהילה</a></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">צור קשר</a></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">סטטוס</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 mb-4 font-semibold">החברה</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">אודות</a></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">בלוג</a></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">קריירה</a></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">עיתונות</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 mt-12 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
              <p className="text-slate-600">© 2024 החברה בע״מ. כל הזכויות שמורות.</p>
              <div className="flex gap-6">
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">תנאים</a>
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">פרטיות</a>
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">קוקיז</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
