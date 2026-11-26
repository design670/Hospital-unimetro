import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import Icon from './Icon.jsx'
import { useCurtain, useReveal } from './motion.js'
import { BtnArrow, FooterSlot } from './ui.jsx'
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

/** Mega-menú de Servicios (descripciones tomadas de la sección de servicios de Inicio). */
const SERVICIOS_MEGA = [
  ['/servicios#urgencias', 'Urgencias', 'Atención inmediata, las 24 horas'],
  ['/servicios#hospitalizacion', 'Hospitalización', 'Para adultos y niños'],
  ['/servicios#cuidado-intensivo', 'Cuidado intensivo', 'Intensivo e intermedio para adultos'],
  ['/servicios#cirugia', 'Cirugía', 'General y de distintas especialidades'],
  ['/servicios#parto', 'Parto y salud de la mujer', 'Parto y ginecobstetricia'],
  ['/servicios#especialistas', 'Consulta con especialistas', 'Distintas áreas, de lunes a viernes'],
  ['/servicios#diagnostico', 'Diagnóstico', 'Laboratorio e imágenes diagnósticas'],
  ['/servicios#terapias', 'Terapias y rehabilitación', 'Recupera tu movilidad y bienestar'],
  ['/servicios#vacunacion', 'Vacunación', 'Para ti y tu familia'],
]
/** Submenús simples del encabezado (solo destinos reales). */
const SUBMENU = {
  '/pacientes': [
    ['/pacientes', 'Pacientes y visitantes'], ['/atencion-al-usuario', 'Atención al usuario'], ['/contacto', 'Contacto y ubicación'],
  ],
}
/** Accesos cortos de la píldora flotante. */
const GN_LINKS = [
  ['/servicios', 'Servicios'], ['/equipo-medico', 'Equipo médico'], ['/pacientes', 'Pacientes'],
  ['/hospital-universitario', 'Universitario'], ['/aliados', 'EPS y empresas'], ['/quienes-somos', 'Nosotros'],
]
/** Enlaces grandes del menú a pantalla completa. */
const OV_LINKS = [...MENU, { to: '/atencion-al-usuario', label: 'Atención al usuario' }, { to: '/contacto', label: 'Contacto y ubicación' }]

/** Hamburguesa de tres líneas que «respira» y se convierte en X al abrir. */
function Burger({ open, onClick, btnRef, className = '' }) {
  return (
    <button ref={btnRef} type="button" className={`hb ${open ? 'is-open' : ''} ${className}`} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="menu-ov" onClick={onClick}>
      <span /><span /><span />
    </button>
  )
}

