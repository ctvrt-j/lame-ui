import { forwardRef } from "react"
import type { HTMLAttributes } from "react"
import styles from './Text.module.css'
import {
    Size,
    TextTone,
    TextWeight,
} from '../../tokens/types'

export interface TextProps extends HTMLAttributes<HTMLParagraphElement>{
    size?: Size
    tone?: TextTone
    weight?: TextWeight
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(function Text(
    { size = 'md', tone = 'default', weight = 'regular', className, ...rest},
    ref,
) {
    const classes = [
        styles.text,
        styles[`size-${size}`],
        styles[`tone-${tone}`],
        styles[`weight-${weight}`],
        className,
    ]
        .filter(Boolean)
        .join(' ')

    return <p ref={ref} className={classes} {...rest} />
})