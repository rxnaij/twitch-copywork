import styled from 'styled-components'
import { Link } from '../common/typography'
import Tags from '../common/Tags/Tags'
import { FeaturedChannel } from '../../assets/channelData'
import Video from './Video'


interface FeaturedStreamProps {
    stream: FeaturedChannel
}

const FeaturedStream = ({ stream }: FeaturedStreamProps) => {
    return(
        <FeaturedStreamWrapper>
            <Video />
            <StreamInfo />
        </FeaturedStreamWrapper>
    )
}

const FeaturedStreamWrapper = styled.article`
    display: flex;
    flex-direction: row;
`

const ChannelInfo = () => {
    return(
        <ChannelInfoWrapper>
            <ChannelProfilePictureWrapper>
                <img />
            </ChannelProfilePictureWrapper>
            <div>
                <strong><Link>twitchgaming</Link></strong>
                <div><Link>Just Chatting</Link></div>
                <div>5.8K viewers</div>
            </div>
        </ChannelInfoWrapper>
    )
}

const ChannelInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
`

const ChannelProfilePictureWrapper = styled.div`
    width: 50px;
    height: 50px;

    border-radius: 50%;
    background-color: white;
`

const StreamInfo = () => {
    return(
        <StreamInfoWrapper>
            <ChannelInfo />
            <Tags tags={["English", "Co-Stream"]} />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam est, accusamus ipsa ea odio placeat fugiat atque sed ducimus fuga dolorem error sint nam modi deserunt corporis? Veniam, at assumenda.</p>
        </StreamInfoWrapper>
    )
}

const StreamInfoWrapper = styled.div`
    max-width: 220px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 10px;

    background-color: #18181A;
`

export default FeaturedStream