import ErrorMessage from "../../components/error/ErrorMessage"
import Loader from "../../components/loader/Loader"
import { useAsteroids } from "../../hooks/asteroids"
import Asteroid from '../../components/asteroid/Asteroid'
import Button from '../../components/button/Button'
import styles from './AsteroidsPage.module.scss'
import earth from './../../earth.webp'
import AsteroidTracker from '../../components/asteroid_tracker/AsteroidTracker'

const AsteroidsPage = () => {
    const {
        asteroids,
        loading,
        error,
        prevLink,
        nextLink,
        nextLinkHandler,
        prevLinkHandler,
        toggleTrackHandler,
        checkAdded
    } = useAsteroids()

    return (
        <div className={styles.wrapper}>
            <h1 className="visually-hidden">Asteroids</h1>
            <div className={styles.earth}>
                <div className={styles.img_wrapper}>
                    <img src={earth} alt="" aria-hidden/>
                </div>
            </div>
            {error && <ErrorMessage error={error}/>}
            <AsteroidTracker/>
            <div className={styles.asteroids}>
                {asteroids && asteroids.map((asteroid) => (
                    <Asteroid 
                        asteroid={asteroid} 
                        toggle={toggleTrackHandler} 
                        check={checkAdded}
                    />
                ))}
            </div>
            {loading && <Loader/>}
            <div>
                <Button fn={prevLinkHandler} disabled={prevLink ? false : true} description='Назад'/>
                <Button fn={nextLinkHandler} disabled={nextLink ? false : true} description='Вперёд'/>
            </div>
        </div>
    )
}

export default AsteroidsPage