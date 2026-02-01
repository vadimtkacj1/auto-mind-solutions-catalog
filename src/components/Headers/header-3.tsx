import { Search, ShoppingCart, User, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'חדשים', href: '#' },
    { name: 'גברים', href: '#' },
    { name: 'נשים', href: '#' },
    { name: 'אקססוריז', href: '#' },
    { name: 'מבצעים', href: '#', highlighted: true },
  ]

  return (
    <header className="bg-white border-b border-slate-200" dir="rtl">
      {/* Top Bar */}
      <div className="bg-purple-600 text-white py-2 text-center text-sm">
        משלוח חינם בהזמנות מעל 200₪ - מבצע לזמן מוגבל!
      </div>

      {/* Main Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="text-slate-900 text-2xl font-bold">החנות</div>

          {/* Search Bar */}
          <div className="hidden flex-1 max-w-xl px-8 md:block">
            <div className="relative">
              <Search className="text-slate-400 absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2" />
              <input
                type="text"
                placeholder="חפש מוצרים..."
                className="border-slate-300 bg-white w-full rounded-full border py-2 pr-10 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-right"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="text-slate-700 hover:text-purple-600 transition-colors">
              <Search className="h-6 w-6 md:hidden" />
            </button>
            <button className="text-slate-700 hover:text-purple-600 transition-colors hidden sm:block">
              <User className="h-6 w-6" />
            </button>
            <button className="text-slate-700 hover:text-purple-600 relative transition-colors hidden sm:block">
              <ShoppingCart className="h-6 w-6" />
              <span className="bg-purple-600 text-white absolute -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full text-xs">
                3
              </span>
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-purple-600 transition-colors md:hidden"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden border-t border-slate-200 py-4 md:block">
          <ul className="flex gap-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className={`text-sm font-medium transition-colors ${
                    item.highlighted 
                      ? 'text-purple-600' 
                      : 'text-slate-700 hover:text-purple-600'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4">
            {/* Search Bar Mobile */}
            <div className="relative mb-4">
              <Search className="text-slate-400 absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2" />
              <input
                type="text"
                placeholder="חפש מוצרים..."
                className="border-slate-300 bg-white w-full rounded-full border py-2 pr-10 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-right"
              />
            </div>

            {/* Navigation Links */}
            <div className="space-y-1 mb-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block rounded px-3 py-2 text-base font-medium ${
                    item.highlighted
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="flex gap-2 pt-4 border-t border-slate-200">
              <button className="text-slate-700 hover:text-purple-600 flex-1 flex items-center justify-center gap-2 border border-slate-300 rounded-lg px-4 py-2 transition-colors">
                <User className="h-5 w-5" />
                חשבון
              </button>
              <button className="text-slate-700 hover:text-purple-600 flex-1 flex items-center justify-center gap-2 border border-slate-300 rounded-lg px-4 py-2 transition-colors relative">
                <ShoppingCart className="h-5 w-5" />
                סל קניות
                <span className="bg-purple-600 text-white absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full text-xs">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
