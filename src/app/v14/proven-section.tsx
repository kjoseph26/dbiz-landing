'use client'

import { useState, useRef, useEffect } from 'react'

type CaseStudy = {
  metric: string
  title: string
  kicker: string
  body: string
  image: string /* gradient placeholder */
  tag: 'industry' | 'solution'
}

const cases: CaseStudy[] = [
  {
    metric: '38% faster',
    title: 'Credit decisioning in hours, not weeks',
    kicker: 'Financial Services',
    body: 'Agent-driven risk models cut the underwriting cycle time for a tier-1 lender across retail, SME, and corporate books.',
    image: 'linear-gradient(135deg, #0D1B3E 0%, #1A2D5A 40%, #E86A2A 100%)',
    tag: 'industry',
  },
  {
    metric: '$14M saved',
    title: 'Dispatch, rewritten nightly',
    kicker: 'Logistics & Fleet',
    body: 'A national fleet operator replaced static route planning with agentic scheduling across 12,000 vehicles.',
    image: 'linear-gradient(135deg, #1A2D5A 0%, #0D1B3E 50%, #D45A1A 100%)',
    tag: 'industry',
  },
  {
    metric: '6× throughput',
    title: 'Clinical documentation, automated',
    kicker: 'Aged Care',
    body: 'Care teams reclaimed hours per shift with voice-to-record agents compliant with regional reporting standards.',
    image: 'linear-gradient(135deg, #070F22 0%, #1A2D5A 60%, #E86A2A 100%)',
    tag: 'industry',
  },
  {
    metric: '11 domains',
    title: 'Industry-ready data cloud',
    kicker: 'FactWeavers™',
    body: 'Pre-modelled data products shipped without a six-month clean-up phase.',
    image: 'linear-gradient(160deg, #0D1B3E 0%, #E86A2A 30%, #1A2D5A 100%)',
    tag: 'solution',
  },
  {
    metric: '40+ agents',
    title: 'Multi-agent orchestration at scale',
    kicker: 'Agent Studio',
    body: 'Cross-system agents running order-to-cash for a Fortune 500 manufacturer.',
    image: 'linear-gradient(160deg, #1A2D5A 0%, #D45A1A 40%, #070F22 100%)',
    tag: 'solution',
  },
  {
    metric: '5 days',
    title: 'Concept to working build',
    kicker: 'DBiz Canvas',
    body: 'Product teams move from brief to production code inside a single sprint.',
    image: 'linear-gradient(160deg, #070F22 0%, #E86A2A 50%, #0D1B3E 100%)',
    tag: 'solution',
  },
]

type Filter = 'all' | 'industry' | 'solution'

export default function ProvenSection() {
  const [filter, setFilter] = useState<Filter>('all')
  const [activeIdx, setActiveIdx] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const filtered = filter === 'all' ? cases : cases.filter((c) => c.tag === filter)

  /* Reset index when filter changes */
  useEffect(() => { setActiveIdx(0) }, [filter])

  /* Scroll to active card */
  useEffect(() => {
    if (!trackRef.current) return
    const card = trackRef.current.children[activeIdx] as HTMLElement
    if (!card) return
    trackRef.current.scrollTo({ left: card.offsetLeft - 40, behavior: 'smooth' })
  }, [activeIdx])

  /* Auto-advance every 4s */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((i) => (i + 1) % filtered.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [filtered.length])

  const prev = () => setActiveIdx((i) => (i - 1 + filtered.length) % filtered.length)
  const next = () => setActiveIdx((i) => (i + 1) % filtered.length)

  return (
    <section className='v14-section v14-proven' id='work'>
      <div className='v14-container'>
        {/* Header row */}
        <div className='v14-proven-header'>
          <div className='v14-proven-header-left'>
            <div className='num'>N°05 / Proven</div>
            <h2>Proven where it <em>matters.</em></h2>
          </div>
          <div className='v14-proven-header-right'>
            <p className='lead'>50+ enterprise deployments across 11 industries. Real outcomes, not slide decks.</p>
            <div className='v14-proven-filters'>
              {(['all', 'industry', 'solution'] as Filter[]).map((f) => (
                <button
                  key={f}
                  className={`v14-proven-filter ${filter === f ? 'active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f === 'all' ? 'All' : f === 'industry' ? 'By Industry' : 'By Solution'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className='v14-proven-carousel'>
          <div className='v14-proven-track' ref={trackRef}>
            {filtered.map((c, i) => (
              <div
                key={c.title}
                className={`v14-proven-card ${i === activeIdx ? 'active' : ''}`}
                onClick={() => setActiveIdx(i)}
              >
                {/* Image area */}
                <div className='v14-proven-img' style={{ background: c.image }}>
                  <div className='v14-proven-img-overlay'>
                    <span className='v14-proven-metric'>{c.metric}</span>
                  </div>
                  {/* Blueprint grid dots on image */}
                  <div className='v14-proven-img-dots' />
                </div>
                {/* Content */}
                <div className='v14-proven-content'>
                  <span className='v14-proven-kicker'>{c.kicker}</span>
                  <h4>{c.title}</h4>
                  <p>{c.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className='v14-proven-nav'>
            <button className='v14-proven-arrow' onClick={prev} aria-label='Previous'>←</button>
            <div className='v14-proven-dots'>
              {filtered.map((_, i) => (
                <span key={i} className={`v14-proven-dot ${i === activeIdx ? 'active' : ''}`} onClick={() => setActiveIdx(i)} />
              ))}
            </div>
            <button className='v14-proven-arrow' onClick={next} aria-label='Next'>→</button>
          </div>
        </div>
      </div>
    </section>
  )
}
