import { useState } from 'react'
import styled from 'styled-components'
import ChannelPreview from './ChannelPreview'
import IconButton from '../common/IconButton/IconButton'
import { ReactComponent as Close } from '../../assets/icons/Close.svg'

function Sidebar() {
    const [isCollapsed, setCollapsed] = useState(false)

    return(
        <Wrapper>
            <Header>
                <Title isCollapsed={isCollapsed}>Recommended Channels</Title>
                <IconButton 
                    icon={Close} 
                    tooltip="right" 
                    label="Collapse sidebar" 
                    onClick={() => setCollapsed(!isCollapsed)} 
                />
            </Header>
            <ChannelListWrapper>
                <ChannelPreview isCollapsed={isCollapsed} setCollapsed={() => setCollapsed(!isCollapsed)} />
                <ChannelPreview isCollapsed={isCollapsed} setCollapsed={() => setCollapsed(!isCollapsed)} />
                <ChannelPreview isCollapsed={isCollapsed} setCollapsed={() => setCollapsed(!isCollapsed)} />
            </ChannelListWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    width: fit-content;
    background-color: #1f1f23;
    padding: 0;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 5px;
`

interface CollapsibleProp {
    isCollapsed: boolean
}

const Header = styled.header`
    padding: 0 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.h2<CollapsibleProp>`
    display: ${props => props.isCollapsed ? `none` : `unset`};

    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
`

const ChannelListWrapper = styled.ul`
    padding: 0;
    background-color: inherit;
    margin: 0;
`

export default Sidebar