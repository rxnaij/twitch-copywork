import styled from 'styled-components'
import StreamThumbnail from './StreamThumbnail/StreamThumbnail'
import { data } from '../assets/channelData'
 
function LiveChannelsSection() {
    const channels = data.filter(ch => ch.stream)

    return(
        <Wrapper>
            <h2 className="header">Live channels we think you'll like</h2>
            <StreamThumbnailWrapper>
                { channels.map(channel => <StreamThumbnail channel={channel} />) }
            </StreamThumbnailWrapper>
            <ShowMoreWrapper>
                <Border />
                <Label>Show more</Label>
                <Border />
            </ShowMoreWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    h2 {
        margin-bottom: 10px;
    }
`

const StreamThumbnailWrapper = styled.div`
    display: flex;
    gap: 10px;
`

const ShowMoreWrapper = styled.div`
    margin-top: 22px;

    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 12px;
`

const Border = styled.div`
    flex: 1;
    height: 0px;

    border-bottom: 1px solid #ffffff10;
`

const Label = styled.div`
    padding: 5px 10px;
    border-radius: 4px;

    color: var(--color-brand-light);
    font-weight: 700;

    &:hover {
        background: #ffffff20;
    }
`

export default LiveChannelsSection