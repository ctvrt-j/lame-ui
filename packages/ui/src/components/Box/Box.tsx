import { forwardRef } from "react"
import type { HTMLAttributes } from "react"
import styles from './Box.module.css'
import type {
  Space,
  Align,
  Justify,
  Display,
} from "../../tokens/types"

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  display?: Display
  padding?: Space
  gap?: Space
  align?: Align
  justify?: Justify
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(
  { display, padding, gap, align, justify, className, ...rest },
  ref,
) {
  const classes = [
    styles.box,
    display && styles[`display-${display}`],
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