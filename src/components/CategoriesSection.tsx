import styled from 'styled-components'
import { categoryData } from '../assets/channelData'
import Category from './Category/Category'

function CategoriesSection() {
  return (
    <Wrapper>
        <h2 className="header"><a href="#">Categories</a> we think you'll like</h2>
        <CategoryWrapper>
            { categoryData.map(item => <Category category={item} />) }
        </CategoryWrapper>
    </Wrapper>
  )
}

// Reuse the Wrapper component in LiveChannelsSection.tsx
const Wrapper = styled.section`
  padding: 20px 0;
  width: 100%;
`

const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: row;

    gap: 10px;
`

export default CategoriesSection