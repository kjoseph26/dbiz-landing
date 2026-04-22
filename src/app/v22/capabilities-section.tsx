'use client'

import { useState, useEffect } from 'react'

const CYCLE_MS = 4500

type Capability = {
  num: string
  kicker: string          // architectural name (e.g., INTELLIGENCE)
  altLabel: string        // familiar service-area name (e.g., DATA & AI)
  title: string
  subtitle: string
  tags: string[]
  body: string
  cta: string
}

const capabilities: Capability[] = [
  {
    num: '01',
    kicker: 'AI Strategy & Architecture',
    altLabel: 'Tech Advisory',
    title: 'Strategy for AI, Architecture for Scale',
    subtitle: 'Futures Studio · TechOffice Foundry',
    tags: ['AI Vision & Roadmap', 'Architecture-as-a-Service', 'AI Readiness', 'DBiz Canvas'],
    body: 'Your business priorities become an AI and technology roadmap. Use case prioritisation, readiness assessment, architecture blueprint, data governance and security posture, before a single line of code gets written.',
    cta: 'Get an AI readiness assessment',
  },
  {
    num: '02',
    kicker: 'AI-Ready Infrastructure',
    altLabel: 'Cloud',
    title: 'Purpose-built for AI Workloads',
    subtitle: 'Multi-hyperscaler · Sovereign · Governed',
    tags: ['DBiz Scoop', 'Multi-Hyperscaler', 'Sovereign Cloud', 'GPU Orchestration', 'FinOps'],
    body: 'Cloud built for AI workloads, not retrofitted for them. Environments purpose-built for agents, data pipelines, and AI models, with governance, cost controls, and observability enterprise IT requires.',
    cta: 'Talk to a cloud architect',
  },
  {
    num: '03',
    kicker: 'Intelligence',
    altLabel: 'Data & AI',
    title: 'The Intelligence Layer',
    subtitle: 'FactWeavers\u2122 · Domain Data Cloud',
    tags: ['FactWeavers\u2122', 'Domain Data Cloud', 'Data Mesh'],
    body: "Every AI initiative stalls on the same thing: the data isn\u2019t ready. FactWeavers\u2122 cleans, unifies, and activates enterprise data, pre-modelled for your industry, ready for agents from day one.",
    cta: 'See FactWeavers\u2122 in action',
  },
  {
    num: '04',
    kicker: 'Orchestration',
    altLabel: 'Business Apps & Integration',
    title: 'Connected Systems, Not Silos',
    subtitle: 'No rip and replace',
    tags: ['Salesforce', 'Dynamics 365', 'Boomi', 'MuleSoft'],
    body: "CRM, ERP, and platform investments don\u2019t need replacing, they need unlocking \u2014 for agents. We connect existing systems so agents can read, write, and act across your entire application landscape.",
    cta: 'Explore integration options',
  },
  {
    num: '05',
    kicker: 'AI Engineering',
    altLabel: 'Product & AI Engineering',
    title: 'Engineered with AI, Shipped Continuously',
    subtitle: 'Agent Studio \u00b7 Nexus \u00b7 Perpetual Engineering',
    tags: ['AI-Native Apps', 'Agent Studio', 'Nexus Platform', 'Perpetual Engineering'],
    body: 'AI-native applications built by AI-first teams. Agent Studio for multi-agent orchestration, Nexus as the dev platform, Perpetual Engineering across the SDLC.',
    cta: 'See what we\u2019ve built',
  },
  {
    num: '06',
    kicker: 'Human Experience',
    altLabel: 'Research & Design',
    title: 'Designed for Humans, Trusted by Agents',
    subtitle: 'Research-led · Experience engineering',
    tags: ['Agentic UX', 'Design Systems', 'DBiz Canvas', 'AI in Design Workflows'],
    body: 'Designing for humans in an increasingly agentic world is our core. We map human needs into design, iterate with AI-driven workflows, and turn requirements into shipped screens in days \u2014 structured enough to scale, human enough to trust.',
    cta: 'Explore our design practice',
  },
  {
    num: '07',
    kicker: 'AI Operations',
    altLabel: 'Managed Services',
    title: 'AI-First Operations',
    subtitle: 'The team that built it runs it',
    tags: ['Monitoring', 'Governance', 'Continuous Improvement'],
    body: "AI-first monitoring, governance, and continuous improvement across your entire stack. Not a support contract from a team that\u2019s never seen the architecture.",
    cta: 'Learn about managed services',
  },
]


