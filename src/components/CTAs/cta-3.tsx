import { Check } from 'lucide-react'

export default function CTA3() {
  const features = [
    'פרויקטים ללא הגבלה',
    'תמיכה עדיפה',
    'ניתוח מתקדם',
    'אינטגרציות מותאמות אישית'
  ]

  return (
    <section className="bg-slate-50 py-16" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
          <div className="grid lg:grid-cols-2">
            {/* Right Side - Content */}
            <div className="p-8 sm:p-12">
              <h2 className="text-slate-900 mb-4 text-3xl font-bold sm:text-4xl leading-tight">
                כל מה שאתה צריך כדי להצליח
              </h2>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                הצטרף לפלטפורמה שלנו וקבל גישה לכל התכונות המתקדמות.
              </p>
              <ul className="mb-8 space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg">
                    <div className="bg-purple-50 text-purple-600 rounded-full p-1 flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-slate-900">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-purple-600 text-white hover:bg-purple-700 w-full rounded-lg px-8 py-3 font-medium transition-all duration-200 sm:w-auto shadow-md hover:shadow-lg">
                התחל את המסע שלך
              </button>
            </div>

            {/* Left Side - Visual */}
            <div className="bg-purple-50 flex items-center justify-center p-8 sm:p-12 order-first lg:order-last">
              <div className="text-center">
                <div className="text-slate-900 mb-2 text-5xl font-bold">₪0</div>
                <div className="text-slate-600 mb-6 text-lg">ל-30 הימים הראשונים</div>
                <div className="bg-purple-100 text-purple-700 rounded-full px-4 py-2 text-sm font-medium border border-purple-200">
                  ללא כרטיס אשראי
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
