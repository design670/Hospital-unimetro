import Icon from '../components/Icon.jsx'
import { usePage, PageHero, BtnCita, BtnLlegar, Dato, TelUrgencias, AvisoUrgencia } from '../components/ui.jsx'
import { SITE } from '../site.js'

export default function Contacto() {
  usePage('Contacto y cómo llegar | HUM Hospital Regional Universitario Metropolitano', 'Dirección, teléfonos, correos, horarios y cómo llegar al Hospital Regional Universitario Metropolitano (HUM), en Barranquilla.')
  return (
    <>
      <PageHero title="Contacto y ubicación" lead="Estamos en Barranquilla. Aquí encuentras cómo llegar y cómo comunicarte con nosotros.">
        <AvisoUrgencia />
      </PageHero>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Dónde <em>estamos</em></h2>
            <ul className="info-list">
              <li><Icon name="pin" /><strong>{SITE.address}</strong></li>
              <li><Icon name="info" /><span>Cómo llegar: <Dato>indicaciones en carro, en bus y en taxi; parqueadero; entrada de Urgencias y entrada principal</Dato></span></li>
            </ul>
            <div className="btn-row"><BtnLlegar variant="primary" /></div>
          </div>
          <div className="map-wrap"><iframe title="Mapa del HUM" src={SITE.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="section-head"><h2>¿Con quién quieres <em>hablar</em>?</h2></div>
          <div className="grid g-4">
            <div className="card"><span className="ico"><Icon name="calendar" /></span><h3>Citas</h3><p>WhatsApp {SITE.whatsapp}<br /><a href={`mailto:${SITE.citas}`} style={{ color: 'var(--blue)', fontWeight: 600 }}>{SITE.citas}</a></p></div>
            <div className="card urgent"><span className="ico"><Icon name="siren" /></span><h3>Urgencias</h3><p><TelUrgencias /> · abierta las 24 horas</p></div>
            <div className="card"><span className="ico"><Icon name="chat" /></span><h3>Atención al usuario (SIAU)</h3><p><a href={`mailto:${SITE.siau}`} style={{ color: 'var(--blue)', fontWeight: 600 }}>{SITE.siau}</a></p></div>
            <div className="card"><span className="ico"><Icon name="handshake" /></span><h3>EPS, empresas y médicos remitentes</h3><p><Dato>correo y teléfono comercial</Dato></p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap content-grid">
          <div className="panel">
            <h2 style={{ fontSize: 'clamp(1.5rem,2.4vw,2rem)' }}>Horarios de atención</h2>
            <ul className="kv">
              <li><span>Urgencias, hospitalización, cirugía y cuidado intensivo</span><span>Las 24 horas, todos los días.</span></li>
              <li><span>Consulta externa</span><span>Lunes a viernes, de 7:00 a. m. a 7:00 p. m.</span></li>
              <li><span>Servicio de citas</span><span><Dato>horario del servicio de citas</Dato></span></li>
              <li><span>Atención al usuario (SIAU)</span><span><Dato>horario</Dato></span></li>
            </ul>
          </div>
          <div className="panel">
            <h2 style={{ fontSize: 'clamp(1.5rem,2.4vw,2rem)' }}>Redes sociales</h2>
            <p>Síguenos en <Dato>Instagram</Dato> · <Dato>Facebook</Dato> · <Dato>otras redes</Dato></p>
            <BtnCita />
          </div>
        </div>
      </section>
    </>
  )
}
