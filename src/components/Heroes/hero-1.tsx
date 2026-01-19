import { ArrowRight } from 'lucide-react'

export default function Hero1() {
  return (
    <section className="bg-gradient-to-b from-background to-muted/30 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Build Amazing Products
            <span className="text-primary block">Faster Than Ever</span>
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg sm:text-xl">
            The complete platform for modern teams. Ship faster, scale easier, and deliver exceptional experiences to your customers.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 rounded-lg px-8 py-3 text-base font-medium transition-colors">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-input hover:bg-muted rounded-lg border px-8 py-3 text-base font-medium transition-colors">
              Watch Demo
            </button>
          </div>
          <div className="mt-12">
            <p className="text-muted-foreground mb-4 text-sm">Trusted by leading companies</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-muted-foreground text-2xl font-bold">Company</div>
              <div className="text-muted-foreground text-2xl font-bold">Brand</div>
              <div className="text-muted-foreground text-2xl font-bold">Business</div>
              <div className="text-muted-foreground text-2xl font-bold">Corp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
