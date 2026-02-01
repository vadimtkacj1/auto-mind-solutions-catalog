import { Menu, X, Heart, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

interface NavItem {
  name: string;
  href: string;
}

interface Header9Props {
  restaurantName?: string;
  location?: string;
  hours?: string;
  navigation?: NavItem[];
  phoneNumber?: string;
  className?: string;
}

export default function Header9({
  restaurantName = 'מסעדת השף',
  location = 'תל אביב',
  hours = 'א-ה: 12:00-23:00',
  navigation = [
    { name: 'תפריט', href: '#' },
    { name: 'אירועים', href: '#' },
    { name: 'המטבח שלנו', href: '#' },
    { name: 'המלצות', href: '#' },
    { name: 'יצירת קשר', href: '#' },
  ],
  phoneNumber = '03-1234567',
  className = '',
}: Header9Props = {}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={`bg-amber-50 border-b-2 border-amber-200 ${className}`} dir="rtl">
      {/* Top Info Bar */}
      <div className="bg-amber-600 text-white hidden md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {location}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {hours}
              </div>
            </div>
            <a href={`tel:${phoneNumber}`} className="hover:text-amber-200 font-medium">
              📞 {phoneNumber}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">👨‍🍳</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-amber-900">{restaurantName}</h1>
              <div className="flex items-center gap-1 text-xs text-amber-700">
                <Heart className="h-3 w-3 fill-red-500 text-red-500" />
                <span>חוויה קולינרית מיוחדת</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-amber-900 hover:text-amber-600 text-sm font-semibold transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="bg-amber-600 text-white hover:bg-amber-700 rounded-full px-6 py-2.5 text-sm font-bold transition-all shadow-md hover:shadow-lg">
              הזמן שולחן
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-amber-100 text-amber-900"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t-2 border-amber-200 bg-white">
          <div className="px-4 py-4">
            {/* Mobile Info */}
            <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-center gap-2 text-sm text-amber-900 mb-2">
                <MapPin className="h-4 w-4" />
                {location}
              </div>
              <div className="flex items-center gap-2 text-sm text-amber-900 mb-2">
                <Clock className="h-4 w-4" />
                {hours}
              </div>
              <a 
                href={`tel:${phoneNumber}`} 
                className="flex items-center gap-2 text-sm font-medium text-amber-700"
              >
                📞 {phoneNumber}
              </a>
            </div>

            {/* Navigation */}
            <div className="space-y-1 mb-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-base font-semibold text-amber-900 hover:bg-amber-50"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile CTA */}
            <button className="w-full bg-amber-600 text-white rounded-full px-6 py-3 text-base font-bold shadow-lg">
              הזמן שולחן עכשיו
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
