import Loader from "../../components/loader/Loader"
import { useApod } from "../../hooks/apod"
import ErrorMessage from "../../components/error/ErrorMessage"

const Apod = () => {
    const {apod, error, loading} = useApod()

    return (
        <>
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {apod && 
                <div>
                    <img src={apod.url} alt="" />
                    <p>{apod.date}</p>
                    <h2>{apod.title}</h2>
                    <h3>{apod.explanation}</h3>
                </div>
            }
        </>
    )
}


export default Apod