import styled from 'styled-components'
import { categoryData } from '../assets/channelData'
import { Link } from './common/typography/index'
import Section from './Section/Section'
import Category from './Category/Category'

function CategoriesSection() {
  return (
    <Section>
        <h2 className="header"><Link href="#">Categories</Link> we think you'll like</h2>
        <CategoryWrapper>
            { categoryData.map(item => <Category category={item} />) }
        </CategoryWrapper>
        <Border />
    </Section>
  )
}

const CategoryWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 10px;
`

const Border = styled.div`
  margin-top: 21px;
  border-bottom: 1px solid #ffffff10;

  flex: 1;
  height: 0px;
`

export default CategoriesSection