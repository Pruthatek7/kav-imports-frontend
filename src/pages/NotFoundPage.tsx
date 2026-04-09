import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="text-sm font-semibold text-slate-600">404</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Page not found</h1>
        <p className="mt-3 text-base leading-7 text-slate-600">
          The page you’re looking for doesn’t exist. Use one of the product pages below.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-105"
          >
            Commercial garbage bags
          </Link>
          <Link
            to="/poly-mailer-bags"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            Poly mailer bags
          </Link>
        </div>
      </div>
    </div>
  )
}

