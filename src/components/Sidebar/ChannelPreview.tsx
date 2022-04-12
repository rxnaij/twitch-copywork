import { useState } from 'react'
import styled from 'styled-components'

// Temporary; should probably replace with Context
interface ChannelPreviewProps {
    isCollapsed: boolean
    setCollapsed: () => void
}

function ChannelPreview({ isCollapsed, setCollapsed }: ChannelPreviewProps) {
    const [isHovering, setHover] = useState(false)

    return (
        <Wrapper collapsed={isCollapsed} className="channel-preview" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <Link href="#">
                <ProfileImage className="image-container">
                    <img className="profile-image" src="" alt="" />
                </ProfileImage>
                <ChannelInfo collapsed={isCollapsed}>
                    <ChannelName fontSize={14 / 13}>Symfuhny</ChannelName>
                    <CategoryName>Call of Duty: Vanguard</CategoryName>
                </ChannelInfo>
                <ViewerCount collapsed={isCollapsed}>
                    11.8K
                </ViewerCount>
            </Link>
            {
                isHovering &&
                <Tooltip>
                    Atomic Camo Grind !socials
                </Tooltip>
            }
        </Wrapper>
    )
}



const Wrapper = styled.li<CollapsibleProp>`
    width: ${props => props.collapsed ? `fit-content` : `240px`};
    list-style: none;
    padding: 0;

    position: relative;

    background-color: inherit;
`

const Link = styled.a`
    text-decoration: none;
    color: var(--color-text-primary);

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    padding: 5px 4px 5px 10px;
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

interface CollapsibleProp {
    collapsed: boolean
}

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
    font-weight: 600;
    line-height: ${props => props.fontSize}rem;
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

    width: fit-content;
    max-width: 246px;
    padding: 5px 10px;
    border-radius: 4px;

    background-color: inherit;
    box-shadow: 0px 6px 16px #00000050;
`

export default ChannelPreview