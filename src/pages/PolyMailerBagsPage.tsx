import { useState } from 'react';
import { type NavLink } from '../components/landing/LandingHeader';
import LandingHeader from '../components/landing/LandingHeader';
import LandingFooter from '../components/landing/LandingFooter';
// import TrustedBySection from '../components/landing/TrustedBySection';
import ProductSizesSection, {
  type ProductSize,
} from '../components/landing/ProductSizesSection';
import IndustriesSection from '../components/landing/IndustriesSection';
import ContactSection from '../components/landing/ContactSection';
import CustomizationSection from '../components/landing/CustomizationSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import FaqSection, { type Faq } from '../components/landing/FaqSection';

import bagImage from '../assets/Group 1410136867.png';
import polyBagsKeyFeaturesImage from '../assets/image 7.png';
import customizedMailerBagImage from '../assets/Group 1410136869 (1).png';
import polybagImage from '../assets/image 14.png';
import { scrollToHash } from '../utils/scrollToHash';
import footerPolyBagImage from '../assets/image 8.png';
// import polyMailer1 from '../assets/PolyMailer.png';
// import polyMailer2 from '../assets/PolyMailer2.png';
// import polyMailer3 from '../assets/PolyMailer3.png';
import polyMailer4 from '../assets/PolyMailer4.png';
import polyMailer5 from '../assets/PolyMailer5.png';
import polyMailer6 from '../assets/PolyMailer6.png';
import polyMailer7 from '../assets/PolyMailer7.png';
import polyMailer8 from '../assets/PolyMailer8.png';

/* ─── Data ───────────────────────────────────────────────── */
const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#top' },
  { label: 'Features', href: '#features' },
  { label: 'Specifications', href: '#specifications' },
  { label: 'Customization', href: '#customization' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Bulk Order', href: '#contact' },
  { label: 'FAQ', href: '#faqs' },
  { label: 'Contact Us', href: '#contact' },
];

const PRODUCT_SIZES: ProductSize[] = [
  {
    id: 'size-1',
    title: '5 × 7 Polymailer',
    shortLabel: '5x7',
    size: '5 × 7 inches',
    material: 'LLDPE material',
    idealFor:
      'Jewelry, keys, small parts, coins, seeds, and micro-accessories.',
  },
  {
    id: 'size-2',
    title: '6 × 9 Polymailer',
    shortLabel: '6x9',
    size: '6 × 9 inches',
    material: 'LLDPE material',
    idealFor: 'Cosmetics, sunglasses, small accessories, cards, and passports.',
  },
  {
    id: 'size-3',
    title: '7.5 × 10.5 Polymailer',
    shortLabel: '7.5x10.5',
    size: '7.5 × 10.5 inches',
    material: 'LLDPE material',
    idealFor: 'DVD cases, small journals, thin books, and small t-shirts.',
  },
  {
    id: 'size-4',
    title: '9 × 12 Polymailer',
    shortLabel: '9x12',
    size: '9 × 12 inches',
    material: 'LLDPE material',
    idealFor: 'Standard documents, catalogs, t-shirts, and thin clothing.',
  },
  {
    id: 'size-5',
    title: '10 × 13 Polymailer',
    shortLabel: '10x13',
    size: '10 × 13 inches',
    material: 'LLDPE material',
    idealFor: 'Standard apparel, magazines, soft goods, and larger t-shirts.',
  },
  {
    id: 'size-6',
    title: '12 × 15.5 Polymailer',
    shortLabel: '12x15.5',
    size: '12 × 15.5 inches',
    material: 'LLDPE material',
    idealFor: 'Sweaters, thin jackets, multiple t-shirts, and handbags.',
  },
  {
    id: 'size-7',
    title: '14 × 17 Polymailer',
    shortLabel: '14x17',
    size: '14 × 17 inches',
    material: 'LLDPE material',
    idealFor: 'Bulky clothing, large jackets, and multiple apparel items.',
  },
  {
    id: 'size-8',
    title: '14.5 × 19 Polymailer',
    shortLabel: '14.5x19',
    size: '14.5 × 19 inches',
    material: 'LLDPE material',
    idealFor: 'Shoe boxes, small parcels, and bulky soft goods.',
  },
  {
    id: 'size-9',
    title: '19 × 24 Polymailer',
    shortLabel: '19x24',
    size: '19 × 24 inches',
    material: 'LLDPE material',
    idealFor: 'Large bedding, towels, winter coats, and multiple shoe boxes.',
  },
  {
    id: 'size-10',
    title: '24 × 24 Polymailer',
    shortLabel: '24x24',
    size: '24 × 24 inches',
    material: 'LLDPE material',
    idealFor: 'Extra large bedding, pillows, and bulk clothing orders.',
  },
  {
    id: 'size-11',
    title: '24 × 36 Polymailer',
    shortLabel: '24x36',
    size: '24 × 36 inches',
    material: 'LLDPE material',
    idealFor: 'Oversized items, heavy-duty shipping, and largest bulk orders.',
  },
];

