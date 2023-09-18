import Loader from "../../components/loader/Loader"
import { useApod } from "../../hooks/apod"
import ErrorMessage from "../../components/error/ErrorMessage"
import styles from './Apod.module.scss'

const Apod = () => {
    const {apod, error, loading} = useApod()

    console.log(apod)

    return (
        <div className={styles.container}>
            <h1 className="visually-hidden">Astronomy Picture of the Day</h1>
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {apod && 
                <div className={styles.wrapper}>
                    <div className={styles.media}>
                        {apod.media_type === 'video' ? 
                            // eslint-disable-next-line jsx-a11y/iframe-has-title
                            <iframe width='600'height='400' src={apod.url} frameBorder='0' allowFullScreen/>
                            :
                            <img src={apod.url} alt="Apod" />
                        }
                    </div>
                    <span> Date: {apod.date}</span>
                    <h2>{apod.title}</h2>
                    <p>{apod.explanation}</p>
                </div>
            }
        </div>
    )
}


export default Apod