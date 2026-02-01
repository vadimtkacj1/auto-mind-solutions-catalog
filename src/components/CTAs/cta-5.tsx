import { Rocket } from 'lucide-react'

export default function CTA5() {
  return (
    <section className="bg-slate-900 text-white py-20" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-6 flex justify-center">
              <div className="bg-indigo-600 text-white flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg">
                <Rocket className="h-8 w-8" />
              </div>
            </div>
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl leading-tight">
              השק את הפרויקט שלך היום
            </h2>
            <p className="text-slate-300 text-xl leading-relaxed">
              תפסיק לחכות. תתחיל לבנות. כל מה שאתה צריך נמצא כאן.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold">5 דק'</div>
                <div className="text-slate-400 text-sm">זמן התקנה</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold">24/7</div>
                <div className="text-slate-400 text-sm">תמיכה</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold">100%</div>
                <div className="text-slate-400 text-sm">שביעות רצון</div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button className="bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg px-8 py-3 font-medium transition-all duration-200 shadow-md hover:shadow-lg">
                התחל עכשיו
              </button>
              <button className="border-2 border-white/30 hover:bg-white/10 rounded-lg px-8 py-3 font-medium transition-all duration-200">
                למד עוד
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
