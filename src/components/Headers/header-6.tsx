import { Menu, X, Search, ShoppingBag } from 'lucide-react'
import { useState } from 'react'

interface NavItem {
  name: string;
  href: string;
}

interface Header6Props {
  logoText?: string;
  navigation?: NavItem[];
  showSearch?: boolean;
  showCart?: boolean;
  cartCount?: number;
  className?: string;
}

export default function Header6({
  logoText = 'FASHION',
  navigation = [
    { name: 'קולקציה חדשה', href: '#' },
    { name: 'נשים', href: '#' },
    { name: 'גברים', href: '#' },
    { name: 'ילדים', href: '#' },
    { name: 'אקססוריז', href: '#' },
    { name: 'SALE', href: '#' },
  ],
  showSearch = true,
  showCart = true,
  cartCount = 0,
  className = '',
}: Header6Props = {}) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className={`bg-black text-white ${className}`} dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-widest">{logoText}</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium tracking-wide hover:text-amber-400 transition-colors uppercase"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {showSearch && (
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="hover:text-amber-400 transition-colors hidden md:block"
              >
                <Search className="h-5 w-5" />
              </button>
            )}
            
            {showCart && (
              <button className="hover:text-amber-400 transition-colors relative hidden md:block">
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -left-2 bg-amber-400 text-black flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden hover:text-amber-400 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="py-4 border-t border-white/20 hidden md:block">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
              <input
                type="text"
                placeholder="חיפוש..."
                className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pr-10 pl-4 text-white placeholder-white/50 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/20">
          <div className="px-4 py-4">
            {/* Mobile Search */}
            {showSearch && (
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
                  <input
                    type="text"
                    placeholder="חיפוש..."
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pr-10 pl-4 text-white placeholder-white/50"
                  />
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded px-3 py-2 text-base font-medium hover:bg-white/10 uppercase tracking-wide"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Cart */}
            {showCart && (
              <div className="mt-4 pt-4 border-t border-white/20">
                <button className="w-full flex items-center justify-center gap-2 bg-amber-400 text-black rounded-lg px-4 py-3 font-medium hover:bg-amber-500 transition-colors">
                  <ShoppingBag className="h-5 w-5" />
                  סל קניות {cartCount > 0 && `(${cartCount})`}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
