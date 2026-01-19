import { Menu, X, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Header5() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      {/* Top Contact Bar */}
      <div className="bg-muted/50 hidden border-b py-2 md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex gap-6">
              <a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors">
                <Phone className="h-4 w-4" />
                +1 (234) 567-890
              </a>
              <a href="mailto:info@example.com" className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors">
                <Mail className="h-4 w-4" />
                info@example.com
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a>
              <span className="text-muted-foreground">|</span>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Login</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary to-primary/60 flex h-12 w-12 items-center justify-center rounded-lg">
                <span className="text-primary-foreground text-2xl font-bold">B</span>
              </div>
              <div>
                <div className="text-foreground text-xl font-bold">Business</div>
                <div className="text-muted-foreground text-xs">Professional Solutions</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:gap-8">
              <a href="#" className="text-foreground hover:text-primary text-sm font-medium transition-colors">Home</a>
              <a href="#" className="text-foreground hover:text-primary text-sm font-medium transition-colors">Solutions</a>
              <a href="#" className="text-foreground hover:text-primary text-sm font-medium transition-colors">Industries</a>
              <a href="#" className="text-foreground hover:text-primary text-sm font-medium transition-colors">Resources</a>
              <a href="#" className="text-foreground hover:text-primary text-sm font-medium transition-colors">Company</a>
            </nav>

            {/* CTA Button */}
            <div className="hidden items-center gap-4 lg:flex">
              <button className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg border px-5 py-2 text-sm font-medium transition-colors">
                Request Demo
              </button>
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-5 py-2 text-sm font-medium transition-colors">
                Get Started
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
          <div className="border-t lg:hidden">
            <div className="space-y-1 px-4 py-4">
              <a href="#" className="hover:bg-muted block rounded px-3 py-2 text-base font-medium">Home</a>
              <a href="#" className="hover:bg-muted block rounded px-3 py-2 text-base font-medium">Solutions</a>
              <a href="#" className="hover:bg-muted block rounded px-3 py-2 text-base font-medium">Industries</a>
              <a href="#" className="hover:bg-muted block rounded px-3 py-2 text-base font-medium">Resources</a>
              <a href="#" className="hover:bg-muted block rounded px-3 py-2 text-base font-medium">Company</a>
              <div className="flex flex-col gap-2 pt-4">
                <button className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg border px-5 py-2 text-sm font-medium transition-colors">
                  Request Demo
                </button>
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-5 py-2 text-sm font-medium transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
