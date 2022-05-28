import { useState, useRef, CSSProperties } from 'react'
import styled from 'styled-components'
import MenuWrapper from '../common/MenuWrapper/MenuWrapper';
import Menu from '../common/Menu/Menu';
import Button from '../common/Button/Button'
import { ReactComponent as CloseIcon } from '../../assets/icons/Close.svg'
import { ReactComponent as SettingsIcon } from '../../assets/icons/Settings.svg'
import { ReactComponent as ChevronRightIcon } from '../../assets/icons/ChevronRight.svg'
import { ReactComponent as ChevronLeftIcon } from '../../assets/icons/ChevronLeft.svg'

const Settings = () => {
    const [quality, setQuality] = useState('auto')
    return (
        <MenuWrapper icon={SettingsIcon} tooltip="top" label="Settings" menuAlignment="right" >
            <Menu name="base" base={true}>
                <Menu.Button
                    propertyName="Close"
                    propertyIcon={CloseIcon}
                    valueName=""
                    navigateTo=''
                />
                <Menu.Border />
                <Menu.Button
                    propertyName='Quality'
                    valueName={quality}
                    valueIcon={ChevronRightIcon}
                    navigateTo="quality"
                />
                <Menu.Button
                    propertyName='Advanced'
                    valueName=""
                    valueIcon={ChevronRightIcon}
                    navigateTo="advanced"
                />
                <Menu.Button
                    propertyName='Report Playback Issue'
                    valueName=""
                    valueIcon={ChevronRightIcon}
                    navigateTo="reportPlaybackIssue"
                />
                <Menu.Button
                    propertyName='Popout Player'
                    valueName=""
                />
                <Menu.Button
                    propertyName='View Keyboard Shortcuts'
                    valueName=""
                />
            </Menu>
            <Menu name="quality" style={{
                maxHeight: 220,
                overflowY: 'scroll'
            }}>
                <Menu.Button
                    propertyName='Video Quality'
                    propertyIcon={ChevronLeftIcon}
                    valueName=""
                    navigateTo="base"
                />
                <Menu.Border />
                <RadioButton name="quality" id="Auto" value="Auto" isActive={quality === 'Auto'} onChange={() => setQuality("Auto")} />
                <RadioButton name="quality" id="1080p60" value="1080p60 (Source)" isActive={quality === '1080p60'} onChange={() => setQuality("1080p60")} />
                <RadioButton name="quality" id="720p60" value="720p60" isActive={quality === '720p60'} onChange={() => setQuality("720p60")} />
                <RadioButton name="quality" id="720p" value="720p" isActive={quality === '720p'} onChange={() => setQuality("720p")} />
                <RadioButton name="quality" id="480p" value="480p" isActive={quality === '480p'} onChange={() => setQuality("480p")} />
                <RadioButton name="quality" id="360p" value="360p" isActive={quality === '360p'} onChange={() => setQuality("360p")} />
                <RadioButton name="quality" id="144p" value="144p" isActive={quality === '144p'} onChange={() => setQuality("144p")} />
            </Menu>
            <Menu
                name="advanced"
            >
                <Menu.Button
                    propertyName='Advanced'
                    propertyIcon={ChevronLeftIcon}
                    valueName=""
                    navigateTo="base"
                />
                <Menu.Border />
                <Toggle name="Low Latency" />
                <Toggle name="Video Stats" />
                <Toggle name="Ad Stats" />
            </Menu>
            <Menu name="reportPlaybackIssue">
                <Menu.Button
                    propertyName="Report Playback Issue"
                    propertyIcon={ChevronLeftIcon}
                    valueName=""
                    navigateTo="base"
                />
                <Menu.Border />
                <Dropdown />
            </Menu>
        </MenuWrapper>
    )
}

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

const ToggleLabel = styled(RadioLabel)`
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

export default Settings