export default function Hero5() {
  return (
    <section className="relative overflow-hidden bg-white" dir="rtl">
      {/* Background Image/Gradient */}
      <div className="bg-gradient-to-br from-indigo-50 via-white to-white absolute inset-0"></div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="border-indigo-200 bg-indigo-50 text-indigo-700 inline-flex items-center gap-2 rounded-full border px-6 py-2">
              <span className="relative flex h-3 w-3">
                <span className="bg-indigo-500 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                <span className="bg-indigo-500 relative inline-flex h-3 w-3 rounded-full"></span>
              </span>
              <span className="text-sm font-medium">זמין עכשיו</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-slate-900 mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-tight">
            חולל מהפכה בחוויה
            <span className="text-indigo-600 block mt-2">הדיגיטלית שלך</span>
          </h1>

          {/* Description */}
          <p className="text-slate-600 mx-auto mb-10 max-w-2xl text-xl leading-relaxed">
            העצם את הצוות שלך עם כלים שתוכננו לעידן המודרני. ייעל תהליכים, הגבר פרודוקטיביות והשג תוצאות יוצאות דופן.
          </p>

          {/* Email Signup */}
          <div className="mx-auto mb-8 max-w-md">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="הזן את המייל שלך"
                className="border-slate-300 bg-white flex-1 rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-right"
              />
              <button className="bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg px-6 py-3 font-medium transition-all duration-200 shadow-md hover:shadow-lg">
                הצטרף לרשימה
              </button>
            </div>
            <p className="text-slate-500 mt-2 text-sm">
              הצטרף ליותר מ-50,000 משתמשים בפלטפורמה
            </p>
          </div>

          {/* Stats */}
          <div className="border-t border-slate-200 pt-12">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-slate-900 mb-1 text-3xl font-bold">10M+</div>
                <div className="text-slate-600 text-sm">הורדות</div>
              </div>
              <div>
                <div className="text-slate-900 mb-1 text-3xl font-bold">150+</div>
                <div className="text-slate-600 text-sm">מדינות</div>
              </div>
              <div>
                <div className="text-slate-900 mb-1 text-3xl font-bold">4.9★</div>
                <div className="text-slate-600 text-sm">דירוג</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
