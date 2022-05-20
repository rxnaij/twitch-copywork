import styled from 'styled-components'
import Section from './Section/Section'
import MegaCategory from './MegaCategory/MegaCategory'
import { megaCategoryData } from '../assets/channelData'

const MegaCategoriesSection = () => {
  return (
    <Section>
        <MegaCategoriesWrapper>
            {
                megaCategoryData.map(item => <MegaCategory key={`megacategory--${item.name}`} megaCategory={item} />)
            }
        </MegaCategoriesWrapper>
    </Section>
  )
}

const MegaCategoriesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 10px;

`

export default MegaCategoriesSection