import { Icon } from '@/components/icon'

type Capability = {
  icon: string
  kicker: string
  title: string
  body: string
  tags: string[]
}

const capabilities: Capability[] = [
  {
    icon: 'ph:compass-duotone',
    kicker: '01 / Strategy',
    title: 'Priorities become an executable roadmap.',
    body: 'Readiness assessment, architecture blueprint, governance and security posture — before a line of code gets written.',
    tags: ['Futures Studio', 'TechOffice Foundry', 'AI readiness'],
  },
  {
    icon: 'ph:stack-duotone',
    kicker: '02 / Infrastructure',
    title: 'Cloud built for agents, not retrofitted.',
    body: 'Environments purpose-built for agents, data pipelines, and frontier models — with the governance and cost controls enterprise IT requires.',
    tags: ['AWS Advanced', 'Azure', 'GCP'],
  },
  {
    icon: 'ph:database-duotone',
    kicker: '03 / Intelligence',
    title: 'Every AI initiative stalls on the same thing. Data.',
    body: 'FactWeavers™ cleans, unifies, and activates enterprise data — pre-modelled for your industry, ready for agents from day one.',
    tags: ['Snowflake', 'Databricks', 'FactWeavers™'],
  },
  {
    icon: 'ph:graph-duotone',
    kicker: '04 / Connection',
    title: 'Your platforms don\u2019t need replacing. They need unlocking.',
    body: 'CRM, ERP, and platform investments get connected so agents can read, write, and act across your landscape. No rip and replace.',
    tags: ['Salesforce', 'Dynamics 365', 'MuleSoft'],
  },
  {
    icon: 'ph:sparkle-duotone',
    kicker: '05 / Experience',
    title: 'AI-native applications people actually use.',
    body: 'Experiences designed for the new interaction patterns between humans and agents. Interfaces that evolve with the business.',
    tags: ['Agentforce', 'Copilot Studio', 'Claude Cowork'],
  },
  {
    icon: 'ph:gauge-duotone',
    kicker: '06 / Operations',
    title: 'The team that built it runs it.',
    body: 'AI-first monitoring, governance, and continuous improvement across your stack. Not a support contract from a team that\u2019s never seen the architecture.',
    tags: ['AIOps', 'FinOps', 'SLA L1-L3'],
  },
]

const metrics = [
  { icon: 'ph:calendar-dots-duotone', value: '10+', label: 'Years delivery' },
  { icon: 'ph:briefcase-duotone', value: '50+', label: 'Clients shipped' },
  { icon: 'ph:robot-duotone', value: '150+', label: 'AI in production' },
  { icon: 'ph:globe-hemisphere-west-duotone', value: '6', label: 'Countries' },
]

const cadenceSteps = [
  {
    icon: 'ph:target-duotone',
    days: '5 days',
    phase: 'Assess & Align',
    body: 'Leadership aligned on AI ambition. Readiness gaps surfaced. A costed roadmap and evidence to make investment decisions.',
  },
  {
    icon: 'ph:flask-duotone',
    days: '15 days',
    phase: 'Specify & Ship',
    body: 'System specification generated. Data foundations validated. Working system tested with real users in your environment.',
  },
  {
    icon: 'ph:rocket-launch-duotone',
    days: '90 days',
    phase: 'Industrialise',
    body: 'Enterprise-grade system live. Agents deployed. Operations handed to the team that built it.',
  },
]

