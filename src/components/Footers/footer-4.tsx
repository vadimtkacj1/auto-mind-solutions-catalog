import { Github, Twitter, Linkedin, Youtube } from 'lucide-react'

export default function Footer4() {
  return (
    <footer className="bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6">
            <h2 className="text-foreground text-3xl font-bold">YourBrand</h2>
            <p className="text-muted-foreground mt-2">Innovation starts here</p>
          </div>

          {/* Navigation */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-6">
              <li><a href="#" className="text-foreground hover:text-primary text-sm font-medium transition-colors">Products</a></li>
              <li><a href="#" className="text-foreground hover:text-primary text-sm font-medium transition-colors">Solutions</a></li>
              <li><a href="#" className="text-foreground hover:text-primary text-sm font-medium transition-colors">Pricing</a></li>
              <li><a href="#" className="text-foreground hover:text-primary text-sm font-medium transition-colors">Docs</a></li>
              <li><a href="#" className="text-foreground hover:text-primary text-sm font-medium transition-colors">Company</a></li>
            </ul>
          </nav>

          {/* Social Links */}
          <div className="mb-8 flex justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube className="h-6 w-6" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="border-t pt-8">
            <div className="mb-4 flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <span className="text-muted-foreground">•</span>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              <span className="text-muted-foreground">•</span>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Settings</a>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 YourBrand Inc. All rights reserved worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
