import Icon from '../components/Icon.jsx'
import { usePage, PageHero, Btn, Dato, Check, Faq } from '../components/ui.jsx'
import { SITE } from '../site.js'

const INDICE = [
  ['antes', 'Antes de tu visita'], ['visitas', 'Hospitalización y visitas'], ['derechos', 'Derechos y deberes'],
  ['accesibilidad', 'Atención preferencial y accesibilidad'], ['seguridad', 'Seguridad del paciente'], ['despues', 'Después de tu atención'], ['preguntas', 'Preguntas frecuentes'],
]

const H = ({ children }) => <h2 style={{ fontSize: 'clamp(1.5rem,2.6vw,2.1rem)' }}>{children}</h2>

export default function Pacientes() {
  usePage('Guía para pacientes y visitantes | HUM', 'Qué llevar, horarios de visita, derechos y deberes y preguntas frecuentes para pacientes y familias del HUM, Barranquilla.')
  return (
    <>
      <PageHero title="Pacientes y visitantes" lead="Aquí encuentras lo que necesitas saber antes, durante y después de tu visita al HUM." />

      <nav className="toc" aria-label="Índice">
        <div className="wrap"><div className="toc-pill">{INDICE.map(([id, l]) => <a key={id} href={`#${id}`}>{l}</a>)}</div></div>
      </nav>

      <section className="section tight">
        <div className="wrap svc-list">
          <div className="svc-block" id="antes">
            <div className="head"><span className="ico"><Icon name="file" /></span><H>Antes de tu visita</H></div>
            <div className="body"><p className="lead">Lleva tu documento de identidad y, si tienes EPS, tu carné, la orden médica y la autorización cuando tu servicio las requiera. Si tienes exámenes anteriores relacionados con tu consulta, llévalos. Si tu cita requiere preparación, como ayuno u otras indicaciones, te la explicamos cuando la confirmamos.</p></div>
          </div>

          <div className="svc-block" id="visitas">
            <div className="head"><span className="ico"><Icon name="bed" /></span><H>Si estás hospitalizado o visitas a un paciente</H></div>
            <div className="body">
              <p className="lead">Horario de visitas: <Dato>horario de visitas</Dato>. Para cuidar a todos los pacientes, te pedimos:</p>
              <Check items={['Respetar los horarios y las indicaciones del personal.', 'Lavarte las manos al entrar y al salir de la habitación.', 'Mantener un tono de voz bajo.', 'No ingresar si tienes síntomas de una enfermedad contagiosa.', <>Respetar el número de visitantes permitido: <Dato>número</Dato>.</>]} />
              <p>El equipo de salud informa a la familia sobre el estado del paciente <Dato>horario y forma de la información médica</Dato>.</p>
            </div>
          </div>

          <div className="svc-block" id="derechos">
            <div className="head"><span className="ico"><Icon name="shield" /></span><H>Tus derechos y deberes</H></div>
            <div className="body">
              <div className="content-grid">
                <div className="spec-group">
                  <h4>Tienes derecho a:</h4>
                  <Check items={['Recibir atención digna, respetuosa y sin discriminación.', 'Recibir información clara sobre tu estado de salud, tu tratamiento y sus riesgos.', 'Que se proteja tu privacidad y la confidencialidad de tu historia clínica.', 'Aceptar o rechazar un procedimiento después de recibir la información.', 'Presentar peticiones, quejas, reclamos y sugerencias.']} />
                </div>
                <div className="spec-group">
                  <h4>Tienes el deber de:</h4>
                  <Check items={['Dar información veraz sobre tu salud y tus datos.', 'Seguir las indicaciones del equipo de salud.', 'Cuidar las instalaciones y los equipos del hospital.', 'Tratar con respeto al personal, a otros pacientes y a sus familias.', 'Cumplir las normas del hospital.']} />
                </div>
              </div>
            </div>
          </div>

          <div className="svc-block" id="accesibilidad">
            <div className="head"><span className="ico"><Icon name="accessibility" /></span><H>Atención preferencial y accesibilidad</H></div>
            <div className="body"><p className="lead">Damos atención preferencial a personas mayores, mujeres gestantes, personas con discapacidad, niños y otros grupos que la norma establece. Si necesitas apoyo para moverte o comunicarte, avísanos.</p><p><Dato>Información de accesibilidad del edificio: rampas, ascensores, baños.</Dato></p></div>
          </div>

          <div className="svc-block" id="seguridad">
            <div className="head"><span className="ico"><Icon name="heart" /></span><H>Cuidamos tu seguridad</H></div>
            <div className="body">
              <p className="lead">Para que tu atención sea más segura:</p>
              <Check items={['Pregunta el nombre y la función de quien te atiende.', 'Avisa si eres alérgico a algún medicamento.', 'Pregunta cuando tengas dudas sobre un medicamento o un procedimiento.', 'Lava tus manos con frecuencia.']} />
              <p>Si observas un riesgo o algo que no salió bien, avísale al personal o a Atención al usuario.</p>
            </div>
          </div>

          <div className="svc-block" id="despues">
            <div className="head"><span className="ico"><Icon name="check" /></span><H>Después de tu atención</H></div>
            <div className="body">
              <p className="lead">Sigue las recomendaciones que te dio tu médico. Si tus síntomas empeoran o aparecen señales de alarma, vuelve a Urgencias.</p>
              <p>Para reclamar resultados de exámenes o solicitar tu historia clínica: <Dato>procedimiento</Dato>. Cuéntanos cómo fue tu experiencia en Atención al usuario.</p>
              <Btn to="/atencion-al-usuario" variant="ghost" icon="chat">Atención al usuario</Btn>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="preguntas">
        <div className="wrap">
          <div className="section-head"><h2>Preguntas <em>frecuentes</em></h2></div>
          <Faq items={[
            ['¿Cuál es el horario de atención?', 'Urgencias, hospitalización, cirugía y cuidado intensivo funcionan las 24 horas. La consulta externa atiende de lunes a viernes, de 7:00 a. m. a 7:00 p. m.'],
            ['¿Cómo pido una cita?', `Por WhatsApp al ${SITE.whatsapp}, al correo ${SITE.citas} o con el formulario de Solicitar cita.`],
            ['¿Qué documentos debo llevar?', 'Tu documento de identidad y, si tienes EPS, tu carné, la orden médica y la autorización si tu servicio las requiere.'],
            ['¿Puedo ir acompañado?', 'Pregunta al personal del servicio y te indicamos cómo puede acompañarte tu familia.'],
            ['¿Cómo reclamo mis resultados?', <><Dato>procedimiento para reclamar resultados</Dato>.</>],
            ['¿Cómo presento una queja o una sugerencia?', `Escribe a ${SITE.siau} o usa el formulario de Atención al usuario.`],
          ]} />
        </div>
      </section>
    </>
  )
}
