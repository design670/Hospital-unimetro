import Icon from '../components/Icon.jsx'
import Form from '../components/Form.jsx'
import { usePage, PageHero, Btn, Dato } from '../components/ui.jsx'

export default function Aliados() {
  usePage('EPS, empresas y médicos remitentes | HUM', 'Información para EPS, aseguradoras, empresas y médicos remitentes que quieren trabajar con el Hospital Regional Universitario Metropolitano (HUM).')
  return (
    <>
      <PageHero title="Trabajemos juntos" crumbs="EPS, empresas y remitentes" lead="El HUM trabaja con EPS, aseguradoras, empresas y médicos que remiten a sus pacientes. Escríbenos y un asesor te contactará.">
        <div className="btn-row"><Btn href="#formulario" variant="white" icon="mail">Escribir al HUM</Btn></div>
      </PageHero>

      <section className="section">
        <div className="wrap grid g-3">
          <div className="card">
            <span className="ico"><Icon name="shield" /></span>
            <h3>EPS y aseguradoras</h3>
            <p>Ofrecemos a los afiliados de su entidad atención en urgencias, hospitalización, cirugía, cuidado intensivo e intermedio, consulta con especialistas, apoyo diagnóstico, terapias y rehabilitación. Para convenios, autorizaciones y contratación, escríbanos y le indicamos el camino.</p>
            <p style={{ marginTop: 'auto' }}><strong>EPS y aseguradoras con convenio:</strong> <Dato>lista confirmada por el hospital</Dato></p>
          </div>
          <div className="card">
            <span className="ico"><Icon name="building" /></span>
            <h3>Empresas</h3>
            <p>Si su empresa quiere ofrecer a sus colaboradores atención médica con especialistas, exámenes y servicios de medicina laboral, contáctenos y le presentamos nuestra propuesta.</p>
          </div>
          <div className="card">
            <span className="ico"><Icon name="stethoscope" /></span>
            <h3>Médicos remitentes</h3>
            <p>Si usted remite a un paciente al HUM, déjenos sus datos y el servicio que necesita. Nuestro equipo le confirmará cómo programar la atención.</p>
            <div className="note" style={{ marginTop: 'auto' }}><Icon name="alert" /><p>No escriba datos clínicos del paciente en este formulario. El equipo del HUM los pedirá por un canal seguro.</p></div>
          </div>
        </div>
      </section>

      <section className="section tight" id="formulario">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div className="form-card">
            <h2>Escríbanos</h2>
            <Form
              submitLabel="Enviar"
              okMessage="Gracias por escribirnos. Un asesor del HUM se pondrá en contacto con usted."
              errorMessage="Revise los campos marcados para poder enviar el mensaje."
              consentNote={false}
              fields={[
                { name: 'soy', label: 'Soy', type: 'radio', full: true, required: true, options: ['EPS o aseguradora', 'Empresa', 'Médico remitente'] },
                { name: 'entidad', label: 'Nombre de la entidad o del médico', full: true, required: true },
                { name: 'contacto', label: 'Nombre de la persona de contacto', required: true },
                { name: 'cargo', label: 'Cargo' },
                { name: 'correo', label: 'Correo electrónico', type: 'email', required: true },
                { name: 'telefono', label: 'Teléfono', type: 'tel' },
                { name: 'mensaje', label: '¿En qué podemos ayudarle?', type: 'textarea', full: true, required: true },
              ]}
            />
          </div>
          <div className="panel" style={{ height: 'auto' }}>
            <h3>Contacto comercial</h3>
            <ul className="info-list">
              <li><Icon name="user" /><Dato>nombre del contacto comercial</Dato></li>
              <li><Icon name="mail" /><Dato>correo</Dato></li>
              <li><Icon name="phone" /><Dato>teléfono</Dato></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
