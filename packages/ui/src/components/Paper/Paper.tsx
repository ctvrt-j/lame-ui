import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'
import styles from './Paper.module.css'
import type { 
  Radius,
  Elevation
} from '../../tokens/types'

export interface PaperProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: Elevation
  radius?: Radius
}

export const Paper = forwardRef<HTMLDivElement, PaperProps>(function Paper(
  { elevation = 0, radius = 'md', className, ...rest },
  ref,
) {
  const classes = [
    styles.paper,
    styles[`elevation-${elevation}`],
    styles[`radius-${radius}`],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div ref={ref} className={classes} {...rest} />
})
