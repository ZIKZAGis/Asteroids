import {useState} from 'react'
import Button from '../../components/button/Button'
import { useAppSelector } from "../../hooks/appHooks"
import styles from './AsteroidTracker.module.scss'

const AsteroidTracker = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleHandler = () => {
        setIsOpen(!isOpen)
    }
    const trackedAsteroids = useAppSelector(state => state.asteroid.traceable)

    return (
        <div className={styles.wrapper}>
            <div>
                <div>
                    <p>Tracked asteroids</p>
                    {trackedAsteroids.length >= 1 ? `${trackedAsteroids.length} tracked` : 'nothing traceable'}
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
            </div>
        </div>
    )
}

export default AsteroidTracker