export default function V3Page() {
  return (
    <>
      <nav className='v3-nav'>
        <div className='v3-container v3-nav-inner'>
          <a href='#' className='v3-logo'>
            <span className='dot' />
            DBiz<span className='tld'>.ai</span>
          </a>
          <ul className='v3-nav-links'>
            <li><a href='#capabilities'>Capabilities</a></li>
            <li><a href='#signal'>Signal</a></li>
            <li><a href='#cadence'>Cadence</a></li>
            <li><a href='#cta'>Contact</a></li>
          </ul>
          <a href='#cta' className='v3-btn v3-btn-primary v3-btn-sm'>
            Get assessment
            <Icon icon='ph:arrow-up-right-duotone' width={16} />
          </a>
        </div>
      </nav>

      <section className='v3-hero'>
        <div className='v3-container v3-hero-grid'>
          <div className='v3-hero-main'>
            <div className='v3-kicker v3-kicker-blue'>
              <span className='dot' />
              Human-Led · Agent-Operated · Data-Powered
            </div>
            <h1 className='v3-display'>
              Your enterprise.<br />
              <span className='accent'>Agent-operated.</span><br />
              Starting now.
            </h1>
            <p className='v3-lede'>
              We translate AI ambition into production systems — strategy, architecture, data, and agents running end-to-end. Time-boxed engagements. Outcomes in weeks, not quarters.
            </p>
            <div className='v3-hero-ctas'>
              <a href='#cta' className='v3-btn v3-btn-primary'>
                Get architecture assessment
                <Icon icon='ph:arrow-right-duotone' width={18} />
              </a>
              <a href='#capabilities' className='v3-btn v3-btn-ghost'>
                Explore capabilities
                <Icon icon='ph:arrow-down-duotone' width={18} />
              </a>
            </div>
          </div>

          <aside className='v3-hero-aside'>
            <div className='v3-well v3-well-navy'>
              <Icon icon='ph:quotes-duotone' width={28} className='v3-quote-mark' />
              <p className='v3-well-quote'>
                Most enterprises have tried AI. Most of it didn&apos;t scale — because no one connected the ambition to what actually got built.
              </p>
              <div className='v3-well-meta'>
                <div className='v3-avatar'>DB</div>
                <div>
                  <div className='v3-well-name'>DBiz Frontier Team</div>
                  <div className='v3-well-role'>10 offices · 6 countries</div>
                </div>
              </div>
            </div>

            <div className='v3-stat-row'>
              <div className='v3-stat-pill'>
                <Icon icon='ph:check-circle-duotone' width={18} />
                <div>
                  <div className='v3-stat-pill-value'>150+</div>
                  <div className='v3-stat-pill-label'>AI systems in production</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className='v3-section v3-section-navy' id='capabilities'>
        <div className='v3-container'>
          <div className='v3-section-head'>
            <div className='v3-kicker v3-kicker-orange'>
              <span className='dot' />
              What we do
            </div>
            <h2 className='v3-heading'>
              Six layers. <span className='accent'>One partner.</span> No handoff.
            </h2>
            <p className='v3-section-lede'>
              Every enterprise transformation stalls at the seams between strategy, data, and delivery. We work across every layer — not within silos.
            </p>
          </div>

          <div className='v3-cap-grid'>
            {capabilities.map((cap) => (
              <article key={cap.kicker} className='v3-card v3-card-dark'>
                <div className='v3-card-icon'>
                  <Icon icon={cap.icon} width={28} />
                </div>
                <div className='v3-card-kicker'>{cap.kicker}</div>
                <h3 className='v3-card-title'>{cap.title}</h3>
                <p className='v3-card-body'>{cap.body}</p>
                <div className='v3-card-tags'>
                  {cap.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='v3-signal-band' id='signal'>
        <div className='v3-container'>
          <div className='v3-signal-head'>
            <div className='v3-kicker v3-kicker-on-orange'>
              <span className='dot' />
              The signal
            </div>
            <h2 className='v3-heading v3-heading-on-orange'>
              A decade of enterprise delivery.<br />
              <span className='accent-light'>Not a pitch deck.</span>
            </h2>
          </div>
          <div className='v3-metrics'>
            {metrics.map((m) => (
              <div key={m.label} className='v3-metric'>
                <div className='v3-metric-icon'>
                  <Icon icon={m.icon} width={28} />
                </div>
                <div className='v3-metric-value'>{m.value}</div>
                <div className='v3-metric-label'>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='v3-section v3-section-white' id='cadence'>
        <div className='v3-container'>
          <div className='v3-section-head'>
            <div className='v3-kicker v3-kicker-blue'>
              <span className='dot' />
              How we work
            </div>
            <h2 className='v3-heading'>
              Built for <span className='accent'>pace,</span> not paperwork.
            </h2>
            <p className='v3-section-lede'>
              Every engagement is time-boxed. Milestones are fixed. Ambiguity gets eliminated in week one.
            </p>
          </div>

          <div className='v3-cadence'>
            {cadenceSteps.map((step, i) => (
              <article key={step.phase} className='v3-card v3-card-light'>
                <div className='v3-card-step'>{String(i + 1).padStart(2, '0')}</div>
                <div className='v3-card-icon v3-card-icon-blue'>
                  <Icon icon={step.icon} width={26} />
                </div>
                <div className='v3-card-days'>
                  <Icon icon='ph:clock-countdown-duotone' width={14} />
                  {step.days}
                </div>
                <h3 className='v3-card-title v3-card-title-dark'>{step.phase}</h3>
                <p className='v3-card-body v3-card-body-dark'>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='v3-cta' id='cta'>
        <div className='v3-container'>
          <div className='v3-cta-well'>
            <div className='v3-cta-left'>
              <div className='v3-kicker v3-kicker-orange'>
                <span className='dot' />
                Start here
              </div>
              <h2 className='v3-heading'>
                Start with a <span className='accent'>conversation.</span>
              </h2>
              <p className='v3-section-lede'>
                One partner. Full stack. No handoff. We return an architecture assessment in five working days.
              </p>
              <div className='v3-hero-ctas'>
                <a href='#' className='v3-btn v3-btn-primary'>
                  Get architecture assessment
                  <Icon icon='ph:arrow-right-duotone' width={18} />
                </a>
                <a href='#' className='v3-btn v3-btn-ghost-dark'>
                  Book a call
                  <Icon icon='ph:phone-duotone' width={18} />
                </a>
              </div>
            </div>
            <div className='v3-cta-right'>
              <ul className='v3-cta-list'>
                <li>
                  <Icon icon='ph:check-circle-duotone' width={22} />
                  <div>
                    <strong>5-day readiness assessment</strong>
                    <span>Leadership aligned, roadmap costed, risks surfaced.</span>
                  </div>
                </li>
                <li>
                  <Icon icon='ph:check-circle-duotone' width={22} />
                  <div>
                    <strong>15-day working system</strong>
                    <span>Working specification, validated data, tested in your environment.</span>
                  </div>
                </li>
                <li>
                  <Icon icon='ph:check-circle-duotone' width={22} />
                  <div>
                    <strong>90-day industrialisation</strong>
                    <span>Enterprise-grade system live. Agents deployed. Ops handed back.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className='v3-footer'>
        <div className='v3-container v3-footer-inner'>
          <div className='v3-footer-brand'>
            <a href='#' className='v3-logo'>
              <span className='dot' />
              DBiz<span className='tld'>.ai</span>
            </a>
            <p>Human-led, agent-operated, data-powered. Enterprise AI transformation partner for organisations that need to ship, not pilot.</p>
          </div>
          <div className='v3-footer-cols'>
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
              <a href='#'>Data &amp; AI</a>
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
        </div>
        <div className='v3-container v3-footer-legal'>
          <span>© 2026 DBiz.ai · All rights reserved</span>
          <span>10 offices · 6 countries · 800+ people</span>
        </div>
      </footer>
    </>
  )
}
