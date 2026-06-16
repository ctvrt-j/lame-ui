import { forwardRef } from "react"
import type { InputHTMLAttributes } from "react"
import styles from './Input.module.css'
import type {
    Size,
    Radius,
} from '../../tokens/types'

export type InputType = 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'color'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    size?: Size
    type?: InputType
    radius?: Radius
    invalid?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    {size = 'md', type = 'text', radius, invalid, className, ...rest },
    ref
) {
    const classes = [
        styles.input,
        size && styles[`size-${size}`],
        radius && styles[`radius-${radius}`],
        invalid && styles.invalid,
        className,
    ]
        .filter(Boolean)
        .join(' ')

    return <input ref={ref} className={classes} aria-invalid={invalid || undefined} {...rest} />
})