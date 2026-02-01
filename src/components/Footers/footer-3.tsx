export default function Footer3() {
  return (
    <footer className="bg-slate-900 text-white" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2">
            <h3 className="mb-4 text-2xl font-bold">המותג</h3>
            <p className="text-slate-300 mb-6 text-sm leading-relaxed">
              יוצרים חוויות דיגיטליות יוצאות דופן שמניבות תוצאות ומעוררות השראה.
            </p>
            <button className="bg-purple-600 text-white hover:bg-purple-700 rounded-lg px-6 py-2 text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg">
              התחל עכשיו
            </button>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">מוצר</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">תכונות</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">אינטגרציות</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">מחירים</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">עדכונים</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">החברה</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">אודות</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">צוות</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">בלוג</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">קריירה</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">משאבים</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">קהילה</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">צור קשר</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">תמיכה</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">סטטוס</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">משפטי</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">פרטיות</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">תנאים</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">אבטחה</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">קוקיז</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-slate-700 mt-12 border-t pt-8">
          <p className="text-slate-500 text-center text-sm">
            © 2024 שם המותג. נוצר באהבה.
          </p>
        </div>
      </div>
    </footer>
  )
}
