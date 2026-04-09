/**
 * Shared Google Maps embed — no API key required.
 * Uses the free maps.google.com embed URL.
 */
export default function GoogleMapEmbed({
  query = '1435 51st St North Bergen, NJ 07047 USA',
  height = 520,
  className = '',
}: {
  query?: string
  height?: number | string
  className?: string
}) {
  const src = `https://maps.google.com/maps?width=600&height=400&hl=en&q=${encodeURIComponent(query)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`

  return (
    <div
      className={`relative overflow-hidden rounded-[26px] border border-white/20 bg-slate-200 ${className}`}
      style={{ height }}
    >
      <iframe
        title="KAV Imports Location"
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full"
      />
      <div className="pointer-events-none absolute bottom-4 left-4 rounded-2xl bg-white px-5 py-3 shadow-md">
        <p className="text-base font-bold text-slate-900">Location</p>
        <p className="text-xs text-slate-500">North Bergen, NJ</p>
      </div>
    </div>
  )
}
