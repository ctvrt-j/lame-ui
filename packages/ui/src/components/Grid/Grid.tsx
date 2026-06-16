import { forwardRef } from "react"
import type { CSSProperties, HTMLAttributes } from "react"
import styles from './Grid.module.css'
import type {
  Space,
  Align,
  Justify,
  Radius
} from "../../tokens/types"

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number | string
  gap?: Space
  padding?: Space
  align?: Align
  justify?: Justify
  radius?: Radius
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(function Grid(
  { columns, gap, padding, align, justify, radius, className, style, ...rest },
  ref,
) {
  const classes = [
    styles.grid,
    padding !== undefined && styles[`padding-${padding}`],
    gap !== undefined && styles[`gap-${gap}`],
    align && styles[`align-${align}`],
    justify && styles[`justify-${justify}`],
    radius && styles[`radius-${radius}`],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const mergedStyle: CSSProperties | undefined =
    columns !== undefined
      ? {
          gridTemplateColumns:
            typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns,
          ...style,
        }
      : style

  return <div ref={ref} className={classes} style={mergedStyle} {...rest} />
})
