import { useState, CSSProperties } from 'react'
import styled, { CSSProp } from 'styled-components'
import MenuWrapper from '../common/MenuWrapper/MenuWrapper';
import Menu from '../common/Menu/Menu';
import { ReactComponent as SettingsIcon } from '../../assets/icons/Settings.svg'
import { ReactComponent as PlayIcon } from '../../assets/icons/Play.svg'
import { ReactComponent as ChevronRightIcon } from '../../assets/icons/ChevronRight.svg'
import { ReactComponent as ChevronLeftIcon } from '../../assets/icons/ChevronLeft.svg'

const Settings = () => {
    const [quality, setQuality] = useState('Auto (1080p)')
    return (
        <MenuWrapper icon={SettingsIcon} tooltip="top" label="Settings">
            <Menu name="base" base={true}>
                <Menu.Button
                    propertyName='Quality'
                    valueName="Auto"
                    valueIcon={ChevronRightIcon}
                    navigateTo="quality"
                />
                <Menu.Button
                    propertyName='Advanced'
                    valueName="Auto"
                    valueIcon={ChevronRightIcon}
                    navigateTo="advanced"
                />
                <Menu.Button
                    propertyName='Report Playback Issue'
                    valueName="Auto"
                    valueIcon={ChevronRightIcon}
                    navigateTo="quality"
                />
                <Menu.Button
                    propertyName='Popout Player'
                    valueName="Auto"
                    valueIcon={ChevronRightIcon}
                    navigateTo="quality"
                />
                <Menu.Button
                    propertyName='View Keyboard Shortcuts'
                    valueName="Auto"
                    valueIcon={ChevronRightIcon}
                    navigateTo="quality"
                />
            </Menu>
            <Menu name="quality" style={{
                maxHeight: 220,
                overflowY: 'scroll'
            }}>
                <Menu.Button
                    propertyName='Back'
                    propertyIcon={ChevronLeftIcon}
                    valueName=""
                    navigateTo="base"
                />
                <Menu.Border />
                <RadioButton name="quality" id="auto" value="Auto" onChange={() => setQuality("Auto")} checked={true} />
                <RadioButton name="quality" id="1080p60" value="1080p60" onChange={() => setQuality("1080p60 (Source)")} />
                <RadioButton name="quality" id="720p60" value="720p60" onChange={() => setQuality("720p60")} />
                <RadioButton name="quality" id="720p" value="720p" onChange={() => setQuality("720p")} />
                <RadioButton name="quality" id="480p" value="480p" onChange={() => setQuality("480p")} />
                <RadioButton name="quality" id="360p" value="360p" onChange={() => setQuality("360p")} />
                <RadioButton name="quality" id="144p" value="144p" onChange={() => setQuality("144p")} />
            </Menu>
            <Menu
                name="advanced"
            >
                <Menu.Button
                    propertyName='Back'
                    propertyIcon={ChevronLeftIcon}
                    valueName=""
                    navigateTo="base"
                />
                <Menu.Border />
                <Toggle name="Low Latency" />
                <Toggle name="Video Stats" />
                <Toggle name="Ad Stats" />
            </Menu>
        </MenuWrapper>
    )
}

interface RadioButtonProps {
    name: string
    id: string
    value: string
    checked?: boolean
    onChange: () => void
}

const RadioButton = ({ name, id, value, checked = false }: RadioButtonProps) => {
    return (
        <RadioLabel>
            <RadioInput type="radio" id={id} name={name} value={value} defaultChecked={checked} />
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

const RadioInput = styled.input`
    appearance: none;
    
    /* Hide native radio input; use special styling instead */
    &::before {
        display: inline-block;
        width: 20px;
        height: 20px;
        min-width: 20px;
        min-height: 20px;

        padding: 2px;

        border: 2px solid #ADADB8;
        border-radius: 50%;
        background: transparent;

        content: "";
    }

    &:hover::before {
        border-color: #fff;
    }

    &:checked::before {
        border-color: var(--color-brand-light);

        background: radial-gradient(50% 50% at 50% 50%, var(--color-brand-light) 0%, var(--color-brand-light) 60%, rgba(123, 97, 255, 0) 60.01%, rgba(123, 97, 255, 0) 100%);
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
                onClick={() => setActive(!isActive)}
            >
                <Checkmark
                    style={{
                        '--visibility': isActive ? 1.0 : 0
                    } as CSSProperties}
                >
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3.30769L3.45 6L8 1" stroke="#BF94FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Checkmark>
            </ToggleInput>
            <HiddenInput type="checkbox" />
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
    /* margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 0.25rem; */

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

const HiddenInput = styled.input`
    display: none;
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    border: 0;
    visibility: inherit;
    clip-path: polygon(0, 0, 0, 0);

    &::before {
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        background-color: white;
        border-radius: 50%;
    }
`

export default Settings