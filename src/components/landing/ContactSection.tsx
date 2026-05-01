import { useState } from 'react'
import axios from 'axios'
import GoogleMapEmbed from './GoogleMapEmbed'
import { scrollToHash } from '../../utils/scrollToHash'
import contactPattern from '../../assets/Group 1410136860.png'

const FORM_FIELDS = [
  { label: 'Name', key: 'name', type: 'text' },
  { label: 'Email Address', key: 'email', type: 'email' },
  { label: 'Phone Number', key: 'phoneNumber', type: 'tel' },
  { label: 'Required Quantity', key: 'requiredQuantity', type: 'number' },
] as const

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    requiredQuantity: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const resolvedSubtitle =
    subtitle ??
    `Interested in our ${productLabel}? Get in touch with our team for product details, pricing, and custom orders.`

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setStatusMessage('')

    try {
      const apiUrl = import.meta.env.VITE_API_URL
      const response = await axios.post(`${apiUrl}/contacts`, formData)

      if (response.data.success) {
        setStatus('success')
        setStatusMessage('Your inquiry has been sent successfully! We will get back to you soon.')
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          requiredQuantity: '',
          message: '',
        })
      } else {
        throw new Error(response.data.message || 'Something went wrong')
      }
    } catch (error: any) {
      console.error('Submission error:', error)
      setStatus('error')
      setStatusMessage(
        error.response?.data?.message || error.message || 'Failed to send inquiry. Please try again later.'
      )
    }
  }

  return (
    <section id="contact" className="bg-[#f0f4fd] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
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

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {FORM_FIELDS.slice(0, 2).map((field) => (
                  <label key={field.key} className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-800">{field.label}</span>
                    <input
                      required
                      name={field.key}
                      type={field.type}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={`Enter your ${field.label.toLowerCase()}`}
                      className="h-14 w-full rounded-full border border-slate-200 bg-slate-50 px-6 text-[15px] font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </label>
                ))}
              </div>
              
              <div className="grid gap-5 sm:grid-cols-2">
                {FORM_FIELDS.slice(2).map((field) => (
                  <label key={field.key} className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-800">{field.label}</span>
                    <input
                      required
                      name={field.key}
                      type={field.type}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={`Enter your ${field.label.toLowerCase()}`}
                      className="h-14 w-full rounded-full border border-slate-200 bg-slate-50 px-6 text-[15px] font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </label>
                ))}
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-800">Message</span>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows={4}
                  className="w-full rounded-[24px] border border-slate-200 bg-slate-50 px-6 py-4 text-[15px] font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </label>

              {statusMessage && (
                <div className={`rounded-xl p-4 text-sm font-medium ${
                  status === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {statusMessage}
                </div>
              )}

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
                  disabled={status === 'submitting'}
                  className={`flex-1 rounded-full px-2 py-2 text-base text-white shadow-lg transition active:scale-95 cursor-pointer flex items-center justify-center gap-2 ${
                    status === 'submitting' ? 'bg-slate-400 cursor-not-allowed' : 'bg-black hover:bg-blue-600 hover:-translate-y-1'
                  }`}
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Business Inquiry'
                  )}
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
