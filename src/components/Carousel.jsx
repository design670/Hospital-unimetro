import { Children, useCallback, useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'

/**
 * Carrusel de banners. Se desliza con el dedo (scroll-snap), con flechas o con los puntos,
 * y avanza solo cada `interval` ms (se detiene al pasar el mouse, al enfocar o si el usuario pide menos movimiento).
 */
export default function Carousel({ children, label = 'Destacados', interval = 7000 }) {
  const slides = Children.toArray(children)
  const track = useRef(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback((n) => {
    const t = track.current
    if (!t) return
    const k = (n + slides.length) % slides.length
    t.scrollTo({ left: k * t.clientWidth, behavior: 'smooth' })
  }, [slides.length])

  const onScroll = () => {
    const t = track.current
    if (t) setActive(Math.round(t.scrollLeft / t.clientWidth))
  }

  useEffect(() => {
    const quiet = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || quiet || slides.length < 2) return
    const id = setInterval(() => go(active + 1), interval)
    return () => clearInterval(id)
  }, [active, paused, interval, go, slides.length])

  return (
    <div
      className="carousel" role="region" aria-roledescription="carrusel" aria-label={label}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
    >
      <div className="carousel-track" ref={track} onScroll={onScroll}>
        {slides.map((s, i) => (
          <div className="carousel-slide" key={i} role="group" aria-roledescription="diapositiva" aria-label={`${i + 1} de ${slides.length}`} aria-hidden={i !== active}>
            {s}
          </div>
        ))}
      </div>
      {slides.length > 1 && (
        <div className="carousel-nav">
          <button type="button" className="carousel-btn" aria-label="Anterior" onClick={() => go(active - 1)}><Icon name="arrow" style={{ transform: 'rotate(180deg)' }} /></button>
          <div className="carousel-dots">
            {slides.map((_, i) => (
              <button key={i} type="button" className={i === active ? 'on' : ''} aria-label={`Ir a la diapositiva ${i + 1}`} aria-current={i === active} onClick={() => go(i)} />
            ))}
          </div>
          <button type="button" className="carousel-btn" aria-label="Siguiente" onClick={() => go(active + 1)}><Icon name="arrow" /></button>
        </div>
      )}
    </div>
  )
}
