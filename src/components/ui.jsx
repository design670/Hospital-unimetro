import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { SITE, waLink } from '../site.js'

/** Dato pendiente que entrega el hospital (se ve resaltado hasta reemplazarlo). */
export const Dato = ({ children }) => <span className="dato" title="Dato pendiente del hospital">[{children}]</span>

export const TelUrgencias = () => <Dato>teléfono de Urgencias</Dato>

export function usePage(title, description) {
  useEffect(() => {
    document.title = title
    const m = document.querySelector('meta[name="description"]')
    if (m && description) m.setAttribute('content', description)
  }, [title, description])
}

export function Btn({ to, href, variant = 'primary', icon, children, ...rest }) {
  const cls = `btn btn-${variant}`
  const inner = <>{icon && <Icon name={icon} />}<span>{children}</span></>
  if (to) return <Link className={cls} to={to} {...rest}>{inner}</Link>
  const ext = href && /^https?:/.test(href)
  return <a className={cls} href={href} {...(ext ? { target: '_blank', rel: 'noreferrer' } : {})} {...rest}>{inner}</a>
}

export const BtnCita = (p) => <Btn to="/solicitar-cita" icon="calendar" {...p}>{p.children || 'Solicitar cita'}</Btn>
export const BtnUrgencias = (p) => <Btn to="/urgencias" variant="alert" icon="siren" {...p}>{p.children || 'Urgencias 24 horas'}</Btn>
export const BtnWa = ({ desde, children, ...p }) => <Btn href={waLink(desde)} variant="wa" icon="whatsapp" {...p}>{children || 'WhatsApp'}</Btn>
export const BtnLlegar = (p) => <Btn href={SITE.mapsUrl} variant="ghost" icon="pin" {...p}>{p.children || 'Cómo llegar'}</Btn>

export function Arrow({ to, children }) {
  return <Link className="link-arrow" to={to}>{children}<Icon name="arrow" /></Link>
}

export function Ph({ label, light, style, className = '' }) {
  return (
    <div className={`ph ${light ? 'light' : ''} ${className}`} style={style}>
      <div className="ph-caption"><Icon name="image" />{label}</div>
    </div>
  )
}

export function PageHero({ title, lead, children, crumbs, variant = '' }) {
  return (
    <section className={`page-hero frame on-blue ${variant === 'alert' ? 'alert-grad' : 'grad'}`}>
      <div className="wrap">
        <div className="crumbs"><Link to="/">Inicio</Link><span>/</span><span>{crumbs || title}</span></div>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  )
}

export function AvisoUrgencia() {
  return (
    <div className="note">
      <Icon name="alert" />
      <p>Si tienes una urgencia, no uses este formulario. Ve a <Link to="/urgencias">Urgencias</Link>, abierta las 24 horas, o llama al <TelUrgencias />.</p>
    </div>
  )
}

export function AvisoInformativo() {
  return (
    <div className="wrap" style={{ paddingBottom: 48 }}>
      <div className="note info"><Icon name="info" /><p>Esta información es orientativa y no reemplaza la valoración de un profesional de la salud.</p></div>
    </div>
  )
}

export function Check({ items, variant = '', two }) {
  return (
    <ul className={`checklist ${variant} ${two ? 'two' : ''}`}>
      {items.map((t, i) => <li key={i}><Icon name="check" /><span>{t}</span></li>)}
    </ul>
  )
}

export function Faq({ items }) {
  return (
    <div className="faq">
      {items.map(([q, a], i) => (
        <details key={i}>
          <summary>{q}<Icon name="plus" /></summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  )
}

export function Closing({ title, text, children }) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="closing">
          <div>
            {title && <h2>{title}</h2>}
            {text && <p className="lead">{text}</p>}
          </div>
          <div className="btn-row">{children}</div>
        </div>
      </div>
    </section>
  )
}
