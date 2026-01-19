import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer2() {
  return (
    <footer className="bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Info */}
          <div>
            <h3 className="text-foreground mb-6 text-2xl font-bold">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Address</p>
                  <p className="text-muted-foreground text-sm">123 Business Street, Suite 100</p>
                  <p className="text-muted-foreground text-sm">New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Phone</p>
                  <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <p className="text-muted-foreground text-sm">contact@example.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground mb-6 text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Home</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Services</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Portfolio</a></li>
              </ul>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Support</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-foreground mb-6 text-lg font-semibold">Newsletter</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="border-input bg-background flex-1 rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 py-2 text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-muted-foreground text-sm">
              © 2024 Your Company. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
