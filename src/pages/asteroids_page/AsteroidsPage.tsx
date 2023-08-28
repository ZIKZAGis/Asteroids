import ErrorMessage from "../../components/error/ErrorMessage"
import Loader from "../../components/loader/Loader"
import { useAsteroids } from "../../hooks/asteroids"
import type { CloseApproachDataType } from "../../types/types"

const AsteroidsPage = () => {
    const {asteroids, loading, error, prevLink, nextLink, nextLinkHandler, prevLinkHandler} = useAsteroids()

        const getNearest = (dateArr: CloseApproachDataType[]) => {
            const now = Date.now()
            const max = dateArr.filter((date: any) => date.epoch_date_close_approach > now)
            const nearestDate = new Date (max[0].epoch_date_close_approach)
            return nearestDate.toLocaleDateString()
        }

    return (
        <>
            {error && <ErrorMessage error={error}/>}
            {asteroids && asteroids.map((asteroid) => (
                <div key={asteroid.id}>
                    <div>{asteroid.name_limited ? asteroid.name_limited : asteroid.name}</div>
                    <div style={asteroid.is_potentially_hazardous_asteroid ? {color: 'red'} : {color: 'green'}}>{asteroid.is_potentially_hazardous_asteroid ? 'опасный': 'безопасный'}</div>
                    <div>
                        <div>Diameter Max - {Math.round(asteroid.estimated_diameter.meters.estimated_diameter_max)}m</div>
                        <div>Diameter Min - {Math.round(asteroid.estimated_diameter.meters.estimated_diameter_min)}m</div>
                    </div>
                    <div>
                        Ближайший подлёт астероида - {getNearest(asteroid.close_approach_data)}
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