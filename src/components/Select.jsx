import { useEffect, useId, useRef, useState } from 'react'
import Icon from './Icon.jsx'

/**
 * Desplegable con el estilo del sitio (reemplaza al <select> nativo).
 * options: string[] | { value, label }[]. placeholder: opción vacía (value '').
 */
export default function Select({ id, value, onChange, options, placeholder, ariaLabel, className = '' }) {
  const opts = [
    ...(placeholder ? [{ value: '', label: placeholder }] : []),
    ...options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o)),
  ]
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const root = useRef(null)
  const list = useRef(null)
  const listId = useId()
  const current = opts.find((o) => o.value === value) || opts[0]
  const isPlaceholder = placeholder && !value

  useEffect(() => {
    if (!open) return
    const close = (e) => { if (!root.current?.contains(e.target)) setOpen(false) }
    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [open])

  useEffect(() => {
    if (open) list.current?.children[active]?.scrollIntoView({ block: 'nearest' })
  }, [open, active])

  const show = () => { setActive(Math.max(0, opts.findIndex((o) => o.value === value))); setOpen(true) }
  const pick = (i) => { onChange(opts[i].value); setOpen(false) }

  const onKey = (e) => {
    if (!open) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) { e.preventDefault(); show() }
      return
    }
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.min(opts.length - 1, a + 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(0, a - 1)) }
    else if (e.key === 'Home') { e.preventDefault(); setActive(0) }
    else if (e.key === 'End') { e.preventDefault(); setActive(opts.length - 1) }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(active) }
    else if (e.key === 'Escape' || e.key === 'Tab') { setOpen(false) }
    else if (e.key.length === 1) {
      const k = e.key.toLowerCase()
      const i = opts.findIndex((o, j) => j > active && o.label.toLowerCase().startsWith(k))
      const j = i >= 0 ? i : opts.findIndex((o) => o.label.toLowerCase().startsWith(k))
      if (j >= 0) setActive(j)
    }
  }

  return (
    <div className={`hselect ${open ? 'open' : ''} ${className}`} ref={root}>
      <button
        type="button" id={id} className="hselect-btn"
        role="combobox" aria-haspopup="listbox" aria-expanded={open} aria-controls={listId}
        aria-label={ariaLabel} aria-activedescendant={open ? `${listId}-${active}` : undefined}
        onClick={() => (open ? setOpen(false) : show())} onKeyDown={onKey}
      >
        <span className={isPlaceholder ? 'hselect-ph' : ''}>{current.label}</span>
        <Icon name="chevron" />
      </button>
      {open && (
        <ul className="hselect-list" role="listbox" id={listId} ref={list} tabIndex={-1}>
          {opts.map((o, i) => (
            <li
              key={o.value || '__ph'} id={`${listId}-${i}`} role="option" aria-selected={o.value === value}
              className={`${i === active ? 'active' : ''} ${o.value === value ? 'sel' : ''}`}
              onPointerEnter={() => setActive(i)} onPointerDown={(e) => e.preventDefault()} onClick={() => pick(i)}
            >
              <span>{o.label}</span>
              {o.value === value && <Icon name="tick" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
