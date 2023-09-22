import { Link } from "react-router-dom"
import styles from './Navigation.module.scss'
import {SiNasa} from 'react-icons/si'

const Navigation = () => {

    const openMenu = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.currentTarget.classList.toggle(styles.toggle_open)
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
                <button type='button' className={styles.toggle} onClick={(e) => openMenu(e)}>
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