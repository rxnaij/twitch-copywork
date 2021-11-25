import React, { ComponentPropsWithoutRef } from 'react'
import styles from './Button.module.css'
import clsx from 'clsx'

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    children?: React.ReactNode
    variant?: 'primary' | 'secondary' | 'clear'
    tooltipMessage?: string
}

const Button = ({
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
       />
    )
}

export default Button