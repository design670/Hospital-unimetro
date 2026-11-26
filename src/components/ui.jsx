import { createContext, useContext, useEffect } from 'react'
import { createPortal } from 'react-dom'
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

/** Flecha en círculo al final del CTA principal (estilo del proyecto). */
export const BtnArrow = () => <span className="btn-arrow" aria-hidden="true"><Icon name="arrow" /></span>

const CTA = ['primary', 'white']

export function Btn({ to, href, variant = 'primary', icon, children, className = '', ...rest }) {
  const cta = CTA.includes(variant)
  const cls = `btn btn-${variant} ${cta ? 'btn-cta' : ''} ${className}`.trim()
  const inner = cta
    ? <><span>{children}</span><BtnArrow /></>
    : <>{icon && <Icon name={icon} />}<span>{children}</span></>
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

/** Espacio dentro del footer donde se dibuja el cierre de cada página (lo provee Layout). */
export const FooterSlot = createContext(null)

/**
 * Cierre de página. Se dibuja dentro del footer, en el mismo bloque azul, encima de los enlaces.
 * Con título o texto lleva una persona recortada a la derecha.
 * img: ruta de la imagen sin fondo (por defecto la de citas); img={false} la quita.
 */
export function Closing({ title, text, children, img = '/img/banners/cierre-cita.webp' }) {
  const slot = useContext(FooterSlot)
  const conImg = img && (title || text)
  const block = (
    <div className={`closing ${conImg ? 'has-img' : ''}`}>
      <div className="closing-text">
        {title && <h2>{title}</h2>}
        {text && <p className="lead">{text}</p>}
        <div className="btn-row">{children}</div>
      </div>
      {conImg && <img className="closing-img" src={img} alt="" loading="lazy" />}
    </div>
  )
  return slot ? createPortal(block, slot) : null
}
