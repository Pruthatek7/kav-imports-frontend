import { CheckIcon, SparkIcon } from "./LandingIcons";
import { scrollToHash } from "../../utils/scrollToHash";

type Stat = { k: string; v: string };

type Cta = { label: string; href: string };

export default function HeroSection({
  heroImg,
  stats,
  badgeText,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  trustedBy = [],
}: {
  heroImg: string;
  stats: Stat[];
  badgeText: string;
  title: string;
  subtitle: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  trustedBy?: string[];
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-50/70 via-white to-white" />
      <div className="absolute left-1/2 top-[-220px] -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-600/10 to-fuchsia-500/10 blur-2xl" />
      <div className="absolute -bottom-[260px] left-[-140px] -z-10 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-purple-600/10 to-fuchsia-500/10 blur-2xl" />

      <div className="mx-auto max-w-7xl px-4 pb-6 pt-10 sm:px-6 sm:pb-10 sm:pt-12 lg:px-8 lg:pb-14 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
              <span className="inline-flex size-6 items-center justify-center rounded-full bg-purple-600/10 text-purple-700">
                <SparkIcon className="size-4" />
              </span>
              {badgeText}
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              {subtitle}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash(primaryCta.href);
                }}
              >
                {primaryCta.label}
                <span aria-hidden="true">→</span>
              </a>
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300/50"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash(secondaryCta.href);
                }}
              >
                {secondaryCta.label}
              </a>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {stats.map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl border border-slate-200/70 bg-white/70 p-4"
                >
                  <div className="text-sm font-bold text-slate-950">{s.k}</div>
                  <div className="mt-1 text-xs font-medium text-slate-600">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[260px]">
            <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-3 shadow-sm">
              <div className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="inline-block size-2.5 rounded-full bg-emerald-400" />
                  <span className="inline-block size-2.5 rounded-full bg-amber-400" />
                  <span className="inline-block size-2.5 rounded-full bg-rose-400" />
                  <span className="ml-2 text-xs font-semibold text-slate-600">
                    Validation preview
                  </span>
                </div>
                <span className="text-xs font-semibold text-purple-700">
                  Live
                </span>
              </div>

              <div className="mt-3 h-[420px] w-full overflow-hidden rounded-2xl bg-slate-900">
                <img
                  src={heroImg}
                  alt="Import preview"
                  className="h-full w-full object-cover sharp-image"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-10 left-0 hidden w-full md:block">
              <div className="rounded-3xl border border-slate-200/70 bg-white/85 px-6 py-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-2xl bg-purple-600/10 text-purple-700">
                    <CheckIcon className="size-5" />
                  </span>
                  <div>
                    <div className="text-sm font-bold text-slate-950">
                      Mapped fields, explained
                    </div>
                    <div className="mt-0.5 text-xs font-medium text-slate-600">
                      See what will change before you import.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200/70 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-semibold text-slate-600">
              Trusted by teams who import weekly
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {(trustedBy.length
                ? trustedBy
                : [
                    "Atlas Logistics",
                    "NorthBridge",
                    "Crescent Ops",
                    "BlueLeaf",
                    "LedgerWorks",
                  ]
              ).map((name) => (
                <div
                  key={name}
                  className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-600"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
