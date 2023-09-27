import {useEffect, useState} from 'react'
import Button from '../../components/button/Button'
import { useAppSelector } from "../../hooks/appHooks"
import styles from './AsteroidTracker.module.scss'
import {TiDeleteOutline} from 'react-icons/ti'
import { AsteroidType } from '../../types/types'

type PropsType = {
    remove: (asteroid: AsteroidType) => void
}

const AsteroidTracker = ({remove}: PropsType) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleHandler = () => {
        setIsOpen(!isOpen)
    }
    const trackedAsteroids = useAppSelector(state => state.asteroid.traceable)

    useEffect(() => {
        (trackedAsteroids.length < 1) && setIsOpen(false)
    }, [trackedAsteroids.length])

    return (
        <div className={styles.wrapper}>
            <div>
                <div className={styles.inner_wrapper}>
                    <p>Tracked asteroids</p>
                    {isOpen && 
                        <div className={styles.tracked}>
                            {trackedAsteroids.map(item => (
                                <div key={item.id}>
                                    <a href={item.nasa_jpl_url}>
                                        {item.name_limited ? item.name_limited : item.name}
                                    </a>
                                    <button onClick={() => remove(item)}>
                                        <TiDeleteOutline/>
                                    </button>
                                </div>
                            ))}
                        </div>
                    }
                    <div className={styles.bottom}>
                        {trackedAsteroids.length >= 1 ? 
                            <Button fn={toggleHandler} description={
                                isOpen
                                ?
                                `Hide (${trackedAsteroids.length})`
                                :
                                `${trackedAsteroids.length} tracked`}
                            />
                            :
                            <div>nothing traceable</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AsteroidTracker