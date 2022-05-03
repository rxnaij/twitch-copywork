import styled from 'styled-components'
import Button from '../common/Button/Button'
import cat from '../../assets/cat.png'

const SignUpBanner = () => {
  return (
    <Wrapper>
        <ImageWrapper>
            <img src={cat} alt="Cool cat" />
        </ImageWrapper>
        <p><strong>Join the Twitch community!</strong></p>
        <p>Discover the best live streams anywhere.</p>
        <SignUpButton>Sign Up</SignUpButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;

    padding: 10px 20px;
    padding-right: 60px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    
    background-color: var(--color-brand-dark);

    p {
        font-size: var(--font-size-lg);
        margin: 0;
        strong {
            font-weight: 600;
        }
    }
`

const ImageWrapper = styled.div`
    width: 40px;
    height: 40px;

    img {
        width: 100%;
        height: 100%;
    }
`

const SignUpButton = styled(Button)`
    margin-left: auto;
    background-color: #fff;
    color: #000;
`

export default SignUpBanner