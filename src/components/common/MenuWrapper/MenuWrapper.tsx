import { ReactNode, useRef, createContext, useContext, useState } from 'react'
import { useOutsideClickListener } from '../../../hooks/useOutsideClickListener'
import IconButton, { IconButtonProps } from '../IconButton/IconButton'

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
}

export default function MenuWrapper({ children, ...props }: MenuWrapperProps) {
    const menuRef = useRef<HTMLDivElement>(null)
    const {
        modalIsOpen,
        setModalIsOpen
    } = useOutsideClickListener(menuRef)

    const [activeMenu, setActiveMenu] = useState<string | undefined>()
    
    return (
        <MenuWrapperStateContext.Provider value={{ activeMenu, setActiveMenu }}>
            <div 
                style={{ position: 'relative' }}
                ref={menuRef}
            >
                <IconButton 
                    onClick={() => setModalIsOpen(!modalIsOpen)} 
                    {...props} 
                />
                {
                    modalIsOpen &&
                    children
                }
            </div>
        </MenuWrapperStateContext.Provider>
    )
}
