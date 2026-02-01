import { Menu, X, Play, Sparkles, Zap } from 'lucide-react'
import { useState } from 'react'

interface NavItem {
  name: string;
  href: string;
  hot?: boolean;
}

interface Header10Props {
  logoText?: string;
  tagline?: string;
  navigation?: NavItem[];
  showDemo?: boolean;
  className?: string;
}

export default function Header10({
  logoText = 'GameZone',
  tagline = 'הגיימינג שלך מתחיל כאן',
  navigation = [
    { name: 'משחקים', href: '#', hot: true },
    { name: 'טורנירים', href: '#' },
    { name: 'לוחות ניקוד', href: '#' },
    { name: 'קהילה', href: '#' },
    { name: 'חנות', href: '#' },
  ],
  showDemo = true,
  className = '',
}: Header10Props = {}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={`bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden ${className}`} dir="rtl">
      {/* Animated Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {logoText}
              </h1>
              <p className="text-xs text-purple-300">{tagline}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 rounded-lg text-sm font-bold hover:bg-white/10 transition-all group"
              >
                {item.name}
                {item.hot && (
                  <span className="absolute -top-1 -left-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-bounce">
                    🔥 HOT
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            {showDemo && (
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-purple-400 hover:bg-purple-400/20 transition-all group">
                <Play className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold">הדגמה</span>
              </button>
            )}
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg px-6 py-2.5 text-sm font-black transition-all shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 hover:scale-105">
              שחק עכשיו!
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-purple-500/30 bg-slate-900/95 backdrop-blur-lg relative z-10">
          <div className="px-4 py-4">
            {/* Navigation */}
            <div className="space-y-1 mb-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-base font-bold hover:bg-white/10 transition-all"
                >
                  <span>{item.name}</span>
                  {item.hot && (
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 rounded-full">
                      🔥 HOT
                    </span>
                  )}
                </a>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="flex flex-col gap-2 pt-4 border-t border-purple-500/30">
              {showDemo && (
                <button className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg border-2 border-purple-400 hover:bg-purple-400/20 transition-all">
                  <Play className="h-5 w-5" />
                  <span className="font-bold">צפה בהדגמה</span>
                </button>
              )}
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg px-6 py-3 text-base font-black shadow-lg shadow-purple-500/50">
                שחק עכשיו! 🎮
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
