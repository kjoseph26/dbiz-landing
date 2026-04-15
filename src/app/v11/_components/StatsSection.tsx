'use client'

import { useEffect, useRef, useState } from 'react'
import { stats } from '../_content/stats'

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const prefersReduced = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false
  const [count, setCount] = useState(prefersReduced ? target : 0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReduced) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0
          const dur = 1400
          const step = (ts: number) => {
            if (!start) start = ts
            const p = Math.min((ts - start) / dur, 1)
            setCount(Math.floor(p * target))
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
          obs.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, prefersReduced])

  return (
    <div
      ref={ref}
      className='val'
      style={{ color: 'var(--bp-ink)' }}
    >
      {count}
      {suffix}
    </div>
  )
}

export const StatsSection = () => (
  <section className='bp-section'>
    <div className='bp-container'>
      <span className='bp-mono-accent' style={{ marginBottom: 40, display: 'inline-block' }}>
        N·03 · BY THE NUMBERS
      </span>
      <div className='grid gap-0 sm:grid-cols-2 lg:grid-cols-4' style={{ border: '1px solid var(--bp-hair)' }}>
        {stats.map((s) => (
          <div
            key={s.coord}
            className='bp-card bp-frame-cell'
            style={{ border: 0, borderRight: '1px solid var(--bp-hair)' }}
          >
            <span className='cell-bg' />
            <span className='cell-outline' />
            <div className='hd'>
              <span>Stat</span>
              <span className='k'>{s.coord}</span>
            </div>
            <Counter target={s.value} suffix={s.suffix} />
            <div className='lbl'>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
