import { CSSProperties, MouseEventHandler, useEffect, useRef, useState } from 'react'

import styled from 'styled-components'
import IconButton from '../common/IconButton/IconButton'

import { ReactComponent as VolumeMuteIcon } from '../../assets/icons/Volume Mute.svg'
import { ReactComponent as VolumeMidIcon } from '../../assets/icons/Volume Mid.svg'
import { ReactComponent as VolumeHighIcon } from '../../assets/icons/Volume High.svg'



const Volume = () => {
    // Volume state

    // Volume value: 0 (mute) - 100 (max)
    // Divided into 3 sections:
    // Muted
    // Medium (1-50)
    // High (50-100)

    // Slider visibility
    // Visible on hover over slider area or button (use visibility: none or opacity: 0 to hide slider without removing it from DOM)


    /*
    * Styling:
    * icon button <-> slider: 10px
    */
    return (
        <Wrapper>
            <IconButton
                icon={VolumeMuteIcon}
                tooltip="top"
                label="Unmute (m)"
            />
            <Slider

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

const Slider = () => {
    const sliderRef = useRef<HTMLDivElement>(null!)
    const handleRef = useRef<HTMLDivElement>(null!)

    const [handleIsMoving, setHandleIsMoving] = useState(false)
    const [handlePos, setHandlePos] = useState(0)

    const [sliderValue, setSliderValue] = useState(0)

    /**
     * Maps the physical position of the Handle to a percentage value between 0 and 1
     */
    useEffect(() => {
        /**
         * Returns a value within (amin...amax) re-mapped to (bmin...bmax).
         * I wish I was smart enough to understand this algorithm.
         */
        const mapRange = (value: number, amin: number, amax: number, bmin: number, bmax: number) => {
            const firstmap = (value - amin) / (amax - amin)
            return bmin + firstmap * (bmax - bmin)
        }

        // Don't run if the refs haven't initialized yet
        if (!sliderRef.current || !handleRef.current) return

        setSliderValue(mapRange(handlePos, 0, sliderRef.current.getBoundingClientRect().width - handleRef.current.getBoundingClientRect().width, 0, 1))
    }, [handlePos, setSliderValue])

    /**
     * Prepare the element for moving.
     * Note that this is a React MouseEventHandler passed to the Handle 
     */
    const onMouseDown: MouseEventHandler = (event) => {
        event.preventDefault()
        setHandleIsMoving(true)
        console.log("Handle is moused down")

        // We add the mousemove and mouseup event listeners to the `document` object to
        // allow the user to move the mouse and release the click button anywhere in the document
        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseup', onMouseUp)

        /**
         * Change the position of the Handle on mouse move.
         * Note that this is a DOM MouseEvent on the Document object and not a React MouseEvent.
        */
        function onMouseMove(event: MouseEvent) {
            // Since we only have access to the absolute position of the mouse in the viewport, we begin our calculations in absolute values
            // then convert them to relative values later

            // Minimum Handle x-position: left edge of slider
            const min = Math.round(sliderRef.current.getBoundingClientRect().left)
            // Maximum Handle x-position: right edge of slider minus width of Handle
            const max = Math.round(sliderRef.current.getBoundingClientRect().right - handleRef.current.getBoundingClientRect().width)

            // Convert mouse x-position to position of center point of Handle
            let handlePos = event.clientX - (handleRef.current.getBoundingClientRect().width / 2)      // mouse x-position (absolutely/in document) - Handle radius

            // Keep Handle position within bounds of Slider
            if (handlePos < min) {
                handlePos = min
            } else if (handlePos > max) {
                handlePos = max
            }

            // Convert handlePos to relative value within the Slider
            const relativePos = handlePos - min

            setHandlePos(relativePos)
        }

        /**
         * End movement and clean up event listeners on mouse up.
         * Note that this is a DOM MouseEvent on the Document object and not a React MouseEvent.
         */
        function onMouseUp() {
            setHandleIsMoving(false)

            document.removeEventListener('mouseup', onMouseUp)
            document.removeEventListener('mousemove', onMouseMove)
        }
    }

    return (
        <SliderWrapper ref={sliderRef}>
            <SliderTrack />
            <SliderRange />
            <Handle
                ref={handleRef}
                style={{
                    '--relative-left-position': handlePos + 'px'
                } as CSSProperties}
                onMouseDown={onMouseDown}
                onDragStart={() => false}
            />
        </SliderWrapper>
    )
}

const SliderWrapper = styled.div`
    position: relative;
    width: 110px;
    height: 16px;

    background-color: #ffffff50;

    cursor: pointer;
`

const Track = styled.div`
    width: 100%;
    height: 2px;
    border-radius: 2px;

    position: absolute;
    top: calc(50% - 1px);
`

const SliderTrack = styled(Track)`

    background-color: #ffffff;
`

const SliderRange = styled(Track)`

    background-color: #ff00ff;
`

const Handle = styled.div`
    position: relative;
    top: 0;
    left: var(--relative-left-position);
    width: 16px;
    height: 16px;
    border-radius: 50%;

    background-color: #fff;

    cursor: pointer;
`


export default Volume