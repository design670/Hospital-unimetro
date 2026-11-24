import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

/**
 * Formulario genérico. Sin backend todavía: valida en el navegador y muestra el mensaje de envío.
 * fields: [{ name, label, type: text|email|tel|select|radio|textarea|doc, required, options, help, full }]
 */
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

  return (
    <form onSubmit={submit} noValidate>
      <div className="form-grid">
        {fields.map((f) => {
          const err = errors[f.name]
          const id = `f-${f.name}`
          const label = <>{f.label}{f.required && ' *'}</>
          let input
          if (f.type === 'select') {
            input = (
              <select id={id} value={values[f.name] || ''} onChange={(e) => set(f.name, e.target.value)}>
                <option value="">Selecciona una opción</option>
                {f.options.map((o) => <option key={o}>{o}</option>)}
              </select>
            )
          } else if (f.type === 'radio') {
            input = (
              <div className="radios" role="radiogroup" aria-labelledby={id}>
                {f.options.map((o) => (
                  <label key={o}><input type="radio" name={f.name} checked={values[f.name] === o} onChange={() => set(f.name, o)} />{o}</label>
                ))}
              </div>
            )
          } else if (f.type === 'textarea') {
            input = <textarea id={id} value={values[f.name] || ''} onChange={(e) => set(f.name, e.target.value)} />
          } else if (f.type === 'doc') {
            input = (
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 10 }}>
                <select aria-label="Tipo de documento" value={values[f.name + '_tipo'] || 'CC'} onChange={(e) => set(f.name + '_tipo', e.target.value)}>
                  {['CC', 'TI', 'CE', 'PA', 'RC', 'PPT'].map((t) => <option key={t}>{t}</option>)}
                </select>
                <input id={id} inputMode="numeric" value={values[f.name] || ''} onChange={(e) => set(f.name, e.target.value)} />
              </div>
            )
          } else {
            input = <input id={id} type={f.type || 'text'} value={values[f.name] || ''} onChange={(e) => set(f.name, e.target.value)} />
          }
          return (
            <div key={f.name} className={`field ${f.full ? 'full' : ''} ${err ? 'error' : ''}`}>
              {f.type === 'radio' ? <span className="label" id={id}>{label}</span> : <label htmlFor={id}>{label}</label>}
              {input}
              {f.help && <span className="help">{f.help}</span>}
              {err && <span className="err">{err}</span>}
            </div>
          )
        })}
        <div className={`field full ${errors.__consent ? 'error' : ''}`}>
          <label className="check">
            <input type="checkbox" checked={!!values.__consent} onChange={(e) => set('__consent', e.target.checked)} />
            <span>Autorizo el tratamiento de mis datos personales de acuerdo con la <Link to="/datos-personales">Política de tratamiento de datos</Link> del HUM.{consentNote && ' Usaremos tus datos solo para responder a tu solicitud.'}</span>
          </label>
          {errors.__consent && <span className="err">{errors.__consent}</span>}
        </div>
      </div>
      <div className="form-actions">
        <button className="btn btn-primary" type="submit"><span>{submitLabel}</span><Icon name="arrow" /></button>
      </div>
      {status === 'ok' && <div className="form-msg ok" role="status"><Icon name="check" /><span>{okMessage}</span></div>}
      {status === 'bad' && <div className="form-msg bad" role="alert"><Icon name="alert" /><span>{errorMessage}</span></div>}
    </form>
  )
}
