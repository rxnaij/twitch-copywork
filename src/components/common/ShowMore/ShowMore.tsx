import styled from 'styled-components'

const ShowMore = () => {
    return(
        <Wrapper>
            <Border />
            <Label>Show more</Label>
            <Border />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 22px;

    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 12px;
`

const Border = styled.div`
    flex: 1;
    height: 0px;

    border-bottom: 1px solid #ffffff10;
`

const Label = styled.div`
    padding: 5px 10px;
    border-radius: 4px;

    color: var(--color-brand-light);
    font-weight: 700;

    &:hover {
        background: #ffffff20;
    }
`

export default ShowMore