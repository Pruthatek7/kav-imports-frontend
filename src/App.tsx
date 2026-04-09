import { Navigate, Route, Routes } from 'react-router-dom'
import CommercialGarbageBagsPage from './pages/CommercialGarbageBagsPage'
import PolyMailerBagsPage from './pages/PolyMailerBagsPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CommercialGarbageBagsPage />} />
      <Route path="/poly-mailer-bags" element={<PolyMailerBagsPage />} />
      <Route path="/commercial-garbage-bags" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
