import { usePage, PageHero, Dato, BtnCita, Btn } from '../components/ui.jsx'
import { SITE } from '../site.js'

function Items({ items }) {
  return (
    <section className="section tight">
      <div className="wrap"><div className="big-panel legal">
        {items.map(([t, c]) => <div className="item" key={t}><h3>{t}</h3><p>{c}</p></div>)}
      </div></div>
    </section>
  )
}

export function Datos() {
  usePage('Política de tratamiento de datos personales | HUM', 'Conoce cómo el Hospital Regional Universitario Metropolitano (HUM) recoge, usa y protege tus datos personales y cuáles son tus derechos.')
  return (
    <>
      <PageHero title="Política de tratamiento de datos personales" crumbs="Datos personales" lead="En el HUM cuidamos tus datos personales. Esta página explica qué datos recogemos, para qué los usamos y cómo puedes consultarlos, corregirlos o pedir que los eliminemos." />
      <Items items={[
        ['Responsable del tratamiento', <>HOSPITAL REGIONAL UNIVERSITARIO METROPOLITANO HUM · NIT <Dato>NIT</Dato> · {SITE.address}.</>],
        ['Datos que recogemos y para qué los usamos', <Dato>texto de Jurídica</Dato>],
        ['Tus derechos como titular', <Dato>texto de Jurídica</Dato>],
        ['Cómo ejercer tus derechos', <>Escribe a <Dato>correo para datos personales</Dato></>],
        ['Vigencia de la política', <Dato>fecha</Dato>],
      ]} />
    </>
  )
}

export function Terminos() {
  usePage('Términos de uso y cookies | HUM', 'Términos de uso de la página web del Hospital Regional Universitario Metropolitano (HUM) y política de cookies.')
  return (
    <>
      <PageHero title="Términos de uso y cookies" />
      <Items items={[
        ['Uso de este sitio web', <Dato>texto de Jurídica</Dato>],
        ['Aviso sobre la información médica', 'Esta información es orientativa y no reemplaza la valoración de un profesional de la salud.'],
        ['Cookies', <Dato>texto de Jurídica sobre qué cookies usa el sitio y cómo desactivarlas</Dato>],
      ]} />
    </>
  )
}

export function Transparencia() {
  usePage('Transparencia | HUM', 'Información pública del Hospital Regional Universitario Metropolitano (HUM): documentos institucionales y de contratación.')
  return (
    <>
      <PageHero title="Transparencia" lead="Aquí publicamos la información pública del HUM." />
      <Items items={[['Documentos', <Dato>lista de documentos que defina Jurídica, organizada por categorías; cada uno con título, fecha y enlace de descarga</Dato>]]} />
    </>
  )
}

export function NotFound() {
  usePage('Página no encontrada | HUM')
  return (
    <section className="notfound frame grad on-blue" style={{ paddingTop: 120 }}>
      <div className="wrap">
        <h1>No encontramos esa página</h1>
        <p className="lead" style={{ margin: '20px auto 0', maxWidth: 560 }}>Puede que el enlace haya cambiado. Vuelve al inicio o escríbenos y te ayudamos.</p>
        <div className="btn-row center" style={{ marginTop: 32 }}><Btn to="/" variant="white" icon="arrow">Ir al inicio</Btn><BtnCita variant="glass" /></div>
      </div>
    </section>
  )
}
