import { Menu, X, Bell, User } from 'lucide-react'
import { useState } from 'react'

interface NavItem {
  name: string;
  href: string;
  icon?: string;
}

interface Header8Props {
  logoText?: string;
  navigation?: NavItem[];
  userName?: string;
  notifications?: number;
  className?: string;
}

export default function Header8({
  logoText = 'Dashboard',
  navigation = [
    { name: 'לוח בקרה', href: '#', icon: '📊' },
    { name: 'פרויקטים', href: '#', icon: '📁' },
    { name: 'צוות', href: '#', icon: '👥' },
    { name: 'הגדרות', href: '#', icon: '⚙️' },
  ],
  userName = 'משתמש',
  notifications = 3,
  className = '',
}: Header8Props = {}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={`bg-slate-900 text-white border-b border-slate-700 ${className}`} dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <h1 className="text-xl font-bold hidden sm:block">{logoText}</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:gap-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                {item.icon && <span>{item.icon}</span>}
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Notifications */}
            <button className="relative p-2 rounded-lg hover:bg-slate-800 transition-colors hidden sm:block">
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <span className="absolute top-1 left-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>

            {/* User Menu */}
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors hidden lg:flex">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-8 h-8 rounded-full flex items-center justify-center">
                <User className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">{userName}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-700 bg-slate-800">
          <div className="px-4 py-4">
            {/* User Info */}
            <div className="flex items-center gap-3 mb-4 p-3 bg-slate-700 rounded-lg">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-10 h-10 rounded-full flex items-center justify-center">
                <User className="h-6 w-6" />
              </div>
              <div>
                <p className="font-medium">{userName}</p>
                <p className="text-xs text-slate-400">משתמש פעיל</p>
              </div>
            </div>

            {/* Notifications */}
            <button className="w-full flex items-center justify-between p-3 mb-2 rounded-lg hover:bg-slate-700">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                <span>התראות</span>
              </div>
              {notifications > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                  {notifications}
                </span>
              )}
            </button>

            {/* Navigation */}
            <div className="space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium hover:bg-slate-700"
                >
                  {item.icon && <span className="text-xl">{item.icon}</span>}
                  {item.name}
                </a>
              ))}
            </div>

            {/* Logout */}
            <button className="w-full mt-4 pt-4 border-t border-slate-700 text-red-400 hover:bg-slate-700 rounded-lg px-3 py-3 text-base font-medium">
              התנתק
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
