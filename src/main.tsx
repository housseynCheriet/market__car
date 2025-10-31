import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@/components/theme-provider'
import { initTheme } from '@/lib/theme'

// Initialize theme on app load
initTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="recars-theme">
      <App />
    </ThemeProvider>
  </StrictMode>,
)
