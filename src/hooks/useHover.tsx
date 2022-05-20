import { useState } from 'react'

/**
 * Provides hover state and props for detecting hover over an element.
 * @returns `hover` state variable, `setHover` setter function, and `detectHover` props object
 */

const useHover = (defaultState=false) => {
    const [hover, setHover] = useState(defaultState)

    const detectHover = {
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false)
    }

    return {
        hover,
        setHover,
        detectHover
    }
}

export default useHover