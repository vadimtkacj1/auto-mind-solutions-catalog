import { ArrowLeft } from 'lucide-react'

interface Hero1Props {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  trustText?: string;
  trustLogos?: string[];
  className?: string;
}

export default function Hero1({
  title = 'בנה מוצרים מדהימים',
  subtitle = 'במהירות שיא',
  description = 'הפלטפורמה המושלמת לצוותים מודרניים. פתח מהר יותר, התרחב בקלות, והעניק חוויות יוצאות דופן ללקוחות שלך.',
  primaryButtonText = 'התחל עכשיו',
  primaryButtonHref = '#',
  secondaryButtonText = 'צפה בהדגמה',
  secondaryButtonHref = '#',
  trustText = 'מהימן על ידי חברות מובילות',
  trustLogos = ['טכנולוגיות', 'חדשנות', 'פתרונות', 'מערכות'],
  className = '',
}: Hero1Props = {}) {
  return (
    <section className={`bg-slate-50 py-20 md:py-32 ${className}`} dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-slate-900 mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {title}
            <span className="text-blue-600 block mt-2">{subtitle}</span>
          </h1>
          <p className="text-slate-600 mx-auto mb-8 max-w-2xl text-lg sm:text-xl leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a 
              href={primaryButtonHref}
              className="bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2 rounded-lg px-8 py-3 text-base font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <ArrowLeft className="h-5 w-5" />
              {primaryButtonText}
            </a>
            <a 
              href={secondaryButtonHref}
              className="border-2 border-slate-300 hover:bg-slate-100 rounded-lg px-8 py-3 text-base font-medium transition-all duration-200 text-slate-700"
            >
              {secondaryButtonText}
            </a>
          </div>
          {trustLogos && trustLogos.length > 0 && (
            <div className="mt-12">
              <p className="text-slate-500 mb-4 text-sm">{trustText}</p>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 opacity-60">
                {trustLogos.map((logo, index) => (
                  <div key={index} className="text-slate-600 text-xl sm:text-2xl font-bold">
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
