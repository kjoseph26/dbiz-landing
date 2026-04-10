import Link from 'next/link'

type Swatch = {
  name: string
  varName: string
  value: string
  onDark?: boolean
  note?: string
}

const navySwatches: Swatch[] = [
  { name: 'Navy', varName: '--brand-navy', value: '#0D1B3E', onDark: true, note: 'Primary anchor' },
  { name: 'Navy Deep', varName: '--brand-navy-deep', value: '#070F22', onDark: true, note: 'Dark surfaces, CTA bg' },
  { name: 'Navy Light', varName: '--brand-navy-light', value: '#1A2D5A', onDark: true, note: 'Hover, secondary' },
]

const orangeSwatches: Swatch[] = [
  { name: 'Orange', varName: '--brand-orange', value: '#E86A2A', onDark: true, note: 'Accent, CTAs, highlights' },
  { name: 'Orange Hover', varName: '--brand-orange-hover', value: '#D45A1A', onDark: true, note: 'Button hover' },
  { name: 'Orange Glow', varName: '--brand-orange-glow', value: 'rgba(232,106,42,0.1)', note: 'Soft fills' },
]

const surfaceSwatches: Swatch[] = [
  { name: 'BG', varName: '--brand-bg', value: '#FAFAFA', note: 'Page background' },
  { name: 'BG Card', varName: '--brand-bg-card', value: '#FFFFFF', note: 'Cards, elevated surfaces' },
  { name: 'BG Warm', varName: '--brand-bg-warm', value: '#F3F0EC', note: 'Warm section background' },
]

const textSwatches: Swatch[] = [
  { name: 'Text', varName: '--brand-text', value: '#111111', note: 'Primary text' },
  { name: 'Text 2', varName: '--brand-text-2', value: '#555555', note: 'Body, secondary' },
  { name: 'Text 3', varName: '--brand-text-3', value: '#999999', note: 'Muted, captions' },
]

const borderSwatches: Swatch[] = [
  { name: 'Border', varName: '--brand-border', value: 'rgba(0,0,0,0.06)', note: 'Default border' },
  { name: 'Border Hover', varName: '--brand-border-hover', value: 'rgba(0,0,0,0.12)', note: 'Hover border' },
]

function SwatchCard({ swatch }: { swatch: Swatch }) {
  return (
    <div
      style={{
        background: 'var(--brand-bg-card)',
        border: '1px solid var(--brand-border)',
        borderRadius: 'var(--brand-r)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          background: `var(${swatch.varName})`,
          height: 120,
          borderBottom: '1px solid var(--brand-border)',
          display: 'flex',
          alignItems: 'flex-end',
          padding: 16,
          color: swatch.onDark ? '#fff' : 'var(--brand-text)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          opacity: 0.9,
        }}
      >
        {swatch.value}
      </div>
      <div style={{ padding: '14px 16px' }}>
        <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--brand-text)' }}>
          {swatch.name}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: 'var(--brand-text-3)',
            marginTop: 4,
          }}
        >
          var({swatch.varName})
        </div>
        {swatch.note && (
          <div style={{ fontSize: '0.76rem', color: 'var(--brand-text-2)', marginTop: 8 }}>
            {swatch.note}
          </div>
        )}
      </div>
    </div>
  )
}

function SectionHeader({ kicker, title, description }: { kicker: string; title: string; description?: string }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--brand-orange)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          marginBottom: 10,
        }}
      >
        {kicker}
      </div>
      <h2
        style={{
          fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          color: 'var(--brand-text)',
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          style={{
            fontSize: '1rem',
            color: 'var(--brand-text-2)',
            maxWidth: 560,
            lineHeight: 1.6,
            marginTop: 10,
          }}
        >
          {description}
        </p>
      )}
    </div>
  )
}

function SwatchGrid({ swatches }: { swatches: Swatch[] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: 14,
      }}
    >
      {swatches.map((s) => (
        <SwatchCard key={s.varName} swatch={s} />
      ))}
    </div>
  )
}

