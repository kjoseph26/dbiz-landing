import Link from 'next/link'
import { Icon } from '@/components/icon'

type Swatch = {
  name: string
  varName: string
  value: string
  desc: string
  marker: string
  ink?: 'dark' | 'light'
}

const colorSwatches: Swatch[] = [
  { marker: 'C·01', name: 'Navy', varName: '--brand-navy', value: '#0D1B3E', desc: 'Primary anchor', ink: 'light' },
  { marker: 'C·02', name: 'Navy Deep', varName: '--brand-navy-deep', value: '#070F22', desc: 'Paper, CTA bg', ink: 'light' },
  { marker: 'C·03', name: 'Navy Light', varName: '--brand-navy-light', value: '#1A2D5A', desc: 'Hover, secondary', ink: 'light' },
  { marker: 'C·04', name: 'Orange', varName: '--brand-orange', value: '#E86A2A', desc: 'Accent, every CTA', ink: 'light' },
  { marker: 'C·05', name: 'Orange Hover', varName: '--brand-orange-hover', value: '#D45A1A', desc: 'Button hover state', ink: 'light' },
  { marker: 'C·06', name: 'Orange Glow', varName: '--brand-orange-glow', value: 'rgba(232,106,42,0.1)', desc: 'Soft fill, badges' },
  { marker: 'C·07', name: 'Paper', varName: '--brand-bg', value: '#FAFAFA', desc: 'Page background', ink: 'dark' },
  { marker: 'C·08', name: 'Card', varName: '--brand-bg-card', value: '#FFFFFF', desc: 'Elevated surface', ink: 'dark' },
  { marker: 'C·09', name: 'Warm', varName: '--brand-bg-warm', value: '#F3F0EC', desc: 'Editorial surface', ink: 'dark' },
]

const iconNames = [
  'ph:circuitry-bold',
  'ph:radical-bold',
  'ph:stack-bold',
  'ph:graph-bold',
  'ph:compass-tool-bold',
  'ph:arrows-out-cardinal-bold',
  'ph:lightning-bold',
  'ph:target-bold',
  'ph:cube-bold',
  'ph:hexagon-bold',
  'ph:path-bold',
  'ph:plugs-connected-bold',
]

const motifs = [
  { n: 'M·01', t: 'Dotted grid', d: 'Radial dot matrix at 24px pitch. Two faint hairline grids at 240px. The paper of a working document.' },
  { n: 'M·02', t: 'Angle-bracket corners', d: 'Every major frame wears a small orange L at top-left and bottom-right. Tick marks that say: this is measured.' },
  { n: 'M·03', t: 'Hairline rules', d: '1px lines in white/10 or orange/28. Dashed where a boundary is provisional. Solid where a section ends.' },
  { n: 'M·04', t: 'Sharp corners', d: 'No radii. Every box is a rectangle. Radius is reserved for the pill CTA in light variants — not here.' },
  { n: 'M·05', t: 'Mono annotations', d: 'DM Mono at 0.58–0.72rem, tracking 0.1–0.14em, uppercase. Coordinates, sheet numbers, ticket codes.' },
  { n: 'M·06', t: 'Hatched lines', d: 'Repeating 45° stripes stand in for fills. Used for dividers and redacted regions.' },
]