/* ─── Stack Diagram SVG — Deconstructed Assembly (machine reference) ─── */
function StackDiagram() {
  const svgW = 1400
  const svgH = 720

  const shaftY = 360
  const discR = 68
  // 7 discs evenly spaced along the horizontal shaft
  const discCenters = [180, 340, 500, 660, 820, 980, 1140]

  type Side = { name: string; desc: string }
  // Order: left-to-right — Strategy (01) first, Data (07) last
  const layers: { n: string; label: string; top: Side; bottom: Side }[] = [
    { n: '01', label: 'STRATEGY',
      top:    { name: 'Futures Studio', desc: 'AI ambition, roadmap & use-case prioritisation' },
      bottom: { name: 'DBiz Canvas',    desc: 'Concept to code in days' } },
    { n: '02', label: 'ARCHITECTURE',
      top:    { name: 'TechOffice Foundry', desc: 'AI foundation & Well-Architected review' },
      bottom: { name: 'DBiz Adapt',         desc: 'Architecting Secure and Sovereign AI' } },
    { n: '03', label: 'CLOUD',
      top:    { name: 'Multi-Cloud AI Foundation', desc: 'Enterprise AI Foundation rollout' },
      bottom: { name: 'DBiz Scoop',                desc: 'AI-Powered migration pipeline' } },
    { n: '04', label: 'DEVELOPMENT',
      top:    { name: 'Perpetual Engineering', desc: 'AI agents across the full SDLC' },
      bottom: { name: 'Nexus Platform',        desc: 'Enterprise AI dev environment' } },
    { n: '05', label: 'PRODUCTIVITY',
      top:    { name: 'AI-Infused BizApps',     desc: 'Autonomous agents for SaaS platforms' },
      bottom: { name: 'Productivity Automation', desc: 'Claude Co-work & Copilot' } },
    { n: '06', label: 'ORCHESTRATION',
      top:    { name: 'Agent Studio',     desc: 'Agentic AI & multi-agent orchestration' },
      bottom: { name: 'Nexus iConnector', desc: 'No rip & replace integration' } },
    { n: '07', label: 'DATA & INSIGHTS',
      top:    { name: 'DBiz Compass',    desc: 'AI-infused data engineering' },
      bottom: { name: 'Factweavers.ai',  desc: 'Domain data cloud & quick insights' } },
  ]

  // Per-layer inner shape renderer — duotone: grey structure + orange accents
  const renderShape = (i: number, cx: number, cy: number) => {
    const acc = 'var(--v22-accent)'
    const ink = 'rgba(255,255,255,0.38)'
    switch (i) {
      case 0: // 01 Strategy — concentric target rings + crosshair
        return (
          <g>
            <circle cx={cx} cy={cy} r='48' stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' fill='none' />
            <circle cx={cx} cy={cy} r='34' stroke={ink} strokeWidth='1' fill='none' />
            <circle cx={cx} cy={cy} r='20' stroke={acc} strokeWidth='1.2' fill='none' />
            <circle cx={cx} cy={cy} r='8' stroke={acc} strokeWidth='1' fill='none' />
            <line x1={cx - 58} y1={cy} x2={cx - 42} y2={cy} stroke={ink} strokeWidth='0.8' />
            <line x1={cx + 42} y1={cy} x2={cx + 58} y2={cy} stroke={ink} strokeWidth='0.8' />
            <line x1={cx} y1={cy - 58} x2={cx} y2={cy - 42} stroke={ink} strokeWidth='0.8' />
            <line x1={cx} y1={cy + 42} x2={cx} y2={cy + 58} stroke={ink} strokeWidth='0.8' />
            <circle cx={cx} cy={cy} r='3' fill={acc} />
          </g>
        )
      case 1: { // 02 Architecture — nested hexagons
        const hex = (r: number) => `${cx},${cy - r} ${cx + r * 0.866},${cy - r / 2} ${cx + r * 0.866},${cy + r / 2} ${cx},${cy + r} ${cx - r * 0.866},${cy + r / 2} ${cx - r * 0.866},${cy - r / 2}`
        return (
          <g>
            <polygon points={hex(46)} stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' fill='none' />
            <polygon points={hex(32)} stroke={ink} strokeWidth='1' fill='none' />
            <polygon points={hex(18)} stroke={acc} strokeWidth='1.3' fill='none' />
            <circle cx={cx} cy={cy} r='3' fill={acc} />
          </g>
        )
      }
      case 2: // 03 Cloud — stacked cloud lamellae
        return (
          <g>
            <path d={`M ${cx - 44} ${cy + 18} L ${cx} ${cy - 2} L ${cx + 44} ${cy + 18} L ${cx} ${cy + 38} Z`} stroke={ink} strokeWidth='1' fill='none' />
            <path d={`M ${cx - 34} ${cy + 6} L ${cx} ${cy - 12} L ${cx + 34} ${cy + 6} L ${cx} ${cy + 24} Z`} stroke={ink} strokeWidth='1' fill='none' />
            <path d={`M ${cx - 24} ${cy - 6} L ${cx} ${cy - 22} L ${cx + 24} ${cy - 6} L ${cx} ${cy + 10} Z`} stroke={acc} strokeWidth='1.3' fill='none' />
            <line x1={cx} y1={cy - 22} x2={cx} y2={cy + 38} stroke={ink} strokeWidth='0.6' strokeDasharray='2 2' />
            <circle cx={cx} cy={cy - 14} r='2.5' fill={acc} />
          </g>
        )
      case 3: // 04 Development — gear teeth ring
        return (
          <g>
            <circle cx={cx} cy={cy} r='32' stroke={ink} strokeWidth='1' fill='none' />
            {Array.from({ length: 12 }).map((_, t) => {
              const a = (t / 12) * Math.PI * 2
              const x1 = cx + Math.cos(a) * 32
              const y1 = cy + Math.sin(a) * 32
              const x2 = cx + Math.cos(a) * 44
              const y2 = cy + Math.sin(a) * 44
              return <line key={t} x1={x1} y1={y1} x2={x2} y2={y2} stroke={ink} strokeWidth='2' />
            })}
            <circle cx={cx} cy={cy} r='44' stroke={ink} strokeWidth='0.6' strokeDasharray='3 2' fill='none' />
            <circle cx={cx} cy={cy} r='22' stroke={acc} strokeWidth='1.2' fill='none' />
            <circle cx={cx} cy={cy} r='10' stroke={acc} strokeWidth='1' fill='none' />
            <circle cx={cx} cy={cy} r='3' fill={acc} />
          </g>
        )
      case 4: // 05 Productivity — dual-ring co-work (human + AI converging)
        return (
          <g>
            {/* Left ring — "human" (grey) */}
            <circle cx={cx - 16} cy={cy} r='24' stroke={ink} strokeWidth='1.1' fill='none' />
            <circle cx={cx - 16} cy={cy} r='16' stroke={ink} strokeWidth='0.6' strokeDasharray='2 2' fill='none' />
            <circle cx={cx - 16} cy={cy} r='2' fill={ink} />
            {/* Right ring — "AI" (orange) */}
            <circle cx={cx + 16} cy={cy} r='24' stroke={acc} strokeWidth='1.3' fill='none' />
            <circle cx={cx + 16} cy={cy} r='16' stroke={acc} strokeWidth='0.6' strokeDasharray='2 2' fill='none' />
            <circle cx={cx + 16} cy={cy} r='2' fill={acc} />
            {/* Convergence core — shared spark at the intersection */}
            <circle cx={cx} cy={cy} r='7' fill={acc} fillOpacity='0.18' stroke={acc} strokeWidth='1.3' />
            <circle cx={cx} cy={cy} r='2.5' fill={acc} />
            {/* Subtle accent dots top & bottom of overlap */}
            <circle cx={cx} cy={cy - 32} r='1.6' fill={acc} opacity='0.5' />
            <circle cx={cx} cy={cy + 32} r='1.6' fill={acc} opacity='0.5' />
          </g>
        )
      case 5: // 06 Orchestration — hub with 6 connected nodes (no outer ring)
        return (
          <g>
            {Array.from({ length: 6 }).map((_, nIdx) => {
              const a = (nIdx / 6) * Math.PI * 2 - Math.PI / 2
              const nx = cx + Math.cos(a) * 38
              const ny = cy + Math.sin(a) * 38
              return (
                <g key={nIdx}>
                  <line x1={cx} y1={cy} x2={nx} y2={ny} stroke={ink} strokeWidth='0.8' strokeDasharray='2 2' />
                  <circle cx={nx} cy={ny} r='4.5' fill={acc} opacity='0.85' />
                </g>
              )
            })}
            <circle cx={cx} cy={cy} r='12' stroke={acc} strokeWidth='1.5' fill={acc} fillOpacity='0.15' />
            <circle cx={cx} cy={cy} r='3.5' fill={acc} />
          </g>
        )
      case 6: { // 07 Data & Insights — hexagonal data grid
        const hex = (r: number) => `${cx},${cy - r} ${cx + r * 0.866},${cy - r / 2} ${cx + r * 0.866},${cy + r / 2} ${cx},${cy + r} ${cx - r * 0.866},${cy + r / 2} ${cx - r * 0.866},${cy - r / 2}`
        return (
          <g>
            <polygon points={hex(48)} stroke={ink} strokeWidth='1' fill='none' />
            <polygon points={hex(24)} stroke={acc} strokeWidth='1.2' fill='none' />
            {[0, 60, 120, 180, 240, 300].map((a, idx) => {
              const r = (a - 90) * Math.PI / 180
              return <circle key={idx} cx={cx + Math.cos(r) * 36} cy={cy + Math.sin(r) * 36} r='2.2' fill={acc} />
            })}
            {[30, 90, 150, 210, 270, 330].map((a, idx) => {
              const r = (a - 90) * Math.PI / 180
              return <line key={idx} x1={cx} y1={cy} x2={cx + Math.cos(r) * 24} y2={cy + Math.sin(r) * 24} stroke={ink} strokeWidth='0.5' strokeDasharray='1.5 1.5' />
            })}
            <circle cx={cx} cy={cy} r='3' fill={acc} />
          </g>
        )
      }
      default:
        return null
    }
  }

  const layerNameY = 452   // y of layer name (below disc)

  // Both connector lines 110px — frameworks + products equally close to discs
  // Top line: y=174 → y=284 (110px)
  // Bottom line: y=466 → y=576 (110px)
  // Order: name (orange) ABOVE desc (grey) on BOTH top and bottom callouts
  const tp = { name: 100, desc: 135, dot: 172 }
  const bp = { dot: 578,  name: 600, desc: 630 }

  // Soft-wrap helper — splits a string into up to 2 lines at a char limit
  const wrapDesc = (text: string, maxChars = 22): string[] => {
    if (text.length <= maxChars) return [text]
    const words = text.split(' ')
    let line1 = '', line2 = ''
    for (const w of words) {
      const next = (line1 ? line1 + ' ' : '') + w
      if (next.length <= maxChars && !line2) line1 = next
      else line2 = (line2 ? line2 + ' ' : '') + w
    }
    return line2 ? [line1, line2] : [line1]
  }

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      xmlns='http://www.w3.org/2000/svg'
      className='v22-stack-diagram'
      aria-label='DBiz Transformation Assembly — Exploded View'
    >
      <defs>
        <pattern id='v22-ex-dot' patternUnits='userSpaceOnUse' width='14' height='14'>
          <circle cx='1' cy='1' r='0.6' fill='var(--v22-ink-dot)' />
        </pattern>
        <pattern id='v22-disc-grid' patternUnits='userSpaceOnUse' width='14' height='14'>
          <path d='M 14 0 L 0 0 0 14' fill='none' stroke='rgba(255,255,255,0.14)' strokeWidth='0.6' />
        </pattern>
        <filter id='v22-halo-blur' x='-30%' y='-30%' width='160%' height='160%'>
          <feGaussianBlur stdDeviation='14' />
        </filter>
        <radialGradient id='v22-disc-halo'>
          <stop offset='0%' stopColor='var(--v22-accent)' stopOpacity='0.85' />
          <stop offset='35%' stopColor='var(--v22-accent)' stopOpacity='0.45' />
          <stop offset='70%' stopColor='var(--v22-accent)' stopOpacity='0.15' />
          <stop offset='100%' stopColor='var(--v22-accent)' stopOpacity='0' />
        </radialGradient>
      </defs>

      {/* Frame + dot background */}
      <rect x='8' y='8' width={svgW - 16} height={svgH - 16} fill='url(#v22-ex-dot)' />
      <g stroke='var(--v22-ink-corner)' strokeWidth='2'>
        <line x1='8' y1='8' x2='26' y2='8' /><line x1='8' y1='8' x2='8' y2='26' />
        <line x1={svgW - 8} y1='8' x2={svgW - 26} y2='8' /><line x1={svgW - 8} y1='8' x2={svgW - 8} y2='26' />
        <line x1='8' y1={svgH - 8} x2='26' y2={svgH - 8} /><line x1='8' y1={svgH - 8} x2='8' y2={svgH - 26} />
        <line x1={svgW - 8} y1={svgH - 8} x2={svgW - 26} y2={svgH - 8} /><line x1={svgW - 8} y1={svgH - 8} x2={svgW - 8} y2={svgH - 26} />
      </g>

      {/* Top strip — promise anchor (moved up from bottom) */}
      <text x='50' y='32' fontFamily='var(--font-mono)' fontSize='9' fill='var(--v22-ink-label-strong)' letterSpacing='2'>SCALE 1:1</text>
      <line x1={svgW / 2 - 260} y1={44} x2={svgW / 2 + 260} y2={44} stroke='var(--v22-ink-corner)' strokeWidth='0.8' />
      <line x1={svgW / 2 - 260} y1={40} x2={svgW / 2 - 260} y2={48} stroke='var(--v22-ink-corner)' strokeWidth='0.8' />
      <line x1={svgW / 2 + 260} y1={40} x2={svgW / 2 + 260} y2={48} stroke='var(--v22-ink-corner)' strokeWidth='0.8' />
      <text x={svgW / 2} y='32' fontFamily='var(--font-mono)' fontSize='10' fill='var(--v22-ink-dim)' textAnchor='middle' letterSpacing='3'>FULL STACK  ·  NO CAPABILITY GAPS  ·  NO VENDOR LOCK-IN</text>
      <text x={svgW - 50} y='32' fontFamily='var(--font-mono)' fontSize='9' fill='var(--v22-ink-label-strong)' textAnchor='end' letterSpacing='1'>SHEET A1</text>

      {/* Central shaft — the spine connecting all components */}
      <line x1='80' y1={shaftY} x2={svgW - 80} y2={shaftY} stroke='var(--v22-ink-corner)' strokeWidth='1' />
      <line x1='80' y1={shaftY} x2='80' y2={shaftY - 8} stroke='var(--v22-ink-corner)' strokeWidth='1' />
      <line x1='80' y1={shaftY} x2='80' y2={shaftY + 8} stroke='var(--v22-ink-corner)' strokeWidth='1' />
      <line x1={svgW - 80} y1={shaftY} x2={svgW - 80} y2={shaftY - 8} stroke='var(--v22-ink-corner)' strokeWidth='1' />
      <line x1={svgW - 80} y1={shaftY} x2={svgW - 80} y2={shaftY + 8} stroke='var(--v22-ink-corner)' strokeWidth='1' />


      {/* Components */}
      {layers.map((layer, i) => {
        const cx = discCenters[i]
        const rotateReverse = i % 2 === 1   // alternating spin direction
        return (
          <g key={layer.n} className='v22-stack-layer' style={{ '--layer-index': i } as React.CSSProperties}>
            {/* Traveling halo — staggered via CSS delay, sweeps across all discs */}
            <rect x={cx - discR - 14} y={shaftY - discR - 14} width={(discR + 14) * 2} height={(discR + 14) * 2} fill='var(--v22-accent)' fillOpacity='0.35' filter='url(#v22-halo-blur)' className='v22-disc-halo' style={{ animationDelay: `${i * 1.4}s` } as React.CSSProperties} />

            {/* Outer housing — dashed square (grey) */}
            <rect x={cx - discR} y={shaftY - discR} width={discR * 2} height={discR * 2} stroke='rgba(255,255,255,0.22)' strokeWidth='0.8' strokeDasharray='4 3' fill='var(--v22-paper)' fillOpacity='0.85' />
            {/* Second housing — inset square */}
            <rect x={cx - discR + 6} y={shaftY - discR + 6} width={(discR - 6) * 2} height={(discR - 6) * 2} stroke='rgba(255,255,255,0.16)' strokeWidth='0.6' fill='none' />
            {/* Inner groove — thin dashed square */}
            <rect x={cx - discR + 14} y={shaftY - discR + 14} width={(discR - 14) * 2} height={(discR - 14) * 2} stroke='rgba(255,255,255,0.12)' strokeWidth='0.4' strokeDasharray='1.5 2' fill='none' />
            {/* Subtle graph-paper grid inside the housing */}
            <rect x={cx - discR + 15} y={shaftY - discR + 15} width={(discR - 15) * 2} height={(discR - 15) * 2} fill='url(#v22-disc-grid)' />

            {/* Inner geometry — rotates slowly (alternating direction) */}
            <g>
              <animateTransform
                attributeName='transform'
                type='rotate'
                from={`${rotateReverse ? 360 : 0} ${cx} ${shaftY}`}
                to={`${rotateReverse ? 0 : 360} ${cx} ${shaftY}`}
                dur='45s'
                repeatCount='indefinite'
              />
              {renderShape(i, cx, shaftY)}
            </g>

            {/* Shaft marker — orange dot where disc meets shaft (always on top, doesn't rotate) */}
            <circle cx={cx} cy={shaftY} r='2.5' fill='var(--v22-accent)' />

            {/* Layer number tag — just above disc */}
            <text x={cx - 14} y={shaftY - discR - 16} fontFamily='var(--font-mono)' fontSize='10' fontWeight='500' fill='rgba(255,255,255,0.5)' textAnchor='end' letterSpacing='2'>L{layer.n}</text>

            {/* Layer name — just below disc */}
            <text x={cx} y={layerNameY} fontFamily='var(--font-mono)' fontSize='10' fontWeight='500' fill='#ffffff' textAnchor='middle' letterSpacing='2.5'>{layer.label}</text>

            {/* Top callout — name (orange, emphasised) ABOVE, desc (grey) BELOW */}
            <line x1={cx} y1={tp.dot + 2} x2={cx} y2={shaftY - discR - 8} stroke='rgba(255,255,255,0.18)' strokeWidth='0.7' strokeDasharray='3 2' className='v22-stack-connector' />
            <circle cx={cx} cy={tp.dot} r='2.8' fill='var(--v22-accent)' className='v22-stack-dot' />
            {wrapDesc(layer.top.name.toUpperCase(), 15).map((line, li) => (
              <text key={li} x={cx} y={tp.name + li * 13} fontFamily='var(--font-mono)' fontSize='11' fontWeight='500' letterSpacing='2' fill='var(--v22-accent)' textAnchor='middle'>{line}</text>
            ))}
            {wrapDesc(layer.top.desc).map((line, li) => (
              <text key={li} x={cx} y={tp.desc + li * 11} fontFamily='var(--font-sans)' fontSize='9' fill='rgba(255,255,255,0.62)' textAnchor='middle'>{line}</text>
            ))}

            {/* Bottom callout — name (orange, emphasised) ABOVE, desc (grey) BELOW */}
            <line x1={cx} y1={layerNameY + 14} x2={cx} y2={bp.dot - 2} stroke='rgba(255,255,255,0.18)' strokeWidth='0.7' strokeDasharray='3 2' className='v22-stack-connector' />
            <circle cx={cx} cy={bp.dot} r='2.8' fill='var(--v22-accent)' className='v22-stack-dot' />
            {wrapDesc(layer.bottom.name.toUpperCase(), 15).map((line, li) => (
              <text key={li} x={cx} y={bp.name + li * 13} fontFamily='var(--font-mono)' fontSize='11' fontWeight='500' letterSpacing='2' fill='var(--v22-accent)' textAnchor='middle'>{line}</text>
            ))}
            {wrapDesc(layer.bottom.desc).map((line, li) => (
              <text key={li} x={cx} y={bp.desc + li * 11} fontFamily='var(--font-sans)' fontSize='9' fill='rgba(255,255,255,0.62)' textAnchor='middle'>{line}</text>
            ))}
          </g>
        )
      })}


      {/* Bottom strip — drawing metadata (moved down from top) */}
      <text x={svgW / 2} y={svgH - 26} fontFamily='var(--font-mono)' fontSize='9' fill='var(--v22-ink-label-strong)' textAnchor='middle' letterSpacing='2'>DWG-STACK-01  ·  EXPLODED ASSEMBLY</text>
    </svg>
  )
}


