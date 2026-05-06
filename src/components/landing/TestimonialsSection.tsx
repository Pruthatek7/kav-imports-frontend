import { useState, useEffect } from 'react';

/**
 * "Customer Testimonials" section shared by both landing pages.
 */
export interface Testimonial {
  quote: string;
  reviewerName: string;
  reviewerTitle: string;
}

export default function TestimonialsSection({
  testimonials = [],
  subtitle,
}: {
  testimonials?: Testimonial[];
  subtitle?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  // Auto-slide effect
  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length]);

  const current = testimonials[currentIndex] || {
    quote: 'No testimonials available.',
    reviewerName: 'Unknown',
    reviewerTitle: '',
  };

  return (
    <section
      id="testimonials"
      className="bg-white pb-20 pt-10 lg:pb-32 lg:pt-16"
    >
      <div className="mx-auto max-w-[1240px] px-8 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-normal text-slate-900 lg:text-4xl">
          Customer <span className="text-blue-500">Testimonials</span>
        </h2>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-[840px] text-center text-[17px] font-medium leading-relaxed text-slate-500 lg:text-lg">
            {subtitle}
          </p>
        )}

        <div className="mt-16 flex flex-col items-center">
          {/* Wide Slider Card */}
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-50/50 p-6 shadow-sm lg:p-10">
            {/* Quote Icon Background Decor */}
            <div className="absolute top-6 left-10 text-7xl font-serif text-black/50 select-none pointer-events-none">
              &ldquo;
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Star Rating */}
              {/* <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1 text-lg text-amber-500">
                  <span className="flex gap-0.5">★★★★★</span>
                </div>
                <span className="text-xs font-bold text-slate-400">
                  ({reviewCount} Reviews)
                </span>
              </div> */}

              {/* Quote Block */}
              <div className="mt-6 min-h-[120px] max-w-3xl">
                <blockquote className="text-xl font-semibold leading-snug text-slate-900 transition-all duration-500 md:text-2xl lg:text-3xl">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
              </div>

              {/* Reviewer Info */}
              <div className="mt-6">
                <p className="text-base font-bold text-slate-900">
                  {current.reviewerName}
                </p>
                <p className="mt-0.5 text-xs font-bold text-slate-500">
                  <span className="mr-2 text-slate-300">—</span>{' '}
                  {current.reviewerTitle}
                </p>
              </div>

              {/* Slider Controls - Bottom Integrated */}
              {testimonials.length > 1 && (
                <div className="mt-8 flex flex-col items-center gap-5">
                  {/* Pagination Dots */}
                  <div className="flex gap-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentIndex
                            ? 'w-6 bg-blue-500'
                            : 'w-1.5 bg-slate-200 hover:bg-slate-300'
                        }`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Arrow Buttons */}
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      aria-label="Previous testimonial"
                      onClick={handlePrev}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-md ring-1 ring-slate-100 transition hover:bg-blue-500 hover:text-white hover:shadow-lg active:scale-95"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          d="M15 19l-7-7 7-7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      aria-label="Next testimonial"
                      onClick={handleNext}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-md ring-1 ring-slate-100 transition hover:bg-blue-500 hover:text-white hover:shadow-lg active:scale-95"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
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
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
