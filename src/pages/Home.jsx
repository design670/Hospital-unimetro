import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Carousel from '../components/Carousel.jsx'
import { usePage, Btn, BtnCita, BtnUrgencias, BtnLlegar, Arrow, Ph } from '../components/ui.jsx'
import { SITE } from '../site.js'

const NECESIDADES = [
  { icon: 'siren', t: 'Tengo una urgencia.', d: 'Te atendemos las 24 horas.', to: '/urgencias', cta: 'Urgencias', urgent: true },
  { icon: 'calendar', t: 'Quiero pedir una cita.', d: 'Por WhatsApp, llamada o formulario.', to: '/solicitar-cita', cta: 'Solicitar cita' },
  { icon: 'stethoscope', t: 'Busco un especialista.', d: 'Conoce a nuestro equipo médico.', to: '/equipo-medico', cta: 'Equipo médico' },
  { icon: 'users', t: 'Visito a un paciente.', d: 'Horarios, normas y recomendaciones para familias.', to: '/pacientes', cta: 'Pacientes y visitantes' },
  { icon: 'chat', t: 'Quiero dar una opinión o presentar una queja.', d: 'Estamos para escucharte.', to: '/atencion-al-usuario', cta: 'Atención al usuario' },
  { icon: 'handshake', t: 'Soy EPS, empresa o médico.', d: 'Trabajemos juntos.', to: '/aliados', cta: 'EPS, empresas y remitentes' },
]

const SERVICIOS = [
  { icon: 'siren', t: 'Urgencias', d: 'Atención inmediata, las 24 horas.', id: 'urgencias' },
  { icon: 'bed', t: 'Hospitalización', d: 'Para adultos y niños, con acompañamiento a ti y a tu familia.', id: 'hospitalizacion' },
  { icon: 'pulse', t: 'Cuidado intensivo', d: 'Cuidado intensivo e intermedio para adultos.', id: 'cuidado-intensivo' },
  { icon: 'scalpel', t: 'Cirugía', d: 'Cirugía general y de distintas especialidades.', id: 'cirugia' },
  { icon: 'baby', t: 'Parto y salud de la mujer', d: 'Atención del parto y consulta de ginecobstetricia.', id: 'parto' },
  { icon: 'stethoscope', t: 'Consulta con especialistas', d: 'Distintas áreas médicas, de lunes a viernes.', id: 'especialistas' },
  { icon: 'microscope', t: 'Diagnóstico y terapias', d: 'Laboratorio, imágenes diagnósticas, terapias y rehabilitación.', id: 'diagnostico' },
  { icon: 'syringe', t: 'Vacunación', d: 'Protege tu salud y la de tu familia.', id: 'vacunacion' },
]

