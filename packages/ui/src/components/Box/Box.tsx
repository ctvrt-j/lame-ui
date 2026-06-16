import { forwardRef } from "react"
import type { HTMLAttributes } from "react"
import styles from './Box.module.css'

export type BoxSpace = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type BoxDisplay = 'block' | 'inline-block' | 'flex' | 'inline-flex' | 'grid'
export type BoxDirection = 'row' | 'column'
export type BoxAlign = 'start' | 'center' | 'end' | 'stretch'
export type BoxJustify = 'start' | 'center' | 'end' | 'between'
export type BoxRadius = 'none' | 'sm' | 'md' | 'lg'

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  padding?: BoxSpace
  display?: BoxDisplay
  direction?: BoxDirection
  gap?: BoxSpace
  align?: BoxAlign
  justify?: BoxJustify
  radius?: BoxRadius
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(
  { padding, display, direction, gap, align, justify, radius, className, ...rest },
  ref,
) {
  const classes = [
    styles.box,
    padding !== undefined && styles[`padding-${padding}`],
    display && styles[`display-${display}`],
    direction && styles[`direction-${direction}`],
    gap !== undefined && styles[`gap-${gap}`],
    align && styles[`align-${align}`],
    justify && styles[`justify-${justify}`],
    radius && styles[`radius-${radius}`],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div ref={ref} className={classes} {...rest} />
})