export default function BlueprintStyleguide() {
  return (
    <main>
      {/* top meta strip */}
      <div className='bp-container' style={{ paddingTop: 16 }}>
        <div className='bp-meta'>
          <span>DBiz · SG · Blueprint</span>
          <span>Rev <span className='k'>2026-04-15</span> · Sheet <span className='k'>01/01</span></span>
          <span>Scale <span className='k'>1 : 1</span></span>
        </div>
      </div>

      {/* header */}
      <header className='bp-header'>
        <div className='bp-container'>
          <Link href='/' className='bp-back'>← Index</Link>
          <div style={{ marginTop: 32 }}>
            <span className='bp-eyebrow'>
              <span className='bar' />
              Styleguide · Blueprint · Ethos
            </span>
          </div>
          <h1 className='bp-title'>
            The working drawing <em>of a brand.</em>
          </h1>
          <p className='bp-lede'>
            Navy paper. Orange hairlines. DM Mono coordinates. Sharp corners, angle-bracket frames, and
            hatched dividers. Every element is labelled, measured, and dated — because the product we
            ship is precision work, not marketing paint.
          </p>
        </div>
      </header>

      {/* 01 — Color */}
      <section className='bp-section'>
        <div className='bp-container'>
          <div className='bp-section-head'>
            <div className='bp-kicker'>01 · Color</div>
            <h2>Navy anchors. <em>Orange ignites.</em></h2>
            <p className='lead'>
              Navy is the institutional voice — authority, depth. Orange is the spark — action,
              every CTA. Nine tokens do the whole job.
            </p>
          </div>

          <div className='bp-swatch-grid'>
            {colorSwatches.map((s) => (
              <div className='bp-swatch' key={s.varName}>
                <span className='bp-marker marker'>{s.marker}</span>
                <div
                  className='chip'
                  style={{
                    background: `var(${s.varName})`,
                    borderBottom: s.ink === 'dark' ? '1px solid var(--bp-hair)' : undefined,
                  }}
                />
                <div className='meta'>
                  <div className='name'>{s.name}</div>
                  <div className='var'>var({s.varName}) · {s.value}</div>
                  <div className='desc'>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — Typography */}
      <section className='bp-section'>
        <div className='bp-container'>
          <div className='bp-section-head'>
            <div className='bp-kicker'>02 · Typography</div>
            <h2>DM Sans is the voice. <em>Mono is the margin.</em></h2>
            <p className='lead'>
              Sans for every surface. Mono for every annotation. Serif italic for a single word per
              section — reserved, never repeated.
            </p>
          </div>

          <div className='bp-type'>
            {[
              { m: 'T·01', spec: 'Display\nDM Sans 800\nclamp(2.2rem, 4.6vw, 4rem)\ntracking -0.04em', cls: 'size-display', body: <>Your enterprise. <em>Agent-operated.</em></> },
              { m: 'T·02', spec: 'H2\nDM Sans 800\nclamp(1.6rem, 2.8vw, 2.4rem)\ntracking -0.03em', cls: 'size-h2', body: 'Proven where it matters.' },
              { m: 'T·03', spec: 'H3\nDM Sans 700\n1.35rem\ntracking -0.02em', cls: 'size-h3', body: 'AI-Ready Infrastructure' },
              { m: 'T·04', spec: 'Body\nDM Sans 400\n1.02rem / 1.65\ntracking 0', cls: 'size-body', body: 'Most enterprises have tried AI. Most of it didn\u2019t scale — not because the technology failed, but because no one connected ambition to what actually got built.' },
              { m: 'T·05', spec: 'Label\nDM Mono 500\n0.76rem\ntracking 0.14em', cls: 'size-label', body: 'Human-Led · Agent-Operated · Data-Powered' },
              { m: 'T·06', spec: 'Caption\nDM Mono 400\n0.68rem\ntracking 0.1em', cls: 'size-caption', body: 'FIG 02 · Typographic ladder · Rev 2026-04-15' },
            ].map((row) => (
              <div className='bp-type-row' key={row.m}>
                <div className='marker-col'>
                  <span className='bp-marker'>{row.m}</span>
                </div>
                <div className='spec' style={{ whiteSpace: 'pre-line' }}>{row.spec}</div>
                <div className={`sample ${row.cls}`}>{row.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Actions */}
      <section className='bp-section'>
        <div className='bp-container'>
          <div className='bp-section-head'>
            <div className='bp-kicker'>03 · Actions</div>
            <h2>Buttons wear their <em>corners.</em></h2>
            <p className='lead'>
              Filled, ghost, text. Every button has 6–8px tick marks at top-left and bottom-right. They read
              as instruments, not bubbles.
            </p>
          </div>

          <div className='bp-lab'>
            <div className='bp-lab-label'>
              <span className='n'>A·01</span>
              <span className='t'>Primary</span>
              <span className='d'>Solid orange fill. White tick marks. For any real commit.</span>
            </div>
            <div className='bp-lab-row'>
              <button className='bp-btn'>
                Get started <Icon icon='ph:arrow-right-bold' width={14} />
              </button>
              <button className='bp-btn'>Deploy build</button>
              <span className='bp-mono' style={{ marginLeft: 'auto' }}>13·22 · mono 0.72</span>
            </div>

            <div className='bp-lab-label'>
              <span className='n'>A·02</span>
              <span className='t'>Ghost</span>
              <span className='d'>Transparent. Orange hairline. For secondary routes, nav, tertiary CTAs.</span>
            </div>
            <div className='bp-lab-row'>
              <button className='bp-btn-ghost'>
                Read the brief <Icon icon='ph:arrow-right-bold' width={14} />
              </button>
              <button className='bp-btn-ghost'>Talk to a lead</button>
            </div>

            <div className='bp-lab-label'>
              <span className='n'>A·03</span>
              <span className='t'>Text</span>
              <span className='d'>Mono, underlined hairline. For the quietest route off the page.</span>
            </div>
            <div className='bp-lab-row'>
              <button className='bp-btn-text'>
                Or talk to our team <Icon icon='ph:arrow-up-right-bold' width={12} />
              </button>
              <button className='bp-btn-text'>Download brief</button>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — Badges + tags */}
      <section className='bp-section'>
        <div className='bp-container'>
          <div className='bp-section-head'>
            <div className='bp-kicker'>04 · Markers</div>
            <h2>Badges, tags, <em>ticket stamps.</em></h2>
            <p className='lead'>
              Mono, uppercase, tracked. Either orange hairline (brand claim) or white hairline (metadata).
              Never on a pill. Never bold in colour.
            </p>
          </div>

          <div className='bp-lab'>
            <div className='bp-lab-label'>
              <span className='n'>M·01</span>
              <span className='t'>Brand badge</span>
              <span className='d'>Orange hairline, orange glow fill. Reserved for the headline claim.</span>
            </div>
            <div className='bp-lab-row'>
              <span className='bp-badge'>
                <span style={{ width: 10, height: 1, background: 'var(--bp-accent)' }} />
                The Frontier Organisation
              </span>
              <span className='bp-badge'>Agent-Operated Enterprise</span>
            </div>

            <div className='bp-lab-label'>
              <span className='n'>M·02</span>
              <span className='t'>Coordinate marker</span>
              <span className='d'>Small inline ticket: [T·01], [C·04], [FIG·02].</span>
            </div>
            <div className='bp-lab-row'>
              <span className='bp-marker'>T·01</span>
              <span className='bp-marker'>A·02</span>
              <span className='bp-marker'>FIG·03</span>
              <span className='bp-marker'>REV 2026-04-15</span>
            </div>

            <div className='bp-lab-label'>
              <span className='n'>M·03</span>
              <span className='t'>Tag</span>
              <span className='d'>White hairline. For partner names, tech stack, taxonomy.</span>
            </div>
            <div className='bp-lab-row'>
              <span className='bp-tag'>Snowflake</span>
              <span className='bp-tag'>AWS Advanced</span>
              <span className='bp-tag'>Anthropic</span>
              <span className='bp-tag'>Perpetual Engineering</span>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Cards + inputs */}
      <section className='bp-section'>
        <div className='bp-container'>
          <div className='bp-section-head'>
            <div className='bp-kicker'>05 · Surfaces</div>
            <h2>Cards are <em>framed drawings.</em></h2>
            <p className='lead'>
              Every surface is a 1px rectangle with orange angle-brackets at two corners, a dashed header
              rule, and a coordinate stamp. No radii, no shadows.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
            <div className='bp-card'>
              <div className='hd'>
                <span>Stat</span>
                <span className='k'>S·01</span>
              </div>
              <div className='val'>50+</div>
              <div className='lbl'>Industries shipped<br />Perpetual engineering runs</div>
            </div>

            <div className='bp-card'>
              <div className='hd'>
                <span>Capability</span>
                <span className='k'>K·02</span>
              </div>
              <h3>AI-Ready Infrastructure</h3>
              <p>Multi-hyperscaler. Purpose-built. Data, identity, and governance wired for agent workloads from day one.</p>
            </div>

            <div className='bp-card'>
              <div className='hd'>
                <span>Testimonial</span>
                <span className='k'>V·03</span>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: 1.55, color: 'var(--bp-ink)' }}>
                “They didn’t deliver a deck. They delivered a running agent and the org to run it.”
              </p>
              <div className='bp-mono' style={{ marginTop: 14 }}>CIO · Fortune 200 Insurer</div>
            </div>
          </div>

          <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, alignItems: 'start' }}>
            <div className='bp-field'>
              <div className='bp-field-label'>
                <span>Work email</span>
                <span className='k'>[F·01]</span>
              </div>
              <input className='bp-input' placeholder='name@company.com' />
            </div>
            <div className='bp-field'>
              <div className='bp-field-label'>
                <span>Organisation</span>
                <span className='k'>[F·02]</span>
              </div>
              <input className='bp-input' placeholder='Company, industry, AUM' />
            </div>
            <div className='bp-field'>
              <div className='bp-field-label'>
                <span>Ticket</span>
                <span className='k'>[F·03]</span>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <input className='bp-input' placeholder='What are you building?' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — Frames & Motifs */}
      <section className='bp-section'>
        <div className='bp-container'>
          <div className='bp-section-head'>
            <div className='bp-kicker'>06 · Motifs</div>
            <h2>The vocabulary, <em>annotated.</em></h2>
            <p className='lead'>
              Six motifs recur across every v5-family variant. Learn them once; use them everywhere.
            </p>
          </div>

          <div className='bp-motif-grid'>
            {motifs.map((m) => (
              <div className='bp-motif' key={m.n}>
                <span className='bp-marker coord'>{m.n}</span>
                <div className='t'>{m.t}</div>
                <div className='d'>{m.d}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            <div className='bp-illo'>
              <div className='bp-illo-label'>
                <span>FIG·01 · Illustration frame</span>
                <span>REV 04-15</span>
              </div>
              <svg viewBox='0 0 200 200' width='100%' height='100%' style={{ display: 'block' }}>
                <g fill='none' strokeWidth='1'>
                  <circle cx='100' cy='100' r='72' stroke='var(--bp-ink-corner)' />
                  <circle cx='100' cy='100' r='48' stroke='var(--bp-ink-hair)' />
                  <circle cx='100' cy='100' r='24' stroke='var(--bp-ink-hair)' />
                  <line x1='100' y1='10' x2='100' y2='190' stroke='var(--bp-ink-crosshair)' strokeDasharray='3 4' />
                  <line x1='10' y1='100' x2='190' y2='100' stroke='var(--bp-ink-crosshair)' strokeDasharray='3 4' />
                </g>
                <g fill='var(--bp-accent)'>
                  <circle cx='100' cy='100' r='3' />
                  <circle cx='148' cy='100' r='2' />
                  <circle cx='100' cy='52' r='2' />
                </g>
              </svg>
              <div className='bp-illo-foot'>
                <span>Scale 1:1</span>
                <span>Ø 144 · Ø 96 · Ø 48</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className='bp-hatch' />
              <div className='bp-hatch bp-hatch-orange' />
              <div style={{ border: '1px solid var(--bp-hair-strong)', padding: 24 }}>
                <div className='bp-mono' style={{ marginBottom: 16 }}>D·01 — dashed boundary</div>
                <div style={{ borderTop: '1px dashed var(--bp-hair-strong)', height: 0 }} />
                <div className='bp-mono' style={{ marginTop: 20, marginBottom: 16 }}>D·02 — solid rule</div>
                <div style={{ borderTop: '1px solid var(--bp-hair-strong)', height: 0 }} />
                <div className='bp-mono' style={{ marginTop: 20, marginBottom: 16 }}>D·03 — orange hairline</div>
                <div style={{ borderTop: '1px solid var(--bp-orange-hair)', height: 0 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — Iconography */}
      <section className='bp-section'>
        <div className='bp-container'>
          <div className='bp-section-head'>
            <div className='bp-kicker'>07 · Iconography</div>
            <h2>Phosphor Bold. <em>One weight, always.</em></h2>
            <p className='lead'>
              Iconify under the hood. Phosphor bold is the blueprint weight — thick enough to survive a
              hairline frame, quiet enough to sit inside a paragraph.
            </p>
          </div>

          <div className='bp-icon-grid'>
            {iconNames.map((name) => (
              <div className='bp-icon-cell' key={name}>
                <Icon icon={name} width={28} />
                <span className='nm'>{name.replace('ph:', '')}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — Light surfaces */}
      <section className='bp-section'>
        <div className='bp-container'>
          <div className='bp-section-head'>
            <div className='bp-kicker'>08 · Light surfaces</div>
            <h2>The blueprint on <em>paper.</em></h2>
            <p className='lead'>
              Navy deep is the default, but the site interleaves white, beige, and gray panels for
              breathing room. The grammar doesn’t change — dotted grid, angle-bracket corners, mono
              coordinates, orange accent — only the ink inverts.
            </p>
          </div>

          <div className='bp-surface-stack'>
            {/* WHITE */}
            <div className='bp-surface bp-surface--white'>
              <div className='bp-surface-row'>
                <span>Surface · <span className='k'>SFC·01</span> · White</span>
                <span>bg <span className='k'>#FFFFFF</span></span>
                <span>Ink <span className='k'>Navy</span></span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'center' }} className='bp-surface-grid'>
                <div>
                  <span className='bp-marker' style={{ marginBottom: 20, display: 'inline-flex' }}>SEC·A1</span>
                  <h3 style={{ marginTop: 20 }}>
                    Proven where <em>it matters.</em>
                  </h3>
                  <p style={{ marginTop: 18, maxWidth: 520 }}>
                    Used as the default editorial panel — case studies, proof, detailed reads. The orange
                    accent carries straight through; borders flip to a navy hairline.
                  </p>
                  <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap', alignItems: 'center' }}>
                    <button className='bp-btn'>
                      Read the case <Icon icon='ph:arrow-right-bold' width={14} />
                    </button>
                    <button className='bp-btn-ghost'>Talk to a lead</button>
                    <button className='bp-btn-text'>
                      Download brief <Icon icon='ph:arrow-up-right-bold' width={12} />
                    </button>
                  </div>
                </div>
                <div className='bp-card'>
                  <div className='hd'>
                    <span>Stat</span>
                    <span className='k'>S·04</span>
                  </div>
                  <div className='val'>42%</div>
                  <div className='lbl'>Cycle-time reduction<br />Global insurer, FY26 H1</div>
                </div>
              </div>
            </div>

            {/* BEIGE */}
            <div className='bp-surface bp-surface--beige'>
              <div className='bp-surface-row'>
                <span>Surface · <span className='k'>SFC·02</span> · Warm beige</span>
                <span>bg <span className='k'>var(--brand-bg-warm)</span></span>
                <span>Ink <span className='k'>Ink 1D1B17</span></span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }} className='bp-surface-grid'>
                <div>
                  <span className='bp-marker' style={{ marginBottom: 20, display: 'inline-flex' }}>SEC·B2</span>
                  <h3 style={{ marginTop: 20 }}>
                    The voice of <em>the practice.</em>
                  </h3>
                  <p style={{ marginTop: 18 }}>
                    Beige carries essays, principles, the long-form. It should feel like the inside page of
                    a serious publication — warm, textured, quiet.
                  </p>
                  <div style={{ display: 'flex', gap: 10, marginTop: 24, flexWrap: 'wrap' }}>
                    <span className='bp-tag'>Essay</span>
                    <span className='bp-tag'>Perpetual Engineering</span>
                    <span className='bp-tag'>Futures Studio</span>
                  </div>
                </div>
                <div className='bp-card'>
                  <div className='hd'>
                    <span>Testimonial</span>
                    <span className='k'>V·07</span>
                  </div>
                  <p style={{ fontSize: '1rem', lineHeight: 1.55, color: 'var(--bp-ink)' }}>
                    “The first consulting output we could actually run in production.”
                  </p>
                  <div className='bp-mono' style={{ marginTop: 18 }}>CTO · Global Reinsurer</div>
                </div>
              </div>
            </div>

            {/* GRAY */}
            <div className='bp-surface bp-surface--gray'>
              <div className='bp-surface-row'>
                <span>Surface · <span className='k'>SFC·03</span> · Cool gray</span>
                <span>bg <span className='k'>#ECEEF2</span></span>
                <span>Ink <span className='k'>Navy</span></span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }} className='bp-surface-grid'>
                <div>
                  <span className='bp-marker' style={{ marginBottom: 20, display: 'inline-flex' }}>SEC·C3</span>
                  <h3 style={{ marginTop: 20 }}>
                    The quiet <em>utility panel.</em>
                  </h3>
                  <p style={{ marginTop: 18, maxWidth: 480 }}>
                    Gray breaks up long runs of navy. Works for specs, documentation, form-heavy sections,
                    and anywhere the content wants to feel technical rather than editorial.
                  </p>
                </div>
                <div style={{ display: 'grid', gap: 16 }}>
                  <div className='bp-field'>
                    <div className='bp-field-label'>
                      <span>Work email</span>
                      <span className='k'>[F·01]</span>
                    </div>
                    <input className='bp-input' placeholder='name@company.com' />
                  </div>
                  <div className='bp-field'>
                    <div className='bp-field-label'>
                      <span>Organisation</span>
                      <span className='k'>[F·02]</span>
                    </div>
                    <input className='bp-input' placeholder='Company, industry, AUM' />
                  </div>
                  <button className='bp-btn' style={{ alignSelf: 'flex-start', marginTop: 6 }}>
                    Submit ticket <Icon icon='ph:arrow-right-bold' width={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 09 — Usage */}
      <section className='bp-section' style={{ borderBottom: 'none' }}>
        <div className='bp-container'>
          <div className='bp-section-head'>
            <div className='bp-kicker'>09 · Usage</div>
            <h2>Pull from tokens. <em>Never hard-code.</em></h2>
            <p className='lead'>
              Every variant references the same CSS variables. Local tokens (motion, layout) live under the
              variant scope and always chain back to brand tokens.
            </p>
          </div>

          <div className='bp-code'>
{`/* ✅ variant theme.css */
.bp-btn {
  background: `}<span className='c'>var(--brand-orange)</span>{`;
  color: #fff;
  font-family: `}<span className='c'>var(--font-mono)</span>{`;
  border: 1px solid `}<span className='c'>var(--brand-orange)</span>{`;
  /* angle-bracket corners via ::before / ::after */
}

/* ❌ never */
.bp-btn { background: `}<span className='c'>#E86A2A</span>{`; }`}
          </div>

          <div style={{ marginTop: 48, display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <span className='bp-mono'>See also</span>
            <Link href='/v5' className='bp-btn-text'>
              V5 · Blueprint <Icon icon='ph:arrow-up-right-bold' width={12} />
            </Link>
            <Link href='/styleguide' className='bp-btn-text'>
              Light styleguide <Icon icon='ph:arrow-up-right-bold' width={12} />
            </Link>
            <Link href='/' className='bp-btn-text'>
              Index <Icon icon='ph:arrow-up-right-bold' width={12} />
            </Link>
          </div>

          <div className='bp-meta' style={{ marginTop: 80, borderTop: '1px dashed var(--bp-hair)', borderBottom: 'none' }}>
            <span>END · SHEET 01</span>
            <span>DBiz · SG · Blueprint · <span className='k'>REV 2026-04-15</span></span>
            <span>© DBiz.ai</span>
          </div>
        </div>
      </section>
    </main>
  )
}
