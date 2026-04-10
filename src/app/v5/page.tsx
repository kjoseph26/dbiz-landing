const capabilities = [
  {
    num: '01',
    kicker: 'Start here',
    title: 'Strategy & Architecture',
    sub: 'Futures Studio · TechOffice Foundry',
    body: 'Your business priorities become an AI and technology roadmap. Use case prioritisation, readiness assessment, architecture blueprint, data governance and security posture.',
  },
  {
    num: '02',
    kicker: 'Cloud',
    title: 'AI-Ready Infrastructure',
    sub: 'Multi-hyperscaler · Purpose-built',
    body: 'Cloud built for AI workloads, not retrofitted for them. Environments for agents, data pipelines, and AI models — with governance, cost controls, and observability enterprise IT requires.',
  },
  {
    num: '03',
    kicker: 'Data & AI',
    title: 'The Intelligence Layer',
    sub: 'FactWeavers™ · Domain Data Cloud',
    body: 'Every AI initiative stalls on the same thing: the data isn\u2019t ready. FactWeavers\u2122 cleans, unifies, and activates enterprise data — pre-modelled for your industry, ready for agents from day one.',
  },
  {
    num: '04',
    kicker: 'Business Apps & Integration',
    title: 'Connected Systems, Not Silos',
    sub: 'No rip and replace',
    body: 'CRM, ERP, and platform investments don\u2019t need replacing — they need unlocking. We connect existing systems so AI agents can read, write, and act across your entire application landscape.',
  },
  {
    num: '05',
    kicker: 'Product & Experience',
    title: 'What People Actually Use',
    sub: 'AI-native · Perpetual Engineering',
    body: 'AI-native applications, digital twins, and next-gen experiences that evolve with the business. Designed for the new interaction patterns between humans and agents.',
  },
  {
    num: '06',
    kicker: 'Managed Services',
    title: 'AI-First Operations',
    sub: 'The team that built it runs it',
    body: 'AI-first monitoring, governance, and continuous improvement across your entire stack. Not a support contract from a team that\u2019s never seen the architecture.',
  },
  {
    num: '07',
    kicker: 'Governance',
    title: 'Security & AI Risk',
    sub: 'Built in, not bolted on',
    body: 'Data sovereignty, AI governance frameworks, hallucination risk management, model drift monitoring, and compliance-ready architecture — embedded into every layer from day one.',
  },
]

const stackLayers = [
  {
    coord: 'L·01',
    label: 'Strategy',
    items: [
      {
        head: 'Futures Studio',
        text: 'AI ambition, roadmap & use case prioritisation aligned to measurable business values',
      },
    ],
  },
  {
    coord: 'L·02',
    label: 'Architecture',
    items: [
      {
        head: 'TechOffice Foundry',
        text: 'AI architecture foundation, governance & standards, Well-Architected review with AI-pillars',
      },
    ],
  },
  {
    coord: 'L·03',
    label: 'Cloud',
    items: [
      {
        head: 'Multi-Cloud AI Foundation',
        text: 'AWS · Azure · GCP — deploy on the right cloud for each workload',
      },
      { head: 'DBiz Canvas', text: 'Concept to code in days' },
    ],
  },
  {
    coord: 'L·04',
    label: 'Development',
    items: [
      { head: 'Nexus Platform', text: 'Enterprise AI dev environment' },
      { head: 'Perpetual Engineering', text: 'AI agents across the full SDLC' },
    ],
  },
  {
    coord: 'L·05',
    label: 'Productivity',
    items: [
      { head: 'Claude Cowork & Copilot', text: 'AI-automation for every role' },
      {
        head: 'AI-Infused BizApps',
        text: 'Autonomous agents for business execution with SaaS platforms',
      },
    ],
  },
  {
    coord: 'L·06',
    label: 'Orchestration',
    items: [
      { head: 'Agent Studio', text: 'Agentic AI and multi-agent orchestration' },
      {
        head: 'Nexus iConnector',
        text: 'MCP connectors via Boomi, MuleSoft, Workato — no rip & replace',
      },
    ],
  },
  {
    coord: 'L·07',
    label: 'Data & Insights',
    items: [
      {
        head: 'FactWeavers.ai',
        text: 'Data democratisation & quick insights with domain data cloud',
      },
      { head: 'DBiz Compass', text: 'AI-infused data engineering' },
    ],
  },
]

