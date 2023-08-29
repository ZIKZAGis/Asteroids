import ErrorMessage from "../../components/error/ErrorMessage"
import Loader from "../../components/loader/Loader"
import { useAsteroids } from "../../hooks/asteroids"
import {GiAsteroid} from 'react-icons/gi'
import type { Asteroid, CloseApproachDataType } from "../../types/types"

const AsteroidsPage = () => {
    const {asteroids, loading, error, prevLink, nextLink, nextLinkHandler, prevLinkHandler} = useAsteroids()

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

    return (
        <>
            {error && <ErrorMessage error={error}/>}
            {asteroids && asteroids.map((asteroid) => (
                <div key={asteroid.id} style={{padding: '10px'}}>
                    <div>{asteroid.name_limited ? asteroid.name_limited : asteroid.name}</div>
                    <div style={asteroid.is_potentially_hazardous_asteroid ? {color: 'red'} : {color: 'green'}}>{asteroid.is_potentially_hazardous_asteroid ? 'опасный': 'безопасный'}</div>
                    <div>
                        <GiAsteroid size={getAsteroidSize(getDiameter(asteroid))}/>
                    </div>
                    <div>
                        Диаметр {getDiameter(asteroid)}м
                    </div>
                    <div>
                        Ближайший подлёт астероида - {getNearest(asteroid.close_approach_data).date}
                    </div>
                    <div>
                        Дистанция сближения - {getNearest(asteroid.close_approach_data).distance} km
                    </div>
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