import { Check } from 'lucide-react'

export default function Hero3() {
  return (
    <section className="bg-foreground text-background relative overflow-hidden py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            The Future of Work Starts Here
          </h1>
          <p className="text-background/80 mb-8 text-lg sm:text-xl">
            Join thousands of teams who have revolutionized their workflow with our cutting-edge platform.
          </p>

          {/* Features List */}
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              <span className="text-sm font-medium">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              <span className="text-sm font-medium">14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              <span className="text-sm font-medium">Cancel anytime</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-foreground w-full rounded-lg px-6 py-3 sm:w-80"
            />
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-lg px-8 py-3 font-medium transition-colors sm:w-auto">
              Get Started
            </button>
          </div>

          {/* Social Proof */}
          <div className="text-background/60 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-background/20 h-8 w-8 rounded-full border-2 border-current"></div>
                ))}
              </div>
              <span>10,000+ developers trust us</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
