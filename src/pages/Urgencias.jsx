import Icon from '../components/Icon.jsx'
import { usePage, PageHero, BtnCita, BtnLlegar, Btn, TelUrgencias, Check, AvisoInformativo } from '../components/ui.jsx'
import { SITE } from '../site.js'

// Pendiente: el teléfono de Urgencias. Cuando llegue, reemplazar href="#" por tel:+57...
const TEL_URG_HREF = '#'

export default function Urgencias() {
  usePage('Urgencias 24 horas en Barranquilla | HUM', 'Servicio de urgencias del HUM en Barranquilla, abierto las 24 horas. Conoce cuándo acudir, qué llevar y cómo llegar.')
  return (
    <>
      <PageHero variant="alert" img="/img/banners/hero-urgencias.jpg" title="Urgencias, las 24 horas" crumbs="Urgencias" lead="En el HUM atendemos urgencias todos los días, a cualquier hora.">
        <ul className="info-list" style={{ color: '#fff' }}>
          <li><Icon name="pin" /><span>{SITE.address}</span></li>
          <li><Icon name="phone" /><span>Teléfono: <TelUrgencias /></span></li>
        </ul>
        <div className="btn-row">
          <Btn href={TEL_URG_HREF} variant="white" icon="phone">Llamar a Urgencias</Btn>
          <BtnLlegar variant="outline-white" />
        </div>
      </PageHero>

      <section className="section">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <h2>¿Cuándo debes venir a Urgencias?</h2>
            <p className="lead" style={{ marginTop: 20 }}>Ven a Urgencias si tú o alguien cercano tiene una situación que pone en riesgo la salud o la vida, por ejemplo:</p>
          </div>
          <div className="panel" style={{ borderColor: '#f3c6cc' }}>
            <Check variant="alert" items={['Dificultad para respirar', 'Dolor fuerte en el pecho', 'Pérdida del conocimiento o desmayo', 'Convulsiones', 'Sangrado que no se detiene', 'Heridas, quemaduras o fracturas graves', 'Fiebre muy alta, sobre todo en niños pequeños', 'Dolor intenso y repentino']} />
            <p style={{ marginTop: 24 }}>Si tu malestar no es urgente, puedes solicitar una cita.</p>
            <BtnCita variant="ghost" />
          </div>
        </div>
      </section>

      <section className="section bg-neutral">
        <div className="wrap content-grid">
          <div className="panel">
            <h3>Qué llevar</h3>
            <Check items={['Documento de identidad', 'Carné de tu EPS, si lo tienes', 'Los medicamentos que tomas, órdenes médicas o exámenes recientes, si los tienes a la mano']} />
            <p>Si no tienes todo a la mano, no te demores en consultar.</p>
          </div>
          <div className="panel">
            <h3>Cómo es la atención</h3>
            <ol className="ordered">
              <li>Te recibimos y registramos tus datos.</li>
              <li>Un profesional de la salud valora qué tan urgente es tu caso.</li>
              <li>Recibes la atención que necesitas.</li>
            </ol>
            <p>Las personas con casos más graves se atienden primero.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="closing alert">
            <div><h2>En una urgencia, no escribas ni llenes formularios: llama o ven directamente.</h2></div>
            <div className="btn-row">
              <Btn href={TEL_URG_HREF} variant="white" icon="phone">Llamar a Urgencias</Btn>
              <BtnLlegar variant="outline-white" />
            </div>
          </div>
        </div>
      </section>
      <AvisoInformativo />
    </>
  )
}
