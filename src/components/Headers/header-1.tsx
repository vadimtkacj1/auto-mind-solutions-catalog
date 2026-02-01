import { Menu, X } from 'lucide-react'
import { useState } from 'react'

interface NavItem {
  name: string;
  href: string;
}

interface Header1Props {
  logoText?: string;
  navigation?: NavItem[];
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export default function Header1({
  logoText = 'הלוגו',
  navigation = [
    { name: 'בית', href: '#' },
    { name: 'אודות', href: '#' },
    { name: 'שירותים', href: '#' },
    { name: 'צור קשר', href: '#' },
  ],
  ctaText = 'התחל עכשיו',
  ctaHref = '#',
  className = '',
}: Header1Props = {}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={`bg-white border-b border-slate-200 ${className}`} dir="rtl">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="text-blue-600 text-2xl font-bold">{logoText}</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="mr-10 flex items-baseline space-x-reverse space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:bg-slate-100 rounded-md px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <a 
              href={ctaHref}
              className="bg-blue-600 text-white hover:bg-blue-700 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 inline-block"
            >
              {ctaText}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:bg-slate-100 inline-flex items-center justify-center rounded-md p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:bg-slate-100 block rounded-md px-3 py-2 text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <a 
              href={ctaHref}
              className="bg-blue-600 text-white hover:bg-blue-700 mt-4 w-full rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 block text-center"
            >
              {ctaText}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
