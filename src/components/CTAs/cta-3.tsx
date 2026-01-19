import { Check } from 'lucide-react'

export default function CTA3() {
  const features = [
    'Unlimited projects',
    'Priority support',
    'Advanced analytics',
    'Custom integrations'
  ]

  return (
    <section className="bg-muted/30 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-background overflow-hidden rounded-2xl border shadow-xl">
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Content */}
            <div className="p-8 sm:p-12">
              <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
                Everything You Need to Succeed
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Join our platform and get access to all premium features.
              </p>
              <ul className="mb-8 space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary rounded-full p-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-lg px-8 py-3 font-medium transition-colors sm:w-auto">
                Start Your Journey
              </button>
            </div>

            {/* Right Side - Visual */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center p-8 sm:p-12">
              <div className="text-center">
                <div className="text-foreground mb-2 text-5xl font-bold">$0</div>
                <div className="text-muted-foreground mb-6 text-lg">for the first 30 days</div>
                <div className="bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium">
                  No credit card required
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
