import { clsx } from '../../utils/clsx'
import { CheckIcon } from './LandingIcons'

type PricingTier = {
  name: string
  price: string
  desc: string
  bullets: string[]
  cta: string
  featured: boolean
}

export default function PricingSection({ tiers }: { tiers: PricingTier[] }) {
  return (
    <section id="pricing" className="relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.12),transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Pricing that scales with imports
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Start small, then upgrade when you need more governance and automation.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {tiers.map((p) => (
            <div
              key={p.name}
              className={clsx('rounded-3xl border bg-white p-6 shadow-sm', p.featured ? 'border-purple-200 shadow-md' : 'border-slate-200/70')}
            >
              {p.featured ? (
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-bold text-purple-700">
                  <span className="inline-block size-2 rounded-full bg-purple-600" />
                  Most popular
                </div>
              ) : null}

              <div className="mt-4 flex items-end justify-between gap-3">
                <div>
                  <div className="text-base font-bold text-slate-950">{p.name}</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">{p.desc}</div>
                </div>
                <div className="text-3xl font-extrabold tracking-tight text-slate-950">{p.price}</div>
              </div>

              <div className="mt-4 space-y-3">
                {p.bullets.map((b) => (
                  <div key={b} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="grid size-7 place-items-center rounded-xl bg-purple-600/10 text-purple-700">
                      <CheckIcon className="size-4" />
                    </span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={clsx(
                  'mt-6 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition focus:outline-none focus:ring-2',
                  p.featured
                    ? 'bg-gradient-to-br from-purple-600 to-fuchsia-500 text-white hover:brightness-105 focus:ring-purple-500/50'
                    : 'border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 focus:ring-slate-300/50'
                )}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

