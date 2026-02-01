import { useState } from 'react'

interface NavItem {
  name: string;
  href: string;
}

interface Header13Props {
  logoText?: string;
  navigation?: NavItem[];
  className?: string;
}

export default function Header13({
  logoText = 'COMPANY',
  navigation = [
    { name: 'דף הבית', href: '#' },
    { name: 'מי אנחנו', href: '#' },
    { name: 'שירותים', href: '#' },
    { name: 'לקוחות', href: '#' },
    { name: 'יצירת קשר', href: '#' },
  ],
  className = '',
}: Header13Props = {}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={`bg-white border-b-4 border-orange-500 ${className}`} dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Rectangle with border */}
          <div className="flex items-center">
            <div className="border-4 border-orange-500 px-4 py-2">
              <span className="text-2xl font-black text-slate-900 tracking-wider">{logoText}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex gap-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="px-5 py-2 text-sm font-bold text-slate-700 hover:bg-orange-500 hover:text-white transition-all"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <button className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-3 text-sm font-black uppercase tracking-wide transition-colors">
              צור קשר
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden px-4 py-2 border-2 border-slate-900 text-slate-900 font-bold text-sm"
          >
            {isOpen ? 'סגור' : 'תפריט'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-50">
          <div className="px-4 py-6">
            <nav className="space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-5 py-3 text-base font-bold text-slate-700 hover:bg-orange-500 hover:text-white transition-all"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="mt-6">
              <button className="w-full bg-orange-500 text-white px-8 py-4 text-base font-black uppercase">
                צור קשר
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
