import ErrorMessage from "../../components/error/ErrorMessage"
import Loader from "../../components/loader/Loader"
import { useAsteroids } from "../../hooks/asteroids"

const AsteroidsPage = () => {
    const {asteroids, loading, error, prevLink, nextLink, nextLinkHandler, prevLinkHandler} = useAsteroids()

    return (
        <>
            {error && <ErrorMessage error={error}/>}
            {asteroids && asteroids.map((asteroid) => (
                <div key={asteroid.id}>
                    <div>{asteroid.name}</div>
                </div>
            ))}
            {loading && <Loader/>}
            <button type="button" onClick={() => prevLinkHandler()} disabled={prevLink ? false : true}>Prev Page</button>
            <button type="button" onClick={() => nextLinkHandler()} disabled={nextLink ? false : true}>Next Page</button>
        </>
    )
}

export default AsteroidsPage