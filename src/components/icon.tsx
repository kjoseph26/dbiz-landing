'use client'

import { Icon as IconifyIcon, type IconProps as IconifyIconProps } from '@iconify/react'

export type IconProps = IconifyIconProps

export const Icon = (props: IconProps) => <IconifyIcon {...props} />
