import { useState, createContext, useContext, Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import ChannelPreview from './ChannelPreview'
import IconButton from '../common/IconButton/IconButton'
import { ReactComponent as Close } from '../../assets/icons/Close.svg'
import { data } from '../../assets/channelData'

// Sidebar state

interface SidebarState {
    collapsed: boolean
    setCollapsed: Dispatch<SetStateAction<boolean>>
}

const SidebarStateContext = createContext<SidebarState>(null!)

// Returns SidebarState object when called in a child function
export const useSidebarState = () => {
    const context = useContext(SidebarStateContext)
    if (!context) throw new Error("useSidebarState() must be called from within a SidebarStateContext.")
    
    return context
}

// Sidebar component

function Sidebar() {
    const [isCollapsed, setCollapsed] = useState(false)

    return(
        <SidebarStateContext.Provider value={{ 
            collapsed: isCollapsed, 
            setCollapsed: setCollapsed 
        }}>
            <Wrapper collapsed={isCollapsed}>
                <Header>
                    <Title collapsed={isCollapsed}>Recommended Channels</Title>
                    <IconButton 
                        icon={Close} 
                        tooltip="right" 
                        label="Collapse sidebar" 
                        onClick={() => setCollapsed(!isCollapsed)} 
                    />
                </Header>
                <ChannelListWrapper>
                    { data.map(channel => <ChannelPreview channel={channel} />) }
                </ChannelListWrapper>
            </Wrapper>
        </SidebarStateContext.Provider>
    )
}

// Component styling

interface CollapsibleProp {
    collapsed: boolean
}

const Wrapper = styled.nav<CollapsibleProp>`
    position: sticky;
    top: 50px;
    grid-area: sidebar;

    width: fit-content;

    background-color: #1f1f23;
    padding: 0;

    display: flex;
    flex-direction: column;
    gap: 5px;

    z-index: 1;
`

const Header = styled.header`
    padding: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.h2<CollapsibleProp>`
    // reset
    margin: 0;

    display: ${props => props.collapsed ? `none` : `unset`};

    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
`

const ChannelListWrapper = styled.ul`
    // reset
    padding: 0;
    margin: 0;
    
    background-color: inherit;
`

export default Sidebar