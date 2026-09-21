import { Routes, Route } from 'react-router'
import { LanguageProvider } from '@/i18n'
import Home from './pages/Home'

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </LanguageProvider>
  )
}
