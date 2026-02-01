import { Check } from 'lucide-react'

export default function Hero3() {
  return (
    <section className="bg-slate-900 text-white relative overflow-hidden py-20 md:py-32" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight">
            העתיד של העבודה מתחיל כאן
          </h1>
          <p className="text-slate-300 mb-8 text-lg sm:text-xl leading-relaxed">
            הצטרף לאלפי צוותים שחוללו מהפכה בתהליכי העבודה שלהם עם הפלטפורמה המתקדמת שלנו.
          </p>

          {/* Features List */}
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Check className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-medium">ללא כרטיס אשראי</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Check className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-medium">14 ימי ניסיון חינם</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Check className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-medium">ביטול בכל עת</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="הכנס את המייל שלך"
              className="text-slate-900 w-full rounded-lg px-6 py-3 sm:w-80 text-right"
            />
            <button className="bg-purple-600 text-white hover:bg-purple-700 w-full rounded-lg px-8 py-3 font-medium transition-all duration-200 sm:w-auto shadow-lg hover:shadow-xl">
              התחל עכשיו
            </button>
          </div>

          {/* Social Proof */}
          <div className="text-slate-400 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2" style={{direction: 'ltr'}}>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-purple-500 h-8 w-8 rounded-full border-2 border-slate-900"></div>
                ))}
              </div>
              <span>למעלה מ-10,000 מפתחים סומכים עלינו</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
