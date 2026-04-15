import { V9Capabilities } from './v9-capabilities'
import { V9Proven } from './v9-proven'
import { FrontierFramework } from './frontier-framework'
import { HeroDiagram } from './hero-diagram'
import { LogoWall } from './logo-wall'
import { Icon } from '@/components/icon'

type StackRow = {
  layer: string
  idx: string
  products: { name: string; desc: string }[]
}

const stackRows: StackRow[] = [
  {
    layer: 'Strategy',
    idx: '01',
    products: [
      { name: 'Futures Studio', desc: 'AI ambition, roadmap and use case prioritisation aligned to measurable business values.' },
    ],
  },
  {
    layer: 'Architecture',
    idx: '02',
    products: [
      { name: 'TechOffice Foundry', desc: 'AI architecture foundation, governance and standards, Well-Architected review with AI-pillars.' },
    ],
  },
  {
    layer: 'Cloud',
    idx: '03',
    products: [
      { name: 'Multi-Cloud AI Foundation', desc: 'AWS · Azure · GCP. Deploy on the right cloud for each workload.' },
      { name: 'DBiz Canvas', desc: 'Concept to code in days — not quarters.' },
    ],
  },
  {
    layer: 'Development',
    idx: '04',
    products: [
      { name: 'Nexus Platform', desc: 'Enterprise AI development environment for agent-based software engineering.' },
      { name: 'Perpetual Engineering', desc: 'AI agents working across the full software delivery lifecycle.' },
    ],
  },
  {
    layer: 'Productivity',
    idx: '05',
    products: [
      { name: 'Claude Cowork & Copilot', desc: 'AI-automation for every role across the enterprise.' },
      { name: 'AI-Infused BizApps', desc: 'Autonomous agents for business execution within SaaS platforms.' },
    ],
  },
  {
    layer: 'Orchestration',
    idx: '06',
    products: [
      { name: 'Agent Studio', desc: 'Agentic AI and multi-agent orchestration at enterprise scale.' },
      { name: 'Nexus iConnector', desc: 'MCP connectors via Boomi, MuleSoft, Workato — no rip and replace.' },
    ],
  },
  {
    layer: 'Data & Insights',
    idx: '07',
    products: [
      { name: 'FactWeavers.ai', desc: 'Data democratisation and quick insights with a domain data cloud.' },
      { name: 'DBiz Compass', desc: 'AI-infused data engineering across the enterprise estate.' },
    ],
  },
]

const whyReasons = [
  {
    idx: '01',
    title: 'Expertise that works together.',
    body: 'Strategy, cloud, data, platforms, product, design, operations — our teams work across every layer, not within silos. Your transformation is shaped by people who understand the full picture, not just their corner of it.',
  },
  {
    idx: '02',
    title: 'Transformation at scale.',
    body: '50+ enterprise clients. 150+ AI solutions. Six countries. Over a decade of enterprise delivery — not a pitch deck.',
  },
  {
    idx: '03',
    title: 'Time-boxed delivery. Every engagement.',
    body: "Outcomes within defined timeframes. Ambiguity is the enemy of delivery — so we don't allow it.",
  },
  {
    idx: '04',
    title: 'Production platforms. Not presentations.',
    body: "NEXUS, Agent Studio, FactWeavers\u2122, DBiz Canvas — production systems deployed in enterprise environments. We recommend what we've already built.",
  },
]

const stats = [
  { icon: 'ph:calendar-dots', num: '10+', label: 'Years enterprise delivery' },
  { icon: 'ph:buildings', num: '50+', label: 'Enterprise clients' },
  { icon: 'ph:sparkle', num: '150+', label: 'AI solutions in production' },
  { icon: 'ph:stack-simple', num: '11', label: 'Industries' },
  { icon: 'ph:globe-hemisphere-west', num: '6', label: 'Countries' },
]

