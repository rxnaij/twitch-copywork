import { useState, useReducer, createContext, useContext } from 'react'
import styled from "styled-components";
import IconButton from '../common/IconButton/IconButton'
import { LiveIndicator } from '../StreamThumbnail/StreamThumbnail'
import sampleVideoPoster from '../../assets/thumbnails/twitchgaming.png'
import MenuWrapper from '../common/MenuWrapper/MenuWrapper';
import Menu from '../common/Menu/Menu';
import useHover from '../../hooks/useHover';
import Volume from './Volume'

import { ReactComponent as PauseIcon } from '../../assets/icons/Pause.svg'
import { ReactComponent as PlayIcon } from '../../assets/icons/Play.svg'
import { ReactComponent as VolumeMuteIcon } from '../../assets/icons/Volume Mute.svg'
import { ReactComponent as SettingsIcon } from '../../assets/icons/Settings.svg'
import { ReactComponent as FullscreenIcon } from '../../assets/icons/Fullscreen.svg'

interface VideoState {
    hover: boolean
    isPlaying: boolean
    setPlaying: (x: boolean) => void
    // to add:
    // volume?
    // fullscreen?

}

const VideoContext = createContext<VideoState>(null!)

const Video = () => {
    const { hover, setHover, detectHover } = useHover()
    const [isPlaying, setPlaying] = useState(false)

    /**
     * Pause video when spacebar key is pressed
     * @param e keyboard event
     */
    const handleSpacebarEvent: React.KeyboardEventHandler = (e) => {
        e.preventDefault()
        if (e.key === ' ') setPlaying(!isPlaying)
    }

    /*
    * No hover, video playing --> don't show anything
    * Hover, video playing --> show controls
    * any hover, Video paused (not playing) --> show controls, show foreground cover
    */
    return(      
        <Wrapper {...detectHover} 
            onKeyDown={handleSpacebarEvent}
            tabIndex={0}
        >
            <VideoPlayer />
            <Controls isHovering={hover} isPlaying={isPlaying} setPlaying={setPlaying} />
            <LiveIndicator>LIVE</LiveIndicator>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;

    background-color: red;
`

const VideoPlayer = () => {
    return(
        <VideoPlayerWrapper poster={sampleVideoPoster} />
    )
}

const VideoPlayerWrapper = styled.video`
    max-width: 530px;
    /* aspect-ratio: 53/30; */
    background-color: aqua;
`

interface ControlsProps {
    isHovering: boolean
    isPlaying: boolean
    setPlaying: (x: boolean) => void
}

const Controls = ({ isHovering, isPlaying, setPlaying }: ControlsProps) => {
    const PlaybackIcon = isPlaying ? PauseIcon : PlayIcon

    // Manage visibility of controls and pause-foreground cover
    const controlsAreVisible = !isPlaying || isHovering
    const coverIsVisible = !isPlaying
    
    return(
        <ControlsWrapper controlsAreVisible={controlsAreVisible} coverIsVisible={coverIsVisible}>
            {
                !isPlaying &&
                <BigPause 
                    icon={PlayIcon} label="Pause video" 
                    iconWidth={72}
                    iconHeight={93}
                    onClick={() => setPlaying(!isPlaying)}
                />
            }
            <li>
                <Pause 
                    icon={PlaybackIcon} 
                    tooltip="top" 
                    label={`${isPlaying ? `Pause` : `Play`} (space)`}
                    onClick={() => setPlaying(!isPlaying)} 
                />
            </li>
            <li>
                <Volume />
            </li>
            <li style={{ marginLeft: 'auto' }}>
                {/* <Settings icon={SettingsIcon} tooltip="top" label="Settings" /> */}
                <MenuWrapper icon={SettingsIcon} tooltip="top" label="Settings">
                    <Menu name="base" base={true}>
                        <Menu.Button
                            propertyName='Quality'
                            valueName="Auto"
                            valueIcon={PlayIcon}
                            navigateTo=""
                        />
                    </Menu>
                </MenuWrapper>
            </li>
            <li>
                <Fullscreen icon={FullscreenIcon} tooltip="top" label="Fullscreen" />
            </li>
        </ControlsWrapper>
    )
}

interface ControlsWrapperProps {
    controlsAreVisible: boolean
    coverIsVisible: boolean
}

const ControlsWrapper = styled.ul<ControlsWrapperProps>`
    opacity: ${props => props.controlsAreVisible ? 1 : 0};
    transition: opacity 0.15s ease-out;

    margin: 0;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    // Background vignette
    background:
        linear-gradient(180deg, #000 0%, #00000000 50px, #00000000 calc(100% - 50px), #000 100%),   // Upper and lower vignette: triggers on hover or pause
        ${props => props.coverIsVisible ? `#00000060` : `#00000000` }    // Translucent screen: triggers on pause
    ;

    display: flex;
    flex-direction: row;
    align-items: flex-end;

    padding: 10px;

    list-style: none;
`

const BigPause = styled(IconButton)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    
    margin: auto;

    max-height: none;
    width: 120px;
    height: 122px;
`

const Pause = styled(IconButton)`

`
const Settings = styled(IconButton)`
    margin-left: auto;
`
const Fullscreen = styled(IconButton)`

`

export default Video