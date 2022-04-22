import styled from 'styled-components'
import { CategoryData } from '../../assets/channelData'
import { Title, Detail } from '../common/typography'
import Thumbnail from '../common/Thumbnail/Thumbnail'
import Tags from '../common/Tags/Tags'
import { roundViewerCount } from '../../utilities/utilities'

interface CategoryProps {
    category: CategoryData
}

function Category({ category }: CategoryProps) {
  return (
    <Wrapper>
        <Thumbnail
            src={category.thumbnail} 
            alt={category.name} 
            aspectRatio={182 / 252}
        />
        <Details>
            <Title>{category.name}</Title>
            <Detail>{roundViewerCount(category.viewers)} viewers</Detail>
            <Tags tags={category.tags} />
        </Details>
    </Wrapper>
  )
}


const Wrapper = styled.article`
    flex: 1 0 0;
    min-width: 150px;
    max-width: 285px;

    display: flex;
    flex-direction: column;
    gap: 6px;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export default Category