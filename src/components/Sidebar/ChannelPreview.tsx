import { useState } from 'react'
import styled from 'styled-components'
import { useSidebarState } from './Sidebar'
import { Channel } from '../../assets/channelData'

// Props type definition

interface ChannelPreviewProps {
    channel: Channel
}

// Component

function ChannelPreview({ channel }: ChannelPreviewProps) {
    const { collapsed } = useSidebarState()
    const [ isHovering, setHover ] = useState(false)

    return (
        <Wrapper 
            collapsed={collapsed} 
            className="channel-preview" 
            onMouseOver={() => setHover(true)} 
            onMouseOut={() => setHover(false)}
        >
            <Link collapsed={collapsed} href="#">
                <ProfileImage>
                    <img src={channel.user.profilePhotoURL} alt={channel.user.name} />
                </ProfileImage>
                <ChannelInfo collapsed={collapsed}>
                    <ChannelName fontSize={14 / 13}>{channel.user.name}</ChannelName>
                    <CategoryName>{channel.category}</CategoryName>
                </ChannelInfo>
                <ViewerCount collapsed={collapsed}>
                    { roundViewerCount(channel.viewers) }
                </ViewerCount>
            </Link>
            {
                isHovering &&
                <Tooltip>
                    { channel.title }
                </Tooltip>
            }
        </Wrapper>
    )
}

const roundViewerCount = (n: number) => {
    if (n < 1000) return n
    return `${n / 1000}K`
}

// Styling

interface CollapsibleProp {
    collapsed: boolean
}

const Wrapper = styled.li<CollapsibleProp>`
    width: ${props => props.collapsed ? `fit-content` : `240px`};
    list-style: none;
    padding: 0;

    position: relative;

    background-color: inherit;
`

const Link = styled.a<CollapsibleProp>`
    text-decoration: none;
    color: var(--color-text-primary);

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    padding: 5px 5px 4px 10px;
    padding-right: ${props => props.collapsed ? `10` : `5`}px;
    background-color: inherit;

    &:hover {
        color: unset;
        background-color: #ffffff05;
    }
`

const ProfileImage = styled.div`
    width: 30px;
    height: 30px;
    flex-shrink: 0; // Prevents flex siblings from forcing this image to shrink

    border-radius: 50%;
    background-color: white;
`

const ChannelInfo = styled.div<CollapsibleProp>`
    display: ${props => props.collapsed ? `none` : `flex`};

    flex-direction: column;
    flex-shrink: 100;

    // Hide overflowing text, i.e. long category name
    overflow: hidden;
    
    * {
        margin: 0;
    }
`

interface ChannelNameProps {
    readonly fontSize: number
}

// Uses Label / Primary text style in Figma doc
const ChannelName = styled.h3<ChannelNameProps>`
    font-size: ${props => props.fontSize}rem;
    line-height: ${props => props.fontSize}rem;
    font-weight: 600;
`

const CategoryName = styled.span`
    color: #ADADB8;

    // Truncate overflowing category name
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const ViewerCount = styled.span<CollapsibleProp>`
    align-self: flex-start;
    margin-left: auto;

    display: ${props => props.collapsed ? `none` : `flex`};
    gap: 5px;
    position: relative;
    
    font-weight: 500;
    
    &::before {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-top: 5px;

        background-color: #E91916;
        content: "";
    }
`

const Tooltip = styled.div`
    position: absolute;
    top: 0;
    left: calc(100% + 5px);

    width: 246px;
    padding: 5px 10px;
    border-radius: 4px;

    background-color: inherit;
    box-shadow: 0px 6px 16px #00000050;
`

export default ChannelPreview