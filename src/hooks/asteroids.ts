import axios, {AxiosError} from 'axios'
import { useState, useEffect } from "react"
import { Asteroid } from '../types/types'
import { useAppSelector, useAppDispatch } from './appHooks'
import { setLink } from '../slices/asteroidSlice'

export const useAsteroids = () => {
    const [asteroids, setAsteroids] = useState<Asteroid[] | null> (null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const dispatch = useAppDispatch()
    const link = useAppSelector(state => state.asteroid.asteroidsLink)

    const [nextLink, setNextLink] = useState('')
    const [prevLink, setPrevLink] = useState('')

    const nextLinkHandler = () => {
        dispatch(setLink(nextLink))
    }

    const prevLinkHandler = () => {
        dispatch(setLink(prevLink))
    }

    const fetchAsteroids = async () => {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get(link)
            setAsteroids(response.data.near_earth_objects)
            
            response.data.links.next ? setNextLink(response.data.links.next) : setNextLink('')
            response.data.links.prev ? setPrevLink(response.data.links.prev) : setPrevLink('')
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [link])

    return {asteroids, loading, error, nextLink, prevLink, nextLinkHandler, prevLinkHandler}
}

