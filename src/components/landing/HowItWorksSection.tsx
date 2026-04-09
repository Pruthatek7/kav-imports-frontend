export type HowStep = { step: string; title: string; body: string }

export default function HowItWorksSection({ steps }: { steps: HowStep[] }) {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/25 via-fuchsia-500/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">How it works</h2>
            <p className="mt-3 text-base leading-7 text-slate-300">
              A simple workflow that reduces surprises and keeps every import traceable.
            </p>

            <div className="mt-6 space-y-4">
              {steps.map((s) => (
                <div key={s.step} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-start gap-4">
                    <div className="grid min-w-12 place-items-center rounded-2xl bg-white/10 px-3 py-2 text-xs font-bold text-white">
                      {s.step}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{s.title}</div>
                      <div className="mt-1 text-sm leading-6 text-slate-300">{s.body}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-slate-300">Import run</div>
                  <div className="mt-1 text-base font-bold text-white">Q2 Monthly Loads</div>
                </div>
                <div className="rounded-2xl bg-emerald-500/15 px-3 py-2 text-xs font-semibold text-emerald-200">
                  Validated
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  { label: 'Schema checks', val: 'Pass', tone: 'text-emerald-200 bg-emerald-500/15' },
                  { label: 'Business rules', val: '2 warnings', tone: 'text-amber-200 bg-amber-500/15' },
                  { label: 'Mappings applied', val: 'Auto', tone: 'text-purple-200 bg-purple-500/15' },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-white/5 px-4 py-3"
                  >
                    <div className="text-sm font-medium text-slate-200">{r.label}</div>
                    <div className={`rounded-xl px-3 py-1 text-xs font-semibold ${r.tone}`}>{r.val}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs font-semibold text-slate-300">Next step: approve diffs and run import</div>
                <a
                  href="#pricing"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-105 sm:w-auto"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                >
                  View plans
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