export default function Layout() {
  const { pathname, hash } = useLocation()
  const [open, setOpen] = useState(false)
  const [pill, setPill] = useState(false)
  const [overHero, setOverHero] = useState(true)
  const [footerSlot, setFooterSlot] = useState(null)
  const headerRef = useRef(null)
  const closeRef = useRef(null)
  const wa = waLink(PAGE_NAMES[pathname] || 'la página web')

  useEffect(() => {
    setOpen(false)
    if (!hash) { window.scrollTo({ top: 0, behavior: 'instant' }); return }
    // Enlaces del submenú a una sección de otra página (p. ej. /servicios#cirugia)
    const t = setTimeout(() => document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: 'smooth' }), 80)
    return () => clearTimeout(t)
  }, [pathname, hash])
  // El encabezado va transparente sobre la portada azul; en páginas sin portada azul (404) se ve en color.
  useLayoutEffect(() => { setOverHero(!!document.querySelector('main')?.firstElementChild?.classList.contains('on-blue')) }, [pathname])
  // La píldora flotante aparece cuando el encabezado sale de la pantalla.
  useEffect(() => {
    const el = headerRef.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => setPill(!e.isIntersecting), { rootMargin: '-24px 0px 0px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open)
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const t = setTimeout(() => closeRef.current?.focus(), 60)
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => { clearTimeout(t); window.removeEventListener('keydown', onKey) }
  }, [open])
  useCurtain(pathname)
  useReveal(pathname)

  const close = () => setOpen(false)

  return (
    <>
      {/* Encabezado sobre la portada: logo · accesos rápidos · menú con mega-menú de Servicios */}
      <header ref={headerRef} className={`site-header ${overHero ? 'over-hero' : ''}`}>
        <div className="wrap"><div className="sh-inner">
          <Link to="/" className="logo" aria-label="HUM, ir al inicio">
            <img className="logo-c" src="/img/logo-hum.png" alt="HUM Hospital Regional Universitario Metropolitano" />
            <img className="logo-w" src="/img/logo-hum-white.png" alt="HUM Hospital Regional Universitario Metropolitano" />
          </Link>
          <div className="sh-right">
            <div className="sh-actions">
              <a className="sh-pill soft" href={wa} target="_blank" rel="noreferrer"><span>WhatsApp</span><Icon name="arrow" /></a>
              <Link className="sh-pill blue" to="/solicitar-cita"><span>Solicitar cita</span><Icon name="arrow" /></Link>
              <Link className="sh-pill red" to="/urgencias"><span>Urgencias 24 h</span><Icon name="arrow" /></Link>
            </div>
            <nav className="sh-nav" aria-label="Menú principal">
              {MENU.map((m) => {
                const mega = m.to === '/servicios'
                const sub = SUBMENU[m.to]
                return (
                  <div key={m.to} className={`sh-item ${mega || sub ? 'has-sub' : ''}`}>
                    <NavLink to={m.to}>{m.label}{(mega || sub) && <Icon name="chevron" />}</NavLink>
                    {mega && (
                      <div className="sh-mega" aria-label="Todos los servicios">
                        <div className="sh-mega-inner">
                          <div className="sh-mega-grid">
                            {SERVICIOS_MEGA.map(([to, name, d]) => (
                              <Link key={to} to={to} className="sh-mega-item">
                                <span className="sh-mega-name">{name}<Icon name="arrow" /></span>
                                <span className="sh-mega-sub">{d}</span>
                              </Link>
                            ))}
                          </div>
                          <div className="sh-mega-foot">
                            <span>¿No sabes qué servicio necesitas? Te orientamos.</span>
                            <Link className="sh-mega-cta" to="/solicitar-cita">Solicitar cita<Icon name="arrow" /></Link>
                          </div>
                        </div>
                      </div>
                    )}
                    {sub && (
                      <div className="sh-sub">
                        {sub.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>
          </div>
          <Link className="sh-pill red sh-urg-m" to="/urgencias"><Icon name="siren" /><span>Urgencias</span></Link>
          <Burger open={open} onClick={() => setOpen(!open)} className="sh-hb" />
        </div></div>
      </header>

      {/* Píldora de vidrio que baja al hacer scroll */}
      <nav className={`gnav ${pill && !open ? 'is-visible' : ''}`} aria-label="Navegación rápida">
        <Link className="gn-brand" to="/" aria-label="HUM, ir al inicio"><img src="/img/logo-hum-white.png" alt="" /></Link>
        <div className="gn-links">
          {GN_LINKS.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
        </div>
        <Link className="gn-cta" to="/solicitar-cita"><span className="gn-full">Solicitar cita</span><span className="gn-short">Cita</span><span className="gn-ic"><Icon name="arrow" /></span></Link>
        <Link className="gn-urg" to="/urgencias" aria-label="Urgencias 24 horas"><Icon name="siren" /><span>Urgencias</span></Link>
        <Burger open={open} onClick={() => setOpen(!open)} />
      </nav>

      {/* Menú a pantalla completa */}
      <div id="menu-ov" className={`menu-ov ${open ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Menú">
        <div className="wrap mo-top">
          <Link to="/" onClick={close} aria-label="HUM, ir al inicio"><img src="/img/logo-hum-white.png" alt="" /></Link>
          <Burger open onClick={close} btnRef={closeRef} />
        </div>
        <div className="wrap mo-body">
          <nav className="mo-links" aria-label="Menú principal">
            {OV_LINKS.map((m, i) => (
              <NavLink key={m.to} to={m.to} onClick={close} style={{ '--i': i }}>
                <span className="mo-label">{m.label}</span><span className="mo-arrow"><Icon name="arrow" /></span>
              </NavLink>
            ))}
          </nav>
          <div className="mo-side">
            <div className="mo-svc" style={{ '--i': OV_LINKS.length }}>
              <p className="mo-eyebrow">Servicios</p>
              <div className="mo-svc-grid">
                {SERVICIOS_MEGA.map(([to, name]) => <Link key={to} to={to} onClick={close}>{name}</Link>)}
              </div>
            </div>
            <a className="mo-card" href={wa} target="_blank" rel="noreferrer" style={{ '--i': OV_LINKS.length + 1 }}>
              <span className="mo-card-ic"><Icon name="whatsapp" /></span>
              <span className="mo-card-text"><strong>¿Necesitas ayuda?</strong><span>Escríbenos por WhatsApp · {SITE.whatsapp}</span></span>
            </a>
            <div className="mo-actions" style={{ '--i': OV_LINKS.length + 2 }}>
              <Link className="btn btn-white btn-cta" to="/solicitar-cita" onClick={close}><span>Solicitar cita</span><BtnArrow /></Link>
              <Link className="btn btn-alert" to="/urgencias" onClick={close}><Icon name="siren" /><span>Urgencias 24 h</span></Link>
            </div>
            <div className="mo-meta" style={{ '--i': OV_LINKS.length + 3 }}>
              <span><Icon name="pin" />{SITE.address}</span>
              <span className="mo-social">
                <a href="#" aria-label="Instagram"><Icon name="instagram" /></a>
                <a href="#" aria-label="Facebook"><Icon name="facebook" /></a>
                <a href="#" aria-label="YouTube"><Icon name="youtube" /></a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <main><FooterSlot.Provider value={footerSlot}><Outlet /></FooterSlot.Provider></main>

      <footer className="footer">
        <div className="frame on-blue"><div className="wrap">
          <div className="footer-closing" ref={setFooterSlot} />
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

      <a className="wa-float" href={wa} target="_blank" rel="noreferrer" aria-label="¿Necesitas ayuda? Escríbenos por WhatsApp">
        <Icon name="whatsapp" /><span>¿Necesitas ayuda?</span>
      </a>
      <Cookies />
    </>
  )
}
