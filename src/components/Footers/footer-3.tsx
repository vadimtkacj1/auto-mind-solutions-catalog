export default function Footer3() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2">
            <h3 className="mb-4 text-2xl font-bold">Brand</h3>
            <p className="text-background/80 mb-6 text-sm">
              Creating exceptional digital experiences that drive results and inspire users.
            </p>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-2 text-sm font-medium">
              Get Started
            </button>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Features</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Integrations</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">About</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Team</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Community</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Support</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Privacy</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Terms</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Security</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-background/20 mt-12 border-t pt-8">
          <p className="text-background/60 text-center text-sm">
            © 2024 Brand Name. Crafted with care.
          </p>
        </div>
      </div>
    </footer>
  )
}
