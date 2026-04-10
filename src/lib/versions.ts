export type Version = {
  slug: string
  name: string
  tagline: string
  status: 'wip' | 'draft' | 'ready'
}

export const versions: Version[] = [
  {
    slug: 'v1',
    name: 'V1 — Editorial',
    tagline: 'Warm off-white, serif accents, minimal motion',
    status: 'wip',
  },
  {
    slug: 'v2',
    name: 'V2 — Signal',
    tagline: 'Dark institutional, canvas network hero, ambient motion',
    status: 'ready',
  },
  {
    slug: 'v3',
    name: 'V3 — Atelier',
    tagline: 'White/navy/orange sectioning, boxes and wells, duotone icons',
    status: 'wip',
  },
  {
    slug: 'v4',
    name: 'V4 — Swiss',
    tagline: 'International typographic style, grid-led precision',
    status: 'ready',
  },
  {
    slug: 'v5',
    name: 'V5 — Blueprint',
    tagline: 'Schematic navy paper with orange hairline annotations',
    status: 'ready',
  },
  {
    slug: 'v6',
    name: 'V6 — Broadsheet',
    tagline: 'Editorial broadsheet, Instrument Serif display, multi-column',
    status: 'ready',
  },
  {
    slug: 'v7',
    name: 'V7 — Monument',
    tagline: 'Architectural tiles, stacked display, Pentagram-scale type',
    status: 'ready',
  },
]
