import Icon from '../components/Icon.jsx'
import { usePage, PageHero, BtnCita, BtnWa, Btn, AvisoInformativo } from '../components/ui.jsx'
import { ESPECIALIDADES } from '../site.js'

const CIRUGIAS = ['Cirugía general', 'Cirugía gastrointestinal', 'Cirugía de tórax', 'Cirugía de cabeza y cuello', 'Cirugía de la mano', 'Cirugía plástica y estética', 'Cirugía ortopédica', 'Cirugía ginecológica', 'Cirugía urológica', 'Cirugía pediátrica', 'Cirugía dermatológica', 'Cirugía maxilofacial', 'Cirugía oral']

const INDICE = [
  ['urgencias', 'Urgencias'], ['hospitalizacion', 'Hospitalización'], ['cuidado-intensivo', 'Cuidado intensivo'], ['cirugia', 'Cirugía'],
  ['parto', 'Parto y salud de la mujer'], ['especialistas', 'Consulta con especialistas'], ['diagnostico', 'Diagnóstico'],
  ['terapias', 'Terapias y rehabilitación'], ['vacunacion', 'Vacunación'],
]

function Block({ id, icon, title, children }) {
  return (
    <div className="svc-block" id={id}>
      <div className="head"><span className="ico"><Icon name={icon} /></span><h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.1rem)' }}>{title}</h2></div>
      <div className="body">{children}</div>
    </div>
  )
}

export default function Servicios() {
  usePage('Servicios y especialidades en Barranquilla | HUM', 'Urgencias, hospitalización, cirugía, consulta con especialistas, laboratorio, imágenes, terapias y vacunación en el HUM, Barranquilla.')
  return (
    <>
      <PageHero title="Servicios y especialidades" lead="En el HUM encuentras urgencias, hospitalización, cirugía, consulta con especialistas, apoyo diagnóstico y terapias en un mismo lugar.">
        <div className="btn-row"><BtnCita /><BtnWa desde="servicios y especialidades" /></div>
      </PageHero>

      <nav className="toc" aria-label="Índice de servicios">
        <div className="wrap"><div className="toc-pill">{INDICE.map(([id, l]) => <a key={id} href={`#${id}`}>{l}</a>)}</div></div>
      </nav>

      <section className="section tight">
        <div className="wrap svc-list">
          <Block id="urgencias" icon="siren" title="Urgencias">
            <p className="lead">Atención inmediata, todos los días, las 24 horas.</p>
            <Btn to="/urgencias" variant="alert" icon="siren">Ver Urgencias</Btn>
          </Block>
          <Block id="hospitalizacion" icon="bed" title="Hospitalización">
            <p className="lead">Hospitalización para adultos y para niños, con el acompañamiento de nuestro equipo de salud y de tu familia. Atención las 24 horas.</p>
          </Block>
          <Block id="cuidado-intensivo" icon="pulse" title="Cuidado intensivo e intermedio">
            <p className="lead">Cuidado intensivo y cuidado intermedio para adultos. Atención las 24 horas.</p>
          </Block>
          <Block id="cirugia" icon="scalpel" title="Cirugía">
            <p className="lead">Realizamos cirugías en estas especialidades:</p>
            <ul className="chips">{CIRUGIAS.map((c) => <li key={c}>{c}</li>)}</ul>
            <p>Antes de tu cirugía, un especialista te valora y te explica el procedimiento. Atención quirúrgica las 24 horas.</p>
          </Block>
          <Block id="parto" icon="baby" title="Parto y salud de la mujer">
            <p className="lead">Atención del parto y consulta de ginecobstetricia.</p>
          </Block>
          <Block id="especialistas" icon="stethoscope" title="Consulta con especialistas">
            <p className="lead">Consulta externa de lunes a viernes, de 7:00 a. m. a 7:00 p. m.</p>
            <div className="spec-groups">
              {Object.entries(ESPECIALIDADES).map(([g, list]) => (
                <div key={g} className="spec-group"><h4>{g}</h4><p>{list.join(' · ')}</p></div>
              ))}
            </div>
            <Btn to="/equipo-medico" variant="ghost" icon="users">Ver nuestro equipo médico</Btn>
          </Block>
          <Block id="diagnostico" icon="microscope" title="Diagnóstico">
            <p className="lead">Laboratorio clínico, imágenes diagnósticas y servicio farmacéutico. Te informamos los requisitos y la preparación de cada examen cuando solicitas tu cita o nos escribes.</p>
          </Block>
          <Block id="terapias" icon="hands" title="Terapias y rehabilitación">
            <p className="lead">Fisioterapia, terapia ocupacional, terapia respiratoria, terapia del lenguaje y medicina física y rehabilitación.</p>
          </Block>
          <Block id="vacunacion" icon="syringe" title="Vacunación">
            <p className="lead">Vacunación para proteger tu salud y la de tu familia. Escríbenos para conocer los esquemas disponibles y los requisitos.</p>
          </Block>
        </div>
      </section>

      <AvisoInformativo />
    </>
  )
}
