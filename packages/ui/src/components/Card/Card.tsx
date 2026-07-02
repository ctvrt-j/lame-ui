import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'
import styles from './Card.module.css'
import { Paper } from '../Paper'
import type { Radius, Space } from '../../tokens/types'

export type CardVariant = 'outlined' | 'elevated'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  padding?: Space
  radius?: Radius
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = 'outlined', padding = 4, radius = 'md', className, ...rest },
  ref,
) {
  const classes = [
    styles.card, 
    styles[`padding-${padding}`], 
    className
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Paper
      ref={ref}
      elevation={variant === 'elevated' ? 2 : 0}
      radius={radius}
      className={classes}
      {...rest}
    />
  )
})
