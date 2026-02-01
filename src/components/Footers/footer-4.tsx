import { Github, Twitter, Linkedin, Youtube } from 'lucide-react'

export default function Footer4() {
  return (
    <footer className="bg-orange-50" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6">
            <h2 className="text-slate-900 text-3xl font-bold">המותג שלך</h2>
            <p className="text-slate-600 mt-2">החדשנות מתחילה כאן</p>
          </div>

          {/* Navigation */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-6">
              <li><a href="#" className="text-slate-700 hover:text-orange-600 text-sm font-medium transition-colors">מוצרים</a></li>
              <li><a href="#" className="text-slate-700 hover:text-orange-600 text-sm font-medium transition-colors">פתרונות</a></li>
              <li><a href="#" className="text-slate-700 hover:text-orange-600 text-sm font-medium transition-colors">מחירים</a></li>
              <li><a href="#" className="text-slate-700 hover:text-orange-600 text-sm font-medium transition-colors">תיעוד</a></li>
              <li><a href="#" className="text-slate-700 hover:text-orange-600 text-sm font-medium transition-colors">החברה</a></li>
            </ul>
          </nav>

          {/* Social Links */}
          <div className="mb-8 flex justify-center gap-6">
            <a href="#" className="text-slate-500 hover:text-orange-600 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-500 hover:text-orange-600 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-500 hover:text-orange-600 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-500 hover:text-orange-600 transition-colors">
              <Youtube className="h-6 w-6" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="border-t border-slate-200 pt-8">
            <div className="mb-4 flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">מדיניות פרטיות</a>
              <span className="text-slate-400">•</span>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">תנאי שירות</a>
              <span className="text-slate-400">•</span>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">הגדרות קוקיז</a>
            </div>
            <p className="text-slate-600 text-sm">
              © 2024 המותג שלך בע״מ. כל הזכויות שמורות בכל העולם.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
