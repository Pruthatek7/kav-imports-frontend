type Point = { title: string; description: string }

export default function BulkOrderSection({
  title = 'Bulk order',
  subtitle = 'Fast quotes for large quantities and recurring shipments.',
  points,
}: {
  title?: string
  subtitle?: string
  points: Point[]
}) {
  return (
    <section id="bulk-order" className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/25 via-slate-950 to-slate-950" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
            <p className="mt-3 text-base leading-7 text-slate-300">{subtitle}</p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                Contact Us
              </a>
              <a
                href="#faq"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                View FAQ
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="space-y-4">
              {points.map((p) => (
                <div key={p.title} className="rounded-2xl bg-white/5 px-5 py-4">
                  <div className="text-sm font-semibold text-white">{p.title}</div>
                  <div className="mt-1 text-sm leading-6 text-slate-300">{p.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

