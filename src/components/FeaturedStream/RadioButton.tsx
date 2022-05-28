import { CSSProperties } from 'react'
import styled from 'styled-components'
import HiddenInput from './HiddenInput'

interface RadioButtonProps {
    name: string
    id: string
    value: string
    defaultChecked?: boolean
    isActive: boolean
    onChange: () => void
}

const RadioButton = ({ name, id, value, isActive, onChange }: RadioButtonProps) => {

    return (
        <RadioLabel
            onClick={(e) => {
                e.preventDefault()
                onChange()
            }}
            htmlFor={id}
        >
            <RadioInput
                style={{
                    '--border-color': isActive
                        ? `var(--color-brand-light)`
                        : `#ADADB8`,
                    '--border-color-hover': !isActive && '#fff',
                    '--button-background': isActive
                        ? `radial-gradient(50% 50% at 50% 50%, var(--color-brand-light) 0%, var(--color-brand-light) 60%, rgba(123, 97, 255, 0) 60.01%, rgba(123, 97, 255, 0) 100%)`
                        : `transparent`,
                    '--color-inactive': `#ADADB8`
                } as CSSProperties}
            />
            <HiddenInput type="radio" id={id} name={name} value={value} defaultChecked={isActive} />
            <span>{value}</span>
        </RadioLabel>
    )
}

const RadioLabel = styled.label`
    display: flex;
    flex-direction: row;
    padding: 5px;
    gap: 10px;

    width: 270px;
`

const RadioInput = styled.div`
    display: inline-block;
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;

    padding: 2px;

    border: 2px solid var(--border-color);
    border-radius: 50%;
    background: var(--button-background);

    ${RadioLabel}:hover & {
        border-color: var(--border-color-hover);
    }
`

export default RadioButton