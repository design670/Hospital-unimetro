import Icon from '../components/Icon.jsx'
import { usePage, PageHero, BtnCita, Btn, Ph } from '../components/ui.jsx'
import { SITE } from '../site.js'
import TarjetaColor from '../components/TarjetaColor.jsx'

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
          <div className="band blue on-blue has-person">
            <div className="band-text">
              <h2>Atención supervisada, <em>siempre</em></h2>
              <p className="lead">En el HUM, los estudiantes de pregrado y posgrado del área de la salud hacen sus prácticas acompañados y supervisados por profesionales de la salud. La formación nunca está por encima de tu seguridad ni de tu bienestar. Aquí no hay experimentación ni atención sin supervisión.</p>
            </div>
            <img className="band-person" src="/img/banners/docencia.webp" alt="" width="760" height="1007" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid g-3">
          <TarjetaColor tono="marino" icon="graduation" title="¿Quiénes hacen prácticas en el HUM?">
            <p>Estudiantes y residentes de programas de salud, como medicina y especialidades médico-quirúrgicas, enfermería, trabajo social, psicología, fisioterapia y nutrición.</p>
          </TarjetaColor>
          <TarjetaColor tono="cielo" icon="chat" title="Si tienes preguntas" href={`mailto:${SITE.siau}`} linkLabel={`Escribir a ${SITE.siau}`}>
            <p>Si quieres saber cómo participan los estudiantes en tu atención, pregúntale al profesional que te atiende o escríbenos a <a href={`mailto:${SITE.siau}`}>{SITE.siau}</a>.</p>
          </TarjetaColor>
          <TarjetaColor tono="niebla" icon="flask" title="Investigación con respeto">
            <p>La investigación en el HUM se realiza con respeto por la ética médica, la privacidad y el consentimiento de las personas.</p>
          </TarjetaColor>
        </div>
      </section>

    </>
  )
}
