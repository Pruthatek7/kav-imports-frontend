import { useNavigate } from 'react-router-dom'
import { scrollToHash } from '../../utils/scrollToHash'
import logo from '../../assets/logo.png'
import rippleEffect from '../../assets/Group 237494 (1).png'

import LocationIcon from '../../assets/Location.svg'
import MailIcon from '../../assets/Mail.svg'
import UserIcon from '../../assets/User.svg'
import CallingIcon from '../../assets/Calling.svg'

const QUICK_LINKS = ['Home', 'Products', 'Industries', 'Customization', 'Bulk Orders', 'About Us', 'Contact us']
const PRODUCTS = [
  'Garbage Bags',
  'Poly Mailer Bags',
  'Custom Printed Bags',
  'Heavy-Duty Waste Bags',
  'Eco-Friendly Packaging',
]
const SUPPORT = ['FAQs', 'Shipping & Delivery', 'Return Policy', 'Privacy Policy', 'Terms & Conditions']

export default function LandingFooter({
  ctaTitle = 'Need Garbage Bags for Your Business?',
  ctaSubtitle = 'Partner with KAV Imports for reliable bulk supply of durable garbage bags designed for commercial waste management.',
  ctaImage,
}: {
  ctaTitle?: string
  ctaSubtitle?: string
  ctaImage?: string
}) {
  const navigate = useNavigate()
  return (
    <footer className="relative bg-white font-sans overflow-hidden ">
      {/* Blue CTA Banner Section */}
      <div className="relative z-20 px-4 md:px-8 lg:px-12 -mb-24">
        <div className="mx-auto max-w-[1350px] overflow-hidden rounded-[40px] bg-[#4285F4] shadow-2xl">
          <div className="relative grid items-center justify-center gap-2 px-8 py-8 md:px-16 lg:grid-cols-[2fr_1fr] lg:py-4">
            {/* Background pattern (Ripple Effect) */}
            <img 
              src={rippleEffect} 
              alt="" 
              width={775}
              height={775}
              className="absolute left-1/2 top-[25%] lg:left-auto lg:right-20 lg:top-1/2 -translate-y-1/2 -translate-x-1/2 lg:translate-x-1/4 opacity-100 pointer-events-none block w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] mix-blend-soft-light"
            />

            <div className="relative z-10 order-2 lg:order-1">
              <h3 className="font-montserrat text-2xl font-black tracking-wide text-white lg:text-[32px] lg:leading-[1.1]">
                {ctaTitle}
              </h3>
              <p className="mt-5 max-w-[500px] text-lg leading-relaxed text-blue-50/90">
                {ctaSubtitle}
              </p>
              
              <div className="mt-10 flex max-w-[480px] items-center rounded-full bg-white p-1.5 shadow-lg">
                <input
                  type="email"
                  className="flex-1 bg-transparent px-6 text-[15px] font-medium text-slate-900 outline-none placeholder:text-slate-400"
                  placeholder="Enter your email address..."
                />
                <button
                  type="button"
                  className="rounded-full bg-black px-10 py-3.5 text-[15px] font-bold text-white transition hover:bg-slate-800 active:scale-95 cursor-pointer"
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="relative z-10 flex justify-center lg:justify-center order-1 lg:order-2">
              {ctaImage && (
                <img
                  src={ctaImage}
                  alt="Product"
                  className="w-full max-w-[320px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] lg:translate-x-10 lg:scale-110"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer (Black Section) */}
      <div className="relative bg-black pt-48 pb-16 px-8 text-white min-h-[500px] rounded-t-[100px]">
        {/* Background Frame decoration */}
        

        <div className="relative z-10 mx-auto max-w-[1450px] px-6 lg:px-12">
          <div className="grid gap-y-16 gap-x-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 pb-16">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <img src={logo} alt="KAV Imports" width={83} height={100} className="h-16 w-auto" />
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-[13px] leading-relaxed text-slate-400">
                  Providing high-quality, durable, and eco-conscious packaging solutions for businesses of all sizes. Trusted by Industries nationwide.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-montserrat text-lg font-bold">Quick Links</h4>
              <ul className="mt-6 space-y-4">
                {QUICK_LINKS.map((item) => (
                  <ListItem key={item} label={item} onClick={() => { if (item === 'Contact us') scrollToHash('#contact') }} />
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-montserrat text-lg font-bold">Products</h4>
              <ul className="mt-6 space-y-4">
                {PRODUCTS.map((item) => (
                  <ListItem 
                    key={item} 
                    label={item} 
                    onClick={() => {
                      if (item === 'Garbage Bags') {
                        navigate('/')
                        window.scrollTo(0, 0)
                      } else if (item === 'Poly Mailer Bags') {
                        navigate('/poly-mailer-bags')
                        window.scrollTo(0, 0)
                      }
                    }}
                  />
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-montserrat text-lg font-bold">Support</h4>
              <ul className="mt-6 space-y-4">
                {SUPPORT.map((item) => (
                  <ListItem key={item} label={item} onClick={() => { if (item === 'FAQs') scrollToHash('#faqs') }} />
                ))}
              </ul>
            </div>

            {/* Locations & Contacts */}
            <div className="sm:col-span-2 md:col-span-3 lg:col-span-2 xl:col-span-2 mt-8 md:mt-0">
              <div className="grid gap-y-12 gap-x-10 sm:grid-cols-2">
                {/* NJ Location */}
                <div className="flex gap-4 order-1">
                  <img src={LocationIcon} alt="" className="h-8 w-8 shrink-0" />
                  <div>
                    <h4 className="font-montserrat text-lg font-bold leading-tight">New Jersey Location</h4>
                    <p className="mt-4 text-[13px] leading-relaxed text-slate-400">
                      1435, 51st Street, Building #5,<br />
                      Second Floor, North Bergen, NJ<br />
                      07047
                    </p>
                  </div>
                </div>

                {/* TX Location */}
                <div className="flex gap-4 order-2 sm:order-3">
                  <img src={LocationIcon} alt="" className="h-8 w-8 shrink-0" />
                  <div>
                    <h4 className="font-montserrat text-lg font-bold leading-tight">Texas Location</h4>
                    <p className="mt-4 text-[13px] leading-relaxed text-slate-400">
                      12814 Murphy Rd, Stafford,<br />
                      Tx 77477
                    </p>
                  </div>
                </div>

                {/* Jay Patel */}
                <div className="flex gap-4 order-3 sm:order-2">
                  <img src={UserIcon} alt="" className="h-8 w-8 shrink-0" />
                  <div className="space-y-4">
                    <h4 className="font-montserrat text-lg font-bold leading-tight">Jay Patel</h4>
                    <div className="space-y-3 text-[13px]">
                      <a href="tel:9147032250" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition">
                         <img src={CallingIcon} alt="" className="h-4 w-4" /> (914) 703-2250
                      </a>
                      <a href="mailto:jay@kavimports.com" className="flex items-center gap-2 text-blue-400 hover:underline transition">
                        <img src={MailIcon} alt="" className="h-4 w-4" /> jay@kavimports.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Kanak Patel */}
                <div className="flex gap-4 order-4 sm:order-4">
                  <img src={UserIcon} alt="" className="h-8 w-8 shrink-0" />
                  <div className="space-y-4">
                    <h4 className="font-montserrat text-lg font-bold leading-tight">Kanak Patel</h4>
                    <div className="space-y-3 text-[13px]">
                      <a href="tel:6154145595" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition">
                         <img src={CallingIcon} alt="" className="h-4 w-4" /> (615) 414-5595
                      </a>
                      <a href="mailto:kanak@kavimports.com" className="flex items-center gap-2 text-blue-400 hover:underline transition">
                        <img src={MailIcon} alt="" className="h-4 w-4" /> kanak@kavimports.com
                      </a>
                      <a href="mailto:texas@kavimports.com" className="flex items-center gap-2 text-blue-400 hover:underline transition">
                        <img src={MailIcon} alt="" className="h-4 w-4" /> texas@kavimports.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 bg-white py-4 border-t border-slate-100">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-12 flex flex-col items-center justify-between gap-8 md:flex-row">
          <p className="text-[14px] font-bold tracking-wider text-slate-900 uppercase">
            ©2026 ALL RIGHTS RESERVED
          </p>
          
          <p className="text-[14px] font-bold text-slate-900">
            Design & Developed by <a href="https://pruthatek.com" target="_blank" rel="noopener noreferrer" className="!text-blue-600 !underline">PRUTHATEK</a>
          </p>

          <div className="flex items-center gap-4 text-white">
            <SocialIcon platform="instagram" />
            <SocialIcon platform="facebook" />
            <SocialIcon platform="google" />
            <SocialIcon platform="x" />
          </div>
        </div>
      </div>
    </footer>
  )
}

function ListItem({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <li className="flex items-start gap-2.5 group">
      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-500 transition-colors group-hover:bg-blue-400" />
      <button 
        onClick={onClick}
        className="text-[13px] text-slate-400 transition hover:text-blue-400 text-left cursor-pointer"
      >
        {label}
      </button>
    </li>
  )
}

function SocialIcon({ platform }: { platform: 'instagram' | 'facebook' | 'google' | 'x' }) {
  const icons = {
    instagram: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    google: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C17.987 1.187 15.653 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.747-.067-1.493-.187-2.053H12.48z"/>
      </svg>
    ),
    x: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  }

  return (
    <a
      href="#"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:bg-blue-600"
      aria-label={platform}
    >
      {icons[platform]}
    </a>
  )
}
