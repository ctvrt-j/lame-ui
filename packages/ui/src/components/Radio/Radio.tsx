import { forwardRef, useContext } from 'react'
import type { ChangeEvent, InputHTMLAttributes } from 'react'
import styles from './Radio.module.css'
import type { Size } from '../../tokens/types'
import { RadioGroupContext } from './RadioGroup'

export interface RadioProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'children'> {
    size?: Size
    invalid?: boolean
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
    { size = 'md', invalid, className, name, checked, onChange, ...rest },
    ref,
) {
    const group = useContext(RadioGroupContext)

    const groupChecked =
        group && group.value !== undefined ? group.value === rest.value : undefined

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event)
        group?.onValueChange?.(event.target.value)
    }

    const rootClasses = [styles.root, className].filter(Boolean).join(' ')
    const circleClasses = [
        styles.circle,
        styles[`size-${size}`],
        invalid && styles.invalid,
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <span className={rootClasses}>
            <input
                ref={ref}
                type="radio"
                className={styles.input}
                name={name ?? group?.name}
                checked={checked ?? groupChecked}
                onChange={handleChange}
                aria-invalid={invalid || undefined}
                {...rest}
            />
            <span className={circleClasses} aria-hidden="true" />
        </span>
    )
})
