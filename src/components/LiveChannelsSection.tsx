import styled from 'styled-components'
import Section from './Section/Section'
import StreamThumbnail from './StreamThumbnail/StreamThumbnail'
import ShowMore from './common/ShowMore/ShowMore'
import { data } from '../assets/channelData'
 
function LiveChannelsSection() {
    const channels = data.filter(ch => ch.stream)

    return(
        <Section>
            <h2 className="header">Live channels we think you'll like</h2>
            <StreamThumbnailWrapper>
                { channels.map(channel => <StreamThumbnail channel={channel} />) }
            </StreamThumbnailWrapper>
            <ShowMore />
        </Section>
    )
}

const StreamThumbnailWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
`

export default LiveChannelsSection