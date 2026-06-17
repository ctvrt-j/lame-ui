import { forwardRef, useCallback, useEffect, useRef } from "react"
import type { InputHTMLAttributes } from "react"
import styles from './Checkbox.module.css'
import type { Size } from '../../tokens/types'

export interface CheckboxProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'children'> {
    size?: Size
    invalid?: boolean
    indeterminate?: boolean
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
    { size = 'md', invalid, indeterminate, className, ...rest },
    ref,
) {
    const innerRef = useRef<HTMLInputElement | null>(null)

    const setRef = useCallback(
        (node: HTMLInputElement | null) => {
            innerRef.current = node
            if (typeof ref === 'function') {
                ref(node)
            } else if (ref) {
                ref.current = node
            }
        },
        [ref],
    )

    useEffect(() => {
        if (innerRef.current) {
            innerRef.current.indeterminate = !!indeterminate
        }
    }, [indeterminate])

    const rootClasses = [styles.root, className].filter(Boolean).join(' ')
    const boxClasses = [
        styles.box,
        styles[`size-${size}`],
        invalid && styles.invalid,
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <span className={rootClasses}>
            <input
                ref={setRef}
                type="checkbox"
                className={styles.input}
                aria-invalid={invalid || undefined}
                {...rest}
            />
            <span className={boxClasses} aria-hidden="true">
                <svg
                    className={styles.check}
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="3,8 7,11 13,5" />
                </svg>
                <svg
                    className={styles.indeterminate}
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                >
                    <line x1="4" y1="8" x2="12" y2="8" />
                </svg>
            </span>
        </span>
    )
})
