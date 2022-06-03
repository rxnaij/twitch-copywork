import { ReactNode, useRef, createContext, useContext, useState } from 'react'
import { useOutsideClickListener } from '../../../hooks/useOutsideClickListener'
import IconButton, { IconButtonProps } from '../IconButton/IconButton'
import styled from 'styled-components'

interface MenuState {
    activeMenu?: string
    setActiveMenu: (value: string | undefined) => void
    isOpen: boolean
    setOpen: (state: boolean) => void
}

const MenuWrapperStateContext = createContext({} as MenuState)

export function useMenuWrapperState() {
    const context = useContext(MenuWrapperStateContext)
    if (!context) throw new Error("useMenuWrapperState can only be called from within a MenuWrapper component.")
    return context
}

interface MenuWrapperProps extends IconButtonProps {
    children: ReactNode
    menuSide?: 'top' | 'bottom'
    menuAlignment?: 'left' | 'right'
}

export default function MenuWrapper({ children, menuSide = "top", menuAlignment = "left", ...props }: MenuWrapperProps) {
    const menuRef = useRef<HTMLDivElement>(null)
    const {
        modalIsOpen: isOpen,
        setModalIsOpen: setOpen
    } = useOutsideClickListener(menuRef)

    const [activeMenu, setActiveMenu] = useState<string | undefined>()

    return (
        <MenuWrapperStateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isOpen,
                setOpen,
            }}
        >
            <Wrapper ref={menuRef}>
                <IconButton
                    onClick={() => setOpen(!isOpen)}
                    {...props}
                />
                <MenuContainer menuSide={menuSide} menuAlignment={menuAlignment}>
                    {
                        isOpen &&
                        children
                    }
                </MenuContainer>
            </Wrapper>
        </MenuWrapperStateContext.Provider>
    )
}

/* MenuWrapper styling */

const Wrapper = styled.div`
    position: relative;
`

interface MenuContainerProps {
    menuSide: 'top' | 'bottom'
    menuAlignment: 'left' | 'right'
}

const MenuContainer = styled.div<MenuContainerProps>`
    & > nav {
        // Place menu on vertical side of button
        top: ${props => props.menuSide === `bottom` ? `30px` : `auto`};   // bottom side
        bottom: ${props => props.menuSide === `top` ? `30px` : `auto`};      // top side
    
        // Align menu to left or right edge of button
        left: ${props => props.menuAlignment === 'left' ? 0 : `unset`};     // left aligned
        right: ${props => props.menuAlignment === 'right' ? 0 : `unset`};       // right aligned
    
        /* overflow: hidden; */
        z-index: 10;
    }
    
`