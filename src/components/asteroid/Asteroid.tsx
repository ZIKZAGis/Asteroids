import { AsteroidType, CloseApproachDataType } from "../../types/types"
import { GiAsteroid } from "react-icons/gi"
import styles from './Asteroid.module.scss'
import {CgDanger} from 'react-icons/cg'
import {AiOutlineSmile} from 'react-icons/ai'
import {VscTriangleLeft, VscTriangleRight} from 'react-icons/vsc'

type PropsType = {
    asteroid: AsteroidType
    toggle: (asteroid: AsteroidType) => void
    check: (asteroid: AsteroidType) => boolean
}

const getDiameter = (asteroid: AsteroidType) => {
    return Math.round((asteroid.estimated_diameter.meters.estimated_diameter_min + asteroid.estimated_diameter.meters.estimated_diameter_min) / 2) 
}

const getAsteroidSize = (size: number) => {
    if (size < 200) return 30
    else if (size > 200 && size < 800) return 40
    else if (size > 800 && size < 1500) return 50
    else if (size > 1500 && size < 2500) return 60
    else return 70
}

const getNearest = (dateArr: CloseApproachDataType[]) => {
    const now = Date.now()
    const nearest = dateArr.filter((date: any) => date.epoch_date_close_approach > now)
    const date = new Date (nearest[0].epoch_date_close_approach).toLocaleDateString()
    const distance = new Intl.NumberFormat('ru-RU').format(Math.round(+nearest[0].miss_distance.kilometers))
    return {date, distance}
}

const Asteroid = ({asteroid, toggle, check}: PropsType) => {
    return (
        <>
            <div key={asteroid.id} className={styles.wrapper}>
                <div className={styles.name}>{asteroid.name_limited ? asteroid.name_limited : asteroid.name}</div>
                <div className={styles.data}>
                    <div className={styles.distance}>
                        <p>{getNearest(asteroid.close_approach_data).distance} km</p>
                        <div className={styles.arrow}>
                            <VscTriangleLeft className={styles.left}/>
                            <VscTriangleRight className={styles.right}/>
                        </div>
                    </div>
                    <div className={styles.size}>
                        <GiAsteroid size={getAsteroidSize(getDiameter(asteroid))}/>
                    </div>
                    <div className={styles.diameter}>
                        <div className={styles.diameter_icon}></div>
                        <p>{getDiameter(asteroid)} m</p>
                    </div>
                </div>
                <div className={styles.date}>
                    <p>Closest approach - {getNearest(asteroid.close_approach_data).date}</p>
                </div>

                <div className={styles.bottom}>
                    <button className={styles.track_button} type="button" onClick={() => toggle(asteroid)}>{check(asteroid) ? 'Remove track' : 'Add track'}</button>
                    <div className={styles.danger} style={asteroid.is_potentially_hazardous_asteroid ? {color: 'red', fontWeight: 'bold'} : {color: 'white'}}>
                        {asteroid.is_potentially_hazardous_asteroid ? 
                            <div>
                                Dangerous  <CgDanger/>
                            </div>
                            :
                            <div>
                                Not dangerous  <AiOutlineSmile/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Asteroid