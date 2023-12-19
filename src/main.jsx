import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Aplicacion } from './Aplicacion.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Aplicacion />
    </React.StrictMode>
  </BrowserRouter>,
)
