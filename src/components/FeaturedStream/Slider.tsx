import { useState, useRef, useEffect, MouseEventHandler, CSSProperties } from 'react'
import styled from 'styled-components'

interface SliderProps {
    isVisible: boolean
    setSliderValue: (n: number) => void
    setHandleIsMoving: (x: boolean) => void
}

const Slider = ({ isVisible, setSliderValue, setHandleIsMoving }: SliderProps) => {
    const sliderRef = useRef<HTMLDivElement>(null!)
    const handleRef = useRef<HTMLDivElement>(null!)

    const [handlePos, setHandlePos] = useState(20)

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

        const maxLength = sliderRef.current.getBoundingClientRect().width - handleRef.current.getBoundingClientRect().width
        setSliderValue(mapRange(handlePos, 0, maxLength, 0, 1))
    }, [handlePos, setSliderValue])

    /**
     * Prepare the element for moving.
     * Note that this is a React MouseEventHandler passed to the Handle 
     */
    const onMouseDown: MouseEventHandler = (event) => {
        event.preventDefault()
        setHandleIsMoving(true)

        moveHandle(event)   // Moves mouse to location on mousedown

        // We add the mousemove and mouseup event listeners to the `document` object to
        // allow the user to move the mouse and release the click button anywhere in the document
        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseup', onMouseUp)

        /**
         * Move handle to mouse's location
         * @param event Can be either a DOM MouseEvent or React MouseEvent
         */
        function moveHandle(event: MouseEvent | React.MouseEvent) {
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
         * Change the position of the Handle on mouse move.
         * Note that this is a DOM MouseEvent on the Document object and not a React MouseEvent.
        */
        function onMouseMove(event: MouseEvent) {
            moveHandle(event)
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
        <SliderWrapper
            ref={sliderRef}
            onMouseDown={onMouseDown}
            style={{
                '--is-visible': isVisible ? 1 : 0
            } as CSSProperties}
        >
            <SliderTrack />
            <SliderRange
                style={{
                    '--width': handlePos + 'px'
                } as CSSProperties}
            />
            <Handle
                ref={handleRef}
                style={{
                    '--relative-left-position': handlePos + 'px'
                } as CSSProperties}
                onMouseDown={onMouseDown}
            />
        </SliderWrapper>
    )
}


const SliderWrapper = styled.div`
    position: relative;
    width: 110px;
    height: 16px;

    opacity: var(--is-visible);
    transition: 0.15s ease-out opacity;

    cursor: pointer;
`

/** 
 * Base component for SliderTrack and SliderRange
 */
const Track = styled.div`
    width: 100%;
    height: 2px;
    border-radius: 2px;

    position: absolute;
    top: calc(50% - 1px);
`

/**
 * Background track
 */
const SliderTrack = styled(Track)`
    background-color: #ffffff50;
`

/**
 * Foreground range
 */
const SliderRange = styled(Track)`
    width: var(--width);
    background-color: #ffffff;
`

const Handle = styled.div`
    position: relative;
    top: 0;
    bottom: 0;
    left: var(--relative-left-position);
    width: 16px;
    height: 16px;
    border-radius: 50%;

    background-color: #fff;

    cursor: pointer;
`

export default Slider