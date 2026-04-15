'use client'

import { useEffect, useState } from 'react'
import { Icon } from '@/components/icon'
import { testimonials } from '../_content/testimonials'

const CYCLE_MS = 6000

export const TestimonialSection = () => {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, CYCLE_MS)
    return () => clearInterval(id)
  }, [paused])

  const t = testimonials[index]

  return (
    <section
      data-surface='beige'
      className='bp-section'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className='bp-container'>
        <div className='bp-section-head' style={{ textAlign: 'center', margin: '0 auto 56px' }}>
          <div className='bp-kicker' style={{ justifyContent: 'center' }}>
            N·06 · Voice of the practice
          </div>
        </div>

        <div
          className='bp-card'
          style={{ maxWidth: 820, margin: '0 auto', minHeight: 300 }}
        >
          <div className='hd'>
            <span>Testimonial</span>
            <span className='k'>{t.coord}</span>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
              lineHeight: 1.4,
              color: 'var(--bp-ink)',
              marginBottom: 28,
            }}
          >
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className='bp-mono' style={{ color: 'var(--bp-ink-2)' }}>
            {t.name.toUpperCase()} · {t.role} · {t.company}
          </div>
        </div>

        <div
          className='flex items-center justify-center gap-6 mt-8'
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          <button
            className='bp-btn-text'
            aria-label='Previous testimonial'
            onClick={() => {
              setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
              setPaused(true)
            }}
          >
            <Icon icon='ph:arrow-left-bold' width={12} /> PREV
          </button>
          <span className='bp-mono-accent'>
            {String(index + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>
          <button
            className='bp-btn-text'
            aria-label='Next testimonial'
            onClick={() => {
              setIndex((i) => (i + 1) % testimonials.length)
              setPaused(true)
            }}
          >
            NEXT <Icon icon='ph:arrow-right-bold' width={12} />
          </button>
        </div>
      </div>
    </section>
  )
}
