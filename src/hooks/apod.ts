import { useEffect, useState } from "react"
import { ApodType } from "../types/types"
import axios, {AxiosError} from "axios"

export const useApod = () => {
    const [apod, setApod] = useState<ApodType>({
        date: '',
        explanation: '',
        hdurl: '',
        media_type: '',
        service_version: '',
        title: '',
        url: ''
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchApod = async () => {
        try {
            setError('')
            setLoading(true)

            const response = await axios.get<ApodType>('https://api.nasa.gov/planetary/apod?api_key=iDzOJrUi4qXVnk7r204S0pGDrqhp9sERcCZZnEHz')
            setApod(response.data)
            
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchApod()
    }, [])

    return {apod, error, loading}
}
