export default function Hero5() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image/Gradient */}
      <div className="bg-gradient-to-br from-primary/20 via-background to-background absolute inset-0"></div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="border-primary/20 bg-primary/5 text-primary inline-flex items-center gap-2 rounded-full border px-6 py-2">
              <span className="relative flex h-3 w-3">
                <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                <span className="bg-primary relative inline-flex h-3 w-3 rounded-full"></span>
              </span>
              <span className="text-sm font-medium">Now Available</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-foreground mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Revolutionize Your
            <span className="text-primary block mt-2">Digital Experience</span>
          </h1>

          {/* Description */}
          <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-xl">
            Empower your team with tools designed for the modern era. Streamline workflows, boost productivity, and achieve remarkable results.
          </p>

          {/* Email Signup */}
          <div className="mx-auto mb-8 max-w-md">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="border-input bg-background flex-1 rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 font-medium transition-colors">
                Join Waitlist
              </button>
            </div>
            <p className="text-muted-foreground mt-2 text-sm">
              Join 50,000+ users already on the platform
            </p>
          </div>

          {/* Stats */}
          <div className="border-t pt-12">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-foreground mb-1 text-3xl font-bold">10M+</div>
                <div className="text-muted-foreground text-sm">Downloads</div>
              </div>
              <div>
                <div className="text-foreground mb-1 text-3xl font-bold">150+</div>
                <div className="text-muted-foreground text-sm">Countries</div>
              </div>
              <div>
                <div className="text-foreground mb-1 text-3xl font-bold">4.9★</div>
                <div className="text-muted-foreground text-sm">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
