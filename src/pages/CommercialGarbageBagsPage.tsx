import { type NavLink } from '../components/landing/LandingHeader'
import LandingHeader from '../components/landing/LandingHeader'
import LandingFooter from '../components/landing/LandingFooter'
import TrustedBySection from '../components/landing/TrustedBySection'
import ProductSizesSection, { type ProductSize } from '../components/landing/ProductSizesSection'
import IndustriesSection from '../components/landing/IndustriesSection'
import ContactSection from '../components/landing/ContactSection'
import CustomizationSection from '../components/landing/CustomizationSection'
import TestimonialsSection from '../components/landing/TestimonialsSection'
import FaqSection, { type Faq } from '../components/landing/FaqSection'

import bagImage from '../assets/image 5.png'
import TwoBagsImage from '../assets/Group 1410136870.png'
import bagAndBinImage from '../assets/image 15.png';
import sizeFrameImage from '../assets/Frame 1000003303.png'
import heroPatternLeft from '../assets/Group 237495.png'
import heroPatternRight from '../assets/Group 237494.png'
import heroMobilePattern from '../assets/Group 237495 (1).png'
import circleBg from '../assets/Group 1410136861.png'
import testimonialAvatar from '../assets/Frame 52.png'
import testimonialImage from '../assets/Group 1410136864.png';
import { scrollToHash } from '../utils/scrollToHash'
import industriesBgSectionImage from '../assets/Frame 1000003310 (1).png';

/* ─── Data ───────────────────────────────────────────────── */
const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#top' },
  { label: 'Features', href: '#features' },
  { label: 'Specifications', href: '#specifications' },
  { label: 'Customization', href: '#customization' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Bulk Order', href: '#contact' },
  { label: 'FAQ', href: '#faqs' },
  { label: 'Contact Us', href: '#contact' }
]

const PRODUCT_SIZES: ProductSize[] = [  
  {
    id: 'size-1',
    title: 'Small Garbage Bags',
    shortLabel: 'Size 1',
    size: '18 × 24 inches',
    capacity: '10 – 15 Liters',
    idealFor: 'Bathroom bins, small office bins, household use',
  },
  {
    id: 'size-2',
    title: 'Medium Garbage Bags',
    shortLabel: 'Size 2',
    size: '24 × 32 inches',
    capacity: '20 – 35 Liters',
    idealFor: 'Commercial kitchens, clinics, hospitality back areas',
  },
  {
    id: 'size-3',
    title: 'Large Garbage Bags',
    shortLabel: 'Size 3',
    size: '30 × 40 inches',
    capacity: '40 – 80 Liters',
    idealFor: 'Warehouses, heavy-duty facility and industrial waste use',
  },
]

const INDUSTRIES = [
  { title: 'Restaurants & Food Services', description: 'Reliable waste management for kitchens and food preparation areas.' },
  { title: 'Healthcare Facilities', description: 'Safe and hygienic waste disposal solutions for hospitals and clinics.' },
  { title: 'Hotels & Hospitality', description: 'Supports housekeeping operations with durable trash liners.' },
  { title: 'Cleaning & Facility Management', description: 'Trusted by professional cleaning companies handling large-scale waste collection.' },
]

const FAQS: Faq[] = [
  { id: 'faq-1', q: 'Do you provide bulk pricing for businesses?', a: 'Yes — we offer competitive bulk pricing based on volume and size. Contact us for a tailored quote.' },
  { id: 'faq-2', q: 'Can we order custom sizes or thickness?', a: 'Absolutely. We support custom dimensions and gauge specifications for commercial clients.' },
  { id: 'faq-3', q: 'Do you supply distributors and resellers?', a: 'Yes, we work with distributors and resellers across the US. Reach out to discuss partnership terms.' },
  { id: 'faq-4', q: 'What industries do you supply?', a: 'Restaurants, healthcare, hospitality, cleaning companies, warehouses, and more.' },
  { id: 'faq-5', q: 'Do you offer private label garbage bags?', a: 'Yes — custom branding, logo printing and private label packaging are available based on MOQ.' },
]

const CUSTOMIZATION_BULLETS = [
  'Custom bag sizes',
  'Adjustable thickness levels',
  'Custom colors',
  'Private label branding',
  'Logo printing on bags',
  'Custom packaging for distributors',
]