export default function Home() {
  usePage('HUM | Hospital Regional Universitario Metropolitano', 'Hospital universitario en Barranquilla con urgencias 24 horas, cirugía, hospitalización y consulta especializada. Solicita tu cita en el HUM.')
  return (
    <>
      {/* 1 · Portada */}
      <section className="hero frame grad on-blue">
        <div className="wrap">
          <h1>Atención médica especializada, cercana <span className="soft">y humana en Barranquilla</span></h1>
          <p className="lead">Urgencias las 24 horas, cirugía, hospitalización y consulta con especialistas, con el respaldo de la Universidad Metropolitana.</p>
          <div className="btn-row">
            <BtnCita variant="white" />
            <Link className="btn btn-glass hero-secondary" to="/urgencias"><span>Urgencias 24 horas</span></Link>
          </div>

          <div className="hero-stage">
            <Ph label="Fotografía real de la fachada o del equipo del hospital" />
            <div className="glass float-chip c1">
              <span className="ic"><Icon name="graduation" /></span>
              <span>Hospital universitario<br />Universidad Metropolitana</span>
            </div>
            <div className="glass float-chip c2">
              <span className="ic" style={{ background: 'var(--alert)' }}><Icon name="siren" /></span>
              <span><span className="big">24 h</span>Urgencias abiertas</span>
            </div>
          </div>

          {/* 2 · Franja de horarios */}
          <div className="hours-row" aria-label="Horarios">
            <div className="glass hours-card"><span className="ic"><Icon name="clock" /></span><div><b>Las 24 horas</b><span>Urgencias, hospitalización, cirugía y cuidado intensivo</span></div></div>
            <div className="glass hours-card"><span className="ic"><Icon name="calendar" /></span><div><b>Consulta externa</b><span>Lunes a viernes, de 7:00 a. m. a 7:00 p. m.</span></div></div>
          </div>
        </div>
      </section>

      {/* 3 · ¿Qué necesitas hoy? */}
      <section className="section">
        <div className="wrap">
          <div className="section-head"><h2>¿Qué necesitas <em>hoy</em>?</h2></div>
          <div className="bento">
            {/* Visito a un paciente */}
            <Link to="/pacientes" className="bt bt-a">
              <div className="bt-foot">
                <h3>Visito a un paciente.</h3>
                <p>Horarios, normas y recomendaciones para familias.</p>
                <span className="link-arrow">Pacientes y visitantes<Icon name="arrow" /></span>
              </div>
            </Link>

            {/* Opinión o queja */}
            <Link to="/atencion-al-usuario" className="bt bt-b">
              <div className="bt-chips">
                <span>Petición <i>+</i></span>
                <span className="on">Sugerencia</span>
                <span>Felicitación <i>+</i></span>
              </div>
              <div className="bt-foot">
                <h3>Quiero dar una opinión o presentar una queja.</h3>
                <p>Estamos para escucharte.</p>
                <span className="link-arrow">Atención al usuario<Icon name="arrow" /></span>
              </div>
            </Link>

            {/* Urgencia: tarjeta alta con imagen */}
            <Link to="/urgencias" className="bt bt-c bt-img" style={{ backgroundImage: "url(/img/home/urgencias.jpg), linear-gradient(170deg, #cfe2f4, #8db6dc)" }}>
              <span className="bt-pill"><span className="dot-red" />Abierto 24 horas</span>
              <div className="bt-foot on-img">
                <h3>Tengo una urgencia.</h3>
                <p>Te atendemos las 24 horas.</p>
                <span className="link-arrow">Urgencias<Icon name="arrow" /></span>
              </div>
            </Link>

            {/* Cita: tarjeta de dato grande */}
            <Link to="/solicitar-cita" className="bt bt-d">
              <div className="bt-foot">
                <p className="bt-big">3 pasos</p>
                <h3>Quiero pedir una cita.</h3>
                <p>Por WhatsApp, llamada o formulario.</p>
                <span className="link-arrow">Solicitar cita<Icon name="arrow" /></span>
              </div>
            </Link>

            {/* Especialista: imagen */}
            <Link to="/equipo-medico" className="bt bt-e bt-img" style={{ backgroundImage: "url(/img/home/especialista.jpg), linear-gradient(170deg, #cfe2f4, #8db6dc)" }}>
              <div className="bt-foot on-img">
                <h3>Busco un especialista.</h3>
                <p>Conoce a nuestro equipo médico.</p>
                <span className="link-arrow">Equipo médico<Icon name="arrow" /></span>
              </div>
            </Link>

            {/* EPS: tarjeta ancha con órbitas */}
            <Link to="/aliados" className="bt bt-f">
              <div className="bt-foot">
                <h3>Soy EPS, empresa o médico.</h3>
                <p>Trabajemos juntos.</p>
                <span className="link-arrow">EPS, empresas y remitentes<Icon name="arrow" /></span>
              </div>
              <div className="bt-orbit" aria-hidden="true">
                <i className="r1" /><i className="r2" /><i className="r3" />
                <span className="o1"><Icon name="shield" /></span>
                <span className="o2"><Icon name="building" /></span>
                <span className="o3"><Icon name="stethoscope" /></span>
                <span className="o4"><Icon name="handshake" /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4 · Servicios */}
      <section className="section bg-neutral">
        <div className="wrap">
          <div className="section-head"><h2>Todo lo que necesitas, <em>en un mismo hospital</em></h2></div>
          <div className="grid g-4">
            {SERVICIOS.map((s, i) => (
              <Link key={s.t} to={`/servicios#${s.id}`} className="card svc-card">
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <span className="ico"><Icon name={s.icon} /></span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </Link>
            ))}
          </div>
          <div className="btn-row center" style={{ marginTop: 40 }}><Btn to="/servicios" variant="ghost" icon="arrow">Ver todos los servicios y especialidades</Btn></div>
        </div>
      </section>

      {/* 5 · Hospital universitario */}
      <section className="section">
        <div className="wrap split media-first">
          <Ph label="Fotografía real: estudiantes y residentes con su docente" style={{ minHeight: 480 }} />
          <div>
            <h2>Un hospital universitario, <em>con atención supervisada</em></h2>
            <p className="lead">El HUM y la Universidad Metropolitana trabajan juntos en la atención de los pacientes, la formación de profesionales de la salud, la investigación y la proyección social.</p>
            <p>Los estudiantes y residentes participan en la atención siempre bajo la supervisión de profesionales de la salud.</p>
            <div className="btn-row"><Btn to="/hospital-universitario" icon="graduation">Conoce la alianza</Btn></div>
          </div>
        </div>
      </section>

      {/* 6 · Cómo pedir tu cita */}
      <section className="section bg-neutral">
        <div className="wrap"><div className="big-panel">
          <div className="section-head"><h2>Pide tu cita en <em>tres pasos</em></h2></div>
          <div className="steps">
            <div className="step"><p>Elige el servicio o la especialidad que necesitas.</p></div>
            <div className="step"><p>Escríbenos por WhatsApp, llámanos o llena el formulario.</p></div>
            <div className="step"><p>Nuestro equipo te contacta para confirmar tu cita.</p></div>
          </div>
          <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="note" style={{ flex: '1 1 420px' }}><Icon name="alert" /><p>Si es una urgencia, no esperes una cita: ve directamente a <Link to="/urgencias">Urgencias</Link>.</p></div>
            <BtnCita />
          </div>
        </div></div>
      </section>

      {/* 7 · EPS y particulares */}
      <section className="section">
        <div className="wrap">
          <div className="section-head"><h2>Tu atención, <em>con EPS o particular</em></h2></div>
          <div className="duo">
            <Link to="/solicitar-cita" className="card">
              <span className="ico"><Icon name="shield" /></span>
              <h3>Tengo EPS.</h3>
              <p>Te contamos qué necesitas para tu atención y cómo tramitar tu autorización.</p>
              <span className="link-arrow">Solicitar cita<Icon name="arrow" /></span>
            </Link>
            <Link to="/solicitar-cita" className="card">
              <span className="ico"><Icon name="user" /></span>
              <h3>Soy paciente particular.</h3>
              <p>Te informamos los servicios, los valores y las formas de pago.</p>
              <span className="link-arrow">Solicitar cita<Icon name="arrow" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8 · Seguridad del paciente  ·  9 · Aliados */}
      <section className="section tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Carousel label="Destacados del HUM">
          <div className="band blue on-blue has-person">
            <div className="band-text">
              <h2>Tu seguridad <em>es lo primero</em></h2>
              <p className="lead">En el HUM trabajamos para que cada atención sea segura, respetuosa y centrada en ti. Si algo no salió como esperabas, queremos saberlo.</p>
              <div className="btn-row"><Btn to="/atencion-al-usuario" variant="white">Atención al usuario</Btn></div>
            </div>
            <img className="band-person" src="/img/banners/seguridad.webp" alt="" width="760" height="931" />
          </div>
          <div className="band light has-person">
            <div className="band-text">
              <h2>Trabajemos <em>juntos</em></h2>
              <p className="lead">Si eres EPS, aseguradora, empresa o médico que remite pacientes, te contamos cómo trabajar con el HUM.</p>
              <div className="btn-row"><Btn to="/aliados">Conoce más</Btn></div>
            </div>
            <img className="band-person" src="/img/banners/aliados.webp" alt="" width="760" height="817" />
          </div>
          </Carousel>
        </div>
      </section>

      {/* 10 · Ubicación */}
      <section className="section bg-neutral">
        <div className="wrap split">
          <div>
            <h2><em>Visítanos</em></h2>
            <ul className="info-list">
              <li><Icon name="pin" /><strong>{SITE.address}</strong></li>
              <li><Icon name="clock" /><span>{SITE.hours24}</span></li>
              <li><Icon name="calendar" /><span>{SITE.hoursConsulta}</span></li>
            </ul>
            <div className="btn-row" style={{ marginTop: 32 }}>
              <BtnLlegar variant="primary" />
              <Btn to="/contacto" variant="ghost" icon="phone">Contacto</Btn>
            </div>
          </div>
          <div className="map-wrap">
            <iframe title="Ubicación del HUM" src={SITE.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

    </>
  )
}
