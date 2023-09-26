import ErrorMessage from "../../components/error/ErrorMessage"
import Loader from "../../components/loader/Loader"
import { useAsteroids } from "../../hooks/asteroids"
import Asteroid from '../../components/asteroid/Asteroid'
import Button from '../../components/button/Button'
import styles from './AsteroidsPage.module.scss'
import earth from './../../earth.webp'
import AsteroidTracker from '../../components/asteroid_tracker/AsteroidTracker'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

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
            {asteroids && <AsteroidTracker remove={toggleTrackHandler}/>}
            <div className={styles.asteroids} style={asteroids ? {opacity: '1'} : {opacity: '0'}}>
                {asteroids && asteroids.map((asteroid) => (
                    <Asteroid 
                        asteroid={asteroid} 
                        toggle={toggleTrackHandler} 
                        check={checkAdded}
                        key={asteroid.id}
                    />
                ))}
            </div>
            {loading && <Loader/>}
            {asteroids &&
                <div className={styles.nav_button}>
                    <Button fn={prevLinkHandler} disabled={prevLink ? false : true}><AiOutlineArrowLeft/></Button>
                    <Button fn={nextLinkHandler} disabled={nextLink ? false : true}><AiOutlineArrowRight/></Button>
                </div>
            }
        </div>
    )
}

export default AsteroidsPage