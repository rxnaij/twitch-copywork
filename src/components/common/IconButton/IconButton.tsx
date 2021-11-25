import Button from '../Button/Button'
import styles from './IconButton.module.css'
import clsx from 'clsx'

interface IconButtonProps {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>
    tooltip?: 'top' | 'right' | 'bottom'
    label?: string
}

export default function IconButton({ icon, tooltip, label }: IconButtonProps) {
    const Icon = icon
    return (
        <Button 
            variant="clear" 
            className={clsx(
                styles.button,
                tooltip && styles[tooltip]
            )} 
            data-tooltip-message={label}
        >
            <Icon width={20} height={20} fill="#FFFFFF" />
        </Button>
    )
}
