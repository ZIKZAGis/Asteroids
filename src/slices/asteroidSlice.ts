import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    asteroidsLink: 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=iDzOJrUi4qXVnk7r204S0pGDrqhp9sERcCZZnEHz'
}

export const asteroidSlice = createSlice({
    name: 'asteroidsLink',
    initialState,
    reducers: {
        setLink: (state, action) => {
            state.asteroidsLink = action.payload
        },
    }
})

export const {setLink} = asteroidSlice.actions
export default asteroidSlice