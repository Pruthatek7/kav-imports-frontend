import { useState } from 'react'

export type ProductSize = {
  id: string
  title: string
  /** Short display label used for the size selector button */
  shortLabel?: string
  size: string
  capacity: string
  idealFor: string
}

/**
 * Interactive product-size selector section used on both landing pages.
 * Left column: radio-style size buttons.
 * Middle: frame / reference image.
 * Right: spec card with active size details + Buy Now CTA.
 */
export default function ProductSizesSection({
  sizes,
  frameImage,
  frameImageAlt = 'Product size reference',
  buyNowHref = '#contact',
}: {
  sizes: ProductSize[]
  frameImage: string
  frameImageAlt?: string
  buyNowHref?: string
}) {
  const [activeSize, setActiveSize] = useState<ProductSize>(sizes[0])

  return (
    <section id="specifications" className="border-y border-slate-200 bg-[#f6f7f9] py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-4 lg:px-8">
        <h2 className="text-center text-md font-bold tracking-normal text-slate-900 lg:text-4xl">
          Product <span className="text-blue-500">Sizes</span>
        </h2>

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[240px_1fr_400px] justify-center items-center">
          {/* Size selector */}
          <div className="flex flex-row flex-wrap gap-4 lg:flex-col">
            {sizes.map((size) => (
              <button
                key={size.id}
                type="button"
                onClick={() => setActiveSize(size)}
                className={`flex items-center gap-4 rounded-full border px-6 py-4 text-left text-[15px] font-semibold transition-all ${
                  activeSize.id === size.id
                    ? 'border-blue-400 bg-white shadow-md'
                    : 'border-blue-100 bg-white/60 hover:bg-white'
                }`}
              >
                <div
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[1.5px] transition-colors ${
                    activeSize.id === size.id ? 'border-blue-400 bg-[#eef3fe]' : 'border-slate-300 bg-white'
                  }`}
                >
                  <div
                    className={`h-2.5 w-2.5 rounded-full transition-transform ${
                      activeSize.id === size.id ? 'scale-100 bg-blue-500' : 'scale-0 bg-transparent'
                    }`}
                  />
                </div>
                {size.shortLabel ?? size.title}
              </button>
            ))}
          </div>

          {/* Frame image */}
          <div className="flex aspect-square items-center justify-center rounded-[32px]  bg-white shadow-sm">
            <img src={frameImage} alt={frameImageAlt} className="h-full w-full object-contain" />
          </div>

          {/* Spec card */}
          <div className="rounded-[32px] border border-blue-100 bg-[#dfe7f8] p-5 ">
            <h3 className="text-2xl font-extrabold text-slate-900 lg:text-2xl">{activeSize.title}</h3>
            <ul className="mt-8 space-y-3">
              <li className="flex items-center justify-between border-b border-blue-200/50 pb-3">
                <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">Size</span>
                <span className="text-lg font-bold text-slate-900">{activeSize.size}</span>
              </li>
              <li className="flex items-center justify-between border-b border-blue-200/50 pb-3">
                <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">Capacity</span>
                <span className="text-lg font-bold text-slate-900 text-right">{activeSize.capacity}</span>
              </li>
            </ul>
            <div className="mt-8">
              <span className="inline-block rounded-full bg-white/50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-blue-700">
                Ideal For
              </span>
              <p className="mt-4 text-[15px] font-medium leading-relaxed text-slate-700">{activeSize.idealFor}</p>
            </div>
            <a
              href={buyNowHref}
              className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-black py-4.5 text-base font-bold !text-white transition hover:-translate-y-1 hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(buyNowHref.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
