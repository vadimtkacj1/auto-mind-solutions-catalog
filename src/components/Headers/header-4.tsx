import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header4() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'ראשי', href: '#' },
    { name: 'אודות', href: '#' },
    { name: 'שירותים', href: '#' },
    { name: 'תיק עבודות', href: '#' },
  ]

  return (
    <header className="bg-white py-6 border-b border-slate-200" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-right">
            <h1 className="text-slate-900 text-2xl md:text-3xl font-bold">המותג שלך</h1>
            <p className="text-slate-600 text-xs md:text-sm">סלוגן מעורר השראה</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="hover:bg-orange-600 hover:text-white rounded-full border border-slate-300 px-4 py-2 text-sm font-medium transition-all duration-200 text-slate-700"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#" 
                  className="bg-orange-600 text-white hover:bg-orange-700 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  צור קשר
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-slate-200">
            <nav>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="hover:bg-orange-50 block rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a 
                    href="#" 
                    className="bg-orange-600 text-white hover:bg-orange-700 block text-center rounded-full px-4 py-3 text-base font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    צור קשר
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
