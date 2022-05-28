import { useState, CSSProperties } from 'react'
import styled from 'styled-components'
import HiddenInput from './HiddenInput'

interface ToggleProps {
    name: string
}

const Toggle = ({ name }: ToggleProps) => {
    const [isActive, setActive] = useState(false)

    return (
        <ToggleLabel>
            <span>{name}</span>
            <ToggleInput
                style={{
                    '--border-color': isActive ? `var(--color-brand-light)` : `#ADADB8`,
                    '--button-color': isActive ? `var(--color-brand-light)` : `#fff`,
                    '--button-position': isActive ? `18px` : `3px`
                } as CSSProperties}
            >
                <Checkmark
                    style={{
                        '--visibility': isActive ? 1.0 : 0
                    } as CSSProperties}
                >
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3.30769L3.45 6L8 1" stroke="#BF94FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Checkmark>
            </ToggleInput>
            <HiddenInput type="checkbox" checked={isActive} onChange={() => setActive(!isActive)} />
        </ToggleLabel>
    )
}

const Checkmark = styled.div`
    position: absolute;
    /* top: 8px; */
    left: 6px;
    opacity: var(--visibility);
`

const ToggleLabel = styled.label`
    display: flex;
    flex-direction: row;
    padding: 5px;
    gap: 10px;

    width: 270px;
    justify-content: space-between;
`

const ToggleInput = styled.span`
    position: relative;
    width: 35px;
    height: 20px;

    // Switch visual styles
    // Background
    &::before {
        position: absolute;
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        border: 2px solid var(--border-color);
        background-color: transparent;
        content: '';
    }
    // Button
    &::after {
        position: absolute;
        top: 3px;
        left: var(--button-position);
        display: block;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: var(--button-color);
        content: '';
        transition: left 100ms ease-out;
    }
`

export default Toggle