import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { startReactDsfr } from '@codegouvfr/react-dsfr/spa'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// CSS DSFR
import '@codegouvfr/react-dsfr/main.css'

import './index.css'

startReactDsfr({ defaultColorScheme: 'light' })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
