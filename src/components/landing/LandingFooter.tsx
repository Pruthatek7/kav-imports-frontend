import { useNavigate } from 'react-router-dom'
import { scrollToHash } from '../../utils/scrollToHash'
import logo from '../../assets/logo.png'
import rippleEffect from '../../assets/Group 237494 (1).png'
import blackBgFrame from '../../assets/Frame 1000003320.png'

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
    <footer className="relative bg-white font-sans overflow-hidden">
      {/* Blue CTA Banner Section */}
      <div className="relative z-20 px-4 md:px-8 lg:px-12 -mb-24">
        <div className="mx-auto max-w-[1350px] overflow-hidden rounded-[40px] bg-[#4285F4] shadow-2xl">
          <div className="relative grid items-center justify-center gap-2 px-8 py-4 md:px-16 lg:grid-cols-[2fr_1fr] lg:py-4">
            {/* Background pattern (Ripple Effect) */}
            <img 
              src={rippleEffect} 
              alt="" 
              className="absolute right-20 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-100 pointer-events-none lg:block hidden w-full max-w-[600px] mix-blend-soft-light"
            />

            <div className="relative z-10">
              <h3 className="font-montserrat text-md font-black tracking-wide text-white lg:text-[32px] lg:leading-[1.1]">
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

            <div className="relative z-10 flex justify-center lg:justify-center">
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
      <div className="relative bg-black pt-48 pb-16 text-white min-h-[500px] rounded-t-[1200px]">
        {/* Background Frame decoration */}
        <img 
          src={blackBgFrame} 
          alt="" 
          className="absolute top-0 left-0 w-full h-auto pointer-events-none z-0"
        />

        <div className="relative z-10 mx-auto max-w-[1450px] px-6 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 pb-16">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <img src={logo} alt="KAV Imports" className="h-16 w-auto" />
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-[13px] leading-relaxed text-slate-400">
                  Providing high-quality, durable, and eco-conscious packaging solutions for businesses of all sizes. Trusted by Industries nationwide.
                </p>
              </div>
              <div className="mt-8 flex gap-3 justify-start text-black">
                <SocialIcon platform="linkedin" />
                <SocialIcon platform="facebook" />
                <SocialIcon platform="x" />
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

            {/* Locations */}
            <div>
              <div className="space-y-8">
                <div>
                  <h4 className="font-montserrat text-lg font-bold">New Jersey Location</h4>
                  <p className="mt-4 text-[13px] leading-relaxed text-slate-400">
                    1435, 51st Street, Building #5,<br />
                    Second Floor, North Bergen, NJ<br />
                    07047
                  </p>
                </div>
                <div>
                  <h4 className="font-montserrat text-lg font-bold">Texas Location</h4>
                  <p className="mt-4 text-[13px] leading-relaxed text-slate-400">
                    12814 Murphy Rd, Stafford,<br />
                    Tx 77477
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Contacts */}
            <div>
              <div className="space-y-8">
                <div>
                  <h4 className="font-montserrat text-lg font-bold">Jay Patel</h4>
                  <div className="mt-4 space-y-2 text-[13px] text-slate-400">
                    <a href="tel:9147032250" className="block hover:text-blue-400 transition">(914) 703 - 2250</a>
                    <a href="mailto:jay@kavimports.com" className="block hover:text-blue-400 transition">jay@kavimports.com</a>
                  </div>
                </div>
                <div>
                  <h4 className="font-montserrat text-lg font-bold">Kanak Patel</h4>
                  <div className="mt-4 space-y-2 text-[13px] text-slate-400">
                    <a href="tel:6154145595" className="block hover:text-blue-400 transition">(615) 414-5595</a>
                    <a href="mailto:kanak@kavimports.com" className="block hover:text-blue-400 transition">Kanak@KavImports.com</a>
                    <a href="mailto:texas@KavImports.com" className="block hover:text-blue-400 transition">texas@KavImports.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Blue Bar */}
      <div className="relative z-10 bg-[#3b82f6] py-4 text-white">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:flex-row text-[12px] font-medium">
          <p>Copyright @ 2026 revered by KAYImports</p>
          <p>Design & Developed by PRUTHATEK</p>
          <div className="flex items-center gap-2">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Terms & Conditions</a>
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

function SocialIcon({ platform }: { platform: 'linkedin' | 'facebook' | 'x' }) {
  const icons = {
    linkedin: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
   x: (
      <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="black" />
        <path d="M13.6823 10.6218L20.2391 3H18.6854L13.0041 9.59124L8.45501 3H3.21045L10.1293 13.0645L3.21045 21H4.76418L10.8071 14.095L15.592 21H20.8365L13.682 10.6218H13.6823ZM11.5843 13.1923L10.8876 12.197L5.32557 4.25055H7.71217L12.1983 10.6591L12.895 11.6545L18.6862 19.9272H16.2996L11.5843 13.1932V13.1923Z" fill="white" />
      </svg>
    ),
  }

  return (
    <a
      href="#"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:bg-blue-400 hover:text-white"
      aria-label={platform}
    >
      {icons[platform]}
    </a>
  )
}
