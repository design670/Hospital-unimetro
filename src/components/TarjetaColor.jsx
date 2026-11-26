import Icon from './Icon.jsx'
import '../tarjetas-color.css'

/**
 * Tarjeta a color (estilo de la referencia): fondo de color, título y texto arriba,
 * una baldosa de vidrio con el ícono abajo a la derecha y, si lleva a algún sitio,
 * la flecha redonda abajo a la izquierda.
 *
 * tono: 'cielo' | 'marino' | 'niebla'
 * href / linkLabel: destino real de la flecha (sin destino no se muestra flecha).
 */
export default function TarjetaColor({ tono = 'cielo', icon, title, href, linkLabel, children }) {
  return (
    <article className={`tc tc--${tono}`}>
      <h3>{title}</h3>
      <div className="tc-body">{children}</div>
      {href ? (
        <a className="tc-go" href={href} aria-label={linkLabel || title}>
          <Icon name="arrow" />
        </a>
      ) : null}
      <span className="tc-ilus" aria-hidden="true">
        <span className="tc-tile">
          <Icon name={icon} />
        </span>
      </span>
    </article>
  )
}
