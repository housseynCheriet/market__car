import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from '@/lib/queryClient'
import HomePage from '@/pages/HomePage'
import CarDetailsPage from '@/pages/CarDetailsPage'
import SettingsPage from '@/pages/SettingsPage'
import NotFound from './pages/NotFound';

// ScrollToTop component to handle scroll restoration
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/car/:carId" element={<CarDetailsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFound />} />
          {/* Add more routes here as needed */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
