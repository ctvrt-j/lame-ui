import { forwardRef } from "react"
import type { InputHTMLAttributes } from "react"
import styles from './Switch.module.css'
import type { Size } from '../../tokens/types'

export interface SwitchProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'children'> {
    size?: Size
    invalid?: boolean
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
    { size = 'md', invalid, className, ...rest },
    ref,
) {

    const rootClasses = [
        styles.root, 
        className
    ]
        .filter(Boolean)
        .join(' ')
        
    const trackClasses = [
        styles.track,
        styles[`size-${size}`],
        invalid && styles.invalid,
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <span className={rootClasses}>
            <input
                ref={ref}
                type="checkbox"
                role="switch"
                className={styles.input}
                aria-invalid={invalid || undefined}
                {...rest}
            />
            <span className={trackClasses} aria-hidden="true">
                <span className={styles.thumb} />
            </span>
        </span>
    )
})
