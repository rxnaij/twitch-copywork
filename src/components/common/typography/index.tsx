import styled from 'styled-components'

const Link = styled.a`
    color: var(--color-brand-light);
    text-decoration: none;
`

const UnstyledLink = styled.a`
    color: unset;
    text-decoration: none;

    &:hover {
        color: revert;
    }
`


const Title = styled(UnstyledLink)`
    margin: 0;

    width: 100%; 

    font-size: var(--font-size-md);
    line-height: ${16.94/14};
    font-weight: 600;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const Detail = styled(UnstyledLink)`
    color: #ADADB8;
    line-height: ${15.73 / 13};
`

export {
    UnstyledLink,
    Link,
    Title,
    Detail
}
