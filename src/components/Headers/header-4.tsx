export default function Header4() {
  return (
    <header className="bg-background py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h1 className="text-foreground text-3xl font-bold">Your Brand</h1>
            <p className="text-muted-foreground text-sm">Tagline goes here</p>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-2">
              <li>
                <a href="#" className="hover:bg-primary hover:text-primary-foreground rounded-full border px-4 py-2 text-sm font-medium transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-primary hover:text-primary-foreground rounded-full border px-4 py-2 text-sm font-medium transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-primary hover:text-primary-foreground rounded-full border px-4 py-2 text-sm font-medium transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-primary hover:text-primary-foreground rounded-full border px-4 py-2 text-sm font-medium transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 py-2 text-sm font-medium transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
