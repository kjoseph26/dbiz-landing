'use client'

import { useState } from 'react'

type Case = {
  metric: string
  title: string
  kicker: string
  body: string
}

type Tech = { cat: string; list: string; note: string }

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
    kicker: 'FactWeavers\u2122',
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

const techRows: Tech[] = [
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
  {
    cat: 'AI Models',
    list: 'Claude · GPT · Gemini · Bedrock · Azure OpenAI · Vertex AI',
    note: 'Multi-model by design',
  },
]

type Tab = 'industry' | 'solution' | 'tech'

export function V9Proven() {
  const [tab, setTab] = useState<Tab>('industry')

  return (
    <section className='v9-proven' id='work'>
      <div className='v9-container'>
        <div className='v9-section-head'>
          <h2 className='v9-h2'>
            Proven <span className='accent'>where it matters.</span>
          </h2>
          <p className='v9-lead'>
            50+ enterprise deployments across 11 industries. Measured outcomes — shipped into
            production, running today.
          </p>
        </div>

        <div className='v9-proven-tabs' role='tablist'>
          <button
            className={`v9-proven-tab${tab === 'industry' ? ' active' : ''}`}
            onClick={() => setTab('industry')}
            role='tab'
          >
            By Industry
          </button>
          <button
            className={`v9-proven-tab${tab === 'solution' ? ' active' : ''}`}
            onClick={() => setTab('solution')}
            role='tab'
          >
            By Solution
          </button>
          <button
            className={`v9-proven-tab${tab === 'tech' ? ' active' : ''}`}
            onClick={() => setTab('tech')}
            role='tab'
          >
            By Technology
          </button>
        </div>

        {tab === 'industry' && (
          <div className='v9-proven-cards'>
            {byIndustry.map((c) => (
              <a key={c.title} href='#' className='v9-proven-card'>
                <div className='metric'>{c.metric}</div>
                <div className='kicker'>{c.kicker}</div>
                <div className='title'>{c.title}</div>
                <p className='body'>{c.body}</p>
              </a>
            ))}
          </div>
        )}

        {tab === 'solution' && (
          <div className='v9-proven-cards'>
            {bySolution.map((c) => (
              <a key={c.title} href='#' className='v9-proven-card'>
                <div className='metric'>{c.metric}</div>
                <div className='kicker'>{c.kicker}</div>
                <div className='title'>{c.title}</div>
                <p className='body'>{c.body}</p>
              </a>
            ))}
          </div>
        )}

        {tab === 'tech' && (
          <div>
            {techRows.map((t) => (
              <div key={t.cat} className='v9-proven-tech'>
                <div className='cat'>{t.cat}</div>
                <div className='list'>{t.list}</div>
                <div className='note'>{t.note}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
