import { createSlice } from "@reduxjs/toolkit"
import { Asteroid } from "../types/types"

const initialState = {
    asteroidsLink: 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=iDzOJrUi4qXVnk7r204S0pGDrqhp9sERcCZZnEHz' as string,
    traceable: [] as Asteroid[]
}

export const asteroidSlice = createSlice({
    name: 'asteroidsLink',
    initialState,
    reducers: {
        setLink: (state, action) => {
            state.asteroidsLink = action.payload
        },
        addTrack: (state, action) => {
            state.traceable.push(action.payload)
        },
        removeTrack: (state, action) => {
            state.traceable = state.traceable.filter((item) => item.id !== action.payload)
        }
    }
})

export const {setLink, addTrack, removeTrack} = asteroidSlice.actions
export default asteroidSlice