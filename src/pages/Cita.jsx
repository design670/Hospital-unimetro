import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Form from '../components/Form.jsx'
import { usePage, PageHero, AvisoUrgencia, Btn, Dato, Check, Faq } from '../components/ui.jsx'
import { SITE, waLink, SERVICIOS_LISTA, TODAS_ESPECIALIDADES } from '../site.js'

export default function Cita() {
  usePage('Solicitar cita en Barranquilla | HUM', 'Solicita tu cita en el HUM por WhatsApp, correo o formulario. Te contamos qué necesitas si tienes EPS o eres paciente particular.')
  return (
    <>
      <PageHero variant="blue" title="Solicita tu cita" lead="Pide tu cita por el medio que prefieras. Nuestro equipo te contacta para confirmar la fecha y la hora.">
        <AvisoUrgencia />
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="section-head"><h2>¿Cómo prefieres contactarnos?</h2></div>
          <div className="grid g-3">
            <div className="card channel">
              <span className="ico" style={{ color: '#1faa59' }}><Icon name="whatsapp" /></span>
              <h3>WhatsApp</h3><p className="val">{SITE.whatsapp}</p>
              <Btn href={waLink('solicitar una cita')} variant="wa" icon="whatsapp">Escribir por WhatsApp</Btn>
            </div>
            <div className="card channel">
              <span className="ico"><Icon name="mail" /></span>
              <h3>Correo</h3><p className="val">{SITE.citas}</p>
              <Btn href={`mailto:${SITE.citas}`} variant="ghost" icon="mail">Enviar correo</Btn>
            </div>
            <div className="card channel">
              <span className="ico"><Icon name="file" /></span>
              <h3>Formulario</h3><p>Déjanos tus datos y te contactamos.</p>
              <Btn href="#formulario" icon="arrow">Ir al formulario</Btn>
            </div>
          </div>
          <p style={{ marginTop: 24 }}>Atendemos solicitudes de citas <Dato>horario del servicio de citas</Dato>.</p>
        </div>
      </section>

      <section className="section bg-neutral">
        <div className="wrap">
          <div className="section-head"><h2>¿Tienes EPS o eres paciente particular?</h2></div>
          <div className="grid g-3">
            <div className="panel">
              <h3>Si tienes EPS</h3>
              <p>Lleva tu documento de identidad, tu carné y la orden médica. Algunos servicios requieren autorización de tu EPS. Cuando solicites tu cita, te decimos qué necesitas y cómo tramitarla.</p>
              <p>Si no sabes si tu EPS tiene convenio con el HUM, escríbenos y te lo confirmamos.</p>
            </div>
            <div className="panel">
              <h3>Si eres paciente particular</h3>
              <p>Cuando solicites tu cita, te informamos los servicios, los valores y las formas de pago. Lleva tu documento de identidad.</p>
            </div>
            <div className="panel" style={{ background: '#fdecee' }}>
              <h3>Sin cita</h3>
              <p><Link to="/urgencias" style={{ color: 'var(--alert)', fontWeight: 700 }}>Urgencias</Link> no necesita cita: atiende las 24 horas, todos los días.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <h2>Qué llevar a tu cita</h2>
            <div style={{ marginTop: 28 }}>
              <Check items={['Documento de identidad', 'Carné de tu EPS, si tienes', 'Orden médica y autorización, si tu servicio las requiere', 'Exámenes o historia clínica anteriores relacionados con tu consulta']} />
            </div>
            <p style={{ marginTop: 20 }}>Llega unos minutos antes de la hora acordada.</p>
          </div>
          <div className="form-card" id="formulario">
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.1rem)' }}>Déjanos tus datos</h2>
            <Form
              submitLabel="Enviar solicitud"
              okMessage="¡Gracias! Recibimos tu solicitud. Nuestro equipo te contactará para confirmar tu cita."
              errorMessage={`No pudimos enviar tu solicitud. Revisa los datos o escríbenos por WhatsApp al ${SITE.whatsapp}.`}
              consentNote={false}
              fields={[
                { name: 'nombre', label: 'Nombre completo', required: true, full: true },
                { name: 'documento', label: 'Tipo y número de documento', type: 'doc', required: true },
                { name: 'celular', label: 'Celular o WhatsApp', type: 'tel', required: true },
                { name: 'correo', label: 'Correo electrónico', type: 'email', full: true },
                { name: 'servicio', label: 'Servicio o especialidad', type: 'select', required: true, full: true, options: [...SERVICIOS_LISTA, ...TODAS_ESPECIALIDADES] },
                { name: 'tipo', label: 'Soy paciente', type: 'radio', required: true, options: ['EPS', 'Particular'] },
                { name: 'eps', label: 'EPS (si aplica)' },
                { name: 'comentario', label: 'Comentario (opcional)', type: 'textarea', full: true, help: 'Por favor no escribas información médica.' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section bg-neutral">
        <div className="wrap">
          <div className="section-head"><h2>Preguntas frecuentes</h2></div>
          <Faq items={[
            ['¿Mi cita queda confirmada al enviar el formulario?', 'No. Recibimos tu solicitud y nuestro equipo te contacta para confirmar la fecha y la hora.'],
            ['¿Puedo cancelar o cambiar mi cita?', `Sí. Escríbenos por WhatsApp o al correo ${SITE.citas} lo antes posible.`],
            ['¿Necesito cita para Urgencias?', 'No. Urgencias atiende las 24 horas, todos los días.'],
            ['¿Mi EPS tiene convenio con el HUM?', 'Escríbenos y te lo confirmamos.'],
          ]} />
        </div>
      </section>
    </>
  )
}
