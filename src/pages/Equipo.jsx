import { useEffect, useMemo, useState } from 'react'
import Icon from '../components/Icon.jsx'
import Select from '../components/Select.jsx'
import { usePage, PageHero, BtnCita, BtnWa, Closing } from '../components/ui.jsx'
import { TODAS_ESPECIALIDADES } from '../site.js'
import { EQUIPO, iniciales } from '../data/equipo.js'

// Cada profesional aparece solo si autorizó por escrito la publicación.
// El listado actual (src/data/equipo.js) es de MUESTRA: fotos de IA y datos inventados.

const POR_PAGINA = 12
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

function Foto({ d, className, size }) {
  return d.foto
    ? <img className={className} src={d.foto} alt="" loading="lazy" width={size} height={size} />
    : <span className={`${className} doc-initials`} aria-hidden="true">{iniciales(d.nombre)}</span>
}

export default function Equipo() {
  usePage('Equipo médico y especialistas | HUM', 'Conoce a los especialistas del HUM en Barranquilla y solicita tu cita.')
  const [q, setQ] = useState('')
  const [esp, setEsp] = useState('')
  const [open, setOpen] = useState(null)
  const [visibles, setVisibles] = useState(POR_PAGINA)

  const list = useMemo(() => {
    const t = norm(q.trim())
    return EQUIPO.filter((d) => (!esp || d.esp === esp) && (!t || norm(d.nombre).includes(t) || norm(d.esp).includes(t)))
  }, [q, esp])

  useEffect(() => setVisibles(POR_PAGINA), [q, esp])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const filtrando = q.trim() || esp
  const mostrados = list.slice(0, visibles)

  return (
    <>
      <PageHero title="Nuestro equipo médico" lead="Conoce a los especialistas que te atienden en el HUM. Busca por nombre o por especialidad." />

      <section className="section tight">
        <div className="wrap">
          <div className="search-bar" role="search">
            <div className="field"><label className="sr" htmlFor="q" style={{ position: 'absolute', left: -9999 }}>Buscar por nombre o especialidad</label><input id="q" placeholder="Buscar por nombre o especialidad" value={q} onChange={(e) => setQ(e.target.value)} /></div>
            <div className="field">
              <Select ariaLabel="Especialidad" value={esp} onChange={setEsp} placeholder="Todas las especialidades" options={TODAS_ESPECIALIDADES} />
            </div>
          </div>

          {filtrando && (
            <p className="doc-count" role="status">
              <span>
                {list.length === 1 ? '1 especialista' : `${list.length} especialistas`}
                {esp && <> en <strong>{esp}</strong></>}
              </span>
              <button type="button" className="doc-clear" onClick={() => { setQ(''); setEsp('') }}>Ver todo el equipo</button>
            </p>
          )}

          <div style={{ marginTop: 24 }}>
            {list.length ? (
              <>
                <div className="grid g-3">
                  {mostrados.map((d) => (
                    <article key={d.id} className="doc-card">
                      <button className="doc-photo" onClick={() => setOpen(d)} aria-label={`Ver ficha de ${d.nombre}, ${d.esp}`}>
                        <Foto d={d} className="doc-img" size={600} />
                        <span className="doc-go"><Icon name="arrowUpRight" /></span>
                      </button>
                      <div className="doc-body">
                        <h3>{d.nombre}</h3>
                        <p className="spec">{d.esp}</p>
                        <p className="doc-role">{d.cargo}</p>
                      </div>
                    </article>
                  ))}
                </div>
                {list.length > visibles && (
                  <div className="btn-row center" style={{ marginTop: 40 }}>
                    <button type="button" className="btn btn-ghost" onClick={() => setVisibles((v) => v + POR_PAGINA)}>
                      <span>Ver más especialistas ({list.length - visibles})</span><Icon name="plus" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="empty">
                <p className="lead">No encontramos resultados. Escríbenos por WhatsApp y te ayudamos a encontrar a tu especialista.</p>
                <div className="btn-row center" style={{ marginTop: 24 }}><BtnWa desde="el equipo médico" /></div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Closing img="/img/banners/cierre-equipo.webp" text="Los horarios de cada especialista pueden cambiar. Al solicitar tu cita te confirmamos con quién y cuándo serás atendido.">
        <BtnCita variant="white" />
      </Closing>

      {open && (
        <div className="modal-back" onClick={() => setOpen(null)}>
          <div className="modal" role="dialog" aria-modal="true" aria-label={open.nombre} onClick={(e) => e.stopPropagation()}>
            <button className="x" aria-label="Cerrar" onClick={() => setOpen(null)}><Icon name="close" /></button>
            <div className="modal-head">
              <Foto d={open} className="modal-photo" size={96} />
              <div>
                <h2>{open.nombre}</h2>
                <p className="spec">{open.esp}</p>
              </div>
            </div>
            <p className="modal-lead">{open.enfoque}</p>
            <dl>
              <dt>Cargo</dt><dd>{open.cargo}</dd>
              <dt>Formación</dt><dd>{open.formacion}</dd>
              <dt>Experiencia</dt><dd>{open.experiencia}</dd>
              <dt>Consulta</dt><dd>{open.atiende}</dd>
            </dl>
            <BtnCita>Solicitar cita con {open.nombre}</BtnCita>
          </div>
        </div>
      )}
    </>
  )
}
