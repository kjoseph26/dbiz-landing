'use client'

import { useEffect, useState } from 'react'

type ExpTab = 'ind' | 'sol' | 'tech'
type View = 'capabilities' | 'framework'

export default function V1Page() {
  const [tab, setTab] = useState<ExpTab>('ind')
  const [view, setView] = useState<View>('capabilities')

  useEffect(() => {
    const navEl = document.getElementById('v1-nav')
    const onScroll = () => {
      if (!navEl) return
      navEl.classList.toggle('scrolled', window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('v')
        })
      },
      { threshold: 0.06, rootMargin: '0px 0px -16px 0px' }
    )
    document.querySelectorAll('.v1-scope .reveal').forEach((el) => revealObserver.observe(el))

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const target = Number(el.dataset.t || '0')
          const suffix = el.dataset.s || ''
          let current = 0
          const step = target / (1200 / 16)
          const timer = setInterval(() => {
            current += step
            if (current >= target) {
              current = target
              clearInterval(timer)
            }
            el.textContent = Math.round(current) + suffix
          }, 16)
          countObserver.unobserve(el)
        })
      },
      { threshold: 0.5 }
    )
    document.querySelectorAll<HTMLElement>('.v1-scope .stat-n').forEach((el) => countObserver.observe(el))

    const staggerCards = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.querySelectorAll<HTMLElement>('.plat-card').forEach((c, i) => {
            c.style.opacity = '0'
            c.style.transform = 'translateY(16px)'
            c.style.transition =
              'opacity .5s cubic-bezier(.16,1,.3,1), transform .5s cubic-bezier(.16,1,.3,1)'
            setTimeout(() => {
              c.style.opacity = '1'
              c.style.transform = 'translateY(0)'
            }, 100 + i * 80)
          })
          staggerCards.unobserve(entry.target)
        })
      },
      { threshold: 0.1 }
    )
    const platGrid = document.querySelector('.v1-scope .plat-grid')
    if (platGrid) staggerCards.observe(platGrid)

    const staggerRows = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.querySelectorAll<HTMLElement>('.stack-row').forEach((r, i) => {
            r.style.opacity = '0'
            r.style.transform = 'translateX(-16px)'
            r.style.transition =
              'opacity .5s cubic-bezier(.16,1,.3,1), transform .5s cubic-bezier(.16,1,.3,1)'
            setTimeout(() => {
              r.style.opacity = '1'
              r.style.transform = 'translateX(0)'
            }, 80 + i * 80)
          })
          staggerRows.unobserve(entry.target)
        })
      },
      { threshold: 0.1 }
    )
    const stackRows = document.querySelector('.v1-scope .stack-rows')
    if (stackRows) staggerRows.observe(stackRows)

    return () => {
      window.removeEventListener('scroll', onScroll)
      revealObserver.disconnect()
      countObserver.disconnect()
      staggerCards.disconnect()
      staggerRows.disconnect()
    }
  }, [view, tab])

  return (
    <>
      <nav id='v1-nav'>
        <div className='logo'>
          dbiz<span>.ai</span>
        </div>
        <ul className='nav-links'>
          <li><a href='#stack'>Our Solutions</a></li>
          <li><a href='#expertise'>Our Work</a></li>
          <li><a href='#'>About Us</a></li>
          <li><a href='#'>Careers</a></li>
        </ul>
        <a href='#cta' className='nav-cta'>Contact Us</a>
      </nav>

      <section className='hero'>
        <div className='container'>
          <div className='hero-ey'>
            Human-Led <span>|</span> Agent-Operated <span>|</span> Data-Powered
          </div>
          <h1>
            <span className='ln'><span className='li'>Your enterprise.</span></span>
            <span className='ln'><span className='li'><em>Agent-operated.</em></span></span>
            <span className='ln'><span className='li'>Starting now.</span></span>
          </h1>
          <p className='hero-body'>
            Most enterprises have tried AI. Most of it didn&apos;t scale — not because the technology failed, but because no one connected the ambition to what actually got built. We close that gap. We call the result a Frontier Organisation: human-led, agent-operated, data-powered.
          </p>
          <div className='hero-ctas'>
            <a href='#cta' className='btn'>
              Get an architecture assessment <span className='arr'>→</span>
            </a>
            <a href='#cta' className='btn-text'>Or talk to our team</a>
          </div>
        </div>
      </section>

      <div className='trust'>
        <div className='container'>
          <div className='trust-label'>Trusted by 50+ enterprises across 6 countries</div>
          <div className='trust-logos'>
            <div /><div /><div /><div /><div /><div />
          </div>
        </div>
      </div>

      <section className='stats'>
        <div className='container'>
          <div className='stats-grid'>
            <div className='stat reveal'>
              <div className='stat-n' data-t='10' data-s='+'>0</div>
              <div className='stat-l'>Years enterprise delivery</div>
            </div>
            <div className='stat reveal d1'>
              <div className='stat-n' data-t='50' data-s='+'>0</div>
              <div className='stat-l'>Enterprise clients</div>
            </div>
            <div className='stat reveal d2'>
              <div className='stat-n' data-t='150' data-s='+'>0</div>
              <div className='stat-l'>AI solutions in production</div>
            </div>
            <div className='stat reveal d3'>
              <div className='stat-n' data-t='11' data-s=''>0</div>
              <div className='stat-l'>Industries</div>
            </div>
            <div className='stat reveal d4'>
              <div className='stat-n' data-t='6' data-s=''>0</div>
              <div className='stat-l'>Countries</div>
            </div>
          </div>
        </div>
      </section>

      <section className='frontier' id='stack'>
        <div className='container'>
          <div className='sh reveal'>
            <h2>
              The AI gap <em>every enterprise hits.</em>
              <br />
              And how we close it.
            </h2>
            <p>
              We translate your priorities into an AI and technology roadmap. Then deliver against it — across every layer, with industry-leading partners at each step. Engage us for one capability or the full transformation.
            </p>
          </div>

          <div className='view-toggle reveal d1'>
            <button
              className={`vt-btn ${view === 'capabilities' ? 'active' : ''}`}
              onClick={() => setView('capabilities')}
            >
              Our Capabilities
            </button>
            <button
              className={`vt-btn ${view === 'framework' ? 'active' : ''}`}
              onClick={() => setView('framework')}
            >
              The AI Framework at Work
            </button>
          </div>

          <div className={`view-panel ${view === 'capabilities' ? 'active' : ''}`} id='vp-capabilities'>
            <div className='plat-grid'>
              <div className='plat-card'>
                <div className='pc-num'>Start here</div>
                <div className='pc-title'>Strategy & Architecture</div>
                <div className='pc-sub'>Futures Studio · TechOffice Foundry</div>
                <div className='pc-desc'>
                  Your business priorities become an AI and technology roadmap. Use case prioritisation, readiness assessment, architecture blueprint, data governance and security posture. Without strategic alignment, investment gets scattered.
                </div>
                <div className='pc-partners'>AWS · Azure · GCP · Anthropic · OpenAI</div>
                <a href='#' className='pc-link'>Deep dive →</a>
              </div>
              <div className='plat-card'>
                <div className='pc-num'>Cloud</div>
                <div className='pc-title'>AI-Ready Infrastructure</div>
                <div className='pc-sub'>Multi-hyperscaler · Purpose-built</div>
                <div className='pc-desc'>
                  Cloud built for AI workloads, not retrofitted for them. Environments purpose-built for agents, data pipelines, and AI models — with governance, cost controls, and observability enterprise IT requires.
                </div>
                <div className='pc-partners'>AWS (Advanced) · Azure (Solutions Partner) · GCP</div>
                <a href='#' className='pc-link'>Deep dive →</a>
              </div>
              <div className='plat-card'>
                <div className='pc-num'>Data & AI</div>
                <div className='pc-title'>The Intelligence Layer</div>
                <div className='pc-sub'>FactWeavers™ · Domain Data Cloud</div>
                <div className='pc-desc'>
                  Every AI initiative stalls on the same thing: the data isn&apos;t ready. FactWeavers™ cleans, unifies, and activates enterprise data — pre-modelled for your industry, ready for agents from day one.
                </div>
                <div className='pc-sticky'>No six-month data clean-up before value starts flowing.</div>
                <div className='pc-partners'>Snowflake · Databricks · Fabric · BigQuery · Claude · GPT · Gemini</div>
                <a href='#' className='pc-link'>Deep dive →</a>
              </div>
              <div className='plat-card'>
                <div className='pc-num'>Business Apps & Integration</div>
                <div className='pc-title'>Connected Systems, Not Silos</div>
                <div className='pc-sub'>No rip and replace</div>
                <div className='pc-desc'>
                  CRM, ERP, and platform investments don&apos;t need replacing — they need unlocking. We connect existing systems so AI agents can read, write, and act across your entire application landscape.
                </div>
                <div className='pc-sticky'>Your platforms start working for AI — not against it.</div>
                <div className='pc-partners'>Salesforce · Dynamics 365 · Boomi · MuleSoft · Workato · n8n</div>
                <a href='#' className='pc-link'>Deep dive →</a>
              </div>
              <div className='plat-card'>
                <div className='pc-num'>Product & Experience</div>
                <div className='pc-title'>What People Actually Use</div>
                <div className='pc-sub'>AI-native · Perpetual Engineering</div>
                <div className='pc-desc'>
                  AI-native applications, digital twins, and next-gen experiences that evolve with the business. Designed for the new interaction patterns between humans and agents.
                </div>
                <div className='pc-partners'>Agentforce · Copilot Studio · Claude Cowork</div>
                <a href='#' className='pc-link'>Deep dive →</a>
              </div>
              <div className='plat-card'>
                <div className='pc-num'>Managed Services</div>
                <div className='pc-title'>AI-First Operations</div>
                <div className='pc-sub'>The team that built it runs it</div>
                <div className='pc-desc'>
                  AI-first monitoring, governance, and continuous improvement across your entire stack. Not a support contract from a team that&apos;s never seen the architecture.
                </div>
                <div className='pc-sticky'>Operational in weeks. Self-optimising within months.</div>
                <div className='pc-partners'>AIOps · DevOps · CI/CD · FinOps · SLA L1–L3</div>
                <a href='#' className='pc-link'>Deep dive →</a>
              </div>
              <div className='plat-card'>
                <div className='pc-num'>Governance</div>
                <div className='pc-title'>Security & AI Risk</div>
                <div className='pc-sub'>Built in, not bolted on</div>
                <div className='pc-desc'>
                  Data sovereignty, AI governance frameworks, hallucination risk management, model drift monitoring, and compliance-ready architecture — embedded into every layer from day one.
                </div>
              </div>
            </div>
            <div className='front-output'>
              <div className='front-output-badge'>▲ The Frontier Organisation</div>
            </div>
          </div>

          <div className={`view-panel ${view === 'framework' ? 'active' : ''}`} id='vp-framework'>
            <div className='stack-visual'>
              <div className='stack-title'>
                <h3>DBiz AI Transformation Stack</h3>
                <p>No capability gaps. No vendor lock-in.</p>
              </div>
              <div className='stack-rows'>
                <div className='stack-row'>
                  <div className='sr-label'>Strategy</div>
                  <div className='sr-content'>
                    <div className='sr-item'>
                      <div className='sr-prod'>Futures Studio</div>
                      <div className='sr-desc'>AI ambition, roadmap & use case prioritisation aligned to measurable business values</div>
                    </div>
                  </div>
                </div>
                <div className='stack-row'>
                  <div className='sr-label'>Architecture</div>
                  <div className='sr-content'>
                    <div className='sr-item'>
                      <div className='sr-prod'>TechOffice Foundry</div>
                      <div className='sr-desc'>AI architecture foundation, governance & standards, Well-Architected review with AI-pillars</div>
                    </div>
                  </div>
                </div>
                <div className='stack-row'>
                  <div className='sr-label'>Cloud</div>
                  <div className='sr-content split'>
                    <div className='sr-item'>
                      <div className='sr-prod'>Multi-Cloud AI Foundation</div>
                      <div className='sr-desc'>AWS · Azure · GCP — deploy on the right cloud for each workload</div>
                    </div>
                    <div className='sr-item'>
                      <div className='sr-prod'>DBiz Canvas</div>
                      <div className='sr-desc'>Concept to code in days</div>
                    </div>
                  </div>
                </div>
                <div className='stack-row'>
                  <div className='sr-label'>Development</div>
                  <div className='sr-content split'>
                    <div className='sr-item'>
                      <div className='sr-prod'>Nexus Platform</div>
                      <div className='sr-desc'>Enterprise AI dev environment</div>
                    </div>
                    <div className='sr-item'>
                      <div className='sr-prod'>Perpetual Engineering</div>
                      <div className='sr-desc'>AI agents across the full SDLC</div>
                    </div>
                  </div>
                </div>
                <div className='stack-row'>
                  <div className='sr-label'>Productivity</div>
                  <div className='sr-content split'>
                    <div className='sr-item'>
                      <div className='sr-prod'>Claude Cowork & Copilot</div>
                      <div className='sr-desc'>AI-automation for every role</div>
                    </div>
                    <div className='sr-item'>
                      <div className='sr-prod'>AI-Infused BizApps</div>
                      <div className='sr-desc'>Autonomous agents for business execution with SaaS platforms</div>
                    </div>
                  </div>
                </div>
                <div className='stack-row'>
                  <div className='sr-label'>Orchestration</div>
                  <div className='sr-content split'>
                    <div className='sr-item'>
                      <div className='sr-prod'>Agent Studio</div>
                      <div className='sr-desc'>Agentic AI and multi-agent orchestration</div>
                    </div>
                    <div className='sr-item'>
                      <div className='sr-prod'>Nexus iConnector</div>
                      <div className='sr-desc'>MCP connectors via Boomi, MuleSoft, Workato — no rip & replace</div>
                    </div>
                  </div>
                </div>
                <div className='stack-row'>
                  <div className='sr-label'>Data & Insights</div>
                  <div className='sr-content split'>
                    <div className='sr-item'>
                      <div className='sr-prod'>FactWeavers.ai</div>
                      <div className='sr-desc'>Data democratisation & quick insights with domain data cloud</div>
                    </div>
                    <div className='sr-item'>
                      <div className='sr-prod'>DBiz Compass</div>
                      <div className='sr-desc'>AI-infused data engineering</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='expertise' id='expertise'>
        <div className='container'>
          <div className='sh reveal'>
            <h2>Proven <em>where it matters.</em></h2>
            <p>50+ enterprise deployments across 11 industries.</p>
          </div>
          <div className='tabs reveal'>
            <button className={`tab ${tab === 'ind' ? 'active' : ''}`} onClick={() => setTab('ind')}>By Industry</button>
            <button className={`tab ${tab === 'sol' ? 'active' : ''}`} onClick={() => setTab('sol')}>By Solution</button>
            <button className={`tab ${tab === 'tech' ? 'active' : ''}`} onClick={() => setTab('tech')}>By Technology</button>
          </div>
          <div className={`tp ${tab === 'ind' ? 'active' : ''}`} id='tp-ind'>
            <div className='ex-grid'>
              {[0, 1, 2].map((i) => (
                <div className='ex' key={i}>
                  <div className='ex-lb'>Placeholder industry</div>
                  <h4>[Key metric]</h4>
                  <h5>[Outcome headline]</h5>
                  <p>[One-line business outcome.]</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`tp ${tab === 'sol' ? 'active' : ''}`} id='tp-sol'>
            <div className='ex-grid'>
              {[0, 1, 2].map((i) => (
                <div className='ex' key={i}>
                  <div className='ex-lb'>Placeholder solution</div>
                  <h4>[Key metric]</h4>
                  <h5>[Outcome headline]</h5>
                  <p>[One-line business outcome.]</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`tp ${tab === 'tech' ? 'active' : ''}`} id='tp-tech'>
            <div className='tech-grid'>
              <div className='tech'>
                <h5>Cloud & AI</h5>
                <div className='pl'>AWS (Advanced) · Azure (Solutions) · GCP</div>
                <div className='cn'>40+ AWS certified experts</div>
              </div>
              <div className='tech'>
                <h5>Data Platforms</h5>
                <div className='pl'>Snowflake · Databricks · Fabric · BigQuery</div>
                <div className='cn'>FactWeavers™ built on top</div>
              </div>
              <div className='tech'>
                <h5>Integration</h5>
                <div className='pl'>Boomi · MuleSoft · Workato · n8n</div>
                <div className='cn'>No rip & replace</div>
              </div>
              <div className='tech'>
                <h5>Business Apps</h5>
                <div className='pl'>Salesforce · Dynamics 365 · Power Platform</div>
                <div className='cn'>200+ Microsoft certifications</div>
              </div>
            </div>
            <div className='ai-bar'>
              <div>
                <h5>AI Models</h5>
                <p>Claude · GPT · Gemini · Bedrock · Azure OpenAI · Vertex AI</p>
              </div>
              <div className='note'>Multi-model by design — agents run on the best model for each task.</div>
            </div>
          </div>
        </div>
      </section>

      <section className='testi'>
        <div className='container reveal'>
          <blockquote>&ldquo;[Placeholder — CTO or CIO quote about working with DBiz.]&rdquo;</blockquote>
          <cite>[Name], [Title], [Company]</cite>
        </div>
      </section>

      <section className='how' id='how'>
        <div className='container'>
          <div className='sh reveal'>
            <h2>How we work. <em>Built for pace, not paperwork.</em></h2>
            <p>Every engagement is time-boxed. Milestones are fixed. Ambiguity gets eliminated early.</p>
          </div>
          <div className='how-grid'>
            <div className='how-card reveal d1'>
              <div className='how-days'>5 days</div>
              <div className='how-name'>Align & Assess</div>
              <p>Leadership aligned on AI ambition. Architecture assessed. Readiness gaps surfaced. A costed roadmap and evidence to make investment decisions.</p>
              <div className='how-out'>Board-aligned AI roadmap.</div>
            </div>
            <div className='how-card reveal d2'>
              <div className='how-days'>15 days</div>
              <div className='how-name'>Specify & Validate</div>
              <p>System specification generated. Data foundations validated. Working system shipped and tested with real users in your environment.</p>
              <div className='how-out'>Validated MVP in production.</div>
            </div>
            <div className='how-card reveal d3'>
              <div className='how-days'>90 days</div>
              <div className='how-name'>Industrialise & Scale</div>
              <p>Enterprise-grade system live. Agents deployed. Data democratised. Operations handed to the team that built it.</p>
              <div className='how-out'>Frontier Organisation operational.</div>
            </div>
          </div>
          <div className='how-note reveal d4'>Timelines are benchmarks based on 50+ enterprise engagements. Scope varies by environment.</div>
        </div>
      </section>

      <section className='why-section'>
        <div className='container'>
          <div className='sh reveal'>
            <h2>Why enterprises <em>choose DBiz.</em></h2>
          </div>
          <div className='why-items'>
            <div className='why-card reveal d1'>
              <h4>Expertise that works together.</h4>
              <p>Strategy, cloud, data, platforms, product, design, operations — our teams work across every layer, not within silos. Your transformation is shaped by people who understand the full picture, not just their corner of it.</p>
            </div>
            <div className='why-card reveal d2'>
              <h4>Transformation at scale.</h4>
              <p>50+ enterprise clients. 150+ AI solutions. Six countries. Over a decade of enterprise delivery — not a pitch deck.</p>
            </div>
            <div className='why-card reveal d3'>
              <h4>Time-boxed delivery. Every engagement.</h4>
              <p>Outcomes within defined timeframes. Ambiguity is the enemy of delivery — so we don&apos;t allow it.</p>
            </div>
            <div className='why-card reveal d4'>
              <h4>Production platforms. Not presentations.</h4>
              <p>NEXUS, Agent Studio, FactWeavers™, DBiz Canvas — production systems deployed in enterprise environments. We recommend what we&apos;ve already built.</p>
            </div>
          </div>
          <div className='partner-row reveal d5'>
            <div className='pr-col'>
              <h4>Enterprise Partnerships</h4>
              <p>Certified at the highest tiers with the industry&apos;s leading technology providers.</p>
              <div className='pr-logos'>
                <span>AWS Advanced</span><span>Azure Solutions</span><span>Salesforce</span>
                <span>Dynamics 365</span><span>Snowflake</span><span>Databricks</span>
                <span>Anthropic</span><span>Boomi</span><span>MuleSoft</span>
              </div>
            </div>
            <div className='pr-col'>
              <h4>Domain Depth</h4>
              <p>Deep sector expertise shaped by 150+ enterprise engagements.</p>
              <div className='pr-logos'>
                <span>Financial Services</span><span>Logistics & Fleet</span><span>Real Estate</span>
                <span>Aged Care</span><span>Automotive</span><span>Government</span>
                <span>Retail</span><span>Construction</span><span>Manufacturing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='cta-section' id='cta'>
        <div className='container'>
          <h2 className='reveal'>Your Frontier Organisation <em>starts with a conversation.</em></h2>
          <p className='sub reveal d1'>One partner. Full stack. No handoff.</p>
          <div className='cta-btns reveal d2'>
            <a href='#' className='btn'>
              Contact us <span className='arr'>→</span>
            </a>
            <a href='#' className='btn-text'>Or get an architecture assessment</a>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='foot-main'>
            <div className='foot-col'>
              <div className='foot-logo'>dbiz<span>.ai</span></div>
              <div className='foot-tag'>Human-Led <span>|</span> Agent-Operated <span>|</span> Data-Powered</div>
              <div style={{ marginTop: 10, fontSize: '.7rem', color: 'rgba(255,255,255,.2)' }}>
                10 offices · 6 countries · 800+ people
              </div>
            </div>
            <div className='foot-col'>
              <div className='foot-heading'>Company</div>
              <a href='#'>About Us</a><a href='#'>Our Work</a><a href='#'>Careers</a>
              <a href='#'>Contact Us</a><a href='#'>Blog</a>
            </div>
            <div className='foot-col'>
              <div className='foot-heading'>Solutions</div>
              <a href='#'>Strategy & Architecture</a><a href='#'>Cloud</a><a href='#'>Data & AI</a>
              <a href='#'>Business Apps & Integration</a><a href='#'>Product & Experience</a>
              <a href='#'>Managed Services</a>
            </div>
            <div className='foot-col'>
              <div className='foot-heading'>Partners</div>
              <a href='#'>AWS</a><a href='#'>Microsoft Azure</a><a href='#'>Salesforce</a>
              <a href='#'>Snowflake</a><a href='#'>Databricks</a><a href='#'>Boomi</a>
              <a href='#'>Anthropic</a>
            </div>
          </div>
          <div className='foot-bottom'>
            <div className='foot-legal'>
              <a href='#'>Privacy Policy</a><a href='#'>Legal</a>
              <a href='#'>Terms of Use</a><a href='#'>Modern Slavery Statement</a>
            </div>
            <div className='foot-ack'>
              We acknowledge the Traditional Custodians of the lands on which we work and live, and pay our respects to Elders past, present, and emerging.
            </div>
            <div className='foot-copy'>© 2026 DBiz.ai. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  )
}
