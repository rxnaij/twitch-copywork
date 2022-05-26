import { useState } from 'react'
import styled from 'styled-components'
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
                    navigateTo="quality"
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

const RadioButton = ({name, id, value, checked=false}: RadioButtonProps) => {
    return(
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

export default Settings