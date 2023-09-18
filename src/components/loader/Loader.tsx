import styles from './Loader.module.scss'
import {GiAsteroid} from 'react-icons/gi'

const Loader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loading}>
                <div className={styles.loading_icon}>
                    <GiAsteroid/>
                </div>
                <p>Loading...</p>
            </div>
        </div>
    )
}

export default Loader