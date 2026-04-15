'use client'

import { useEffect, useRef, useState, type JSX } from 'react'

const patterns: Record<string, JSX.Element> = {
  strategy: (
    <svg
      viewBox='0 0 120 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-full h-full'
    >
      <circle cx='60' cy='60' r='50' stroke='currentColor' strokeWidth='0.75' opacity='0.15' />
      <circle cx='60' cy='60' r='40' stroke='currentColor' strokeWidth='1' opacity='0.2' />
      <circle cx='60' cy='60' r='30' stroke='currentColor' strokeWidth='1' opacity='0.3' />
      <circle cx='60' cy='60' r='20' stroke='currentColor' strokeWidth='1.5' opacity='0.45' />
      <circle cx='60' cy='60' r='10' stroke='currentColor' strokeWidth='1.5' opacity='0.6' />
      <circle cx='60' cy='60' r='3' fill='currentColor' opacity='0.9' />
      <line x1='60' y1='8' x2='60' y2='112' stroke='currentColor' strokeWidth='0.5' opacity='0.1' />
      <line x1='8' y1='60' x2='112' y2='60' stroke='currentColor' strokeWidth='0.5' opacity='0.1' />
      <line x1='23' y1='23' x2='97' y2='97' stroke='currentColor' strokeWidth='0.5' opacity='0.08' />
      <line x1='97' y1='23' x2='23' y2='97' stroke='currentColor' strokeWidth='0.5' opacity='0.08' />
      <circle cx='60' cy='10' r='2' fill='currentColor' opacity='0.4' />
      <circle cx='110' cy='60' r='2' fill='currentColor' opacity='0.4' />
      <circle cx='60' cy='110' r='2' fill='currentColor' opacity='0.4' />
      <circle cx='10' cy='60' r='2' fill='currentColor' opacity='0.4' />
      <line x1='60' y1='10' x2='60' y2='18' stroke='currentColor' strokeWidth='1' opacity='0.3' />
      <line x1='110' y1='60' x2='102' y2='60' stroke='currentColor' strokeWidth='1' opacity='0.3' />
      <line x1='60' y1='110' x2='60' y2='102' stroke='currentColor' strokeWidth='1' opacity='0.3' />
      <line x1='10' y1='60' x2='18' y2='60' stroke='currentColor' strokeWidth='1' opacity='0.3' />
    </svg>
  ),
  cloud: (
    <svg
      viewBox='0 0 120 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-full h-full'
    >
      <rect x='10' y='10' width='100' height='100' rx='6' stroke='currentColor' strokeWidth='0.75' opacity='0.12' />
      <rect x='18' y='18' width='84' height='84' rx='4' stroke='currentColor' strokeWidth='1' opacity='0.2' />
      <rect x='26' y='26' width='68' height='68' rx='3' stroke='currentColor' strokeWidth='1' opacity='0.3' />
      <rect x='34' y='34' width='52' height='52' rx='2' stroke='currentColor' strokeWidth='1.5' opacity='0.4' />
      <rect x='42' y='42' width='36' height='36' rx='2' fill='currentColor' opacity='0.08' stroke='currentColor' strokeWidth='1' />
      <rect x='50' y='50' width='20' height='20' rx='1' fill='currentColor' opacity='0.15' />
      <line x1='60' y1='10' x2='60' y2='110' stroke='currentColor' strokeWidth='0.5' opacity='0.1' />
      <line x1='10' y1='60' x2='110' y2='60' stroke='currentColor' strokeWidth='0.5' opacity='0.1' />
      <line x1='40' y1='10' x2='40' y2='110' stroke='currentColor' strokeWidth='0.3' opacity='0.06' />
      <line x1='80' y1='10' x2='80' y2='110' stroke='currentColor' strokeWidth='0.3' opacity='0.06' />
      <line x1='10' y1='40' x2='110' y2='40' stroke='currentColor' strokeWidth='0.3' opacity='0.06' />
      <line x1='10' y1='80' x2='110' y2='80' stroke='currentColor' strokeWidth='0.3' opacity='0.06' />
      <circle cx='18' cy='18' r='2' fill='currentColor' opacity='0.3' />
      <circle cx='102' cy='18' r='2' fill='currentColor' opacity='0.3' />
      <circle cx='18' cy='102' r='2' fill='currentColor' opacity='0.3' />
      <circle cx='102' cy='102' r='2' fill='currentColor' opacity='0.3' />
    </svg>
  ),
  data: (
    <svg
      viewBox='0 0 120 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-full h-full'
    >
      <polygon points='60,8 104,30 104,74 60,96 16,74 16,30' stroke='currentColor' strokeWidth='0.75' opacity='0.15' />
      <polygon points='60,16 94,34 94,70 60,88 26,70 26,34' stroke='currentColor' strokeWidth='1' opacity='0.25' />
      <polygon points='60,24 84,38 84,66 60,80 36,66 36,38' stroke='currentColor' strokeWidth='1' opacity='0.35' />
      <polygon points='60,32 74,42 74,62 60,72 46,62 46,42' stroke='currentColor' strokeWidth='1.5' opacity='0.5' />
      <polygon points='60,38 68,44 68,58 60,64 52,58 52,44' fill='currentColor' opacity='0.12' />
      <circle cx='60' cy='52' r='4' fill='currentColor' opacity='0.5' />
      <line x1='60' y1='52' x2='60' y2='8' stroke='currentColor' strokeWidth='0.5' opacity='0.1' />
      <line x1='60' y1='52' x2='104' y2='30' stroke='currentColor' strokeWidth='0.5' opacity='0.1' />
      <line x1='60' y1='52' x2='104' y2='74' stroke='currentColor' strokeWidth='0.5' opacity='0.1' />
      <line x1='60' y1='52' x2='60' y2='96' stroke='currentColor' strokeWidth='0.5' opacity='0.1' />
      <line x1='60' y1='52' x2='16' y2='74' stroke='currentColor' strokeWidth='0.5' opacity='0.1' />
      <line x1='60' y1='52' x2='16' y2='30' stroke='currentColor' strokeWidth='0.5' opacity='0.1' />
      <circle cx='60' cy='8' r='2' fill='currentColor' opacity='0.3' />
      <circle cx='104' cy='30' r='2' fill='currentColor' opacity='0.3' />
      <circle cx='104' cy='74' r='2' fill='currentColor' opacity='0.3' />
      <circle cx='60' cy='96' r='2' fill='currentColor' opacity='0.3' />
      <circle cx='16' cy='74' r='2' fill='currentColor' opacity='0.3' />
      <circle cx='16' cy='30' r='2' fill='currentColor' opacity='0.3' />
      <circle cx='82' cy='20' r='1.5' fill='currentColor' opacity='0.2' />
      <circle cx='38' cy='20' r='1.5' fill='currentColor' opacity='0.2' />
      <circle cx='100' cy='52' r='1.5' fill='currentColor' opacity='0.2' />
      <circle cx='20' cy='52' r='1.5' fill='currentColor' opacity='0.2' />
    </svg>
  ),
  apps: (
    <svg
      viewBox='0 0 120 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-full h-full'
    >
      <circle cx='35' cy='30' r='16' stroke='currentColor' strokeWidth='1' opacity='0.3' />
      <circle cx='85' cy='30' r='16' stroke='currentColor' strokeWidth='1' opacity='0.3' />
      <circle cx='60' cy='75' r='16' stroke='currentColor' strokeWidth='1' opacity='0.3' />
      <circle cx='35' cy='30' r='8' stroke='currentColor' strokeWidth='1' opacity='0.5' />
      <circle cx='85' cy='30' r='8' stroke='currentColor' strokeWidth='1' opacity='0.5' />
      <circle cx='60' cy='75' r='8' stroke='currentColor' strokeWidth='1' opacity='0.5' />
      <circle cx='35' cy='30' r='3' fill='currentColor' opacity='0.6' />
      <circle cx='85' cy='30' r='3' fill='currentColor' opacity='0.6' />
      <circle cx='60' cy='75' r='3' fill='currentColor' opacity='0.6' />
      <line x1='48' y1='36' x2='72' y2='36' stroke='currentColor' strokeWidth='1' opacity='0.25' />
      <line x1='43' y1='42' x2='52' y2='62' stroke='currentColor' strokeWidth='1' opacity='0.25' />
      <line x1='77' y1='42' x2='68' y2='62' stroke='currentColor' strokeWidth='1' opacity='0.25' />
      <polygon points='35,30 85,30 60,75' stroke='currentColor' strokeWidth='0.5' opacity='0.1' fill='currentColor' fillOpacity='0.03' />
      <circle cx='20' cy='15' r='4' stroke='currentColor' strokeWidth='0.75' opacity='0.2' />
      <circle cx='100' cy='15' r='4' stroke='currentColor' strokeWidth='0.75' opacity='0.2' />
      <circle cx='60' cy='100' r='4' stroke='currentColor' strokeWidth='0.75' opacity='0.2' />
      <line x1='24' y1='18' x2='30' y2='24' stroke='currentColor' strokeWidth='0.5' opacity='0.15' />
      <line x1='96' y1='18' x2='90' y2='24' stroke='currentColor' strokeWidth='0.5' opacity='0.15' />
      <line x1='60' y1='91' x2='60' y2='96' stroke='currentColor' strokeWidth='0.5' opacity='0.15' />
      <circle cx='10' cy='45' r='3' stroke='currentColor' strokeWidth='0.5' opacity='0.15' />
      <circle cx='110' cy='45' r='3' stroke='currentColor' strokeWidth='0.5' opacity='0.15' />
      <line x1='22' y1='38' x2='13' y2='43' stroke='currentColor' strokeWidth='0.4' opacity='0.1' />
      <line x1='98' y1='38' x2='107' y2='43' stroke='currentColor' strokeWidth='0.4' opacity='0.1' />
    </svg>
  ),
  product: (
    <svg
      viewBox='0 0 120 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-full h-full'
    >
      <path d='M60 10 L100 30 L100 78 L60 98 L20 78 L20 30 Z' stroke='currentColor' strokeWidth='1' opacity='0.25' />
      <path d='M60 10 L60 98' stroke='currentColor' strokeWidth='0.75' opacity='0.15' />
      <path d='M20 30 L100 78' stroke='currentColor' strokeWidth='0.75' opacity='0.15' />
      <path d='M100 30 L20 78' stroke='currentColor' strokeWidth='0.75' opacity='0.15' />
      <path d='M60 24 L86 38 L86 66 L60 80 L34 66 L34 38 Z' stroke='currentColor' strokeWidth='1' opacity='0.35' />
      <path d='M60 38 L72 46 L72 60 L60 68 L48 60 L48 46 Z' stroke='currentColor' strokeWidth='1.5' opacity='0.5' fill='currentColor' fillOpacity='0.05' />
      <circle cx='60' cy='54' r='4' fill='currentColor' opacity='0.6' />
      <circle cx='60' cy='10' r='2.5' fill='currentColor' opacity='0.35' />
      <circle cx='100' cy='30' r='2.5' fill='currentColor' opacity='0.35' />
      <circle cx='100' cy='78' r='2.5' fill='currentColor' opacity='0.35' />
      <circle cx='60' cy='98' r='2.5' fill='currentColor' opacity='0.35' />
      <circle cx='20' cy='78' r='2.5' fill='currentColor' opacity='0.35' />
      <circle cx='20' cy='30' r='2.5' fill='currentColor' opacity='0.35' />
      <circle cx='80' cy='18' r='1.5' fill='currentColor' opacity='0.25' />
      <circle cx='104' cy='54' r='1.5' fill='currentColor' opacity='0.25' />
      <circle cx='80' cy='90' r='1.5' fill='currentColor' opacity='0.25' />
      <circle cx='40' cy='90' r='1.5' fill='currentColor' opacity='0.25' />
      <circle cx='16' cy='54' r='1.5' fill='currentColor' opacity='0.25' />
      <circle cx='40' cy='18' r='1.5' fill='currentColor' opacity='0.25' />
    </svg>
  ),
  managed: (
    <svg
      viewBox='0 0 120 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-full h-full'
    >
      <circle cx='60' cy='60' r='48' stroke='currentColor' strokeWidth='0.75' opacity='0.12' />
      <circle cx='60' cy='60' r='38' stroke='currentColor' strokeWidth='1' opacity='0.2' />
      <circle cx='60' cy='60' r='28' stroke='currentColor' strokeWidth='1' opacity='0.3' />
      <path d='M60 12 A48 48 0 0 1 108 60' stroke='currentColor' strokeWidth='2.5' opacity='0.6' strokeLinecap='round' />
      <path d='M108 60 A48 48 0 0 1 60 108' stroke='currentColor' strokeWidth='2' opacity='0.4' strokeLinecap='round' />
      <path d='M60 108 A48 48 0 0 1 12 60' stroke='currentColor' strokeWidth='1.5' opacity='0.25' strokeLinecap='round' />
      <circle cx='60' cy='12' r='4' fill='currentColor' opacity='0.7' />
      <circle cx='108' cy='60' r='3.5' fill='currentColor' opacity='0.5' />
      <circle cx='60' cy='108' r='3' fill='currentColor' opacity='0.35' />
      <circle cx='12' cy='60' r='2.5' fill='currentColor' opacity='0.2' />
      <circle cx='60' cy='60' r='6' fill='currentColor' stroke='currentColor' strokeWidth='1.5' opacity='0.4' />
      <circle cx='60' cy='60' r='2.5' fill='currentColor' opacity='0.6' />
      <line x1='60' y1='32' x2='60' y2='22' stroke='currentColor' strokeWidth='0.75' opacity='0.2' />
      <line x1='88' y1='60' x2='98' y2='60' stroke='currentColor' strokeWidth='0.75' opacity='0.2' />
      <line x1='60' y1='88' x2='60' y2='98' stroke='currentColor' strokeWidth='0.75' opacity='0.2' />
      <line x1='32' y1='60' x2='22' y2='60' stroke='currentColor' strokeWidth='0.75' opacity='0.2' />
    </svg>
  ),
  governance: (
    <svg
      viewBox='0 0 120 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-full h-full'
    >
      <rect x='60' y='8' width='52' height='52' stroke='currentColor' strokeWidth='0.75' opacity='0.12' transform='rotate(45 60 60)' />
      <rect x='60' y='18' width='42' height='42' stroke='currentColor' strokeWidth='1' opacity='0.2' transform='rotate(45 60 60)' />
      <rect x='60' y='28' width='32' height='32' stroke='currentColor' strokeWidth='1' opacity='0.3' transform='rotate(45 60 60)' />
      <rect x='60' y='38' width='22' height='22' stroke='currentColor' strokeWidth='1.5' opacity='0.45' transform='rotate(45 60 60)' />
      <rect x='60' y='46' width='14' height='14' fill='currentColor' opacity='0.1' transform='rotate(45 60 60)' />
      <circle cx='60' cy='60' r='3' fill='currentColor' opacity='0.6' />
      <line x1='60' y1='4' x2='60' y2='116' stroke='currentColor' strokeWidth='0.4' opacity='0.08' />
      <line x1='4' y1='60' x2='116' y2='60' stroke='currentColor' strokeWidth='0.4' opacity='0.08' />
      <circle cx='60' cy='8' r='2' fill='currentColor' opacity='0.3' />
      <circle cx='112' cy='60' r='2' fill='currentColor' opacity='0.3' />
      <circle cx='60' cy='112' r='2' fill='currentColor' opacity='0.3' />
      <circle cx='8' cy='60' r='2' fill='currentColor' opacity='0.3' />
      <path d='M60 36 L72 44 L72 60 L60 70 L48 60 L48 44 Z' stroke='currentColor' strokeWidth='1' opacity='0.25' />
    </svg>
  ),
  align: (
    <svg
      viewBox='0 0 120 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-full h-full'
    >
      <path d='M60 10 L105 95 L15 95 Z' stroke='currentColor' strokeWidth='0.75' opacity='0.15' />
      <path d='M60 26 L95 88 L25 88 Z' stroke='currentColor' strokeWidth='1' opacity='0.25' />
      <path d='M60 42 L85 80 L35 80 Z' stroke='currentColor' strokeWidth='1' opacity='0.35' />
      <path d='M60 54 L75 74 L45 74 Z' stroke='currentColor' strokeWidth='1.5' opacity='0.5' fill='currentColor' fillOpacity='0.05' />
      <line x1='30' y1='74' x2='90' y2='74' stroke='currentColor' strokeWidth='0.5' opacity='0.15' />
      <line x1='35' y1='60' x2='85' y2='60' stroke='currentColor' strokeWidth='0.5' opacity='0.12' />
      <line x1='42' y1='48' x2='78' y2='48' stroke='currentColor' strokeWidth='0.5' opacity='0.1' />
      <circle cx='60' cy='10' r='4' fill='currentColor' opacity='0.6' />
      <circle cx='60' cy='10' r='8' stroke='currentColor' strokeWidth='0.75' opacity='0.2' />
      <circle cx='15' cy='95' r='2.5' fill='currentColor' opacity='0.3' />
      <circle cx='105' cy='95' r='2.5' fill='currentColor' opacity='0.3' />
      <circle cx='60' cy='64' r='2' fill='currentColor' opacity='0.4' />
      <line x1='60' y1='10' x2='60' y2='95' stroke='currentColor' strokeWidth='0.4' opacity='0.08' />
    </svg>
  ),
  validate: (
    <svg
      viewBox='0 0 120 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-full h-full'
    >
      <circle cx='60' cy='60' r='50' stroke='currentColor' strokeWidth='0.75' opacity='0.12' />
      <circle cx='60' cy='60' r='40' stroke='currentColor' strokeWidth='1' opacity='0.2' />
      <circle cx='60' cy='60' r='30' stroke='currentColor' strokeWidth='1' opacity='0.3' />
      <polyline points='38,62 52,76 82,42' stroke='currentColor' strokeWidth='3.5' opacity='0.7' strokeLinecap='round' strokeLinejoin='round' fill='none' />
      <path d='M60 10 A50 50 0 0 1 110 60' stroke='currentColor' strokeWidth='1.5' opacity='0.25' />
      <path d='M110 60 A50 50 0 0 1 60 110' stroke='currentColor' strokeWidth='1.5' opacity='0.2' />
      <circle cx='60' cy='10' r='2' fill='currentColor' opacity='0.3' />
      <circle cx='110' cy='60' r='2' fill='currentColor' opacity='0.3' />
      <circle cx='60' cy='110' r='2' fill='currentColor' opacity='0.3' />
      <circle cx='10' cy='60' r='2' fill='currentColor' opacity='0.3' />
      <line x1='60' y1='10' x2='60' y2='18' stroke='currentColor' strokeWidth='0.75' opacity='0.2' />
      <line x1='110' y1='60' x2='102' y2='60' stroke='currentColor' strokeWidth='0.75' opacity='0.2' />
    </svg>
  ),
  scale: (
    <svg
      viewBox='0 0 120 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-full h-full'
    >
      <rect x='10' y='72' width='20' height='38' rx='2' fill='currentColor' opacity='0.1' stroke='currentColor' strokeWidth='0.75' />
      <rect x='10' y='80' width='20' height='30' rx='1' fill='currentColor' opacity='0.08' />
      <rect x='36' y='50' width='20' height='60' rx='2' fill='currentColor' opacity='0.18' stroke='currentColor' strokeWidth='0.75' />
      <rect x='36' y='60' width='20' height='50' rx='1' fill='currentColor' opacity='0.1' />
      <rect x='62' y='32' width='20' height='78' rx='2' fill='currentColor' opacity='0.28' stroke='currentColor' strokeWidth='0.75' />
      <rect x='62' y='44' width='20' height='66' rx='1' fill='currentColor' opacity='0.12' />
      <rect x='88' y='14' width='20' height='96' rx='2' fill='currentColor' opacity='0.4' stroke='currentColor' strokeWidth='1' />
      <rect x='88' y='28' width='20' height='82' rx='1' fill='currentColor' opacity='0.15' />
      <polyline points='20,72 46,50 72,32 98,14' stroke='currentColor' strokeWidth='1.5' opacity='0.35' fill='none' strokeLinecap='round' />
      <circle cx='20' cy='72' r='2.5' fill='currentColor' opacity='0.4' />
      <circle cx='46' cy='50' r='2.5' fill='currentColor' opacity='0.4' />
      <circle cx='72' cy='32' r='2.5' fill='currentColor' opacity='0.4' />
      <circle cx='98' cy='14' r='3' fill='currentColor' opacity='0.6' />
      <line x1='8' y1='110' x2='112' y2='110' stroke='currentColor' strokeWidth='0.5' opacity='0.15' />
      <line x1='8' y1='80' x2='112' y2='80' stroke='currentColor' strokeWidth='0.3' opacity='0.06' />
      <line x1='8' y1='50' x2='112' y2='50' stroke='currentColor' strokeWidth='0.3' opacity='0.06' />
    </svg>
  ),
  expertise: (
    <svg
      viewBox='0 0 120 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-full h-full'
    >
      <circle cx='60' cy='30' r='8' stroke='currentColor' strokeWidth='1.5' opacity='0.6' />
      <circle cx='30' cy='70' r='8' stroke='currentColor' strokeWidth='1.5' opacity='0.6' />
      <circle cx='90' cy='70' r='8' stroke='currentColor' strokeWidth='1.5' opacity='0.6' />
      <circle cx='60' cy='95' r='6' stroke='currentColor' strokeWidth='1' opacity='0.4' />
      <circle cx='20' cy='40' r='5' stroke='currentColor' strokeWidth='1' opacity='0.3' />
      <circle cx='100' cy='40' r='5' stroke='currentColor' strokeWidth='1' opacity='0.3' />
      <line x1='60' y1='38' x2='35' y2='63' stroke='currentColor' strokeWidth='1' opacity='0.3' />
      <line x1='60' y1='38' x2='85' y2='63' stroke='currentColor' strokeWidth='1' opacity='0.3' />
      <line x1='38' y1='70' x2='82' y2='70' stroke='currentColor' strokeWidth='1' opacity='0.3' />
      <line x1='34' y1='77' x2='55' y2='90' stroke='currentColor' strokeWidth='0.75' opacity='0.2' />
      <line x1='86' y1='77' x2='65' y2='90' stroke='currentColor' strokeWidth='0.75' opacity='0.2' />
      <line x1='24' y1='44' x2='54' y2='28' stroke='currentColor' strokeWidth='0.75' opacity='0.2' />
      <line x1='96' y1='44' x2='66' y2='28' stroke='currentColor' strokeWidth='0.75' opacity='0.2' />
      <circle cx='60' cy='30' r='3' fill='currentColor' opacity='0.8' />
      <circle cx='30' cy='70' r='3' fill='currentColor' opacity='0.8' />
      <circle cx='90' cy='70' r='3' fill='currentColor' opacity='0.8' />
      <circle cx='60' cy='60' r='50' stroke='currentColor' strokeWidth='0.5' opacity='0.06' strokeDasharray='4 6' />
    </svg>
  ),
  transformation: (
    <svg
      viewBox='0 0 120 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-full h-full'
    >
      <rect x='45' y='45' width='30' height='30' stroke='currentColor' strokeWidth='1.5' opacity='0.7' rx='2' />
      <rect x='33' y='33' width='54' height='54' stroke='currentColor' strokeWidth='1' opacity='0.4' rx='3' />
      <rect x='21' y='21' width='78' height='78' stroke='currentColor' strokeWidth='0.75' opacity='0.25' rx='4' />
      <rect x='10' y='10' width='100' height='100' stroke='currentColor' strokeWidth='0.5' opacity='0.12' rx='5' />
      <path d='M60 45 L60 30' stroke='currentColor' strokeWidth='0.75' opacity='0.3' />
      <path d='M60 75 L60 90' stroke='currentColor' strokeWidth='0.75' opacity='0.3' />
      <path d='M45 60 L30 60' stroke='currentColor' strokeWidth='0.75' opacity='0.3' />
      <path d='M75 60 L90 60' stroke='currentColor' strokeWidth='0.75' opacity='0.3' />
      <polygon points='60,42 57,48 63,48' fill='currentColor' opacity='0.5' />
      <polygon points='60,78 57,72 63,72' fill='currentColor' opacity='0.5' />
      <circle cx='60' cy='60' r='4' fill='currentColor' opacity='0.6' />
    </svg>
  ),
  timeboxed: (
    <svg
      viewBox='0 0 120 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-full h-full'
    >
      <circle cx='60' cy='60' r='48' stroke='currentColor' strokeWidth='1' opacity='0.2' />
      <circle cx='60' cy='60' r='44' stroke='currentColor' strokeWidth='0.5' opacity='0.1' />
      <line x1='60' y1='14' x2='60' y2='22' stroke='currentColor' strokeWidth='1.5' opacity='0.6' transform='rotate(0 60 60)' />
      <line x1='60' y1='14' x2='60' y2='18' stroke='currentColor' strokeWidth='0.75' opacity='0.3' transform='rotate(30 60 60)' />
      <line x1='60' y1='14' x2='60' y2='18' stroke='currentColor' strokeWidth='0.75' opacity='0.3' transform='rotate(60 60 60)' />
      <line x1='60' y1='14' x2='60' y2='22' stroke='currentColor' strokeWidth='1.5' opacity='0.6' transform='rotate(90 60 60)' />
      <line x1='60' y1='14' x2='60' y2='18' stroke='currentColor' strokeWidth='0.75' opacity='0.3' transform='rotate(120 60 60)' />
      <line x1='60' y1='14' x2='60' y2='18' stroke='currentColor' strokeWidth='0.75' opacity='0.3' transform='rotate(150 60 60)' />
      <line x1='60' y1='14' x2='60' y2='22' stroke='currentColor' strokeWidth='1.5' opacity='0.6' transform='rotate(180 60 60)' />
      <line x1='60' y1='14' x2='60' y2='18' stroke='currentColor' strokeWidth='0.75' opacity='0.3' transform='rotate(210 60 60)' />
      <line x1='60' y1='14' x2='60' y2='18' stroke='currentColor' strokeWidth='0.75' opacity='0.3' transform='rotate(240 60 60)' />
      <line x1='60' y1='14' x2='60' y2='22' stroke='currentColor' strokeWidth='1.5' opacity='0.6' transform='rotate(270 60 60)' />
      <line x1='60' y1='14' x2='60' y2='18' stroke='currentColor' strokeWidth='0.75' opacity='0.3' transform='rotate(300 60 60)' />
      <line x1='60' y1='14' x2='60' y2='18' stroke='currentColor' strokeWidth='0.75' opacity='0.3' transform='rotate(330 60 60)' />
      <line x1='60' y1='60' x2='60' y2='28' stroke='currentColor' strokeWidth='2' opacity='0.7' strokeLinecap='round' />
      <line x1='60' y1='60' x2='78' y2='48' stroke='currentColor' strokeWidth='1.5' opacity='0.5' strokeLinecap='round' />
      <circle cx='60' cy='60' r='3' fill='currentColor' opacity='0.8' />
      <path d='M60 16 A44 44 0 1 1 16 60' stroke='currentColor' strokeWidth='2' opacity='0.15' strokeLinecap='round' />
    </svg>
  ),
  production: (
    <svg
      viewBox='0 0 120 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-full h-full'
    >
      <rect x='20' y='65' width='80' height='22' rx='3' stroke='currentColor' strokeWidth='1.5' opacity='0.6' />
      <rect x='25' y='42' width='70' height='20' rx='3' stroke='currentColor' strokeWidth='1' opacity='0.4' />
      <rect x='30' y='22' width='60' height='18' rx='3' stroke='currentColor' strokeWidth='0.75' opacity='0.25' />
      <circle cx='32' cy='76' r='2.5' fill='currentColor' opacity='0.5' />
      <circle cx='42' cy='76' r='2.5' fill='currentColor' opacity='0.5' />
      <circle cx='52' cy='76' r='2.5' fill='currentColor' opacity='0.3' />
      <line x1='35' y1='52' x2='65' y2='52' stroke='currentColor' strokeWidth='1' opacity='0.3' />
      <line x1='35' y1='56' x2='55' y2='56' stroke='currentColor' strokeWidth='0.75' opacity='0.2' />
      <polygon points='60,26 66,34 54,34' fill='currentColor' opacity='0.4' />
      <line x1='15' y1='92' x2='105' y2='92' stroke='currentColor' strokeWidth='0.5' opacity='0.15' />
      <line x1='15' y1='95' x2='105' y2='95' stroke='currentColor' strokeWidth='0.5' opacity='0.08' />
    </svg>
  ),
  partnerships: (
    <svg
      viewBox='0 0 120 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-full h-full'
    >
      <path d='M25 60 A35 35 0 0 1 60 25' stroke='currentColor' strokeWidth='2' opacity='0.5' strokeLinecap='round' />
      <path d='M95 60 A35 35 0 0 1 60 95' stroke='currentColor' strokeWidth='2' opacity='0.5' strokeLinecap='round' />
      <path d='M60 25 A35 35 0 0 1 95 60' stroke='currentColor' strokeWidth='1' opacity='0.25' strokeLinecap='round' />
      <path d='M60 95 A35 35 0 0 1 25 60' stroke='currentColor' strokeWidth='1' opacity='0.25' strokeLinecap='round' />
      <circle cx='60' cy='25' r='4' fill='currentColor' opacity='0.6' />
      <circle cx='95' cy='60' r='4' fill='currentColor' opacity='0.6' />
      <circle cx='60' cy='95' r='4' fill='currentColor' opacity='0.6' />
      <circle cx='25' cy='60' r='4' fill='currentColor' opacity='0.6' />
      <circle cx='60' cy='60' r='12' stroke='currentColor' strokeWidth='1' opacity='0.2' />
      <circle cx='60' cy='60' r='4' fill='currentColor' opacity='0.4' />
      <line x1='42' y1='42' x2='78' y2='78' stroke='currentColor' strokeWidth='0.5' opacity='0.15' strokeDasharray='3 4' />
      <line x1='78' y1='42' x2='42' y2='78' stroke='currentColor' strokeWidth='0.5' opacity='0.15' strokeDasharray='3 4' />
    </svg>
  ),
  domain: (
    <svg
      viewBox='0 0 120 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-full h-full'
    >
      <polygon points='60,12 100,32 100,72 60,92 20,72 20,32' stroke='currentColor' strokeWidth='1' opacity='0.2' fill='none' />
      <polygon points='60,22 90,38 90,68 60,84 30,68 30,38' stroke='currentColor' strokeWidth='1' opacity='0.3' fill='none' />
      <polygon points='60,32 80,44 80,64 60,76 40,64 40,44' stroke='currentColor' strokeWidth='1.5' opacity='0.5' fill='none' />
      <polygon points='60,42 70,50 70,60 60,68 50,60 50,50' stroke='currentColor' strokeWidth='1.5' opacity='0.7' fill='none' />
      <circle cx='60' cy='55' r='3' fill='currentColor' opacity='0.8' />
      <line x1='60' y1='12' x2='60' y2='42' stroke='currentColor' strokeWidth='0.5' opacity='0.1' />
      <line x1='20' y1='72' x2='50' y2='60' stroke='currentColor' strokeWidth='0.5' opacity='0.1' />
      <line x1='100' y1='72' x2='70' y2='60' stroke='currentColor' strokeWidth='0.5' opacity='0.1' />
      <circle cx='60' cy='12' r='2' fill='currentColor' opacity='0.3' />
      <circle cx='100' cy='32' r='2' fill='currentColor' opacity='0.3' />
      <circle cx='100' cy='72' r='2' fill='currentColor' opacity='0.3' />
      <circle cx='20' cy='32' r='2' fill='currentColor' opacity='0.3' />
      <circle cx='20' cy='72' r='2' fill='currentColor' opacity='0.3' />
      <circle cx='60' cy='92' r='2' fill='currentColor' opacity='0.3' />
      <line x1='60' y1='98' x2='60' y2='112' stroke='currentColor' strokeWidth='0.5' opacity='0.15' />
      <circle cx='60' cy='114' r='1.5' fill='currentColor' opacity='0.2' />
    </svg>
  ),
}

export type IconName = keyof typeof patterns

interface GeometricIconProps {
  name: IconName
  className?: string
}

export const GeometricIcon = ({ name, className = '' }: GeometricIconProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`geo-icon ${visible ? 'geo-visible' : ''} ${className}`}
      style={{ color: 'var(--bp-accent)' }}
    >
      {patterns[name]}
    </div>
  )
}
