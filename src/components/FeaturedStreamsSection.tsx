import styled from 'styled-components'
import Section from './Section/Section'
import FeaturedStream from './FeaturedStream/FeaturedStream'
import { featuredStreamsData } from '../assets/channelData'

const FeaturedStreamsSection = () => {
    return (
        <Section>
            <FeaturedStreamsWrapper>
                <button>
                    Advance Previous
                </button>
                <div className="carousel">
                    <div className="previous-streams"></div>
                    <FeaturedStream stream={featuredStreamsData[0]} />
                    <div className="next-streams"></div>
                </div>
                <button>Advance Next</button>
            </FeaturedStreamsWrapper>
        </Section>
    )
}

const FeaturedStreamsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export default FeaturedStreamsSection