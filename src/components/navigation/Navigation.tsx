import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'
import {SiNasa} from 'react-icons/si'
import {useState } from "react"

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuHandler = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenuHandler = () => {
        setIsMenuOpen(false)
    }

    return (
        <div className={styles.wrapper}>
            <a href="https://api.nasa.gov/">
                <SiNasa/> 
                <span>
                    api
                </span> 
            </a>
            <nav>
                <button type='button' className={`${styles.toggle} ${isMenuOpen && styles.toggle_open}`} onClick={menuHandler}>
                    <div/>
                </button>
                <div className={styles.links}>
                    <NavLink className={({isActive}) => (isActive ? styles.link_active : styles.link)} onClick={closeMenuHandler} to='/'>Asteroids</NavLink>
                    <NavLink className={({isActive}) => (isActive ? styles.link_active : styles.link)} onClick={closeMenuHandler} to='/apod'>Astronomy Picture of the Day</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navigation