import { createContext, forwardRef, useId, useMemo } from 'react'
import type { HTMLAttributes } from 'react'

interface RadioGroupContextValue {
    name: string
    value?: string
    onValueChange?: (value: string) => void
}

export const RadioGroupContext = createContext<RadioGroupContextValue | null>(null)

export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
    name?: string
    value?: string
    onValueChange?: (value: string) => void
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(function RadioGroup(
    { name, value, onValueChange, children, ...rest },
    ref,
) {
    const fallbackName = useId()
    const contextValue = useMemo(
        () => ({ name: name ?? fallbackName, value, onValueChange }),
        [name, fallbackName, value, onValueChange],
    )

    return (
        <div ref={ref} role="radiogroup" {...rest}>
            <RadioGroupContext.Provider value={contextValue}>
                {children}
            </RadioGroupContext.Provider>
        </div>
    )
})
