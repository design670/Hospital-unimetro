import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.css'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Servicios from './pages/Servicios.jsx'
import Urgencias from './pages/Urgencias.jsx'
import Cita from './pages/Cita.jsx'
import Equipo from './pages/Equipo.jsx'
import Universitario from './pages/Universitario.jsx'
import Quienes from './pages/Quienes.jsx'
import Pacientes from './pages/Pacientes.jsx'
import Atencion from './pages/Atencion.jsx'
import Aliados from './pages/Aliados.jsx'
import Contacto from './pages/Contacto.jsx'
import { Datos, Terminos, Transparencia, NotFound } from './pages/Legales.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="urgencias" element={<Urgencias />} />
          <Route path="solicitar-cita" element={<Cita />} />
          <Route path="equipo-medico" element={<Equipo />} />
          <Route path="hospital-universitario" element={<Universitario />} />
          <Route path="quienes-somos" element={<Quienes />} />
          <Route path="pacientes" element={<Pacientes />} />
          <Route path="atencion-al-usuario" element={<Atencion />} />
          <Route path="aliados" element={<Aliados />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="datos-personales" element={<Datos />} />
          <Route path="terminos-y-cookies" element={<Terminos />} />
          <Route path="transparencia" element={<Transparencia />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
