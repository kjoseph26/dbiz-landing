'use client'

/* Option A — Exploded isometric stack as the main view.
   The 7 layers float with gentle drift. Click any layer → detail card slides in,
   clicked layer lifts forward, others ease back. Stack metaphor stays visible. */

import { useState } from 'react'
import { capabilities } from './data'

export function OptionA() {
  const [active, setActive] = useState(0)
  const c = capabilities[active]

  // Box coordinates for the exploded stack (isometric)
  const layerY = (i: number) => 60 + i * 54
  const skew = 28

  return (
    <section className='v22-section' id='cap-a'>
      <div className='v22-container'>
        <div className='v22-section-head'>
          <div className='num'>Option A / Exploded stack</div>
          <h2>Every layer.<br /><span style={{ color: 'var(--v22-accent)' }}>In motion.</span></h2>
          <p className='lead'>Click any layer — the stack floats gently, the detail panel slides in. The metaphor never leaves the view.</p>
        </div>

        <div className='capA-grid'>
          <div className='capA-stack-wrap'>
            <svg viewBox='0 0 440 480' xmlns='http://www.w3.org/2000/svg' className='capA-stack' aria-label='Capabilities stack'>
              {/* Blueprint frame */}
              <g stroke='var(--v22-hair-strong)' strokeWidth='0.8'>
                <line x1='10' y1='10' x2='30' y2='10' /><line x1='10' y1='10' x2='10' y2='30' />
                <line x1='430' y1='10' x2='410' y2='10' /><line x1='430' y1='10' x2='430' y2='30' />
                <line x1='10' y1='470' x2='30' y2='470' /><line x1='10' y1='470' x2='10' y2='450' />
                <line x1='430' y1='470' x2='410' y2='470' /><line x1='430' y1='470' x2='430' y2='450' />
              </g>
              {/* Dot grid */}
              <defs>
                <pattern id='capA-dot' patternUnits='userSpaceOnUse' width='10' height='10'>
                  <circle cx='1' cy='1' r='0.8' fill='rgba(255,255,255,0.12)' />
                </pattern>
              </defs>
              <rect x='20' y='20' width='400' height='440' fill='url(#capA-dot)' />

              {/* Layers */}
              {capabilities.map((cap, i) => {
                const y = layerY(i)
                const isActive = i === active
                return (
                  <g
                    key={cap.num}
                    className={`capA-layer ${isActive ? 'is-active' : ''}`}
                    style={{ '--layer-i': i } as React.CSSProperties}
                    onClick={() => setActive(i)}
                    role='button'
                    aria-label={`Select ${cap.kicker}`}
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive(i)}
                  >
                    {/* Top face */}
                    <polygon
                      points={`120,${y} 320,${y} ${320 + skew},${y - 14} ${120 + skew},${y - 14}`}
                      fill='transparent'
                      stroke={isActive ? 'var(--v22-accent)' : 'var(--v22-hair-strong)'}
                      strokeWidth={isActive ? 1.4 : 1}
                    />
                    {/* Front face */}
                    <rect
                      x='120'
                      y={y}
                      width='200'
                      height='34'
                      fill={isActive ? 'rgba(240,123,47,0.12)' : 'transparent'}
                      stroke={isActive ? 'var(--v22-accent)' : 'var(--v22-hair-strong)'}
                      strokeWidth={isActive ? 1.4 : 1}
                    />
                    {/* Right face */}
                    <polygon
                      points={`320,${y} ${320 + skew},${y - 14} ${320 + skew},${y + 20} 320,${y + 34}`}
                      fill='transparent'
                      stroke={isActive ? 'var(--v22-accent)' : 'var(--v22-hair-strong)'}
                      strokeWidth={isActive ? 1.4 : 1}
                    />
                    {/* Label */}
                    <text
                      x='136'
                      y={y + 21}
                      fontFamily='var(--font-mono)'
                      fontSize='10'
                      letterSpacing='1.8'
                      fill={isActive ? 'var(--v22-accent)' : 'rgba(255,255,255,0.75)'}
                    >
                      {cap.kicker.toUpperCase()}
                    </text>
                    {/* Layer number */}
                    <text
                      x='104'
                      y={y + 21}
                      fontFamily='var(--font-mono)'
                      fontSize='9'
                      fill='rgba(255,255,255,0.45)'
                      textAnchor='end'
                    >
                      L{cap.num}
                    </text>
                    {/* Callout */}
                    <line
                      x1={320 + skew}
                      y1={y + 10}
                      x2='400'
                      y2={y + 10}
                      stroke={isActive ? 'var(--v22-accent)' : 'rgba(255,255,255,0.2)'}
                      strokeWidth='0.6'
                      strokeDasharray='2 2'
                    />
                  </g>
                )
              })}
            </svg>
          </div>

          <div className='capA-detail' key={active}>
            <div className='capA-detail-kicker'>{c.kicker.toUpperCase()}</div>
            <h3 className='capA-detail-title'>{c.title}</h3>
            <p className='capA-detail-sub'>{c.subtitle}</p>
            <p className='capA-detail-body'>{c.body}</p>
            <div className='capA-detail-tags'>
              {c.tags.map((t) => (
                <span key={t} className='capA-tag'>{t}</span>
              ))}
            </div>
            <a href='#' className='capA-detail-cta'>{c.cta} <span>→</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}
