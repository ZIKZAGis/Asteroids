import { Link } from "react-router-dom"
import styles from './Navigation.module.scss'
import {SiNasa} from 'react-icons/si'
import {useState } from "react"

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuHandler = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className={styles.wrapper} id='nav'>
            <a href="https://api.nasa.gov/">
                <SiNasa/> 
                <span>
                    api
                </span> 
            </a>
            <nav>
                <button type='button' className={`${styles.toggle} ${isMenuOpen && styles.toggle_open}`} onClick={() => menuHandler()}>
                    <div/>
                </button>
                <div className={styles.links}>
                    <Link className={styles.link} to='/'>Asteroids</Link>
                    <Link className={styles.link} to='/apod'>Astronomy Picture of the Day</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navigation