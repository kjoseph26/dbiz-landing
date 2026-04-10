type Capability = {
  num: string
  kicker: string
  title: string
  tags: string
  body: string
}

const capabilities: Capability[] = [
  {
    num: '01',
    kicker: 'Start here',
    title: 'Strategy & Architecture',
    tags: 'Futures Studio · TechOffice Foundry',
    body: 'Your business priorities become an AI and technology roadmap. Use case prioritisation, readiness assessment, architecture blueprint, data governance and security posture.',
  },
  {
    num: '02',
    kicker: 'Cloud',
    title: 'AI-Ready Infrastructure',
    tags: 'Multi-hyperscaler · Purpose-built',
    body: 'Cloud built for AI workloads, not retrofitted for them. Environments for agents, data pipelines, and AI models — with governance, cost controls, and observability enterprise IT requires.',
  },
  {
    num: '03',
    kicker: 'Data & AI',
    title: 'The Intelligence Layer',
    tags: 'FactWeavers™ · Domain Data Cloud',
    body: "Every AI initiative stalls on the same thing: the data isn't ready. FactWeavers™ cleans, unifies, and activates enterprise data — pre-modelled for your industry, ready for agents from day one.",
  },
  {
    num: '04',
    kicker: 'Business Apps & Integration',
    title: 'Connected Systems, Not Silos',
    tags: 'No rip and replace',
    body: "CRM, ERP, and platform investments don't need replacing — they need unlocking. We connect existing systems so AI agents can read, write, and act across your entire application landscape.",
  },
  {
    num: '05',
    kicker: 'Product & Experience',
    title: 'What People Actually Use',
    tags: 'AI-native · Perpetual Engineering',
    body: 'AI-native applications, digital twins, and next-gen experiences that evolve with the business. Designed for the new interaction patterns between humans and agents.',
  },
  {
    num: '06',
    kicker: 'Managed Services',
    title: 'AI-First Operations',
    tags: 'The team that built it runs it',
    body: "AI-first monitoring, governance, and continuous improvement across your entire stack. Not a support contract from a team that's never seen the architecture.",
  },
  {
    num: '07',
    kicker: 'Governance',
    title: 'Security & AI Risk',
    tags: 'Built in, not bolted on',
    body: 'Data sovereignty, AI governance frameworks, hallucination risk management, model drift monitoring, and compliance-ready architecture — embedded into every layer from day one.',
  },
]

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
      {
        name: 'Futures Studio',
        desc: 'AI ambition, roadmap and use case prioritisation aligned to measurable business values.',
      },
    ],
  },
  {
    layer: 'Architecture',
    idx: '02',
    products: [
      {
        name: 'TechOffice Foundry',
        desc: 'AI architecture foundation, governance and standards, Well-Architected review with AI-pillars.',
      },
    ],
  },
  {
    layer: 'Cloud',
    idx: '03',
    products: [
      {
        name: 'Multi-Cloud AI Foundation',
        desc: 'AWS · Azure · GCP. Deploy on the right cloud for each workload.',
      },
      {
        name: 'DBiz Canvas',
        desc: 'Concept to code in days — not quarters.',
      },
    ],
  },
  {
    layer: 'Development',
    idx: '04',
    products: [
      {
        name: 'Nexus Platform',
        desc: 'Enterprise AI development environment for agent-based software engineering.',
      },
      {
        name: 'Perpetual Engineering',
        desc: 'AI agents working across the full software delivery lifecycle.',
      },
    ],
  },
  {
    layer: 'Productivity',
    idx: '05',
    products: [
      {
        name: 'Claude Cowork & Copilot',
        desc: 'AI-automation for every role across the enterprise.',
      },
      {
        name: 'AI-Infused BizApps',
        desc: 'Autonomous agents for business execution within SaaS platforms.',
      },
    ],
  },
  {
    layer: 'Orchestration',
    idx: '06',
    products: [
      {
        name: 'Agent Studio',
        desc: 'Agentic AI and multi-agent orchestration at enterprise scale.',
      },
      {
        name: 'Nexus iConnector',
        desc: 'MCP connectors via Boomi, MuleSoft, Workato — no rip and replace.',
      },
    ],
  },
  {
    layer: 'Data & Insights',
    idx: '07',
    products: [
      {
        name: 'FactWeavers.ai',
        desc: 'Data democratisation and quick insights with a domain data cloud.',
      },
      {
        name: 'DBiz Compass',
        desc: 'AI-infused data engineering across the enterprise estate.',
      },
    ],
  },
]

