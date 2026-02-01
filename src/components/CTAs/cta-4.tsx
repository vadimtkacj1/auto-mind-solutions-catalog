import { MessageSquare } from 'lucide-react'

export default function CTA4() {
  return (
    <section className="py-16" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-orange-200 bg-orange-50 rounded-2xl border-2 p-8 sm:p-12 shadow-lg">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            {/* Right Content */}
            <div className="text-center lg:text-right">
              <div className="bg-orange-100 text-orange-700 mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 border border-orange-200">
                <MessageSquare className="h-4 w-4" />
                <span className="text-sm font-medium">בוא נדבר</span>
              </div>
              <h2 className="text-slate-900 mb-2 text-3xl font-bold sm:text-4xl leading-tight">
                יש לך שאלות?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                הצוות שלנו כאן כדי לעזור לך להצליח. צור קשר היום.
              </p>
            </div>

            {/* Left CTA */}
            <div className="flex flex-col gap-3 sm:flex-row flex-shrink-0">
              <button className="bg-orange-600 text-white hover:bg-orange-700 rounded-lg px-8 py-3 font-medium transition-all duration-200 shadow-md hover:shadow-lg">
                קבע שיחה
              </button>
              <button className="border-2 border-orange-300 hover:bg-orange-100 rounded-lg px-8 py-3 font-medium transition-all duration-200 text-slate-700">
                שלח הודעה
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
