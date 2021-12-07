import { useState, useRef } from 'react'
import styles from './SearchBar.module.css'
import IconButton from '../common/IconButton/IconButton'
import { ReactComponent as SearchIcon } from '../../assets/icons/Search.svg'
import { ReactComponent as CloseIcon } from '../../assets/icons/Close.svg'
import { ReactComponent as SearchHistoryIcon } from '../../assets/icons/Search History.svg'
import { useOutsideClickListener } from '../../hooks/useOutsideClickListener'

const sampleSearchResults = [
    'Among Us',
    'xqcOW',
    'Apex Legends',
    'VALORANT',
    'pokimane'
]

export default function SearchBar() {
    const searchResultsRef = useRef<HTMLDivElement>(null)
    const [searchResults, setSearchResults] = useState(sampleSearchResults)

    const {
        modalIsOpen: searchResultsOpen, 
        setModalIsOpen: setSearchResultsOpen
    } = useOutsideClickListener(searchResultsRef)
    return (
        <div ref={searchResultsRef} className={styles.container}>
            <div className={styles.searchBar}>
                <input className={styles.field} onClick={() => setSearchResultsOpen(true)} type="text" name="search" id="" placeholder="Search" />
                <button className={styles.button}>
                    <SearchIcon width={20} height={20} fill="#ffffff" />
                </button>
            </div>
            {
                searchResultsOpen && <div className={styles.searchOverlay}>
                    {
                        searchResults.map((result, i) => (
                            <div className={styles.searchResults} key={result}>
                                <a className={styles.result} href="/#">
                                    <div className={styles.name}>
                                        <SearchHistoryIcon width={20} height={20} className={styles.searchResultsIcon} />
                                        <span>{result}</span>
                                    </div>
                                    <IconButton 
                                        icon={CloseIcon}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setSearchResults(
                                                [...searchResults.slice(0, i), ...searchResults.slice(i + 1)]
                                            )
                                        }}
                                    />
                                </a>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}
