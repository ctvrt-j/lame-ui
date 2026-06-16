import { forwardRef } from "react"
import type { HTMLAttributes } from "react"
import styles from './Stack.module.css'
import type {
  Direction,
  Space,
  Align,
  Justify,
} from "../../tokens/types"

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: Direction
  gap?: Space
  padding?: Space
  align?: Align
  justify?: Justify
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(
  { direction, gap, padding, align, justify, className, ...rest },
  ref,
) {
  const classes = [
    styles.stack,
    direction && styles[`direction-${direction}`],
    padding !== undefined && styles[`padding-${padding}`],
    gap !== undefined && styles[`gap-${gap}`],
    align && styles[`align-${align}`],
    justify && styles[`justify-${justify}`],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div ref={ref} className={classes} {...rest} />
})
