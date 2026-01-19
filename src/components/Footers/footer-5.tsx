import { Send } from 'lucide-react'

export default function Footer5() {
  return (
    <footer className="bg-background">
      {/* Newsletter Section */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div>
              <h3 className="text-2xl font-bold">Stay Updated</h3>
              <p className="text-primary-foreground/80 mt-1">Get the latest news and updates delivered to your inbox.</p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-foreground flex-1 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white md:w-80"
                />
                <button className="bg-foreground text-background hover:bg-foreground/90 flex items-center gap-2 rounded-lg px-6 py-3 font-medium">
                  <Send className="h-4 w-4" />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="text-primary mb-4 text-2xl font-bold">Company</div>
              <p className="text-muted-foreground mb-6 max-w-md text-sm">
                We're building the future of digital products. Join thousands of companies who trust us to deliver exceptional results.
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="border-input bg-background flex-1 rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-foreground mb-4 font-semibold">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Security</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Enterprise</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Customer stories</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-foreground mb-4 font-semibold">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Community</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Status</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-foreground mb-4 font-semibold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Press</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
              <p className="text-muted-foreground">© 2024 Company, Inc. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
