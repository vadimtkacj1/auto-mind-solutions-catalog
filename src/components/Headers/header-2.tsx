import { Menu, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Header2() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-background/80 fixed top-0 z-50 w-full backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-lg">
              <span className="text-primary-foreground text-xl font-bold">L</span>
            </div>
            <span className="text-foreground text-xl font-semibold">Brand</span>
          </div>

          {/* Center Navigation */}
          <nav className="hidden lg:flex lg:gap-8">
            <a href="#" className="text-foreground hover:text-primary text-sm font-medium transition-colors">
              Home
            </a>
            <div className="group relative">
              <button className="text-foreground hover:text-primary flex items-center gap-1 text-sm font-medium transition-colors">
                Products
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="bg-background invisible absolute left-0 top-full mt-2 w-48 rounded-lg border p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                <a href="#" className="hover:bg-muted block rounded px-3 py-2 text-sm">Product 1</a>
                <a href="#" className="hover:bg-muted block rounded px-3 py-2 text-sm">Product 2</a>
                <a href="#" className="hover:bg-muted block rounded px-3 py-2 text-sm">Product 3</a>
              </div>
            </div>
            <a href="#" className="text-foreground hover:text-primary text-sm font-medium transition-colors">
              Pricing
            </a>
            <a href="#" className="text-foreground hover:text-primary text-sm font-medium transition-colors">
              About
            </a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button className="text-foreground hover:text-primary hidden text-sm font-medium md:block">
              Sign In
            </button>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2 text-sm font-medium">
              Start Free
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-background border-t lg:hidden">
          <div className="space-y-1 px-4 py-4">
            <a href="#" className="hover:bg-muted block rounded px-3 py-2 text-base font-medium">Home</a>
            <a href="#" className="hover:bg-muted block rounded px-3 py-2 text-base font-medium">Products</a>
            <a href="#" className="hover:bg-muted block rounded px-3 py-2 text-base font-medium">Pricing</a>
            <a href="#" className="hover:bg-muted block rounded px-3 py-2 text-base font-medium">About</a>
          </div>
        </div>
      )}
    </header>
  )
}