export default function CapabilitiesSection() {
  const [active, setActive] = useState(0)
  const [locked, setLocked] = useState(false)
  const [showStack, setShowStack] = useState(false)
  const c = capabilities[active]

  // Auto-cycle through capabilities; hover/click/modal-open locks
  useEffect(() => {
    if (locked || showStack) return
    const id = setTimeout(() => setActive((i) => (i + 1) % capabilities.length), CYCLE_MS)
    return () => clearTimeout(id)
  }, [active, locked, showStack])

  const select = (i: number) => {
    setLocked(true)
    setActive(i)
  }

  // ESC closes the stack modal
  useEffect(() => {
    if (!showStack) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowStack(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showStack])

  // Stack geometry (Option A — grid-aligned 40px, centred front face)
  const svgW = 560
  const svgH = 640
  const baseX = 120
  const boxW = 320
  const boxH = 46
  const rowGap = 66
  const skew = 20
  const firstY = 40
  const stackTop = firstY - 16
  const stackBot = firstY + (capabilities.length - 1) * rowGap + boxH + 16

  // Scattered textured layers (grey, subtle)
  const texturedLayers = new Set([0, 3, 5])
  const patternForLayer = (i: number) => (texturedLayers.has(i) ? `url(#v22-cs-tex-${i})` : 'transparent')

  return (
    <section className='v22-section' id='solutions'>
      <div className='v22-container'>
        <div className='v22-section-head v22-cs-head'>
          <div className='num'>N°03 / What we do</div>
          <h2>Seven capabilities. <span style={{ color: 'var(--v22-accent)' }}>Re&#8209;architected,</span> not retrofitted.</h2>
          <p className='lead'>Every enterprise transformation stalls at the seams between strategy, data, and delivery. We work across every layer, not within silos.</p>
        </div>

        <div className='v22-cs-grid'>
          <div className='v22-cs-stack-wrap'>
            <svg viewBox={`0 0 ${svgW} ${svgH}`} xmlns='http://www.w3.org/2000/svg' className='v22-cs-stack' aria-label='Capabilities stack'>
              <defs>
                <pattern id='v22-cs-grid-pat' patternUnits='userSpaceOnUse' width='40' height='40'>
                  <path d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(240,123,47,0.08)' strokeWidth='0.5' />
                </pattern>
                <pattern id='v22-cs-dot-pat' patternUnits='userSpaceOnUse' width='10' height='10'>
                  <circle cx='1' cy='1' r='0.6' fill='rgba(240,123,47,0.18)' />
                </pattern>
                <pattern id='v22-cs-tex-0' patternUnits='userSpaceOnUse' width='6' height='6' patternTransform='rotate(45)'>
                  <line x1='0' y1='0' x2='0' y2='6' stroke='rgba(255,255,255,0.22)' strokeWidth='0.8' />
                </pattern>
                <pattern id='v22-cs-tex-3' patternUnits='userSpaceOnUse' width='16' height='16'>
                  <path d='M 0 0 L 16 16 M 16 0 L 0 16' stroke='rgba(255,255,255,0.1)' strokeWidth='0.5' />
                </pattern>
                <pattern id='v22-cs-tex-5' patternUnits='userSpaceOnUse' width='18' height='14'>
                  <circle cx='1' cy='1' r='0.7' fill='rgba(255,255,255,0.18)' />
                </pattern>
                <filter id='v22-cs-particle-glow' x='-50%' y='-50%' width='200%' height='200%'>
                  <feGaussianBlur stdDeviation='1.6' result='blur' />
                  <feMerge><feMergeNode in='blur' /><feMergeNode in='SourceGraphic' /></feMerge>
                </filter>
              </defs>

              <rect x='0' y='0' width={svgW} height={svgH} fill='url(#v22-cs-grid-pat)' />
              <rect x='0' y='0' width={svgW} height={svgH} fill='url(#v22-cs-dot-pat)' />

              {/* Corner crop marks */}
              <g stroke='rgba(255,255,255,0.35)' strokeWidth='0.8'>
                <line x1='8' y1='8' x2='28' y2='8' /><line x1='8' y1='8' x2='8' y2='28' />
                <line x1={svgW - 28} y1='8' x2={svgW - 8} y2='8' /><line x1={svgW - 8} y1='8' x2={svgW - 8} y2='28' />
                <line x1='8' y1={svgH - 8} x2='28' y2={svgH - 8} /><line x1='8' y1={svgH - 8} x2='8' y2={svgH - 28} />
                <line x1={svgW - 28} y1={svgH - 8} x2={svgW - 8} y2={svgH - 8} /><line x1={svgW - 8} y1={svgH - 8} x2={svgW - 8} y2={svgH - 28} />
              </g>

              {/* Left-edge tick marks */}
              <g stroke='rgba(255,255,255,0.15)' strokeWidth='0.5'>
                {Array.from({ length: 15 }).map((_, i) => (
                  <line key={i} x1='62' y1={40 + i * 40} x2={i % 2 === 0 ? 72 : 68} y2={40 + i * 40} />
                ))}
              </g>

              {/* FRONTIER ORGANISATION vertical label */}
              <g>
                <line x1='56' y1={stackTop} x2='56' y2={stackBot} stroke='rgba(240,123,47,0.45)' strokeWidth='1' />
                <line x1='50' y1={stackTop} x2='62' y2={stackTop} stroke='rgba(240,123,47,0.45)' strokeWidth='1' />
                <line x1='50' y1={stackBot} x2='62' y2={stackBot} stroke='rgba(240,123,47,0.45)' strokeWidth='1' />
                <text
                  x='40'
                  y={(stackTop + stackBot) / 2}
                  fontFamily='var(--font-mono)'
                  fontSize='11'
                  fontWeight='700'
                  letterSpacing='3'
                  fill='var(--v22-accent)'
                  textAnchor='middle'
                  transform={`rotate(-90 40 ${(stackTop + stackBot) / 2})`}
                >
                  FRONTIER ORGANISATION
                </text>
              </g>

              {/* Particles — organic flow, 3/1/2/3/1/2 across 6 gaps */}
              {(() => {
                const gapCounts = [3, 1, 2, 3, 1, 2]
                const xPools = [
                  [baseX + 80, baseX + 160, baseX + 250],
                  [baseX + 180],
                  [baseX + 100, baseX + 230],
                  [baseX + 60, baseX + 150, baseX + 260],
                  [baseX + 200],
                  [baseX + 110, baseX + 220],
                ]
                return capabilities.slice(0, -1).map((_, i) => {
                  const fromY = firstY + i * rowGap + boxH
                  const toY = firstY + (i + 1) * rowGap
                  const count = gapCounts[i]
                  const xs = xPools[i].slice(0, count)
                  const gapDelay = i * 0.55
                  return (
                    <g key={`flow-${i}`}>
                      {xs.map((x, pIdx) => (
                        <circle
                          key={pIdx}
                          cx={x}
                          cy={fromY}
                          r={2.2 + (pIdx % 2) * 0.4}
                          fill='var(--v22-accent)'
                          className='v22-cs-flow-particle'
                          filter='url(#v22-cs-particle-glow)'
                          style={{
                            '--cs-flow-distance': `${toY - fromY}px`,
                            '--cs-flow-delay': `${gapDelay + pIdx * 0.42}s`,
                          } as React.CSSProperties}
                        />
                      ))}
                    </g>
                  )
                })
              })()}

              {/* Layers */}
              {capabilities.map((cap, i) => {
                const y = firstY + i * rowGap
                const isActive = i === active
                const stroke = isActive ? 'var(--v22-accent)' : 'rgba(255,255,255,0.32)'
                const sw = isActive ? 1.6 : 1
                const x = baseX
                return (
                  <g
                    key={cap.num}
                    className={`v22-cs-layer ${isActive ? 'is-active' : ''}`}
                    onClick={() => select(i)}
                    onMouseEnter={() => select(i)}
                    role='button'
                    aria-label={`Select ${cap.kicker}`}
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && select(i)}
                  >
                    <polygon points={`${x},${y} ${x + boxW},${y} ${x + boxW + skew},${y - 14} ${x + skew},${y - 14}`} fill='transparent' stroke={stroke} strokeWidth={sw} />
                    <rect x={x} y={y} width={boxW} height={boxH} fill={isActive ? 'rgba(240,123,47,0.1)' : 'transparent'} stroke='none' />
                    <rect x={x} y={y} width={boxW} height={boxH} fill={patternForLayer(i)} stroke={stroke} strokeWidth={sw} opacity={isActive ? 1 : 0.85} />
                    <polygon points={`${x + boxW},${y} ${x + boxW + skew},${y - 14} ${x + boxW + skew},${y + boxH - 14} ${x + boxW},${y + boxH}`} fill='transparent' stroke={stroke} strokeWidth={sw} />
                    <text x={x - 12} y={y + boxH / 2 + 4} fontFamily='var(--font-mono)' fontSize='11' fontWeight='500' letterSpacing='1' fill={isActive ? 'var(--v22-accent)' : 'rgba(255,255,255,0.55)'} textAnchor='end'>L{cap.num}</text>
                    {/* Eyebrow — familiar service name */}
                    <text x={x + 18} y={y + boxH / 2 - 6} fontFamily='var(--font-mono)' fontSize='8' fontWeight='500' letterSpacing='1.6' fill={isActive ? 'var(--v22-accent)' : 'rgba(255,255,255,0.5)'}>
                      {cap.altLabel.toUpperCase()}
                    </text>
                    {/* Main kicker — architectural name */}
                    <text x={x + 18} y={y + boxH / 2 + 12} fontFamily='var(--font-mono)' fontSize='12' fontWeight='600' letterSpacing='1.6' fill={isActive ? 'var(--v22-accent)' : 'rgba(255,255,255,0.92)'}>
                      {cap.kicker.toUpperCase()}
                    </text>
                  </g>
                )
              })}

              {/* Bottom dimension marker */}
              <g stroke='rgba(255,255,255,0.22)' strokeWidth='0.6'>
                <line x1={baseX} y1={stackBot + 6} x2={baseX + boxW} y2={stackBot + 6} />
                <line x1={baseX} y1={stackBot + 2} x2={baseX} y2={stackBot + 10} />
                <line x1={baseX + boxW} y1={stackBot + 2} x2={baseX + boxW} y2={stackBot + 10} />
              </g>
              <text x={baseX + boxW / 2} y={stackBot + 20} fontFamily='var(--font-mono)' fontSize='8' fill='rgba(255,255,255,0.55)' textAnchor='middle' letterSpacing='1.5'>7 × LAYER · ONE ENTERPRISE</text>
            </svg>
          </div>

          <div className='v22-cs-detail' key={active}>
            <div className='v22-cs-detail-kicker'>L{c.num} · {c.kicker.toUpperCase()}</div>
            <h3 className='v22-cs-detail-title'>{c.title}</h3>
            <p className='v22-cs-detail-sub'>{c.subtitle}</p>
            <p className='v22-cs-detail-body'>{c.body}</p>
            <div className='v22-cs-detail-tags'>
              {c.tags.slice(0, 4).map((t) => (
                <span key={t} className='v22-cs-tag'>{t}</span>
              ))}
            </div>
            <a href='#' className='v22-cs-detail-cta'>{c.cta} <span>→</span></a>
            {locked && (
              <button className='v22-cs-resume' onClick={() => setLocked(false)}>
                Resume auto-cycle →
              </button>
            )}
          </div>
        </div>

        {/* Bookend CTA — the full-stack reveal sits as the section's closing action */}
        <div className='v22-cs-bookend'>
          <div className='v22-cs-bookend-meta'>
            <span className='v22-cs-bookend-num'>DWG · STACK-01</span>
            <span className='v22-cs-bookend-sep' aria-hidden='true' />
            <span className='v22-cs-bookend-text'>
              Every capability above maps to a layer of the stack.
            </span>
          </div>
          <button
            className='v22-cs-stack-cta'
            onClick={() => setShowStack(true)}
            aria-haspopup='dialog'
          >
            <span className='v22-cs-stack-cta-icon' aria-hidden='true'>
              <svg viewBox='0 0 24 16' fill='none'>
                <polygon points='2,6 16,6 22,2 8,2' stroke='currentColor' strokeWidth='1.2' />
                <rect x='2' y='6' width='14' height='8' stroke='currentColor' strokeWidth='1.2' fill='none' />
                <polygon points='16,6 22,2 22,10 16,14' stroke='currentColor' strokeWidth='1.2' fill='none' />
              </svg>
            </span>
            See our AI Transformation Stack
            <span className='v22-cs-stack-cta-arrow' aria-hidden='true'>→</span>
          </button>
        </div>
      </div>

      {/* Full-stack lightbox modal */}
      {showStack && (
        <div className='v22-stack-modal' role='dialog' aria-modal='true' aria-label='AI Transformation Stack'>
          <div className='v22-stack-modal-backdrop' onClick={() => setShowStack(false)} />
          <div className='v22-stack-modal-inner'>
            <div className='v22-stack-modal-head'>
              <div className='v22-stack-modal-kicker'>N°03 · AI TRANSFORMATION STACK</div>
              <button className='v22-stack-modal-close' onClick={() => setShowStack(false)} aria-label='Close'>
                <span aria-hidden='true'>×</span>
              </button>
            </div>
            <div className='v22-stack-modal-body'>
              <StackDiagram />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
