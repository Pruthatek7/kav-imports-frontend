import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { scrollToHash } from '../../utils/scrollToHash';

import logo from '../../assets/logo.png';

export type NavLink = { label: string; href: string };

const SEARCHABLE_PRODUCTS = [
  { name: 'Garbage Bags', link: '/commercial-garbage-bags' },
  { name: 'Poly Mailer Bags', link: '/poly-mailer-bags' },
  { name: 'Wicket Bags', link: 'https://kavimports.com/product/7' },
  { name: 'Ice Bags', link: 'https://kavimports.com/product/1' },
  { name: 'Product Rolls', link: 'https://kavimports.com/product/9' },
  { name: 'Poly bags', link: 'https://kavimports.com/product/11' },
  { name: 'Paper Bags', link: 'https://kavimports.com/product/3' },
  { name: 'Foil Container', link: 'https://kavimports.com/product/4' },
  { name: 'Thermal Paper Rolls', link: 'https://kavimports.com/product/5' },
  { name: 'Tshirt Bags', link: 'https://kavimports.com/product/6' },
  {
    name: 'Foil Pop Up Sheets & Roll Sheets',
    link: 'https://kavimports.com/product/8',
  },
  { name: 'Plastic Reusable Bags', link: 'https://kavimports.com/product/13' },
];

