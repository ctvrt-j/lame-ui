import { forwardRef } from "react"
import type { TextareaHTMLAttributes } from "react"
import styles from './Textarea.module.css'
import type {
    Size,
    Radius,
} from '../../tokens/types'

export type TextareaResize = 'none' | 'vertical' | 'horizontal' | 'both'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    size?: Size
    radius?: Radius
    invalid?: boolean
    resize?: TextareaResize
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
    {size = 'md', radius, invalid, resize, className, ...rest },
    ref
) {
    const classes = [
        styles.textarea,
        size && styles[`size-${size}`],
        radius && styles[`radius-${radius}`],
        invalid && styles.invalid,
        resize && styles[`resize-${resize}`],
        className,
    ]
        .filter(Boolean)
        .join(' ')

    return <textarea ref={ref} className={classes} aria-invalid={invalid || undefined} {...rest} />
})