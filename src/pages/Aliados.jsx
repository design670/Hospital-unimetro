import Icon from '../components/Icon.jsx'
import Form from '../components/Form.jsx'
import TarjetaColor from '../components/TarjetaColor.jsx'
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
          <TarjetaColor tono="cielo" icon="shield" title="EPS y aseguradoras" href="#formulario" linkLabel="Escribir al HUM como EPS o aseguradora">
            <p>Ofrecemos a los afiliados de su entidad atención en urgencias, hospitalización, cirugía, cuidado intensivo e intermedio, consulta con especialistas, apoyo diagnóstico, terapias y rehabilitación. Para convenios, autorizaciones y contratación, escríbanos y le indicamos el camino.</p>
            <p><strong>EPS y aseguradoras con convenio:</strong> <Dato>lista confirmada por el hospital</Dato></p>
          </TarjetaColor>
          <TarjetaColor tono="marino" icon="building" title="Empresas" href="#formulario" linkLabel="Escribir al HUM como empresa">
            <p>Si su empresa quiere ofrecer a sus colaboradores atención médica con especialistas, exámenes y servicios de medicina laboral, contáctenos y le presentamos nuestra propuesta.</p>
          </TarjetaColor>
          <TarjetaColor tono="niebla" icon="stethoscope" title="Médicos remitentes" href="#formulario" linkLabel="Escribir al HUM como médico remitente">
            <p>Si usted remite a un paciente al HUM, déjenos sus datos y el servicio que necesita. Nuestro equipo le confirmará cómo programar la atención.</p>
            <div className="note"><Icon name="alert" /><p>No escriba datos clínicos del paciente en este formulario. El equipo del HUM los pedirá por un canal seguro.</p></div>
          </TarjetaColor>
        </div>
      </section>

      <section className="section tight" id="formulario">
        <div className="wrap"><div className="cc-block on-blue">
          <aside className="cc-side">
            <div className="cc-text">
              <p className="cc-eyebrow">Contacto comercial</p>
              <h3>Hablemos de cómo trabajar juntos</h3>
              <ul className="info-list">
                <li><Icon name="user" /><Dato>nombre del contacto comercial</Dato></li>
                <li><Icon name="mail" /><Dato>correo</Dato></li>
                <li><Icon name="phone" /><Dato>teléfono</Dato></li>
              </ul>
            </div>
            <img className="cc-img" src="/img/banners/contacto-comercial.webp" alt="" width="760" height="1002" loading="lazy" />
          </aside>
          <div className="form-card">
            <h2>Escríbanos</h2>
            <Form
              submitLabel="Enviar"
              okMessage="Gracias por escribirnos. Un asesor del HUM se pondrá en contacto con usted."
              errorMessage="Revise los campos marcados para poder enviar el mensaje."
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
        </div></div>
      </section>
    </>
  )
}
