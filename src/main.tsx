import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Onboarding from './pages/onboarding/onboarding.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Onboarding />
  </StrictMode>
)
