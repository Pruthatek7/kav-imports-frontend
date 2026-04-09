/**
 * "Customer Testimonials" section shared by both landing pages.
 * Left: product in concentric-ring frame + avatar overlay.
 * Right: star rating, reviewer name, quote, Trustpilot badge.
 */
export default function TestimonialsSection({
  productImage,
  productImageAlt = 'Featured product',
  reviewCount = '11.6k',
  reviewerName = 'Maithali Raj',
  reviewerTitle = 'Restaurant Owner',
  quote,
  subtitle,
  trustpilotRating = '4.6',
  trustpilotTotal = '6,195',
}: {
  productImage: string
  productImageAlt?: string
  avatarImage: string
  reviewCount?: string
  reviewerName?: string
  reviewerTitle?: string
  quote: string
  subtitle?: string
  trustpilotRating?: string
  trustpilotTotal?: string
}) {
  return (
    <section id="testimonials" className="bg-white pb-20 pt-10 lg:pb-32 lg:pt-16">
      <div className="mx-auto max-w-[1240px] px-4 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-normal text-slate-900 lg:text-4xl">
          Customer <span className="text-blue-500">Testimonials</span>
        </h2>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-[840px] text-center text-[17px] font-medium leading-relaxed text-slate-500 lg:text-lg">
            {subtitle}
          </p>
        )}

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-[1fr_1fr]">
          {/* Ring frame */}
          <div className="relative flex flex-col items-center">
            <img
                src={productImage}
                alt={productImageAlt}
                className="relative z-10 w-[75%] drop-shadow-[0_25px_40px_rgba(0,0,0,0.12)]"
              />

            {/* Slider Arrows */}
            <div className="mt-8 flex items-center gap-4">
              <button type="button" aria-label="Previous testimonial" className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition hover:bg-blue-600 hover:shadow-xl active:scale-95">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="h-px w-12 bg-slate-200" />
              <button type="button" aria-label="Next testimonial" className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition hover:border-slate-300 hover:text-slate-600 active:scale-95">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Quote block */}
          <div className="lg:pl-8">
            <div className="flex items-center gap-1.5 text-lg text-amber-500">
              <span className="flex gap-0.5">★★★★★</span>
              <span className="ml-2 text-sm font-semibold text-slate-400">({reviewCount} Reviews)</span>
            </div>
            
            <div className="mt-6 flex items-center gap-3">
              <p className="text-2xl font-extrabold text-[#4b86e8] lg:text-3xl">{reviewerName}</p>
              <div className="flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                Verified
              </div>
            </div>

            <blockquote className="mt-8 text-xl font-medium italic leading-relaxed text-slate-800 lg:text-2xl">
              &ldquo;{quote}&rdquo;
            </blockquote>
            
            <p className="mt-6 text-base font-bold text-slate-500">
              <span className="mr-2 text-slate-300">—</span> {reviewerTitle}
            </p>

            {/* Trustpilot Branding */}
            <div className="mt-8 inline-flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm">
              <div className="flex items-center gap-1.5 text-xl font-black text-[#00b67a]">
                <span className="text-2xl font-bold">★ Trustpilot</span>
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm font-bold text-slate-700">Rated {trustpilotRating} / 5 based on {trustpilotTotal} reviews</p>
                <p className="mt-1 text-xs font-medium text-slate-400">Showing our 5 star reviews.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
