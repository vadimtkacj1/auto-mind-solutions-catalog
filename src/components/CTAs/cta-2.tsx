import { Sparkles } from 'lucide-react'

export default function CTA2() {
  return (
    <section className="py-16" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-600 relative overflow-hidden rounded-3xl px-8 py-16 sm:px-16 shadow-xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <div className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex justify-center">
                <div className="bg-white/10 text-white inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm font-medium">מבצע לזמן מוגבל</span>
                </div>
              </div>
              <h2 className="text-white mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl leading-tight">
                שנה את תהליך העבודה שלך היום
              </h2>
              <p className="text-emerald-50 mb-8 text-lg leading-relaxed">
                קבל 50% הנחה על החודש הראשון. ללא כרטיס אשראי.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="הכנס את המייל שלך"
                  className="text-slate-900 w-full rounded-lg px-6 py-3 sm:w-80 text-right"
                />
                <button className="bg-white text-emerald-600 hover:bg-emerald-50 w-full rounded-lg px-8 py-3 font-medium transition-all duration-200 sm:w-auto shadow-md hover:shadow-lg">
                  קבל את המבצע
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
