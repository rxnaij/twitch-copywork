import styles from './Navbar.module.css'
import Button from '../common/Button/Button'
import IconButton from '../common/IconButton/IconButton'
import SearchBar from './SearchBar'
import {ReactComponent as PrimeIcon} from '../../assets/icons/Prime.svg'
import {ReactComponent as ProfileIcon} from '../../assets/icons/Profile.svg'
import {ReactComponent as MenuIcon} from '../../assets/icons/Menu.svg'
import {ReactComponent as TwitchLogo} from '../../assets/icons/TwitchLogo.svg'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.nav}>
                <a href="/">
                    <TwitchLogo />
                </a>
                <a href="/" className={styles.link}>Browse</a>
                <IconButton icon={MenuIcon} tooltip="bottom" label="More" />
            </div>
            <SearchBar />
            <div className={styles.auth}>
                <IconButton icon={PrimeIcon} tooltip="top" label="Prime Rewards" />
                <Button variant="secondary">Log In</Button>
                <Button>Sign Up</Button>
                <IconButton icon={ProfileIcon} tooltip="bottom" label="" />
            </div>
        </nav>
    )
}
