// Animaciones entre secciones (referencia: slobodiandental.com)
// 1 · Telón: la portada azul queda fija y la sección siguiente sube por encima con esquinas redondeadas.
// 2 · Aparición: los bloques del contenido entran con un fundido hacia arriba al llegar a la pantalla.
import { useEffect, useLayoutEffect } from 'react'

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Portada fija + sección siguiente que la cubre. Se activa si la página empieza con una portada azul (.on-blue). */
export function useCurtain(key) {
  useLayoutEffect(() => {
    const hero = document.querySelector('main')?.firstElementChild
    if (!hero || !hero.classList.contains('on-blue')) return
    let next = hero.nextElementSibling
    while (next && next.classList.contains('toc')) next = next.nextElementSibling
    hero.classList.add('is-curtain')
    next?.classList.add('curtain-edge')

    // Si la portada es más alta que la pantalla, se fija cuando su borde inferior llega abajo.
    const fit = () => hero.style.setProperty('--hero-top', `${Math.min(0, window.innerHeight - hero.offsetHeight)}px`)
    let raf = 0
    const paint = () => {
      raf = 0
      if (!next) return
      const p = 1 - next.getBoundingClientRect().top / window.innerHeight
      hero.style.setProperty('--cover', Math.min(1, Math.max(0, p)).toFixed(3))
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(paint) }

    fit(); paint()
    const ro = new ResizeObserver(fit); ro.observe(hero)
    window.addEventListener('resize', fit)
    if (!reduced()) window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      ro.disconnect(); cancelAnimationFrame(raf)
      window.removeEventListener('resize', fit); window.removeEventListener('scroll', onScroll)
      hero.classList.remove('is-curtain'); next?.classList.remove('curtain-edge')
      hero.style.removeProperty('--hero-top'); hero.style.removeProperty('--cover')
    }
  }, [key])
}

const REVEAL = [
  '.section-head', '.card', '.bt', '.band', '.split > *', '.svc-block', '.panel', '.faq details', '.doc-card',
  '.step', '.duo > *', '.kv', '.map-wrap', '.big-panel', '.form-card', '.carousel', '.legal .item', '.search-bar',
].join(', ')

/** Fundido hacia arriba de los bloques al entrar en pantalla (escalonado entre hermanos). */
export function useReveal(key) {
  useEffect(() => {
    if (reduced() || !('IntersectionObserver' in window)) return
    const main = document.querySelector('main')
    if (!main) return
    const els = []
    for (const el of main.querySelectorAll(REVEAL)) {
      if (el.closest('.is-curtain') || el.parentElement.closest('.rv')) continue
      el.classList.add('rv'); els.push(el)
    }
    for (const el of els) {
      let i = 0, s = el.previousElementSibling
      while (s && i < 5) { if (s.classList.contains('rv')) i++; s = s.previousElementSibling }
      el.style.setProperty('--rv-d', `${i * 80}ms`)
    }
    const timers = []
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        const el = e.target
        io.unobserve(el); el.classList.add('rv-in')
        // Al terminar, se quitan las clases para que vuelvan las transiciones propias (hover de tarjetas, etc.)
        timers.push(setTimeout(() => { el.classList.remove('rv', 'rv-in'); el.style.removeProperty('--rv-d') }, 1400))
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
    els.forEach((el) => io.observe(el))
    return () => {
      io.disconnect(); timers.forEach(clearTimeout)
      els.forEach((el) => { el.classList.remove('rv', 'rv-in'); el.style.removeProperty('--rv-d') })
    }
  }, [key])
}
