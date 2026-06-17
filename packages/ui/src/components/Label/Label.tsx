import { forwardRef } from "react"
import type { LabelHTMLAttributes } from "react"
import styles from './Label.module.css'
import type {
    Size
} from '../../tokens/types'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    size?: Size
    required?: boolean
    disabled?: boolean
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
    { size = 'md', required, disabled, className, children, ...rest },
    ref,
) {
    const classes = [
        styles.label,
        size && styles[`size-${size}`],
        disabled && styles.disabled,
        className,
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <label ref={ref} className={classes} {...rest}>
            {children}
            {required && (
                <span className={styles.required} aria-hidden="true">*</span>
            )}
        </label>
    )
})