export default function V9Page() {
  return (
    <>
      {/* NAV — dark */}
      <nav className='v9-nav' data-theme='dark'>
        <div className='v9-nav-inner'>
          <div className='v9-logo'>
            dbiz<span>.ai</span>
          </div>
          <ul className='v9-nav-links'>
            <li><a href='#solutions'>Our Solutions</a></li>
            <li><a href='#work'>Our Work</a></li>
            <li><a href='#about'>About Us</a></li>
            <li><a href='#careers'>Careers</a></li>
          </ul>
          <a href='#cta' className='v9-nav-cta'>
            Get an assessment <span>→</span>
          </a>
        </div>
      </nav>

      {/* HERO — dark, grainy, v5 isometric diagram */}
      <section className='v9-hero' data-theme='dark'>
        <div className='v9-container'>
          <div className='v9-hero-inner'>
            <div>
              <div className='v9-hero-eyebrow'>
                Human-Led &nbsp;·&nbsp; Agent-Operated &nbsp;·&nbsp; Data-Powered
              </div>
              <h1>
                Your enterprise.<br />
                <span className='accent'>Agent-operated.</span><br />
                Starting now.
              </h1>
              <p>
                Most enterprises have tried AI. Most of it didn&apos;t scale — not because the
                technology failed, but because no one connected the ambition to what actually got
                built. We close that gap. We call the result a Frontier Organisation: human-led,
                agent-operated, data-powered.
              </p>
              <div className='v9-hero-ctas'>
                <a href='#cta' className='v9-cta-primary'>
                  Get an architecture assessment
                  <span className='arrow'>→</span>
                </a>
                <a href='#cta' className='v9-cta-text'>
                  Or talk to our team
                </a>
              </div>
            </div>
            <div className='v9-hero-diagram'>
              <div className='v9-hero-diagram-label'>
                <span>DWG · FRONTIER-ORG-01</span>
                <span>REV.01</span>
              </div>
              <HeroDiagram />
              <div className='v9-hero-diagram-foot'>
                <span>SCALE 1:1</span>
                <span>SHEET A1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO WALL — warm */}
      <LogoWall />

      {/* STATS — dark */}
      <section className='v9-stats' data-theme='dark'>
        <div className='v9-container'>
          <div className='v9-section-head'>
            <h2 className='v9-h2'>
              A decade of <span className='accent'>enterprise delivery.</span>
            </h2>
            <p className='v9-lead'>
              Not a pitch deck — measurable, deployed, running in production today.
            </p>
          </div>
          <div className='v9-stats-frame'>
            <span className='tick tl' />
            <span className='tick tr' />
            <span className='tick bl' />
            <span className='tick br' />
            <div className='v9-stats-row'>
              {stats.map((s) => (
                <div key={s.label} className='v9-stat'>
                  <span className='v9-stat-icon'>
                    <Icon icon={s.icon} width={20} />
                  </span>
                  <span className='num'>{s.num}</span>
                  <span className='label'>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES — light */}
      <V9Capabilities />

      {/* STACK — dark */}
      <section className='v9-stack' data-theme='dark'>
        <div className='v9-container'>
          <div className='v9-section-head'>
            <h2 className='v9-h2'>
              DBiz AI Transformation Stack.
            </h2>
            <p className='v9-lead'>
              No capability gaps. No vendor lock-in. A complete delivery stack — from strategy to
              orchestration — engineered for enterprise scale.
            </p>
          </div>

          <FrontierFramework />

          <div className='v9-stack-rows'>
            {stackRows.map((row) => (
              <div key={row.layer} className='v9-stack-row'>
                <div className='v9-stack-layer'>
                  <span className='idx'>{row.idx}</span>
                  {row.layer}
                </div>
                <div className='v9-stack-products'>
                  {row.products.map((p) => (
                    <div key={p.name} className='v9-stack-product'>
                      <div className='name'>{p.name}</div>
                      <div className='desc'>{p.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVEN — light */}
      <V9Proven />

      {/* WHY — dark */}
      <section className='v9-why' data-theme='dark' id='about'>
        <div className='v9-container'>
          <div className='v9-section-head'>
            <h2 className='v9-h2'>
              Why enterprises <span className='accent'>choose DBiz.</span>
            </h2>
            <p className='v9-lead'>
              Four reasons — all evidenced by delivery, not brochures.
            </p>
          </div>

          <div className='v9-why-grid'>
            {whyReasons.map((r) => (
              <div key={r.idx} className='v9-why-card'>
                <div className='idx'>{r.idx}</div>
                <div>
                  <h4>{r.title}</h4>
                  <p>{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — warm */}
      <section className='v9-cta' id='cta'>
        <div className='v9-container'>
          <div className='v9-cta-inner'>
            <div className='v9-cta-body'>
              <h2>Your Frontier Organisation starts with a conversation.</h2>
              <div className='sub'>One partner · Full stack · No handoff</div>
            </div>
            <div className='v9-cta-actions'>
              <a href='#' className='v9-cta-primary'>
                Contact us
                <span className='arrow'>→</span>
              </a>
              <a href='#' className='v9-cta-text'>
                Or get an architecture assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER — dark */}
      <footer className='v9-footer' data-theme='dark' id='careers'>
        <div className='v9-container'>
          <div className='v9-foot-top'>
            <div className='v9-foot-brand'>
              <div className='v9-logo'>
                dbiz<span>.ai</span>
              </div>
              <div className='tag'>Impactful experience at scale</div>
              <div className='meta'>10 offices · 6 countries · 800+ people</div>
            </div>
            <div className='v9-foot-col'>
              <div className='v9-mono'>Company</div>
              <ul>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Our Work</a></li>
                <li><a href='#'>Careers</a></li>
                <li><a href='#'>Contact Us</a></li>
                <li><a href='#'>Blog</a></li>
              </ul>
            </div>
            <div className='v9-foot-col'>
              <div className='v9-mono'>Solutions</div>
              <ul>
                <li><a href='#'>Strategy &amp; Architecture</a></li>
                <li><a href='#'>Cloud</a></li>
                <li><a href='#'>Data &amp; AI</a></li>
                <li><a href='#'>Business Apps</a></li>
                <li><a href='#'>Product &amp; Experience</a></li>
                <li><a href='#'>Managed Services</a></li>
              </ul>
            </div>
            <div className='v9-foot-col'>
              <div className='v9-mono'>Partners</div>
              <ul>
                <li><a href='#'>AWS</a></li>
                <li><a href='#'>Microsoft Azure</a></li>
                <li><a href='#'>Salesforce</a></li>
                <li><a href='#'>Snowflake</a></li>
                <li><a href='#'>Databricks</a></li>
                <li><a href='#'>Anthropic</a></li>
              </ul>
            </div>
          </div>

          <div className='v9-foot-legal'>
            <p className='ack'>
              We acknowledge the Traditional Custodians of the lands on which we work and live,
              and pay our respects to Elders past, present, and emerging.
            </p>
            <div className='links'>
              <a href='#'>Privacy Policy</a>
              <a href='#'>Legal</a>
              <a href='#'>Terms of Use</a>
              <a href='#'>Modern Slavery Statement</a>
            </div>
            <div className='v9-foot-copy'>© 2026 DBiz.ai. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  )
}
