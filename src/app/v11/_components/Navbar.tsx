'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@/components/icon'

const navLinks = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Framework', href: '#framework' },
  { label: 'Proven', href: '#proven' },
  { label: 'Cadence', href: '#cadence' },
] as const

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className='sticky top-0 z-40 border-b border-[var(--bp-hair)] backdrop-blur-md'
      style={{ background: 'rgba(7, 15, 34, 0.8)' }}
    >
      <div className='bp-container'>
        <div className='flex items-center justify-between py-4'>
          <Link href='/v11' className='flex items-center gap-2'>
            <span
              className='font-bold tracking-tight text-[1.15rem]'
              style={{ color: 'var(--bp-ink)' }}
            >
              dBiz
            </span>
            <span className='bp-mono-accent text-[0.58rem]'>.ai</span>
          </Link>

          <ul className='hidden md:flex items-center gap-8'>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className='bp-mono hover:text-[var(--bp-accent)] transition-colors'
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className='hidden md:flex items-center gap-3'>
            <a href='#cta' className='bp-btn-text'>
              Read the brief <Icon icon='ph:arrow-up-right-bold' width={12} />
            </a>
            <a href='#cta' className='bp-btn'>
              Talk to a lead <Icon icon='ph:arrow-right-bold' width={14} />
            </a>
          </div>

          <button
            aria-label='Toggle menu'
            aria-expanded={open}
            className='md:hidden text-[var(--bp-ink)]'
            onClick={() => setOpen((v) => !v)}
          >
            <Icon icon={open ? 'ph:x-bold' : 'ph:list-bold'} width={22} />
          </button>
        </div>

        {open && (
          <ul className='md:hidden flex flex-col gap-4 pb-6'>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className='bp-mono block py-2'
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className='pt-2'>
              <a href='#cta' className='bp-btn'>
                Talk to a lead <Icon icon='ph:arrow-right-bold' width={14} />
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}
