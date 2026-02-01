import { ArrowLeft } from 'lucide-react'

interface CTA1Props {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
  bgColor?: string;
}

export default function CTA1({
  title = 'מוכן להתחיל?',
  description = 'הצטרף לאלפי לקוחות מרוצים וקח את העסק שלך לשלב הבא.',
  primaryButtonText = 'התחל ניסיון חינם',
  primaryButtonHref = '#',
  secondaryButtonText = 'דבר עם מכירות',
  secondaryButtonHref = '#',
  className = '',
  bgColor = 'bg-blue-600',
}: CTA1Props = {}) {
  return (
    <section className={`${bgColor} text-white py-16 ${className}`} dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl leading-tight">
            {title}
          </h2>
          <p className="text-blue-100 mx-auto mb-8 max-w-2xl text-lg leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a 
              href={primaryButtonHref}
              className="bg-white text-blue-600 hover:bg-blue-50 flex items-center gap-2 rounded-lg px-8 py-3 font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <ArrowLeft className="h-5 w-5" />
              {primaryButtonText}
            </a>
            <a 
              href={secondaryButtonHref}
              className="border-2 border-white hover:bg-white/10 rounded-lg px-8 py-3 font-medium transition-all duration-200"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
