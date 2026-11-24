import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import Icon from './Icon.jsx'
import { Dato, TelUrgencias } from './ui.jsx'
import { MENU, FOOTER_LINKS, SITE, waLink } from '../site.js'

const PAGE_NAMES = {
  '/': 'la página de inicio', '/servicios': 'servicios y especialidades', '/urgencias': 'Urgencias', '/solicitar-cita': 'solicitar una cita',
  '/equipo-medico': 'el equipo médico', '/hospital-universitario': 'el hospital universitario', '/quienes-somos': 'el HUM',
  '/pacientes': 'pacientes y visitantes', '/atencion-al-usuario': 'Atención al usuario', '/aliados': 'EPS, empresas y remitentes', '/contacto': 'contacto y ubicación',
}

function Cookies() {
  const [show, setShow] = useState(() => { try { return !localStorage.getItem('hum-cookies') } catch { return true } })
  if (!show) return null
  const close = (v) => { try { localStorage.setItem('hum-cookies', v) } catch {} setShow(false) }
  return (
    <div className="cookies" role="dialog" aria-label="Aviso de cookies">
      <p>Usamos cookies para que el sitio funcione y para entender cómo se usa. Puedes aceptarlas o elegir cuáles activar.</p>
      <div className="btn-row">
        <button className="btn btn-primary" onClick={() => close('all')}>Aceptar</button>
        <Link className="btn btn-ghost" to="/terminos-y-cookies" onClick={() => close('config')}>Configurar</Link>
      </div>
    </div>
  )
}

export default function Layout() {
  const { pathname, hash } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => { setOpen(false); if (!hash) window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname, hash])
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <div className="topbar-hours"><span className="pulse" />Urgencias abiertas las 24 horas · {SITE.address}</div>
          <div className="topbar-actions">
            <Link className="tb-urg" to="/urgencias"><Icon name="siren" /><span className="tb-label">Urgencias 24 horas · <TelUrgencias /></span><span className="tb-short">Urgencias 24 h</span></Link>
            <Link to="/solicitar-cita"><Icon name="calendar" /><span className="tb-label">Solicitar cita</span><span className="tb-short">Cita</span></Link>
            <a href={waLink(PAGE_NAMES[pathname] || 'la página web')} target="_blank" rel="noreferrer"><Icon name="whatsapp" /><span className="tb-label">WhatsApp · {SITE.whatsapp}</span><span className="tb-short">WhatsApp</span></a>
          </div>
        </div>
      </div>

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap"><div className="header-pill">
          <Link to="/" className="logo" aria-label="HUM, ir al inicio"><img src="/img/logo-hum.png" alt="HUM Hospital Regional Universitario Metropolitano" /></Link>
          <nav className="nav" aria-label="Menú principal">
            {MENU.map((m) => <NavLink key={m.to} to={m.to}>{m.label}</NavLink>)}
          </nav>
          <div className="header-cta">
            <Link className="btn btn-primary" to="/solicitar-cita"><Icon name="calendar" /><span>Solicitar cita</span></Link>
            <button className="burger" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen(!open)}>
              <Icon name={open ? 'close' : 'menu'} />
            </button>
          </div>
        </div></div>
      </header>

      <nav className={`mobile-nav ${open ? 'open' : ''}`} aria-label="Menú móvil">
        {MENU.map((m) => <Link key={m.to} to={m.to}>{m.label}<Icon name="arrow" /></Link>)}
        <Link to="/atencion-al-usuario">Atención al usuario<Icon name="arrow" /></Link>
        <Link to="/contacto">Contacto y ubicación<Icon name="arrow" /></Link>
        <div className="btn-row">
          <Link className="btn btn-primary" to="/solicitar-cita"><Icon name="calendar" /><span>Solicitar cita</span></Link>
          <Link className="btn btn-alert" to="/urgencias"><Icon name="siren" /><span>Urgencias 24 horas</span></Link>
        </div>
      </nav>

      <main><Outlet /></main>

      <footer className="footer">
        <div className="frame on-blue"><div className="wrap">
          <div className="footer-grid">
            <div>
              <Link to="/" className="footer-logo-w" aria-label="HUM, ir al inicio"><img src="/img/logo-hum-white.png" alt="HUM Hospital Regional Universitario Metropolitano" /></Link>
              <div className="addr">
                <p><Icon name="pin" />{SITE.address}</p>
                <p><Icon name="clock" /><span>{SITE.hours24} {SITE.hoursConsulta}</span></p>
                <p><Icon name="whatsapp" /><span>Citas: WhatsApp {SITE.whatsapp} · <a href={`mailto:${SITE.citas}`}>{SITE.citas}</a></span></p>
                <p><Icon name="mail" /><span>Atención al usuario: <a href={`mailto:${SITE.siau}`}>{SITE.siau}</a></span></p>
              </div>
            </div>
            <div>
              <h4>Enlaces</h4>
              <ul>{FOOTER_LINKS.map((l) => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}</ul>
            </div>
            <div>
              <h4>Legales</h4>
              <ul>
                <li><Link to="/datos-personales">Política de tratamiento de datos</Link></li>
                <li><Link to="/terminos-y-cookies">Términos de uso y cookies</Link></li>
              </ul>
              <h4 style={{ marginTop: 32 }}>Redes sociales</h4>
              {/* Enlaces pendientes: el hospital debe entregar las URL de sus redes */}
              <div className="socials">
                <a href="#" aria-label="Instagram"><Icon name="instagram" /></a>
                <a href="#" aria-label="Facebook"><Icon name="facebook" /></a>
                <a href="#" aria-label="YouTube"><Icon name="youtube" /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 HUM | Hospital Regional Universitario Metropolitano. Todos los derechos reservados.</span>
            <div className="legal-links">
              <Link to="/datos-personales">Datos personales</Link>
              <Link to="/terminos-y-cookies">Términos y cookies</Link>
              <Link to="/transparencia">Transparencia</Link>
            </div>
          </div>
        </div></div>
      </footer>

      <a className="wa-float" href={waLink(PAGE_NAMES[pathname] || 'la página web')} target="_blank" rel="noreferrer" aria-label="¿Necesitas ayuda? Escríbenos por WhatsApp">
        <Icon name="whatsapp" /><span>¿Necesitas ayuda?</span>
      </a>
      <Cookies />
    </>
  )
}
