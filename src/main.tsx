import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PremiumLeadGenLanding from './Landing.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PremiumLeadGenLanding/>
  </StrictMode>,
)
