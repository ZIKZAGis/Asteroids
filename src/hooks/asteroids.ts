import axios, {AxiosError} from 'axios'
import { useState, useEffect } from "react"
import { Asteroid } from '../types/types'

const API_KEY = 'iDzOJrUi4qXVnk7r204S0pGDrqhp9sERcCZZnEHz'

export const useAsteroids = () => {
    const [asteroids, setAsteroids] = useState<Asteroid[] | null> (null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    // const [nextLink, setNextLink] = useState('')
    // const [prevLink, setPrevLink] = useState('')
    // const [pageInfo, setPageInfo] = useState('')

    const fetchAsteroids = async () => {
        try {
            setError('')
            setLoading(true)

            const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`)
            setAsteroids(response.data.near_earth_objects)
            console.log(response.data)
            
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchAsteroids()
    }, [])

    return {asteroids, loading, error}
}

