import type { ComponentType } from 'react'

export type FeatureIcon = ComponentType<{ className?: string }>

export type Feature = {
  title: string
  description: string
  icon: FeatureIcon
}

export default function FeaturesSection({
  features,
}: {
  features: Feature[]
}) {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Everything you need in one place
        </h2>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Mobile-first layout, audit-ready workflows, and the UX your team expects from a modern product.
        </p>
      </div>

      <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => {
          const Icon = f.icon
          return (
            <div
              key={f.title}
              className="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="grid size-11 place-items-center rounded-2xl bg-purple-600/10 text-purple-700">
                  <Icon className="size-5" />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-950">{f.title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{f.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

