import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import './assets/styles/reset.css'
import './assets/styles/vars.css'
import './assets/styles/global.css'

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename='/linkedin-2'>
      <App />
    </BrowserRouter>
)
