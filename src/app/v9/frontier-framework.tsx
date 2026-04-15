const steps = [
  { num: '01', label: 'Strategy' },
  { num: '02', label: 'Architecture' },
  { num: '03', label: 'Cloud' },
  { num: '04', label: 'Development' },
  { num: '05', label: 'Productivity' },
  { num: '06', label: 'Orchestration' },
]

export function FrontierFramework() {
  const stepWidth = 150
  const stepGap = 20
  const startX = 40
  const rowY = 80
  const baseY = 220

  return (
    <svg
      viewBox='0 0 1080 340'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      className='v9-framework'
      role='img'
    >
      {/* Frame ticks */}
      <g stroke='rgba(255,255,255,0.35)' strokeWidth='0.8'>
        <line x1='20' y1='20' x2='40' y2='20' />
        <line x1='20' y1='20' x2='20' y2='40' />
        <line x1='1060' y1='20' x2='1040' y2='20' />
        <line x1='1060' y1='20' x2='1060' y2='40' />
        <line x1='20' y1='320' x2='40' y2='320' />
        <line x1='20' y1='320' x2='20' y2='300' />
        <line x1='1060' y1='320' x2='1040' y2='320' />
        <line x1='1060' y1='320' x2='1060' y2='300' />
      </g>

      <text
        x='540'
        y='36'
        fontFamily='var(--font-sans)'
        fontSize='10'
        fill='rgba(255,255,255,0.55)'
        textAnchor='middle'
        letterSpacing='2.4'
      >
        FRONTIER ORGANISATION · FRAMEWORK
      </text>

      {/* Process row */}
      {steps.map((s, i) => {
        const x = startX + i * (stepWidth + stepGap)
        const cx = x + stepWidth / 2
        return (
          <g key={s.num}>
            <rect
              x={x}
              y={rowY}
              width={stepWidth}
              height={80}
              fill='rgba(232,106,42,0.06)'
              stroke='var(--brand-orange)'
              strokeWidth='1.2'
              rx='2'
            />
            <text
              x={x + 12}
              y={rowY + 18}
              fontFamily='var(--font-sans)'
              fontSize='10'
              fill='var(--brand-orange)'
              letterSpacing='1.6'
            >
              {s.num}
            </text>
            <text
              x={cx}
              y={rowY + 52}
              fontFamily='var(--font-sans)'
              fontSize='15'
              fontWeight='700'
              fill='#ffffff'
              textAnchor='middle'
              letterSpacing='-0.3'
            >
              {s.label}
            </text>

            {/* Connector arrow to next step */}
            {i < steps.length - 1 && (
              <g stroke='var(--brand-orange)' strokeWidth='1.2' fill='none'>
                <line
                  x1={x + stepWidth}
                  y1={rowY + 40}
                  x2={x + stepWidth + stepGap}
                  y2={rowY + 40}
                  strokeDasharray='3 3'
                />
                <polyline
                  points={`${x + stepWidth + stepGap - 6},${rowY + 36} ${x + stepWidth + stepGap},${rowY + 40} ${x + stepWidth + stepGap - 6},${rowY + 44}`}
                />
              </g>
            )}

            {/* Drop line into data base */}
            <line
              x1={cx}
              y1={rowY + 80}
              x2={cx}
              y2={baseY}
              stroke='rgba(232,106,42,0.4)'
              strokeWidth='0.8'
              strokeDasharray='2 3'
            />
            <circle cx={cx} cy={baseY} r='2.5' fill='var(--brand-orange)' />
          </g>
        )
      })}

      {/* Data + Intelligence base band */}
      <rect
        x='40'
        y={baseY + 10}
        width='1000'
        height='72'
        fill='rgba(232,106,42,0.14)'
        stroke='var(--brand-orange)'
        strokeWidth='1.2'
        rx='2'
      />
      <text
        x='72'
        y={baseY + 36}
        fontFamily='var(--font-sans)'
        fontSize='10'
        fill='var(--brand-orange)'
        letterSpacing='1.6'
      >
        BASE LAYER
      </text>
      <text
        x='72'
        y={baseY + 66}
        fontFamily='var(--font-sans)'
        fontSize='18'
        fontWeight='700'
        fill='#ffffff'
        letterSpacing='-0.4'
      >
        Data &amp; Intelligence
      </text>
      <text
        x='1008'
        y={baseY + 56}
        fontFamily='var(--font-sans)'
        fontSize='10'
        fill='var(--brand-orange)'
        letterSpacing='1.6'
        textAnchor='end'
      >
        FACTWEAVERS · DBIZ COMPASS
      </text>
    </svg>
  )
}
