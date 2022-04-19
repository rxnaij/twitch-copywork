import styled from 'styled-components'

interface ThumbnailProps extends WrapperProps {
    children?: React.ReactNode
    src: string
    alt: string
}

interface WrapperProps {
    aspectRatio: number
}

function Thumbnail({ children, src, alt, aspectRatio }: ThumbnailProps) {
    return(
        <Wrapper aspectRatio={aspectRatio}>
            <ImageContainer>
                <Image src={src} alt={alt} />
                { children }
            </ImageContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div<WrapperProps>`
    /* width: 100%; */
    aspect-ratio: ${props => props.aspectRatio};

    background-color: darkcyan;
`

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    transition: transform 0.15s linear;

    &:hover {
        transform: translate(5px, -5px);
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    background-color: darkviolet;
`

export default Thumbnail