const INDUSTRIES = [
  {
    title: 'eCommerce & Online Stores',
    description:
      'Ideal for shipping clothing, accessories, and non-fragile items with a clean, professional look.',
  },
  {
    title: 'Logistics & Courier Services',
    description: 'Lightweight and durable for high-volume shipping operations.',
  },
  {
    title: 'Retail Brands & Boutiques',
    description: 'Enhance brand presentation with custom-printed mailers.',
  },
  {
    title: 'Warehousing & Fulfillment Centers',
    description: 'Streamline packaging with easy-to-use self-seal mailers.',
  },
];

const FAQS: Faq[] = [
  {
    id: 'faq-1',
    q: 'Do you provide bulk pricing for businesses?',
    a: 'Yes — we offer competitive bulk pricing based on volume and size. Contact us for a tailored quote.',
  },
  {
    id: 'faq-2',
    q: 'Can we order custom sizes or thickness?',
    a: 'Absolutely. We support custom dimensions and gauge specifications for commercial clients.',
  },
  {
    id: 'faq-3',
    q: 'Do you supply distributors and resellers?',
    a: 'Yes, we work with distributors and resellers across the US. Reach out to discuss partnership terms.',
  },
  {
    id: 'faq-4',
    q: 'What industries do you supply?',
    a: 'eCommerce brands, 3PLs, retail boutiques, warehouses, fulfillment centers, and more.',
  },
  {
    id: 'faq-5',
    q: 'Do you offer private label poly mailer bags?',
    a: 'Yes — custom branding, color printing, and private label packaging are available based on MOQ.',
  },
];

const CUSTOMIZATION_BULLETS = [
  'Custom bag sizes',
  'Adjustable thickness levels',
  'Custom colors',
  'Branded poly mailers with company logos',
  'Special bulk packaging options',
];

const TESTIMONIALS = [
  {
    reviewerName: 'Jessica Morgan',
    quote:
      'These poly mailer bags are lightweight, durable, and perfect for our eCommerce shipping requirements. Customers love the professional packaging.',
    reviewerTitle: 'Online Store Owner',
  },
  {
    reviewerName: 'Kevin Richardson',
    quote:
      'The adhesive seal is strong and secure, making shipping much easier for our fulfillment team. Great quality mailer bags.',
    reviewerTitle: 'Logistics Coordinator',
  },
  {
    reviewerName: 'Emily Carter',
    quote:
      'We ship hundreds of apparel orders weekly, and these poly mailers provide excellent protection while keeping shipping costs low.',
    reviewerTitle: 'Fashion Brand Founder',
  },
  {
    reviewerName: 'Rohan Patel',
    quote:
      'These premium mailer bags are tear-resistant and waterproof, which gives us confidence during long-distance deliveries.',
    reviewerTitle: 'eCommerce Operations Manager',
  },
  {
    reviewerName: 'Sophia Turner',
    quote:
      'Excellent print quality and material finish. These mailer bags help our brand packaging look much more professional and premium.',
    reviewerTitle: 'Small Business Owner',
  },
];

const FEATURES = [
  {
    heading: 'Tear-Resistant Material',
    desc: 'Made from high-quality poly film that resists punctures and rough handling during transit.',
  },
  {
    heading: 'Waterproof Protection',
    desc: 'Keeps products safe from moisture, dust, and external damage during shipping.',
  },
  {
    heading: 'Lightweight & Cost-Effective',
    desc: 'Reduces shipping weight and overall logistics costs, ideal for eCommerce fulfillment.',
  },
] as const;

