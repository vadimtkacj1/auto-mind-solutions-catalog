import { Sparkles } from 'lucide-react'

export default function CTA2() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden rounded-3xl px-8 py-16 sm:px-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <div className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex justify-center">
                <div className="bg-primary-foreground/10 text-primary-foreground inline-flex items-center gap-2 rounded-full px-4 py-2">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm font-medium">Limited Time Offer</span>
                </div>
              </div>
              <h2 className="text-primary-foreground mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Transform Your Workflow Today
              </h2>
              <p className="text-primary-foreground/90 mb-8 text-lg">
                Get 50% off your first month. No credit card required.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-foreground w-full rounded-lg px-6 py-3 sm:w-80"
                />
                <button className="bg-foreground text-background hover:bg-foreground/90 w-full rounded-lg px-8 py-3 font-medium transition-colors sm:w-auto">
                  Claim Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
