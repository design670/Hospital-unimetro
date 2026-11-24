import { useMemo, useState } from 'react'
import Icon from '../components/Icon.jsx'
import { usePage, PageHero, BtnCita, BtnWa, Dato, Closing } from '../components/ui.jsx'
import { TODAS_ESPECIALIDADES } from '../site.js'

// Sin datos reales todavía: cada profesional aparece solo si autorizó por escrito la publicación.
// Estas tarjetas de muestra solo enseñan cómo se verá el listado; se reemplazan por el listado oficial.
const MUESTRA = ['Medicina interna', 'Cardiología', 'Ginecobstetricia', 'Pediatría', 'Cirugía general', 'Ortopedia y traumatología'].map((esp, i) => ({ id: i, esp, muestra: true }))

export default function Equipo() {
  usePage('Equipo médico y especialistas | HUM', 'Conoce a los especialistas del HUM en Barranquilla y solicita tu cita.')
  const [q, setQ] = useState('')
  const [esp, setEsp] = useState('')
  const [open, setOpen] = useState(null)

  const list = useMemo(() => MUESTRA.filter((d) => (!esp || d.esp === esp) && (!q || 'nombre del especialista'.includes(q.toLowerCase()))), [q, esp])

  return (
    <>
      <PageHero title="Nuestro equipo médico" lead="Conoce a los especialistas que te atienden en el HUM. Busca por nombre o por especialidad." />

      <section className="section tight">
        <div className="wrap">
          <div className="search-bar" role="search">
            <div className="field"><label className="sr" htmlFor="q" style={{ position: 'absolute', left: -9999 }}>Buscar por nombre</label><input id="q" placeholder="Buscar por nombre" value={q} onChange={(e) => setQ(e.target.value)} /></div>
            <div className="field">
              <select aria-label="Especialidad" value={esp} onChange={(e) => setEsp(e.target.value)}>
                <option value="">Todas las especialidades</option>
                {TODAS_ESPECIALIDADES.map((e) => <option key={e}>{e}</option>)}
              </select>
            </div>
          </div>

          <div style={{ marginTop: 40 }}>
            {list.length ? (
              <div className="grid g-3">
                {list.map((d) => (
                  <div key={d.id} className="card doc-card">
                    <span className="avatar"><Icon name="user" /></span>
                    <h3><Dato>Nombre</Dato></h3>
                    <p className="spec">{d.esp}</p>
                    <p><Dato>Cargo</Dato></p>
                    <div className="btn-row" style={{ marginTop: 'auto' }}>
                      <button className="btn btn-ghost" onClick={() => setOpen(d)}>Ver ficha</button>
                      <BtnCita />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty">
                <p className="lead">No encontramos resultados. Escríbenos por WhatsApp y te ayudamos a encontrar a tu especialista.</p>
                <div className="btn-row center" style={{ marginTop: 24 }}><BtnWa desde="el equipo médico" /></div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Closing text="Los horarios de cada especialista pueden cambiar. Al solicitar tu cita te confirmamos con quién y cuándo serás atendido.">
        <BtnCita variant="white" />
      </Closing>

      {open && (
        <div className="modal-back" onClick={() => setOpen(null)}>
          <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button className="x" aria-label="Cerrar" onClick={() => setOpen(null)}><Icon name="close" /></button>
            <span className="avatar" style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(160deg,#cfe2f4,#8db6dc)', display: 'grid', placeItems: 'center', color: '#fff' }}><Icon name="user" style={{ width: 32 }} /></span>
            <h2 style={{ fontSize: '1.6rem', marginTop: 18 }}><Dato>Nombre</Dato></h2>
            <dl>
              <dt>Cargo</dt><dd><Dato>Cargo</Dato></dd>
              <dt>Especialidad</dt><dd>{open.esp}</dd>
              <dt>Formación</dt><dd><Dato>título y universidad</Dato></dd>
            </dl>
            <BtnCita>Solicitar cita con [nombre]</BtnCita>
          </div>
        </div>
      )}
    </>
  )
}
