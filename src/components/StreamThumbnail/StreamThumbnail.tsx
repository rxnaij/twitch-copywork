import styled from 'styled-components'
import { Channel } from '../../assets/channelData'

interface StreamThumbnailProps {
    channel: Channel
}

function StreamThumbnail({ channel }: StreamThumbnailProps) {
  return (
    <Wrapper>
        <ThumbnailContainer>
            <img src="" alt="" />
            <LiveIndicator>Live</LiveIndicator>
            <ViewerCount>{channel.viewers} viewers</ViewerCount>
        </ThumbnailContainer>
        <ChannelInfo>
            <ProfileImageContainer>
                <img src="" alt="" />
            </ProfileImageContainer>
            <Details>
                <Title href="#">{channel.title}</Title>
                <Name href="#">{channel.user.name}</Name>
                <Category href="#">{channel.category}</Category>
                <div className='tags'>
                    <span>English</span>
                </div>
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

const ThumbnailContainer = styled.div`
    position: relative;

    width: 323px;
    height: 168px;

    background-color: darkcyan;

    &:hover {
        transform: translate(10px, -10px);
    }
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

    font-size: ${14/13}rem;
    line-height: ${14/13}rem;
    font-weight: 600;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const Name = styled(UnstyledLink)`
    color: #ADADB8;
`

const Category = styled(UnstyledLink)`
    color: #ADADB8;
`

const Tags = styled.div``

export default StreamThumbnail