import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'
import styles from './Badge.module.css'
import type {
  Radius
} from '../../tokens/types'

export type BadgeTone = 'neutral' | 'success' | 'warning' | 'danger'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    tone?: BadgeTone,
    radius?: Radius,
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
    { tone = 'neutral', radius = 'full', className, ...rest},
    ref
) {
    const classes = [
        styles.badge,
        styles[`tone-${tone}`],
        styles[`radius-${radius}`],
        className
    ]
        .filter(Boolean)
        .join(' ')

    return <span ref={ref} className={classes} {...rest} />
})