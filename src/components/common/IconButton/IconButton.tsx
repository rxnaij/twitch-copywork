import Button from '../Button/Button'
import styles from './IconButton.module.css'

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
        <Button variant="clear" className={styles.button} tooltipMessage={label}>
            <Icon width={20} height={20} fill="#FFFFFF" />
        </Button>
    )
}
