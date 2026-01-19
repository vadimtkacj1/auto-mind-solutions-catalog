import { Play } from 'lucide-react'

export default function Hero2() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="bg-primary/10 text-primary mb-4 inline-flex w-fit items-center gap-2 rounded-full px-4 py-1 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                <span className="bg-primary relative inline-flex h-2 w-2 rounded-full"></span>
              </span>
              New v2.0 Released
            </div>
            <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Transform Your Business With AI
            </h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Harness the power of artificial intelligence to automate workflows, gain insights, and scale your operations efficiently.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 font-medium transition-colors">
                Start Free Trial
              </button>
              <button className="hover:bg-muted flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-colors">
                <Play className="h-5 w-5" />
                Watch Video
              </button>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div>
                <div className="text-foreground text-3xl font-bold">50K+</div>
                <div className="text-muted-foreground text-sm">Active Users</div>
              </div>
              <div>
                <div className="text-foreground text-3xl font-bold">4.9/5</div>
                <div className="text-muted-foreground text-sm">User Rating</div>
              </div>
              <div>
                <div className="text-foreground text-3xl font-bold">99.9%</div>
                <div className="text-muted-foreground text-sm">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 aspect-square rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
