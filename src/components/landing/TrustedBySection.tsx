/**
 * Reusable "Trusted By" section.
 * Shows a centred heading and a row of placeholder logo boxes.
 */
type TrustedByLabel = string

export default function TrustedBySection({
  labels = ['Business Logo', 'Business Logo', 'Business Logo', 'Business Logo'],
}: {
  labels?: TrustedByLabel[]
}) {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1240px] px-4 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 lg:text-4xl">
          Trusted <span className="text-blue-500">By</span>
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          {labels.map((name, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="h-20 w-32 rounded-lg bg-slate-200" />
              <span className="text-sm font-medium text-slate-500">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
