import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

interface FooterLink {
  name: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface Footer1Props {
  companyName?: string;
  companyDescription?: string;
  columns?: FooterColumn[];
  showSocial?: boolean;
  copyrightText?: string;
  className?: string;
}

export default function Footer1({
  companyName = 'החברה',
  companyDescription = 'בונים מוצרים מדהימים עבור האינטרנט המודרני.',
  columns = [
    {
      title: 'מוצרים',
      links: [
        { name: 'תכונות', href: '#' },
        { name: 'מחירים', href: '#' },
        { name: 'אבטחה', href: '#' },
        { name: 'ארגוני', href: '#' },
      ],
    },
    {
      title: 'על החברה',
      links: [
        { name: 'אודות', href: '#' },
        { name: 'בלוג', href: '#' },
        { name: 'קריירה', href: '#' },
        { name: 'צור קשר', href: '#' },
      ],
    },
    {
      title: 'משפטי',
      links: [
        { name: 'פרטיות', href: '#' },
        { name: 'תנאים', href: '#' },
        { name: 'מדיניות קוקיז', href: '#' },
        { name: 'רישיונות', href: '#' },
      ],
    },
  ],
  showSocial = true,
  // Используем шаблонную строку для динамического года
  copyrightText = `© ${new Date().getFullYear()} ${companyName}. כל הזכויות שמורות.`,
  className = '',
}: Footer1Props = {}) {
  return (
    <footer className={`bg-white border-t border-slate-200 ${className}`} dir="rtl">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 gap-8 ${columns.length > 0 ? 'md:grid-cols-4' : ''}`}>
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-slate-900 mb-4 text-lg font-bold">{companyName}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {companyDescription}
            </p>
            {showSocial && (
              <div className="mt-4 flex gap-4">
                <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            )}
          </div>

          {/* Dynamic Columns */}
          {columns.map((column, index) => (
            <div key={index}>
              <h3 className="text-slate-900 mb-4 text-sm font-semibold">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 mt-8 pt-8 text-center">
          <p className="text-slate-600 text-sm">
            {copyrightText}
          </p>
        </div>
      </div>
    </footer>
  )
}