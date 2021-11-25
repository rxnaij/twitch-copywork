import { useState, useEffect, useRef } from 'react'
import styles from './SearchBar.module.css'
import IconButton from '../common/IconButton/IconButton'
import { ReactComponent as CloseIcon } from '../../assets/icons/Close.svg'
import { ReactComponent as SearchHistoryIcon } from '../../assets/icons/Search History.svg'
import clsx from 'clsx'

const sampleSearchResults = [
    'Among Us',
    'xqcOW',
    'Apex Legends',
    'VALORANT',
    'pokimane'
]

/** @todo: Document this so you know WTF is going on 
 * then outsource to a hook because other menus and overlays use this behavior
*/
function listenForOutsideClicks(
    listening: boolean,
    setListening: (x: boolean) => void,
    ref: any,
    setOpen: (x: boolean) => void,
) {
    return () => {
        if (listening) return
        if (!ref.current) return
        setListening(true)
        document.addEventListener('click', (e) => {
            if (ref.current.contains(e.target)) return
            setOpen(false)
        })
    }
}

export default function SearchBar() {
    const ref = useRef(null)
    const [listening, setListening] = useState(false)
    const [searchResultsOpen, setSearchResultsOpen] = useState(false)
    // should I get rid of the event listener when done
    useEffect(listenForOutsideClicks(
        listening,
        setListening,
        ref,
        setSearchResultsOpen
    ), [])

    return (
        <div ref={ref} className={styles.container}>
            <div className={styles.searchBar}>
                <input className={styles.field} onClick={() => setSearchResultsOpen(true)} type="text" name="search" id="" placeholder="Search" />
                <button className={styles.button}>
                    <div className={styles.icon}></div>
                </button>
            </div>
            {
                searchResultsOpen && <div className={styles.searchOverlay}>
                    {
                        sampleSearchResults.map(result => {
                            return(
                                <div className={styles.searchResults} key={result}>
                                    <a className={styles.result} href="/">
                                        <div className={styles.name}>
                                            <SearchHistoryIcon width={20} height={20} fill="hsla(264, 100%, 64%, 1)" />
                                            <span>{result}</span>
                                        </div>
                                        <IconButton icon={CloseIcon} />
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}
