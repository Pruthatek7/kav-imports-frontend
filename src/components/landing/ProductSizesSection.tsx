import { useState, useEffect } from 'react'

export type ProductSize = {
  id: string
  title: string
  /** Short display label used for the size selector button */
  shortLabel?: string
  size: string
  capacity?: string
  material?: string
  thickness?: string
  idealFor: string
}

/**
 * Interactive product-size selector section used on both landing pages.
 * Left column: radio-style size buttons.
 * Middle: multi-image slider / carousel.
 * Right: spec card with active size details + Buy Now CTA.
 */
export default function ProductSizesSection({
  sizes,
  images = [],
  frameImageAlt = 'Product image',
  buyNowHref = '#contact',
  onBuyNow,
}: {
  sizes: ProductSize[]
  images?: string[]
  frameImageAlt?: string
  buyNowHref?: string
  onBuyNow?: (size: ProductSize) => void
}) {
  const [activeSize, setActiveSize] = useState<ProductSize>(sizes[0])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-play the slider
  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section id="specifications" className="border-y border-slate-200 bg-[#f6f7f9] py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-4 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-normal text-slate-900 lg:text-4xl">
          Product <span className="text-blue-500">Sizes</span>
        </h2>

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[240px_1fr_400px] justify-center items-center">
          {/* Size selector */}
          <div className={`flex flex-row flex-wrap gap-3 justify-center ${sizes.length > 6 ? 'lg:grid lg:grid-cols-2 lg:w-[280px]' : 'lg:flex-col lg:w-[240px]'}`}>
            {sizes.map((size) => (
              <button
                key={size.id}
                type="button"
                onClick={() => setActiveSize(size)}
                className={`flex items-center gap-3 rounded-full border px-4 py-3 text-left text-[13px] font-semibold transition-all ${
                  activeSize.id === size.id
                    ? 'border-blue-400 bg-white shadow-md'
                    : 'border-blue-100 bg-white/60 hover:bg-white'
                }`}
              >
                <div
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-[1.5px] transition-colors ${
                    activeSize.id === size.id ? 'border-blue-400 bg-[#eef3fe]' : 'border-slate-300 bg-white'
                  }`}
                >
                  <div
                    className={`h-2 w-2 rounded-full transition-transform ${
                      activeSize.id === size.id ? 'scale-100 bg-blue-500' : 'scale-0 bg-transparent'
                    }`}
                  />
                </div>
                <span className="truncate">{size.shortLabel ?? size.title}</span>
              </button>
            ))}
          </div>

          {/* Image Slider / Carousel */}
          <div className="relative group aspect-square flex flex-col items-center justify-center rounded-[32px] bg-white shadow-sm overflow-hidden p-8 lg:ml-8">
            <div className="relative h-full w-full">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${frameImageAlt} ${idx + 1}`}
                  className={`absolute inset-0 h-full w-full object-contain transition-all duration-700 ease-in-out ${
                    idx === currentImageIndex ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-4 pointer-events-none'
                  }`}
                />
              ))}
            </div>

            {/* Slider Controls (Dots) */}
            {images.length > 1 && (
              <div className="absolute bottom-6 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex ? 'w-8 bg-blue-500' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
            
            {/* Arrows (Hidden on mobile, visible on hover) */}
            {images.length > 1 && (
              <>
                <button 
                  onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                >
                  <svg className="h-6 w-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button 
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                >
                  <svg className="h-6 w-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                </button>
              </>
            )}
          </div>

          {/* Spec card */}
          <div className="rounded-[32px] border border-blue-100 bg-[#dfe7f8] p-5 ">
            <h3 className="text-2xl font-extrabold text-slate-900 lg:text-2xl">{activeSize.title}</h3>
            <ul className="mt-8 space-y-3">
              <li className="flex items-center justify-between border-b border-blue-200/50 pb-3">
                <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">Size</span>
                <span className="text-lg font-bold text-slate-900">{activeSize.size}</span>
              </li>
              {activeSize.capacity && (
                <li className="flex items-center justify-between border-b border-blue-200/50 pb-3">
                  <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">Capacity</span>
                  <span className="text-lg font-bold text-slate-900 text-right">{activeSize.capacity}</span>
                </li>
              )}
              {activeSize.material && (
                <li className="flex items-center justify-between border-b border-blue-200/50 pb-3">
                  <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">Material</span>
                  <span className="text-lg font-bold text-slate-900 text-right">{activeSize.material}</span>
                </li>
              )}
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
                onBuyNow?.(activeSize)
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
