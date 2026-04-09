import { useState } from 'react'

export type Faq = { id: string; q: string; a: string }

/**
 * Figma-accurate FAQ accordion used on both landing pages.
 * Left-border highlight + animated blue chevron.
 */
export default function FaqSection({
  faqs,
  defaultOpenId,
}: {
  faqs: Faq[]
  defaultOpenId?: string
}) {
  const [openId, setOpenId] = useState<string>(defaultOpenId ?? faqs[0]?.id ?? '')

  return (
    <section id="faqs" className="bg-[#f8fafc] py-20 lg:py-48">
      <div className="mx-auto max-w-[1240px] px-4 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-normal text-slate-900 lg:text-4xl">
          Frequently <span className="text-blue-500">Asked</span> Questions
        </h2>

        <div className="mx-auto mt-16">
          {faqs.map((f) => (
            <div key={f.id} className={`overflow-hidden transition-all duration-300 border-b-2 p-2 ${openId === f.id ? 'border-blue-200 shadow-xl' : 'border-slate-200  hover:border-slate-300'}`}>
              <button
                type="button"
                aria-expanded={openId === f.id}
                className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left text-lg text-slate-900 lg:px-2 lg:py-2 lg:text-md"
                onClick={() => setOpenId((c) => (c === f.id ? '' : f.id))}
              >
                <div className="flex items-center gap-6">
                  <div className={`h-8 w-1.5 shrink-0 rounded-full transition-colors bg-blue-500`} />
                  {f.q}
                </div>
                <div
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all duration-300 bg-blue-500  text-white  ${openId === f.id ? ' rotate-180 shadow-lg shadow-blue-200' : ''}`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openId === f.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="border-t border-slate-100 px-10 pb-8 pt-6 lg:pl-28">
                  <p className="text-[17px] font-medium leading-relaxed text-slate-600">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
