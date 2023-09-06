import {useState} from 'react'
import ErrorMessage from "../../components/error/ErrorMessage"
import Loader from "../../components/loader/Loader"
import { useAsteroids } from "../../hooks/asteroids"
import { useAppSelector } from "../../hooks/appHooks"
import Asteroid from '../../components/asteroid/Asteroid'
import Button from '../../components/button/Button'
import styles from './AsteroidsPage.module.scss'

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

    const [isOpen, setIsOpen] = useState(false)

    const trackedAsteroids = useAppSelector(state => state.asteroid.traceable)

    const toggleHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.wrapper}>
            {error && <ErrorMessage error={error}/>}
            <div>
                <p>Tracked asteroids</p>
                {trackedAsteroids.length >= 1 ? (trackedAsteroids.length) : 'nothing traceable'}
                {isOpen && 
                    <div>
                        {trackedAsteroids.map(item => (
                            <div key={item.id}>{item.name}</div>
                        ))}
                    </div>}
                {trackedAsteroids.length >= 1 && 
                    <Button fn={toggleHandler} description={isOpen ?  'Свернуть' : 'Показать отслеживаемые'}/>
                }
            </div>
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