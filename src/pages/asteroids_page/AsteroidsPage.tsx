import {useState} from 'react'
import ErrorMessage from "../../components/error/ErrorMessage"
import Loader from "../../components/loader/Loader"
import { useAsteroids } from "../../hooks/asteroids"
import {GiAsteroid} from 'react-icons/gi'
import type { Asteroid, CloseApproachDataType } from "../../types/types"
import { useAppSelector } from "../../hooks/appHooks"

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

    const getNearest = (dateArr: CloseApproachDataType[]) => {
        const now = Date.now()
        const nearest = dateArr.filter((date: any) => date.epoch_date_close_approach > now)
        const date = new Date (nearest[0].epoch_date_close_approach).toLocaleDateString()
        const distance = new Intl.NumberFormat('ru-RU').format(Math.round(+nearest[0].miss_distance.kilometers))
        return {date, distance}
    }

    const getDiameter = (asteroid: Asteroid) => {
        return Math.round((asteroid.estimated_diameter.meters.estimated_diameter_min + asteroid.estimated_diameter.meters.estimated_diameter_min) / 2) 
    }

    const getAsteroidSize = (size: number) => {
        if (size < 200) return 30
        else if (size > 200 && size < 800) return 40
        else if (size > 800 && size < 1500) return 50
        else if (size > 1500 && size < 2500) return 60
        else return 70
    }

    const toggleHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
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
                <button type="button" onClick={() => toggleHandler()}>{isOpen ?  'свернуть' : 'показать отслеживаемые'}</button>
            </div>
            {asteroids && asteroids.map((asteroid) => (
                <div key={asteroid.id} style={{padding: '10px'}}>
                    <div>{asteroid.name_limited ? asteroid.name_limited : asteroid.name}</div>
                    <div style={asteroid.is_potentially_hazardous_asteroid ? {color: 'red'} : {color: 'green'}}>{asteroid.is_potentially_hazardous_asteroid ? 'опасный': 'безопасный'}</div>
                    <div>
                        <GiAsteroid size={getAsteroidSize(getDiameter(asteroid))}/>
                    </div>
                    <div>
                        Diameter {getDiameter(asteroid)} m
                    </div>
                    <div>
                        Closest approach - {getNearest(asteroid.close_approach_data).date}
                    </div>
                    <div>
                        Approach distance - {getNearest(asteroid.close_approach_data).distance} km
                    </div>
                    <button type="button" onClick={() => toggleTrackHandler(asteroid)}>{checkAdded(asteroid) ? 'Remove track' : 'Add track'}</button>
                </div>
            ))}
            {loading && <Loader/>}
            <div>
                <button type="button" onClick={() => prevLinkHandler()} disabled={prevLink ? false : true}>Назад</button>
                <button type="button" onClick={() => nextLinkHandler()} disabled={nextLink ? false : true}>Вперёд</button>
            </div>
        </>
    )
}

export default AsteroidsPage