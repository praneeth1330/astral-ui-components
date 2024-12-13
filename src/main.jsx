import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@cloudwick/astral-ui/dist/css/index.min.css";
import "@cloudwick/astral-ui/dist/css/fonts.min.css";
import { Buffer } from 'buffer';

if (!window.Buffer) {
  window.Buffer = Buffer;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
