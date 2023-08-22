import ErrorMessage from "../../components/error/ErrorMessage"
import Loader from "../../components/loader/Loader"
import { useAsteroids } from "../../hooks/asteroids"

const AsteroidsPage = () => {
    const {asteroids, loading, error} = useAsteroids()

    return (
        <>
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {asteroids && asteroids.map((asteroid) => (
                <div key={asteroid.id}>
                    <div>{asteroid.name_limited}</div>
                    <div></div>
                </div>
            ))}
        </>
    )
}

export default AsteroidsPage