import { useState } from 'react'
import styled from 'styled-components'
import MenuWrapper from '../common/MenuWrapper/MenuWrapper';
import Menu from '../common/Menu/Menu';
import Dropdown from './Dropdown'
import Toggle from './Toggle'
import RadioButton from './RadioButton'
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
            <Menu name="advanced">
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

export default Settings