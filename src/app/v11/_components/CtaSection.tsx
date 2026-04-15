import { Icon } from '@/components/icon'

export const CtaSection = () => (
  <section id='cta' className='bp-section' style={{ paddingTop: 'clamp(96px, 12vw, 160px)', paddingBottom: 'clamp(96px, 12vw, 160px)' }}>
    <div className='bp-container'>
      <div className='bp-section-head' style={{ textAlign: 'center', margin: '0 auto 48px', maxWidth: 720 }}>
        <div className='bp-kicker' style={{ justifyContent: 'center' }}>
          N·10 · Contact
        </div>
        <h2>
          Start with a <em>working week.</em>
        </h2>
        <p className='lead' style={{ margin: '0 auto' }}>
          5 days to validate. 15 days to MVP. 50 days to production.
        </p>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <a href='mailto:hello@dbiz.ai' className='bp-btn'>
          Talk to a lead <Icon icon='ph:arrow-right-bold' width={14} />
        </a>
        <a href='#framework' className='bp-btn-ghost'>
          Read the brief <Icon icon='ph:arrow-up-right-bold' width={12} />
        </a>
      </div>
    </div>
  </section>
)
