import GoogleMapEmbed from './GoogleMapEmbed'
import { scrollToHash } from '../../utils/scrollToHash'
import contactPattern from '../../assets/Group 1410136860.png'

const FORM_FIELDS = ['Name', 'Email Address', 'Phone Number', 'Required Quantity'] as const

/**
 * Dark "Get In Touch" + request form section shared by both landing pages.
 */
export default function ContactSection({
  heading = 'Request Product',
  headingHighlight = 'Information or Bulk Pricing',
  subtitle,
  productLabel = 'garbage bags',
}: {
  heading?: string
  headingHighlight?: string
  subtitle?: string
  productLabel?: string
}) {
  const resolvedSubtitle =
    subtitle ??
    `Interested in our ${productLabel}? Get in touch with our team for product details, pricing, and custom orders.`

  return (
    <section id="contact" className="bg-[#f0f4fd] py-20 lg:py-28">
      <div className="mx-auto overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-2xl lg:grid lg:grid-cols-2">
        {/* Left: dark map panel */}
        <div className="relative flex flex-col overflow-hidden bg-[#16191f] p-8 lg:p-12">
          <img
            src={contactPattern}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-80 contrast-125"
          />
          <h2 className="relative z-10 text-3xl font-bold text-white lg:text-4xl">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <div className="relative z-10 mt-10 flex-1">
            <div className="h-[350px] lg:h-full lg:min-h-[400px]">
              <GoogleMapEmbed height="100%" className="!rounded-[32px] border-none" />
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="flex flex-col justify-center p-8 lg:p-16">
          <h2 className="text-3xl font-bold leading-tight text-slate-900 lg:text-4xl">
            {heading}{' '}
            <span className="text-blue-500">{headingHighlight}</span>
          </h2>
          <p className="mt-5 text-[17px] font-medium leading-relaxed text-slate-500">{resolvedSubtitle}</p>

          <form className="mt-10 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              {FORM_FIELDS.slice(0, 2).map((label) => (
                <label key={label} className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-800">{label}</span>
                  <input
                    type={label === 'Email Address' ? 'email' : 'text'}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                    className="h-14 w-full rounded-full border border-slate-200 bg-slate-50 px-6 text-[15px] font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </label>
              ))}
            </div>
            
            <div className="grid gap-5 sm:grid-cols-2">
              {FORM_FIELDS.slice(2).map((label) => (
                <label key={label} className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-800">{label}</span>
                  <input
                    type={label === 'Phone Number' ? 'tel' : 'text'}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                    className="h-14 w-full rounded-full border border-slate-200 bg-slate-50 px-6 text-[15px] font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </label>
              ))}
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-800">Message</span>
              <textarea
                placeholder="Enter your message"
                rows={4}
                className="w-full rounded-[24px] border border-slate-200 bg-slate-50 px-6 py-4 text-[15px] font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
            </label>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#specifications"
                className="flex items-center gap-2 rounded-full border border-blue-400 bg-white px-5 py-2 text-[15px] !text-blue-400 transition hover:bg-slate-50 active:scale-95"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToHash('#specifications')
                }}
              >
                View Product Sizes
              </a>
              <button
                type="submit"
                className="flex-1 rounded-full bg-black px-2 py-2 text-base text-white shadow-lg transition hover:bg-blue-600 hover:-translate-y-1 active:scale-95 cursor-pointer"
              >
                Submit Business Inquiry
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
