import styled from 'styled-components'
import { Title, Detail } from '../common/typography/index'
import Tags from '../common/Tags/Tags'
import Thumbnail from '../common/Thumbnail/Thumbnail'
import { Channel } from '../../assets/channelData'
import { roundViewerCount } from '../../utilities/utilities'

interface StreamThumbnailProps {
    channel: Channel
}

function StreamThumbnail({ channel }: StreamThumbnailProps) {
  return (
    <Wrapper>
        <Thumbnail src={channel.stream!.thumbnail} alt="" aspectRatio={1.92}>
            <LiveIndicator>Live</LiveIndicator>
            <ViewerCount>{roundViewerCount(channel.viewers)} viewers</ViewerCount>
        </Thumbnail>
        <ChannelInfo>
            <ProfileImageContainer>
                <img src={channel.user.profilePhotoURL} alt={channel.user.name} />
            </ProfileImageContainer>
            <Details>
                <Title href="#">{channel.title}</Title>
                <Detail href="#">{channel.user.name}</Detail>
                <Detail href="#">{channel.category}</Detail>
                <Tags tags={channel.stream?.tags} />
            </Details>
        </ChannelInfo>
    </Wrapper>
  )
}

const Wrapper = styled.article`
    flex: 1 0 0;

    display: flex;
    flex-direction: column;
    gap: 10px;
`

// Thumbnail children

const Indicator = styled.span`
    position: absolute;
    left: 10px;

    padding: 1.5px 5px;
    border-radius: 4px;

    color: #fff;
    font-weight: 500;
`

export const LiveIndicator = styled(Indicator)`
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

export default StreamThumbnail