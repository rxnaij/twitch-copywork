import { useState } from 'react'
import styled from 'styled-components'
import IconButton from '../common/IconButton/IconButton'
import { ReactComponent as VolumeMuteIcon } from '../../assets/icons/Volume Mute.svg'
// I know the icon files are named incorrectly...should probably change that
import { ReactComponent as VolumeHighIcon } from '../../assets/icons/Volume Low.svg'
import { ReactComponent as VolumeMidIcon } from '../../assets/icons/Volume High.svg'
import useHover from '../../hooks/useHover'
import Slider from './Slider'


const Volume = () => {
    const [sliderValue, setSliderValue] = useState(0)
    const [savedSliderValue, setSavedSliderValue] = useState(0)
    const VolumeIcon =
        (sliderValue === 0)
            ? VolumeMuteIcon
            : (sliderValue >= 1 && sliderValue < 50)
                ? VolumeMidIcon
                : VolumeHighIcon
    const [handleIsMoving, setHandleIsMoving] = useState(false)
    const { hover, detectHover } = useHover()

    return (
        <Wrapper
            {...detectHover}
        >
            <IconButton
                icon={VolumeIcon}
                tooltip="top"
                label={`${sliderValue === 0 ? `Unmute` : `Mute`} (m)`}
                onClick={() => {
                    if (sliderValue !== 0) {
                        setSavedSliderValue(sliderValue)
                        setSliderValue(0)
                    } else {
                        setSliderValue(savedSliderValue)
                        setSavedSliderValue(0)
                    }
                }}
            />
            <Slider
                isVisible={hover || handleIsMoving}
                setSliderValue={setSliderValue}
                setHandleIsMoving={setHandleIsMoving}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export default Volume