import { useState } from 'react'
import Button, { ButtonProps } from '../Button/Button'
import styles from './IconButton.module.css'
import clsx from 'clsx'

export interface IconButtonProps extends ButtonProps {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>
    tooltip?: 'top' | 'right' | 'bottom'
    label?: string
}

export default function IconButton({ icon, tooltip, label, ...rest }: IconButtonProps) {
    const [hover, setHover] = useState(false)
    const Icon = icon
    return (
        <Button 
            type="button"
            variant="clear" 
            className={clsx(
                styles.button,
            )} 
            data-tooltip-message={label}
            aria-label={label}
            {...rest}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
                <Icon width={20} height={20} fill="#FFFFFF" />
            {
                label && hover &&
                <div className={clsx(
                    styles.tooltip,
                    tooltip && styles[tooltip]
                )}>
                    { label }
                </div>
            }
        </Button>
    )
}
