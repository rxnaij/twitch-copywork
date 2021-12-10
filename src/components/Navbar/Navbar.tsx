import styles from './Navbar.module.css'
import Button from '../common/Button/Button'
import IconButton from '../common/IconButton/IconButton'
import SearchBar from './SearchBar'
import {ReactComponent as PrimeIcon} from '../../assets/icons/Prime.svg'
import {ReactComponent as ProfileIcon} from '../../assets/icons/Profile.svg'
import {ReactComponent as MenuIcon} from '../../assets/icons/Menu.svg'
import {ReactComponent as TwitchLogo} from '../../assets/icons/TwitchLogo.svg'
import MenuWrapper from '../common/MenuWrapper/MenuWrapper'
import Menu from '../common/Menu/Menu'
import { CSSTransition } from 'react-transition-group'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.nav}>
                <a href="/">
                    <TwitchLogo />
                </a>
                <a href="/" className={styles.link}>Browse</a>
                <MenuWrapper icon={MenuIcon} tooltip="bottom" label="More">
                    <Menu>
                        <Menu.Header>
                            General
                        </Menu.Header>
                        <Menu.Link href="/">
                            About
                        </Menu.Link>
                        <Menu.Link href="/">
                            Advertisers
                        </Menu.Link>
                        <Menu.Link href="/">
                            Blog
                        </Menu.Link>
                        <Menu.Link href="/">
                            Developers
                        </Menu.Link>
                        <Menu.Link href="/">
                            Download Apps
                        </Menu.Link>
                        <Menu.Link href="/">
                            Gift Card
                        </Menu.Link>
                        <Menu.Link href="/">
                            IGDB
                        </Menu.Link>
                        <Menu.Link href="/">
                            Jobs
                        </Menu.Link>
                        <Menu.Link href="/">
                            Loot Cave - Merch Store
                        </Menu.Link>
                        <Menu.Link href="/">
                            Music on Twitch
                        </Menu.Link>
                        <Menu.Link href="/">
                            Partners
                        </Menu.Link>
                        <Menu.Link href="/">
                            Press
                        </Menu.Link>
                        <Menu.Link href="/">
                            Turbo
                        </Menu.Link>
                        <Menu.Border />
                        <Menu.Header>
                            Help &amp; Legal
                        </Menu.Header>
                        <Menu.Link href="/">
                            Accessibility Statement
                        </Menu.Link>
                        <Menu.Link href="/">
                            Ad Choices
                        </Menu.Link>
                        <Menu.Link href="/">
                            Community Guidelines
                        </Menu.Link>
                        <Menu.Link href="/">
                            Cookie Policy
                        </Menu.Link>
                        <Menu.Link href="/">
                            Help
                        </Menu.Link>
                        <Menu.Link href="/">
                            Privacy Policy
                        </Menu.Link>
                        <Menu.Link href="/">
                            Safety Center
                        </Menu.Link>
                        <Menu.Link href="/">
                            Security
                        </Menu.Link>
                        <Menu.Link href="/">
                            Terms
                        </Menu.Link>
                        <Menu.Button 
                            propertyIcon={PrimeIcon}
                            propertyName="Prime"
                            valueIcon={<ProfileIcon width={20} height={20} fill="#fff" />}
                            valueName="Test button"
                        />
                    </Menu>
                </MenuWrapper>
            </div>
            <SearchBar />
            <div className={styles.auth}>
                <IconButton icon={PrimeIcon} tooltip="bottom" label="Prime Rewards" />
                <Button variant="secondary">Log In</Button>
                <Button>Sign Up</Button>
                <IconButton icon={ProfileIcon} />
                <MenuWrapper icon={ProfileIcon} tooltip="bottom" label="Test">
                    
                    <Menu align="right" name="second">
                        <Menu.Button propertyName="To First" valueName="Go" navigateTo="first" />
                        <Menu.Link href="/#">
                            Here's another filler link
                        </Menu.Link>
                    </Menu>
                    <Menu align="right" name="first" base>
                        <Menu.Button propertyName="To Second" valueName="Go" navigateTo="second" />
                        <Menu.Link href="/#">
                            First Filler link
                        </Menu.Link>
                    </Menu>

                </MenuWrapper>
            </div>
        </nav>
    )
}