type Case = {
  metric: string
  title: string
  kicker: string
  body: string
}

const byIndustry: Case[] = [
  {
    metric: '38% faster',
    title: 'Credit decisioning in hours, not weeks',
    kicker: 'Financial Services',
    body: 'Agent-driven risk models cut the underwriting cycle time for a tier-1 lender across retail, SME, and corporate books.',
  },
  {
    metric: '$14M saved',
    title: 'Dispatch, rewritten nightly',
    kicker: 'Logistics & Fleet',
    body: 'A national fleet operator replaced static route planning with agentic scheduling across 12,000 vehicles.',
  },
  {
    metric: '6× throughput',
    title: 'Clinical documentation, automated',
    kicker: 'Aged Care',
    body: 'Care teams reclaimed hours per shift with voice-to-record agents compliant with regional reporting standards.',
  },
]

const bySolution: Case[] = [
  {
    metric: '11 domains',
    title: 'Industry-ready data cloud',
    kicker: 'FactWeavers™',
    body: 'Pre-modelled data products shipped without a six-month clean-up phase.',
  },
  {
    metric: '40+ agents',
    title: 'Multi-agent orchestration at scale',
    kicker: 'Agent Studio',
    body: 'Cross-system agents running order-to-cash for a Fortune 500 manufacturer.',
  },
  {
    metric: '5 days',
    title: 'Concept to working build',
    kicker: 'DBiz Canvas',
    body: 'Product teams move from brief to production code inside a single sprint.',
  },
]

type Tech = { cat: string; list: string; note: string }

const techRows: Tech[] = [
  {
    cat: 'Cloud & AI',
    list: 'AWS (Advanced) · Azure (Solutions) · GCP',
    note: '40+ AWS certified experts',
  },
  {
    cat: 'Data Platforms',
    list: 'Snowflake · Databricks · Fabric · BigQuery',
    note: 'FactWeavers™ built on top',
  },
  {
    cat: 'Integration',
    list: 'Boomi · MuleSoft · Workato · n8n',
    note: 'No rip & replace',
  },
  {
    cat: 'Business Apps',
    list: 'Salesforce · Dynamics 365 · Power Platform',
    note: '200+ Microsoft certifications',
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
    body: 'Outcomes within defined timeframes. Ambiguity is the enemy of delivery — so we don\u2019t allow it.',
  },
  {
    idx: '04',
    title: 'Production platforms. Not presentations.',
    body: 'NEXUS, Agent Studio, FactWeavers™, DBiz Canvas — production systems deployed in enterprise environments. We recommend what we\u2019ve already built.',
  },
]

