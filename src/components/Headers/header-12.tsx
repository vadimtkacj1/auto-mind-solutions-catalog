import { useState } from 'react'

interface NavItem {
  name: string;
  href: string;
}

interface Header12Props {
  logoText?: string;
  navigation?: NavItem[];
  className?: string;
}

export default function Header12({
  logoText = 'BRAND',
  navigation = [
    { name: 'בית', href: '#' },
    { name: 'מוצרים', href: '#' },
    { name: 'בלוג', href: '#' },
    { name: 'קריירה', href: '#' },
  ],
  className = '',
}: Header12Props = {}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={`bg-slate-900 text-white ${className}`} dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo - Circle */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <span className="text-slate-900 text-2xl font-black">{logoText.charAt(0)}</span>
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight">{logoText}</h1>
              <p className="text-xs text-slate-400">Professional Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex gap-10">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white hover:text-slate-300 text-base font-semibold transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="text-white hover:text-slate-300 px-4 py-2 text-sm font-semibold">
              כניסה
            </button>
            <button className="bg-white text-slate-900 hover:bg-slate-100 px-6 py-2.5 rounded text-sm font-bold">
              הרשמה
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-sm font-bold"
          >
            {isOpen ? '✕ סגור' : '☰ תפריט'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-700 bg-slate-800">
          <div className="px-4 py-6">
            <nav className="space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-semibold text-white hover:bg-slate-700 rounded"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-slate-700">
              <button className="w-full text-white border border-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded text-base font-bold transition-colors">
                כניסה
              </button>
              <button className="w-full bg-white text-slate-900 px-6 py-3 rounded text-base font-bold">
                הרשמה
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
