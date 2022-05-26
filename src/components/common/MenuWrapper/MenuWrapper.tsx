import { ReactNode, useRef, createContext, useContext, useState } from 'react'
import { useOutsideClickListener } from '../../../hooks/useOutsideClickListener'
import IconButton, { IconButtonProps } from '../IconButton/IconButton'
import styled from 'styled-components'

interface MenuState {
    activeMenu?: string
    setActiveMenu: (value: string | undefined) => void
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

export default function MenuWrapper({ children, menuSide="top", menuAlignment="left", ...props }: MenuWrapperProps) {
    const menuRef = useRef<HTMLDivElement>(null)
    const {
        modalIsOpen,
        setModalIsOpen
    } = useOutsideClickListener(menuRef)

    const [activeMenu, setActiveMenu] = useState<string | undefined>()
    
    return (
        <MenuWrapperStateContext.Provider value={{ activeMenu, setActiveMenu }}>
            <Wrapper
                ref={menuRef}
                menuSide={menuSide}
                menuAlignment={menuAlignment}
            >
                <IconButton 
                    onClick={() => setModalIsOpen(!modalIsOpen)} 
                    {...props} 
                />
                {
                    modalIsOpen &&
                    children
                }
            </Wrapper>
        </MenuWrapperStateContext.Provider>
    )
}

interface WrapperProps {
    menuSide: 'top' | 'bottom'
    menuAlignment: 'left' | 'right'
}

const Wrapper = styled.div<WrapperProps>`
    position: relative;
    z-index: 10;
`