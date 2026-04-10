'use client'

import { useEffect, useRef, useState } from 'react'

type Capability = {
  num: string
  name: string
  title: React.ReactNode
  body: string
  tags: string[]
}

const capabilities: Capability[] = [
  {
    num: '01',
    name: 'Strategy & Architecture',
    title: (
      <>
        Business priorities become an <em>executable roadmap.</em>
      </>
    ),
    body: 'Readiness assessment, architecture blueprint, data governance and security posture — before a single line of code gets written. Investment alignment is the difference between experiment and execution.',
    tags: ['Futures Studio', 'TechOffice Foundry', 'AI readiness', 'Well-Architected'],
  },
  {
    num: '02',
    name: 'AI-Ready Infrastructure',
    title: (
      <>
        Cloud built <em>for agents,</em> not retrofitted for them.
      </>
    ),
    body: 'Environments purpose-built for agents, data pipelines, and frontier models — with the governance, cost controls, and observability enterprise IT actually requires.',
    tags: ['AWS Advanced', 'Azure Solutions', 'GCP', 'Fluid Compute'],
  },
  {
    num: '03',
    name: 'The Intelligence Layer',
    title: (
      <>
        Every AI initiative stalls on the same thing. <em>Data.</em>
      </>
    ),
    body: 'FactWeavers™ cleans, unifies, and activates enterprise data — pre-modelled for your industry, ready for agents from day one. No six-month data clean-up before value flows.',
    tags: ['Snowflake', 'Databricks', 'Fabric', 'BigQuery', 'FactWeavers™'],
  },
  {
    num: '04',
    name: 'Connected Systems',
    title: (
      <>
        Your platforms don&apos;t need replacing. They need <em>unlocking.</em>
      </>
    ),
    body: 'CRM, ERP, and platform investments get connected so agents can read, write, and act across your entire application landscape. No rip and replace.',
    tags: ['Salesforce', 'Dynamics 365', 'Boomi', 'MuleSoft', 'n8n'],
  },
  {
    num: '05',
    name: 'Product & Experience',
    title: (
      <>
        AI-native applications <em>people actually use.</em>
      </>
    ),
    body: 'Next-gen experiences designed for the new interaction patterns between humans and agents. Digital twins, perpetual engineering, and interfaces that evolve with the business.',
    tags: ['Agentforce', 'Copilot Studio', 'Claude Cowork'],
  },
  {
    num: '06',
    name: 'AI-First Operations',
    title: (
      <>
        The team that built it <em>runs it.</em>
      </>
    ),
    body: 'AI-first monitoring, governance, and continuous improvement across your stack. Not a support contract from a team that has never seen the architecture.',
    tags: ['AIOps', 'FinOps', 'SLA L1-L3', 'DevOps'],
  },
]

const statementWords = [
  'Most', 'enterprises', 'have', 'tried', 'AI.',
  'Most', 'of', 'it', "didn't", 'scale.',
  'Not', 'because', 'the', 'technology', 'failed —',
  'because', 'no', 'one', 'connected', 'the',
  'ambition', 'to', 'what', 'actually', 'got', 'built.',
]

