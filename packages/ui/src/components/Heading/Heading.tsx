import { forwardRef } from "react"
import type { HTMLAttributes } from "react"
import styles from './Heading.module.css'
import type {
    Size,
    TextTone,
    TextWeight,
} from '../../tokens/types'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>{
    level?: HeadingLevel
    size?: Size
    tone?: TextTone
    weight?: TextWeight
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(
    { level = 1, size = 'md', tone = 'default', weight = 'bold', className, ...rest},
    ref,
) {
    const classes = [
        styles.heading,
        styles[`size-${size}`],
        styles[`tone-${tone}`],
        styles[`weight-${weight}`],
        className,
    ]
        .filter(Boolean)
        .join(' ')

    const Tag = `h${level}` as const

    return <Tag ref={ref} className={classes} {...rest} />
})