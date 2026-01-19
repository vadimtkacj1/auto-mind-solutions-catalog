import { ArrowRight } from 'lucide-react'

export default function CTA1() {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 mx-auto mb-8 max-w-2xl text-lg">
            Join thousands of satisfied customers and take your business to the next level.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="bg-background text-foreground hover:bg-background/90 flex items-center gap-2 rounded-lg px-8 py-3 font-medium transition-colors">
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-primary-foreground/20 hover:bg-primary-foreground/10 rounded-lg border px-8 py-3 font-medium transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
