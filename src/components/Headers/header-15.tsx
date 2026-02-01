import { useState } from 'react'

interface NavItem {
  name: string;
  href: string;
}

interface Header15Props {
  logoText?: string;
  navigation?: NavItem[];
  className?: string;
}

export default function Header15({
  logoText = 'MINIMAL',
  navigation = [
    { name: 'ראשי', href: '#' },
    { name: 'פרויקטים', href: '#' },
    { name: 'קשר', href: '#' },
  ],
  className = '',
}: Header15Props = {}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={`bg-slate-50 ${className}`} dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between">
          {/* Logo - Hexagon shape using clip-path */}
          <div className="flex items-center gap-4">
            <div 
              className="w-16 h-16 bg-slate-900 flex items-center justify-center relative"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
              }}
            >
              <span className="text-white text-xl font-black">{logoText.charAt(0)}</span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">{logoText}</h1>
              <div className="flex gap-1 mt-1">
                <span className="w-8 h-1 bg-slate-900"></span>
                <span className="w-4 h-1 bg-slate-400"></span>
                <span className="w-2 h-1 bg-slate-300"></span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Vertical dividers */}
          <nav className="hidden lg:flex items-center">
            {navigation.map((item, index) => (
              <div key={item.name} className="flex items-center">
                <a
                  href={item.href}
                  className="px-8 py-2 text-base font-bold text-slate-900 hover:text-slate-600 transition-colors"
                >
                  {item.name}
                </a>
                {index < navigation.length - 1 && (
                  <div className="w-px h-8 bg-slate-300"></div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA - pill shape */}
          <div className="hidden lg:block">
            <button className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-3 rounded-full text-sm font-bold transition-colors shadow-lg">
              GET STARTED
            </button>
          </div>

          {/* Mobile Menu Button - Simple dots */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 items-center justify-center w-10 h-10"
          >
            <span className={`w-1.5 h-1.5 rounded-full bg-slate-900 transition-all ${isOpen ? 'scale-150' : ''}`}></span>
            <span className={`w-1.5 h-1.5 rounded-full bg-slate-900 transition-all ${isOpen ? 'scale-0' : ''}`}></span>
            <span className={`w-1.5 h-1.5 rounded-full bg-slate-900 transition-all ${isOpen ? 'scale-150' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-slate-50 z-50 flex flex-col items-center justify-center">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 left-8 w-12 h-12 flex items-center justify-center"
          >
            <div className="relative w-8 h-8">
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-900 rotate-45"></span>
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-900 -rotate-45"></span>
            </div>
          </button>

          {/* Navigation */}
          <nav className="text-center space-y-8">
            {navigation.map((item, index) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block text-4xl font-black text-slate-900 hover:text-slate-600 transition-colors"
                >
                  <span className="text-xl text-slate-400 font-normal mr-4">{String(index + 1).padStart(2, '0')}</span>
                  {item.name}
                </a>
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="absolute bottom-12">
            <button className="bg-slate-900 text-white px-12 py-4 rounded-full text-base font-bold shadow-2xl">
              GET STARTED
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