export default function V2Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [activeCap, setActiveCap] = useState(0)

  // Canvas network animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let raf = 0
    const mouse = { x: -9999, y: -9999 }

    type Node = {
      x: number
      y: number
      vx: number
      vy: number
      r: number
      active: boolean
      pulse: number
    }
    let nodes: Node[] = []

    const init = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const density = Math.min(width, 1400) * height / 22000
      const count = Math.max(50, Math.min(110, Math.floor(density)))
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 0.8 + Math.random() * 1.6,
        active: i % 12 === 0,
        pulse: Math.random() * Math.PI * 2,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const connectDist = Math.min(180, Math.max(120, width / 10))

      // Lines
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < connectDist) {
            const t = 1 - dist / connectDist
            const bothActive = a.active && b.active
            ctx.strokeStyle = bothActive
              ? `rgba(232, 106, 42, ${t * 0.35})`
              : `rgba(255, 255, 255, ${t * 0.1})`
            ctx.lineWidth = bothActive ? 0.8 : 0.5
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Nodes
      for (const n of nodes) {
        // Motion
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
        n.x = Math.max(0, Math.min(width, n.x))
        n.y = Math.max(0, Math.min(height, n.y))
        n.pulse += 0.018

        // Mouse repulsion (subtle)
        const mdx = n.x - mouse.x
        const mdy = n.y - mouse.y
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
        if (mdist < 140) {
          const force = (1 - mdist / 140) * 0.4
          n.vx += (mdx / mdist) * force * 0.05
          n.vy += (mdy / mdist) * force * 0.05
        }
        // Drag
        n.vx *= 0.992
        n.vy *= 0.992
        // Minimum speed
        const speed = Math.sqrt(n.vx * n.vx + n.vy * n.vy)
        if (speed < 0.08) {
          n.vx += (Math.random() - 0.5) * 0.02
          n.vy += (Math.random() - 0.5) * 0.02
        }

        // Draw
        if (n.active) {
          const pulseSize = n.r * (1.4 + Math.sin(n.pulse) * 0.4)
          const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 14)
          glow.addColorStop(0, 'rgba(232, 106, 42, 0.6)')
          glow.addColorStop(1, 'rgba(232, 106, 42, 0)')
          ctx.fillStyle = glow
          ctx.beginPath()
          ctx.arc(n.x, n.y, 14, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillStyle = '#E86A2A'
          ctx.beginPath()
          ctx.arc(n.x, n.y, pulseSize, 0, Math.PI * 2)
          ctx.fill()
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${0.35 + Math.sin(n.pulse) * 0.12})`
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      raf = requestAnimationFrame(draw)
    }

    const onResize = () => {
      init()
    }
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onMouseLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    init()
    draw()
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  // Nav scroll, reveal, statement word reveal, capability tracking
  useEffect(() => {
    const nav = document.getElementById('v2-nav')
    const onScroll = () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('v')
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    )
    document.querySelectorAll('.v2-scope .v2-reveal').forEach((el) => revealObserver.observe(el))

    // Statement: progressive word reveal tied to scroll position
    const statementEl = document.querySelector<HTMLElement>('.v2-statement-text')
    const words = statementEl ? Array.from(statementEl.querySelectorAll<HTMLElement>('.reveal-word')) : []
    const onStatementScroll = () => {
      if (!statementEl || words.length === 0) return
      const rect = statementEl.getBoundingClientRect()
      const vh = window.innerHeight
      const start = vh * 0.8
      const end = vh * 0.2
      const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)))
      const cutoff = Math.floor(progress * words.length)
      words.forEach((w, i) => {
        w.classList.toggle('v', i < cutoff)
      })
    }
    window.addEventListener('scroll', onStatementScroll, { passive: true })
    onStatementScroll()

    // Capability tracking — highlight active as user scrolls
    const panels = Array.from(document.querySelectorAll<HTMLElement>('.v2-cap-panel'))
    const onCapScroll = () => {
      if (panels.length === 0) return
      const mid = window.innerHeight * 0.4
      let current = 0
      panels.forEach((p, i) => {
        const rect = p.getBoundingClientRect()
        if (rect.top <= mid) current = i
      })
      setActiveCap(current)
    }
    window.addEventListener('scroll', onCapScroll, { passive: true })
    onCapScroll()

    // Count-up for signal metrics
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const target = Number(el.dataset.target || '0')
          const suffix = el.dataset.suffix || ''
          const duration = 1600
          const start = performance.now()
          const step = (now: number) => {
            const t = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - t, 3)
            el.textContent = Math.round(target * eased) + suffix
            if (t < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
          countObserver.unobserve(el)
        })
      },
      { threshold: 0.5 }
    )
    document.querySelectorAll<HTMLElement>('.v2-signal-cell .value').forEach((el) => {
      countObserver.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', onStatementScroll)
      window.removeEventListener('scroll', onCapScroll)
      revealObserver.disconnect()
      countObserver.disconnect()
    }
  }, [])

  return (
    <>
      <nav id='v2-nav' className='v2-nav'>
        <div className='v2-logo'>
          DBiz<span>.ai</span>
        </div>
        <ul className='v2-nav-links'>
          <li><a href='#capabilities'>Capabilities</a></li>
          <li><a href='#signal'>Signal</a></li>
          <li><a href='#cadence'>Cadence</a></li>
          <li><a href='#cta'>Contact</a></li>
        </ul>
        <a href='#cta' className='v2-nav-cta'>Get assessment →</a>
      </nav>

      <section className='v2-hero'>
        <canvas ref={canvasRef} className='v2-hero-canvas' />
        <div className='v2-hero-gradient' />
        <div className='v2-container v2-hero-content'>
          <div className='v2-hero-eyebrow'>
            <span className='dot' />
            Human-Led · Agent-Operated · Data-Powered
          </div>
          <h1>
            <span className='line'><span className='line-inner'>Your enterprise.</span></span>
            <span className='line'><span className='line-inner'><em>Agent-operated.</em></span></span>
            <span className='line'><span className='line-inner'>Starting now.</span></span>
          </h1>
          <p className='v2-hero-sub'>
            We translate AI ambition into production systems — strategy, architecture, data, and agents running end-to-end. Time-boxed engagements. Outcomes in weeks, not quarters.
          </p>
          <div className='v2-hero-ctas'>
            <a href='#cta' className='v2-btn'>
              Get architecture assessment
              <span className='arrow'>→</span>
            </a>
            <a href='#capabilities' className='v2-btn-ghost'>
              Explore capabilities
              <span className='arrow'>↓</span>
            </a>
          </div>
        </div>
        <div className='v2-scroll-hint'>
          Scroll
          <span className='line' />
        </div>
      </section>

      <section className='v2-statement'>
        <div className='v2-container'>
          <p className='v2-statement-text'>
            {statementWords.map((word, i) => (
              <span key={i} className='reveal-word'>{word}</span>
            ))}
            <em>We close that gap.</em>
          </p>
        </div>
      </section>

      <section className='v2-section v2-cap' id='capabilities'>
        <div className='v2-container'>
          <div className='v2-reveal'>
            <div className='v2-section-kicker'>What we do</div>
            <h2 className='v2-section-title'>
              Six layers. <em>One partner.</em> No handoff.
            </h2>
            <p className='v2-section-lead'>
              Every enterprise transformation stalls at the seams between strategy, data, and delivery. We work across every layer — not within silos.
            </p>
          </div>

          <div className='v2-cap-grid'>
            <div className='v2-cap-sticky'>
              <div className='v2-cap-index'>
                {capabilities.map((cap, i) => (
                  <div
                    key={cap.num}
                    className={`v2-cap-item ${activeCap === i ? 'active' : ''}`}
                  >
                    <div className='v2-cap-num'>{cap.num}</div>
                    <div className='v2-cap-name'>{cap.name}</div>
                    <div className='v2-cap-arrow'>→</div>
                  </div>
                ))}
              </div>
            </div>

            <div className='v2-cap-panels'>
              {capabilities.map((cap) => (
                <div key={cap.num} className='v2-cap-panel v2-reveal'>
                  <h3>{cap.title}</h3>
                  <p>{cap.body}</p>
                  <div className='v2-cap-panel-meta'>
                    {cap.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='v2-signal' id='signal'>
        <div className='v2-container'>
          <div className='v2-reveal'>
            <div className='v2-section-kicker'>The signal</div>
            <h2 className='v2-section-title'>
              A decade of enterprise delivery. <em>Not a pitch deck.</em>
            </h2>
          </div>

          <div className='v2-signal-grid' style={{ marginTop: 72 }}>
            <div className='v2-signal-cell'>
              <div className='label'>
                Years delivery
                <span className='blip' />
              </div>
              <div className='value' data-target='10' data-suffix='+'>0</div>
              <div className='desc'>Enterprise engagements across Asia-Pacific</div>
            </div>
            <div className='v2-signal-cell'>
              <div className='label'>
                Clients shipped
                <span className='blip' />
              </div>
              <div className='value' data-target='50' data-suffix='+'>0</div>
              <div className='desc'>Fortune-scale programs, not pilots</div>
            </div>
            <div className='v2-signal-cell'>
              <div className='label'>
                AI in production
                <span className='blip' />
              </div>
              <div className='value' data-target='150' data-suffix='+'>0</div>
              <div className='desc'>Live systems, measurable outcomes</div>
            </div>
            <div className='v2-signal-cell'>
              <div className='label'>
                Countries
                <span className='blip' />
              </div>
              <div className='value' data-target='6' data-suffix=''>0</div>
              <div className='desc'>800+ people, 10 offices, one standard</div>
            </div>
          </div>
        </div>
      </section>

      <section className='v2-cadence' id='cadence'>
        <div className='v2-container'>
          <div className='v2-reveal'>
            <div className='v2-section-kicker'>How we work</div>
            <h2 className='v2-section-title'>
              Built for <em>pace,</em> not paperwork.
            </h2>
            <p className='v2-section-lead'>
              Every engagement is time-boxed. Milestones are fixed. Ambiguity gets eliminated in week one.
            </p>
          </div>

          <div className='v2-cadence-timeline'>
            <div className='v2-cadence-step v2-reveal'>
              <div className='days'>5 Days · Align</div>
              <h4>Assess & Align</h4>
              <p>Leadership aligned on AI ambition. Readiness gaps surfaced. A costed roadmap and evidence to make investment decisions.</p>
            </div>
            <div className='v2-cadence-step v2-reveal'>
              <div className='days'>15 Days · Validate</div>
              <h4>Specify & Ship</h4>
              <p>System specification generated. Data foundations validated. Working system tested with real users in your environment.</p>
            </div>
            <div className='v2-cadence-step v2-reveal'>
              <div className='days'>90 Days · Scale</div>
              <h4>Industrialise</h4>
              <p>Enterprise-grade system live. Agents deployed. Operations handed to the team that built it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='v2-cta' id='cta'>
        <div className='v2-container v2-cta-content v2-reveal'>
          <h2>
            Start with a <em>conversation.</em>
          </h2>
          <p>One partner. Full stack. No handoff.</p>
          <a href='#' className='v2-btn'>
            Get architecture assessment
            <span className='arrow'>→</span>
          </a>
        </div>
      </section>

      <footer>
        <div className='v2-container'>
          <div className='v2-foot-top'>
            <div className='v2-foot-brand'>
              <div className='v2-logo'>
                DBiz<span>.ai</span>
              </div>
              <p>Human-led, agent-operated, data-powered. Enterprise AI transformation partner for organisations that need to ship, not pilot.</p>
            </div>
            <div>
              <h5>Company</h5>
              <a href='#'>About</a>
              <a href='#'>Our Work</a>
              <a href='#'>Careers</a>
              <a href='#'>Contact</a>
            </div>
            <div>
              <h5>Capabilities</h5>
              <a href='#'>Strategy</a>
              <a href='#'>Cloud</a>
              <a href='#'>Data & AI</a>
              <a href='#'>Operations</a>
            </div>
            <div>
              <h5>Partners</h5>
              <a href='#'>AWS</a>
              <a href='#'>Azure</a>
              <a href='#'>Snowflake</a>
              <a href='#'>Anthropic</a>
            </div>
          </div>
          <div className='v2-foot-bottom'>
            <div className='legal'>© 2026 DBiz.ai · All rights reserved</div>
            <div className='legal'>10 offices · 6 countries · 800+ people</div>
          </div>
        </div>
      </footer>
    </>
  )
}
