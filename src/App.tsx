import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

// Route-based code splitting
const CommercialGarbageBagsPage = lazy(() => import('./pages/CommercialGarbageBagsPage'))
const PolyMailerBagsPage = lazy(() => import('./pages/PolyMailerBagsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

// Loading fallback component
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-white">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
  </div>
)

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<CommercialGarbageBagsPage />} />
        <Route path="/poly-mailer-bags" element={<PolyMailerBagsPage />} />
        <Route path="/commercial-garbage-bags" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}
