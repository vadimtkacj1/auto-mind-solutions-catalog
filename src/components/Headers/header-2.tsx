import { Menu, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Header2() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white/90 fixed top-0 z-50 w-full backdrop-blur-sm border-b border-slate-200" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 flex h-10 w-10 items-center justify-center rounded-lg">
              <span className="text-white text-xl font-bold">מ</span>
            </div>
            <span className="text-slate-900 text-xl font-semibold">המותג</span>
          </div>

          {/* Center Navigation */}
          <nav className="hidden lg:flex lg:gap-8">
            <a href="#" className="text-slate-700 hover:text-emerald-600 text-sm font-medium transition-colors">
              ראשי
            </a>
            <div className="group relative">
              <button className="text-slate-700 hover:text-emerald-600 flex items-center gap-1 text-sm font-medium transition-colors">
                מוצרים
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="bg-white invisible absolute right-0 top-full mt-2 w-48 rounded-lg border border-slate-200 p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                <a href="#" className="hover:bg-slate-100 block rounded px-3 py-2 text-sm text-right">מוצר ראשון</a>
                <a href="#" className="hover:bg-slate-100 block rounded px-3 py-2 text-sm text-right">מוצר שני</a>
                <a href="#" className="hover:bg-slate-100 block rounded px-3 py-2 text-sm text-right">מוצר שלישי</a>
              </div>
            </div>
            <a href="#" className="text-slate-700 hover:text-emerald-600 text-sm font-medium transition-colors">
              מחירים
            </a>
            <a href="#" className="text-slate-700 hover:text-emerald-600 text-sm font-medium transition-colors">
              אודות
            </a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button className="text-slate-700 hover:text-emerald-600 hidden text-sm font-medium md:block">
              התחבר
            </button>
            <button className="bg-emerald-600 text-white hover:bg-emerald-700 rounded-full px-6 py-2 text-sm font-medium transition-all duration-200">
              נסה בחינם
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-white border-t border-slate-200 lg:hidden">
          <div className="space-y-1 px-4 py-4">
            <a href="#" className="hover:bg-slate-100 block rounded px-3 py-2 text-base font-medium">ראשי</a>
            <a href="#" className="hover:bg-slate-100 block rounded px-3 py-2 text-base font-medium">מוצרים</a>
            <a href="#" className="hover:bg-slate-100 block rounded px-3 py-2 text-base font-medium">מחירים</a>
            <a href="#" className="hover:bg-slate-100 block rounded px-3 py-2 text-base font-medium">אודות</a>
          </div>
        </div>
      )}
    </header>
  )
}
