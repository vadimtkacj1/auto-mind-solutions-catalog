import { MessageSquare } from 'lucide-react'

export default function CTA4() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-primary/20 bg-primary/5 rounded-2xl border p-8 sm:p-12">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2">
                <MessageSquare className="h-4 w-4" />
                <span className="text-sm font-medium">Let's Talk</span>
              </div>
              <h2 className="text-foreground mb-2 text-3xl font-bold sm:text-4xl">
                Have Questions?
              </h2>
              <p className="text-muted-foreground text-lg">
                Our team is here to help you succeed. Get in touch today.
              </p>
            </div>

            {/* Right CTA */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-3 font-medium transition-colors">
                Schedule a Call
              </button>
              <button className="border-input hover:bg-muted rounded-lg border px-8 py-3 font-medium transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