export default function LandingHeader({
  links,
  mobileBottomCta = { label: 'Contact Us', href: '#contact' },
  contactNumber = 'New Jersey: (914) 703-2250  |  Texas: (615) 414-5595',
}: {
  links: NavLink[];
  mobileBottomCta?: { label: string; href: string };
  contactNumber?: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!menuOpen && !searchOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen, searchOpen]);

  const filteredProducts = SEARCHABLE_PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleProductClick = (link: string) => {
    setSearchOpen(false);
    setSearchQuery('');
    if (link.startsWith('http')) {
      window.open(link, '_blank');
    } else {
      navigate(link);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-black py-1 text-white">
        {/* Desktop Top Bar */}
        <div className="mx-auto hidden items-center justify-between px-4 text-[13px] font-medium lg:flex lg:px-8">
          <span className="font-montserrat">{contactNumber}</span>
          <div className="flex items-center gap-2.5">
            <SocialIcon
              platform="instagram"
              aria-label="Instagram"
              href="https://www.instagram.com/kav_import/"
            />
            <SocialIcon
              platform="facebook"
              aria-label="Facebook"
              href="https://www.facebook.com/KavImportsTexas"
            />
            <SocialIcon
              platform="x"
              aria-label="X"
              href="https://x.com/importskav"
            />
            {/* <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-[15px] font-bold transition hover:bg-blue-500">in</a>
            <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-[15px] font-bold transition hover:bg-blue-500">f</a>
            <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-[15px] font-bold transition hover:bg-blue-500">𝕏</a> */}
          </div>
        </div>
        {/* Mobile Top Bar */}
        <div className="flex items-center justify-center gap-4 lg:hidden">
          <SocialIcon
            platform="instagram"
            href="https://www.instagram.com/kav_import/"
          />
          <SocialIcon
            platform="facebook"
            href="https://www.facebook.com/KavImportsTexas"
          />
          <SocialIcon platform="x" href="https://x.com/importskav" />
          {/* <a href="#" aria-label="LinkedIn" className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-[13px] font-bold transition hover:bg-blue-500">in</a>
          <a href="#" aria-label="Facebook" className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-[13px] font-bold transition hover:bg-blue-500">f</a>
          <a href="#" aria-label="Twitter" className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-[13px] font-bold transition hover:bg-blue-500">𝕏</a> */}
        </div>
      </div>

      {/* Main sticky nav */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md">
        {/* Desktop Header */}
        <div className="mx-auto hidden h-24 max-w-[1400px] items-center justify-between px-8 lg:flex">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src={logo}
              alt="KAV Imports"
              width={83}
              height={100}
              className="h-12 w-auto lg:h-16"
            />
          </a>

          {/* Desktop nav */}
          <nav className="flex items-center gap-8" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.label + l.href}
                href={l.href}
                className="text-[15px] font-semibold text-slate-800 transition hover:text-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash(l.href);
                }}
              >
                {l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
              aria-label="Search products"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </nav>
        </div>

        {/* Mobile Header */}
        <div className="grid h-20 w-full grid-cols-3 items-center px-4 lg:hidden">
          {/* Left: Hamburger */}
          <div className="flex justify-start">
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="text-[#1B2B48] transition"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex justify-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img
                src={logo}
                alt="KAV Imports"
                width={83}
                height={100}
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Right: Search */}
          <div className="flex justify-end">
            <button
              type="button"
              aria-label="Search"
              className="grid h-10 w-10 place-items-center rounded-full bg-[#4285F4] text-white shadow-md transition hover:bg-blue-600"
              onClick={() => setSearchOpen(true)}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[70] bg-black/95 lg:hidden"
          role="dialog"
          aria-modal
        >
          <div className="flex h-full flex-col px-6 pb-8 pt-6">
            <button
              type="button"
              aria-label="Close menu"
              className="mb-2 self-start grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-white/20"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                aria-hidden
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <nav className="mt-8 flex-1">
              {(() => {
                const hasHome = links.some(
                  (l) => l.label.toLowerCase() === 'home',
                );
                const allLinks = hasHome
                  ? links
                  : [{ label: 'Home', href: '#top' }, ...links];
                return allLinks
                  .filter((l) => l.label !== mobileBottomCta.label)
                  .map((l, idx, arr) => (
                    <a
                      key={l.label + idx}
                      href={l.href}
                      className={`flex items-center justify-between py-4 text-xl font-semibold !text-white ${idx < arr.length - 1 ? 'border-b border-white/10' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(false);
                        l.href === '#top'
                          ? window.scrollTo({ top: 0, behavior: 'smooth' })
                          : scrollToHash(l.href);
                      }}
                    >
                      {l.label}
                      <span className="text-white/40" aria-hidden>
                        →
                      </span>
                    </a>
                  ));
              })()}
            </nav>

            <a
              href={mobileBottomCta.href}
              className="mt-6 block w-full rounded-full bg-blue-500 py-4 text-center text-base font-semibold !text-white shadow transition hover:bg-blue-600"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                scrollToHash(mobileBottomCta.href);
              }}
            >
              {mobileBottomCta.label}
            </a>
          </div>
        </div>
      )}
      {/* Search overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-white"
          role="dialog"
          aria-modal
        >
          {/* Header */}
          <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6 lg:px-12">
            <div className="flex flex-1 items-center gap-4">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-slate-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                autoFocus
                placeholder="Search products..."
                className="w-full bg-transparent text-xl font-medium text-slate-900 outline-none placeholder:text-slate-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="ml-4 grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
              onClick={() => {
                setSearchOpen(false);
                setSearchQuery('');
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Results */}
          <div className="flex-1 overflow-y-auto px-6 py-8 lg:px-12">
            <div className="mx-auto max-w-3xl">
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-400">
                Product Results
              </h3>
              <div className="grid gap-2">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <button
                      key={product.name}
                      onClick={() => handleProductClick(product.link)}
                      className="flex items-center justify-between rounded-2xl border border-slate-50 bg-slate-50/50 p-5 text-left transition hover:border-blue-200 hover:bg-blue-50/50 group"
                    >
                      <span className="text-lg font-semibold text-slate-800 transition group-hover:text-blue-600">
                        {product.name}
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          d="M9 5l7 7-7 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ))
                ) : (
                  <div className="py-12 text-center">
                    <p className="text-lg text-slate-500">
                      No products found matching "{searchQuery}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SocialIcon({
  platform,
  href = '#',
}: {
  platform: 'instagram' | 'facebook' | 'x';
  href?: string;
}) {
  const icons = {
    instagram: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    facebook: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    x: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:bg-blue-600"
      aria-label={platform}
    >
      {icons[platform]}
    </a>
  );
}
