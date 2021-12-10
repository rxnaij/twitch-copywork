import React, { ComponentPropsWithoutRef, ReactNode, useEffect } from 'react'
import { useMenuWrapperState } from '../MenuWrapper/MenuWrapper'
import styles from './Menu.module.css'
import clsx from 'clsx'
import { CSSTransition } from 'react-transition-group'

interface MenuProps {
    children: React.ReactNode
    align?: "left" | "right"
    // The following props are only relevant in nested menus.
    name?: string
    base?: boolean      // If true, is designated as the "initial state" for the menu.
}

export default function Menu({ children, align="left", name, base=false }: MenuProps) {

    const { activeMenu, setActiveMenu } = useMenuWrapperState()
    
    useEffect(() => {
        if (name && activeMenu === undefined && base)
            setActiveMenu(name)
        }, 
        // Disable reason:
        // This effect should only run once: when the parent MenuWrapper
        // component mounts.
        //eslint-disable-next-line
        []
    )

    /** Parent container */
    const TransitionWrapper = ({ children }: { children: ReactNode }  ) => {
        if (name) {
            return (
                <CSSTransition
                    in={activeMenu === name}
                    timeout={500}
                    classNames={{
                        enter: styles.menuEnter,
                        enterActive: styles.menuEnterActive,
                        exit: styles.menuExit,
                        exitActive: styles.menuExitActive
                    }}
                    unmountOnExit
                >
                    { children }
                </CSSTransition>
            )
        }
        return <>{ children }</>
    }

    return (
        <TransitionWrapper>
            <nav 
                className={clsx(
                    styles.menu,
                    styles[`${align}-aligned`]
                )}
            >
                { children }
            </nav>
        </TransitionWrapper>
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
        <hr />
    </div>
)

/* Button */
interface ButtonProps {
    propertyIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>
    propertyName: string
    valueName: string
    valueIcon?: React.ReactNode
    navigateTo?: string
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

    const { setActiveMenu } = useMenuWrapperState()

    function navigate() {
        if (navigateTo) setActiveMenu(navigateTo)
    }

    return(
        <div 
            className={clsx(
                styles.button, 
                navigateTo && styles.linkButton
            )} 
            onClick={e => {
                e.preventDefault()
                navigate()
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
                    valueIcon
                }
            </div>
        </div>
    )
}

Menu.Header = Header
Menu.Link = Link
Menu.Border = Border
Menu.Button = Button