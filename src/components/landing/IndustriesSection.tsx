type UseCase = { title: string; description: string };

// "Industries & Use Cases" section.

export default function IndustriesSection({
  sectionBg = '#f6f7f9',
  productImage,
  productImageAlt = 'Product use case',
  badge1 = 'Custom Sizes & Thickness',
  badge2 = 'Leak-Proof Design',
  useCases,
}: {
  sectionBg?: string;
  productImage: string;
  productImageAlt?: string;
  badge1?: string;
  badge2?: string;
  useCases: UseCase[];
}) {
  return (
    <section style={{ background: sectionBg }} className="py-20 lg:py-32">
      <div className="mx-auto px-4 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
          Industries &amp; <span className="text-blue-500">Use Cases</span>
        </h2>

        <div className="mt-16 grid gap-4 lg:grid-cols-2 justify-center items-center">
          {/* Image panel */}
          <div className="group relative mx-auto w-[350px] lg:w-[450px] hover:shadow-xl rounded-3xl">
            <div className="relative mx-auto w-full ">
              <img
                src={productImage}
                alt={productImageAlt}
                width={500}
                height={400}
                loading="lazy"
                className="w-full  object-contain rounded-3xl"
              />
            </div>

            {/* Absolute Badges */}
            <div className="absolute -right-20 top-5 !z-20">
              <span className="flex items-center gap-2 !z-20 rounded-full bg-white px-3 py-2 text-[10px] font-bold shadow-sm sm:gap-3 sm:px-5 sm:py-2.5 sm:text-sm">
                <RadioDot /> {badge1}
              </span>
            </div>
            <div className="absolute -left-20 bottom-5 !z-20 ">
              <span className="flex items-center gap-2 !z-20 rounded-full bg-white px-3 py-2 text-[10px] font-bold shadow-sm sm:gap-3 sm:px-5 sm:py-2.5 sm:text-sm">
                <RadioDot /> {badge2}
              </span>
            </div>
          </div>

          {/* Use-case cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {useCases.map(({ title, description }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100 transition-all hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex flex-col items-center text-center gap-4 sm:flex-row sm:items-start sm:text-left">
                  <RadioDot />
                  <div>
                    <h3 className="text-[17px] font-bold text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── tiny helper ─────────────────────────────────────────── */
const RadioDot = () => (
  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-5 border-blue-500 bg-white shadow-sm">
    {/* <span className="h-2.5 w-2.5 rounded-full bg-blue-500" /> */}
  </span>
);
