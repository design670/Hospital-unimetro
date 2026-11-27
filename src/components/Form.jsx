import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import Select from './Select.jsx'
import { BtnArrow } from './ui.jsx'

/**
 * Formulario genérico. Sin backend todavía: valida en el navegador y muestra el mensaje de envío.
 * fields: [{ name, label, type: text|email|tel|select|radio|textarea|doc, required, options, help, full }]
 */
const ICONOS = { email: 'mail', tel: 'phone', doc: 'file', select: 'stethoscope', textarea: 'chat' }
const ICONOS_NOMBRE = { entidad: 'building', cargo: 'users', eps: 'shield', area: 'building' }

export default function Form({ fields, submitLabel = 'Enviar', okMessage, errorMessage, consentNote = true }) {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  const set = (n, v) => { setValues((s) => ({ ...s, [n]: v })); setErrors((e) => ({ ...e, [n]: undefined })) }

  const submit = (ev) => {
    ev.preventDefault()
    const e = {}
    fields.forEach((f) => {
      const v = (values[f.name] || '').toString().trim()
      if (f.required && !v) e[f.name] = 'Este campo es obligatorio.'
      if (f.type === 'email' && v && !/^\S+@\S+\.\S+$/.test(v)) e[f.name] = 'Revisa el correo electrónico.'
    })
    if (!values.__consent) e.__consent = 'Debes autorizar el tratamiento de tus datos para enviar la solicitud.'
    setErrors(e)
    if (Object.keys(e).length) { setStatus('bad'); return }
    setStatus('ok')
    setValues({})
  }

  const icon = (f) => f.icon || ICONOS[f.type] || ICONOS_NOMBRE[f.name] || 'user'

  return (
    <form onSubmit={submit} noValidate className="hform">
      <div className="form-grid">
        {fields.map((f) => {
          const err = errors[f.name]
          const id = `f-${f.name}`
          const v = values[f.name] || ''
          const label = <>{f.label}{f.required && <span className="req" aria-hidden="true"> *</span>}</>
          const cls = `field ${f.full || f.type === 'doc' || f.type === 'radio' ? 'full' : ''} ${err ? 'error' : ''}`

          if (f.type === 'radio') {
            return (
              <div key={f.name} className={`${cls} field-choice`}>
                <span className="label" id={id}>{label}</span>
                <div className="radios" role="radiogroup" aria-labelledby={id}>
                  {f.options.map((o) => (
                    <label key={o}>
                      <input type="radio" name={f.name} checked={v === o} onChange={() => set(f.name, o)} />
                      <span>{o}</span>
                      <Icon name="tick" />
                    </label>
                  ))}
                </div>
                {err && <span className="err"><Icon name="alert" />{err}</span>}
              </div>
            )
          }

          let input
          if (f.type === 'select') {
            input = <Select id={id} value={v} onChange={(x) => set(f.name, x)} placeholder="Selecciona una opción" options={f.options} />
          } else if (f.type === 'textarea') {
            input = <textarea id={id} value={v} onChange={(e) => set(f.name, e.target.value)} />
          } else if (f.type === 'doc') {
            input = (
              <>
                <Select className="doc-type" ariaLabel="Tipo de documento" value={values[f.name + '_tipo'] || 'CC'} onChange={(x) => set(f.name + '_tipo', x)} options={['CC', 'TI', 'CE', 'PA', 'RC', 'PPT']} />
                <input id={id} inputMode="numeric" value={v} onChange={(e) => set(f.name, e.target.value)} />
              </>
            )
          } else {
            input = <input id={id} type={f.type || 'text'} value={v} onChange={(e) => set(f.name, e.target.value)} />
          }
          return (
            <div key={f.name} className={cls}>
              <div className={`ctl ctl-${f.type || 'text'} ${v ? 'filled' : ''}`}>
                <span className="ctl-ic" aria-hidden="true"><Icon name={icon(f)} /></span>
                {input}
                <label htmlFor={id}>{label}</label>
              </div>
              {f.help && !err && <span className="help">{f.help}</span>}
              {err && <span className="err"><Icon name="alert" />{err}</span>}
            </div>
          )
        })}
        <div className={`field full field-consent ${errors.__consent ? 'error' : ''}`}>
          <label className="check">
            <input type="checkbox" checked={!!values.__consent} onChange={(e) => set('__consent', e.target.checked)} />
            <span className="check-box" aria-hidden="true"><Icon name="tick" /></span>
            <span>Autorizo el tratamiento de mis datos personales de acuerdo con la <Link to="/datos-personales">Política de tratamiento de datos</Link> del HUM.{consentNote && ' Usaremos tus datos solo para responder a tu solicitud.'}</span>
          </label>
          {errors.__consent && <span className="err"><Icon name="alert" />{errors.__consent}</span>}
        </div>
      </div>
      <div className="form-actions">
        <button className="btn btn-primary btn-cta" type="submit"><span>{submitLabel}</span><BtnArrow /></button>
        <span className="form-req"><span aria-hidden="true">*</span> Campos obligatorios</span>
      </div>
      {status === 'ok' && <div className="form-msg ok" role="status"><Icon name="check" /><span>{okMessage}</span></div>}
      {status === 'bad' && <div className="form-msg bad" role="alert"><Icon name="alert" /><span>{errorMessage}</span></div>}
    </form>
  )
}
