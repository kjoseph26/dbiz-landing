'use client'

import { useState } from 'react'

const reasons = [
  { idx: '01', label: 'EXPERTISE', title: 'Expertise that works together.', body: 'Strategy, cloud, data, platforms, product, design, operations — our teams work across every layer, not within silos.', angle: 0 },
  { idx: '02', label: 'SCALE', title: 'Transformation at scale.', body: '50+ enterprise clients. 150+ AI solutions. Six countries. Over a decade of enterprise delivery — not a pitch deck.', angle: 60 },
  { idx: '03', label: 'DELIVERY', title: 'Time-boxed delivery.', body: 'Outcomes within defined timeframes. Ambiguity is the enemy of delivery — so we don\u2019t allow it.', angle: 120 },
  { idx: '04', label: 'PLATFORMS', title: 'Production platforms.', body: 'NEXUS, Agent Studio, FactWeavers\u2122, DBiz Canvas — production systems deployed in enterprise environments.', angle: 180 },
  { idx: '05', label: 'PARTNERS', title: 'Certified at the highest tiers.', body: 'AWS Advanced, Azure Solutions, Salesforce, Dynamics 365, Snowflake, Databricks, Anthropic, Boomi, MuleSoft.', angle: 240 },
  { idx: '06', label: 'DOMAIN', title: 'Sector expertise, engineered.', body: 'Financial Services, Logistics, Real Estate, Aged Care, Automotive, Government — with FactWeavers\u2122 pre-built for every vertical.', angle: 300 },
]

