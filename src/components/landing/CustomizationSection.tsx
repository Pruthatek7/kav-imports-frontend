import { scrollToHash } from '../../utils/scrollToHash'

/**
 * "Customization Options" section shared by both landing pages.
 * Left: heading, bullet list, CTA.  Right: product image.
 */
export default function CustomizationSection({
  heading,
  intro,
  bulletPoints,
  footerNote,
  panelBg = '#B0CDFF',
  productImage,
  productImageAlt = 'Custom product',
  ctaHref = '#contact',
  ctaLabel = 'Request Custom Quote',
  socialHandle = '@KAVImports',
}: {
  heading: string
  intro?: string
  bulletPoints: string[]
  footerNote?: string
  panelBg?: string
  productImage: string
  productImageAlt?: string
  ctaHref?: string
  ctaLabel?: string
  socialHandle?: string
}) {
  return (
    <section id="customization" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-4 lg:px-4">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 lg:text-4xl">
          Customization <span className="text-blue-500">Options</span>
        </h2>

        <div
          className="mt-8 grid items-center gap-12 overflow-hidden rounded-[48px] lg:grid-cols-2 lg:pl-10 lg:py-10"
          style={{ background: panelBg }}
        >
          <div>
            <h3 className="text-3xl font-extrabold leading-tight text-slate-900 lg:text-4xl">{heading}</h3>
            {intro && (
              <p className="mt-2 text-[17px] font-medium leading-relaxed text-slate-700">{intro}</p>
            )}
            
            <ul className="mt-2 space-y-3">
              {bulletPoints.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] font-bold text-slate-800 lg:text-base">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" stroke="currentColor" strokeWidth="4">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {footerNote && (
              <p className="mt-2 text-[15px] font-bold text-slate-900">{footerNote}</p>
            )}

            <a
              href={ctaHref}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-black px-10 py-4 text-base font-bold !text-white transition hover:-translate-y-1 hover:shadow-xl active:scale-95"
              onClick={(e) => {
                e.preventDefault()
                scrollToHash(ctaHref)
              }}
            >
              {ctaLabel}
            </a>
          </div>

          <div className="relative">
            <div className="absolute inset-0 m-auto h-[100%] w-[100%] rounded-full bg-white/20 blur-3xl" />
            <img
              src={productImage}
              alt={productImageAlt}
              className="relative z-10 mx-auto w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-row items-center justify-center gap-2">
          <p className="text-md font-bold text-slate-400">Join us</p>
          <p className="text-md font-black tracking-tight text-blue-500 lg:text-md">{socialHandle}</p>
        </div>
      </div>
    </section>
  )
}
