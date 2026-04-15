const logos = [
  'Vanguard',
  'Atlas',
  'Meridian',
  'Cascade',
  'Bluefield',
  'Northwind',
  'Halogen',
  'Stratum',
  'Borealis',
  'Ember',
] as const

export const TrustBar = () => (
  <section className='bp-section' style={{ paddingTop: 48, paddingBottom: 48 }}>
    <div className='bp-container'>
      <div className='flex items-center justify-between mb-6 flex-wrap gap-4'>
        <span className='bp-mono-accent'>N·02 · TRUSTED BY</span>
        <span className='bp-mono'>50+ Enterprises · 6 Countries</span>
      </div>

      <div
        className='relative overflow-hidden'
        style={{
          maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div
          className='flex gap-16 whitespace-nowrap'
          style={{
            animation: 'v11-marquee 40s linear infinite',
            width: 'max-content',
          }}
        >
          {[...logos, ...logos].map((name, i) => (
            <span
              key={i}
              className='bp-mono'
              style={{ color: 'var(--bp-ink-3)', fontSize: '0.9rem', letterSpacing: '0.2em' }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
)
