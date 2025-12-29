import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import './Style/Header.css'
import './Style/Home.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
