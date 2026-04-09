type Spec = { label: string; value: string }

export default function SpecificationsSection({
  title = 'Specifications',
  subtitle = 'Clear details for confident purchasing.',
  specs,
}: {
  title?: string
  subtitle?: string
  specs: Spec[]
}) {
  return (
    <section id="specifications" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
        <p className="mt-3 text-base leading-7 text-slate-600">{subtitle}</p>
      </div>

      <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {specs.map((s) => (
          <div key={s.label} className="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{s.label}</div>
            <div className="mt-2 text-sm font-semibold text-slate-950">{s.value}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

