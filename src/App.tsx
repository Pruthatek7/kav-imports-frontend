import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Declare gtag for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Route-based code splitting
const CommercialGarbageBagsPage = lazy(
  () => import('./pages/CommercialGarbageBagsPage'),
);
const PolyMailerBagsPage = lazy(() => import('./pages/PolyMailerBagsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Loading fallback component
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-white">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
  </div>
);

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      const pagePath = location.pathname + location.search;
      window.gtag('config', import.meta.env.VITE_GOOGLE_ADS_ID, { page_path: pagePath });
      window.gtag('config', import.meta.env.VITE_GOOGLE_ANALYTICS_ID, { page_path: pagePath });
    }
  }, [location]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<CommercialGarbageBagsPage />} />
        <Route path="/poly-mailer-bags" element={<PolyMailerBagsPage />} />
        <Route
          path="/commercial-garbage-bags"
          element={<CommercialGarbageBagsPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