/* ─── Page ───────────────────────────────────────────────── */
export default function PolyMailerBagsPage() {
  const [contactMessage, setContactMessage] = useState('');

  const handleBuyNow = (size: ProductSize) => {
    setContactMessage(
      `Hello, I am interested in purchasing your ${size.title} (Size: ${size.size}, Material: ${size.material}). Could you please provide a bulk pricing quote?`,
    );
  };

  return (
    <div id="top" className="min-h-screen bg-white text-[#101214]">
      <LandingHeader links={NAV_LINKS} />

      <main>
        {/* ... Hero Section remains unchanged ... */}
        <section className="relative overflow-hidden bg-[#DFE9FF] py-20 md:py-20 lg:py-20">
          <div className="mx-auto grid gap-12 items-center lg:grid-cols-2">
            <div className="relative z-10 px-4 lg:px-24 flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
              <span className="inline-block rounded-full border border-blue-200 bg-white/80 px-5 py-2 text-sm font-bold tracking-tight text-blue-600">
                Ship Smarter. Pack Stronger. Deliver Better.
              </span>
              <h1 className="mt-8 text-3xl font-black leading-[1.05] tracking-normal text-slate-950 md:text-5xl lg:text-4xl">
                Premium <span className="text-[#4b86e8]">Poly Mailer</span>
                <br className="hidden sm:block" />
                Bags for Shipping
              </h1>
              <p className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-slate-600 lg:text-xl mx-auto lg:mx-0">
                Durable, lightweight, and tamper-proof poly mailers designed for
                secure packaging. Perfect for eCommerce, retail, and logistics.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#specifications"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-black-200 bg-white px-10 text-base font-bold text-slate-700 transition hover:bg-slate-50 active:scale-95"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHash('#specifications');
                  }}
                >
                  View Product Sizes
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-black px-10 text-base font-bold !text-white shadow-lg transition hover:bg-slate-800 hover:-translate-y-1"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHash('#contact');
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="relative mx-auto flex w-full items-center justify-center px-0 lg:px-0 order-1 lg:order-2">
              <img
                src={bagImage}
                alt="Poly mailer bag"
                width={500}
                height={500}
                fetchPriority="high"
                className="relative z-10 w-full max-w-[500px] lg:max-w-none drop-shadow-[0_45px_100px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>
        </section>

        <ProductSizesSection
          sizes={PRODUCT_SIZES}
          images={[
            polyMailer4,
            polyMailer5,
            polyMailer6,
            polyMailer7,
            polyMailer8,
          ]}
          frameImageAlt="Poly mailer size reference"
          onBuyNow={handleBuyNow}
        />

        {/* ... Rest of sections remain unchanged ... */}
        <section id="features" className="bg-[#E8F1FF] py-20 lg:py-16">
          <div className="mx-auto grid items-center gap-16 px-4 lg:px-16">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[4rem]">
                Key Features
              </h2>
              <p className="mt-8 text-lg font-medium leading-relaxed text-slate-500 lg:text-xl">
                Our premium poly mailer bags protect your shipments while
                keeping logistics costs low.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                <a
                  href="#specifications"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-slate-300 bg-white px-10 text-base font-bold text-slate-700 transition hover:bg-slate-50 active:scale-95"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHash('#specifications');
                  }}
                >
                  View Product Sizes
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-black px-10 text-base font-bold !text-white shadow-lg transition hover:bg-slate-800 hover:-translate-y-1 active:scale-95"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHash('#contact');
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 lg:pt-0 justify-center items-center">
              <div className="relative mx-auto flex w-full h-[400px] max-w-[500px] items-center justify-center">
                <img
                  src={polyBagsKeyFeaturesImage}
                  alt="Poly mailer bags"
                  width={500}
                  height={500}
                  loading="lazy"
                  className="relative z-10 w-full drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)]"
                />
              </div>

              <div className="flex flex-col gap-10">
                {FEATURES.map((feat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center gap-6 sm:flex-row sm:items-start sm:text-left"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4b86e8] text-lg font-black text-white shadow-lg shadow-blue-200">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900">
                        {feat.heading}
                      </h3>
                      <p className="mt-2 text-[15px] font-medium leading-relaxed text-slate-600">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <IndustriesSection
          productImage={polybagImage}
          productImageAlt="Poly mailer use case"
          badge2="Custom Sizes & Thickness"
          badge1="Waterproof & Dustproof"
          useCases={INDUSTRIES}
        />

        <ContactSection
          heading="Request Product"
          headingHighlight="Information or Bulk Pricing"
          productLabel="poly mailer bags"
          initialMessage={contactMessage}
        />

        <CustomizationSection
          heading="Need Custom Poly Mailer Bags for Your Business?"
          intro="KAV Imports offers tailored poly mailer bag solutions to match your specific requirements. We provide:"
          bulletPoints={CUSTOMIZATION_BULLETS}
          footerNote="Our team works closely with businesses to deliver reliable and cost-effective shipping packaging products."
          panelBg="#C1D8FF"
          productImage={customizedMailerBagImage}
          productImageAlt="Custom poly mailer bags"
        />

        <TestimonialsSection
          testimonials={TESTIMONIALS}
          subtitle="Our team works closely with businesses to deliver high-quality, durable solutions tailored to real-world needs. From small boutiques to large-scale operations, we ensure consistency, reliability, and satisfaction at every step."
        />

        <FaqSection faqs={FAQS} defaultOpenId="faq-1" />
      </main>

      <LandingFooter
        ctaTitle="Need Poly Mailer Bags for Your Business?"
        ctaSubtitle="Partner with KAV Imports for reliable bulk supply of durable poly mailers designed for secure eCommerce shipments."
        ctaImage={footerPolyBagImage}
      />
    </div>
  );
}