const industries = [
  {
    metric: '38% FASTER',
    name: 'Financial Services',
    title: 'Credit decisioning in hours, not weeks',
    body: 'Agent-driven risk models cut underwriting cycle time for a tier-1 lender across retail, SME, and corporate books.',
  },
  {
    metric: '$14M SAVED',
    name: 'Logistics & Fleet',
    title: 'Dispatch, rewritten nightly',
    body: 'A national fleet operator replaced static route planning with agentic scheduling across 12,000 vehicles.',
  },
  {
    metric: '6× THROUGHPUT',
    name: 'Aged Care',
    title: 'Clinical documentation, automated',
    body: 'Care teams reclaimed hours per shift with voice-to-record agents compliant with regional reporting standards.',
  },
]

const solutions = [
  {
    metric: '11 DOMAINS',
    name: 'FactWeavers\u2122',
    title: 'Industry-ready data cloud',
    body: 'Pre-modelled data products shipped without a six-month clean-up phase.',
  },
  {
    metric: '40+ AGENTS',
    name: 'Agent Studio',
    title: 'Multi-agent orchestration at scale',
    body: 'Cross-system agents running order-to-cash for a Fortune 500 manufacturer.',
  },
  {
    metric: '5 DAYS',
    name: 'DBiz Canvas',
    title: 'Concept to working build',
    body: 'Product teams move from brief to production code inside a single sprint.',
  },
]