export default function StyleguidePage() {
  return (
    <main
      style={{
        background: 'var(--brand-bg)',
        color: 'var(--brand-text)',
        minHeight: '100dvh',
        paddingBottom: 120,
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '80px 40px 0' }}>
        <Link
          href='/'
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            color: 'var(--brand-text-3)',
            textDecoration: 'none',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          ← Index
        </Link>

        <header style={{ marginTop: 40, marginBottom: 72, maxWidth: 760 }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.76rem',
              color: 'var(--brand-orange)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: 18,
            }}
          >
            Brand <span style={{ color: 'var(--brand-text-3)' }}>/</span> Styleguide
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: 1.06,
              color: 'var(--brand-text)',
            }}
          >
            The DBiz brand, <span style={{ color: 'var(--brand-orange)' }}>distilled.</span>
          </h1>
          <p
            style={{
              marginTop: 22,
              fontSize: '1.05rem',
              lineHeight: 1.65,
              color: 'var(--brand-text-2)',
              maxWidth: 620,
            }}
          >
            One palette. One primary typeface. Every future homepage variant — light, dark, animated, editorial, brutalist — pulls from these tokens. Source of truth lives in <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.92em', color: 'var(--brand-text)' }}>src/app/globals.css</code>.
          </p>
        </header>

        {/* COLOR */}
        <section style={{ marginBottom: 88 }}>
          <SectionHeader
            kicker='01 — Color'
            title='Navy anchors. Orange ignites.'
            description='Navy is the institutional voice — authority, trust, depth. Orange is the spark — action, energy, every CTA. Everything else is surface and type.'
          />

          <div style={{ marginTop: 12 }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--brand-text-3)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              Primary — Navy
            </div>
            <SwatchGrid swatches={navySwatches} />
          </div>

          <div style={{ marginTop: 32 }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--brand-text-3)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              Accent — Orange
            </div>
            <SwatchGrid swatches={orangeSwatches} />
          </div>

          <div style={{ marginTop: 32 }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--brand-text-3)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              Surfaces
            </div>
            <SwatchGrid swatches={surfaceSwatches} />
          </div>

          <div style={{ marginTop: 32 }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--brand-text-3)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              Text
            </div>
            <SwatchGrid swatches={textSwatches} />
          </div>

          <div style={{ marginTop: 32 }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--brand-text-3)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              Borders
            </div>
            <SwatchGrid swatches={borderSwatches} />
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section style={{ marginBottom: 88 }}>
          <SectionHeader
            kicker='02 — Typography'
            title='DM Sans is the voice.'
            description='DM Sans is the primary typeface — everywhere, across all variants. DM Mono is for labels, metadata, and code.'
          />

          <div
            style={{
              background: 'var(--brand-bg-card)',
              border: '1px solid var(--brand-border)',
              borderRadius: 'var(--brand-r)',
              padding: '40px 40px',
            }}
          >
            <div style={{ display: 'grid', gap: 36 }}>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--brand-text-3)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: 10,
                  }}
                >
                  Display — DM Sans 800 / clamp(2.6rem, 5vw, 4.5rem)
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(2.6rem, 5vw, 4.5rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.035em',
                    lineHeight: 1.06,
                  }}
                >
                  Your enterprise.{' '}
                  <span style={{ color: 'var(--brand-orange)' }}>Agent-operated.</span>
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--brand-text-3)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: 10,
                  }}
                >
                  H2 — DM Sans 800 / clamp(1.7rem, 3vw, 2.5rem)
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(1.7rem, 3vw, 2.5rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1,
                  }}
                >
                  Proven where it matters.
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--brand-text-3)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: 10,
                  }}
                >
                  H3 — DM Sans 700 / 1.35rem
                </div>
                <div style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                  AI-Ready Infrastructure
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--brand-text-3)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: 10,
                  }}
                >
                  Body — DM Sans 400 / 1.05rem / 1.65
                </div>
                <p
                  style={{
                    fontSize: '1.05rem',
                    lineHeight: 1.65,
                    color: 'var(--brand-text-2)',
                    maxWidth: 620,
                  }}
                >
                  Most enterprises have tried AI. Most of it didn&apos;t scale — not because the technology failed, but because no one connected the ambition to what actually got built. We close that gap.
                </p>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--brand-text-3)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: 10,
                  }}
                >
                  Label — DM Mono 500 / 0.76rem / tracking 0.14em
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    fontWeight: 500,
                    color: 'var(--brand-orange)',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  Human-Led <span style={{ color: 'var(--brand-text-3)' }}>|</span> Agent-Operated{' '}
                  <span style={{ color: 'var(--brand-text-3)' }}>|</span> Data-Powered
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* COMPONENTS */}
        <section style={{ marginBottom: 88 }}>
          <SectionHeader
            kicker='03 — Core patterns'
            title='Buttons, pills, cards.'
            description='The building blocks every variant can re-skin. Keep the shapes; swap the surface.'
          />

          <div
            style={{
              background: 'var(--brand-bg-card)',
              border: '1px solid var(--brand-border)',
              borderRadius: 'var(--brand-r)',
              padding: 40,
              display: 'grid',
              gap: 36,
            }}
          >
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                style={{
                  background: 'var(--brand-orange)',
                  color: '#fff',
                  border: 'none',
                  padding: '13px 28px',
                  borderRadius: 100,
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  cursor: 'pointer',
                }}
              >
                Primary — Get started →
              </button>
              <button
                style={{
                  background: 'var(--brand-navy)',
                  color: '#fff',
                  border: 'none',
                  padding: '13px 28px',
                  borderRadius: 100,
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  cursor: 'pointer',
                }}
              >
                Secondary — Contact us
              </button>
              <a
                href='#'
                style={{
                  color: 'var(--brand-text-2)',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  borderBottom: '1px solid var(--brand-border)',
                  textDecoration: 'none',
                  paddingBottom: 2,
                }}
              >
                Or talk to our team
              </a>
            </div>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <span
                style={{
                  display: 'inline-flex',
                  gap: 9,
                  alignItems: 'center',
                  background: 'var(--brand-orange-glow)',
                  border: '1px solid rgba(232,106,42,0.2)',
                  color: 'var(--brand-orange)',
                  borderRadius: 100,
                  padding: '8px 18px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                }}
              >
                ▲ The Frontier Organisation
              </span>
              <span
                style={{
                  background: 'var(--brand-bg)',
                  border: '1px solid var(--brand-border)',
                  color: 'var(--brand-text-2)',
                  borderRadius: 100,
                  padding: '6px 14px',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                }}
              >
                Snowflake
              </span>
              <span
                style={{
                  background: 'var(--brand-bg)',
                  border: '1px solid var(--brand-border)',
                  color: 'var(--brand-text-2)',
                  borderRadius: 100,
                  padding: '6px 14px',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                }}
              >
                AWS Advanced
              </span>
              <span
                style={{
                  background: 'var(--brand-bg)',
                  border: '1px solid var(--brand-border)',
                  color: 'var(--brand-text-2)',
                  borderRadius: 100,
                  padding: '6px 14px',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                }}
              >
                Anthropic
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 12,
              }}
            >
              <div
                style={{
                  background: 'var(--brand-bg)',
                  border: '1px solid var(--brand-border)',
                  borderRadius: 'var(--brand-r)',
                  padding: '26px 22px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    color: 'var(--brand-orange)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: 6,
                  }}
                >
                  Industry
                </div>
                <div
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    color: 'var(--brand-orange)',
                    letterSpacing: '-0.02em',
                    marginBottom: 6,
                  }}
                >
                  50+
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 6 }}>
                  Outcome headline
                </div>
                <p style={{ fontSize: '0.8rem', lineHeight: 1.55, color: 'var(--brand-text-2)' }}>
                  One-line business outcome describing what shipped.
                </p>
              </div>
              <div
                style={{
                  background: 'var(--brand-navy)',
                  border: '1px solid var(--brand-navy-light)',
                  borderRadius: 'var(--brand-r)',
                  padding: '26px 22px',
                  color: '#fff',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    color: 'var(--brand-orange)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: 6,
                  }}
                >
                  On dark
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 4 }}>
                  AI-Ready Infrastructure
                </div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginBottom: 12 }}>
                  Multi-hyperscaler · Purpose-built
                </div>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)' }}>
                  Navy card pattern for dark sections. Same radius, same type scale, inverted surface.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* USAGE */}
        <section>
          <SectionHeader
            kicker='04 — Usage'
            title='How to pull from tokens.'
            description='Every variant imports these vars from globals.css. Never hard-code a brand hex in a variant — reference the token so future theme shifts propagate.'
          />

          <pre
            style={{
              background: 'var(--brand-navy-deep)',
              color: '#e6e6e6',
              padding: 28,
              borderRadius: 'var(--brand-r)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              lineHeight: 1.7,
              overflowX: 'auto',
            }}
          >
{`.my-cta {
  background: var(--brand-orange);
  color: #fff;
  font-family: var(--font-sans);
  border-radius: var(--brand-r-sm);
}

/* Dark mode: flip surface, keep orange */
[data-theme='dark'] .my-cta { ... }`}
          </pre>
        </section>
      </div>
    </main>
  )
}