function WhyDiagram({ active, onSelect }: { active: number; onSelect: (i: number) => void }) {
  const cx = 220
  const cy = 220
  const r = 150
  const nodeR = 28

  return (
    <svg viewBox='0 0 440 440' xmlns='http://www.w3.org/2000/svg' className='v14-why-diagram'>
      <defs>
        <filter id='v14-why-glow'>
          <feGaussianBlur stdDeviation='4' result='coloredBlur' />
          <feMerge><feMergeNode in='coloredBlur' /><feMergeNode in='SourceGraphic' /></feMerge>
        </filter>
        <filter id='v14-why-glow-sm'>
          <feGaussianBlur stdDeviation='2' result='coloredBlur' />
          <feMerge><feMergeNode in='coloredBlur' /><feMergeNode in='SourceGraphic' /></feMerge>
        </filter>
        <radialGradient id='v14-why-hub-grad'>
          <stop offset='0%' stopColor='#E86A2A' stopOpacity='0.3' />
          <stop offset='100%' stopColor='#E86A2A' stopOpacity='0' />
        </radialGradient>
      </defs>

      {/* Orbit rings */}
      <circle cx={cx} cy={cy} r={r + 30} fill='none' stroke='var(--v14-ink-orbit, rgba(255,255,255,0.06))' strokeWidth='0.5' strokeDasharray='4 6' />
      <circle cx={cx} cy={cy} r={r} fill='none' stroke='var(--v14-ink-orbit, rgba(255,255,255,0.08))' strokeWidth='0.8' strokeDasharray='4 4' className='v14-why-orbit' />
      <circle cx={cx} cy={cy} r={r - 40} fill='none' stroke='var(--v14-ink-orbit, rgba(255,255,255,0.06))' strokeWidth='0.5' strokeDasharray='3 5' />

      {/* Hub glow */}
      <circle cx={cx} cy={cy} r='60' fill='url(#v14-why-hub-grad)' className='v14-why-hub-glow' />

      {/* Spokes + nodes */}
      {reasons.map((reason, i) => {
        const a = (reason.angle - 90) * Math.PI / 180
        const nx = cx + Math.cos(a) * r
        const ny = cy + Math.sin(a) * r
        const isActive = i === active

        return (
          <g key={reason.idx} className={`v14-why-node ${isActive ? 'active' : ''}`} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
            {/* Spoke line */}
            <line x1={cx} y1={cy} x2={nx} y2={ny} stroke={isActive ? '#E86A2A' : 'var(--v14-ink-spoke, rgba(255,255,255,0.1))'} strokeWidth={isActive ? 2 : 1} className='v14-why-spoke' />

            {/* Data pulse along spoke */}
            <circle r='3' fill='#E86A2A' opacity={isActive ? 1 : 0.4} filter='url(#v14-why-glow-sm)'>
              <animateMotion dur={`${2 + i * 0.3}s`} repeatCount='indefinite'>
                <mpath xlinkHref={`#spoke-path-${i}`} />
              </animateMotion>
            </circle>
            <path id={`spoke-path-${i}`} d={`M ${cx} ${cy} L ${nx} ${ny}`} fill='none' stroke='none' />

            {/* Node circle */}
            <circle cx={nx} cy={ny} r={nodeR} fill={isActive ? '#E86A2A' : 'var(--v14-ink-hub, rgba(13,27,62,0.6))'} stroke={isActive ? '#E86A2A' : 'var(--v14-ink-corner, rgba(255,255,255,0.15))'} strokeWidth={isActive ? 2.5 : 1.5} filter={isActive ? 'url(#v14-why-glow)' : 'none'} className='v14-why-node-circle' />

            {/* Node label */}
            <text x={nx} y={ny + 1} fontFamily='var(--font-mono)' fontSize='7' fontWeight='700' fill={isActive ? '#fff' : 'var(--v14-ink-2, rgba(255,255,255,0.6))'} textAnchor='middle' dominantBaseline='middle' letterSpacing='0.8'>{reason.label}</text>

            {/* Index number outside */}
            <text x={nx + Math.cos(a) * (nodeR + 14)} y={ny + Math.sin(a) * (nodeR + 14)} fontFamily='var(--font-mono)' fontSize='8' fill='#E86A2A' textAnchor='middle' dominantBaseline='middle' letterSpacing='0.5'>{reason.idx}</text>
          </g>
        )
      })}

      {/* Center hub */}
      <circle cx={cx} cy={cy} r='32' fill='var(--v14-ink-hub, rgba(13,27,62,0.8))' stroke='#E86A2A' strokeWidth='2' />
      <circle cx={cx} cy={cy} r='18' fill='#E86A2A' filter='url(#v14-why-glow)' className='v14-why-hub-pulse' />
      <text x={cx} y={cy - 4} fontFamily='var(--font-mono)' fontSize='7' fontWeight='700' fill='#fff' textAnchor='middle' letterSpacing='1'>WHY</text>
      <text x={cx} y={cy + 7} fontFamily='var(--font-mono)' fontSize='8' fontWeight='700' fill='#fff' textAnchor='middle' letterSpacing='1.5'>DBIZ</text>
    </svg>
  )
}

export default function WhySection() {
  const [active, setActive] = useState(0)
  const reason = reasons[active]

  return (
    <section className='v14-section' id='about' data-surface='light'>
      <div className='v14-container'>
        <div className='v14-why-head'>
          <div className='num'>N°08 / Why DBiz</div>
          <h2>Why enterprises choose <em>DBiz.</em></h2>
          <p className='lead'>Six differentiators — all evidenced by delivery, not brochures.</p>
        </div>

        <div className='v14-why-interactive'>
          {/* Diagram — center */}
          <div className='v14-why-diagram-wrap'>
            <WhyDiagram active={active} onSelect={setActive} />
          </div>

          {/* Detail panel — right */}
          <div className='v14-why-detail' key={active}>
            <span className='v14-why-detail-idx'>{reason.idx}</span>
            <h3>{reason.title}</h3>
            <p>{reason.body}</p>
            <div className='v14-why-detail-nav'>
              {reasons.map((_, i) => (
                <button
                  key={i}
                  className={`v14-why-detail-dot ${i === active ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Reason ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
