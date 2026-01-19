import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer1() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-foreground mb-4 text-lg font-bold">Company</h3>
            <p className="text-muted-foreground text-sm">
              Building amazing products for the modern web.
            </p>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-foreground mb-4 text-sm font-semibold">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Security</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Enterprise</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-foreground mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-foreground mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Licenses</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
