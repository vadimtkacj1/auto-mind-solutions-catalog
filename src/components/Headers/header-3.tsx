import { Search, ShoppingCart, User } from 'lucide-react'

export default function Header3() {
  return (
    <header className="bg-background border-b">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
        Free shipping on orders over $50 - Limited time offer!
      </div>

      {/* Main Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="text-foreground text-2xl font-bold">Store</div>

          {/* Search Bar */}
          <div className="hidden flex-1 max-w-xl px-8 md:block">
            <div className="relative">
              <Search className="text-muted-foreground absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products..."
                className="border-input bg-background w-full rounded-full border py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="text-foreground hover:text-primary transition-colors">
              <Search className="h-6 w-6 md:hidden" />
            </button>
            <button className="text-foreground hover:text-primary transition-colors">
              <User className="h-6 w-6" />
            </button>
            <button className="text-foreground hover:text-primary relative transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="bg-primary text-primary-foreground absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full text-xs">
                3
              </span>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden border-t py-4 md:block">
          <ul className="flex gap-8">
            <li><a href="#" className="text-foreground hover:text-primary text-sm font-medium transition-colors">New Arrivals</a></li>
            <li><a href="#" className="text-foreground hover:text-primary text-sm font-medium transition-colors">Men</a></li>
            <li><a href="#" className="text-foreground hover:text-primary text-sm font-medium transition-colors">Women</a></li>
            <li><a href="#" className="text-foreground hover:text-primary text-sm font-medium transition-colors">Accessories</a></li>
            <li><a href="#" className="text-primary text-sm font-medium">Sale</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
