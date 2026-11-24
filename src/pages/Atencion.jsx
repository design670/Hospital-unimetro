import Icon from '../components/Icon.jsx'
import Form from '../components/Form.jsx'
import { usePage, PageHero, Dato, TelUrgencias } from '../components/ui.jsx'
import { Link } from 'react-router-dom'
import { SITE, SERVICIOS_LISTA } from '../site.js'

export default function Atencion() {
  usePage('Atención al usuario (SIAU) | HUM', 'Presenta una petición, queja, reclamo, sugerencia, denuncia o felicitación al Hospital Regional Universitario Metropolitano (HUM). Te respondemos.')
  return (
    <>
      <PageHero title="Atención al usuario" lead="El Sistema de Información y Atención al Usuario (SIAU) está para escucharte. Cuéntanos si necesitas una orientación, si algo no salió bien, si tienes una idea para mejorar o si quieres felicitar a alguien del equipo.">
        <div className="note"><Icon name="alert" /><p>Este canal no es para urgencias. Si tienes una urgencia, ve a <Link to="/urgencias">Urgencias</Link>, abierta las 24 horas, o llama al <TelUrgencias />.</p></div>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="section-head"><h2>¿Dónde puedes <em>escribirnos</em>?</h2></div>
          <div className="grid g-4">
            <div className="card"><span className="ico"><Icon name="building" /></span><h3>Oficina del SIAU</h3><p><Dato>ubicación dentro del hospital</Dato> · <Dato>horario</Dato></p></div>
            <div className="card"><span className="ico"><Icon name="mail" /></span><h3>Correo</h3><p><a href={`mailto:${SITE.siau}`} style={{ color: 'var(--blue)', fontWeight: 600 }}>{SITE.siau}</a></p></div>
            <div className="card"><span className="ico"><Icon name="phone" /></span><h3>Teléfono</h3><p><Dato>teléfono del SIAU</Dato></p></div>
            <div className="card"><span className="ico"><Icon name="chat" /></span><h3>Buzones de sugerencias</h3><p><Dato>ubicación de los buzones</Dato></p></div>
          </div>
          <p style={{ textAlign: 'center', marginTop: 24 }}>Formulario en esta página: <a href="#formulario" style={{ color: 'var(--blue)', fontWeight: 600 }}>más abajo</a></p>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="big-panel">
            <div className="section-head"><h2>Así <em>funciona</em></h2></div>
            <div className="steps">
              <div className="step"><p>Nos cuentas.</p><span>Llena el formulario o usa cualquiera de nuestros canales.</span></div>
              <div className="step"><p>Recibes un número de radicado.</p><span>Con él puedes consultar el estado de tu solicitud.</span></div>
              <div className="step"><p>Te respondemos</p><span>en un plazo de <Dato>plazo de respuesta</Dato>.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="formulario">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <div className="form-card">
            <h2>Cuéntanos</h2>
            <Form
              submitLabel="Enviar"
              okMessage={<>Recibimos tu solicitud. Tu número de radicado es <Dato>número</Dato>. Te responderemos en un plazo de <Dato>plazo de respuesta</Dato> al correo o al celular que nos dejaste.</>}
              errorMessage="Revisa los campos marcados para poder enviar tu solicitud."
              fields={[
                { name: 'tipo', label: 'Tipo de solicitud', type: 'radio', full: true, required: true, options: ['Petición', 'Queja', 'Reclamo', 'Sugerencia', 'Denuncia', 'Felicitación'] },
                { name: 'nombre', label: 'Nombre completo', full: true },
                { name: 'documento', label: 'Tipo y número de documento', type: 'doc' },
                { name: 'celular', label: 'Celular', type: 'tel' },
                { name: 'correo', label: 'Correo electrónico', type: 'email' },
                { name: 'area', label: 'Servicio o área a la que te refieres', type: 'select', options: [...SERVICIOS_LISTA, 'Atención al usuario', 'Otro'] },
                { name: 'mensaje', label: 'Cuéntanos qué pasó', type: 'textarea', full: true, required: true, help: 'Descríbenos lo ocurrido con claridad. No escribas información médica que no sea necesaria.' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="band light">
            <div>
              <h2>Participa <em>con nosotros</em></h2>
              <p className="lead">Tu opinión nos ayuda a mejorar. <Dato>Información sobre la asociación de usuarios y los espacios de participación social, si el hospital los tiene.</Dato></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
