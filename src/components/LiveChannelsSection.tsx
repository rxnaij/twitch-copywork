import styled from 'styled-components'
import StreamThumbnail from './StreamThumbnail/StreamThumbnail'
import { data } from '../assets/channelData'
 
function LiveChannelsSection() {
    const channels = data.filter(ch => ch.stream)

    return(
        <Wrapper>
            <h2>Live channels we think you'll like</h2>
            <StreamThumbnailWrapper>
                { channels.map(channel => <StreamThumbnail channel={channel} />) }
            </StreamThumbnailWrapper>
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

export default LiveChannelsSection