const tech = [
  {
    cat: 'Cloud & AI',
    list: 'AWS (Advanced) · Azure (Solutions) · GCP',
    note: '40+ AWS certified experts',
  },
  {
    cat: 'Data Platforms',
    list: 'Snowflake · Databricks · Fabric · BigQuery',
    note: 'FactWeavers\u2122 built on top',
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

const phases = [
  {
    days: '5',
    unit: 'DAYS',
    title: 'Align & Assess',
    body: 'Leadership aligned on AI ambition. Architecture assessed. Readiness gaps surfaced. A costed roadmap and evidence to make investment decisions.',
    outcome: 'Board-aligned AI roadmap',
  },
  {
    days: '15',
    unit: 'DAYS',
    title: 'Specify & Validate',
    body: 'System specification generated. Data foundations validated. Working system shipped and tested with real users in your environment.',
    outcome: 'Validated MVP in production',
  },
  {
    days: '90',
    unit: 'DAYS',
    title: 'Industrialise & Scale',
    body: 'Enterprise-grade system live. Agents deployed. Data democratised. Operations handed to the team that built it.',
    outcome: 'Frontier Organisation operational',
  },
]

const whys = [
  {
    coord: '[W·01]',
    title: 'Expertise that works together.',
    body: 'Strategy, cloud, data, platforms, product, design, operations — our teams work across every layer, not within silos. Your transformation is shaped by people who understand the full picture, not just their corner of it.',
  },
  {
    coord: '[W·02]',
    title: 'Transformation at scale.',
    body: '50+ enterprise clients. 150+ AI solutions. Six countries. Over a decade of enterprise delivery — not a pitch deck.',
  },
  {
    coord: '[W·03]',
    title: 'Time-boxed delivery. Every engagement.',
    body: 'Outcomes within defined timeframes. Ambiguity is the enemy of delivery — so we don\u2019t allow it.',
  },
  {
    coord: '[W·04]',
    title: 'Production platforms. Not presentations.',
    body: 'NEXUS, Agent Studio, FactWeavers\u2122, DBiz Canvas — production systems deployed in enterprise environments. We recommend what we\u2019ve already built.',
  },
]

const trust = [
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
  { coord: '[A·01]', val: '10+', lbl: 'Years enterprise delivery' },
  { coord: '[A·02]', val: '50+', lbl: 'Enterprise clients' },
  { coord: '[A·03]', val: '150+', lbl: 'AI solutions in production' },
  { coord: '[A·04]', val: '11', lbl: 'Industries' },
  { coord: '[A·05]', val: '6', lbl: 'Countries' },
]

function HeroDiagram() {
  const layers = [
    { label: 'STRATEGY', code: 'S·01' },
    { label: 'ARCHITECTURE', code: 'S·02' },
    { label: 'CLOUD', code: 'S·03' },
    { label: 'DATA', code: 'S·04' },
    { label: 'APPS', code: 'S·05' },
    { label: 'AGENTS', code: 'S·06' },
    { label: 'OPS', code: 'S·07' },
  ]
  return (
    <svg viewBox='0 0 520 560' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
      <defs>
        <pattern id='v5-hatch' patternUnits='userSpaceOnUse' width='6' height='6' patternTransform='rotate(45)'>
          <line x1='0' y1='0' x2='0' y2='6' stroke='rgba(232,106,42,0.35)' strokeWidth='1' />
        </pattern>
        <pattern id='v5-dot' patternUnits='userSpaceOnUse' width='10' height='10'>
          <circle cx='1' cy='1' r='0.8' fill='rgba(255,255,255,0.22)' />
        </pattern>
      </defs>

      {/* frame rule marks */}
      <g stroke='rgba(255,255,255,0.25)' strokeWidth='0.6'>
        <line x1='20' y1='20' x2='40' y2='20' />
        <line x1='20' y1='20' x2='20' y2='40' />
        <line x1='500' y1='20' x2='480' y2='20' />
        <line x1='500' y1='20' x2='500' y2='40' />
        <line x1='20' y1='540' x2='40' y2='540' />
        <line x1='20' y1='540' x2='20' y2='520' />
        <line x1='500' y1='540' x2='480' y2='540' />
        <line x1='500' y1='540' x2='500' y2='520' />
      </g>

      {/* ruler ticks left */}
      <g stroke='rgba(255,255,255,0.25)' strokeWidth='0.6'>
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={i} x1='40' y1={60 + i * 32} x2={i % 2 === 0 ? 48 : 44} y2={60 + i * 32} />
        ))}
      </g>

      {/* background dot fill */}
      <rect x='60' y='60' width='400' height='440' fill='url(#v5-dot)' opacity='0.4' />

      {/* 7 isometric stacked layers */}
      {layers.map((layer, i) => {
        const y = 90 + i * 56
        const skew = 26
        return (
          <g key={layer.code}>
            {/* top face */}
            <polygon
              points={`${140},${y} ${360},${y} ${360 + skew},${y - 14} ${140 + skew},${y - 14}`}
              fill='none'
              stroke='rgba(232,106,42,0.6)'
              strokeWidth='1'
            />
            {/* front face */}
            <rect
              x='140'
              y={y}
              width='220'
              height='32'
              fill={i === 3 ? 'url(#v5-hatch)' : 'rgba(232,106,42,0.04)'}
              stroke='rgba(232,106,42,0.6)'
              strokeWidth='1'
            />
            {/* right face */}
            <polygon
              points={`${360},${y} ${360 + skew},${y - 14} ${360 + skew},${y + 18} ${360},${y + 32}`}
              fill='rgba(255,255,255,0.02)'
              stroke='rgba(232,106,42,0.6)'
              strokeWidth='1'
            />
            {/* label on front face */}
            <text
              x='156'
              y={y + 20}
              fontFamily='var(--font-mono)'
              fontSize='10'
              letterSpacing='1.5'
              fill='#ffffff'
            >
              {layer.label}
            </text>
            {/* callout */}
            <line
              x1={360 + skew}
              y1={y + 8}
              x2='450'
              y2={y + 8}
              stroke='rgba(232,106,42,0.65)'
              strokeWidth='0.8'
              strokeDasharray='2 2'
            />
            <circle cx={360 + skew} cy={y + 8} r='1.6' fill='#e86a2a' />
            <text
              x='454'
              y={y + 11}
              fontFamily='var(--font-mono)'
              fontSize='8.5'
              letterSpacing='1'
              fill='#e86a2a'
            >
              {layer.code}
            </text>
          </g>
        )
      })}

      {/* vertical spine dimension line */}
      <g stroke='rgba(232,106,42,0.55)' strokeWidth='0.8'>
        <line x1='96' y1='76' x2='96' y2='484' />
        <line x1='92' y1='76' x2='100' y2='76' />
        <line x1='92' y1='484' x2='100' y2='484' />
      </g>
      <text
        x='80'
        y='284'
        fontFamily='var(--font-mono)'
        fontSize='8.5'
        letterSpacing='1.5'
        fill='#e86a2a'
        transform='rotate(-90 80 284)'
      >
        FRONTIER ORG · STACK
      </text>

      {/* bottom dimension */}
      <g stroke='rgba(255,255,255,0.3)' strokeWidth='0.6'>
        <line x1='140' y1='520' x2='360' y2='520' />
        <line x1='140' y1='516' x2='140' y2='524' />
        <line x1='360' y1='516' x2='360' y2='524' />
      </g>
      <text
        x='250'
        y='534'
        fontFamily='var(--font-mono)'
        fontSize='8'
        letterSpacing='1.5'
        fill='rgba(255,255,255,0.5)'
        textAnchor='middle'
      >
        DIM: 7 × LAYER
      </text>
    </svg>
  )
}

