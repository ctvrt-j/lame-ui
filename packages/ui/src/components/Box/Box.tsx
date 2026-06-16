import { forwardRef } from "react"
import type { HTMLAttributes } from "react"
import styles from './Box.module.css'
import type { 
  Space,
  Display,
  Direction,
  Align,
  Justify, 
  Radius
} from "../../tokens/types"

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  padding?: Space
  display?: Display
  direction?: Direction
  gap?: Space
  align?: Align
  justify?: Justify
  radius?: Radius
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