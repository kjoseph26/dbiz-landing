'use client'

import { useEffect, useState } from 'react'
import { Icon } from '@/components/icon'

type Capability = {
  num: string
  title: string
  headline: string
  accent: string
  body: string
  tags: string[]
  icon: string
  navIcon: string
}

const capabilities: Capability[] = [
  {
    num: '01',
    title: 'Strategy & Architecture',
    headline: 'Business priorities become an',
    accent: 'executable roadmap.',
    body: 'Readiness assessment, architecture blueprint, data governance and security posture — before a single line of code gets written. Investment alignment is the difference between experiment and execution.',
    tags: ['Futures Studio', 'TechOffice Foundry', 'AI Readiness', 'Well-Architected'],
    icon: 'ph:polygon',
    navIcon: 'lucide:compass',
  },
  {
    num: '02',
    title: 'AI-Ready Infrastructure',
    headline: 'Cloud built',
    accent: 'for agents, not retrofitted for them.',
    body: 'Environments purpose-built for agents, data pipelines, and frontier models — with the governance, cost controls, and observability enterprise IT actually requires.',
    tags: ['AWS · Azure · GCP', 'AI-Optimised', 'Cost Controls', 'Fleet Compute'],
    icon: 'ph:hexagon',
    navIcon: 'lucide:cloud',
  },
  {
    num: '03',
    title: 'The Intelligence Layer',
    headline: 'Every AI initiative stalls on',
    accent: 'the same thing.',
    body: "The data isn't ready. FactWeavers\u2122 cleans, unifies, and activates enterprise data — pre-modelled for your industry, ready for agents from day one.",
    tags: ['FactWeavers\u2122', 'Domain Models', 'Data Activation', 'Agent-Ready'],
    icon: 'ph:diamond',
    navIcon: 'lucide:database',
  },
  {
    num: '04',
    title: 'Connected Systems',
    headline: "Your systems don't need replacing —",
    accent: 'they need unlocking.',
    body: 'CRM, ERP, and platform investments connected so AI agents can read, write, and act across your entire application landscape. No rip and replace.',
    tags: ['CRM & ERP', 'Agent Studio', 'MCP Connectors', 'No Rip & Replace'],
    icon: 'ph:octagon',
    navIcon: 'lucide:link-2',
  },
  {
    num: '05',
    title: 'Product & Experience',
    headline: 'Designed for the new interaction between',
    accent: 'humans and agents.',
    body: 'AI-native applications, digital twins, and next-gen experiences that evolve with the business. Perpetual Engineering means the product never stops improving.',
    tags: ['Digital Twins', 'AI-Native Apps', 'Perpetual Engineering', 'Agent UX'],
    icon: 'ph:triangle',
    navIcon: 'lucide:sparkles',
  },
  {
    num: '06',
    title: 'AI-First Operations',
    headline: 'The team that built it',
    accent: 'runs it.',
    body: "AI-first monitoring, governance, and continuous improvement across your entire stack. Not a support contract from a team that's never seen the architecture.",
    tags: ['24/7 Ops', 'Continuous Improvement', 'AI Governance', 'Drift Detection'],
    icon: 'ph:circle',
    navIcon: 'lucide:activity',
  },
  {
    num: '07',
    title: 'Security & AI Risk',
    headline: 'Data sovereignty and AI governance,',
    accent: 'built in, not bolted on.',
    body: 'Hallucination risk management, model drift monitoring, and compliance-ready architecture — embedded into every layer from day one.',
    tags: ['Data Sovereignty', 'Compliance', 'Model Drift', 'Risk Controls'],
    icon: 'ph:shield-check',
    navIcon: 'lucide:shield-check',
  },
]

const CYCLE_MS = 5000

export function V9Capabilities() {
  const [active, setActive] = useState(0)
  const current = capabilities[active]

  useEffect(() => {
    const id = setTimeout(() => {
      setActive((i) => (i + 1) % capabilities.length)
    }, CYCLE_MS)
    return () => clearTimeout(id)
  }, [active])

  return (
    <section className='v9-capabilities' id='solutions'>
      <div className='v9-container'>
        <div className='v9-section-head'>
          <h2 className='v9-h2'>
            The AI gap every enterprise hits. <span className='accent'>And how we close it.</span>
          </h2>
          <p className='v9-lead'>
            We translate your priorities into an AI and technology roadmap. Then deliver against it
            — across every layer, with industry-leading partners at each step. Engage us for one
            capability or the full transformation.
          </p>
        </div>

        <div className='v9-caps'>
          <nav className='v9-caps-nav'>
            {capabilities.map((cap, i) => (
              <button
                key={cap.num}
                className={`v9-caps-tab${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className='v9-caps-icon-sm'>
                  <Icon icon={cap.navIcon} width={16} />
                </span>
                <span className='label'>{cap.title}</span>
                <span className='v9-caps-tab-progress' />
              </button>
            ))}
          </nav>

          <div className='v9-caps-detail' key={current.num}>
            <div className='v9-caps-detail-inner'>
              <h3>
                {current.headline} <span className='accent'>{current.accent}</span>
              </h3>
              <p>{current.body}</p>
              <div className='v9-caps-tags'>
                {current.tags.map((tag) => (
                  <span key={tag} className='v9-caps-tag'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className='v9-caps-icon'>
              <Icon icon={current.icon} width={56} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
