import type { CSSProperties } from 'react'

const layers = [
  { label: 'STRATEGY', code: 'S·01' },
  { label: 'ARCHITECTURE', code: 'S·02' },
  { label: 'CLOUD', code: 'S·03' },
  { label: 'DATA', code: 'S·04' },
  { label: 'APPS', code: 'S·05' },
  { label: 'AGENTS', code: 'S·06' },
  { label: 'OPS', code: 'S·07' },
]

export function HeroDiagram() {
  return (
    <svg
      viewBox='0 0 520 560'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      className='v9-hero-svg'
      role='img'
    >
      <defs>
        <pattern id='v9-hatch' patternUnits='userSpaceOnUse' width='6' height='6' patternTransform='rotate(45)'>
          <line x1='0' y1='0' x2='0' y2='6' stroke='rgba(232,106,42,0.35)' strokeWidth='1' />
        </pattern>
        <pattern id='v9-dot' patternUnits='userSpaceOnUse' width='10' height='10'>
          <circle cx='1' cy='1' r='0.8' fill='rgba(255,255,255,0.22)' />
        </pattern>
        <filter id='v9-glow'>
          <feGaussianBlur stdDeviation='2' result='coloredBlur' />
          <feMerge>
            <feMergeNode in='coloredBlur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      {/* corner ticks */}
      <g stroke='rgba(255,255,255,0.25)' strokeWidth='0.6'>
        <line x1='20' y1='20' x2='40' y2='20' />
        <line x1='20' y1='20' x2='20' y2='40' />
        <line x1='500' y1='20' x2='480' y2='20' />
        <line x1='500' y1='20' x2='500' y2='40' />
        <line x1='20' y1='540' x2='40' y2='540' />
        <line x1='20' y1='540' x2='20' y2='520' />
        <line x1='500' y1='540' x2='480' y2='540' />
        <line x1='500' y1='540' x2='500' y2='520' />
      </g>

      {/* left ruler */}
      <g stroke='rgba(255,255,255,0.25)' strokeWidth='0.6'>
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={i} x1='40' y1={60 + i * 32} x2={i % 2 === 0 ? 48 : 44} y2={60 + i * 32} />
        ))}
      </g>

      <rect x='60' y='60' width='400' height='440' fill='url(#v9-dot)' opacity='0.4' />

      {layers.map((layer, i) => {
        const y = 90 + i * 56
        const skew = 26
        return (
          <g key={layer.code} className='v9-layer' style={{ '--layer-index': i } as CSSProperties}>
            <polygon
              points={`${140},${y} ${360},${y} ${360 + skew},${y - 14} ${140 + skew},${y - 14}`}
              fill='none'
              stroke='rgba(232,106,42,0.6)'
              strokeWidth='1'
            />
            <rect
              x='140'
              y={y}
              width='220'
              height='32'
              fill={i === 3 ? 'url(#v9-hatch)' : 'rgba(232,106,42,0.04)'}
              stroke='rgba(232,106,42,0.7)'
              strokeWidth='1'
            />
            <polygon
              points={`${360},${y} ${360 + skew},${y - 14} ${360 + skew},${y + 18} ${360},${y + 32}`}
              fill='rgba(255,255,255,0.02)'
              stroke='rgba(232,106,42,0.6)'
              strokeWidth='1'
            />
            <text
              x='156'
              y={y + 20}
              fontFamily='var(--font-sans)'
              fontSize='10'
              fontWeight='700'
              letterSpacing='1.5'
              fill='#ffffff'
            >
              {layer.label}
            </text>
            <line
              x1={360 + skew}
              y1={y + 8}
              x2='450'
              y2={y + 8}
              stroke='rgba(232,106,42,0.65)'
              strokeWidth='0.8'
              strokeDasharray='2 2'
            />
            <circle cx={360 + skew} cy={y + 8} r='1.6' fill='#e86a2a' />
            <text
              x='454'
              y={y + 11}
              fontFamily='var(--font-sans)'
              fontSize='8.5'
              letterSpacing='1'
              fill='#e86a2a'
            >
              {layer.code}
            </text>
            {i < layers.length - 1 && (
              <>
                <circle
                  cx='250'
                  cy={y + 38}
                  r='2.5'
                  fill='#e86a2a'
                  className='v9-blob'
                  style={{ '--blob-delay': `${i * 0.8}s` } as CSSProperties}
                  filter='url(#v9-glow)'
                />
                <circle
                  cx='200'
                  cy={y + 42}
                  r='1.8'
                  fill='rgba(232,106,42,0.6)'
                  className='v9-blob'
                  style={{ '--blob-delay': `${i * 0.8 + 0.4}s` } as CSSProperties}
                />
              </>
            )}
          </g>
        )
      })}

      {/* vertical dimension spine */}
      <g stroke='rgba(232,106,42,0.55)' strokeWidth='0.8'>
        <line x1='96' y1='76' x2='96' y2='484' />
        <line x1='92' y1='76' x2='100' y2='76' />
        <line x1='92' y1='484' x2='100' y2='484' />
      </g>
      <text
        x='80'
        y='284'
        fontFamily='var(--font-sans)'
        fontSize='8.5'
        letterSpacing='1.5'
        fill='#e86a2a'
        transform='rotate(-90 80 284)'
      >
        FRONTIER ORG · STACK
      </text>

      <g stroke='rgba(255,255,255,0.3)' strokeWidth='0.6'>
        <line x1='140' y1='520' x2='360' y2='520' />
        <line x1='140' y1='516' x2='140' y2='524' />
        <line x1='360' y1='516' x2='360' y2='524' />
      </g>
      <text
        x='250'
        y='534'
        fontFamily='var(--font-sans)'
        fontSize='8'
        letterSpacing='1.5'
        fill='rgba(255,255,255,0.5)'
        textAnchor='middle'
      >
        DIM: 7 × LAYER
      </text>
    </svg>
  )
}
