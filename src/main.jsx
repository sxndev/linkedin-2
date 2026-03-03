import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import './assets/styles/reset.css'
import './assets/styles/vars.css'
import './assets/styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
