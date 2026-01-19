import { Rocket } from 'lucide-react'

export default function CTA5() {
  return (
    <section className="bg-foreground text-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-6 flex justify-center">
              <div className="bg-primary text-primary-foreground flex h-16 w-16 items-center justify-center rounded-2xl">
                <Rocket className="h-8 w-8" />
              </div>
            </div>
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
              Launch Your Project Today
            </h2>
            <p className="text-background/80 text-xl">
              Stop waiting. Start building. Everything you need is right here.
            </p>
          </div>

          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold">5 min</div>
                <div className="text-background/70 text-sm">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold">24/7</div>
                <div className="text-background/70 text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold">100%</div>
                <div className="text-background/70 text-sm">Satisfaction</div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-3 font-medium transition-colors">
                Get Started Now
              </button>
              <button className="border-background/20 hover:bg-background/10 rounded-lg border px-8 py-3 font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
