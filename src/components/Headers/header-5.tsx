import { Menu, X, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Header5() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header dir="rtl">
      {/* Top Contact Bar */}
      <div className="bg-slate-100 hidden border-b border-slate-200 py-2 md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex gap-6">
              <a href="tel:+972501234567" className="text-slate-600 hover:text-slate-900 flex items-center gap-2 transition-colors">
                <Phone className="h-4 w-4" />
                050-123-4567
              </a>
              <a href="mailto:info@example.co.il" className="text-slate-600 hover:text-slate-900 flex items-center gap-2 transition-colors">
                <Mail className="h-4 w-4" />
                info@example.co.il
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">תמיכה</a>
              <span className="text-slate-400">|</span>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">התחבר</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-indigo-600 flex h-12 w-12 items-center justify-center rounded-lg shadow-md">
                <span className="text-white text-2xl font-bold">ע</span>
              </div>
              <div>
                <div className="text-slate-900 text-xl font-bold">עסקים</div>
                <div className="text-slate-600 text-xs">פתרונות מקצועיים</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:gap-8">
              <a href="#" className="text-slate-700 hover:text-indigo-600 text-sm font-medium transition-colors">ראשי</a>
              <a href="#" className="text-slate-700 hover:text-indigo-600 text-sm font-medium transition-colors">פתרונות</a>
              <a href="#" className="text-slate-700 hover:text-indigo-600 text-sm font-medium transition-colors">תעשיות</a>
              <a href="#" className="text-slate-700 hover:text-indigo-600 text-sm font-medium transition-colors">משאבים</a>
              <a href="#" className="text-slate-700 hover:text-indigo-600 text-sm font-medium transition-colors">החברה</a>
            </nav>

            {/* CTA Button */}
            <div className="hidden items-center gap-4 lg:flex">
              <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-lg px-5 py-2 text-sm font-medium transition-all duration-200">
                בקש הדגמה
              </button>
              <button className="bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg px-5 py-2 text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg">
                התחל עכשיו
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-slate-200 lg:hidden">
            <div className="space-y-1 px-4 py-4">
              <a href="#" className="hover:bg-slate-100 block rounded px-3 py-2 text-base font-medium">ראשי</a>
              <a href="#" className="hover:bg-slate-100 block rounded px-3 py-2 text-base font-medium">פתרונות</a>
              <a href="#" className="hover:bg-slate-100 block rounded px-3 py-2 text-base font-medium">תעשיות</a>
              <a href="#" className="hover:bg-slate-100 block rounded px-3 py-2 text-base font-medium">משאבים</a>
              <a href="#" className="hover:bg-slate-100 block rounded px-3 py-2 text-base font-medium">החברה</a>
              <div className="flex flex-col gap-2 pt-4">
                <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-lg px-5 py-2 text-sm font-medium transition-all duration-200">
                  בקש הדגמה
                </button>
                <button className="bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg px-5 py-2 text-sm font-medium transition-all duration-200">
                  התחל עכשיו
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
