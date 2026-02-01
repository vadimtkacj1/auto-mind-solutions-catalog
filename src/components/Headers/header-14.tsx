import { useState } from 'react'

interface NavItem {
  name: string;
  href: string;
}

interface Header14Props {
  logoText?: string;
  tagline?: string;
  navigation?: NavItem[];
  className?: string;
}

export default function Header14({
  logoText = 'STUDIO',
  tagline = 'Creative Agency',
  navigation = [
    { name: 'עבודות', href: '#' },
    { name: 'שירותים', href: '#' },
    { name: 'צוות', href: '#' },
    { name: 'בלוג', href: '#' },
  ],
  className = '',
}: Header14Props = {}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={`bg-teal-600 text-white ${className}`} dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex h-16 items-center justify-between border-b border-teal-500">
          {/* Logo - Minimal text */}
          <div>
            <h1 className="text-2xl font-black tracking-widest">{logoText}</h1>
            <p className="text-xs text-teal-200 font-medium">{tagline}</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex gap-2">
              {navigation.map((item, index) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block px-6 py-2 text-sm font-bold text-white hover:bg-teal-700 transition-colors"
                  >
                    <span className="text-teal-200 text-xs font-normal mr-2">{String(index + 1).padStart(2, '0')}</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact button */}
          <div className="hidden lg:block">
            <button className="bg-white text-teal-600 hover:bg-teal-50 px-6 py-2 text-sm font-black transition-colors">
              בואו נדבר
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-8 h-8 flex items-center justify-center"
          >
            <div className="relative w-6 h-4 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all origin-left ${isOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all origin-left ${isOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-teal-700">
          <div className="px-4 py-6">
            <nav className="space-y-2">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-base font-bold hover:bg-teal-600 rounded transition-colors"
                >
                  <span className="text-teal-200 text-sm font-normal">{String(index + 1).padStart(2, '0')}</span>
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-teal-500">
              <button className="w-full bg-white text-teal-600 px-6 py-3 text-base font-black">
                בואו נדבר
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
