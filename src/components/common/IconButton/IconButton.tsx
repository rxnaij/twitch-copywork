import Button, { ButtonProps } from '../Button/Button'
import styles from './IconButton.module.css'
import clsx from 'clsx'
import useHover from '../../../hooks/useHover'
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden'

export interface IconButtonProps extends ButtonProps {
    // SVG React component. To use: `import { ReactComponent as SVGIconName } from './path_to_icon' `
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>
    label: string  // Button label
    tooltip?: 'top' | 'right' | 'bottom'    // Position of tooltip
    className?: string
    // Customize icon dimensions
    iconWidth?: number
    iconHeight?: number
}

export default function IconButton({ 
    icon, 
    label, 
    tooltip, 
    className, 
    iconWidth=20,
    iconHeight=20,
    ...rest 
}: IconButtonProps) {
    const { hover, detectHover } = useHover()
    const Icon = icon

    return (
        <Button 
            className={clsx(
                styles.button,
                className
            )}
            variant="clear" 
            type="button"
            {...detectHover}
            {...rest}
        >
            <Icon 
                width={iconWidth} 
                height={iconHeight} 
                fill="#FFFFFF" 
            />
            {
                tooltip && hover &&
                <Tooltip position={tooltip} label={label} />
            }
            <VisuallyHidden>{label}</VisuallyHidden>
        </Button>
    )
}

interface TooltipProps {
    position: 'top' | 'right' | 'bottom'
    label: string
}

const Tooltip = ({ position, label }: TooltipProps) => {
    return(
        <div className={clsx(
            styles.tooltip,
            position && styles[position]
        )}>
            { label }
        </div>
    )
}