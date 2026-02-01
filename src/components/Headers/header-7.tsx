import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface NavItem {
  name: string;
  href: string;
  badge?: string;
}

interface Header7Props {
  logoText?: string;
  tagline?: string;
  navigation?: NavItem[];
  languages?: string[];
  className?: string;
}

export default function Header7({
  logoText = 'TechStart',
  tagline = 'חדשנות טכנולוגית',
  navigation = [
    { name: 'מוצרים', href: '#', badge: 'חדש' },
    { name: 'פתרונות', href: '#' },
    { name: 'מפתחים', href: '#' },
    { name: 'תמחור', href: '#' },
    { name: 'חברה', href: '#' },
  ],
  languages = ['עברית', 'English', 'العربية'],
  className = '',
}: Header7Props = {}) {
  const [isOpen, setIsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  return (
    <header className={`bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg ${className}`} dir="rtl">
      {/* Top Bar */}
      <div className="bg-black/20 hidden md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-300 transition-colors">תיעוד</a>
              <a href="#" className="hover:text-amber-300 transition-colors">API</a>
              <a href="#" className="hover:text-amber-300 transition-colors">קהילה</a>
            </div>
            <div className="relative">
              <button 
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 hover:text-amber-300 transition-colors"
              >
                <Globe className="h-4 w-4" />
                עברית
                <ChevronDown className="h-3 w-3" />
              </button>
              {langOpen && (
                <div className="absolute left-0 top-full mt-1 bg-white text-slate-800 rounded-lg shadow-lg py-2 w-32 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      className="block w-full text-right px-4 py-2 hover:bg-violet-50 transition-colors text-sm"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2">
              <div className="bg-amber-400 w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-violet-900 font-bold text-lg">T</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold">{logoText}</h1>
              <p className="text-xs text-white/80">{tagline}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-amber-300 transition-colors relative"
              >
                {item.name}
                {item.badge && (
                  <span className="absolute -top-2 -left-2 bg-amber-400 text-violet-900 text-xs px-2 py-0.5 rounded-full font-bold">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="text-sm font-medium hover:text-amber-300 transition-colors">
              התחבר
            </button>
            <button className="bg-amber-400 text-violet-900 hover:bg-amber-300 rounded-lg px-6 py-2 text-sm font-bold transition-all shadow-lg hover:shadow-xl">
              התחל בחינם
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-white/10"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/20 bg-black/20">
          <div className="px-4 py-4">
            <div className="space-y-1 mb-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-base font-medium hover:bg-white/10"
                >
                  {item.name}
                  {item.badge && (
                    <span className="bg-amber-400 text-violet-900 text-xs px-2 py-1 rounded-full font-bold">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2 pt-4 border-t border-white/20">
              <button className="text-sm font-medium hover:bg-white/10 rounded-lg px-4 py-2">
                התחבר
              </button>
              <button className="bg-amber-400 text-violet-900 rounded-lg px-4 py-3 text-sm font-bold">
                התחל בחינם
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
