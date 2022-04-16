import styled from 'styled-components'
import { Channel } from '../../assets/channelData'
import { roundViewerCount } from '../../utilities/utilities'

interface StreamThumbnailProps {
    channel: Channel
}

function StreamThumbnail({ channel }: StreamThumbnailProps) {
  return (
    <Wrapper>
        <ThumbnailContainerBackground>
            <ThumbnailContainer>
                <Thumbnail src="" alt="" />
                <LiveIndicator>Live</LiveIndicator>
                <ViewerCount>{roundViewerCount(channel.viewers)} viewers</ViewerCount>
            </ThumbnailContainer>
        </ThumbnailContainerBackground>
        <ChannelInfo>
            <ProfileImageContainer>
                <img src={channel.user.profilePhotoURL} alt={channel.user.name} />
            </ProfileImageContainer>
            <Details>
                <Title href="#">{channel.title}</Title>
                <Name href="#">{channel.user.name}</Name>
                <Category href="#">{channel.category}</Category>
                <TagContainer className='tags'>
                    <Tag>English</Tag>
                </TagContainer>
            </Details>
        </ChannelInfo>
    </Wrapper>
  )
}

const Wrapper = styled.article`
    flex: 1 0 323px;

    display: flex;
    flex-direction: column;
    gap: 10px;
`

// Thumbnail

const ThumbnailContainerBackground = styled.div`
    width: 100%;
    aspect-ratio: 1.92;

    background-color: darkcyan;
`

const ThumbnailContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    transition: transform 0.15s linear;

    &:hover {
        transform: translate(5px, -5px);
    }
`

const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
    background-color: darkviolet;
`

const Indicator = styled.span`
    position: absolute;
    left: 10px;

    padding: 2px 5px;
    border-radius: 4px;

    color: #fff;
    font-weight: 500;
`

const LiveIndicator = styled(Indicator)`
    top: 10px;
    background-color: red;
    text-transform: uppercase;
`

const ViewerCount = styled(Indicator)`
    bottom: 10px;
    background-color: #00000070;
`

// Channel info

const ChannelInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

const ProfileImageContainer = styled.div`
    min-width: 40px;
    min-height: 40px;
    width: 40px;
    height: 40px;

    border-radius: 50%;

    background-color: aliceblue;

    img {
        width: 100%;
        height: 100%;
    }
`


/** @TODO: how to get text-overflow: ellipsis working properly on the title? */
const Details = styled.div`
    flex: 1 1000 250px;
    width: 250px;   // This needs to be a hardcoded, arbitrary value between 0 and the width of the container

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;

    overflow: hidden;
`

const UnstyledLink = styled.a`
    color: unset;
    text-decoration: none;

    &:hover {
        color: revert;
    }
`

const Title = styled(UnstyledLink)`
    margin: 0;

    width: 100%; 

    font-size: var(--font-size-md);
    line-height: ${16.94/14};
    font-weight: 600;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const Name = styled(UnstyledLink)`
    color: #ADADB8;
    line-height: ${15.73 / 13};
`

const Category = styled(UnstyledLink)`
    color: #ADADB8;
    line-height: ${15.73 / 13};
`

// Tags

const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 7px;
`

const Tag = styled.div`
    padding: 3px 10px;
    border-radius: 16px;

    background-color: #323234;
    color: #C4C4C5;

    font-size: ${12/13}rem;
    font-weight: 600;

    &:hover {
        cursor: pointer;
        background: 
            linear-gradient(0deg, 
                hsla(0, 0%, 100%, 0.2), 
                hsla(0, 0%, 100%, 0.2)
            ), 
            #323234
        ;
    }
`

export default StreamThumbnail