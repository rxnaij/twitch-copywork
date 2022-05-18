import styled from 'styled-components'
import { MegaCategoryData } from '../../assets/channelData'

interface MegaCategoryProps {
    megaCategory: MegaCategoryData
}

const MegaCategory = ({ megaCategory }: MegaCategoryProps) => {
  return (
    <Wrapper backgroundImage="">
        <IconWrapper>
            <img src={megaCategory.icon} alt="" />
        </IconWrapper>
        <span>{megaCategory.name}</span>
    </Wrapper>
  )
}

interface BackgroundImageProp {
    backgroundImage: string
}

const Wrapper = styled.article<BackgroundImageProp>`
    flex: 1 0 0;

    position: relative;

    padding: 12px 15px;
    border-radius: 10px;

    background: 
        ${props => props.backgroundImage}
        var(--color-brand)
    ;

    font-size: ${30 / 13}rem;
    font-weight: 600;
    line-height: 1.2;

    cursor: pointer;

    &:hover {
        background: 
            linear-gradient(0deg, var(--color-transparent), var(--color-transparent))
            var(--color-brand)
        ;
    }
`

const IconWrapper = styled.div`
    position: absolute;
    top: -28px;
    right: 10px;

    width: 69px;
    height: 69px;

    img {
        width: 100%;
        height: 100%;
    }
`

export default MegaCategory