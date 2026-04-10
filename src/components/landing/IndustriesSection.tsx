

type UseCase = { title: string; description: string }

/**
 * Shared "Industries & Use Cases" section.
 *
 * Left: image card with two floating badge labels.
 * Right: 2-column grid of use-case cards with radio-dot icons.
 */
export default function IndustriesSection({
  sectionBg = '#f6f7f9',
  imageCardBg,
  productImage,
  sectionBgImage,
  productImageAlt = 'Product use case',
  badge1 = 'Custom Sizes & Thickness',
  badge2 = 'Leak-Proof Design',
  useCases,
}: {
  sectionBg?: string
  imageCardBg?: string
  productImage: string
  sectionBgImage: string
  productImageAlt?: string
  badge1?: string
  badge2?: string
  useCases: UseCase[]
}) {
  return (
    <section style={{ background: sectionBg }} className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-4 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 lg:text-4xl">
          Industries &amp; <span className="text-blue-500">Use Cases</span>
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Image panel */}
          <div
            className="group relative overflow-hidden rounded-[32px] border border-blue-400 p-4 w-100 h-100 z-10 pt-16 transition-shadow hover:shadow-xl"
            style={{ 
              backgroundImage: `url("${sectionBgImage}")`, 
              backgroundColor: imageCardBg,
              backgroundSize: 'cover', 
              backgroundPosition: 'center' 
            }}
          >
            <div className="relative z-10 mx-auto w-full">
              <img
                src={productImage}
                alt={productImageAlt}
                className="w-full h-70 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Absolute Badges */}
            <div className="absolute right-0 top-5 !z-20">
              <span className="flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-sm font-bold shadow-sm">
                <RadioDot /> {badge1}
              </span>
            </div>
            <div className="absolute left-0 bottom-5 z-20">
              <span className="flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-sm font-bold shadow-sm">
                <RadioDot /> {badge2}
              </span>
            </div>
          </div>

          {/* Use-case cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            {useCases.map(({ title, description }) => (
              <div key={title} className="rounded-2xl bg-white p-7 shadow-sm border border-slate-100 transition-all hover:border-blue-200 hover:shadow-md">
                <div className="flex flex-col-2 items-start gap-4">
                  <RadioDot />
                  <div>
                    <h3 className="text-[17px] font-bold text-slate-900">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── tiny helper ─────────────────────────────────────────── */
const RadioDot = () => (
   <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-5 border-blue-500 bg-white shadow-sm">
    {/* <span className="h-2.5 w-2.5 rounded-full bg-blue-500" /> */}
  </span>
)
