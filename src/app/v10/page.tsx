import Link from 'next/link'

type Capability = {
  num: string
  kicker: string
  title: string
  sub: string
  body: string
}

const capabilities: Capability[] = [
  {
    num: 'C·01',
    kicker: 'Start here',
    title: 'Strategy & Architecture',
    sub: 'Futures Studio · TechOffice Foundry',
    body: 'Your business priorities become an AI and technology roadmap. Use case prioritisation, readiness assessment, architecture blueprint, data governance and security posture.',
  },
  {
    num: 'C·02',
    kicker: 'Cloud',
    title: 'AI-Ready Infrastructure',
    sub: 'Multi-hyperscaler · Purpose-built',
    body: 'Cloud built for AI workloads, not retrofitted for them. Environments for agents, data pipelines, and AI models — with governance, cost controls, and observability enterprise IT requires.',
  },
  {
    num: 'C·03',
    kicker: 'Data & AI',
    title: 'The Intelligence Layer',
    sub: 'FactWeavers™ · Domain Data Cloud',
    body: 'Every AI initiative stalls on the same thing: the data isn\u2019t ready. FactWeavers™ cleans, unifies, and activates enterprise data — pre-modelled for your industry, ready for agents from day one.',
  },
  {
    num: 'C·04',
    kicker: 'Business Apps & Integration',
    title: 'Connected Systems, Not Silos',
    sub: 'No rip and replace',
    body: 'CRM, ERP, and platform investments don\u2019t need replacing — they need unlocking. We connect existing systems so AI agents can read, write, and act across your entire application landscape.',
  },
  {
    num: 'C·05',
    kicker: 'Product & Experience',
    title: 'What People Actually Use',
    sub: 'AI-native · Perpetual Engineering',
    body: 'AI-native applications, digital twins, and next-gen experiences that evolve with the business. Designed for the new interaction patterns between humans and agents.',
  },
  {
    num: 'C·06',
    kicker: 'Managed Services',
    title: 'AI-First Operations',
    sub: 'The team that built it runs it',
    body: 'AI-first monitoring, governance, and continuous improvement across your entire stack. Not a support contract from a team that\u2019s never seen the architecture.',
  },
  {
    num: 'C·07',
    kicker: 'Governance',
    title: 'Security & AI Risk',
    sub: 'Built in, not bolted on',
    body: 'Data sovereignty, AI governance frameworks, hallucination risk management, model drift monitoring, and compliance-ready architecture — embedded into every layer from day one.',
  },
]

type StackRow = {
  num: string
  label: string
  entries: { strong: string; desc: string }[]
}

const stack: StackRow[] = [
  {
    num: 'L·01',
    label: 'Strategy',
    entries: [
      { strong: 'Futures Studio', desc: 'AI ambition, roadmap & use case prioritisation aligned to measurable business values.' },
    ],
  },
  {
    num: 'L·02',
    label: 'Architecture',
    entries: [
      { strong: 'TechOffice Foundry', desc: 'AI architecture foundation, governance & standards, Well-Architected review with AI-pillars.' },
    ],
  },
  {
    num: 'L·03',
    label: 'Cloud',
    entries: [
      { strong: 'Multi-Cloud AI Foundation', desc: 'AWS · Azure · GCP.' },
      { strong: 'DBiz Canvas', desc: 'Concept to code in days.' },
    ],
  },
  {
    num: 'L·04',
    label: 'Development',
    entries: [
      { strong: 'Nexus Platform', desc: 'Enterprise AI development environment.' },
      { strong: 'Perpetual Engineering', desc: 'AI agents across the full SDLC.' },
    ],
  },
  {
    num: 'L·05',
    label: 'Productivity',
    entries: [
      { strong: 'Claude Cowork & Copilot', desc: 'AI-automation for every role.' },
      { strong: 'AI-Infused BizApps', desc: 'Autonomous agents for business execution with SaaS platforms.' },
    ],
  },
  {
    num: 'L·06',
    label: 'Orchestration',
    entries: [
      { strong: 'Agent Studio', desc: 'Agentic AI and multi-agent orchestration.' },
      { strong: 'Nexus iConnector', desc: 'MCP connectors via Boomi, MuleSoft, Workato — no rip & replace.' },
    ],
  },
  {
    num: 'L·07',
    label: 'Data & Insights',
    entries: [
      { strong: 'FactWeavers.ai', desc: 'Data democratisation & quick insights with domain data cloud.' },
      { strong: 'DBiz Compass', desc: 'AI-infused data engineering.' },
    ],
  },
]

