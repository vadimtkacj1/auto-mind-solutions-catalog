import { Sparkles, Zap, Shield } from 'lucide-react'

export default function Hero4() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <span className="bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-semibold">
                Introducing Next Generation Platform
              </span>
            </div>
            <h1 className="text-foreground mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Build, Deploy, and Scale with Confidence
            </h1>
            <p className="text-muted-foreground mb-8 text-lg">
              The all-in-one platform that developers love. Ship faster with our powerful tools and seamless integrations.
            </p>

            {/* Features */}
            <div className="mb-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 text-primary rounded-lg p-2">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">AI-Powered Development</h3>
                  <p className="text-muted-foreground text-sm">Intelligent code suggestions and automated workflows</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 text-primary rounded-lg p-2">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">Lightning Fast Performance</h3>
                  <p className="text-muted-foreground text-sm">Optimized for speed and efficiency at scale</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 text-primary rounded-lg p-2">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">Enterprise Security</h3>
                  <p className="text-muted-foreground text-sm">Bank-level encryption and compliance built-in</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-3 font-medium transition-colors">
                Get Started Free
              </button>
              <button className="border-input hover:bg-muted rounded-lg border px-8 py-3 font-medium transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent relative h-96 w-full max-w-lg rounded-3xl lg:h-[500px]">
              {/* Decorative Elements */}
              <div className="bg-primary/20 absolute left-8 top-8 h-24 w-24 rounded-2xl"></div>
              <div className="bg-primary/30 absolute bottom-12 right-8 h-32 w-32 rounded-2xl"></div>
              <div className="bg-primary/10 absolute right-16 top-16 h-20 w-20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
