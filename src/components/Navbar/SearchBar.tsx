import { useRef } from 'react'
import styles from './SearchBar.module.css'
import IconButton from '../common/IconButton/IconButton'
import { ReactComponent as CloseIcon } from '../../assets/icons/Close.svg'
import { ReactComponent as SearchHistoryIcon } from '../../assets/icons/Search History.svg'
import { useOutsideClickListener } from './useOutsideClickListener'

const sampleSearchResults = [
    'Among Us',
    'xqcOW',
    'Apex Legends',
    'VALORANT',
    'pokimane'
]

export default function SearchBar() {
    const searchResultsRef = useRef<HTMLDivElement>(null)

    const {
        modalIsOpen: searchResultsOpen, 
        setModalIsOpen: setSearchResultsOpen
    } = useOutsideClickListener(searchResultsRef)

    return (
        <div ref={searchResultsRef} className={styles.container}>
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