const partnerRoster = [
  'AWS',
  'Azure',
  'Salesforce',
  'Snowflake',
  'Databricks',
  'Anthropic',
  'Boomi',
  'MuleSoft',
  'Microsoft',
]

const stats = [
  { code: 'S·01', figure: '10+', label: 'Years enterprise delivery' },
  { code: 'S·02', figure: '50+', label: 'Enterprise clients' },
  { code: 'S·03', figure: '150+', label: 'AI solutions in production' },
  { code: 'S·04', figure: '11', label: 'Industries' },
  { code: 'S·05', figure: '6', label: 'Countries' },
]

export default function V10Page() {
  return (
    <>
      {/* ====== MASTHEAD ====== */}
      <header className='v10-masthead v10-container'>
        <div className='v10-masthead-meta'>
          <span>DBiz · Dispatch</span>
          <span>Vol. I · Edition <span className='k'>01</span></span>
          <span>Rev <span className='k'>2026-04-15</span> · Sheet <span className='k'>01/01</span></span>
        </div>
        <nav className='v10-nav'>
          <Link href='/' className='v10-logo'>
            dbiz<em>.ai</em>
          </Link>
          <ul className='v10-nav-links'>
            <li><a href='#solutions'>Solutions</a></li>
            <li><a href='#work'>Work</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#careers'>Careers</a></li>
          </ul>
          <a href='#contact' className='v10-nav-cta'>
            Get an assessment
          </a>
        </nav>
      </header>

      {/* ====== HERO ====== */}
      <section className='v10-hero v10-container'>
        <div className='v10-hero-head'>
          <span>FIG·01 · Front page</span>
          <span className='v10-marker'>SEC·A1</span>
          <span>Human-Led · Agent-Operated · Data-Powered</span>
        </div>
        <div className='v10-hero-kicker'>Human-Led · Agent-Operated · Data-Powered</div>
        <h1>
          Your enterprise. <em>Agent-operated.</em> Starting now.
        </h1>
        <div className='v10-hero-deck'>
          Most enterprises have tried AI. Most of it didn&rsquo;t scale — not because the technology
          failed, but because no one connected the ambition to what actually got built. We close
          that gap. We call the result a Frontier Organisation: human-led, agent-operated,
          data-powered.
        </div>
        <div className='v10-hero-byline'>
          <a href='#contact' className='v10-btn'>
            Get an architecture assessment →
          </a>
          <a href='#contact' className='v10-link'>
            Or talk to our team
          </a>
        </div>
        <div className='v10-hero-caption'>Fig. 01 — The Frontier Organisation, front page</div>
      </section>

      {/* ====== TRUST STRIP ====== */}
      <section className='v10-container'>
        <div className='v10-trust'>
          <div className='v10-trust-label'>
            Trusted by 50+ enterprises across 6 countries
          </div>
          <div className='v10-trust-roster'>
            {partnerRoster.map((p, i) => (
              <span key={p}>
                {p}
                {i < partnerRoster.length - 1 && <span className='sep'>·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ====== STATS ====== */}
      <section className='v10-container'>
        <div className='v10-section' style={{ borderTop: 0, paddingBottom: 0 }}>
          <div className='v10-section-head'>
            <div className='v10-kicker'>Ledger · Numbers</div>
            <h2 className='v10-h2'>
              Ten years. <em>Fifty enterprises.</em> Counting.
            </h2>
          </div>
          <div className='v10-stats'>
            {stats.map((s) => (
              <div key={s.code} className='v10-stat'>
                <span className='v10-stat-code'>{s.code}</span>
                <div className='v10-stat-figure'>{s.figure}</div>
                <div className='v10-stat-label'>{s.label}</div>
              </div>
            ))}
            <div className='v10-stat v10-cell-empty' aria-hidden='true' />
          </div>
        </div>
      </section>

      {/* ====== THE AI GAP ====== */}
      <section className='v10-section v10-feature v10-container' id='solutions'>
        <div className='v10-section-head'>
          <div>
            <div className='v10-kicker'>SEC·B1 · The AI Gap</div>
            <h2 className='v10-h2'>
              The AI gap every enterprise hits. <em>And how we close it.</em>
            </h2>
          </div>
          <p className='v10-feature-lede'>
            We translate your priorities into an AI and technology roadmap. Then deliver against it
            — across every layer, with industry-leading partners at each step. Engage us for one
            capability or the full transformation.
          </p>
        </div>

        <div className='v10-cap-grid'>
          {capabilities.map((cap) => (
            <article key={cap.num} className='v10-cap-item'>
              <div className='v10-cap-num'>{cap.num}</div>
              <div className='v10-cap-body'>
                <span className='kicker'>{cap.kicker}</span>
                <h3>{cap.title}</h3>
                <span className='sub'>{cap.sub}</span>
                <p>{cap.body}</p>
              </div>
            </article>
          ))}
          <div className='v10-cap-item v10-cell-empty' aria-hidden='true' />
          <div className='v10-cap-item v10-cell-empty' aria-hidden='true' />
        </div>
        <div className='v10-feature-badge'>
          <span style={{ width: 10, height: 1, background: 'var(--accent)' }} />
          The Frontier Organisation
        </div>
      </section>

      {/* ====== TRANSFORMATION STACK ====== */}
      <section className='v10-section v10-container'>
        <div className='v10-section-head'>
          <div>
            <div className='v10-kicker'>SEC·B2 · The Transformation Stack</div>
            <h2 className='v10-h2'>
              No capability gaps. <em>No vendor lock-in.</em>
            </h2>
          </div>
        </div>

        <div className='v10-chart'>
          <div className='v10-chart-head'>
            <div>Layer <span className='k'>[L·##]</span></div>
            <div>Platforms &amp; Capabilities</div>
          </div>
          {stack.map((row) => (
            <div key={row.num} className='v10-chart-row'>
              <div className='v10-chart-label'>
                <span className='num'>{row.num}</span>
                {row.label}
              </div>
              <div className='v10-chart-content'>
                {row.entries.map((e) => (
                  <div key={e.strong} className='v10-chart-entry'>
                    <strong>{e.strong}</strong>
                    <span>{e.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== PROVEN ====== */}
      <section className='v10-section v10-container' id='work'>
        <div className='v10-section-head'>
          <div>
            <div className='v10-kicker'>SEC·C1 · Case Studies</div>
            <h2 className='v10-h2'>
              Proven <em>where it matters.</em>
            </h2>
            <p className='v10-lead' style={{ marginTop: 20 }}>
              50+ enterprise deployments across 11 industries. What follows is a short ledger of
              work delivered into production — by sector, by solution, and by technology stack.
            </p>
          </div>
        </div>

        {/* By industry */}
        <div className='v10-proven-group'>
          <div className='v10-proven-label'>
            <span>By Industry</span>
            <span className='k'>[V·01]</span>
          </div>
          <div className='v10-case-grid'>
            <article className='v10-case'>
              <div className='v10-case-meta'>
                <span className='v10-case-sector'>Financial Services</span>
                <span className='v10-case-figure'>38% faster</span>
              </div>
              <h4>Credit decisioning in hours, not weeks</h4>
              <p>
                Agent-driven risk models cut underwriting cycle time for a tier-1 lender across
                retail, SME, and corporate books.
              </p>
            </article>
            <article className='v10-case'>
              <div className='v10-case-meta'>
                <span className='v10-case-sector'>Logistics &amp; Fleet</span>
                <span className='v10-case-figure'>$14M saved</span>
              </div>
              <h4>Dispatch, rewritten nightly</h4>
              <p>
                A national fleet operator replaced static route planning with agentic scheduling
                across 12,000 vehicles.
              </p>
            </article>
            <article className='v10-case'>
              <div className='v10-case-meta'>
                <span className='v10-case-sector'>Aged Care</span>
                <span className='v10-case-figure'>6× throughput</span>
              </div>
              <h4>Clinical documentation, automated</h4>
              <p>
                Care teams reclaimed hours per shift with voice-to-record agents compliant with
                regional reporting standards.
              </p>
            </article>
          </div>
        </div>

        {/* By solution */}
        <div className='v10-proven-group'>
          <div className='v10-proven-label'>
            <span>By Solution</span>
            <span className='k'>[V·02]</span>
          </div>
          <div className='v10-case-grid'>
            <article className='v10-case'>
              <div className='v10-case-meta'>
                <span className='v10-case-sector'>FactWeavers™</span>
                <span className='v10-case-figure'>11 domains</span>
              </div>
              <h4>Industry-ready data cloud</h4>
              <p>Pre-modelled data products shipped without a six-month clean-up phase.</p>
            </article>
            <article className='v10-case'>
              <div className='v10-case-meta'>
                <span className='v10-case-sector'>Agent Studio</span>
                <span className='v10-case-figure'>40+ agents</span>
              </div>
              <h4>Multi-agent orchestration at scale</h4>
              <p>Cross-system agents running order-to-cash for a Fortune 500 manufacturer.</p>
            </article>
            <article className='v10-case'>
              <div className='v10-case-meta'>
                <span className='v10-case-sector'>DBiz Canvas</span>
                <span className='v10-case-figure'>5 days</span>
              </div>
              <h4>Concept to working build</h4>
              <p>Product teams move from brief to production code inside a single sprint.</p>
            </article>
          </div>
        </div>

        {/* By technology */}
        <div className='v10-proven-group'>
          <div className='v10-proven-label'>
            <span>By Technology</span>
            <span className='k'>[V·03]</span>
          </div>
          <div className='v10-case-grid'>
            <article className='v10-case'>
              <div className='v10-case-meta'>
                <span className='v10-case-sector'>Cloud &amp; AI</span>
                <span className='v10-case-figure'>40+</span>
              </div>
              <h4>AWS · Azure · GCP</h4>
              <p>AWS Advanced, Azure Solutions, GCP. 40+ AWS certified experts across the practice.</p>
            </article>
            <article className='v10-case'>
              <div className='v10-case-meta'>
                <span className='v10-case-sector'>Data Platforms</span>
                <span className='v10-case-figure'>Core</span>
              </div>
              <h4>Snowflake · Databricks · Fabric · BigQuery</h4>
              <p>FactWeavers™ built on top of every modern data platform in the enterprise.</p>
            </article>
            <article className='v10-case'>
              <div className='v10-case-meta'>
                <span className='v10-case-sector'>Integration</span>
                <span className='v10-case-figure'>iPaaS</span>
              </div>
              <h4>Boomi · MuleSoft · Workato · n8n</h4>
              <p>No rip &amp; replace. Connect existing platforms so agents can operate across them.</p>
            </article>
            <article className='v10-case'>
              <div className='v10-case-meta'>
                <span className='v10-case-sector'>Business Apps</span>
                <span className='v10-case-figure'>200+</span>
              </div>
              <h4>Salesforce · Dynamics 365 · Power Platform</h4>
              <p>200+ Microsoft certifications and deep Salesforce delivery experience.</p>
            </article>
            <div className='v10-case v10-cell-empty' aria-hidden='true' />
            <div className='v10-case v10-cell-empty' aria-hidden='true' />
          </div>

          <div className='v10-models-bar'>
            <div className='label'>AI Models</div>
            <div className='list'>
              Claude · GPT · Gemini · Bedrock · Azure OpenAI · Vertex AI
              <em>Multi-model by design — agents run on the best model for each task.</em>
            </div>
          </div>
        </div>
      </section>

      {/* ====== PULL QUOTE ====== */}
      <section className='v10-pullquote'>
        <div className='v10-container'>
          <blockquote>
            DBiz didn&rsquo;t sell us a roadmap. They delivered one — with the system live in
            production while the rest of the market was still running POCs.
          </blockquote>
          <cite>Priya Nair · Chief Data &amp; AI Officer, Southern Cross Logistics</cite>
        </div>
      </section>

      {/* ====== HOW WE WORK ====== */}
      <section className='v10-section v10-container'>
        <div className='v10-section-head'>
          <div>
            <div className='v10-kicker'>SEC·D1 · Cadence</div>
            <h2 className='v10-h2'>
              How we work. <em>Built for pace, not paperwork.</em>
            </h2>
            <p className='v10-lead' style={{ marginTop: 20 }}>
              Every engagement is time-boxed. Milestones are fixed. Ambiguity gets eliminated
              early. Three horizons — five days, fifteen days, ninety days — each with a fixed
              outcome and a hand-off point.
            </p>
          </div>
        </div>

        <div className='v10-cadence-grid'>
          <div className='v10-cadence-step'>
            <div className='v10-cadence-days'>5<sup>Days</sup></div>
            <h4>Align &amp; Assess</h4>
            <p>
              Leadership aligned on AI ambition. Architecture assessed. Readiness gaps surfaced.
              A costed roadmap and evidence to make investment decisions.
            </p>
            <div className='outcome'>Board-aligned AI roadmap</div>
          </div>
          <div className='v10-cadence-step'>
            <div className='v10-cadence-days'>15<sup>Days</sup></div>
            <h4>Specify &amp; Validate</h4>
            <p>
              System specification generated. Data foundations validated. Working system shipped
              and tested with real users in your environment.
            </p>
            <div className='outcome'>Validated MVP in production</div>
          </div>
          <div className='v10-cadence-step'>
            <div className='v10-cadence-days'>90<sup>Days</sup></div>
            <h4>Industrialise &amp; Scale</h4>
            <p>
              Enterprise-grade system live. Agents deployed. Data democratised. Operations handed
              to the team that built it.
            </p>
            <div className='outcome'>Frontier Organisation operational</div>
          </div>
        </div>
        <div className='v10-cadence-foot'>
          † Timelines are benchmarks based on 50+ enterprise engagements. Scope varies by
          environment.
        </div>
      </section>

      {/* ====== WHY DBIZ ====== */}
      <section className='v10-section v10-container' id='about'>
        <div className='v10-section-head'>
          <div>
            <div className='v10-kicker'>SEC·E1 · Why DBiz</div>
            <h2 className='v10-h2'>
              Why enterprises <em>choose DBiz.</em>
            </h2>
          </div>
        </div>

        <div className='v10-why-grid'>
          <div className='v10-why-item'>
            <h4>Expertise that works together.</h4>
            <p>
              Strategy, cloud, data, platforms, product, design, operations — our teams work
              across every layer, not within silos. Your transformation is shaped by people who
              understand the full picture, not just their corner of it.
            </p>
          </div>
          <div className='v10-why-item'>
            <h4>Transformation at scale.</h4>
            <p>
              50+ enterprise clients. 150+ AI solutions. Six countries. Over a decade of enterprise
              delivery — not a pitch deck.
            </p>
          </div>
          <div className='v10-why-item'>
            <h4>Time-boxed delivery. Every engagement.</h4>
            <p>
              Outcomes within defined timeframes. Ambiguity is the enemy of delivery — so we
              don&rsquo;t allow it.
            </p>
          </div>
          <div className='v10-why-item'>
            <h4>Production platforms. Not presentations.</h4>
            <p>
              NEXUS, Agent Studio, FactWeavers™, DBiz Canvas — production systems deployed in
              enterprise environments. We recommend what we&rsquo;ve already built.
            </p>
          </div>
          <div className='v10-why-item v10-cell-empty' aria-hidden='true' />
          <div className='v10-why-item v10-cell-empty' aria-hidden='true' />
        </div>

        <div className='v10-partners-row'>
          <div className='v10-partners-col'>
            <h5>Enterprise Partnerships</h5>
            <p>Certified at the highest tiers with the industry&rsquo;s leading technology providers.</p>
            <div className='list'>
              AWS Advanced<span className='sep'>·</span>Azure Solutions<span className='sep'>·</span>Salesforce
              <span className='sep'>·</span>Dynamics 365<span className='sep'>·</span>Snowflake
              <span className='sep'>·</span>Databricks<span className='sep'>·</span>Anthropic
              <span className='sep'>·</span>Boomi<span className='sep'>·</span>MuleSoft
            </div>
          </div>
          <div className='v10-partners-col'>
            <h5>Domain Depth</h5>
            <p>Deep sector expertise shaped by 150+ enterprise engagements.</p>
            <div className='list'>
              Financial Services<span className='sep'>·</span>Logistics &amp; Fleet
              <span className='sep'>·</span>Real Estate<span className='sep'>·</span>Aged Care
              <span className='sep'>·</span>Automotive<span className='sep'>·</span>Government
              <span className='sep'>·</span>Retail<span className='sep'>·</span>Construction
              <span className='sep'>·</span>Manufacturing
            </div>
          </div>
          <div className='v10-partners-col v10-cell-empty' aria-hidden='true' />
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section className='v10-final' id='contact'>
        <div className='v10-container'>
          <h2>
            Your Frontier Organisation <em>starts with a conversation.</em>
          </h2>
          <p>One partner · Full stack · No handoff</p>
          <div className='v10-final-ctas'>
            <a href='#contact' className='v10-btn'>
              Contact us →
            </a>
            <a href='#contact' className='v10-link'>
              Or get an architecture assessment
            </a>
          </div>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className='v10-footer' id='careers'>
        <div className='v10-container'>
          <div className='v10-foot-top'>
            <div className='v10-foot-brand'>
              <div className='v10-logo'>
                dbiz<em>.ai</em>
              </div>
              <p>Human-Led · Agent-Operated · Data-Powered</p>
              <div className='meta'>10 offices · 6 countries · 800+ people</div>
            </div>
            <div className='v10-foot-col'>
              <h6>Company</h6>
              <a href='#about'>About Us</a>
              <a href='#work'>Our Work</a>
              <a href='#careers'>Careers</a>
              <a href='#contact'>Contact Us</a>
              <a href='#'>Blog</a>
            </div>
            <div className='v10-foot-col'>
              <h6>Solutions</h6>
              <a href='#'>Strategy &amp; Architecture</a>
              <a href='#'>Cloud</a>
              <a href='#'>Data &amp; AI</a>
              <a href='#'>Business Apps &amp; Integration</a>
              <a href='#'>Product &amp; Experience</a>
              <a href='#'>Managed Services</a>
            </div>
            <div className='v10-foot-col'>
              <h6>Partners</h6>
              <a href='#'>AWS</a>
              <a href='#'>Microsoft Azure</a>
              <a href='#'>Salesforce</a>
              <a href='#'>Snowflake</a>
              <a href='#'>Databricks</a>
              <a href='#'>Boomi</a>
              <a href='#'>Anthropic</a>
            </div>
          </div>
          <div className='v10-foot-ack'>
            We acknowledge the Traditional Custodians of the lands on which we work and live, and
            pay our respects to Elders past, present, and emerging.
          </div>
          <div className='v10-foot-bottom'>
            <div>© 2026 DBiz.ai — <span className='k'>END · SHEET 01</span></div>
            <div>Privacy · Legal · Terms · Modern Slavery Statement</div>
          </div>
        </div>
      </footer>
    </>
  )
}
