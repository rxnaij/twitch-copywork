import styled from 'styled-components'

/**
 * Visually hides input without removing it from the DOM.
 * Allows accessibility for keyboard users
 */
const HiddenInput = styled.input`
    display: inline-block;
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1;
    width: 1;
    margin: -1;
    padding: 0;
    border: 0;
`

export default HiddenInput