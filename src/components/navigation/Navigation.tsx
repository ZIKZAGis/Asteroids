import { Link } from "react-router-dom"
import styles from './Navigation.module.scss'

const Navigation = () => {
    return (
        <div className={styles.wrapper}>
            <h1>
                Look at this!
            </h1>
            <nav>
                <div className={styles.links}>
                    <Link className={styles.link} to='/'>Asteroids</Link>
                    <Link className={styles.link} to='/apod'>Astronomy Picture of the Day</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navigation