import axios, {AxiosError} from 'axios'
import { useState, useEffect } from "react"
import { AsteroidType } from '../types/types'
import { useAppSelector, useAppDispatch } from './appHooks'
import { setLink, addTrack, removeTrack } from '../slices/asteroidSlice'

export const useAsteroids = () => {
    const [asteroids, setAsteroids] = useState<AsteroidType[] | null> (null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
 
    const dispatch = useAppDispatch()
    
    const link = useAppSelector(state => state.asteroid.asteroidsLink)
    const trackedAsteroids = useAppSelector(state => state.asteroid.traceable)

    const checkAdded = (item: AsteroidType): boolean => {
        if (trackedAsteroids.find(i => i.id === item.id)) {
            return true
        } 
        return false
    }

    const [nextLink, setNextLink] = useState('')
    const [prevLink, setPrevLink] = useState('')

    const nextLinkHandler = () => {
        dispatch(setLink(nextLink))
    }

    const prevLinkHandler = () => {
        dispatch(setLink(prevLink))
    }

    const toggleTrackHandler = (item: AsteroidType) => {
        if (checkAdded(item)) {
            dispatch(removeTrack(item.id))
        } else {
            dispatch(addTrack(item))
        }
    }

    const fetchAsteroids = async () => {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get(link)
            setAsteroids(response.data.near_earth_objects)

            response.data.links.next ? setNextLink(response.data.links.next.replace(/http/gi, 'https')) : setNextLink('')
            response.data.links.prev ? setPrevLink(response.data.links.next.replace(/http/gi, 'https')) : setPrevLink('')

            console.log(response.data)
            
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchAsteroids()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [link])

    return {asteroids, loading, error, nextLink, prevLink, nextLinkHandler, prevLinkHandler, toggleTrackHandler, checkAdded}
}

