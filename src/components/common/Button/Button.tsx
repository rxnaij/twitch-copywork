import styles from './Button.module.css'
import clsx from 'clsx'

interface ButtonProps {
    children: React.ReactNode
    className?: string
    variant?: 'primary' | 'secondary' | 'clear'
    onClick?: () => void
    tooltipMessage?: string
}

export default function Button({ children, className, variant="primary", onClick, tooltipMessage="" }: ButtonProps) {

    return (
        <button
            className={clsx(
                styles.button,
                styles[variant],
                className
            )}
            onClick={onClick}
            data-tooltip-message={tooltipMessage}
        >
            { children }
        </button>
    )
}
