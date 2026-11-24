import Icon from '../components/Icon.jsx'
import { usePage, PageHero, BtnCita, Btn, Ph, Dato, Closing } from '../components/ui.jsx'
import { SITE } from '../site.js'

export default function Universitario() {
  usePage('Hospital universitario | HUM y Universidad Metropolitana', 'El HUM y la Universidad Metropolitana trabajan juntos en la atención, la formación, la investigación y la proyección social, siempre con atención supervisada.')
  return (
    <>
      <PageHero title="Hospital universitario" lead="El HUM y la Universidad Metropolitana trabajan juntos para cuidar la salud de las personas y formar a los profesionales que la cuidarán mañana." />

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Una alianza para <em>cuidarte y para formar</em></h2>
            <p className="lead">La Universidad Metropolitana aporta formación, investigación y talento académico. El HUM aporta los escenarios clínicos donde se aprende con la práctica.</p>
            <p>Juntos desarrollamos la docencia, la atención, la investigación, la extensión y la proyección social, cada institución dentro de sus competencias.</p>
          </div>
          <Ph label="Fotografía real: docencia en el hospital" />
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="band blue on-blue">
            <div>
              <h2>Atención supervisada, <em>siempre</em></h2>
              <p className="lead">En el HUM, los estudiantes de pregrado y posgrado del área de la salud hacen sus prácticas acompañados y supervisados por profesionales de la salud. La formación nunca está por encima de tu seguridad ni de tu bienestar. Aquí no hay experimentación ni atención sin supervisión.</p>
            </div>
            <span className="ico" style={{ width: 96, height: 96, borderRadius: 28, background: 'rgba(255,255,255,.2)', display: 'grid', placeItems: 'center', color: '#fff' }}><Icon name="shield" style={{ width: 44, height: 44 }} /></span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid g-3">
          <div className="card">
            <span className="ico"><Icon name="graduation" /></span>
            <h3>¿Quiénes hacen prácticas en el HUM?</h3>
            <p>Estudiantes y residentes de programas de salud, como medicina y especialidades médico-quirúrgicas, enfermería, trabajo social, psicología, fisioterapia y nutrición.</p>
          </div>
          <div className="card">
            <span className="ico"><Icon name="chat" /></span>
            <h3>Si tienes preguntas</h3>
            <p>Si quieres saber cómo participan los estudiantes en tu atención, pregúntale al profesional que te atiende o escríbenos a <a href={`mailto:${SITE.siau}`} style={{ color: 'var(--blue)', fontWeight: 600 }}>{SITE.siau}</a>.</p>
          </div>
          <div className="card">
            <span className="ico"><Icon name="flask" /></span>
            <h3>Investigación con respeto</h3>
            <p>La investigación en el HUM se realiza con respeto por la ética médica, la privacidad y el consentimiento de las personas.</p>
          </div>
        </div>
      </section>

      <Closing>
        <BtnCita variant="white" />
        <Btn href="#" variant="glass" icon="graduation">Conocer la Universidad Metropolitana</Btn>
      </Closing>
      <div className="wrap center small" style={{ textAlign: 'center', marginTop: -40, marginBottom: 40 }}>Enlace pendiente: <Dato>enlace al sitio de la Universidad</Dato></div>
    </>
  )
}
