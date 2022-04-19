import styled from 'styled-components'
import { UnstyledLink } from '../typography/index'

interface TagsProps {
  tags?: string[]
}

function Tags({ tags }: TagsProps) {
  return (
    <Wrapper>
      {
        tags?.map(tag => (
          <Tag>
            { tag }
          </Tag>
        ))
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 7px;
`

const Tag = styled(UnstyledLink)`
    padding: 2px 10px;
    border-radius: 16px;

    background-color: #323234;
    color: #C4C4C5;

    font-size: ${12/13}rem;
    font-weight: 600;

    &:hover {
      cursor: pointer;
      background: 
          linear-gradient(0deg, 
              var(--color-transparent), 
              var(--color-transparent)
          ), 
          #323234
      ;
    }
`

export default Tags