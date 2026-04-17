const allLogos: string[] = [
  'ASCEND',
  'VERTEX',
  'NORTHLINE',
  'MERIDIAN',
  'HELIX',
  'KRONOS',
  'ORBIT.AI',
  'PRISM SYSTEMS',
  'ATLAS',
  'FJORD LABS',
  'CIPHER',
  'SOLARIS',
  'TESSERA',
  'ARCANUM',
  'NIMBUS',
  'HEDRON',
  'SENTIR GROUP',
  'LUMEN CO.',
]

export function LogoWall() {
  const doubled = [...allLogos, ...allLogos]

  return (
    <section className='v18-logos-wrap'>
      <div className='v18-container'>
        <div className='v18-logos-head'>
          <span className='v18-logos-kicker'>N°01·B / Client register</span>
        </div>
      </div>
      <div className='v18-logos-marquee'>
        <div className='v18-logos-track'>
          {doubled.map((name, i) => (
            <span className='v18-logo-item' key={`${name}-${i}`}>
              <span className='v18-logo-name'>{name}</span>
              <span className='v18-logo-sep' aria-hidden='true' />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
