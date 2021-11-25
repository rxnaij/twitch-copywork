import { useState, useEffect, MutableRefObject } from 'react'

/**
 * Detects when the user clicks outside of an element. 
 * Intended for use by elements such as modals and overlays, which close
 * when the user clicks outside of those elements.
 * @param modalRef a ref object that points to the modal element
 */
export function useOutsideClickListener(modalRef: MutableRefObject<HTMLElement | null>) {
    // The component will use this state hook to control whether the modal is active.
    const [modalIsOpen, setModalIsOpen] = useState(false)

    useEffect(() => {
        if (!modalRef.current) return

        // We store the modal to a variable in case modalRef.current changes value before cleanup.
        const modal = modalRef.current

        // Close the modal when clicked outside.
        const closeModalHandler = (e: MouseEvent) => {
            // Casting the EventTarget to an HTMLElement here because I don't think
            // the user will be clicking any non-HTML elements. I hope that's OK
            if (modal.contains(e.target as HTMLElement)) return
            setModalIsOpen(false)
        }

        // Listen for a click event outside of the element.
        document.addEventListener('click', closeModalHandler)

        // Clean up event listener when component unmounts.
        return () => {
            document.removeEventListener('click', closeModalHandler)
        }
    }, [modalRef])

    return {
        modalIsOpen,
        setModalIsOpen
    }
}