export default function V4Page() {
  return (
    <>
      {/* NAV */}
      <nav className='v4-nav'>
        <div className='v4-nav-inner'>
          <div className='v4-logo'>
            dbiz<span>.ai</span>
          </div>
          <ul className='v4-nav-links'>
            <li><a href='#solutions'>Our Solutions</a></li>
            <li><a href='#work'>Our Work</a></li>
            <li><a href='#about'>About Us</a></li>
            <li><a href='#careers'>Careers</a></li>
          </ul>
          <div className='v4-nav-cta-wrap'>
            <a href='#cta' className='v4-nav-cta'>
              Get an assessment <span>→</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className='v4-hero'>
        <div className='v4-container'>
          <div className='v4-hero-grid'>
            <div className='v4-hero-meta'>
              <span className='num'>N°01 / Homepage</span>
              <span className='num'>Issue 2026</span>
            </div>
            <div className='v4-hero-eyebrow'>
              Human-Led &nbsp;|&nbsp; Agent-Operated &nbsp;|&nbsp; Data-Powered
            </div>
            <div className='v4-hero-title'>
              <h1>
                Your enterprise.<br />
                <em>Agent-operated.</em><br />
                Starting now.
              </h1>
            </div>
            <p className='v4-hero-body'>
              Most enterprises have tried AI. Most of it didn&apos;t scale — not because the technology failed, but because no one connected the ambition to what actually got built. We close that gap. We call the result a Frontier Organisation: human-led, agent-operated, data-powered.
            </p>
            <div className='v4-hero-ctas'>
              <a href='#cta' className='v4-cta-primary'>
                Get an architecture assessment
                <span className='arrow'>→</span>
              </a>
              <a href='#cta' className='v4-cta-text'>
                Or talk to our team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className='v4-trust'>
        <div className='v4-container'>
          <div className='v4-trust-grid'>
            <div className='v4-trust-label v4-mono-sm'>
              Trusted by 50+ enterprises across 6 countries
            </div>
            <div className='v4-trust-list'>
              AWS<span>·</span>Azure<span>·</span>Salesforce<span>·</span>Snowflake<span>·</span>Databricks<span>·</span>Anthropic<span>·</span>Boomi<span>·</span>MuleSoft<span>·</span>Microsoft
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className='v4-stats'>
        <div className='v4-container'>
          <div className='v4-stats-header'>
            <div className='v4-mono'>N°02 / By the numbers</div>
            <p className='title'>
              A decade of enterprise delivery. Not a pitch deck — measurable, deployed, running in production today.
            </p>
          </div>
          <div className='v4-stats-row'>
            <div className='v4-stat-cell'>
              <div className='v4-mono'>01</div>
              <div className='num'>10+</div>
              <div className='label'>Years enterprise delivery</div>
            </div>
            <div className='v4-stat-cell'>
              <div className='v4-mono'>02</div>
              <div className='num'>50+</div>
              <div className='label'>Enterprise clients</div>
            </div>
            <div className='v4-stat-cell'>
              <div className='v4-mono'>03</div>
              <div className='num'>150+</div>
              <div className='label'>AI solutions in production</div>
            </div>
            <div className='v4-stat-cell'>
              <div className='v4-mono'>04</div>
              <div className='num'>11</div>
              <div className='label'>Industries</div>
            </div>
            <div className='v4-stat-cell'>
              <div className='v4-mono'>05</div>
              <div className='num'>6</div>
              <div className='label'>Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* THE AI GAP */}
      <section className='v4-gap' id='solutions'>
        <div className='v4-container'>
          <div className='v4-section-head'>
            <div className='num'>N°03 / Capabilities</div>
            <h2>The AI gap every enterprise hits. And how we close it.</h2>
            <p className='lead'>
              We translate your priorities into an AI and technology roadmap. Then deliver against it — across every layer, with industry-leading partners at each step. Engage us for one capability or the full transformation.
            </p>
          </div>

          <div className='v4-cap-list'>
            {capabilities.map((cap) => (
              <div key={cap.num} className='v4-cap-row'>
                <div className='v4-cap-num'>{cap.num}</div>
                <div className='v4-cap-kicker'>{cap.kicker}</div>
                <div>
                  <div className='v4-cap-title'>{cap.title}</div>
                  <div className='v4-cap-tags'>{cap.tags}</div>
                </div>
                <div className='v4-cap-body'>{cap.body}</div>
              </div>
            ))}
          </div>

          <div className='v4-gap-badge'>
            <span className='tri'>▲</span>
            <span>The Frontier Organisation</span>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION STACK */}
      <section className='v4-stack'>
        <div className='v4-container'>
          <div className='v4-section-head'>
            <div className='num'>N°04 / The stack</div>
            <h2>DBiz AI Transformation Stack.</h2>
            <p className='lead'>
              No capability gaps. No vendor lock-in. A complete delivery stack — from strategy to orchestration — engineered for enterprise scale.
            </p>
          </div>

          <div className='v4-stack-label'>
            <div className='l'>Layer</div>
            <div className='r'>Products &amp; platforms</div>
          </div>

          {stackRows.map((row) => (
            <div
              key={row.layer}
              className={`v4-stack-row ${row.products.length === 1 ? 'single' : ''}`}
            >
              <div className='layer'>
                <span className='idx'>{row.idx}</span>
                {row.layer}
              </div>
              <div className='products'>
                {row.products.map((p) => (
                  <div key={p.name}>
                    <div className='v4-stack-prod-name'>{p.name}</div>
                    <div className='v4-stack-prod-desc'>{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROVEN */}
      <section className='v4-proven' id='work'>
        <div className='v4-container'>
          <div className='v4-section-head'>
            <div className='num'>N°05 / Proven</div>
            <h2>Proven where it matters.</h2>
            <p className='lead'>
              50+ enterprise deployments across 11 industries. Measured outcomes — shipped into production, running today.
            </p>
          </div>

          <div className='v4-proven-subhead'>
            <div className='v4-mono'>By industry</div>
            <h3>Where AI met the ground.</h3>
          </div>

          <div className='v4-proven-cards'>
            {byIndustry.map((c) => (
              <div key={c.title} className='v4-proven-card'>
                <div className='metric'>{c.metric}</div>
                <div className='kicker'>{c.kicker}</div>
                <div className='title'>{c.title}</div>
                <p className='body'>{c.body}</p>
              </div>
            ))}
          </div>

          <div className='v4-proven-subhead'>
            <div className='v4-mono'>By solution</div>
            <h3>Platforms we built and deployed.</h3>
          </div>

          <div className='v4-proven-cards'>
            {bySolution.map((c) => (
              <div key={c.title} className='v4-proven-card'>
                <div className='metric'>{c.metric}</div>
                <div className='kicker'>{c.kicker}</div>
                <div className='title'>{c.title}</div>
                <p className='body'>{c.body}</p>
              </div>
            ))}
          </div>

          <div className='v4-tech'>
            <div className='v4-proven-subhead' style={{ paddingTop: 0 }}>
              <div className='v4-mono'>By technology</div>
              <h3>Partners at every tier.</h3>
            </div>

            {techRows.map((t) => (
              <div key={t.cat} className='v4-tech-row'>
                <div className='cat'>{t.cat}</div>
                <div className='list'>{t.list}</div>
                <div className='note'>{t.note}</div>
              </div>
            ))}

            <div className='v4-tech-models'>
              <div className='cat'>AI Models</div>
              <div className='list'>Claude · GPT · Gemini · Bedrock · Azure OpenAI · Vertex AI</div>
              <div className='note'>Multi-model by design — agents run on the best model for each task.</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className='v4-quote'>
        <div className='v4-container'>
          <div className='v4-quote-grid'>
            <div className='v4-quote-meta'>N°06 / Testimonial</div>
            <div className='v4-quote-body'>
              <span className='mark' />
              <blockquote>
                &ldquo;DBiz didn&apos;t sell us a roadmap. They delivered one — with the system live in production while the rest of the market was still running POCs.&rdquo;
              </blockquote>
              <cite>Priya Nair &nbsp;—&nbsp; Chief Data &amp; AI Officer, Southern Cross Logistics</cite>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className='v4-how'>
        <div className='v4-container'>
          <div className='v4-section-head'>
            <div className='num'>N°07 / Cadence</div>
            <h2>How we work. Built for pace, not paperwork.</h2>
            <p className='lead'>
              Every engagement is time-boxed. Milestones are fixed. Ambiguity gets eliminated early.
            </p>
          </div>

          <div className='v4-how-grid'>
            <div className='v4-how-card'>
              <div className='days'>
                5<sub>Days</sub>
              </div>
              <div className='phase'>Align &amp; Assess</div>
              <h4>Leadership alignment and readiness.</h4>
              <p>
                Leadership aligned on AI ambition. Architecture assessed. Readiness gaps surfaced. A costed roadmap and evidence to make investment decisions.
              </p>
              <div className='outcome'>Outcome · Board-aligned AI roadmap</div>
            </div>
            <div className='v4-how-card'>
              <div className='days'>
                15<sub>Days</sub>
              </div>
              <div className='phase'>Specify &amp; Validate</div>
              <h4>System shipped, tested with real users.</h4>
              <p>
                System specification generated. Data foundations validated. Working system shipped and tested with real users in your environment.
              </p>
              <div className='outcome'>Outcome · Validated MVP in production</div>
            </div>
            <div className='v4-how-card'>
              <div className='days'>
                90<sub>Days</sub>
              </div>
              <div className='phase'>Industrialise &amp; Scale</div>
              <h4>Enterprise-grade system, operated.</h4>
              <p>
                Enterprise-grade system live. Agents deployed. Data democratised. Operations handed to the team that built it.
              </p>
              <div className='outcome'>Outcome · Frontier Organisation operational</div>
            </div>
          </div>

          <p className='v4-how-note'>
            Timelines are benchmarks based on 50+ enterprise engagements. Scope varies by environment.
          </p>
        </div>
      </section>

      {/* WHY DBIZ */}
      <section className='v4-why' id='about'>
        <div className='v4-container'>
          <div className='v4-section-head'>
            <div className='num'>N°08 / Why DBiz</div>
            <h2>Why enterprises choose DBiz.</h2>
            <p className='lead'>
              Four reasons — all evidenced by delivery, not brochures.
            </p>
          </div>

          <div className='v4-why-grid'>
            {whyReasons.map((r) => (
              <div key={r.idx} className='v4-why-card'>
                <div className='idx'>{r.idx}</div>
                <div>
                  <h4>{r.title}</h4>
                  <p>{r.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='v4-partner-row'>
            <div className='v4-partner-block'>
              <div className='v4-mono'>Enterprise Partnerships</div>
              <h5>Certified at the highest tiers.</h5>
              <p>
                We hold advanced certifications with the industry&apos;s leading technology providers — and we deliver with them, not around them.
              </p>
              <div className='v4-partner-tags'>
                AWS Advanced<span>·</span>Azure Solutions<span>·</span>Salesforce<span>·</span>Dynamics 365<span>·</span>Snowflake<span>·</span>Databricks<span>·</span>Anthropic<span>·</span>Boomi<span>·</span>MuleSoft
              </div>
            </div>
            <div className='v4-partner-block'>
              <div className='v4-mono'>Domain Depth</div>
              <h5>Sector expertise, engineered.</h5>
              <p>
                Deep sector expertise shaped by 150+ enterprise engagements — with FactWeavers™ data models pre-built for every vertical we ship into.
              </p>
              <div className='v4-partner-tags'>
                Financial Services<span>·</span>Logistics &amp; Fleet<span>·</span>Real Estate<span>·</span>Aged Care<span>·</span>Automotive<span>·</span>Government<span>·</span>Retail<span>·</span>Construction<span>·</span>Manufacturing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className='v4-cta' id='cta'>
        <div className='v4-container'>
          <div className='v4-cta-grid'>
            <div className='v4-cta-num'>N°09 / Contact</div>
            <div className='v4-cta-body'>
              <h2>Your Frontier Organisation starts with a conversation.</h2>
              <div className='sub'>One partner &nbsp;·&nbsp; Full stack &nbsp;·&nbsp; No handoff</div>
            </div>
            <div className='v4-cta-actions'>
              <a href='#' className='v4-cta-primary'>
                Contact us
                <span className='arrow'>→</span>
              </a>
              <a href='#' className='v4-cta-text'>
                Or get an architecture assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className='v4-footer' id='careers'>
        <div className='v4-container'>
          <div className='v4-foot-top'>
            <div className='v4-foot-brand'>
              <div className='v4-logo'>
                dbiz<span>.ai</span>
              </div>
              <div className='tag'>Human-Led &nbsp;|&nbsp; Agent-Operated &nbsp;|&nbsp; Data-Powered</div>
              <div className='meta'>10 offices · 6 countries · 800+ people</div>
            </div>
            <div className='v4-foot-col'>
              <div className='v4-mono'>Company</div>
              <ul>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Our Work</a></li>
                <li><a href='#'>Careers</a></li>
                <li><a href='#'>Contact Us</a></li>
                <li><a href='#'>Blog</a></li>
              </ul>
            </div>
            <div className='v4-foot-col'>
              <div className='v4-mono'>Solutions</div>
              <ul>
                <li><a href='#'>Strategy &amp; Architecture</a></li>
                <li><a href='#'>Cloud</a></li>
                <li><a href='#'>Data &amp; AI</a></li>
                <li><a href='#'>Business Apps &amp; Integration</a></li>
                <li><a href='#'>Product &amp; Experience</a></li>
                <li><a href='#'>Managed Services</a></li>
              </ul>
            </div>
            <div className='v4-foot-col'>
              <div className='v4-mono'>Partners</div>
              <ul>
                <li><a href='#'>AWS</a></li>
                <li><a href='#'>Microsoft Azure</a></li>
                <li><a href='#'>Salesforce</a></li>
                <li><a href='#'>Snowflake</a></li>
                <li><a href='#'>Databricks</a></li>
                <li><a href='#'>Boomi</a></li>
                <li><a href='#'>Anthropic</a></li>
              </ul>
            </div>
          </div>

          <div className='v4-foot-legal'>
            <p className='ack'>
              We acknowledge the Traditional Custodians of the lands on which we work and live, and pay our respects to Elders past, present, and emerging.
            </p>
            <div className='links'>
              <a href='#'>Privacy Policy</a>
              <a href='#'>Legal</a>
              <a href='#'>Terms of Use</a>
              <a href='#'>Modern Slavery Statement</a>
            </div>
            <div className='v4-foot-copy'>© 2026 DBiz.ai. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  )
}
