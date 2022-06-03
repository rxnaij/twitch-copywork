import React, { ComponentPropsWithoutRef, ReactNode, useEffect } from 'react'
import { useMenuWrapperState } from '../MenuWrapper/MenuWrapper'
import styles from './Menu.module.css'
import clsx from 'clsx'
import { CSSTransition } from 'react-transition-group'

interface MenuProps {
    children: React.ReactNode
    // The following props are only relevant in nested menus.
    name?: string
    base?: boolean      // If true, is designated as the "initial state" for the menu.
    style?: {}
}

export default function Menu({ children, name, base=false, style={} }: MenuProps) {
    const { activeMenu, setActiveMenu } = useMenuWrapperState()
    
    useEffect(() => {
        if (name && activeMenu === undefined && base)
            setActiveMenu(name)
        }, 
        // Disable reason:
        // This effect should only run once: when the parent MenuWrapper component mounts.
        //eslint-disable-next-line
        []
    )

    return (
        <CSSTransition
            in={activeMenu === name}
            timeout={0}
            classNames={{
                enter: styles.menuEnter,
                exit: styles.menuExit,
            }}
            unmountOnExit
        >
            <nav 
                className={styles.menu}
                style={style}
            >
                { children }
            </nav>
        </CSSTransition>
    )
}

/* ----- Child components ----- */

/* Header */
interface HeaderProps {
    children: ReactNode
}

const Header = ({ children }: HeaderProps) => 
    <h2 className={styles.header}>{ children }</h2>

/* Link */
interface LinkProps extends ComponentPropsWithoutRef<"a"> {
    children: ReactNode
}

const Link = ({ href, children, ...rest }: LinkProps) => (
    <a href={href} className={styles.link} {...rest}>
        { children }
    </a>
)

/* Divider */
const Border = () => (
    <div className={styles.border}>
        <div />
    </div>
)

/* Button */
interface ButtonProps {
    propertyIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>
    propertyName: string
    valueName: string
    valueIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>
    navigateTo?: string | "CLOSE"   // if set to `close`, signals that the containing MenuWrapper should close itself
}

const Button = ({
    propertyIcon,
    propertyName,
    valueName,
    valueIcon,
    navigateTo
}: ButtonProps) => {
    const PropertyIcon = propertyIcon
    const ValueIcon = valueIcon

    const { setActiveMenu, isOpen, setOpen } = useMenuWrapperState()

    return(
        <div 
            className={clsx(
                styles.button, 
                navigateTo && styles.linkButton
            )} 
            onClick={e => {
                e.preventDefault()
                if (navigateTo) {
                    if (navigateTo === `CLOSE`) setOpen(false)
                    else setActiveMenu(navigateTo)
                }
            }}
        >
            <div className={styles.property}>
                {
                    PropertyIcon &&
                    <PropertyIcon width={20} height={20} fill="#fff"/>
                }
                <span>{propertyName}</span>
            </div>
            <div className={styles.value}>
                <span>{valueName}</span>
                {
                    ValueIcon && <ValueIcon width={20} height={20} fill="#fff" />
                }
            </div>
        </div>
    )
}

Menu.Header = Header
Menu.Link = Link
Menu.Border = Border
Menu.Button = Button