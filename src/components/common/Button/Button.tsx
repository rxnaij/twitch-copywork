import React, { ComponentPropsWithoutRef } from 'react'
import styles from './Button.module.css'
import clsx from 'clsx'

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' | 'clear'
    tooltipMessage?: string
}

const Button = ({
    children,
    className,
    variant = "primary",
    tooltipMessage = "",
    ...rest
}: ButtonProps) => {
    return (
        <button
            className={clsx(
                styles.button,
                styles[variant],
                className
            )}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button