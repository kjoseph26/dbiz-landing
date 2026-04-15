import {
  ExpertiseIllo,
  ScaleIllo,
  TimeboxIllo,
  ProductionIllo,
} from './DuotoneIllustration'

const reasons = [
  {
    coord: 'W·01',
    title: 'Expertise that works together',
    body: 'Strategy, data, engineering, and operations under one roof, with one delivery cadence. The studio that specs a system is the team that ships it.',
    Illo: ExpertiseIllo,
  },
  {
    coord: 'W·02',
    title: 'Transformation at scale',
    body: '50+ enterprise clients. 150+ solutions in production. Six countries. We have built the muscle to industrialise AI across thousands of workflows.',
    Illo: ScaleIllo,
  },
  {
    coord: 'W·03',
    title: 'Time-boxed delivery. Every engagement.',
    body: '5 days to validate, 15 days to MVP, 50 days to production. Milestones are promises. Paperwork is not the product.',
    Illo: TimeboxIllo,
  },
  {
    coord: 'W·04',
    title: 'Production platforms. Not presentations.',
    body: 'We deliver platforms your team operates, not decks to read. Handover is a feature; perpetual engineering is the practice that keeps them sharp.',
    Illo: ProductionIllo,
  },
] as const

export const WhyDbiz = () => (
  <section data-surface='beige' className='bp-section'>
    <div className='bp-container'>
      <div className='bp-section-head'>
        <div className='bp-kicker'>N·09 · Why enterprises choose dBiz.</div>
        <h2>
          Why enterprises choose dBiz.{' '}
          <em>Four reasons — all evidenced by delivery, not brochures.</em>
        </h2>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        {reasons.map(({ coord, title, body, Illo }) => (
          <div key={coord} className='bp-card bp-frame-cell' style={{ maxWidth: 'none' }}>
            <span className='cell-bg' />
            <span className='cell-outline' />
            <div className='hd'>
              <span>Reason</span>
              <span className='k'>{coord}</span>
            </div>
            <div
              style={{
                height: 160,
                marginBottom: 20,
                border: '1px dashed var(--bp-hair)',
                padding: 16,
              }}
            >
              <Illo />
            </div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)
