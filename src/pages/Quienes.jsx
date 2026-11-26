import Icon from '../components/Icon.jsx'
import { usePage, PageHero, BtnCita, Btn, Ph, Dato, Closing } from '../components/ui.jsx'
import { SITE } from '../site.js'

export default function Quienes() {
  usePage('Quiénes somos | HUM Hospital Regional Universitario Metropolitano', 'Conoce al Hospital Regional Universitario Metropolitano (HUM) de Barranquilla: servicios, misión, visión y compromiso con la calidad y la seguridad del paciente.')
  return (
    <>
      <PageHero title="Quiénes somos" />

      <section className="section">
        <div className="wrap split">
          <Ph label="Fotografía real: fachada o equipo del HUM" />
          <div>
            <p className="lead" style={{ color: 'var(--ink)', fontSize: 'clamp(1.15rem,1.8vw,1.4rem)', lineHeight: 1.55 }}>El Hospital Regional Universitario Metropolitano (HUM) es una institución de salud de Barranquilla.</p>
            <p>Atendemos urgencias, partos, hospitalización de adultos y niños, cuidado intensivo e intermedio, cirugía, consulta con especialistas, apoyo diagnóstico, terapias, rehabilitación y vacunación. Trabajamos de la mano con la Universidad Metropolitana.</p>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="section-head"><h2>Nuestra forma <em>de cuidar</em></h2></div>
          <div className="grid g-3">
            <div className="card"><span className="ico"><Icon name="heart" /></span><h3>Atención humana.</h3><p>Te escuchamos, te explicamos y te acompañamos a ti y a tu familia.</p></div>
            <div className="card"><span className="ico"><Icon name="shield" /></span><h3>Atención segura.</h3><p>Cuidamos tu seguridad en cada servicio y en cada procedimiento.</p></div>
            <div className="card"><span className="ico"><Icon name="graduation" /></span><h3>Atención con formación.</h3><p>Aprendemos y mejoramos junto con la Universidad Metropolitana, siempre con supervisión.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid g-3">
          <div className="panel"><h3>Misión</h3><p><Dato>texto oficial de la misión del HUM</Dato></p></div>
          <div className="panel"><h3>Visión</h3><p><Dato>texto oficial de la visión del HUM</Dato></p></div>
          <div className="panel"><h3>Principios y valores</h3><p><Dato>texto oficial</Dato></p></div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap content-grid">
          <div className="panel">
            <h2 style={{ fontSize: 'clamp(1.5rem,2.4vw,2rem)' }}>Calidad y seguridad del paciente</h2>
            <p>En el HUM trabajamos para que cada atención sea segura. Si ves algo que pueda poner en riesgo a un paciente, avísale a nuestro personal o escríbenos a <a href={`mailto:${SITE.siau}`} style={{ color: 'var(--blue)', fontWeight: 600 }}>{SITE.siau}</a>.</p>
            <p><strong>Política de calidad y seguridad del paciente:</strong> <Dato>texto oficial</Dato></p>
            <p><strong>Certificaciones y acreditaciones:</strong> <Dato>lista, solo si existen</Dato></p>
          </div>
          <div className="panel">
            <h2 style={{ fontSize: 'clamp(1.5rem,2.4vw,2rem)' }}>Datos del hospital</h2>
            <ul className="kv">
              <li><span>Nombre oficial</span><span>HOSPITAL REGIONAL UNIVERSITARIO METROPOLITANO HUM</span></li>
              <li><span>NIT</span><span><Dato>NIT</Dato></span></li>
              <li><span>Naturaleza jurídica</span><span><Dato>naturaleza jurídica</Dato></span></li>
              <li><span>Dirección</span><span>{SITE.address}</span></li>
            </ul>
          </div>
        </div>
      </section>

      <Closing
        img="/img/banners/cierre-quienes.webp"
        title="Estamos para cuidarte"
        text="Pide tu cita o conoce cómo el HUM y la Universidad Metropolitana trabajan juntos por tu salud."
      >
        <BtnCita variant="white" />
        <Btn to="/hospital-universitario" variant="glass" icon="graduation">Hospital universitario</Btn>
      </Closing>
    </>
  )
}