export default function V5Page() {
  return (
    <>
      {/* NAV */}
      <nav className='v5-nav'>
        <div className='v5-logo'>
          dbiz<span className='dot'>.</span>
          <span className='suffix'>ai</span>
        </div>
        <ul className='v5-nav-links'>
          <li>
            <a href='#solutions'>Our Solutions</a>
          </li>
          <li>
            <a href='#work'>Our Work</a>
          </li>
          <li>
            <a href='#about'>About Us</a>
          </li>
          <li>
            <a href='#careers'>Careers</a>
          </li>
        </ul>
        <a href='#contact' className='v5-nav-cta'>
          Get an assessment
        </a>
      </nav>

      {/* HERO */}
      <section className='v5-hero'>
        <div className='v5-container'>
          <div className='v5-hero-grid'>
            <div>
              <div className='v5-eyebrow'>
                <span className='bar' />
                Human-Led | Agent-Operated | Data-Powered
              </div>
              <h1>
                Your enterprise. <span className='annotated'>Agent-operated.</span> Starting now.
              </h1>
              <p className='v5-hero-sub'>
                Most enterprises have tried AI. Most of it didn&rsquo;t scale — not because the
                technology failed, but because no one connected the ambition to what actually got
                built. We close that gap. We call the result a Frontier Organisation:
                human-led, agent-operated, data-powered.
              </p>
              <div className='v5-hero-ctas'>
                <a href='#contact' className='v5-btn'>
                  Get an architecture assessment →
                </a>
                <a href='#contact' className='v5-btn-ghost'>
                  Or talk to our team
                </a>
              </div>
            </div>

            <div className='v5-hero-diagram'>
              <div className='v5-hero-diagram-label'>
                <span>DWG · FRONTIER-ORG-01</span>
                <span>REV.01</span>
              </div>
              <HeroDiagram />
              <div className='v5-hero-diagram-foot'>
                <span>SCALE 1:1</span>
                <span>SHEET A1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className='v5-trust'>
        <div className='v5-container'>
          <div className='v5-trust-head'>
            <span className='v5-trust-label'>[T·01] Trusted by 50+ enterprises · 6 countries</span>
            <span className='line' />
            <span className='v5-trust-label'>PARTNERS · CERTIFIED</span>
          </div>
          <div className='v5-trust-roster'>
            {trust.map((name, i) => (
              <span key={name}>
                {name}
                {i < trust.length - 1 && <span className='sep'>·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className='v5-stats'>
        <div className='v5-container'>
          <div className='v5-stats-grid'>
            {stats.map((s) => (
              <div key={s.coord} className='v5-stat'>
                <span className='coord'>{s.coord}</span>
                <div className='val'>{s.val}</div>
                <div className='lbl'>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI GAP / CAPABILITIES */}
      <section className='v5-section' id='solutions'>
        <div className='v5-container'>
          <div className='v5-section-head'>
            <div className='v5-kicker'>[B·01] Capabilities</div>
            <h2>
              The AI gap every enterprise hits. <em>And how we close it.</em>
            </h2>
            <p className='lead'>
              We translate your priorities into an AI and technology roadmap. Then deliver
              against it — across every layer, with industry-leading partners at each step.
              Engage us for one capability or the full transformation.
            </p>
          </div>

          <div className='v5-caps-grid'>
            {capabilities.map((cap) => (
              <div key={cap.num} className='v5-cap'>
                <div className='num'>
                  {cap.num} · {cap.kicker}
                </div>
                <h3>{cap.title}</h3>
                <div className='sub'>{cap.sub}</div>
                <p>{cap.body}</p>
              </div>
            ))}
          </div>

          <div className='v5-caps-badge'>▲ The Frontier Organisation</div>
        </div>
      </section>

      {/* STACK DIAGRAM */}
      <section className='v5-section'>
        <div className='v5-container'>
          <div className='v5-section-head'>
            <div className='v5-kicker'>[C·01] Schematic</div>
            <h2>
              DBiz AI Transformation Stack. <em>No capability gaps. No vendor lock-in.</em>
            </h2>
          </div>

          <div className='v5-stack-frame'>
            <div className='v5-stack-meta'>
              <span>DWG · STACK-ARCH</span>
              <span>SHEET 02 / 04</span>
              <span>SCALE 1:1</span>
              <span>REV.01</span>
            </div>
            {stackLayers.map((layer) => (
              <div key={layer.coord} className='v5-stack-layer'>
                <div className='coord'>{layer.coord}</div>
                <div className='label'>{layer.label}</div>
                <div className='desc-group'>
                  {layer.items.map((it) => (
                    <div key={it.head} className='desc'>
                      <b>{it.head}</b>
                      {it.text}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVEN */}
      <section className='v5-section' id='work'>
        <div className='v5-container'>
          <div className='v5-section-head'>
            <div className='v5-kicker'>[D·01] Proof of delivery</div>
            <h2>
              Proven <em>where it matters.</em>
            </h2>
            <p className='lead'>50+ enterprise deployments across 11 industries.</p>
          </div>

          <div className='v5-proven-group'>
            <div className='v5-proven-head'>
              <span className='title'>By Industry</span>
              <span className='rule' />
              <span className='sig'>[D·02]</span>
            </div>
            <div className='v5-proven-grid'>
              {industries.map((c) => (
                <div key={c.name} className='v5-proven-card'>
                  <span className='metric'>{c.metric}</span>
                  <span className='name'>{c.name}</span>
                  <h4>{c.title}</h4>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='v5-proven-group'>
            <div className='v5-proven-head'>
              <span className='title'>By Solution</span>
              <span className='rule' />
              <span className='sig'>[D·03]</span>
            </div>
            <div className='v5-proven-grid'>
              {solutions.map((c) => (
                <div key={c.name} className='v5-proven-card'>
                  <span className='metric'>{c.metric}</span>
                  <span className='name'>{c.name}</span>
                  <h4>{c.title}</h4>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='v5-proven-group'>
            <div className='v5-proven-head'>
              <span className='title'>By Technology</span>
              <span className='rule' />
              <span className='sig'>[D·04]</span>
            </div>
            <div className='v5-tech-grid'>
              {tech.map((t) => (
                <div key={t.cat} className='v5-tech-cell'>
                  <span className='cat'>{t.cat}</span>
                  <div className='list'>{t.list}</div>
                  <span className='note'>{t.note}</span>
                </div>
              ))}
            </div>
            <div className='v5-ai-bar'>
              <span className='tag'>AI Models</span>
              <div className='models'>
                Claude · GPT · Gemini · Bedrock · Azure OpenAI · Vertex AI
              </div>
              <div className='desc'>
                Multi-model by design — agents run on the best model for each task.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className='v5-testimonial'>
        <div className='v5-container'>
          <div className='v5-quote-frame'>
            <div className='v5-quote-meta'>
              <span>[E·01] TESTIMONY</span>
              <span>SOUTHERN CROSS LOGISTICS</span>
            </div>
            <blockquote>
              DBiz didn&rsquo;t sell us a roadmap. They delivered one — with the system live in
              production while the rest of the market was still running POCs.
            </blockquote>
            <div className='v5-quote-attr'>
              — <b>Priya Nair</b> · Chief Data &amp; AI Officer · Southern Cross Logistics
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className='v5-section'>
        <div className='v5-container'>
          <div className='v5-section-head'>
            <div className='v5-kicker'>[F·01] Cadence</div>
            <h2>
              How we work. <em>Built for pace, not paperwork.</em>
            </h2>
            <p className='lead'>
              Every engagement is time-boxed. Milestones are fixed. Ambiguity gets eliminated
              early.
            </p>
          </div>

          <div className='v5-phases'>
            {phases.map((p) => (
              <div key={p.days} className='v5-phase'>
                <div className='marker' />
                <div className='days'>
                  {p.days}
                  <small>{p.unit}</small>
                </div>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
                <div className='outcome'>→ {p.outcome}</div>
              </div>
            ))}
          </div>
          <div className='v5-phases-note'>
            NOTE · Timelines are benchmarks based on 50+ enterprise engagements. Scope varies by
            environment.
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className='v5-section' id='about'>
        <div className='v5-container'>
          <div className='v5-section-head'>
            <div className='v5-kicker'>[G·01] Rationale</div>
            <h2>
              Why enterprises <em>choose DBiz.</em>
            </h2>
          </div>

          <div className='v5-why-grid'>
            {whys.map((w) => (
              <div key={w.coord} className='v5-why'>
                <span className='coord'>{w.coord}</span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </div>
            ))}
          </div>

          <div className='v5-partners'>
            <div className='v5-partner-block'>
              <span className='cat'>[G·05] Enterprise Partnerships</span>
              <p className='desc'>
                Certified at the highest tiers with the industry&rsquo;s leading technology
                providers.
              </p>
              <div className='list'>
                AWS Advanced <span className='sep'>·</span> Azure Solutions{' '}
                <span className='sep'>·</span> Salesforce <span className='sep'>·</span> Dynamics
                365 <span className='sep'>·</span> Snowflake <span className='sep'>·</span>{' '}
                Databricks <span className='sep'>·</span> Anthropic <span className='sep'>·</span>{' '}
                Boomi <span className='sep'>·</span> MuleSoft
              </div>
            </div>
            <div className='v5-partner-block'>
              <span className='cat'>[G·06] Domain Depth</span>
              <p className='desc'>
                Deep sector expertise shaped by 150+ enterprise engagements.
              </p>
              <div className='list'>
                Financial Services <span className='sep'>·</span> Logistics &amp; Fleet{' '}
                <span className='sep'>·</span> Real Estate <span className='sep'>·</span> Aged
                Care <span className='sep'>·</span> Automotive <span className='sep'>·</span>{' '}
                Government <span className='sep'>·</span> Retail <span className='sep'>·</span>{' '}
                Construction <span className='sep'>·</span> Manufacturing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className='v5-final' id='contact'>
        <span className='v5-final-corner tl' />
        <span className='v5-final-corner tr' />
        <span className='v5-final-corner bl' />
        <span className='v5-final-corner br' />
        <div className='v5-container'>
          <div className='v5-final-meta'>[Z·01] NEXT STEP</div>
          <h2>
            Your Frontier Organisation starts with a <em>conversation.</em>
          </h2>
          <p>One partner. Full stack. No handoff.</p>
          <div className='v5-final-ctas'>
            <a href='#' className='v5-btn'>
              Contact us →
            </a>
            <a href='#' className='v5-btn-ghost'>
              Or get an architecture assessment
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className='v5-footer' id='careers'>
        <div className='v5-container'>
          <div className='v5-foot-top'>
            <div className='v5-foot-brand'>
              <div className='v5-logo'>
                dbiz<span className='dot'>.</span>
                <span className='suffix'>ai</span>
              </div>
              <p className='tag'>
                <b>Human-Led | Agent-Operated | Data-Powered</b>
                <br />
                10 offices · 6 countries · 800+ people
              </p>
            </div>
            <div className='v5-foot-col'>
              <h5>Company</h5>
              <a href='#'>About Us</a>
              <a href='#'>Our Work</a>
              <a href='#'>Careers</a>
              <a href='#'>Contact Us</a>
              <a href='#'>Blog</a>
            </div>
            <div className='v5-foot-col'>
              <h5>Solutions</h5>
              <a href='#'>Strategy & Architecture</a>
              <a href='#'>Cloud</a>
              <a href='#'>Data & AI</a>
              <a href='#'>Business Apps & Integration</a>
              <a href='#'>Product & Experience</a>
              <a href='#'>Managed Services</a>
            </div>
            <div className='v5-foot-col'>
              <h5>Partners</h5>
              <a href='#'>AWS</a>
              <a href='#'>Microsoft Azure</a>
              <a href='#'>Salesforce</a>
              <a href='#'>Snowflake</a>
              <a href='#'>Databricks</a>
              <a href='#'>Boomi</a>
              <a href='#'>Anthropic</a>
            </div>
          </div>
          <div className='v5-foot-legal'>
            <div className='links'>
              <a href='#'>Privacy Policy</a>
              <a href='#'>Legal</a>
              <a href='#'>Terms of Use</a>
              <a href='#'>Modern Slavery Statement</a>
            </div>
            <div>© 2026 DBiz.ai. All rights reserved.</div>
          </div>
          <p className='v5-foot-acknowledge'>
            We acknowledge the Traditional Custodians of the lands on which we work and live,
            and pay our respects to Elders past, present, and emerging.
          </p>
        </div>
      </footer>
    </>
  )
}
