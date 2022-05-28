import { useState } from 'react'
import styled from 'styled-components'
import Button from '../common/Button/Button'

const Dropdown = () => {
    const [value, setValue] = useState('Select')

    const dropdownOptions = [
        `Audio and video stutter`,
        `Video stutters, but audio is fine`,
        `Video is completely black or doesn't load`,
        `Audio and video aren't synced`,
        `Fullscreen playback doesn't work`,
        `Advertisement playback doesn't work.`,
        `Advertisement has played too many times.`,
        `Advertisement is offensive or inappropriate.`,
        `Advertisement is too loud.`,
        `Advertisement is not relevant to my interests.`
    ]

    return (
        <DropdownWrapper>
            <label htmlFor="report-playback-issue-dropdown">Noticed a video playback issue? Let us know!</label>
            <DropdownSelect id="report-playback-issue-dropdown">
                <option value="" selected disabled >Select</option>
                {
                    dropdownOptions.map((item, i) => {
                        return(
                            <option 
                                key={`report-playback-option--${i}`} 
                                value={item}
                                onClick={() => setValue(item)}
                            >
                                {item}
                            </option>
                        )
                    })
                }
            </DropdownSelect>
            <Button>Submit</Button>
        </DropdownWrapper>
    )
}

const DropdownWrapper = styled.div`
    padding: 10px;
    width: 270px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
`

const DropdownSelect = styled.select`
    appearance: none;

    position: relative;
    align-self: stretch;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 5px 10px;
    background-color: #ffffff20;
    border: 2px solid none;
    border-radius: 2px;

    cursor: pointer;
    color: white;

    &:hover {
        border-color: #ffffff20;
    }

    &:focus, &:active {
        outline: none;
        border-color: var(--color-brand);
        background-color: black;
    }

    option {
        background-color: black;
        color: white;
    }
`

export default Dropdown