/* ─── Shared tiny helpers ────────────────────────────────── */
// const RadioDot = () => (
//   <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-blue-300 bg-white shadow-sm">
//     <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
//   </span>
// )

const RadioADot = () => (
  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-5 border-blue-500 bg-white shadow-sm">
    {/* <span className="h-2.5 w-2.5 rounded-full bg-blue-500" /> */}
  </span>
)

const FEATURES = [
  'Manufactured with high-quality HDPE and LLDPE materials to withstand heavy waste loads.',
  'Prevents liquids from leaking, ensuring safe and hygienic waste disposal.',
  'Delivered in large-volume packaging for efficient inventory management.',
] as const

/* ─── Page ───────────────────────────────────────────────── */
export default function CommercialGarbageBagsPage() {
  return (
    <div id="top" className="min-h-screen bg-white text-[#101214]">
      <LandingHeader links={NAV_LINKS} />

      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#dfe7f8] py-20 md:py-22 lg:py-22">
          <img src={heroPatternLeft} alt="" aria-hidden width={384} height={384} className="pointer-events-none absolute -left-12 bottom-0 hidden w-72 select-none opacity-80 lg:block lg:w-96" />
          <img src={heroPatternRight} alt="" aria-hidden width={384} height={384} className="pointer-events-none absolute right-0 top-0 hidden w-72 select-none opacity-90 lg:block lg:w-96" />

          <div className="mx-auto flex flex-col items-center gap-16 px-4 lg:grid lg:grid-cols-2 md:px-16 lg:px-16">
            {/* Image Content - First on Mobile, Second on Desktop */}
            <div className="relative order-1 mx-auto flex w-full max-w-[580px] items-center justify-center lg:order-2 lg:mx-0 lg:justify-end">
              {/* Background Decoration */}
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <img src={heroMobilePattern} alt="" aria-hidden width={500} height={500} className="w-full max-w-[500px] select-none opacity-90 lg:hidden" />
                <div className="hidden h-96 w-96 rounded-full bg-blue-400/20 blur-[80px] lg:flex" />
              </div>
              
              <img 
                src={bagImage} 
                alt="Commercial garbage bag" 
                width={580} 
                height={580} 
                fetchPriority="high" 
                className="relative z-10 w-full drop-shadow-[0_45px_100px_rgba(0,0,0,0.18)]" 
              />
              
              {/* Floating Badges */}
              <div className="absolute -left-4 top-[30%] z-20 lg:top-[35%]">
                 <div className="flex items-center gap-2 rounded-full border border-slate-100 bg-white px-3 py-2 text-[10px] font-bold shadow-xl sm:gap-3 sm:px-5 sm:py-3 sm:text-sm">
                    <RadioADot /> Industrial-Grade Materials
                 </div>
              </div>
              <div className="absolute -right-2 z-20 lg:top-[50%] lg:bottom-auto">
                 <div className="flex items-center gap-2 rounded-full border border-slate-100 bg-white px-3 py-2 text-[10px] font-bold shadow-xl sm:gap-3 sm:px-5 sm:py-3 sm:text-sm">
                    <RadioADot/> Leak-Proof Design
                 </div>
              </div>
              <div className="absolute -left-4 z-20 bottom-20 lg:bottom-[25%] lg:top-auto">
                 <div className="flex items-center gap-2 rounded-full border border-slate-100 bg-white px-3 py-2 text-[10px] font-bold shadow-xl sm:gap-3 sm:px-5 sm:py-3 sm:text-sm">
                    <RadioADot /> Custom Sizes & Thickness
                 </div>
              </div>
            </div>

            {/* Text Content - Second on Mobile, First on Desktop */}
            <div className="relative z-10 order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
              <span className="inline-block rounded-full border border-blue-200 bg-white/80 px-5 py-2 text-sm font-bold tracking-tight text-blue-600">
                For Businesses &amp; Bulk Buyers
              </span>
              <h1 className="mt-8 font-montserrat text-3xl font-black leading-[1.05] tracking-normal text-slate-950 md:text-4xl lg:text-4xl">
                Commercial-Grade<br />
                <span className="text-[#4b86e8]">Garbage Bags</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg font-small leading-relaxed text-slate-600 lg:text-md">
                Durable HDPE &amp; LLDPE trash can liners designed for commercial waste management, industrial use, and large-scale operations.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <a href="#specifications" className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-base font-bold text-slate-700 transition hover:bg-slate-50 active:scale-95 sm:px-8" onClick={(e) => { e.preventDefault(); scrollToHash('#specifications') }}>
                  View Product Sizes
                </a>
                <a href="#contact" className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-base font-bold !text-white shadow-lg transition hover:bg-slate-800 hover:-translate-y-1 active:scale-95 sm:px-8" onClick={(e) => { e.preventDefault(); scrollToHash('#contact') }}>
                  Request Bulk Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Shared components ─────────────────────────────── */}
        <TrustedBySection />

        <ProductSizesSection
          sizes={PRODUCT_SIZES}
          frameImage={sizeFrameImage}
          frameImageAlt="Garbage bag size reference"
        />

        {/* ── Key Features ─────────────────────────────────── */}
        <section id="features" className="bg-[#f1f3f5] py-20 lg:py-48">
          <div className="mx-auto grid items-center gap-16 px-4 lg:grid-cols-3 lg:px-16">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[5rem] lg:leading-[0.95]">
                Key<br className="hidden lg:block" /> Features
              </h2>
              <p className="mt-8 text-lg font-medium leading-relaxed text-slate-500 lg:text-xl">
                Heavy-duty HDPE &amp; LLDPE garbage bags designed for maximum strength and reliable protection.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                <a
                  href="#specifications"
                  className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-bold text-slate-700 transition hover:bg-slate-50 active:scale-95"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToHash('#specifications')
                  }}
                >
                  View Product Sizes
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-base font-bold !text-white shadow-lg transition hover:bg-slate-800 hover:-translate-y-1 active:scale-95"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToHash('#contact')
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-[500px] items-center justify-center">
              <div className="absolute inset-0 m-auto rounded-full bg-slate-300/40 blur-2xl" />
              <img src={circleBg} alt="" aria-hidden width={500} height={500} loading="lazy" className="relative z-0 w-full animate-pulse-slow opacity-80" />
              <img src={bagImage} alt="Heavy-duty garbage bags" width={400} height={400} loading="lazy" className="absolute top-5 right-10 z-10 drop-shadow-[0_30px_60px_rgba(0,0,0,0.2)]" />
            </div>

            <div className="flex flex-col gap-8 lg:pl-12">
              {FEATURES.map((line, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-6 border-b border-slate-300/50 pb-8 last:border-0 sm:flex-row sm:items-start sm:text-left">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500 text-lg font-black text-white shadow-lg shadow-blue-200">
                    {i + 1}
                  </span>
                  <p className="text-[17px] font-bold leading-relaxed text-slate-800">
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <IndustriesSection
          productImage={bagAndBinImage}
          sectionBgImage={industriesBgSectionImage}
          productImageAlt="Garbage bag use case"
          badge1="Custom Sizes & Thickness"
          badge2="Leak-Proof Design"
          imageCardBg="#cae4ef"
          useCases={INDUSTRIES}
        />

        <ContactSection
          heading="Request Product"
          headingHighlight="Information or Bulk Pricing"
          productLabel="garbage bags"
        />

        <CustomizationSection
          heading="Need Custom Garbage Bags for Your Business?"
          intro="We offer customized garbage bag solutions for businesses with specific requirements. Our customization options include:"
          bulletPoints={CUSTOMIZATION_BULLETS}
          panelBg="#C1D8FF"
          productImage={TwoBagsImage}
          productImageAlt="Custom garbage bags"
        />

        <TestimonialsSection
          productImage={testimonialImage}
          productImageAlt="Commercial garbage bag"
          avatarImage={testimonialAvatar}
          quote="These garbage bags are extremely durable and perfect for our restaurant kitchen. We've been ordering them regularly."
          reviewerName="Maithali Raj"
          reviewerTitle="Restaurant Owner"
          subtitle="Our team works closely with businesses to deliver high-quality, durable solutions tailored to real-world needs. From small kitchens to large-scale operations, we ensure consistency, reliability, and satisfaction at every step."
        />

        <FaqSection faqs={FAQS} defaultOpenId="faq-1" />
      </main>

      <LandingFooter
        ctaTitle="Need Garbage Bags for Your Business?"
        ctaSubtitle="Partner with KAV Imports for reliable bulk supply of durable garbage bags designed for commercial waste management."
        ctaImage={bagImage}
      />
    </div>
  )
}
