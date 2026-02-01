import { useState } from 'react'

interface NavItem {
  name: string;
  href: string;
}

interface Header11Props {
  logoText?: string;
  navigation?: NavItem[];
  className?: string;
}

export default function Header11({
  logoText = 'LOGO',
  navigation = [
    { name: 'ראשי', href: '#' },
    { name: 'אודות', href: '#' },
    { name: 'שירותים', href: '#' },
    { name: 'פרויקטים', href: '#' },
    { name: 'צור קשר', href: '#' },
  ],
  className = '',
}: Header11Props = {}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={`bg-white shadow-sm ${className}`} dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Simple Square */}
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 w-12 h-12 rounded flex items-center justify-center">
              <span className="text-white text-xl font-bold">L</span>
            </div>
            <span className="text-2xl font-bold text-slate-900">{logoText}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex gap-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-700 hover:text-blue-600 text-base font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2.5 rounded text-sm font-semibold transition-colors">
              התחל עכשיו
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`w-6 h-0.5 bg-slate-900 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-slate-900 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-slate-900 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-slate-200">
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded text-base font-semibold">
                התחל עכשיו
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
